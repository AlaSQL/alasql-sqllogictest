# SQLlogictest results for AlaSQL 

`2025-11-06T04:11:18.718Z target: alasql@4.7.0`

This is a subset of the total 622 tests.
Results from 620 test files:

---- ---- ---- ---- ---- ---- ----
### 1/620 [`/Users/mwulff/git/alasql-sqllogictest/test/evidence/in1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/evidence/in1.test)

_Mimic sqlite_

```sql
SELECT null IN ()

Expected: ["0"] but got ["NULL"]
```


_Fail found in statement setting up data so skipping rest of tests_

#### ☓ Ran 217 tests as _sqlite_

* 149 skipped
* 29 failed
* 17% was OK


---- ---- ---- ---- ---- ---- ----
### 2/620 [`/Users/mwulff/git/alasql-sqllogictest/test/evidence/in2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/evidence/in2.test)
