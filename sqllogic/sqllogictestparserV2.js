/*

var fs = require('fs');
var PEG = require("pegjs");

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










module.exports = function(path) {
  
  var found = []
  var fs = require('fs');
  var fileContent = fs.readFileSync(path, "ASCII");
  //console.log(fileContent);
  
  var cleanCommentsOut = function(string){
      return string
                    .replace(/\s*#.*/g, '')
                    
                  ;
    
  }
  

/*
  var regexpCut = function(string){
      var toTest = [];
      var regex = {};

      regex.halt = /(?:^|\n)halt/i
      regex.setThreshold = /(?:^|\n)hash-threshold/i
      regex.statement = /(?:^|\n)statement/i
      regex.statement = /(?:^|\n)query/i




      var cuts=string
                    .replace(/\r/g, '')
                    .replace(/\n{3,}/g, "\n\n")
                    .split("\n\n")
                  ;

                  
      for (var i = 0; i < cuts.length; i++) {
          
        
        
        var tmp = {}
        

        
        
      
        if(m[nameMap.is.halt]){
            tmp.command = 'halt'
          
        } else if(m[nameMap.is.hashThreshold]){
            tmp.command = 'setThreshold'
            tmp.argument = m[nameMap.hashThreshold.maxResponses]
          
        } else  if(m[nameMap.is.statement]){
            tmp.command = 'execute';    
            tmp.argument = m[nameMap.statement.sql];
            tmp.expectSuccess = regexOk.test(m[nameMap.statement.expected]);
            
            
        } else if(m[nameMap.is.query]){
            tmp.command = 'execute';    
            tmp.argument = m[nameMap.query.sql]
            tmp.expectSuccess = true;
          
            tmp.skipif = m[nameMap.is.skipif]?true:false;
            if(tmp.skipif)
              tmp.skipifVal = m[nameMap.skipif.dbName] || '';
          
            tmp.onlyif = m[nameMap.is.onlyif]?true:false;
            if(tmp.onlyIf)
              tmp.onlyifVal = m[nameMap.onlyif.dbName] || '';
           
            tmp.resultIsList = m[nameMap.is.resultIsList]?true:false;
            if(tmp.resultIsList)
                tmp.resultList = m[nameMap.query.resultList] || '';

            tmp.resultIsHash = m[nameMap.is.resultIsHash]?true:false;
            if(tmp.resultIsHash){
                tmp.resultCount = m[nameMap.query.resultCount] || '';
                tmp.resultHash = m[nameMap.query.resultHash] || '';
            }
            
          
                
        } else {
          console.log('unknkown cut', m)
          continue;
          
        }
      
      cuts.push(tmp)

  };

  }

*/

  var regexpCut = function(string){
    
    // No group naming in javascript - use https://regex101.com/#javascript to help out
    var nameMap = {
                            is: {
                                  statement: 1
                                  ,
                                  hashThreshold: 16
                                 ,
                                  halt: 18 
                                  ,
                                  query: 8
                                  ,
                                  skipif: 4
                                  ,
                                  onlyif: 6
                                  ,
                                  resultIsList: 15
                                  ,
                                  resultIsHash: 14
                              
                            },
                            statement: {
                                  expected: 2
                                  ,
                                  sql: 3
                            },
                            hashThreshold: {
                                  maxResponses:17
                            },
                            query:{
                                colType: 9
                                ,
                                sortType: 10
                                ,
                                label: 11
                                ,
                                sql: 12
                                ,
                                resultCount: 13
                                ,
                                resultHash: 14
                                , 
                                resultList: 15
                                  
                            },
                            skipif :{
                                dbName: 5
                            },
                            onlyif :{
                                dbName: 7
                            }
      
                          }
    
    
  
    var re = /(?:(?:\n|^)(statement) (ok|fail)((?:\r?\n.+)+))|(?:\n(?:(skipif) (\w+)\r?\n)?(?:(onlyif) (\w+)\r?\n)?(query) (\w+) (\w+)? ?(\w+)?\r?\n([\s\S]+?)\n----(?:(?:\r?\n([0-9]+) values hashing to ([0-z0-9]+))|(?:((?:\r?\n.+)+))))|(?:(?:\n|^)(hash-threshold) (\d+))|(?:\n(halt))/mig; 
      
    var cuts = []

    var str = string;
    var regexOk = /ok/i

    while ((m = re.exec(str)) != null) {
       /* if (m.index === re.lastIndex) {
            re.lastIndex++;
        }*/
      
        
        var tmp = {}
        

        
        
      
        if(m[nameMap.is.halt]){
            tmp.command = 'halt'
          
        } else if(m[nameMap.is.hashThreshold]){
            tmp.command = 'setThreshold'
            tmp.argument = m[nameMap.hashThreshold.maxResponses]
          
        } else  if(m[nameMap.is.statement]){
            tmp.command = 'execute';    
            tmp.argument = m[nameMap.statement.sql];
            tmp.expectSuccess = regexOk.test(m[nameMap.statement.expected]);
            
            
        } else if(m[nameMap.is.query]){
            tmp.command = 'execute';    
            tmp.argument = m[nameMap.query.sql]
            tmp.expectSuccess = true;
          
            tmp.skipif = m[nameMap.is.skipif]?true:false;
            if(tmp.skipif)
              tmp.skipifVal = m[nameMap.skipif.dbName] || '';
          
            tmp.onlyif = m[nameMap.is.onlyif]?true:false;
            if(tmp.onlyIf)
              tmp.onlyifVal = m[nameMap.onlyif.dbName] || '';
           
            tmp.resultIsList = m[nameMap.is.resultIsList]?true:false;
            if(tmp.resultIsList)
                tmp.resultList = m[nameMap.query.resultList] || '';

            tmp.resultIsHash = m[nameMap.is.resultIsHash]?true:false;
            if(tmp.resultIsHash){
                tmp.resultCount = m[nameMap.query.resultCount] || '';
                tmp.resultHash = m[nameMap.query.resultHash] || '';
            }
            
          
                
        } else {
          console.log('unknkown cut', m)
          continue;
          
        }
      
      cuts.push(tmp)
      

    }
    
    return cuts;

  }
  
  

  
  
  
  return regexpCut(cleanCommentsOut(fileContent))
  

  
};

 