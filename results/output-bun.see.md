2025-11-06T04:30:38.957Z target: alasql@4.7.0 (Bun 1.3.1)`

This is a subset of the total 622 tests.
Results from 620 test files:

---- ---- ---- ---- ---- ---- ----
### 1/620 [`/Users/mwulff/git/alasql-sqllogictest/test/evidence/in1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/evidence/in1.test)

_Mimic sqlite_

```sql
SELECT null IN ()

Expected: ["0"] but got ["NULL"]
```


```sql
SELECT 1 IN t1

undefined is not an object (evaluating 'p['undefined']['t1']')
```


```sql
INSERT INTO t5 SELECT * FROM t4

Cannot insert record, because it already exists in primary key index
```

_Fail found in statement setting up data so skipping rest of tests_

#### ☓ Ran 216 tests as _sqlite_

* 148 skipped
* 29 failed
* 18% was OK


---- ---- ---- ---- ---- ---- ----
### 2/620 [`/Users/mwulff/git/alasql-sqllogictest/test/evidence/in2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/evidence/in2.test)
