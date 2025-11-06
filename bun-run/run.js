import md5 from "md5";
import comparray from "comparray";
import numeral from "numeral";
import parseTestFile from "./sqllogictestparserV2.js";
import alasql from "alasql";
import { readFileSync, readdirSync, statSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

// Parse command line arguments
const args = Bun.argv.slice(2);
const isDemoMode = args.includes('--demo');

//////////////////////////// CONFIG START /////////////////////////////////////

const config = {
	// If set to false an error will only be printed first time it occurs in all test files.
	printAllErrors: false,
	
	// Sometimes you would like to have more examples of the same error. Set this between 0 and 1 to set the probability of an error getting printed in case it has been printed before
	curiousErrorprinting: 0.0003,
	
	// Max string length of sql printed out when error
	truncSQLStatement: 300,
	
	// Run only demo.test - enable with --demo flag
	runOnlyDemo: isDemoMode,
	
	// output debug info for errors
	debugErrorInfo: false,
	
	// only check if SQL can be parsed. does not work with sqlite
	onlyParseSql: false,
	
	// If set to true previous tests who had 100% OK will be skipped
	skipTests: true,
	skipTestsFile: resolve(projectRoot, "skipTests.line"),
	
	useSqliteDb: false
};

// Config of what tests to run
let testfiles = walkFiles(
	resolve(projectRoot, './test'),
	/\.test$/,
	/select[45]\.test/  // get all except select4.test and select5.test
);

// Ensure deterministic order similar to Node's traversal
// Sorting paths makes directories like 'evidence' come before files like 'select1.test'
testfiles = testfiles.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

// What databases to mimic when running tests
let mimic = ['sqlite'];

//////////////////////////// CONFIG END /////////////////////////////////////

console.time('Total script time');

alasql.options.modifier = "MATRIX";
alasql.options.cache = false;

if(config.runOnlyDemo){
	mimic = [mimic[0]];
	testfiles = [resolve(projectRoot, "./demo.test")];
}

let skipTestsContent = '';
if(config.skipTests){
	try {
		skipTestsContent = readFileSync(config.skipTestsFile, "utf8");
	} catch(e) {
		// Skip file doesn't exist yet
	}
}

const errorIndex = {};
const format = (val) => numeral(val).format('0,0');

const score = {
	ok: { total: 0, last: 0 },
	fail: { total: 0, last: 0 },
	skip: { total: 0, last: 0 },
	assumedOk: { total: 0 },
	round: {
		init: function(obj = score) {
			obj.ok.last = obj.ok.total;
			obj.fail.last = obj.fail.total;
			obj.skip.last = obj.skip.total;
		},
		stat: function(obj = score) {
			const tmp = {
				ok: obj.ok.total - obj.ok.last,
				fail: obj.fail.total - obj.fail.last,
				skip: obj.skip.total - obj.skip.last,
			};
			tmp.total = tmp.ok + tmp.fail + tmp.skip;
			return tmp;
		}
	},
	percent: function(a, b){
		a = a | 0;
		b = b | 0;
		if(0 === a + b) return 0;
		return (100.0 * a / (a + b)) | 0;
	}
};

console.log('# SQLlogictest '+(config.onlyParseSql?' compile ':'')+'results for AlaSQL (Bun runtime)');
console.log('');
console.log('`'+ new Date().toISOString() + ' target: alasql@'+alasql.version+' (Bun '+Bun.version+')`');
console.log('');

if(testfiles.length < 622){
	console.log('This is a subset of the total 622 tests.');
}

console.log('Results from '+testfiles.length+' test files:');

// Main test execution
async function runAllTests() {
	for (let i = 0; i < testfiles.length; i++) {
		console.log('');
		console.log('---- ---- ---- ---- ---- ---- ----');
		console.log('### ' + (i+1) + '/' + testfiles.length + ' [`' + testfiles[i] + '`](https://github.com/alasql/alasql-logictest/blob/master/'+testfiles[i]+')');
		console.log('');
		
		for (let mimicking = 0; mimicking < mimic.length; mimicking++) {
			console.log('_Mimic '+mimic[mimicking]+"_");
			
			// Match skipTests using absolute path like the Node runner
            const re = new RegExp(mimic[mimicking]+' (\\d+) OK: '+testfiles[i].replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "");
            const m = re.exec(skipTestsContent);
			
			if(config.skipTests && m !== null){
				score.assumedOk.total += (+m[1]);
				console.log('');
				console.log("#### ★ Assuming all "+format(m[1])+" tests still passes as _"+mimic[mimicking]+"_\n");
				continue;
			}
			
			await runSQLtest(testfiles[i], mimic[mimicking]);
		}
	}
	
	printStats();
}

async function runSQLtest(testPath, mimicDb) {
	score.round.init();
	
	// Reset AlaSQL database to get a clean state for each test file
	// This mimics the Node version which uses separate worker processes
	// Direct manipulation of internal structures is much faster than SQL DROP statements
	if (alasql.databases && alasql.databases.alasql) {
		alasql.databases.alasql.tables = {};
	}
	
	// Parse test file using Bun's fast file I/O
	const fragments = await parseTestFile(testPath);
	
	let statementFailed = false;
	
	for (let i = 0; i < fragments.length; i++) {
		const fragment = fragments[i];
		
		if(fragment.skipif && fragment.skipif.length && fragment.skipif.indexOf(mimicDb) >= 0){
			continue;
		}
		
		if(fragment.onlyif && fragment.onlyif.length && fragment.onlyif.indexOf(mimicDb) < 0){
			continue;
		}
		
		if('halt' === fragment.command){
			console.log();
			console.log('`Halted`');
			console.log();
			break;
		} else if('setThreshold' === fragment.command){
			continue;
		} else if('execute' !== fragment.command){
			console.log('Unknown command: ', fragment.command);
			continue;
		}
		
		const test = verifyTest(fragment, alasql);
		
		if(test.ok){
			score.ok.total++;
		} else {
			score.fail.total++;
			
			if('statement' === fragment.result.type && fragment.expectSuccess){
				statementFailed = true;
			}
			
			const errHash = test.msg.split('-----^').pop().replace(/[^a-z]/mig, '');
			
			if(config.printAllErrors || !errorIndex[errHash] || !(i % (1/config.curiousErrorprinting))){
				console.log('');
				console.log('```sql');
				console.log(trunc(test.sql, config.truncSQLStatement));
				console.log('');
				console.log(trunc(test.msg, config.truncSQLStatement));
				console.log('```');
				console.log('');
				
				errorIndex[errHash] = 1;
			}
		}
		
		if(statementFailed){
            // Match Node's skip counting (includes current index in remaining count)
            score.skip.total += fragments.length - i;
            console.log("_Fail found in statement setting up data so skipping rest of tests_\n");
            break;
        }
	}
	
	// Calculate round statistics
	const roundCount = score.round.stat();
	
	if(roundCount.total === 0){
		return;
	}
	
	console.log('#### '+ (roundCount.fail === 0 ? '★' : '☓') +' Ran', format(roundCount.total), 'tests as _'+mimicDb+'_');
	console.log('');
	
	if(roundCount.skip){
		console.log('* '+format(roundCount.skip)+ " skipped");
	}
	
	if(roundCount.fail){
		console.log('* '+format(roundCount.fail)+ " failed");
	}
	
	console.log('* '+score.percent(roundCount.ok, roundCount.fail + roundCount.skip) +'% was OK');
	console.log('');
	
    if(roundCount.fail === 0){
        // Use absolute path like the Node runner
        console.log('`'+mimicDb+' '+roundCount.ok+' OK: '+testPath+'`');
        console.log('');
    }
}

function verifyTest(fragment, db){
	const req = runTest(fragment.sql, db);
	
	if(config.onlyParseSql){
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
				ok = md5(req.result.join("\n")+"\n") === fragment.result.hash;
				if(!ok){
					req.msg = 'Correct amount of values returned but hash was different than expected.';
					req.ok = ok;
				}
			}
		}
	}
	
	if(config.debugErrorInfo && !req.ok){
		console.log('---- DEBUG ----');
		console.log(JSON.stringify(fragment));
		console.log('');
		console.log(JSON.stringify(req));
	}
	
	return req;
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
			
			// It's a float
			if(x === +x && x !== (x|0)){
				return ''+x.toFixed(3);
			}
			
			// remove printable chars
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

function runTest(sql, db){
	sql = sql
		.replace(/\r|\n/g,' ')
		.replace(/[ ]{2,}/g,' ');
	
	let result = null;
	
	try {
		if(config.onlyParseSql){
			result = alasql.parse(sql);
		} else {
			result = db.exec(sql);
		}
	} catch(err) {
		return {success: false, msg: (err.message || 'no error msg'), sql: sql};
	}
	
	return {
		success: true,
		msg: 'Expected to get an error but did not',
		result: result,
		sql: sql
	};
}

function trunc(str, n){
	if(n < 2) return str;
	return (str.length > n) ? str.substr(0, n-1)+'…' : str;
}

function walkFiles(dir, reFilterYes, reFilterNo, oneFolderOnly, onlyFileName) {
	reFilterYes = reFilterYes || false;
	reFilterNo = reFilterNo || false;
	
	let results = [];
	try {
		const list = readdirSync(dir);
		list.forEach(fileName => {
			const file = dir + '/' + fileName;
			if(reFilterNo && reFilterNo.test(file))
				return;
			const stat = statSync(file);
			if (!oneFolderOnly && stat && stat.isDirectory()) {
				results = results.concat(walkFiles(file, reFilterYes, reFilterNo));
			} else {
				if(reFilterYes && !reFilterYes.test(file))
					return;
				results.push(onlyFileName ? fileName : file);
			}
		});
	} catch(e) {
		// Directory doesn't exist
	}
	return results;
}

function printStats(){
	console.log('');
	console.log('-----------------------------');
	console.log('');
	console.log('## Final result');
	console.log('');
	console.log('* `alasql@'+alasql.version+'` (Bun '+Bun.version+')');
	console.log('* Total tested:', format(score.ok.total + score.fail.total + score.skip.total));
	console.log('* Failed tests:', format(score.fail.total));
	console.log('* Skipped tests:', format(score.skip.total));
	
	if(score.assumedOk.total){
		console.log('* Assumed still OK:', format(score.assumedOk.total));
	}
	
	console.log('* Final score:', score.percent(score.ok.total + score.assumedOk.total, score.fail.total + score.skip.total), '% was OK');
	console.log('');
	console.timeEnd('Total script time');
	console.log('');
	console.log('_Please note that repetitive errors are not always printed again_');
}

// Start the tests
await runAllTests();
