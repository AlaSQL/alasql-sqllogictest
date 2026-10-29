# SQLlogictest for AlaSQL

> Testing SQL compabillity for [AlaSQL](https://github.com/agershun/alasql) on the 5,047,257 tests from http://www.sqlite.org/sqllogictest

_See the [most recent result](./results/output.md)_


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

**Results output to:** `results/output.md`

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
| `yarn test [flags]` | `cmdmix 'bun run bun2-run/run.js %1 > results/output.md'` | Default test command (runs Bun2); flags go to `run.js`, for example `yarn test --debug --include evidence` |
| `bun run test-bun2` | `bun run bun2-run/run.js > results/output.md` | Bun2 multi-threaded tests (recommended), without flags |
| `bun run test-bun2-demo` | `bun run bun2-run/run.js --demo` | Bun2 demo tests only |
| `bun run test-bun` | `bun run bun-run/run.js > results/output-bun.md` | Bun single-threaded tests |
| `bun run test-bun-demo` | `bun run bun-run/run.js --demo` | Bun demo tests only |
| `bun run test-node` | `node --expose-gc node-run/run.js --light > results/output-node.md` | Node.js single-threaded tests |
| `bun run test-node-demo` | `node --expose-gc node-run/run.js --demo` | Node.js demo tests only |

**Note:** The `--light` flag means the tests will only parse the SQL and not execute the queries. This is faster and useful for identifying SQL compilation issues.

### Configuration Options

You can customize test execution by passing flags to the run scripts. With `yarn test` they go straight to `bun2-run/run.js`, for example `yarn test --debug --no-skipTests`.

| Flag | Default | Description |
|------|---------|-------------|
| `--only-run=FILE[,FILE]` | | Run exactly these test files (paths from the repo root, also `select4.test` and `select5.test`), ignoring `--include`, `--exclude` and `skipTests.line`; for example `yarn test --only-run=test/evidence/in1.test` |
| `--include=PATTERN` | | Only run test files whose path matches this regular expression |
| `--exclude=PATTERN` | | Skip test files whose path matches this regular expression |
| `--no-skipTests` | | Also run the 95 files listed in `skipTests.line` (see [What a run includes](#what-a-run-includes)) |
| `--concurrency=N` | the number of cores (1 with `--progress`) | Number of worker threads |
| `--progress` | | Print each test as it runs, in the same report, instead of a file's section when the file is done: the SQL as the test starts, then `✓` or `☓`, the time in ms (measured around the statement) and the reason for a failure when it ends. A statement that stalls the run is therefore the last line, without a time. Setup statements (`statement ok` that run) are summed up in one line per group; a failed setup statement and a `statement error` test get their own line. Uses one worker unless `--concurrency` is given, so the lines of files do not mix; for example `yarn test --only-run=test/select5.test --progress` |
| `--ignore-under-ms=N` | | With `--progress` (and turning it on): leave out the progress lines of tests that take less than N ms. The SQL of a test is printed once it has run N ms (so a stalling statement still shows, without a time), and its time when it ends; the exact moment of printing may be a few ms late, the time printed is exact. A setup statement that runs longer is printed on its own; the fast ones are summed up in a group line, printed when the group took N ms or more. Failures are printed as usual. The report says so at the top and gives the number of left-out tests in the final result; for example `yarn test --only-run=test/select4.test --ignore-under-ms=1000` shows only the slow queries |
| `--debug` | | Also write every failure, with the full SQL, to `results/debug.jsonl` (see [below](#failures-as-json-lines---debug)) |
| `--printAllErrors` | | Print every failure instead of a sample |
| `--curiousErrorprinting=SHARE` | `0.0003` | Besides the first failure of each kind, print about this share of the repeated ones |
| `--truncSQLStatement=N` | `300` | Cut printed SQL and error messages after N characters (`0` or `1`: never) |
| `--quiet` (or `--summary-only`) | | Print only the summary of each file, no failures |
| `--mimic=DIALECTS` | `sqlite` | The dialects the test files are read for (`skipif` and `onlyif` lines), comma-separated |
| `--light` (or `--onlyParseSql`) | | Only parse the SQL, do not run it (faster; finds parser problems) |
| `--demo` | | Run `demo.test` only (a quick check of the test parser) |

`ALASQL=path/to/alasql.fs.js yarn test` tests another AlaSQL build (for example a local `dist/` of develop); by default the npm package in `node_modules`. The report's second line names the version.

### What a run includes

The `test` folder has 622 test files. A run without `--only-run` leaves out:

- **`select4.test` and `select5.test`**, which used to take very long. Run them with `--only-run`; with AlaSQL 4.22.0 `select5.test` takes a few seconds, `select4.test` still much longer.
- **The 95 files in `skipTests.line`**, files that passed when the list was made. They are not run and are counted as "assumed still OK" in the final result. `--no-skipTests` runs them too.

So `yarn test` runs 525 files, and `yarn test --no-skipTests` all 620 files besides `select4.test` and `select5.test`.

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
- **Buffered output**: Test output is buffered per-file to avoid interleaving. With `--progress` (one worker) the worker reports the start and end of each test instead, and the main thread prints: a worker cannot print while AlaSQL runs a statement, the main thread can
- **Graceful shutdown**: Workers terminate cleanly when all jobs complete

Please see the config section in the respective `run.js` files to customize test execution.



What?
-----

The output of `run.js` is the output of each test file followed by the total score. (so you can keep track of the overall % of passed tests while its running)

There are 5,047,257 tests in the full test suite. Many of the tests will trigger the same kind of error - this is why the output will only print the same error the first time it comes forward. To have more examples, there is a (low) probability it print errors again even if it has been printed before. You can also choose to print all errors. Please see the config section in the run.js file.

The tests run against AlaSQL and their results are compared with the expected ones (see [Supported](#supported)). With `--light` the script only tests if the SQL can be parsed, not if the returned values are correct.


Output
------

The output from run.js is structured the following way:

- Date and time for the run, and the AlaSQL version tested
- How many test files are used, with a notice if this is not all test files in the test folder
- With `--progress`: what the report shows (and the `--ignore-under-ms` limit)
- For each test file
    - The name of the test file, linked to it on GitHub
    - With `--progress`: one line per test (or group of setup statements) as it runs, with its time
    - If errors occur, the SQL that triggered the error followed by the error or the difference in the result (a sample, see `--printAllErrors`)
    - A summary: how many tests ran and how long the file took, how many failed or were skipped, and the share that was OK
- The final result: the AlaSQL and Bun versions, the number of tests, failed and skipped, the tests assumed OK from `skipTests.line`, the final score, the progress lines left out by `--ignore-under-ms`, and the total script time

The output from a single testfile could look like this

> ### 11/32 [`test/index/delete/1000/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/index/delete/1000/slt_good_0.test)
> 
> _Mimic sqlite_
> 
> #### ★ Ran 11,924 tests as _sqlite_ in 1.2 s
> 
> * 100% was OK
> 
> `sqlite 11924 OK: ./test/index/delete/1000/slt_good_0.test`
 
It makes sense, as no errors were found. But it can also look like this:

> ### 6/32 [`test/index/commute/100/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/index/commute/100/slt_good_0.test)
> 
> _Mimic sqlite_
> 
> #### ☓ Ran 10,122 tests as _sqlite_ in 0.9 s
> 
> * 20 failed
> * 99% was OK
> 

making less sense as an error was found but was not printed. Because there are about 5 million tests in the full testset the same errors will be found many times. To limit noise an error only gets printed first time its seen (and a small share of the repeats, `--curiousErrorprinting`). `--printAllErrors` prints every one, and `--debug` writes every one to `results/debug.jsonl`.

With `--progress`, a test file's section is printed while it runs:

> ### 1/1 [`test/select5.test`](https://github.com/alasql/alasql-logictest/blob/master/test/select5.test)
> 
> _Mimic sqlite_
> - 704 setup statements ✓ 83 ms
> - `SELECT x29,x31,x51,x55 FROM t51,t29,t31,t55 WHERE a51=b31 AND a29=6 AND a29=b51 AND b55=a31` ✓ 4.1 ms
> - `SELECT x29,x31,x51,x55 FROM t31,t55,t29,t51 WHERE b55=a31 AND a51=b31 AND a29=6 AND b51=a29` ✓ 1.2 ms
> - ...

A statement that is still running when the run is stopped (or stalls it) is the last line, its SQL without a time:

> - `SELECT a3, a2, e1, a9+b9, e4*658+b1, x8 FROM t9, t3, t4, t1, t2, t8 WHERE a3=e1 AND ...` ✓ 2648 ms
> - `SELECT d1*631, a4+637+a1, a8, x6, c2, e3 FROM t6, t8, t2, t3, t4, t1 WHERE e8 in (548,632,981,646,63,487,859) AND ...`


Supported
---------

- Verify that the parser parses all the tests 

- Each value is rendered by the type the test declares for its column (`query III`, `query IRT`, ...), as the reference driver `slt_sqlite.c` does: `I` as a whole number (SQLite's `column_int64`: `2.5` is `2`, the text `'12x'` is `12`, `'abc'` is `0`), `R` as if by printf("%.3f"), `T` as text.

- NULL values are rendered as "NULL" for every type (AlaSQL's `NaN` and `Infinity` too, which it gives where SQL has NULL). Empty strings in a `T` column are rendered as "(empty)". Within non-empty strings, all control characters and unprintable characters are rendered as "@".

- Verification of returned values with the sort order set: `nosort` as returned, `rowsort` sorts the rows comparing value by value (as `strcmp` on each value), `valuesort` sorts all values. A result given as `N values hashing to H` is compared by the MD5 hash of the values, each followed by a new line.



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

## Failures as JSON lines (`--debug`)

`yarn test --debug` also writes every failure, with the full SQL, to `results/debug.jsonl`: one JSON object per line with `file`, `mimic`, `sql`, `msg`, `expected`, `got` (the values as rendered for the comparison), `colType` (the declared column types) and `sort` (the sort mode). `output.md` is written as before. The file is replaced on every `--debug` run and is in `.gitignore`.

`bun bun2-run/triage.js` sorts that file into known patterns, each with the AlaSQL issue that covers it, and lists the rest as new (`--new-only`, `--examples=N`, `--json`). Add a pattern to `KNOWN` in `triage.js` once its issue exists.
