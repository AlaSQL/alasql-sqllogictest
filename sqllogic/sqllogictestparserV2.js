/*

var fs = require('fs');


var parserPath = './parser.txt'
var parserDescription = fs.readFileSync(parserPath, "ASCII");
var testDescription = fs.readFileSync(testPath, "ASCII");

console.log('Creating parser')
var parser = PEG.buildParser(parserDescription);
console.log('Parser OK')
console.log('')

	
console.log('Parseing test')	
console.log(parser.parse(testDescription));









*/

var fs = require('fs');
var PEG = require("pegjs");
var _parserPath = 'parser.peg';
//console.log('Initializing parser');
//console.time('Parser OK');
var _parserDescription = fs.readFileSync(_parserPath, "ASCII");
var _parser = PEG.buildParser(_parserDescription);
//console.timeEnd('Parser OK');



module.exports = function(path) {

	//path = './demo.test'
	
	var fs = require('fs');

	var parser = _parser;
	
	var commands = []

	var fileContent = fs.readFileSync(path, "ASCII");
		
	var textCommands=fileContent
								.replace(/#\n/g, "#")		// remove comments
								.replace(/#[^\n]*/g, '')		// remove comments
								.replace(/\r/g, '')             // remove \r so can focus on LF and not CR? LF
								.replace(/\n{3,}/g, "\n\n")		// Make sure all double+ linespaces are uniform
								.trim()							// Trim the string so we dont get empty elements first and last
								.split("\n\n")					// Make array with one command in each chunck 
								;
	//console.log(textCommands);


	for (var i = 0; i < textCommands.length; i++) {
		
		
		if(''==textCommands[i]){
			continue;
		}
		

		try{
			commands.push(parser.parse(textCommands[i]+"\n"));
		}catch(e){
			// output if could not be passed
			console.log('************ Error parseing test number', (i+1), 'in file', path)	
			console.log('previus one (passed):',textCommands[i-1]);
			console.log('this one (failed):', textCommands[i]);
			if(i+1 < textCommands.length)
				console.log('Next test to be passed:', textCommands[i+1]);
			console.log('')	
			console.log(JSON.stringify({error:e.message}))
			console.log('----------------')		
			console.log('')		
		}	
		

		
	};

	
	return commands;



};

 /*
 
 {
  function doInt(o) {
    return parseInt(o.join(""), 10);
  }

}

start 
  = nl* c:command trim? {return c}

trim
  = ([\n\t ]*) 


command
  = statement 
  / query   
  / hash 
  / halt 
  


halt
	= "halt"i 
  		{	
	  		return {
	  					command:'halt'
	  				}	 
	  	}

hash
	= "hash-threshold" _ maxResponses:[0-9]+ 
  		{
  			return {
  						command: 'setThreshold', 
  						maxResponses: doInt(maxResponses)
  					} 
  		}

statement
  = expect:statementExpectation _* nl sql:sql 
  	{
  		return {
  					command: 'execute', 
  					expectSucess: expect, 
  					sql:sql
  				}
  	}

statementExpectation
  = "statement"i ' ' v:statementOption {return v}

statementOption
  = "ok"i    {return true}
  / "fail"i  {return false}


sql
  = result:	(
				t:(!delimitor .) {return t[1];}
			)* 
		delimitor {return result.join("");}

delimitor
	= '\n----'
	/ !.

query
  = queryInit:queryInit? 
    queryMain:queryMain nl
    sql:sql nl
    result:result
    {
    	return {
			command: 'execute',
			expectSucess: true,
			sql: sql,
			result: result,
			skipif: queryInit.skipif || false,
			onlyif: queryInit.onlyif || false,
		}
    }

nl
	= "\n"

result
	= resultHash
	/ resultList
	/ resultVoid

resultHash
	= amount:$[0-9]+ 
		" values hashing to " 
		hash:alphanum 
		{
			return {
				type:'hash',
				amount: amount,
				hash:hash
			}
		}


resultList
	= list:(v:$[^\n]+ nl{return v})+
	{
		console.log(list)
		return {
			type:'list',
			values: list
		}
	}
	
resultVoid
	= nl* !. 
	{
		return{
			type:"void"
		}

	}
	

queryInit
  = c:queryInitCommand* 
  	{ 
  		var skipif = [];
  		var onlyif = [];
		for (var i = c.length - 1; i >= 0; i--) {
			if('skip' == c[i].type){
				skipif.push(c[i].val);
			} else if('only' == c[i].type){
				onlyif.push(c[i].val);
			}
		};
  		return {skipif:skipif,onlyif:onlyif}
  	}

queryInitCommand
  = "skipif"i ' ' v:alphanum nl {return {type:'skip', val: v}}
  / "onlyif"i ' ' v:alphanum nl {return {type:'only', val: v}}


queryMain
 = "query"i _ colInfo _ sortInfo

skipif
  = "skipif"i _ alphanum


colInfo
  = [SDI]+

sortInfo
  = "nosort"i
  / "rowsort"i


alphanum
  = $[a-z0-9]i+


_
	= ' '









 
 */