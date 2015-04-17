# SQLlogictest for AlaSQL

Testing SQL compabillity for [AlaSQL](https://github.com/agershun/alasql)


How?
----

Execute run.js in the sqllogic folder. As the output is very big its suggested to direct output to a file

    cd sqllogic
    node run.js > results.log


What?
-----

The output is the output of each test file followed by the total score. (so you can keep track on overall % of passed tests why its running)

There are about 2 million tests in the full test suite. Many of the tests will trigger the same kind of error - this is why the output will only print the same error the first time it comes forward. To have more examples it will randomly print errors even if it has been printes before. You can also choose to print all errors. Please see the config section in the run.js file.

Please note that the current version of the script **ONLY TESTS IF THE SQL CAN COMPILE** - not if the returned values are correct.



Why?
----

AlaSQL src should incooperate test cases from sqllogictest [1] to identify areas where AlaSQL does not comply with expectations to traditional SQL statements.

The goal (for now) is not to pass all the tests, but to help us describe (in the documentation) what AlaSQL does not support - and by that identify areas to improve for the library.

[1] https://github.com/grahn/sqllogictest/tree/master/test

The format of the tests are desribed here: http://www.sqlite.org/sqllogictest/doc/trunk/about.wiki



ToDo
----

- Verify that the parser parses all the tests (ongoing development in the sqllogivtestparserV2.js)
- Implement verification of returned results. 
- Impelment mocha testframework



Output
------

The output from run.js is structured the following way:

- Date and time for the run
- Information about how many test files will used
- [notice if this does not represent all test files in the test folder]
- Listing path to each testfile to be used
- For each test file
	- Name of the test file that is about to run
	- If errors occure the original SQL triggering the error is printed followed by the javascript error description. 
	- Summery of error rate in this test file and time consumption
	- Summery of error rate for all test file	
- Note stating: "ALL TESTS COPMLETED"

The output from a single testfile could look like this

	-----------------------------
	Looking at ./test/index/between/1/slt_good_0.test

	Ran 22 tests
	100% was OK
	0 was not
	./test/index/between/1/slt_good_0.test: 47ms

	-----------------------------

It makes sense, as no errors was found. But it can also look like this:

	-----------------------------
	Looking at ./test/evidence/slt_lang_update.test

	Ran 25 tests
	96% was OK
	1 was not
	./test/evidence/slt_lang_update.test: 98ms

	-----------------------------
	
That makes less sense as an error was found but was not printed. Because there are about 2 million tests in the full test set the same errors will be found many times. That is why an error only gets printed first time its seen. Settings for printing errors can be found in the config section of run.js


