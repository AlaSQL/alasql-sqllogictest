import PEG from "peggy";
import { readFileSync } from "fs";
import { resolve } from "path";

const _parserPath = resolve(import.meta.dir, '../parser.peg');
const _parserDescription = readFileSync(_parserPath, "ASCII");
const _parser = PEG.generate(_parserDescription);

export default async function parseTestFile(path) {
	
	const parser = _parser;
	const commands = [];

	// Use Bun's native file reading for better performance
	const file = Bun.file(path);
	const fileContent = await file.text();
		
	const textCommands = fileContent
		.replace(/#\n/g, "#")		// remove comments
		.replace(/#[^\n]*/g, '')		// remove comments
		.replace(/\r/g, '')             // remove \r so can focus on LF and not CR? LF
		.replace(/\n{3,}/g, "\n\n")		// Make sure all double+ linespaces are uniform
		.trim()							// Trim the string so we dont get empty elements first and last
		.split("\n\n");					// Make array with one command in each chunk 

	for (let i = 0; i < textCommands.length; i++) {
		
		if('' === textCommands[i]){
			continue;
		}

		try {
			commands.push(parser.parse(textCommands[i] + "\n"));
		} catch(e) {
			// output if could not be passed
			console.log('************ Error parsing test number', (i+1), 'in file', path);	
			console.log('previous one (passed):', textCommands[i-1]);
			console.log('this one (failed):', textCommands[i]);
			if(i+1 < textCommands.length)
				console.log('Next test to be passed:', textCommands[i+1]);
			console.log('');	
			console.log(JSON.stringify({error: e.message}));
			console.log('----------------');		
			console.log('');		
		}	
	}

	return commands;
}
