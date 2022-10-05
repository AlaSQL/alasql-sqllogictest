var fs    = require("fs");
var util = require('util');
var md5    = require("md5");
var comparray = require('comparray');
var numeral = require('numeral'); // var string = numeral(1000).format('0,0');
var argv = require('yargs').argv;
var Parallel = require('paralleljs');
var alasqlPath = argv.alasql || 'alasql';
var alasql = require(alasqlPath);


//////////////////////////// CONFIG START /////////////////////////////////////

// Todo: make parameter controled

// outcomment to use node_module version instead of local file
// alasql = require(__dirname+'/alasql');
var config = {}
// If set to false an error will only be printed first time it occures in all test files.
config.printAllErrors = false;

// Sometimes you would like to have more examples of the same error. Set this between 0 and 1 to set the probabillity of an error getting printed in case it has been printes before
config.curiousErrorprinting = 0.0003;

// Max string length of sql printed out when error
config.truncSQLStatement = 300;

// Run only debug.test as first mimic value
config.runOnlyDemo = false;

// output debug info for errors
config.debugErrorInfo = false;

// only check if SQL can be parsed. does not work with sqlite
config.onlyParseSql = false;

// If set to true previus tests who had 100% OK will be skipped
config.skipTests = true;	
config.skipTestsFile = "skipTests.line";	

config.parserPath = ('./sqllogictestparserV2')


// Config of what tests to run
var testfiles = walkFiles(
							'./test', 			// Folder where to find test files


							/\.test$/, 					// Regexp for files to include (all files ending with .test )

													// Regexp for files to exclude - keep one and outcomment the rest
					//		/(00\/|\d{2,}|select[45])\.test/		// Exclude a lot of files (fastest - 125 files)
					//		/\/10+\//					// exclude biggest files (balance between time and depth) (410 files)
					//		null						// Exclude no files - As all tests contains a few million tests it can take some time. (622+ files)
							 /select[45]\.test/				// get all exept select4.test and select5.test - as its taking days to complete

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









config.useSqliteDb=false

console.time('Total script time');

var sqllogictestparser =  require(__dirname + '/' + config.parserPath);

//testfiles=["./test/evidence/slt_lang_replace.test"];

if(config.runOnlyDemo){
  mimic = [mimic[0]];
  testfiles=["./demo.test"];
}

var skipTestsContent = '';
if(config.skipTests){
	skipTestsContent = fs.readFileSync(config.skipTestsFile, "utf8");	
}

var errorIndex = {};
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



console.log('# SQLlogictest '+(config.onlyParseSql?' compile ':'')+'results for', config.useSqliteDb?'sql.js':'AlaSQL ');
console.log('');
console.log('`'+ new Date().toISOString() + ' target: ' + (config.useSqliteDb?'sql.js':'alasql@'+alasql.version)+ '`');
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

var envelope = [];
function initiateTestrun(){
	logOutput = [];
	var log = function(){logOutput.push(Array.prototype.slice.call(arguments).join(" "));};
	var flush = function(){var tmp=logOutput.join("\n");logOutput=[];return tmp;};

	for (var i = 0; i < testfiles.length; i++) {
		log('');
		log('---- ---- ---- ---- ---- ---- ----');
		log('### ' + (i+1) + '/' + testfiles.length + ' [`' +  testfiles[i] + '`](https://github.com/alasql/alasql-logictest/blob/master/'+testfiles[i]+')');
		log('');

		for (var mimicking = 0; mimicking < mimic.length; mimicking++) {

			log('_Mimic '+mimic[mimicking]+"_");

			var re = new RegExp(mimic[mimicking]+' (\\d+) OK: '+testfiles[i], "");
			var m;
			if(config.skipTests && (m = re.exec(skipTestsContent)) !== null){
				score.assumedOk.total += (+m[1]);
				log('');
				log("#### ★ Assuming all "+format(m[1])+" tests still passes as _"+mimic[mimicking]+"_\n");
				continue;	
			}
		
			envelope.push({
				preText: flush(),
				mimic: 	mimic[mimicking],
				name: 	testfiles[i].replace(/[^a-z0-9]/mig,'_') + '_' + mimic[mimicking],
				path: testfiles[i]
			})
		}
	}
	
	runNextSQLtest();
}











var counter = 0;
function runNextSQLtest(){
	//console.log(JSON.stringify(envelope, null, 2))

	if(envelope.length < counter){
		return;
	}

	if(envelope.length === counter){
		return printStats();
	}

	//If node get the flag --expose-gc we can invoke garbagecollection manually.
	if (typeof global !== 'undefined' && typeof global.gc === 'function') {
		global.gc();
	}

	runSQLtest(envelope[counter++]);

}




function runSQLtest(envelope){
    
	rounds = wrapTurn(
						require('os').cpus().length||1,
						{
							mimic: 		envelope.mimic,
							name: 		envelope.name,
							path: 		envelope.path,
							//fragments: 	envelope.fragments, // nope - its too much data to copy back and forth - so we will reparse the file
							config: 	config, 
							alasqlPath: alasqlPath,
							dirname:__dirname,
							errorIndex: errorIndex
						})

	//console.log(JSON.stringify(rounds, null, 2))

	new Parallel(rounds).map(webWorkerTest).then(data=>{
		//console.log(JSON.stringify(data, null, 2));
		outputTestResults(data, envelope.mimic, envelope.path, envelope.preText);
		runNextSQLtest();
	});

}







function outputTestResults(data, mimic, testfile, preText){
		//console.log(JSON.stringify(arguments, null, 4))

		console.log(preText);

		score.round.init();
		var output=[];

		for(var i in data){
			for(var ii in data[i].output){
				if(data[i].output[ii].length){
					output[ii]=data[i].output[ii].join("\n");
				}
			}		

			score.ok.total += data[i].score.ok.total;
			score.fail.total += data[i].score.fail.total;
			score.skip.total += data[i].score.skip.total;
			
			for(var hash in data[i].errorIndex) { 
				errorIndex[hash] = data[i].errorIndex[hash]; 
			}	

		}
		
		for(i in output){
			console.log(output[i]);
		}
		

		// A statement is an SQL command that is to be evaluated but from which we do not expect to get results (other than success or failure). A statement might be a CREATE TABLE or an INSERT or an UPDATE or a DROP INDEX.
		// If a statement fils it does not make sense to peform the rest of the tests in the file as the data is not present.
		var statementFaild = false; 


		roundCount = score.round.stat();

		if(0===roundCount.total){
			return runNextSQLtest();
		}

		console.log('#### '+ (0===roundCount.fail?'★':'☓') +' Ran', format(roundCount.total), 'tests as _'+mimic+'_');
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
			console.log('`'+mimic+' '+roundCount.ok+' OK: '+testfile+'`');
			console.log('');
		}


}









function webWorkerTest(data){

	var fs    		= require("fs");
	var md5    		= require("md5");
	var comparray 	= require('comparray');
	var numeral 	= require('numeral');
	var sqllogictestparser =  require(data.cargo.dirname + '/' + data.cargo.config.parserPath);
	var alasql 		= require(data.cargo.alasqlPath);
	alasql.options.modifier = "MATRIX";
	alasql.options.cache = false;

	var fragments = sqllogictestparser(data.cargo.dirname + '/' + data.cargo.path);
	var errorIndex = data.cargo.errorIndex;
	var mimic = data.cargo.mimic;		
	var config = data.cargo.config;		
	var score = {
					ok: {total:0},
					fail: {total:0},
					skip: {total:0}
				};
	
	var output = [[]];
	var outputRow = 0;
	console.log = function(){output[outputRow].push(Array.prototype.slice.call(arguments).join(" "));};
	
   


	function verifyTest(fragment, db){

		//console.log('-----------------------------------------------')
			var req = runTest(fragment.sql, db);

			if(config.onlyParseSql){
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
			if(config.debugErrorInfo && !req.ok){
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
			if(config.onlyParseSql){
				result = alasql.parse(sql);
			} else {

				result = db.exec(sql);

				if(config.useSqliteDb){
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


	function trunc(str, n){
		if(n<2){
			return str;
		}
	 	return (str.length > n) ? str.substr(0,n-1)+'…' : str;
	}




	 for (var i = 0; i < fragments.length; i++) {
	    var fragment =fragments[i];
		outputRow=i;
	    output[outputRow]=[];

	    var myTurn = (i%data.total == data.turn);

        var statementFaild = false;

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
			break;

		} else if('setThreshold' === fragment.command){
      // Not important when we compare the results to whats in the testfiles 
			//console.log('`setThreshold not implemented`');
			continue;

		}else if('execute' !== fragment.command){
			console.log('Unknown command: ',fragments[i].command);
			continue;
		} 
		
		// Only tests from my round should be run - but statements setting up SQL must always be run...
		if(!myTurn){
			if('statement' === fragment.result.type){
				var tmp = verifyTest(fragment, alasql);
				if(!tmp.ok && fragment.expectSuccess){
					break;
				}
			}
			continue;
		}

		var test = verifyTest(fragment, alasql);

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
			
			// The hashing of the errors gives us first error per error type. The math random is there to give os x percent of all errors so we have some different examples. Should be avoided when we have the worst error types implemented correctly.
			if(config.statementFaild || config.printAllErrors || !errorIndex[errHash] || !(i%(1/config.curiousErrorprinting)) ){
				
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

		if(statementFaild && myTurn){			
			score.skip.total += fragments.length-i;
			console.log("_Fail found in statement setting up data so skipping rest of tests_\n");			
			break;	
		} 

	}

	return {
				output:output,
				score:score,
				errorIndex:errorIndex,
				mimic:mimic
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



function wrapTurn(total, cargo){
	cargo = cargo || {};
	var holder = [];
	for (var i = 0; i < total; i++) {
		holder.push({turn:i, total:total, cargo:cargo});
	}	
	return holder;
}

/*function roundSplit(total, slices, min, cargo){
	cargo = cargo || {}
	min = Math.min(total, min || 1)
	if(total<1 || slices<1 || min<1){
		throw "Params not correct"
	}

	var size = Math.max(min, total/slices|0);
	var slices = total/size|0
	var holder = [];
	for (var i = 1; i <= total; i+=size) {
		if(holder.length === slices-1){
			holder.push({
							/*total:total,
							slices:slices,
							minimum:min,
							amount: total-i+1,* /
							min:i,
							max:total,
							cargo:cargo
						})
			break;
		}
		holder.push({
						/*total:total,
						slices:slices,
						minimum:min,
						amount: i-1+size-i+1,* /
						min:i,
						max:i-1+size,
						cargo:cargo
					});
	}
	return holder;
}*/



function printStats(){
	console.log('');
	console.log('-----------------------------');
	console.log('');


	console.log('## Final result');
	console.log('');

	
	console.log('* `alasql@'+alasql.version+'`');

	console.log('* Total tested:', format(score.ok.total+score.fail.total+score.skip.total));

	console.log('* Failed tests:', format(score.fail.total));

	console.log('* Skipped tests:', format(score.skip.total));

	if(score.assumedOk.total){
		console.log('* Assumed still OK:', format(score.assumedOk.total));
	}	

	console.log('* Final score:', score.percent(score.ok.total+score.assumedOk.total, score.fail.total+score.skip.total), '% was OK');

	console.log('');

	console.timeEnd('Total script time');
	console.log('');
	console.log('_Please note that repetetive errors are not always printed again_');


}

function printMem(){

	var mem = process.memoryUsage();
	console.log('mem:',util.inspect({
				  						rss: pretty(mem.rss),
				 						heapTotal: pretty(mem.heapTotal),
				 						heapUsed: pretty(mem.heapUsed)
							}));


}






console.time('Total script time');
initiateTestrun()



