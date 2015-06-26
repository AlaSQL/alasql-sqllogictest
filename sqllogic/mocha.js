

/*
var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})
*/

























// Todo: verifying raw results
// Todo: set threshold for hashing results
// Todo: verifying hashed results

var fs = require('fs');
//var alasql = require('../alasql.js');
var alasql = require('alasql');
var sqllogictestparser =  require('./sqllogictestparserV2');




// Config of what tests to run

var testfiles = walkFiles(
							'test', 					// Folder where to find test files

							/\.test$/, 					// Regexp for files to include (all files ending with .test )

														// Regexp for files to exclude - keep one and outcomment the rest
					//		null						// Exclude no files - As all tests contains a few million tests it can take some time. (622 files at this time)
					     /00\/|\d{2,}\.test/			// Exclude a lot of files (fastest - 125 files at the time)
					//		/\/10+\//					// exclude biggest files (balance between time and depth) (410 files)
						);


///////////////////




console.log(new Date().toISOString())

console.log('Preparing to run the following '+testfiles.length+' test files.')

if(testfiles.length<622){ // Todo: fix hardcode
	console.log('(Just to let you know: it looks like you are running a subset of the tests. Check out the config section of this file to run all tests.)')
}


for (var i in testfiles) {



	var name = testfiles[i].replace(/[^a-z0-1]/g,'_');
  describe(name, function(){
	 runSQLtestFromFile(testfiles[i],  name);
  })

//break;
}



function runSQLtestFromFile(path, name){

  var db = new alasql.Database(name);

console.log(name)

    var fragments = sqllogictestparser(path);


//console.log(fragments); //return;

    for (var i = 0; i < fragments.length; i++) {
      var fragment =fragments[i];
      if('halt' === fragment.command){
           //break;
           continue;

      } else if('setThreshold' === fragment.command){
          console.log('setThreshold not implemented');
          continue;

      }else if('execute' !== fragment.command){
          console.log('Unknown command: ',fragments[i].command);
          continue;
      }

      if(false === fragment.expectSuccess){
  			console.log('Expected error not implemented')
  			continue;
  		}

      var sql = fragment.sql.replace(/\r|\n/g,' ').replace(/[ ]{2,}/g,' ');
      describe(sql, function(){
        it('Compiles', function(){
            db.parse(sql);
        });

        it.skip('Returns correct results', function(){
          result = db.exec(sql)
          assert.equal(result, fragment.result) // todo: fix
        });

      })

    }
console.log(name,'done')

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
