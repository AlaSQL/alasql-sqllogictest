// Todo: verifying raw results
// Todo: set threshold for hashing results
// Todo: verifying hashed results

var fs    = require("fs")
var util = require('util');
var pretty = require('prettysize');
var md5    = require("MD5")
var comparray = require('comparray');
var sqllogictestparser =  require('./sqllogictestparserV2');
var alasql = require('alasql');

console.time('Total script time')


//////////////////////////// CONFIG START /////////////////////////////////////

// Incomment to use local file instead of node_module
alasql = require('./alasql.js');

// If set to false an error will only be printed first time ic occures in all test files.
var printAllErrors = false;

// If set to false an error will only be printed at first occurence in all test files. If set to true an error will be printed at first occurence in each test file
var resetErroIndexPerFile = true;

// Sometimes you would like to have more examples of the same error. Set this between 0 and 1 to set the probabillity of an error getting printed in case it has been printes before
var curiousErrorprinting = 0.0001;

// Config of what tests to run
var testfiles = walkFiles(
							'test', 					// Folder where to find test files


							/\.test$/, 					// Regexp for files to include (all files ending with .test )


														// Regexp for files to exclude - keep one and outcomment the rest
							/00\/|\d{2,}\.test/			// Exclude a lot of files (fastest - 125 files)
					//		/\/10+\//					// exclude biggest files (balance between time and depth) (410 files)
					//		null						// Exclude no files - As all tests contains a few million tests it can take some time. (622+ files)
						);


//What databases to mimic when running tests
var mimic = [ 
				'unknown',
				'sqlite',			
				'postgresql', 
				'mssql', 
				'oracle', 
				'mysql'
			]


var runOnlyDemo = true;

//////////////////////////// CONFIG END /////////////////////////////////////




if(runOnlyDemo){
  mimic = [mimic[0]];
  testfiles=["./demo.test"];
}

alasql.options.modifier = "MATRIX";
alasql.options.cache = false;
var mimicking = 0;
var erroIndex = {}
var score = {
				ok: {
					total:0,
					last:0
				},
				fail: {
					total:0,
					last:0
				},
				round:{
					init: function(obj){
											obj = obj || score;
											obj.ok.last = obj.ok.total;
											obj.fail.last = obj.fail.total;
										},
					stat: function(obj){
											obj = obj || score;
											var tmp = {
												ok: obj.ok.total - obj.ok.last,
												fail: obj.fail.total - obj.fail.last,
											};
											tmp.total = tmp.ok+tmp.fail;
											return tmp;
										}
				},
				percent: function(a, b){
											a = a | 0;
											b = b | 0;
											if(0==a+b){
												return 0;
											}
											return (100.0*a/(a+b))|0
										}
			};


console.log('# SQLlogictest results for AlaSQL',alasql.version)
console.log('');
console.log('_'+ new Date().toISOString()+'_')
console.log('');

if(testfiles.length<622){ // Todo: fix hardcode
	console.log('This is a subset of the total 622 tests.')
}

console.log('Results from '+testfiles.length+' test files:')



/*
console.log('');
console.log('```');
console.log(testfiles);
console.log('```');
console.log('');
*/

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

	console.time('Time')

	console.log('');
	console.log('---- ---- ---- ---- ---- ---- ----');
	console.log('### ' + (+i+1) + '/' + testfiles.length + ' `'  +  testfiles[i] + '`');
	//printMem()
	console.log('');

	for (mimicking = 0; mimicking < mimic.length; mimicking++) {
			
		var name = testfiles[i].replace(/[^a-z0-9]/mig,'_') + mimic[mimicking];
		var db = new alasql.Database(name);

		score.round.init();
		
		runSQLtestFromFile(testfiles[i],  db, mimic[mimicking]);
		
		var roundCount = score.round.stat();
		if(0===roundCount.total){
			continue;
		}
		console.log('#### '+ (0===roundCount.fail?'✔':'☓') +' Ran', roundCount.total, 'tests as',  mimic[mimicking]);
		console.log('');
		console.log('* '+roundCount.fail+ " failed")
		console.log('* '+score.percent(roundCount.ok, roundCount.fail) +'% was OK');
		console.log('');

	};



	console.timeEnd('Time');

	//printStats();

	//break;

}





//console.log('    ***************** ALL TESTS COMPLETED ******************');

printStats();
console.timeEnd('Total script time')
console.log('');
console.log('_Please note that repetetive errors is not always included in this document_');



function printStats(){
	  	console.log('');
	console.log('-----------------------------');

	console.log('');


	console.log('## Final result')
	console.log('');
	console.log('* Failed tests:', score.fail.total);

	//console.log('Was OK     :', score.ok.total);
	console.log('* Total tested:', score.ok.total+score.fail.total);
	console.log('* Final score:', score.percent(score.ok.total, score.fail.total), '% was OK');

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

	



    var fragments = sqllogictestparser(path);

	console.log('_Mimic '+mimic+'_');

    for (var i = 0; i < fragments.length; i++) {
	    var fragment =fragments[i];
		
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
			console.log('`setThreshold not implemented`');
			continue;

		}else if('execute' !== fragment.command){
			console.log('Unknown command: ',fragments[i].command);
			continue;
		}

		var test = verifyTest(fragment, db)

		if(test.ok){
			score.ok.total++;
		} else {
			score.fail.total++;

			

			var errHash = test.msg.split('-----^').pop()/*.split("'").unshift()*/.replace(/[^a-z]/mig, '')

			// The hashing of the errors gives us first error per error type. The math random is there to give os 1% of all errors so we have some different examples. Should be avoided when we have the worst error types implemented correctly.
			if(printAllErrors || !erroIndex[errHash] || Math.random()<curiousErrorprinting){
				console.log('```sql')
				console.log(test.sql)
				console.log('')
				console.log(test.msg)
			//	console.log('Mimicking '+mimic)
				console.log('```')
				console.log('')
				erroIndex[errHash] = true;
			}
		}
	}
}




function verifyTest(fragment, db){

	//console.log('-----------------------------------------------')
		var req = runTest(fragment.sql, db)
		req.ok = (fragment.expectSuccess === req.success)


		
//if(false) // Converting returned values to expected result is still creating too many false positives
		if(fragment.result && req.success && req.ok){
			var ok;
      
      console.log(req.result)
			req.result = cleanResults(req.result)

      console.log(fragment.result)
      console.log(req.result)

      
			if(! (req.result && req.result.length)){
					req.msg = 'Query was expected to return results (but did not): '+JSON.stringify(req.result)
					req.ok = false
			}else if('list' === fragment.result.type){
				ok = comparray(req.result, fragment.result.values)

				if(!ok){
					
					//req.msg = 'Returned results was not as expected. Check the sorting'
					req.msg = 'Expected: '+JSON.stringify(fragment.result.values)+' but got '+JSON.stringify(req.result);
					//console.log('Expected:',fragment.result.values,'but got', req.result );
					//console.log();
					req.ok = ok
				}


			} else if('hash' === fragment.result.type){
				ok = req.result.length === +fragment.result.amount
				if(!ok){
					req.msg = req.result.length + ' results returned but expected ' + fragment.result.amount
					req.ok = ok
				}else{
					ok = md5(req.result.join(''))===fragment.result.hash

					if(!ok){
						req.msg = 'The hash of ' + req.result.length + ' returned values was different than expected. Check the sorting. '
						req.ok = ok
					}
				}
			}


		}

		/*
		console.log(fragment.expectSuccess)
		console.log(result.success)
		console.log(!(fragment.expectSuccess^result.success))*/
		//console.log(result)
		return req;
    // todo: implement handeling of results - and not just if it fails compilation

}

function cleanResults(result){
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

	result = [].concat.apply([], result);

	return result.map(function(x){
									if(true === x){
										return "1";
									}else if(false === x){
										return "0";
                  }else if('Infinity' === ''+x){
										return null;
									}else if('NaN' === ''+x){
										return null;
									}else if('undefined' === ''+x){
										return null;
									}else if('' === x){
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



function runTest(sql, db){

  sql = sql
          .replace(/\r|\n/g,' ')
          .replace(/[ ]{2,}/g,' ');
  //console.log(sql);
  var result;

  try {
    result = db.exec(sql)
	  //result = alasql.parse(sql);
  }
  catch(err) {
      return {success: false, msg: (err.message || 'no error msg'), sql:sql}
  }


  return {success: true, msg: 'No exception thrown', result:result, sql:sql}

}





function walkFiles(dir, reFilterYes, reFilterNo) {
    reFilterYes = reFilterYes || false;
    reFilterNo = reFilterNo || false;

    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        if(reFilterNo && reFilterNo.test(file))
            return;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
          results = results.concat(walkFiles(file, reFilterYes, reFilterNo))
        } else {
          if(reFilterYes && !reFilterYes.test(file))
            return;
          results.push(file)
        }
    })
    return results
}
