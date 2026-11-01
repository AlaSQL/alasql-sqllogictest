/**
 * Parallel test runner using persistent worker pool
 * 
 * Architecture:
 * - Creates N workers upfront (configurable via --concurrency)
 * - Workers are reused across multiple test files
 * - Each worker maintains isolated AlaSQL state (reset per job)
 * - PEG parser is generated once at startup and shared via file URL
 * - Test output is buffered per-file to avoid interleaving
 * - Workers terminate gracefully when all jobs complete
 */
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import numeral from "numeral";
import PEG from "peggy";
// ALASQL=/path/to/dist/alasql.fs.js tests another build (for example develop); default is the npm package
const alasql = require(process.env.ALASQL ? path.resolve(process.env.ALASQL) : "alasql");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

// CLI args
const args = Bun.argv.slice(2);
const getArg = (name, def = undefined) => {
  const ix = args.findIndex(a => a === name || a.startsWith(name + "="));
  if (ix === -1) return def;
  const a = args[ix];
  const eq = a.indexOf("=");
  if (eq !== -1) return a.slice(eq + 1);
  const v = args[ix + 1];
  if (!v || v.startsWith("--")) return true;
  return v;
};

const isFlag = name => args.includes(name);

const config = {
  runOnlyDemo: isFlag("--demo"),
  onlyParseSql: isFlag("--onlyParseSql") || isFlag("--light"),
  printAllErrors: isFlag("--printAllErrors"),
  curiousErrorprinting: Number(getArg("--curiousErrorprinting", "0.0003")),
  truncSQLStatement: Number(getArg("--truncSQLStatement", "300")),
  // --force-all-tests: all 622 files, also select4.test, select5.test and the files in skipTests.line
  forceAllTests: isFlag("--force-all-tests"),
  skipTests: !isFlag("--no-skipTests") && !isFlag("--force-all-tests"),
  skipTestsFile: path.resolve(projectRoot, "skipTests.line"),
  // --only-run=test/evidence/in1.test[,other.test]: exactly these files, ignoring --include, --exclude,
  // the select4/select5 exclusion and skipTests.line
  onlyRun: getArg("--only-run", ""),
  include: getArg("--include", ""),
  exclude: getArg("--exclude", ""),
  mimic: (getArg("--mimic", "sqlite") || "sqlite").split(",").map(s => s.trim()).filter(Boolean),
  concurrency: Math.max(1, Number(getArg("--concurrency", String(Bun.availableParallelism?.() || 4)))) ,
  quiet: isFlag("--quiet") || isFlag("--summary-only"),
  // --debug: also write every failure as one JSON line (full SQL) to results/debug.jsonl
  debug: isFlag("--debug"),
  // --progress: print each test as it runs (pass or fail, time in ms, SQL) instead of a file's section when
  // the file is done; one worker unless --concurrency is given, so the lines of files do not mix
  progress: isFlag("--progress"),
  // --ignore-under-ms=N: with --progress, leave out the tests that took less than N ms (turns --progress on)
  ignoreUnderMs: Number(getArg("--ignore-under-ms", "0")) || 0,
  // --query-time-limit-ms=N: stop a test that runs longer than N ms; it counts as failed and its file goes on
  queryTimeLimitMs: Number(getArg("--query-time-limit-ms", "0")) || 0,
  // --query-kill-counter-max=N: end the run when N tests have been stopped by --query-time-limit-ms
  queryKillCounterMax: Number(getArg("--query-kill-counter-max", "0")) || 0,
};
if (config.ignoreUnderMs > 0) config.progress = true;
if (config.progress && getArg("--concurrency") === undefined) config.concurrency = 1;

// Ensure deterministic walk order
function walkFiles(dir, reYes, reNo) {
  reYes = reYes || false;
  reNo = reNo || false;
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    for (const fileName of list) {
      const file = dir + "/" + fileName;
      if (reNo && reNo.test(file)) continue;
      const stat = fs.statSync(file);
      if (stat && stat.isDirectory()) {
        results = results.concat(walkFiles(file, reYes, reNo));
      } else {
        if (reYes && !reYes.test(file)) continue;
        results.push(file);
      }
    }
  } catch {
    // ignore
  }
  return results.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
}

// Build testfiles - same default exclusions as bun-run
let testfiles = walkFiles(
  path.resolve(projectRoot, "./test"),
  /\.test$/,
  config.forceAllTests ? false : /select[45]\.test/  // exclude select4.test and select5.test by default
);

if (config.runOnlyDemo) {
  testfiles = [path.resolve(projectRoot, "./demo.test")];
}
if (config.onlyRun) {
  if (config.onlyRun === true) {
    console.error("--only-run needs a file: --only-run=test/evidence/in1.test");
    process.exit(1);
  }
  testfiles = config.onlyRun.split(",").map(f => path.resolve(projectRoot, f.trim()));
  const missing = testfiles.filter(f => !fs.existsSync(f));
  if (missing.length) {
    console.error("No such test file: " + missing.join(", "));
    process.exit(1);
  }
  config.include = config.exclude = "";
  config.skipTests = false;
}
// Include/exclude filters (treat as regex if provided)
if (config.include) {
  const re = new RegExp(config.include);
  testfiles = testfiles.filter(f => re.test(f));
}
if (config.exclude) {
  const re = new RegExp(config.exclude);
  testfiles = testfiles.filter(f => !re.test(f));
}

// Read skipTests content
let skipTestsContent = "";
if (config.skipTests) {
  try { skipTestsContent = fs.readFileSync(config.skipTestsFile, "utf8"); } catch {}
}

// Prepare parser module for workers: generate on startup so workers just import it
const genDir = path.resolve(__dirname, ".generated");
const genParserPath = path.resolve(genDir, "parser.mjs");
const genParserUrl = pathToFileURL(genParserPath).href;
function ensureParserModule() {
  fs.mkdirSync(genDir, { recursive: true });
  const parserPegPath = path.resolve(projectRoot, "parser.peg");
  const pegSource = fs.readFileSync(parserPegPath, "ascii");
  const source = PEG.generate(pegSource, { output: "source", format: "es" });
  // Peggy outputs a module that defines `parser` and exports default
  fs.writeFileSync(genParserPath, source, "utf8");
}
ensureParserModule();

// Header
// One file per run, replaced each time (gitignored), written only by this process
const debugPath = path.resolve(projectRoot, "results/debug.jsonl");
if (config.debug) fs.writeFileSync(debugPath, "");

// console.time writes to stderr, which yarn test does not put in results/output.md
const started = performance.now();
console.log("# SQLlogictest " + (config.onlyParseSql ? " compile " : "") + "results for AlaSQL\n");
console.log("`" + new Date().toISOString() + " target: alasql@" + alasql.version + "`\n");
if (!config.runOnlyDemo && testfiles.length < 622) {
  console.log("This is a subset of the total 622 tests.");
}
console.log("Results from " + testfiles.length + " test files:\n");
// what the report shows: with --progress each test as it runs, without the fast ones when --ignore-under-ms is set
if (config.progress) {
  console.log("_Progress: each test is printed as it runs, with the time it took" + (config.ignoreUnderMs > 0 ? "; only tests that took " + config.ignoreUnderMs + " ms or more are printed (a group of setup statements by its total time). Failures are printed as usual._" : "._") + "\n");
}
if (config.queryTimeLimitMs > 0) {
  console.log("_Time limit: a test that runs longer than " + config.queryTimeLimitMs + " ms is stopped and counted as failed, and the rest of its file runs" + (config.queryKillCounterMax > 0 ? "; the run ends when " + config.queryKillCounterMax + " tests have been stopped" : "") + "._\n");
}

// Stats
const format = v => numeral(v).format("0,0");
const score = {
  ok: 0,
  fail: 0,
  skip: 0,
  assumedOk: 0,
  hidden: 0,
};
// the tests stopped by --query-time-limit-ms: file and SQL
const stoppedTests = [];
// the files whose worker crashed: file and error
const crashedFiles = [];
let runEnded = false;

// Build jobs (file x mimic), apply skip fast-path
const jobs = [];
for (const file of testfiles) {
  for (const m of config.mimic) {
    let skipped = false;
    if (config.skipTests && skipTestsContent) {
      // Convert absolute path to relative path for matching against skipTests.line
      // skipTests.line uses format: ./test/index/...
      const relativePath = "./" + path.relative(projectRoot, file).replace(/\\/g, '/');
      const re = new RegExp(m + ' (\\d+) OK: ' + relativePath.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&'));
      const match = re.exec(skipTestsContent);
      if (match) {
        score.assumedOk += (+match[1]);
        // Don't print skip lines - they clutter the output
        skipped = true;
      }
    }
    if (!skipped) jobs.push({ file, mimic: m });
  }
}

// Largest files first, so no big file starts last and keeps the run going while the other workers idle
jobs.sort((a, b) => fs.statSync(b.file).size - fs.statSync(a.file).size);

// Worker pool with reuse
const concurrency = config.concurrency;
const pending = [...jobs];
let done = 0;
let startedJobs = 0;

// Create persistent worker pool
const workerPool = [];
const newWorker = () => new Worker(new URL("./worker.js", import.meta.url).href, { type: "module" });
for (let i = 0; i < concurrency; i++) {
  workerPool.push({ worker: newWorker(), busy: false });
}

// Job dispatcher
function dispatchNext() {
  for (const slot of workerPool) {
    if (!slot.busy && pending.length > 0 && !runEnded) {
      const job = pending.shift();
      slot.busy = true;
      // numbered in the order the files start (files that start together would share done + 1)
      runWorkerJob(slot, job, ++startedJobs, jobs.length).finally(() => {
        slot.busy = false;
        done++;
        
        // Try to dispatch more work if available
        if (pending.length > 0) {
          dispatchNext();
        }
        
        // Check if all work is complete: no pending jobs AND all workers idle
        if (!runEnded && pending.length === 0 && workerPool.every(s => !s.busy)) {
          finish();
        }
      });
    }
  }
}

// --progress. The worker cannot print while AlaSQL runs (that blocks its thread), so it reports the start and the
// end of each test and this thread prints: the SQL at once (or, with --ignore-under-ms, once the test has run that
// long), then the result and the time when it ends. A statement that stalls the run is the last line, without a
// time. Setup statements that run fast are summed up in one line per group.
const write = text => process.stdout.write(text);
const msText = ms => (ms < 10 ? ms.toFixed(1) : String(Math.round(ms)));
const trunc = (str, n) => (n < 2 || str.length <= n ? str : str.slice(0, n - 1) + "…");
function progressMessage(slot, m) {
  const p = (slot.progress ||= { open: false, test: null, timer: null, setup: { n: 0, ms: 0 } });
  const under = config.ignoreUnderMs;
  // a group of fast setup statements becomes one line before anything else is printed
  const flushSetup = () => {
    if (p.setup.n) {
      if (p.setup.ms >= under) write("- " + format(p.setup.n) + " setup statement" + (p.setup.n === 1 ? "" : "s") + " ✓ " + msText(p.setup.ms) + " ms\n");
      else score.hidden += p.setup.n;
    }
    p.setup = { n: 0, ms: 0 };
  };
  const showSql = () => {
    if (!p.test || p.test.shown) return;
    flushSetup();
    write("- `" + trunc(p.test.sql.replace(/\s+/g, " "), config.truncSQLStatement).replace(/`/g, "'") + "`");
    p.test.shown = true;
    p.open = true;
  };
  if (m.progress !== undefined) {
    // a line of the report (a heading, a failure block, the file's summary)
    if (p.open) write("\n"), (p.open = false);
    flushSetup();
    write(m.progress + "\n");
  } else if (m.start) {
    p.test = { sql: m.sql || "", setup: m.setup, shown: false };
    if (under > 0) p.timer = setTimeout(showSql, under);
    else if (!m.setup) showSql();
  } else if (m.end) {
    clearTimeout(p.timer);
    const t = p.test;
    p.test = null;
    if (!t) return;
    const result = " " + (m.ok ? "✓" : "☓") + " " + msText(m.ms) + " ms" + (m.ok ? "" : " => " + trunc(m.msg, config.truncSQLStatement));
    if (t.shown) {
      write(result + "\n");
      p.open = false;
    } else if (t.setup && m.ok && (under === 0 || m.ms < under)) {
      // a fast setup statement: counted into its group's line
      p.setup.n++;
      p.setup.ms += m.ms;
    } else if (m.ms >= under) {
      // the test ended just as its time was up, before the timer printed the SQL
      p.test = t;
      showSql();
      p.test = null;
      write(result + "\n");
      p.open = false;
    } else score.hidden++;
  } else if (m.stopped) {
    // --query-time-limit-ms stopped the test: its SQL is printed even when it is under --ignore-under-ms
    clearTimeout(p.timer);
    if (!p.test) return;
    showSql();
    p.test = null;
    write(" ☓ stopped after " + msText(m.ms) + " ms\n");
    p.open = false;
  } else if (m.fileEnd) {
    if (p.open) write("\n"), (p.open = false);
    flushSetup();
  }
}

async function runWorkerJob(slot, job, fileIndex, totalFiles) {
  const payload = {
    file: job.file,
    mimic: job.mimic,
    fileIndex,
    totalFiles,
    options: {
      onlyParseSql: config.onlyParseSql,
      printAllErrors: config.printAllErrors,
      curiousErrorprinting: config.curiousErrorprinting,
      truncSQLStatement: config.truncSQLStatement,
      quiet: config.quiet,
      debug: config.debug,
      progress: config.progress,
      ignoreUnderMs: config.ignoreUnderMs,
      genParserPath: genParserUrl,
      projectRoot,
    },
  };
  // the file's section (without --progress), kept until the file is done, and its failures for results/debug.jsonl,
  // written in batches so a file with many failures does not fill the memory
  slot.out = [];
  let failures = [];
  const flushFailures = () => {
    if (config.debug && failures.length) fs.appendFileSync(debugPath, failures.map(f => JSON.stringify(f)).join("\n") + "\n");
    failures = [];
  };
  const startedAt = Date.now();
  // a test that runs longer than --query-time-limit-ms: the worker is replaced and runs the file again from the
  // test after it (payload.resume); a statement stopped while it runs again only builds data, so it is not counted
  let result;
  for (;;) {
    result = await new Promise((resolve) => {
      let timer = null;
      let current = null;
      // the worker is replaced when it is stopped or when it crashes (an error in AlaSQL that is not caught, or
      // out of memory), so the run goes on with the next file
      const replace = (out) => {
        clearTimeout(timer);
        slot.worker.removeEventListener("message", handler);
        slot.worker.onerror = null;
        slot.worker.terminate();
        slot.worker = newWorker();
        resolve(out);
      };
      const stop = () => replace({ stoppedAt: current });
      const handler = (ev) => {
        const m = ev.data;
        if (m && (m.start || m.end)) {
          clearTimeout(timer);
          if (m.start) {
            current = m;
            if (config.queryTimeLimitMs > 0) timer = setTimeout(stop, config.queryTimeLimitMs);
          }
          if (config.progress && !m.quiet) progressMessage(slot, m);
          return;
        }
        if (m && m.failure) {
          failures.push(m.failure);
          if (failures.length >= 500) flushFailures();
          return;
        }
        if (m && (m.progress !== undefined || m.fileEnd)) {
          if (config.progress) progressMessage(slot, m);
          else if (m.progress !== undefined) slot.out.push(m.progress);
          return;
        }
        clearTimeout(timer);
        slot.worker.removeEventListener("message", handler);
        resolve(m);
      };
      slot.worker.addEventListener("message", handler);
      slot.worker.onerror = (e) => {
        e.preventDefault?.();
        // Bun's message is a code frame and the stack: the line that names the error is the one to print
        const lines = String((e && e.message) || e).split("\n").map(l => l.trim()).filter(Boolean);
        const msg = lines.find(l => /^(\w*Error|error)\b/.test(l)) || lines.pop() || "no error message";
        replace({ crashed: msg, at: current });
      };
      slot.worker.postMessage(payload);
    });
    if (result.crashed) {
      // the counts so far come with the last test that started; the rest of the file is not run
      const c = (result.at && result.at.counts) || [0, 0, 0];
      const relative = path.relative(projectRoot, job.file);
      crashedFiles.push({ file: relative, msg: result.crashed });
      slot.out.push("", "_The worker crashed in this file (" + result.crashed + "); the rest of the file was not run._", "");
      if (config.progress) progressMessage(slot, { progress: slot.out.splice(0).join("\n") });
      result = { ok: c[0], fail: c[1], skip: c[2] };
      break;
    }
    if (!result.stoppedAt) break;
    const m = result.stoppedAt;
    const relative = path.relative(projectRoot, job.file);
    const before = payload.resume;
    if (m.quiet) {
      // a statement that ran again to build data: skipped from now on
      before.killed.push(m.idx);
    } else {
      if (config.progress) progressMessage(slot, { stopped: true, ms: config.queryTimeLimitMs });
      stoppedTests.push({ file: relative, sql: m.sql });
      payload.resume = {
        idx: m.idx,
        counts: m.counts,
        killed: [...(before ? before.killed : []), m.idx],
        started: before ? before.started : startedAt,
        limit: config.queryTimeLimitMs,
      };
    }
    if (config.queryKillCounterMax > 0 && stoppedTests.length >= config.queryKillCounterMax) {
      // the counts before the last stopped test, and that test as failed
      const c = payload.resume.counts;
      flushFailures();
      endRun([c[0], c[1] + 1, c[2]]);
      return new Promise(() => {}); // the run ends in endRun
    }
  }
  flushFailures();
  if (slot.out.length) {
    // Print grouped output for this one test
    console.log(slot.out.join("\n"));
  }
  slot.out = [];
  score.ok += result.ok || 0;
  score.fail += result.fail || 0;
  score.skip += result.skip || 0;
}

// --query-kill-counter-max reached: the files still running are cut off where they are (their sections so far
// are printed, the stopping file's counts are added) and the run ends with the final result
function endRun(counts) {
  runEnded = true;
  for (const s of workerPool) s.worker.terminate();
  if (!config.progress) for (const s of workerPool) if (s.busy && s.out && s.out.length) console.log(s.out.join("\n"));
  if (config.progress) process.stdout.write("\n");
  console.log("\n_The run was ended here: " + format(stoppedTests.length) + " tests were stopped by the time limit (--query-kill-counter-max=" + config.queryKillCounterMax + "). The files still running are cut off; " + format(pending.length) + " files were not started._");
  score.ok += counts[0];
  score.fail += counts[1];
  score.skip += counts[2];
  finish();
}

function finish() {
  // Terminate all workers
  for (const slot of workerPool) {
    slot.worker.terminate();
  }
  console.log("\n-----------------------------\n");
  console.log("## Final result\n");
  console.log("* `alasql@" + alasql.version + "` (Bun " + Bun.version + ")");
  console.log("* Total tested:", format(score.ok + score.fail + score.skip));
  console.log("* Failed tests:", format(score.fail));
  console.log("* Skipped tests:", format(score.skip));
  if (score.assumedOk) console.log("* Assumed still OK:", format(score.assumedOk));
  const pct = (score.ok + score.assumedOk) === 0 ? 0 : ((100.0 * (score.ok + score.assumedOk) / (score.ok + score.fail + score.skip)) | 0);
  console.log("* Final score:", pct, "% was OK\n");
  if (config.ignoreUnderMs > 0) console.log("* Progress lines not printed (under " + config.ignoreUnderMs + " ms): " + format(score.hidden || 0) + " tests\n");
  if (config.queryTimeLimitMs > 0) {
    console.log("* Tests stopped by the time limit (" + config.queryTimeLimitMs + " ms): " + format(stoppedTests.length) + (stoppedTests.length ? ", counted as failed:" : "") + "\n");
    for (const t of stoppedTests) console.log("  - `" + t.file + "`: `" + trunc(t.sql.replace(/\s+/g, " "), config.truncSQLStatement).replace(/`/g, "'") + "`");
    if (stoppedTests.length) console.log("");
  }
  if (crashedFiles.length) {
    console.log("* Files whose worker crashed (the rest of each file was not run): " + format(crashedFiles.length) + "\n");
    for (const f of crashedFiles) console.log("  - `" + f.file + "`: " + trunc(f.msg, config.truncSQLStatement));
    console.log("");
  }
  console.log("Total script time: " + ((performance.now() - started) / 1000).toFixed(1) + "s");
  console.log("");
  console.log("_Please note that repetetive errors are not always printed again_");
  // a stopped worker may still be busy in AlaSQL and keep the process alive
  process.exit(0);
}

// Start dispatching jobs
if (jobs.length === 0) {
  // Handle edge case where there are no jobs at all
  finish();
} else {
  dispatchNext();
}
