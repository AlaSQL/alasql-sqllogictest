// Todo: verifying raw results
// Todo: set threshold for hashing results
// Todo: verifying hashed results

var fs    = require("fs");
var util = require('util');
// var pretty = require('prettysize');
var md5    = require("md5");
var comparray = require('comparray');
var sqllogictestparser =  require(__dirname+'/sqllogictestparserV2');
var numeral = require('numeral'); // var string = numeral(1000).format('0,0');
var argv = require('yargs').argv;


var alasql = require('alasql');
//var alasql = require('../alasql/dist/alasql.js'); // its better to have it default where its probably is and give error if its not there... 
if(argv.alasql){
	alasql = require(argv.alasql);
}

var sql = require('sql.js');



//////////////////////////// CONFIG START /////////////////////////////////////

// Todo: make parameter controled

// outcomment to use node_module version instead of local file
// alasql = require(__dirname+'/alasql');

// If set to false an error will only be printed first time it occures in all test files.
var printAllErrors = false;

// If set to false an error will only be printed at first occurence in all test files. If set to true an error will be printed at first occurence in each test file
var resetErroIndexPerFile = true;

// Sometimes you would like to have more examples of the same error. Set this between 0 and 1 to set the probabillity of an error getting printed in case it has been printes before
var curiousErrorprinting = 0.0001;

// Max string length of sql printed out when error
var truncSQLStatement = 300;

// Run only debug.test as first mimic value
var runOnlyDemo = false;

// run tests on sql.js instead of AlaSQL
var useSqliteDb = false;

// output debug info for errors
var debugErrorInfo = false;

// only check if SQL can be parsed. does not work with sqlite
var onlyParseSql = false;

// If set to true previus tests who had 100% OK will be skipped
var skipTests = true;	
var skipTestsFile = "skipTests.line";	

// Config of what tests to run
var testfiles = walkFiles(
							'./test', 			// Folder where to find test files


							/\.test$/, 					// Regexp for files to include (all files ending with .test )

													// Regexp for files to exclude - keep one and outcomment the rest
					//		/(00\/|\d{2,}|select[45])\.test/		// Exclude a lot of files (fastest - 125 files)
					//		/\/10+\//					// exclude biggest files (balance between time and depth) (410 files)
					//		null						// Exclude no files - As all tests contains a few million tests it can take some time. (622+ files)
							 /select[45]\.test/				// get all exept select5.test - as its taking days to complete

						);


//What databases to mimic when running tests
var mimic = [ 

				'sqlite'/*,			
				'postgresql', 
				'mssql', 
				'oracle', 
				'mysql', 
				'Unspecified DB'*/
			];


//////////////////////////// CONFIG END /////////////////////////////////////



console.time('Total script time');

//testfiles=["./test/evidence/slt_lang_replace.test"];


if(runOnlyDemo){
  mimic = [mimic[0]];
  testfiles=["./demo.test"];
}


var skipTestsContent = '';
if(skipTests){
	skipTestsContent = fs.readFileSync(skipTestsFile, "utf8");	
}


alasql.options.modifier = "MATRIX";
alasql.options.cache = false;
var mimicking = 0;
var erroIndex = {};
var format = function(val){ return numeral(val).format('0,0') }
var score = {
				ok: {
					total:0,
					last:0
				},
				fail: {
					total:0,
					last:0
				},
				skip: {
					total:0,
					last:0
				},
				assumedOk: {
					total:0
				},
				round:{
					init: function(obj){
											obj = obj || score;
											obj.ok.last = obj.ok.total;
											obj.fail.last = obj.fail.total;
											obj.skip.last = obj.skip.total;
										},
					stat: function(obj){
											obj = obj || score;
											var tmp = {
												ok: obj.ok.total - obj.ok.last,
												fail: obj.fail.total - obj.fail.last,
												skip: obj.skip.total - obj.skip.last,
											};
											tmp.total = tmp.ok+tmp.fail+tmp.skip;
											return tmp;
										}
				},
				percent: function(a, b){
											a = a | 0;
											b = b | 0;
											if(0===a+b){
												return 0;
											}
											return (100.0*a/(a+b))|0;
										}
			};



console.log('# SQLlogictest '+(onlyParseSql?' compile ':'')+'results for', useSqliteDb?'sql.js':'AlaSQL ');
console.log('');
console.log('`'+ new Date().toISOString() + ' target: ' + (useSqliteDb?'sql.js':'alasql@'+alasql.version)+ '`');
console.log('');

if(testfiles.length<622){ // Todo: fix hardcode
	console.log('This is a subset of the total 622 tests.');
}

console.log('Results from '+testfiles.length+' test files:');



/*
console.log('');
console.log('```');
console.log(testfiles);
console.log('```');
console.log('');
*/
var debugSQL = '';
for (var i in testfiles) {

	if(resetErroIndexPerFile){
		erroIndex = {};
	}
	
	//If node get the flag --expose-gc we can invoke garbagecollection manually.
	if (typeof global != 'undefined' && typeof(global.gc) === "function") {
		//console.time('Garbagecollecting')
		global.gc();
		//console.timeEnd('Garbagecollecting')
	}

	console.time('Time');

	console.log('');
	console.log('---- ---- ---- ---- ---- ---- ----');
	//console.log('### ' + (+i+1) + '/' + testfiles.length + ' `'  +  testfiles[i] + '`');
	console.log('### ' + (+i+1) + '/' + testfiles.length + ' [`'  +  testfiles[i] + '`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/'+testfiles[i]+')');
	//printMem()
	console.log('');

	for (mimicking = 0; mimicking < mimic.length; mimicking++) {
			
		var re = new RegExp(mimic[mimicking]+' (\\d+) OK: '+testfiles[i], "");

		var m;

		if(skipTests && (m = re.exec(skipTestsContent)) !== null){
			score.assumedOk.total += (+m[1]);
			console.log("#### ★ Assuming all "+format(m[1])+" tests still passes as _"+mimic[mimicking]+"_\n");
			continue;	
		}

		var name = testfiles[i].replace(/[^a-z0-9]/mig,'_') + mimic[mimicking];
		
		var db = new alasql.Database(name);
		
		/*
		var db = alasqlFn();
		db.options.modifier = "MATRIX";
		db.options.cache = false;
		*/

		if(useSqliteDb){
			db = new sql.Database();
		}

		score.round.init();
		
		runSQLtestFromFile(__dirname+'/'+testfiles[i],  db, mimic[mimicking]);
		
		var roundCount = score.round.stat();
		if(0===roundCount.total){
			continue;
		}
		console.log('#### '+ (0===roundCount.fail?'★':'☓') +' Ran', format(roundCount.total), 'tests as _'+mimic[mimicking]+'_');
		console.log('');
		
		if(roundCount.skip){
			console.log('* '+format(roundCount.skip)+ " skipped");
		}

		if(roundCount.fail){
			console.log('* '+format(roundCount.fail)+ " failed");
		}
		
		
		
		console.log('* '+score.percent(roundCount.ok, roundCount.fail+roundCount.skip) +'% was OK');
		
		console.log('');


		if(0===roundCount.fail){
			console.log('`'+mimic[mimicking]+' '+roundCount.ok+' OK: '+testfiles[i]+'`');
			console.log('');
		}
	}



	console.timeEnd('Time');

	//printStats();

	//break;

}





//console.log('    ***************** ALL TESTS COMPLETED ******************');

printStats();
console.timeEnd('Total script time');
console.log('');
console.log('_Please note that repetetive errors are not always printed again_');

console.log(debugSQL);

function printStats(){
  console.log('');
	console.log('-----------------------------');

	console.log('');


	console.log('## Final result');
	console.log('');

	//console.log('Was OK     :', score.ok.total);
	console.log('* Total tested:', format(score.ok.total+score.fail.total+score.skip.total));

	console.log('* Failed tests:', format(score.fail.total));

	console.log('* Skipped tests:', format(score.skip.total));

	if(score.assumedOk.total){
		console.log('* Assumed still OK:', format(score.assumedOk.total));
	}	

	console.log('* Final score:', score.percent(score.ok.total+score.assumedOk.total, score.fail.total+score.skip.total), '% was OK');


score.assumedOk.total

	//printMem();


	console.log('');

}

function printMem(){

	var mem = process.memoryUsage();
	console.log('mem:',util.inspect({
				  						rss: pretty(mem.rss),
				 						heapTotal: pretty(mem.heapTotal),
				 						heapUsed: pretty(mem.heapUsed)
							}));


}

function runSQLtestFromFile(path, db, mimic){
	mimic = mimic || 'unspecified';
	
	// A statement is an SQL command that is to be evaluated but from which we do not expect to get results (other than success or failure). A statement might be a CREATE TABLE or an INSERT or an UPDATE or a DROP INDEX.
	// If a statement fils it does not make sense to peform the rest of the tests in the file as the data is not present.
	var statementFaild = false; 

    var fragments = sqllogictestparser(path);

	console.log('_Mimic '+mimic+"_");

    for (var i = 0; i < fragments.length; i++) {
	    var fragment =fragments[i];
		
		if(statementFaild){			
			score.skip.total += fragments.length-i;
			console.log("_Fail found for statement setting up data so skipping rest of tests_\n");			
			break;	
		} 

		if(fragment.skipif && fragment.skipif.length && -1<fragment.skipif.indexOf(mimic)){
			continue;
		} 
		
		if(fragment.onlyif && fragment.onlyif.length && fragment.onlyif.indexOf(mimic)<0){
			continue;
		} 

		if('halt' === fragment.command){
			console.log();
			console.log('`Halted`');
			console.log();
			return;

		} else if('setThreshold' === fragment.command){
      // Not important when we compare the results to whats in the testfiles 
			//console.log('`setThreshold not implemented`');
			continue;

		}else if('execute' !== fragment.command){
			console.log('Unknown command: ',fragments[i].command);
			continue;
		} 
      
		var test = verifyTest(fragment, db);

		if(test.ok){
			score.ok.total++;
		} else {
			score.fail.total++;


			if('statement' === fragment.result.type && fragment.expectSuccess){
				//console.log(fragment);
				//console.log(test);
				statementFaild = true;
			}

			
			var errHash = test.msg.split('-----^').pop()/*.split("'").unshift()*/.replace(/[^a-z]/mig, '');
			


			// The hashing of the errors gives us first error per error type. The math random is there to give os 1% of all errors so we have some different examples. Should be avoided when we have the worst error types implemented correctly.
			if(statementFaild || printAllErrors || !erroIndex[errHash] || Math.random()<curiousErrorprinting){
				
				//console.log(JSON.stringify(db.tables, null, 4));

				console.log('');
				console.log('```sql');
				console.log(trunc(test.sql, truncSQLStatement));
				console.log('');
				console.log(trunc(test.msg, truncSQLStatement));
			//	console.log('Mimicking '+mimic)
				console.log('```');
				console.log('');

				
				erroIndex[errHash] = true;
			}
		}
	}
}




function verifyTest(fragment, db){

	//console.log('-----------------------------------------------')
		var req = runTest(fragment.sql, db);

		if(onlyParseSql){
			req.ok = req.success;
			return req;
		}

		req.ok = (fragment.expectSuccess === req.success);
//console.log(fragment)
		if(fragment.result && req.success && req.ok){
			var ok;
      
//console.log(req.result)
			req.result = cleanResults(req.result, fragment.result.sort);

//console.log(fragment.result)
//console.log(req.result)

      		if('void' === fragment.result.type){
      				req.ok = true;   // no results to compare
      		} else if('statement' === fragment.result.type){
      				req.ok = true;   // no results to compare
      		} else if(! (req.result && req.result.length)){
					req.msg = 'Query was expected to return results (but did not) ';//+JSON.stringify(req.result);
					req.ok = false;
			}else if('list' === fragment.result.type){
				ok = comparray(req.result, fragment.result.values);

				if(!ok){
					
					//req.msg = 'Returned results was not as expected. Check the sorting'
					req.msg = 'Expected: '+JSON.stringify(fragment.result.values)+' but got '+JSON.stringify(req.result);
					//console.log('Expected:',fragment.result.values,'but got', req.result );
					//console.log();
					req.ok = ok;
				}


			} else if('hash' === fragment.result.type){
				ok = req.result.length === +fragment.result.amount;
				if(!ok){
					req.msg = req.result.length + ' results returned but expected ' + fragment.result.amount;
					req.ok = ok;
				}else{
					ok = md5(req.result.join("\n")+"\n")===fragment.result.hash; // check line 514 in sqllogictest.c (https://www.sqlite.org/sqllogictest/artifact/25519cdda12b91e8)

					if(!ok){
						req.msg = 'Correct amount of values returned but hash was different than expected.';// Check the sorting: '+req.result.join(', ');
						req.ok = ok;

					
					}
				}
			}


		}
		if(debugErrorInfo && !req.ok){
			//*
			console.log('---- DEBUG ----');
			console.log(JSON.stringify(fragment));
			console.log('');
			console.log(JSON.stringify(req));
			//*/
		}

		/*
		console.log(fragment.expectSuccess)
		console.log(result.success)
		console.log(!(fragment.expectSuccess^result.success))*/
		//console.log(result)
		return req;
    // todo: implement handeling of results - and not just if it fails compilation

}

function cleanResults(result, sortType){
	if(!result){
		return result;
	}

	if(!result.length){
		return result;
	}

	if(!result[0].length){
		return result;
	}
	// I expect matrix respond		
//  console.log('result:', result)

  for(var i = 0;i<result.length;i++){
    result[i] = result[i].map(function(x){

                                            if(true === x){
                                              return "1";
                                            }

                                            if(false === x){
                                              return "0";
                                            }

                                            if(null === x){
                                              return 'NULL';
                                            }

                                            if('Infinity' === ''+x){
                                              return 'NULL';
                                            }
                                            
                                            if('-Infinity' === ''+x){
                                              return 'NULL';
                                            }

                                            if('NaN' === ''+x){  
                                              return 'NULL';
                                            }

                                            if('undefined' === ''+x){
                                              return 'NULL';
                                            }

                                            if('' === x){
                                              return "(empty)";
                                            }

                                            // Its a float
                                            if(x === +x && x !== (x|0)){
                                              return ''+x.toFixed(3);
                                            }

                                            // remove printable chars
                                            return (''+x).replace(/[\n\r\t\x00\x08\x0B\x0C\x0E-\x1F\x7F]/gim, '@');
                                          });
    }
//   console.log(result)
   
  if('rowsort' === sortType){
//The "rowsort" mode gathers all output from the database engine then sorts it by rows on the client side. Sort comparisons use strcmp() on the rendered ASCII text representation of the values. Hence, "9" sorts after "10", not before.
    result.sort(function(a,b){
                                var str1 = a.join('');
                                var str2 = b.join('');
                                return ( ( str1 === str2 ) ? 0 : ( ( str1 > str2 ) ? 1 : -1 ) );
                             });
    
    
  } 

  result = [].concat.apply([], result);

  if('valuesort' === sortType){
    result.sort();
  }
    
	return result;

}



function runTest(sql, db){
	//sql = "SELECT 1<2, 2<1, 1/0, 'NaN', 'undefined', '', 2, 1.1234, 1.123, 1.12";
	sql = sql
			.replace(/\r|\n/g,' ')
			.replace(/[ ]{2,}/g,' ');
	//console.log(sql);
	var result = null;

	try {
		if(onlyParseSql){
			result = alasql.parse(sql);
		} else {

			result = db.exec(sql);

			if(useSqliteDb){
				result = result[0] || {};
				result = result.values || null;
			}
		}
	} catch(err) {
		// console.log('rawError:', err);
		return {success: false, msg: (err.message || 'no error msg'), sql:sql};
	}

	// console.log('rawResult:', result);
	return {
				success: true, 
				msg: 'Expected to get an error but did not',/*msg used for when error was expected*/ 
				result:result, 
				sql:sql
			};

}





function walkFiles(dir, reFilterYes, reFilterNo, oneFolderOnly, onlyFileName) {
    reFilterYes = reFilterYes || false;
    reFilterNo = reFilterNo || false;

    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function(fileName) {
        var file = dir + '/' + fileName;
        if(reFilterNo && reFilterNo.test(file))
            return;
        var stat = fs.statSync(file);
        if (!oneFolderOnly && stat && stat.isDirectory()) {
          results = results.concat(walkFiles(file, reFilterYes, reFilterNo));
        } else {
          if(reFilterYes && !reFilterYes.test(file))
            return;
          results.push(onlyFileName?fileName:file);
        }
    });
    return results;
}   

function trunc(str, n){
	if(n<2){
		return str;
	}
 	return (str.length > n) ? str.substr(0,n-1)+'…' : str;
};

