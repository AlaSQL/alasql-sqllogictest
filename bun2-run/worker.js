import alasql from "alasql";
import comparray from "comparray";

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

function cleanResults(result, sortType){
  if(!result || !result.length || !result[0] || !result[0].length){
    return result;
  }
  for(let i = 0; i < result.length; i++){
    result[i] = result[i].map(x => {
      if(true === x) return "1";
      if(false === x) return "0";
      if(null === x) return 'NULL';
      if('Infinity' === ''+x) return 'NULL';
      if('-Infinity' === ''+x) return 'NULL';
      if('NaN' === ''+x) return 'NULL';
      if('undefined' === ''+x) return 'NULL';
      if('' === x) return "(empty)";
      if(x === +x && x !== (x|0)){
        return ''+x.toFixed(3);
      }
      return (''+x).replace(/[\n\r\t\x00\x08\x0B\x0C\x0E-\x1F\x7F]/gim, '@');
    });
  }
  if('rowsort' === sortType){
    result.sort((a,b) => {
      const str1 = a.join('');
      const str2 = b.join('');
      return str1 === str2 ? 0 : (str1 > str2 ? 1 : -1);
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
    req.result = cleanResults(req.result, fragment.result.sort);
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
  const log = (...args) => { out += args.join(' ') + "\n"; };
  
  // Track error hashes to only print first occurrence of each unique error
  const errorIndex = {};

  // Header for this test file with index and GitHub link
  log("");
  log("---- ---- ---- ---- ---- ---- ----");
  log("### " + fileIndex + "/" + totalFiles + " [`" + file + "`](https://github.com/alasql/alasql-logictest/blob/master/" + file + ")");
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
    // Reset options to defaults for this database
    if (alasql.databases.alasql.engineid) {
      alasql.databases.alasql.engineid = undefined;
    }
  }
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

    const test = verifyTest(fragment, alasql, options);
    if(test.ok){
      ok++;
    } else {
      fail++;
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

  const roundTotal = ok + fail + skip;
  if (roundTotal) {
    log('#### '+ (fail === 0 ? '★' : '☓') +' Ran', format(roundTotal), 'tests as _'+mimic+'_');
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

  self.postMessage({ output: out, ok, fail, skip });
});
