# alasql-logictest
sqllogictest for AlaSQL


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

[1] https://github.com/oriherrnstadt/SQLlogictest/tree/master/test

The format of the tests are desribed here: http://www.sqlite.org/sqllogictest/doc/trunk/about.wiki



ToDo
----

- Verify that the parser parses all the tests (ongoing development in the sqllogivtestparserV2.js)
- Impelment mocha for showing testresults
- Implement rest of returned results. demands 