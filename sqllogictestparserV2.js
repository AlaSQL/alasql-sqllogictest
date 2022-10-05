var fs = require('fs');
var PEG = require("peggy");
var _parserPath = __dirname+'/parser.peg';
//console.log('Initializing parser');
//console.time('Parser OK');
var _parserDescription = fs.readFileSync(_parserPath, "ASCII");
var _parser = PEG.generate(_parserDescription);
//console.timeEnd('Parser OK');



module.exports = function(path, ) {

	//path = './demo.test'
	
	var fs = require('fs');

	var parser = _parser;
	
	var commands = [];

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
		
		
		if(''===textCommands[i]){
			continue;
		}
		

		try{
			commands.push(parser.parse(textCommands[i]+"\n"));
		}catch(e){
			// output if could not be passed
			console.log('************ Error parseing test number', (i+1), 'in file', path);	
			console.log('previus one (passed):',textCommands[i-1]);
			console.log('this one (failed):', textCommands[i]);
			if(i+1 < textCommands.length)
				console.log('Next test to be passed:', textCommands[i+1]);
			console.log('');	
			console.log(JSON.stringify({error:e.message}));
			console.log('----------------');		
			console.log('');		
		}	
		

		
	}

	return commands;

};
