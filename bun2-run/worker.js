import comparray from "comparray";

// The same build as run.js: ALASQL=/path/to/dist/alasql.fs.js, or the npm package
// loaded synchronously: with a top-level await the message listener below would be registered too late
const alasql = require(process.env.ALASQL ? require("path").resolve(process.env.ALASQL) : "alasql");

// Rows as arrays of values, as cleanResults() and the expected results need (the other runners set this too)
alasql.options.modifier = "MATRIX";

// Simple number formatter similar to numeral('0,0')
const fmt = new Intl.NumberFormat('en-US');
const format = (v) => fmt.format(v|0);

function trunc(str, n){
  if(n < 2) return str;
  return (str.length > n) ? str.substr(0, n-1)+'…' : str;
}

async function parseTestFile(path, parser) {
  const file = Bun.file(path);
  const fileContent = await file.text();
  const textCommands = fileContent
    .replace(/#\n/g, "#")
    .replace(/#[^\n]*/g, '')
    .replace(/\r/g, '')
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .split("\n\n");
  const commands = [];
  for (let i = 0; i < textCommands.length; i++) {
    if (textCommands[i] === '') continue;
    try {
      commands.push(parser.parse(textCommands[i] + "\n"));
    } catch (e) {
      commands.push({ command: 'parse_error', idx: i+1, error: e.message, raw: textCommands[i] });
    }
  }
  return commands;
}

// The leading number of a text, as SQLite reads it for an INTEGER or REAL column ('12x' is 12, 'abc' is 0)
const leadingNumber = s => {
  const m = /^\s*[-+]?(\d+\.?\d*|\.\d+)([eE][-+]?\d+)?/.exec(s);
  return m ? Number(m[0]) : 0;
};

// One value as the reference driver (slt_sqlite.c) prints it for its declared column type: I as a whole number
// (column_int64), R with three decimals (column_double), T as text with an empty text as (empty) and control
// characters as @. NULL is NULL for every type.
function asColumnType(x, type){
  if(null === x || undefined === x) return 'NULL';
  // AlaSQL gives NaN or ±Infinity where SQL has NULL (division by zero, an arithmetic NULL)
  if(typeof x === 'number' && !Number.isFinite(x)) return 'NULL';
  if(true === x) x = 1;
  if(false === x) x = 0;
  if('I' === type){
    const n = typeof x === 'number' ? x : leadingNumber(''+x);
    return String(Math.trunc(n));
  }
  if('R' === type){
    const n = typeof x === 'number' ? x : leadingNumber(''+x);
    return n.toFixed(3);
  }
  if('' === x) return '(empty)';
  return (''+x).replace(/[\n\r\t\x00\x08\x0B\x0C\x0E-\x1F\x7F]/gim, '@');
}

function cleanResults(result, sortType, colType){
  if(!result || !result.length || !result[0] || !result[0].length){
    return result;
  }
  for(let i = 0; i < result.length; i++){
    // a query without declared types (or with fewer than its columns) prints the rest as text
    result[i] = result[i].map((x, j) => asColumnType(x, (colType && colType[j]) || 'T'));
  }
  if('rowsort' === sortType){
    // rows compared value by value, as the reference driver does (not as one joined string)
    result.sort((a,b) => {
      for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]) return a[i] > b[i] ? 1 : -1;
      }
      return 0;
    });
  }
  result = [].concat.apply([], result);
  if('valuesort' === sortType){
    result.sort();
  }
  return result;
}

function runTest(sql, db, onlyParseSql){
  sql = sql.replace(/\r|\n/g,' ').replace(/[ ]{2,}/g,' ');
  let result = null;
  try {
    if(onlyParseSql){
      result = alasql.parse(sql);
    } else {
      result = db.exec(sql);
    }
  } catch(err) {
    return {success: false, msg: (err.message || 'no error msg'), sql: sql};
  }
  return { success: true, msg: 'Expected to get an error but did not', result, sql };
}

function hashMd5JoinedLines(lines){
  const hasher = new Bun.CryptoHasher("md5");
  hasher.update(lines.join("\n")+"\n");
  return hasher.digest("hex");
}

function verifyTest(fragment, db, options){
  const req = runTest(fragment.sql, db, options.onlyParseSql);
  if(options.onlyParseSql){
    req.ok = req.success;
    return req;
  }
  req.ok = (fragment.expectSuccess === req.success);
  if(fragment.result && req.success && req.ok){
    req.result = cleanResults(req.result, fragment.result.sort, fragment.result.colType);
    if('void' === fragment.result.type){
      req.ok = true;
    } else if('statement' === fragment.result.type){
      req.ok = true;
    } else if(!(req.result && req.result.length)){
      req.msg = 'Query was expected to return results (but did not)';
      req.ok = false;
    } else if('list' === fragment.result.type){
      const ok = comparray(req.result, fragment.result.values);
      if(!ok){
        req.msg = 'Expected: '+JSON.stringify(fragment.result.values)+' but got '+JSON.stringify(req.result);
        req.ok = ok;
      }
    } else if('hash' === fragment.result.type){
      let ok = req.result.length === +fragment.result.amount;
      if(!ok){
        req.msg = req.result.length + ' results returned but expected ' + fragment.result.amount;
        req.ok = ok;
      } else {
        ok = hashMd5JoinedLines(req.result) === fragment.result.hash;
        if(!ok){
          req.msg = 'Correct amount of values returned but hash was different than expected.';
          req.ok = ok;
        }
      }
    }
  }
  return req;
}

// Worker can handle multiple jobs sequentially
self.addEventListener("message", async (ev) => {
  const { file, mimic, fileIndex, totalFiles, options } = ev.data;
  let out = "";
  // with --progress each line goes to the main thread at once; otherwise the file's section is sent when it is done
  const log = options.progress
    ? (...args) => self.postMessage({ progress: args.join(' ') })
    : (...args) => { out += args.join(' ') + "\n"; };
  const fileStarted = performance.now();

  const relative = file.replace(options.projectRoot + "/", "").replace(/\\/g, '/');
  
  // Track error hashes to only print first occurrence of each unique error
  const errorIndex = {};

  // Header for this test file with index and GitHub link
  log("");
  log("---- ---- ---- ---- ---- ---- ----");
  log("### " + fileIndex + "/" + totalFiles + " [`" + relative + "`](https://github.com/alasql/alasql-logictest/blob/master/" + relative + ")");
  log("");
  log("_Mimic "+mimic+"_");

  // CRITICAL: Reset AlaSQL state before each job (worker is reused)
  // This ensures no cross-contamination between test files
  if (alasql?.databases?.alasql) {
    alasql.databases.alasql.tables = {};
    alasql.databases.alasql.views = {};
    // Clear cached queries and execution plans
    if (alasql.databases.alasql.sqlCache) {
      alasql.databases.alasql.sqlCache = {};
    }
    // Parsed statements are cached too; without this a reused worker keeps every AST of the run
    if (alasql.databases.alasql.astCache) {
      alasql.databases.alasql.astCache = {};
    }
    // Triggers and indices outlive their tables otherwise
    alasql.databases.alasql.triggers = {};
    alasql.databases.alasql.indices = {};
    // Reset options to defaults for this database
    if (alasql.databases.alasql.engineid) {
      alasql.databases.alasql.engineid = undefined;
    }
    // alasql.tables is an alias of the current database's tables (OBJECT_ID() reads it)
    alasql.tables = alasql.databases.alasql.tables;
  }
  // Databases a test created, and the IN-list cache: it is keyed by the list's text, so a list from
  // an earlier file can answer for this one (AlaSQL#2753), and it grows with every file the worker runs
  for (const id of Object.keys(alasql.databases)) if (id !== "alasql" && id !== "dbo") delete alasql.databases[id];
  alasql.useid = "alasql";
  alasql.sets = {};
  // Clear global query cache
  if (alasql.srch) {
    alasql.srch = {};
  }

  // Load parser module generated by main runner
  let parserMod;
  try {
    parserMod = await import(options.genParserPath);
  } catch (e) {
    log("Parser import error:", e?.message || e);
    self.postMessage({ output: out, ok:0, fail:1, skip:0 });
    return;
  }
  const parser = parserMod.default || parserMod.parser || parserMod;

  // Parse and execute
  const fragments = await parseTestFile(file, parser);
  let ok = 0, fail = 0, skip = 0;
  const failures = []; // with --debug: every failure, untruncated, for results/debug.jsonl
  let statementFailed = false;

  for (let i = 0; i < fragments.length; i++){
    const fragment = fragments[i];
    if (fragment.command === 'parse_error'){
      fail++;
      if (!options.quiet){
        log("Parse error in command", fragment.idx);
        log('```sql');
        log(trunc(fragment.raw, options.truncSQLStatement));
        log('');
        log(trunc(fragment.error, options.truncSQLStatement));
        log('```');
        log('');
      }
      continue;
    }
    if(fragment.skipif && fragment.skipif.length && fragment.skipif.indexOf(mimic) >= 0) continue;
    if(fragment.onlyif && fragment.onlyif.length && fragment.onlyif.indexOf(mimic) < 0) continue;
    if('halt' === fragment.command){
      if (!options.quiet) { log(''); log('`Halted`'); log(''); }
      break;
    } else if('setThreshold' === fragment.command){
      continue;
    } else if('execute' !== fragment.command){
      if (!options.quiet) log('Unknown command: ', fragment.command);
      continue;
    }

    // --progress: the main thread prints the SQL (at once, or when it runs longer than --ignore-under-ms) and the
    // time when the test ends; this thread is blocked while AlaSQL runs, so it only reports start and end
    const isSetup = 'statement' === fragment.result?.type && fragment.expectSuccess;
    if (options.progress) self.postMessage({ start: true, sql: fragment.sql, setup: isSetup });
    const t0 = performance.now();
    const test = verifyTest(fragment, alasql, options);
    if (options.progress) self.postMessage({ end: true, ok: test.ok, ms: performance.now() - t0, msg: test.ok ? '' : test.msg });
    if(test.ok){
      ok++;
    } else {
      fail++;
      if (options.debug) {
        failures.push({
          file: file.replace(options.projectRoot + "/", ""),
          mimic,
          sql: test.sql,
          msg: test.msg,
          expected: fragment.result ? (fragment.result.type === "hash" ? {amount: fragment.result.amount, hash: fragment.result.hash} : fragment.result.values) : fragment.expectSuccess ? "success" : "error",
          got: test.success ? test.result : null,
          // the declared column types (I, R, T) and sort mode, which the comparison above does not apply
          colType: fragment.result && fragment.result.colType,
          sort: fragment.result && fragment.result.sort,
        });
      }
      if('statement' === fragment.result?.type && fragment.expectSuccess){
        statementFailed = true;
      }
      if(!options.quiet){
        // Create hash from error message to deduplicate similar errors
        const errHash = test.msg.split('-----^').pop().replace(/[^a-z]/mig, '');
        
        if(options.printAllErrors || !errorIndex[errHash] || !(i % (1/options.curiousErrorprinting))){
          log('');
          log('```sql');
          log(trunc(test.sql, options.truncSQLStatement));
          log('');
          log(trunc(test.msg, options.truncSQLStatement));
          log('```');
          log('');
          
          errorIndex[errHash] = 1;
        }
      }
    }
    if(statementFailed){
      skip += (fragments.length - i);
      if (!options.quiet) log("_Fail found in statement setting up data so skipping rest of tests_\n");
      break;
    }
  }

  if (options.progress) self.postMessage({ fileEnd: true });
  const roundTotal = ok + fail + skip;
  if (roundTotal) {
    log('#### '+ (fail === 0 ? '★' : '☓') +' Ran', format(roundTotal), 'tests as _'+mimic+'_ in ' + ((performance.now() - fileStarted) / 1000).toFixed(1) + ' s');
    log('');
    if (skip) log('* '+format(skip)+ ' skipped');
    if (fail) log('* '+format(fail)+ ' failed');
    const pct = (ok === 0 && (fail+skip)===0) ? 0 : ((100.0 * ok / (fail + skip + ok)) | 0);
    log('* '+pct+'% was OK');
    log('');
    if (fail === 0) {
      // Convert to relative path for skipTests.line compatibility
      // Format: ./test/index/...
      const relativePath = "./" + file.replace(options.projectRoot + "/", "").replace(/\\/g, '/');
      log('`'+mimic+' '+ok+' OK: '+relativePath+'`');
      log('');
    }
  }

  self.postMessage({ output: out, ok, fail, skip, failures });
});
