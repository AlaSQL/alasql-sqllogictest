# SQLlogictest for AlaSQL

Testing SQL compabillity for [AlaSQL](https://github.com/agershun/alasql)


How?
----

Go get markdown summery run npm test :

    npm test

Result will output to `results/output.md`




What?
-----

The output of `run.js` is the output of each test file followed by the total score. (so you can keep track on overall % of passed tests why its running)

There are about 2 million tests in the full test suite. Many of the tests will trigger the same kind of error - this is why the output will only print the same error the first time it comes forward. To have more examples it will randomly print errors even if it has been printes before. You can also choose to print all errors. Please see the config section in the run.js file.

Please note that the current version of the script **ONLY TESTS IF THE SQL CAN COMPILE** - not if the returned values are correct.

To make sure you are testing the lates stable release please run the following:

    npm install alasql

Please see the config section of the `run` files to run tests on local version instead of npm version.



Why?
----

AlaSQL src should incooperate test cases from sqllogictest [1] to identify areas where AlaSQL does not comply with expectations to traditional SQL statements.

The goal (for now) is not to pass all the tests, but to help us describe (in the documentation) what AlaSQL does not support - and by that identify areas to improve for the library.

[1] https://github.com/grahn/sqllogictest/tree/master/test

The format of the tests are desribed here: http://www.sqlite.org/sqllogictest/doc/trunk/about.wiki

Supported
---------

- Verify that the parser parses all the tests 

- Floating point values are rendered as if by printf("%.3f").

- NULL values are rendered as "NULL". Empty strings are rendered as "(empty)". Within non-empty strings, all control characters and unprintable characters are rendered as "@".

- Implement verification of returned valued with sortorder set



ToDo
----



- Change the compabillity flags in alasql accordng to whats mimicked 

- implement:
> The <label> argument is also optional. If included, sqllogictest stores a hash of the results of this query under the given label. If the label is reused, then sqllogictest verifies that the results are the same. This can be used to verify that two or more queries in the same test script that are logically equivalent always generate the same output.



**Not ToDo**
- Impelment mocha testframework (testresults does not get printed before all are done - so fills the memory)


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

> ### 11/32 [`./test/index/delete/1000/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/delete/1000/slt_good_0.test)
> 
> _Mimic sqlite_
> 
> #### ★ Ran 11,924 tests as _sqlite_
> 
> * 100% was OK
> 
> `sqlite 11924 OK: ./test/index/delete/1000/slt_good_0.test`
 
It makes sense, as no errors was found. But it can also look like this:

> ### 6/32 [`./test/index/commute/100/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/100/slt_good_0.test)
> 
> _Mimic sqlite_
> 
> #### ☓ Ran 10,122 tests as _sqlite_
> 
> * 20 failed
> * 99% was OK
> 

making less sense as an error was found but was not printed. Because there are about 2 million tests in the full testset the same errors will be found many times. To limit noise an error only gets printed first time its seen. Settings for printing errors can be found in the config section of run.js
