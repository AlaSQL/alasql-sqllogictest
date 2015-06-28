// Todo: implement mocha testframework
// Todo: verifying raw results
// Todo: set threshold for hashing results
// Todo: verifying hashed results

var fs    = require("fs")
var util = require('util');
var pretty = require('prettysize');
var md5    = require("MD5")
var comparray = require('comparray');
var alasql = require('./alasql.js');
var sqllogictestparser =  require('./sqllogictestparserV2');

alasql.options.modifier = "MATRIX";
alasql.options.cache = false;


console.time('Total script time')


///////////// CONFIG ////////////////////

// If set to false an error will only be printed first time ic occures in all test files.
var printAllErrors = false;

// If set to false an error will only be printed at first occurence in all test files. If set to true an error will be printed at first occurence in each test file
var resetErroIndexPerFile = false;

// Sometimes you would like to have more examples of the same error. Set this between 0 and 1 to set the probabillity of an error getting printed in case it has been printes before
var curiousErrorprinting = 0.0001;




// Config of what tests to run

var testfiles = walkFiles(
							'./test', 					// Folder where to find test files

							/\.test$/, 					// Regexp for files to include (all files ending with .test )

														// Regexp for files to exclude - keep one and outcomment the rest
					//		null						// Exclude no files - As all tests contains a few million tests it can take some time. (622 files at this time)
							/00\/|\d{2,}\.test/			// Exclude a lot of files (fastest - 125 files at the time)
					//		/\/10+\//					// exclude biggest files (balance between time and depth) (410 files)
						);


///////////////////



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

//*
console.log('')
runSQLtestFromFile('demo.test',  new alasql.Database('ede32'));
console.log('')
return;
//*/

console.log(new Date().toISOString())

console.log('Preparing to run the following '+testfiles.length+' test files.')

if(testfiles.length<622){ // Todo: fix hardcode
	console.log('(Just to let you know: it looks like you are running a subset of the tests. Check out the config section of this file to run all tests.)')
}


console.log(testfiles);


for (var i in testfiles) {

	//If node get the flag --expose-gc we can invoke garbagecollection manually.
	if (typeof global != 'undefined' && typeof(global.gc) === "function") {
		console.time('Garbagecollecting')
		global.gc();
		console.timeEnd('Garbagecollecting')
	}

	console.time(testfiles[i])

	console.log('');
	console.log('-----------------------------');
	console.log('Looking at', testfiles[i]);
	printMem()
	console.log('');


	var name = testfiles[i].replace(/[^a-z0-9]/mig,'_');
	var db = new alasql.Database(name);


	score.round.init();
	runSQLtestFromFile(testfiles[i],  db);

	var roundCount = score.round.stat();

	console.log('Ran', roundCount.total, 'tests');
	console.log(score.percent(roundCount.ok, roundCount.fail) +'% was OK');
	console.log(roundCount.fail+ " was not")

	console.timeEnd(testfiles[i]);

	printStats();
//break;
}

console.log('***************** ALL TESTS COPMLETED ********************');
console.timeEnd('Total script time')



function printStats(){
	  	console.log('');
	console.log('-----------------------------');

	console.log('');
	console.log('');

	console.log('***************** TOTAL RESULT AFTER ',(1+i),' / ',testfiles.length,' test files')
	console.log('Tests      :', score.ok.total+score.fail.total);
	console.log('Was OK     :', score.ok.total);
	console.log('Was not OK :', score.fail.total);
	console.log('Final score:', score.percent(score.ok.total, score.fail.total), '% was OK');

	printMem();

	console.log('*****************');
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



function runSQLtestFromFile(path, db){

	if(resetErroIndexPerFile)
		erroIndex = {};

    var fragments = sqllogictestparser(path);




    for (var i = 0; i < fragments.length; i++) {
			console.log(fragments[i]);

       if('halt' == fragments[i].command)
           //break;
					continue;

        if('setThreshold' == fragments[i].command){
          //console.log('setThreshold not implemented');
          continue;
        }

       if('execute' != fragments[i].command){
          console.log('unknown command: ',fragments[i].command);
          continue;
        }


		if(false === fragments[i].expectSuccess){
			//console.log('Expected error not implemented')
			continue;
		}

        var test = verifyTest(fragments[i], db)

        if(test.ok){
          score.ok.total++
         } else {
           score.fail.total++;

			//console.log(test)

		   var errHash = test.msg.split('-----^').pop()/*.split("'").unshift()*/.replace(/[^a-z]/mig, '')

		   // The hashing of the errors gives us first error per error type. The math random is there to give os 1% of all errors so we have some different examples. Should be avoided when we have the worst error types implemented correctly.
		   if(printAllErrors || !erroIndex[errHash] || Math.random()<curiousErrorprinting){
			   console.log(test.sql)
			   console.log('')
			   console.log(test.msg)
			   console.log('')
			   console.log('')
			   console.log('')
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
		if(fragment.result && req.success && req.ok){
			var ok;
			req.result = cleanResults(req.result)
//console.log(fragment.result)
//console.log(fragment.sql)
//console.log(req.result)

			if(!req.result){
					req.msg = 'Query was expected to return results (but did not)'
					req.ok = false
			}else if('list' === fragment.result.type){
				ok = comparray(req.result, fragment.result.values)

				if(!ok){
					req.msg = 'List of result did not match expected. Check the sorting'
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
	// I expect matrix respond
	if(result[0] && result[0][0]){
		result = [].concat.apply([], result);
	}

	return result.map(function(x){
																	if(null === x){
																		return "NULL"
																	}else if(''===x){
																		return "(empty)"
																	}
																	// fix %3d for floats;
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
      return {success: false, msg: (err.message || 'No error msg'), sql:sql, result:null}
  }


  return {success: true, result:result, sql:sql}

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
