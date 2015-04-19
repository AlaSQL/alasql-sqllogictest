// Todo: implement mocha testframework
// Todo: verifying raw results 
// Todo: set threshold for hashing results
// Todo: verifying hashed results

var fs    = require("fs")
var util = require('util');
var alasql = require('./../alasql.js');
var sqllogictestparser =  require('./sqllogictestparser');
var db = alasql;
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


console.log(new Date().toISOString())

console.log('Preparing to run the following '+testfiles.length+' test files.')

if(testfiles.length<622){ // Todo: fix hardcode
	console.log('(Just to let you know: it looks like you are running a subset of the tests. Check out the config section of this file to run all tests.)')
}
	

console.log(testfiles);	


for (var i in testfiles) {
	console.time(testfiles[i])

	var name = testfiles[i].replace(/[^a-z0-1]/g,'_');
	var db = new alasql.Database(name);
	console.log('');
	console.log('-----------------------------');
	console.log('Looking at', testfiles[i]);
	console.log('');
	

	score.round.init();
	runSQLtestForFile(testfiles[i],  db);
	var roundCount = score.round.stat();

	console.log('Ran', roundCount.total, 'tests');
	console.log(score.percent(roundCount.ok, roundCount.fail) +'% was OK');
	console.log(roundCount.fail+ " was not")

	console.timeEnd(testfiles[i]);

  	console.log('');
	console.log('-----------------------------');

	console.log('');
	console.log('');
	
	console.log('***************** TOTAL RESULT AFTER '+(i+1)+' / '+testfiles.length+' test files')	
	console.log('Tests      :', score.ok.total+score.fail.total);
	console.log('Was OK     :', score.ok.total);
	console.log('Was not OK :', score.fail.total);
	console.log('Final score:', score.percent(score.ok.total, score.fail.total), '% was OK');
	console.log(util.inspect(process.memoryUsage()));
	console.log('*****************');
    console.log('');

}

console.log('***************** ALL TESTS COPMLETED ********************');
console.timeEnd('Total script time')





function runSQLtestForFile(path, db){
	
	if(resetErroIndexPerFile)
		erroIndex = {};
	
    var fragments = sqllogictestparser(path);

    for (var i = 0; i < fragments.length; i++) { 
       if('halt' == fragments[i].command)
           break;

        if('setThreshold' == fragments[i].command){
          //console.log('setThreshold not implemented');
          continue;
        }

       if('execute' != fragments[i].command){
          console.log('unknown command: ',fragments[i].command);
          continue;
        }  

        var test = verifyTest(fragments[i], db)

        if(test.ok){
          score.ok.total++
         } else {
           score.fail.total++;
		   
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
  
    var result = runTest(fragment.argument, db)
    result.ok = fragment.expectSuccess ===  result.succes
    return result;
    // todo: implement handeling of results - and not just if it fails compilation
  
}




function runTest(sql, db){
  
  sql = sql
          .replace(/\r|\n/g,' ')
          .replace(/[ ]{2,}/g,' ');
  
  var result;
  
  try {
      result = db.exec(sql)
  }
  catch(err) {
      return {succes: false, msg: err.message, sql:sql}
  }
  
   
  return {succes: true, result:result}

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