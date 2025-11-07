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
import alasql from "alasql";

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
  include: getArg("--include", ""),
  exclude: getArg("--exclude", ""),
  mimic: (getArg("--mimic", "sqlite") || "sqlite").split(",").map(s => s.trim()).filter(Boolean),
  concurrency: Math.max(1, Number(getArg("--concurrency", String(Bun.availableParallelism?.() || 4)))) ,
  quiet: isFlag("--quiet") || isFlag("--summary-only"),
};

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
console.time("Total script time");
console.log("# SQLlogictest " + (config.onlyParseSql ? " compile " : "") + "results for AlaSQL (Bun runtime, workers)\n");
console.log("`" + new Date().toISOString() + " (Bun " + Bun.version + ")`");
if (!config.runOnlyDemo && testfiles.length < 622) {
  console.log("This is a subset of the total 622 tests.");
}
console.log("Results from " + testfiles.length + " test files\n");

// Stats
const format = v => numeral(v).format("0,0");
const score = {
  ok: 0,
  fail: 0,
  skip: 0,
  assumedOk: 0,
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
        if (!config.quiet) {
          // print a compact assumed line immediately
          console.log('`' + m + ' ' + match[1] + ' OK: ' + file + '`');
        }
        skipped = true;
      }
    }
    if (!skipped) jobs.push({ file, mimic: m });
  }
}

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
      genParserPath: genParserUrl,
      projectRoot,
    },
  };
  const result = await new Promise((resolve, reject) => {
    const handler = (ev) => {
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
  console.timeEnd("Total script time");
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
