# SQLlogictest for AlaSQL

> Testing SQL compabillity for [AlaSQL](https://github.com/agershun/alasql) on the 5,047,257 tests from http://www.sqlite.org/sqllogictest

_See the [most recent result](./results/output-bun2.md) - also available: [Bun](./results/output-bun.md) | [Node.js](./results/output-node.md)_


Why?
----

AlaSQL src should incorporate test cases from sqllogictest [1] to identify areas where AlaSQL does not comply with the expectations to traditional SQL statements.

The goal (for now) is not to pass all the tests, but to help us describe (in the documentation) what AlaSQL does not support - and by that identify areas to improve for the library.

[1] https://github.com/grahn/sqllogictest/tree/master/test

The format of the tests are desribed here: http://www.sqlite.org/sqllogictest/doc/trunk/about.wiki


How?
----

Install dependencies:

    bun install

To make sure you are testing the most recent version of AlaSQL please run:

    bun install alasql

## Running Tests

### Bun2 (Recommended) - Multi-threaded Workers
Run tests with Bun2 using parallel workers across multiple threads:

    bun run test-bun2
    # or run demo only
    bun run test-bun2-demo

**Results output to:** `results/output-bun2.md`

### Bun (Legacy) - Single-threaded
Run tests with Bun (single-threaded, faster than Node.js):

    bun run test-bun
    # or run demo only
    bun run test-bun-demo

**Results output to:** `results/output-bun.md`

### Node.js (Legacy) - Single-threaded
Run tests with Node.js (single-threaded, slowest):

    bun run test-node
    # or run demo only
    bun run test-node-demo

**Results output to:** `results/output-node.md`

### All Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `bun test` | `bun test-bun2` | Default test command (runs Bun2) |
| `bun run test-bun2` | `bun run bun2-run/run.js --light > results/output-bun2.md` | Bun2 multi-threaded tests (recommended) |
| `bun run test-bun2-demo` | `bun run bun2-run/run.js --demo --light` | Bun2 demo tests only |
| `bun run test-bun` | `bun run bun-run/run.js --light > results/output-bun.md` | Bun single-threaded tests |
| `bun run test-bun-demo` | `bun run bun-run/run.js --demo --light` | Bun demo tests only |
| `bun run test-node` | `node --expose-gc node-run/run.js --light > results/output-node.md` | Node.js single-threaded tests |
| `bun run test-node-demo` | `node --expose-gc node-run/run.js --demo --light` | Node.js demo tests only |

**Note:** The `--light` flag means the tests will only parse the SQL and not execute the queries. This is faster and useful for identifying SQL compilation issues.

### Configuration Options

You can customize test execution by passing flags to the run scripts:

| Flag | Description |
|------|-------------|
| `--light` | Only parse SQL, don't execute queries (faster) |
| `--demo` | Run demo tests only (quick validation during devleopment of test parser) |
| `--concurrency=N` | Set number of worker threads (Bun2 only) |
| `--include=PATTERN` | Only run test files matching regex pattern |
| `--exclude=PATTERN` | Skip test files matching regex pattern |
| `--printAllErrors` | Print all errors instead of sampling |
| `--no-skipTests` | Don't skip previously passed tests |
| `--mimic=DIALECTS` | Test against specific SQL dialects |

## Test Runners

This project includes three test runner implementations:

- **`bun2-run/`** - **(Recommended)** Bun implementation using persistent worker pool for true multi-threading across multiple CPU cores. Provides the best performance by utilizing all available CPU cores with parallel workers.
- **`bun-run/`** - Bun-optimized implementation leveraging Bun's native file I/O and faster runtime (single-threaded, 2-3x faster than Node.js)
- **`node-run/`** - Original Node.js implementation using paralleljs for multi-threading (legacy, slowest)

### Performance Comparison

| Runner | Threading | Performance | Use Case |
|--------|-----------|-------------|----------|
| **Bun2** | Multi-threaded workers | **Fastest** | Recommended for all testing |
| Bun | Single-threaded | Fast (2-3x vs Node) | Legacy Bun support |
| Node.js | Single-threaded | Baseline | Legacy Node.js support |

### Bun2 Architecture

Bun2 uses a persistent worker pool with the following advantages:
- **True parallelism**: Tests run simultaneously across multiple CPU cores
- **Worker reuse**: Workers are created once and reused across test files
- **Isolated state**: Each worker maintains isolated AlaSQL state (reset per job)
- **Shared parser**: PEG parser is generated once at startup and shared via file URL
- **Buffered output**: Test output is buffered per-file to avoid interleaving
- **Graceful shutdown**: Workers terminate cleanly when all jobs complete

Please see the config section in the respective `run.js` files to customize test execution.



What?
-----

The output of `run.js` is the output of each test file followed by the total score. (so you can keep track of the overall % of passed tests while its running)

There are 5,047,257 tests in the full test suite. Many of the tests will trigger the same kind of error - this is why the output will only print the same error the first time it comes forward. To have more examples, there is a (low) probability it print errors again even if it has been printed before. You can also choose to print all errors. Please see the config section in the run.js file.

Please note that the current version of the script **ONLY TESTS IF THE SQL CAN COMPILE** - not if the returned values are correct.


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
    - Summary of error rate in this test file and time consumption
    - Summary of error rate for all test file
- Note stating: "ALL TESTS COMPLETED"

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
 
It makes sense, as no errors were found. But it can also look like this:

> ### 6/32 [`./test/index/commute/100/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/100/slt_good_0.test)
> 
> _Mimic sqlite_
> 
> #### ☓ Ran 10,122 tests as _sqlite_
> 
> * 20 failed
> * 99% was OK
> 

making less sense as an error was found but was not printed. Because there are about 5 million tests in the full testset the same errors will be found many times. To limit noise an error only gets printed first time its seen. Settings for printing errors can be found in the config section of run.js


Supported
---------

- Verify that the parser parses all the tests 

- Floating point values are rendered as if by printf("%.3f").

- NULL values are rendered as "NULL". Empty strings are rendered as "(empty)". Within non-empty strings, all control characters and unprintable characters are rendered as "@".

- Implement verification of returned valued with sortorder set



ToDo
----



- Change the compatibility flags in AlaSQL according to whats mimicked 

- implement:
> The <label> argument is also optional. If included, sqllogictest stores a hash of the results of this query under the given label. If the label is reused, then sqllogictest verifies that the results are the same. This can be used to verify that two or more queries in the same test script that are logically equivalent always generate the same output.



## Not ToDo
- Implement mocha testframework (testresults does not get printed before all are done - so it fills the memory)


## Ideas

Potential improvements and features for this repository:

- `--bail` option to stop on first error for faster turnaround during AI-driven try-and-retry sessions for fixing AlaSQL
- Error categorization to automatically group and categorize errors by type (syntax, function, operator, etc.) for easier debugging
- Comparison mode to compare test results between AlaSQL versions or against other SQL engines
- Performance profiling to track and visualize performance metrics across test runs
