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
  skipTests: !isFlag("--no-skipTests"),
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
  /select[45]\.test/  // exclude select4.test and select5.test by default
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

// Stats
const format = v => numeral(v).format("0,0");
const score = {
  ok: 0,
  fail: 0,
  skip: 0,
  assumedOk: 0,
  hidden: 0,
};

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

// Create persistent worker pool
const workerPool = [];
for (let i = 0; i < concurrency; i++) {
  const worker = new Worker(new URL("./worker.js", import.meta.url).href, { type: "module" });
  workerPool.push({ worker, busy: false });
}

// Job dispatcher
function dispatchNext() {
  for (const slot of workerPool) {
    if (!slot.busy && pending.length > 0) {
      const job = pending.shift();
      slot.busy = true;
      runWorkerJob(slot, job, done + 1, jobs.length).finally(() => {
        slot.busy = false;
        done++;
        
        // Try to dispatch more work if available
        if (pending.length > 0) {
          dispatchNext();
        }
        
        // Check if all work is complete: no pending jobs AND all workers idle
        if (pending.length === 0 && workerPool.every(s => !s.busy)) {
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
  const result = await new Promise((resolve, reject) => {
    const handler = (ev) => {
      // with --progress the worker sends its lines as it writes them, the start and end of each test, then the result
      if (ev.data && (ev.data.progress !== undefined || ev.data.start || ev.data.end || ev.data.fileEnd)) {
        progressMessage(slot, ev.data);
        return;
      }
      slot.worker.removeEventListener("message", handler);
      resolve(ev.data);
    };
    slot.worker.addEventListener("message", handler);
    slot.worker.onerror = (e) => {
      reject(e);
    };
    slot.worker.postMessage(payload);
  });
  if (result && result.output && result.output.length) {
    // Print grouped output for this one test
    console.log(result.output);
  }
  score.ok += result.ok || 0;
  score.fail += result.fail || 0;
  score.skip += result.skip || 0;
  if (config.debug && result.failures && result.failures.length) {
    fs.appendFileSync(debugPath, result.failures.map(f => JSON.stringify(f)).join("\n") + "\n");
  }
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
  console.log("Total script time: " + ((performance.now() - started) / 1000).toFixed(1) + "s");
  console.log("");
  console.log("_Please note that repetetive errors are not always printed again_");
}

// Start dispatching jobs
if (jobs.length === 0) {
  // Handle edge case where there are no jobs at all
  finish();
} else {
  dispatchNext();
}
