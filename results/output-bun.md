# SQLlogictest results for AlaSQL (Bun runtime)

`2025-11-06T04:34:16.400Z target: alasql@4.7.0 (Bun 1.3.1)`

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

#### ☓ Ran 217 tests as _sqlite_

* 149 skipped
* 29 failed
* 17% was OK


---- ---- ---- ---- ---- ---- ----
### 2/620 [`/Users/mwulff/git/alasql-sqllogictest/test/evidence/in2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/evidence/in2.test)

_Mimic sqlite_

```sql
SELECT 1 FROM t1 WHERE NULL NOT IN ()

Query was expected to return results (but did not)
```


```sql
SELECT 1 FROM t1 WHERE 1 IN (SELECT 1,2)

Expected to get an error but did not
```

#### ☓ Ran 53 tests as _sqlite_

* 8 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 3/620 [`/Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_aggfunc.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_aggfunc.test)

_Mimic sqlite_

```sql
SELECT avg(DISTINCT x) FROM t1

Expected: ["0"] but got ["0.500"]
```


```sql
SELECT group_concat(y) FROM t1

Expected: ["NULL"] but got ["true,false,NULL,true,true"]
```


```sql
SELECT group_concat(DISTINCT y) FROM t1

Expected: ["NULL"] but got ["true,false,NULL"]
```


```sql
SELECT group_concat(x) FROM t1 NOT INDEXED

Expected: ["1,0,2,2"] but got ["1,0,undefined,2,2"]
```


```sql
SELECT sum(x) FROM t1 WHERE y='null'

Expected: ["NULL"] but got ["0"]
```

#### ☓ Ran 80 tests as _sqlite_

* 24 failed
* 70% was OK


---- ---- ---- ---- ---- ---- ----
### 4/620 [`/Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_createtrigger.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_createtrigger.test)

_Mimic sqlite_
#### ☓ Ran 26 tests as _sqlite_

* 1 failed
* 96% was OK


---- ---- ---- ---- ---- ---- ----
### 5/620 [`/Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_createview.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_createview.test)

_Mimic sqlite_
#### ☓ Ran 23 tests as _sqlite_

* 8 failed
* 65% was OK


---- ---- ---- ---- ---- ---- ----
### 6/620 [`/Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_dropindex.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_dropindex.test)

_Mimic sqlite_
#### ☓ Ran 8 tests as _sqlite_

* 2 failed
* 75% was OK


---- ---- ---- ---- ---- ---- ----
### 7/620 [`/Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_droptable.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_droptable.test)

_Mimic sqlite_
#### ☓ Ran 12 tests as _sqlite_

* 1 failed
* 91% was OK


---- ---- ---- ---- ---- ---- ----
### 8/620 [`/Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_droptrigger.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_droptrigger.test)

_Mimic sqlite_
#### ★ Ran 12 tests as _sqlite_

* 100% was OK

`sqlite 12 OK: /Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_droptrigger.test`


---- ---- ---- ---- ---- ---- ----
### 9/620 [`/Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_dropview.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_dropview.test)

_Mimic sqlite_
#### ☓ Ran 13 tests as _sqlite_

* 1 failed
* 92% was OK


---- ---- ---- ---- ---- ---- ----
### 10/620 [`/Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_reindex.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_reindex.test)

_Mimic sqlite_
#### ★ Ran 7 tests as _sqlite_

* 100% was OK

`sqlite 7 OK: /Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_reindex.test`


---- ---- ---- ---- ---- ---- ----
### 11/620 [`/Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_replace.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_replace.test)

_Mimic sqlite_
#### ★ Ran 14 tests as _sqlite_

* 100% was OK

`sqlite 14 OK: /Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_replace.test`


---- ---- ---- ---- ---- ---- ----
### 12/620 [`/Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_update.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/evidence/slt_lang_update.test)

_Mimic sqlite_
#### ☓ Ran 27 tests as _sqlite_

* 2 failed
* 92% was OK


---- ---- ---- ---- ---- ---- ----
### 13/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/between/1/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/between/1/slt_good_0.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col0 IS NULL) AND ((col0 IN (SELECT col3 FROM tab0 WHERE col1 IN (SELECT col4 FROM tab0 WHERE col4 > 4.43) OR col3 = 7 AND ((col3 >= 2)) AND col4 IN (4.79,4.35,6.77,0.17,8.22) OR (col0 < 8) AND (col0 >= 6) AND col3 >= 8 AND col3 <= 7 AND col3 < 3 AND col3 IS NULL AND col3…

undefined is not an object (evaluating 'this.queriesfn[0]')
```

#### ☓ Ran 10,022 tests as _sqlite_

* 50 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 14/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/between/10/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/between/10/slt_good_0.test)

_Mimic sqlite_
#### ☓ Ran 10,033 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 15/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/between/10/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/between/10/slt_good_1.test)

_Mimic sqlite_
#### ☓ Ran 10,029 tests as _sqlite_

* 100 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 16/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/between/10/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/between/10/slt_good_2.test)

_Mimic sqlite_
#### ☓ Ran 10,032 tests as _sqlite_

* 80 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 17/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/between/10/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/between/10/slt_good_3.test)

_Mimic sqlite_
#### ☓ Ran 10,032 tests as _sqlite_

* 40 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 18/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/between/10/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/between/10/slt_good_4.test)

_Mimic sqlite_
#### ☓ Ran 10,032 tests as _sqlite_

* 50 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 19/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/between/10/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/between/10/slt_good_5.test)

_Mimic sqlite_
#### ☓ Ran 10,031 tests as _sqlite_

* 90 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 20/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/between/100/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/between/100/slt_good_0.test)

_Mimic sqlite_
#### ☓ Ran 10,123 tests as _sqlite_

* 70 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 21/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/between/100/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/between/100/slt_good_1.test)

_Mimic sqlite_
#### ☓ Ran 10,125 tests as _sqlite_

* 70 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 22/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/between/100/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/between/100/slt_good_2.test)

_Mimic sqlite_
#### ☓ Ran 10,121 tests as _sqlite_

* 80 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 23/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/between/100/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/between/100/slt_good_3.test)

_Mimic sqlite_
#### ☓ Ran 10,121 tests as _sqlite_

* 90 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 24/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/between/100/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/between/100/slt_good_4.test)

_Mimic sqlite_
#### ☓ Ran 10,125 tests as _sqlite_

* 90 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 25/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/between/1000/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/between/1000/slt_good_0.test)

_Mimic sqlite_
#### ☓ Ran 3,792 tests as _sqlite_

* 41 failed
* 98% was OK


---- ---- ---- ---- ---- ---- ----
### 26/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_0.test)

_Mimic sqlite_
#### ☓ Ran 10,034 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 27/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_1.test)

_Mimic sqlite_
#### ☓ Ran 10,030 tests as _sqlite_

* 50 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 28/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_10.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_10.test)

_Mimic sqlite_
#### ☓ Ran 4,261 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 29/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_11.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_11.test)

_Mimic sqlite_
#### ☓ Ran 10,032 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 30/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_12.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_12.test)

_Mimic sqlite_
#### ☓ Ran 10,031 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 31/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_13.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_13.test)

_Mimic sqlite_
#### ☓ Ran 10,032 tests as _sqlite_

* 40 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 32/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_14.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_14.test)

_Mimic sqlite_
#### ☓ Ran 10,032 tests as _sqlite_

* 50 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 33/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_15.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_15.test)

_Mimic sqlite_
#### ☓ Ran 10,030 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 34/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_16.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_16.test)

_Mimic sqlite_
#### ★ Ran 10,032 tests as _sqlite_

* 100% was OK

`sqlite 10032 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_16.test`


---- ---- ---- ---- ---- ---- ----
### 35/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_17.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_17.test)

_Mimic sqlite_
#### ★ Ran 10,031 tests as _sqlite_

* 100% was OK

`sqlite 10031 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_17.test`


---- ---- ---- ---- ---- ---- ----
### 36/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_18.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_18.test)

_Mimic sqlite_
#### ☓ Ran 10,034 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 37/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_19.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_19.test)

_Mimic sqlite_
#### ☓ Ran 10,031 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 38/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_2.test)

_Mimic sqlite_
#### ☓ Ran 10,037 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 39/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_20.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_20.test)

_Mimic sqlite_
#### ☓ Ran 10,032 tests as _sqlite_

* 40 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 40/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_21.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_21.test)

_Mimic sqlite_
#### ☓ Ran 10,030 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 41/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_22.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_22.test)

_Mimic sqlite_
#### ★ Ran 10,033 tests as _sqlite_

* 100% was OK

`sqlite 10033 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_22.test`


---- ---- ---- ---- ---- ---- ----
### 42/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_23.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_23.test)

_Mimic sqlite_
#### ☓ Ran 10,033 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 43/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_24.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_24.test)

_Mimic sqlite_
#### ☓ Ran 10,033 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 44/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_25.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_25.test)

_Mimic sqlite_
#### ☓ Ran 10,030 tests as _sqlite_

* 40 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 45/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_26.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_26.test)

_Mimic sqlite_
#### ★ Ran 10,031 tests as _sqlite_

* 100% was OK

`sqlite 10031 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_26.test`


---- ---- ---- ---- ---- ---- ----
### 46/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_27.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_27.test)

_Mimic sqlite_
#### ☓ Ran 10,033 tests as _sqlite_

* 30 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 47/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_28.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_28.test)

_Mimic sqlite_
#### ☓ Ran 10,033 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 48/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_29.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_29.test)

_Mimic sqlite_
#### ☓ Ran 10,032 tests as _sqlite_

* 30 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 49/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_3.test)

_Mimic sqlite_
#### ★ Ran 10,032 tests as _sqlite_

* 100% was OK

`sqlite 10032 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_3.test`


---- ---- ---- ---- ---- ---- ----
### 50/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_30.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_30.test)

_Mimic sqlite_
#### ☓ Ran 10,032 tests as _sqlite_

* 30 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 51/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_31.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_31.test)

_Mimic sqlite_
#### ☓ Ran 10,033 tests as _sqlite_

* 30 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 52/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_32.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_32.test)

_Mimic sqlite_
#### ☓ Ran 10,032 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 53/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_33.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_33.test)

_Mimic sqlite_
#### ☓ Ran 10,034 tests as _sqlite_

* 40 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 54/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_34.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_34.test)

_Mimic sqlite_
#### ☓ Ran 10,032 tests as _sqlite_

* 50 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 55/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_4.test)

_Mimic sqlite_
#### ☓ Ran 10,030 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 56/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_5.test)

_Mimic sqlite_
#### ☓ Ran 10,032 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 57/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_6.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_6.test)

_Mimic sqlite_
#### ☓ Ran 10,036 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 58/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_7.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_7.test)

_Mimic sqlite_
#### ☓ Ran 10,034 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 59/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_8.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_8.test)

_Mimic sqlite_
#### ★ Ran 10,032 tests as _sqlite_

* 100% was OK

`sqlite 10032 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_8.test`


---- ---- ---- ---- ---- ---- ----
### 60/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_9.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/10/slt_good_9.test)

_Mimic sqlite_
#### ☓ Ran 10,034 tests as _sqlite_

* 30 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 61/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_0.test)

_Mimic sqlite_
#### ☓ Ran 10,122 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 62/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_1.test)

_Mimic sqlite_
#### ☓ Ran 10,120 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 63/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_10.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_10.test)

_Mimic sqlite_
#### ☓ Ran 10,124 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 64/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_11.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_11.test)

_Mimic sqlite_
#### ☓ Ran 10,123 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 65/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_12.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_12.test)

_Mimic sqlite_
#### ☓ Ran 10,123 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 66/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_2.test)

_Mimic sqlite_
#### ☓ Ran 10,123 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 67/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_3.test)

_Mimic sqlite_
#### ☓ Ran 10,121 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 68/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_4.test)

_Mimic sqlite_
#### ☓ Ran 10,124 tests as _sqlite_

* 30 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 69/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_5.test)

_Mimic sqlite_
#### ☓ Ran 10,121 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 70/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_6.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_6.test)

_Mimic sqlite_
#### ☓ Ran 10,122 tests as _sqlite_

* 30 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 71/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_7.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_7.test)

_Mimic sqlite_
#### ☓ Ran 10,123 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 72/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_8.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_8.test)

_Mimic sqlite_
#### ☓ Ran 10,122 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 73/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_9.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_9.test)

_Mimic sqlite_
#### ★ Ran 10,123 tests as _sqlite_

* 100% was OK

`sqlite 10123 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/commute/100/slt_good_9.test`


---- ---- ---- ---- ---- ---- ----
### 74/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/1000/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/1000/slt_good_0.test)

_Mimic sqlite_
#### ★ Ran 4,741 tests as _sqlite_

* 100% was OK

`sqlite 4741 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/commute/1000/slt_good_0.test`


---- ---- ---- ---- ---- ---- ----
### 75/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/1000/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/1000/slt_good_1.test)

_Mimic sqlite_
#### ☓ Ran 10,583 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 76/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/1000/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/1000/slt_good_2.test)

_Mimic sqlite_
#### ☓ Ran 11,021 tests as _sqlite_

* 40 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 77/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/commute/1000/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/commute/1000/slt_good_3.test)

_Mimic sqlite_
#### ☓ Ran 11,025 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 78/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/delete/1/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/delete/1/slt_good_0.test)

_Mimic sqlite_
#### ★ Ran 10,907 tests as _sqlite_

* 100% was OK

`sqlite 10907 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/delete/1/slt_good_0.test`


---- ---- ---- ---- ---- ---- ----
### 79/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/delete/10/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/delete/10/slt_good_0.test)

_Mimic sqlite_
#### ★ Ran 10,730 tests as _sqlite_

* 100% was OK

`sqlite 10730 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/delete/10/slt_good_0.test`


---- ---- ---- ---- ---- ---- ----
### 80/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/delete/10/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/delete/10/slt_good_1.test)

_Mimic sqlite_
#### ★ Ran 10,774 tests as _sqlite_

* 100% was OK

`sqlite 10774 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/delete/10/slt_good_1.test`


---- ---- ---- ---- ---- ---- ----
### 81/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/delete/10/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/delete/10/slt_good_2.test)

_Mimic sqlite_
#### ★ Ran 9,390 tests as _sqlite_

* 100% was OK

`sqlite 9390 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/delete/10/slt_good_2.test`


---- ---- ---- ---- ---- ---- ----
### 82/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/delete/10/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/delete/10/slt_good_3.test)

_Mimic sqlite_
#### ★ Ran 10,065 tests as _sqlite_

* 100% was OK

`sqlite 10065 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/delete/10/slt_good_3.test`


---- ---- ---- ---- ---- ---- ----
### 83/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/delete/10/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/delete/10/slt_good_4.test)

_Mimic sqlite_
#### ★ Ran 10,599 tests as _sqlite_

* 100% was OK

`sqlite 10599 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/delete/10/slt_good_4.test`


---- ---- ---- ---- ---- ---- ----
### 84/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/delete/10/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/delete/10/slt_good_5.test)

_Mimic sqlite_
#### ★ Ran 10,353 tests as _sqlite_

* 100% was OK

`sqlite 10353 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/delete/10/slt_good_5.test`


---- ---- ---- ---- ---- ---- ----
### 85/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/delete/100/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/delete/100/slt_good_0.test)

_Mimic sqlite_
#### ★ Ran 11,145 tests as _sqlite_

* 100% was OK

`sqlite 11145 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/delete/100/slt_good_0.test`


---- ---- ---- ---- ---- ---- ----
### 86/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/delete/100/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/delete/100/slt_good_1.test)

_Mimic sqlite_
#### ★ Ran 10,895 tests as _sqlite_

* 100% was OK

`sqlite 10895 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/delete/100/slt_good_1.test`


---- ---- ---- ---- ---- ---- ----
### 87/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/delete/100/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/delete/100/slt_good_2.test)

_Mimic sqlite_
#### ★ Ran 11,033 tests as _sqlite_

* 100% was OK

`sqlite 11033 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/delete/100/slt_good_2.test`


---- ---- ---- ---- ---- ---- ----
### 88/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/delete/100/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/delete/100/slt_good_3.test)

_Mimic sqlite_
#### ★ Ran 10,942 tests as _sqlite_

* 100% was OK

`sqlite 10942 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/delete/100/slt_good_3.test`


---- ---- ---- ---- ---- ---- ----
### 89/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/delete/1000/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/delete/1000/slt_good_0.test)

_Mimic sqlite_
_Fail found in statement setting up data so skipping rest of tests_

#### ☓ Ran 11,925 tests as _sqlite_

* 3,442 skipped
* 1 failed
* 71% was OK


---- ---- ---- ---- ---- ---- ----
### 90/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/delete/1000/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/delete/1000/slt_good_1.test)

_Mimic sqlite_
_Fail found in statement setting up data so skipping rest of tests_

#### ☓ Ran 11,839 tests as _sqlite_

* 5,400 skipped
* 1 failed
* 54% was OK


---- ---- ---- ---- ---- ---- ----
### 91/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/delete/10000/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/delete/10000/slt_good_0.test)

_Mimic sqlite_
#### ★ Ran 20,347 tests as _sqlite_

* 100% was OK

`sqlite 20347 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/delete/10000/slt_good_0.test`


---- ---- ---- ---- ---- ---- ----
### 92/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/in/10/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/in/10/slt_good_0.test)

_Mimic sqlite_
#### ☓ Ran 10,035 tests as _sqlite_

* 45 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 93/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/in/10/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/in/10/slt_good_1.test)

_Mimic sqlite_
#### ☓ Ran 10,036 tests as _sqlite_

* 120 failed
* 98% was OK


---- ---- ---- ---- ---- ---- ----
### 94/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/in/10/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/in/10/slt_good_2.test)

_Mimic sqlite_
#### ☓ Ran 10,035 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 95/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/in/10/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/in/10/slt_good_3.test)

_Mimic sqlite_
#### ☓ Ran 10,037 tests as _sqlite_

* 105 failed
* 98% was OK


---- ---- ---- ---- ---- ---- ----
### 96/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/in/10/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/in/10/slt_good_4.test)

_Mimic sqlite_
#### ☓ Ran 10,038 tests as _sqlite_

* 75 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 97/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/in/10/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/in/10/slt_good_5.test)

_Mimic sqlite_
#### ☓ Ran 10,038 tests as _sqlite_

* 120 failed
* 98% was OK


---- ---- ---- ---- ---- ---- ----
### 98/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/in/100/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/in/100/slt_good_0.test)

_Mimic sqlite_
#### ☓ Ran 10,128 tests as _sqlite_

* 90 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 99/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/in/100/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/in/100/slt_good_1.test)

_Mimic sqlite_
#### ☓ Ran 10,127 tests as _sqlite_

* 15 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 100/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/in/100/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/in/100/slt_good_2.test)

_Mimic sqlite_
#### ☓ Ran 10,128 tests as _sqlite_

* 90 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 101/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/in/100/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/in/100/slt_good_3.test)

_Mimic sqlite_
#### ☓ Ran 10,126 tests as _sqlite_

* 45 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 102/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/in/100/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/in/100/slt_good_4.test)

_Mimic sqlite_
#### ☓ Ran 10,127 tests as _sqlite_

* 120 failed
* 98% was OK


---- ---- ---- ---- ---- ---- ----
### 103/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/in/1000/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/in/1000/slt_good_0.test)

_Mimic sqlite_
#### ☓ Ran 11,028 tests as _sqlite_

* 105 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 104/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/in/1000/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/in/1000/slt_good_1.test)

_Mimic sqlite_
#### ☓ Ran 11,024 tests as _sqlite_

* 45 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 105/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_0.test)

_Mimic sqlite_
#### ★ Ran 10,053 tests as _sqlite_

* 100% was OK

`sqlite 10053 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_0.test`


---- ---- ---- ---- ---- ---- ----
### 106/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_1.test)

_Mimic sqlite_
#### ★ Ran 10,054 tests as _sqlite_

* 100% was OK

`sqlite 10054 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_1.test`


---- ---- ---- ---- ---- ---- ----
### 107/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_10.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_10.test)

_Mimic sqlite_
#### ★ Ran 10,051 tests as _sqlite_

* 100% was OK

`sqlite 10051 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_10.test`


---- ---- ---- ---- ---- ---- ----
### 108/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_11.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_11.test)

_Mimic sqlite_
#### ★ Ran 10,053 tests as _sqlite_

* 100% was OK

`sqlite 10053 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_11.test`


---- ---- ---- ---- ---- ---- ----
### 109/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_12.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_12.test)

_Mimic sqlite_
#### ★ Ran 10,053 tests as _sqlite_

* 100% was OK

`sqlite 10053 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_12.test`


---- ---- ---- ---- ---- ---- ----
### 110/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_13.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_13.test)

_Mimic sqlite_
#### ☓ Ran 10,051 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 111/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_14.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_14.test)

_Mimic sqlite_
#### ★ Ran 10,053 tests as _sqlite_

* 100% was OK

`sqlite 10053 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_14.test`


---- ---- ---- ---- ---- ---- ----
### 112/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_15.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_15.test)

_Mimic sqlite_
#### ★ Ran 10,052 tests as _sqlite_

* 100% was OK

`sqlite 10052 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_15.test`


---- ---- ---- ---- ---- ---- ----
### 113/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_16.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_16.test)

_Mimic sqlite_
#### ☓ Ran 10,050 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 114/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_17.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_17.test)

_Mimic sqlite_
#### ★ Ran 10,054 tests as _sqlite_

* 100% was OK

`sqlite 10054 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_17.test`


---- ---- ---- ---- ---- ---- ----
### 115/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_18.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_18.test)

_Mimic sqlite_
#### ★ Ran 10,053 tests as _sqlite_

* 100% was OK

`sqlite 10053 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_18.test`


---- ---- ---- ---- ---- ---- ----
### 116/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_19.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_19.test)

_Mimic sqlite_
#### ★ Ran 10,052 tests as _sqlite_

* 100% was OK

`sqlite 10052 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_19.test`


---- ---- ---- ---- ---- ---- ----
### 117/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_2.test)

_Mimic sqlite_
#### ★ Ran 10,051 tests as _sqlite_

* 100% was OK

`sqlite 10051 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_2.test`


---- ---- ---- ---- ---- ---- ----
### 118/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_20.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_20.test)

_Mimic sqlite_
#### ☓ Ran 10,052 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 119/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_21.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_21.test)

_Mimic sqlite_
#### ★ Ran 10,053 tests as _sqlite_

* 100% was OK

`sqlite 10053 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_21.test`


---- ---- ---- ---- ---- ---- ----
### 120/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_22.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_22.test)

_Mimic sqlite_
#### ★ Ran 10,052 tests as _sqlite_

* 100% was OK

`sqlite 10052 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_22.test`


---- ---- ---- ---- ---- ---- ----
### 121/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_23.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_23.test)

_Mimic sqlite_
#### ★ Ran 10,053 tests as _sqlite_

* 100% was OK

`sqlite 10053 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_23.test`


---- ---- ---- ---- ---- ---- ----
### 122/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_24.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_24.test)

_Mimic sqlite_
#### ★ Ran 10,051 tests as _sqlite_

* 100% was OK

`sqlite 10051 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_24.test`


---- ---- ---- ---- ---- ---- ----
### 123/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_25.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_25.test)

_Mimic sqlite_
#### ★ Ran 10,053 tests as _sqlite_

* 100% was OK

`sqlite 10053 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_25.test`


---- ---- ---- ---- ---- ---- ----
### 124/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_3.test)

_Mimic sqlite_
#### ★ Ran 10,051 tests as _sqlite_

* 100% was OK

`sqlite 10051 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_3.test`


---- ---- ---- ---- ---- ---- ----
### 125/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_4.test)

_Mimic sqlite_
#### ★ Ran 10,052 tests as _sqlite_

* 100% was OK

`sqlite 10052 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_4.test`


---- ---- ---- ---- ---- ---- ----
### 126/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_5.test)

_Mimic sqlite_
#### ★ Ran 10,051 tests as _sqlite_

* 100% was OK

`sqlite 10051 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_5.test`


---- ---- ---- ---- ---- ---- ----
### 127/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_6.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_6.test)

_Mimic sqlite_
#### ★ Ran 10,048 tests as _sqlite_

* 100% was OK

`sqlite 10048 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_6.test`


---- ---- ---- ---- ---- ---- ----
### 128/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_7.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_7.test)

_Mimic sqlite_
#### ★ Ran 10,052 tests as _sqlite_

* 100% was OK

`sqlite 10052 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_7.test`


---- ---- ---- ---- ---- ---- ----
### 129/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_8.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_8.test)

_Mimic sqlite_
#### ★ Ran 10,051 tests as _sqlite_

* 100% was OK

`sqlite 10051 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_8.test`


---- ---- ---- ---- ---- ---- ----
### 130/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_9.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_9.test)

_Mimic sqlite_
#### ★ Ran 10,050 tests as _sqlite_

* 100% was OK

`sqlite 10050 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/10/slt_good_9.test`


---- ---- ---- ---- ---- ---- ----
### 131/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/100/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/100/slt_good_0.test)

_Mimic sqlite_
#### ★ Ran 10,141 tests as _sqlite_

* 100% was OK

`sqlite 10141 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/100/slt_good_0.test`


---- ---- ---- ---- ---- ---- ----
### 132/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/100/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/100/slt_good_1.test)

_Mimic sqlite_
#### ★ Ran 10,140 tests as _sqlite_

* 100% was OK

`sqlite 10140 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/100/slt_good_1.test`


---- ---- ---- ---- ---- ---- ----
### 133/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/100/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/100/slt_good_2.test)

_Mimic sqlite_
#### ★ Ran 10,142 tests as _sqlite_

* 100% was OK

`sqlite 10142 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby/100/slt_good_2.test`


---- ---- ---- ---- ---- ---- ----
### 134/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/100/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/100/slt_good_3.test)

_Mimic sqlite_
#### ☓ Ran 10,140 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 135/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby/1000/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby/1000/slt_good_0.test)

_Mimic sqlite_
#### ☓ Ran 11,043 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 136/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_0.test)

_Mimic sqlite_
#### ★ Ran 10,053 tests as _sqlite_

* 100% was OK

`sqlite 10053 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_0.test`


---- ---- ---- ---- ---- ---- ----
### 137/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_1.test)

_Mimic sqlite_
#### ★ Ran 10,051 tests as _sqlite_

* 100% was OK

`sqlite 10051 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_1.test`


---- ---- ---- ---- ---- ---- ----
### 138/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_10.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_10.test)

_Mimic sqlite_
#### ☓ Ran 10,051 tests as _sqlite_

* 120 failed
* 98% was OK


---- ---- ---- ---- ---- ---- ----
### 139/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_11.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_11.test)

_Mimic sqlite_
#### ★ Ran 10,052 tests as _sqlite_

* 100% was OK

`sqlite 10052 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_11.test`


---- ---- ---- ---- ---- ---- ----
### 140/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_12.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_12.test)

_Mimic sqlite_
#### ★ Ran 10,051 tests as _sqlite_

* 100% was OK

`sqlite 10051 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_12.test`


---- ---- ---- ---- ---- ---- ----
### 141/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_13.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_13.test)

_Mimic sqlite_
#### ★ Ran 10,053 tests as _sqlite_

* 100% was OK

`sqlite 10053 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_13.test`


---- ---- ---- ---- ---- ---- ----
### 142/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_14.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_14.test)

_Mimic sqlite_
#### ★ Ran 10,052 tests as _sqlite_

* 100% was OK

`sqlite 10052 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_14.test`


---- ---- ---- ---- ---- ---- ----
### 143/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_15.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_15.test)

_Mimic sqlite_
#### ★ Ran 10,054 tests as _sqlite_

* 100% was OK

`sqlite 10054 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_15.test`


---- ---- ---- ---- ---- ---- ----
### 144/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_16.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_16.test)

_Mimic sqlite_
#### ☓ Ran 10,053 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 145/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_17.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_17.test)

_Mimic sqlite_
#### ★ Ran 10,050 tests as _sqlite_

* 100% was OK

`sqlite 10050 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_17.test`


---- ---- ---- ---- ---- ---- ----
### 146/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_18.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_18.test)

_Mimic sqlite_
#### ★ Ran 10,050 tests as _sqlite_

* 100% was OK

`sqlite 10050 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_18.test`


---- ---- ---- ---- ---- ---- ----
### 147/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_19.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_19.test)

_Mimic sqlite_
#### ☓ Ran 10,053 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 148/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_2.test)

_Mimic sqlite_
#### ★ Ran 10,052 tests as _sqlite_

* 100% was OK

`sqlite 10052 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_2.test`


---- ---- ---- ---- ---- ---- ----
### 149/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_20.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_20.test)

_Mimic sqlite_
#### ★ Ran 10,053 tests as _sqlite_

* 100% was OK

`sqlite 10053 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_20.test`


---- ---- ---- ---- ---- ---- ----
### 150/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_21.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_21.test)

_Mimic sqlite_
#### ★ Ran 10,052 tests as _sqlite_

* 100% was OK

`sqlite 10052 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_21.test`


---- ---- ---- ---- ---- ---- ----
### 151/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_22.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_22.test)

_Mimic sqlite_
#### ★ Ran 10,054 tests as _sqlite_

* 100% was OK

`sqlite 10054 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_22.test`


---- ---- ---- ---- ---- ---- ----
### 152/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_23.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_23.test)

_Mimic sqlite_
#### ★ Ran 10,051 tests as _sqlite_

* 100% was OK

`sqlite 10051 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_23.test`


---- ---- ---- ---- ---- ---- ----
### 153/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_24.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_24.test)

_Mimic sqlite_
#### ☓ Ran 10,054 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 154/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_25.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_25.test)

_Mimic sqlite_
#### ★ Ran 10,052 tests as _sqlite_

* 100% was OK

`sqlite 10052 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_25.test`


---- ---- ---- ---- ---- ---- ----
### 155/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_26.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_26.test)

_Mimic sqlite_
#### ★ Ran 10,053 tests as _sqlite_

* 100% was OK

`sqlite 10053 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_26.test`


---- ---- ---- ---- ---- ---- ----
### 156/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_27.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_27.test)

_Mimic sqlite_
#### ☓ Ran 10,051 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 157/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_28.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_28.test)

_Mimic sqlite_
#### ★ Ran 10,052 tests as _sqlite_

* 100% was OK

`sqlite 10052 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_28.test`


---- ---- ---- ---- ---- ---- ----
### 158/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_29.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_29.test)

_Mimic sqlite_
#### ★ Ran 10,050 tests as _sqlite_

* 100% was OK

`sqlite 10050 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_29.test`


---- ---- ---- ---- ---- ---- ----
### 159/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_3.test)

_Mimic sqlite_
#### ☓ Ran 10,051 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 160/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_30.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_30.test)

_Mimic sqlite_
#### ☓ Ran 10,052 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 161/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_31.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_31.test)

_Mimic sqlite_
#### ☓ Ran 10,052 tests as _sqlite_

* 120 failed
* 98% was OK


---- ---- ---- ---- ---- ---- ----
### 162/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_32.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_32.test)

_Mimic sqlite_
#### ★ Ran 10,052 tests as _sqlite_

* 100% was OK

`sqlite 10052 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_32.test`


---- ---- ---- ---- ---- ---- ----
### 163/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_33.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_33.test)

_Mimic sqlite_
#### ★ Ran 10,050 tests as _sqlite_

* 100% was OK

`sqlite 10050 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_33.test`


---- ---- ---- ---- ---- ---- ----
### 164/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_34.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_34.test)

_Mimic sqlite_
#### ★ Ran 10,052 tests as _sqlite_

* 100% was OK

`sqlite 10052 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_34.test`


---- ---- ---- ---- ---- ---- ----
### 165/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_35.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_35.test)

_Mimic sqlite_
#### ★ Ran 10,049 tests as _sqlite_

* 100% was OK

`sqlite 10049 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_35.test`


---- ---- ---- ---- ---- ---- ----
### 166/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_36.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_36.test)

_Mimic sqlite_
#### ★ Ran 10,052 tests as _sqlite_

* 100% was OK

`sqlite 10052 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_36.test`


---- ---- ---- ---- ---- ---- ----
### 167/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_37.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_37.test)

_Mimic sqlite_
#### ★ Ran 10,052 tests as _sqlite_

* 100% was OK

`sqlite 10052 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_37.test`


---- ---- ---- ---- ---- ---- ----
### 168/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_38.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_38.test)

_Mimic sqlite_
#### ★ Ran 10,052 tests as _sqlite_

* 100% was OK

`sqlite 10052 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_38.test`


---- ---- ---- ---- ---- ---- ----
### 169/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_39.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_39.test)

_Mimic sqlite_
#### ★ Ran 10,052 tests as _sqlite_

* 100% was OK

`sqlite 10052 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_39.test`


---- ---- ---- ---- ---- ---- ----
### 170/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_4.test)

_Mimic sqlite_
#### ★ Ran 10,053 tests as _sqlite_

* 100% was OK

`sqlite 10053 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_4.test`


---- ---- ---- ---- ---- ---- ----
### 171/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_5.test)

_Mimic sqlite_
#### ★ Ran 10,052 tests as _sqlite_

* 100% was OK

`sqlite 10052 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_5.test`


---- ---- ---- ---- ---- ---- ----
### 172/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_6.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_6.test)

_Mimic sqlite_
#### ★ Ran 10,053 tests as _sqlite_

* 100% was OK

`sqlite 10053 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_6.test`


---- ---- ---- ---- ---- ---- ----
### 173/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_7.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_7.test)

_Mimic sqlite_
#### ★ Ran 10,052 tests as _sqlite_

* 100% was OK

`sqlite 10052 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_7.test`


---- ---- ---- ---- ---- ---- ----
### 174/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_8.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_8.test)

_Mimic sqlite_
#### ☓ Ran 10,054 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 175/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_9.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/10/slt_good_9.test)

_Mimic sqlite_
#### ☓ Ran 10,055 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 176/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/100/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/100/slt_good_0.test)

_Mimic sqlite_
#### ☓ Ran 10,149 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 177/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/100/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/100/slt_good_1.test)

_Mimic sqlite_
#### ★ Ran 10,141 tests as _sqlite_

* 100% was OK

`sqlite 10141 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/100/slt_good_1.test`


---- ---- ---- ---- ---- ---- ----
### 178/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/100/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/100/slt_good_2.test)

_Mimic sqlite_
#### ★ Ran 10,142 tests as _sqlite_

* 100% was OK

`sqlite 10142 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/100/slt_good_2.test`


---- ---- ---- ---- ---- ---- ----
### 179/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/100/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/100/slt_good_3.test)

_Mimic sqlite_
#### ★ Ran 10,143 tests as _sqlite_

* 100% was OK

`sqlite 10143 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/100/slt_good_3.test`


---- ---- ---- ---- ---- ---- ----
### 180/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/100/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/100/slt_good_4.test)

_Mimic sqlite_
#### ★ Ran 10,141 tests as _sqlite_

* 100% was OK

`sqlite 10141 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/100/slt_good_4.test`


---- ---- ---- ---- ---- ---- ----
### 181/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/100/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/100/slt_good_5.test)

_Mimic sqlite_
#### ★ Ran 10,142 tests as _sqlite_

* 100% was OK

`sqlite 10142 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/100/slt_good_5.test`


---- ---- ---- ---- ---- ---- ----
### 182/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/100/slt_good_6.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/100/slt_good_6.test)

_Mimic sqlite_
#### ★ Ran 10,144 tests as _sqlite_

* 100% was OK

`sqlite 10144 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/100/slt_good_6.test`


---- ---- ---- ---- ---- ---- ----
### 183/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/1000/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/1000/slt_good_0.test)

_Mimic sqlite_
#### ★ Ran 11,040 tests as _sqlite_

* 100% was OK

`sqlite 11040 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/1000/slt_good_0.test`


---- ---- ---- ---- ---- ---- ----
### 184/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/1000/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/1000/slt_good_1.test)

_Mimic sqlite_
#### ★ Ran 11,043 tests as _sqlite_

* 100% was OK

`sqlite 11043 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/orderby_nosort/1000/slt_good_1.test`


---- ---- ---- ---- ---- ---- ----
### 185/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_0.test)

_Mimic sqlite_

```sql
SELECT + col2 FROM tab0 AS cor0 WHERE col3 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT 62 - - + CAST ( COUNT ( ALL col1 ) AS INTEGER ) FROM tab0 cor0 WHERE NOT NULL IS NOT NULL

g is not defined
```


```sql
SELECT col2 AS col4 FROM tab0 WHERE - col1 > - 75

Expected: ["0"] but got ["ijika"]
```


```sql
SELECT + MIN ( ALL 65 ), + CAST ( NULL AS INTEGER ) AS col4 FROM tab0 WHERE NULL IS NOT NULL

Expected: ["NULL","NULL"] but got ["NULL","0"]
```

#### ☓ Ran 10,032 tests as _sqlite_

* 570 failed
* 94% was OK


---- ---- ---- ---- ---- ---- ----
### 186/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_1.test)

_Mimic sqlite_

```sql
SELECT ALL + col2 FROM tab0 WHERE NOT - - 10 <= - + col4 - - col3

Expected: ["0","0","0","0"] but got ["NULL","NULL","NULL","NULL"]
```

#### ☓ Ran 10,034 tests as _sqlite_

* 630 failed
* 93% was OK


---- ---- ---- ---- ---- ---- ----
### 187/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_10.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_10.test)

_Mimic sqlite_

```sql
SELECT ALL + col2 AS col2 FROM tab0 WHERE NOT ( + + col0 - + + col1 ) >= ( col1 )

Expected: ["0","0","0","0","0","0"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

#### ☓ Ran 10,034 tests as _sqlite_

* 635 failed
* 93% was OK


---- ---- ---- ---- ---- ---- ----
### 188/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_11.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_11.test)

_Mimic sqlite_
#### ☓ Ran 10,031 tests as _sqlite_

* 605 failed
* 93% was OK


---- ---- ---- ---- ---- ---- ----
### 189/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_12.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_12.test)

_Mimic sqlite_

```sql
SELECT col1 * CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE NOT col3 < + 71

Expected: ["NULL","NULL","NULL","NULL","NULL","NULL","NULL","NULL"] but got ["0","0","0","0","0","0","0","0"]
```

#### ☓ Ran 10,033 tests as _sqlite_

* 630 failed
* 93% was OK


---- ---- ---- ---- ---- ---- ----
### 190/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_13.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_13.test)

_Mimic sqlite_

```sql
SELECT col5 AS col3 FROM tab0 WHERE NOT ( ( + 45 ) BETWEEN NULL AND col1 )

Expected: ["0"] but got ["hbwys","kxrzu","lkyfk","pavon","pfxqp","qbdwp","vruch","xarlb","ybarm","ziuqv"]
```


```sql
SELECT DISTINCT - ( - ( - + CAST ( NULL AS INTEGER ) ) ), CAST ( NULL AS INTEGER ) + + 80 AS col1 FROM tab0 AS cor0 WHERE NULL IS NULL

Expected: ["NULL","NULL"] but got ["0","80"]
```

#### ☓ Ran 10,032 tests as _sqlite_

* 700 failed
* 93% was OK


---- ---- ---- ---- ---- ---- ----
### 191/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_14.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_14.test)

_Mimic sqlite_

```sql
SELECT DISTINCT - + col3 AS col5, 78 AS col5 FROM tab0 cor0 WHERE 35 + col0 IS NOT NULL

2 results returned but expected 20
```


```sql
SELECT + ( - - MAX ( DISTINCT - col0 ) ) - - 76 AS col4, 30 FROM tab0 AS cor0 WHERE ( NULL ) IN ( col3 )

Expected: ["NULL","30"] but got ["30","NULL"]
```

#### ☓ Ran 10,031 tests as _sqlite_

* 665 failed
* 93% was OK


---- ---- ---- ---- ---- ---- ----
### 192/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_2.test)

_Mimic sqlite_

```sql
SELECT col5 FROM tab0 WHERE - ( - col1 ) <= + col0

Expected: ["0","0","0","0","0","0"] but got ["bqisj","gtdhg","mylwf","tlesg","vrkrw","ylzxx"]
```


```sql
SELECT - CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE NOT col4 > + + col1

Expected: ["NULL","NULL","NULL","NULL","NULL","NULL"] but got ["0","0","0","0","0","0"]
```

#### ☓ Ran 10,034 tests as _sqlite_

* 755 failed
* 92% was OK


---- ---- ---- ---- ---- ---- ----
### 193/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_3.test)

_Mimic sqlite_

```sql
SELECT + col2 AS col1 FROM tab0 WHERE NOT col1 <= col4

Expected: ["0","0","0","0","0"] but got ["NULL","NULL","NULL","NULL","NULL"]
```


```sql
SELECT col5 col1 FROM tab0 AS cor0 WHERE NOT col0 < + col1

Expected: ["0","0"] but got ["hkqiq","wjfwi"]
```

#### ☓ Ran 10,034 tests as _sqlite_

* 535 failed
* 94% was OK


---- ---- ---- ---- ---- ---- ----
### 194/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_4.test)

_Mimic sqlite_
#### ☓ Ran 10,033 tests as _sqlite_

* 520 failed
* 94% was OK


---- ---- ---- ---- ---- ---- ----
### 195/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_5.test)

_Mimic sqlite_

```sql
SELECT + col2 col5 FROM tab0 AS cor0 WHERE ( col4 ) BETWEEN col0 AND - 96 * - col3

Expected: ["0","0","0"] but got ["NULL","NULL","NULL"]
```

#### ☓ Ran 10,034 tests as _sqlite_

* 570 failed
* 94% was OK


---- ---- ---- ---- ---- ---- ----
### 196/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_6.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_6.test)

_Mimic sqlite_

```sql
SELECT col2 FROM tab0 WHERE + col0 * + col0 + - col4 * col3 <= ( + col1 + col4 * - 0 ) OR ( + 57 * + col0 ) = NULL

Expected: ["0","0"] but got ["naijw","wodwv"]
```

#### ☓ Ran 10,034 tests as _sqlite_

* 600 failed
* 94% was OK


---- ---- ---- ---- ---- ---- ----
### 197/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_7.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_7.test)

_Mimic sqlite_

```sql
SELECT ALL col2 AS col5 FROM tab0 WHERE - + col3 BETWEEN - 72 AND 50 + + 78

Expected: ["0"] but got ["hmsci"]
```

#### ☓ Ran 10,031 tests as _sqlite_

* 520 failed
* 94% was OK


---- ---- ---- ---- ---- ---- ----
### 198/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_8.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_8.test)

_Mimic sqlite_

```sql
SELECT col5 AS col1 FROM tab0 AS cor0 WHERE col4 NOT BETWEEN - ( - 32 ) AND - CAST ( - col1 AS INTEGER )

Expected: ["0","0","0","0","0"] but got ["apjmo","dubev","ithfo","ktnfz","vzeio"]
```

#### ☓ Ran 10,032 tests as _sqlite_

* 600 failed
* 94% was OK


---- ---- ---- ---- ---- ---- ----
### 199/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_9.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/10/slt_good_9.test)

_Mimic sqlite_

```sql
SELECT col5 AS col1 FROM tab0 AS cor0 WHERE + 80 + col4 > - - col1 + col3

Expected: ["0","0"] but got ["axwip","klkhp"]
```

#### ☓ Ran 10,031 tests as _sqlite_

* 590 failed
* 94% was OK


---- ---- ---- ---- ---- ---- ----
### 200/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/100/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/100/slt_good_0.test)

_Mimic sqlite_

```sql
SELECT col2 AS col0 FROM tab0 WHERE NOT - - col0 >= 54 + 23

Expected: ["0"] but got ["qckcw"]
```

#### ☓ Ran 10,123 tests as _sqlite_

* 575 failed
* 94% was OK


---- ---- ---- ---- ---- ---- ----
### 201/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/100/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/100/slt_good_1.test)

_Mimic sqlite_

```sql
SELECT col5 col5 FROM tab0 WHERE NOT ( ( col1 ) ) >= + ( - 80 ) * - 31 - col0

Expected: ["0","0","0","0"] but got ["kjkvp","rrlwc","uhpvq","ydhme"]
```

#### ☓ Ran 10,123 tests as _sqlite_

* 465 failed
* 95% was OK


---- ---- ---- ---- ---- ---- ----
### 202/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_0.test)

_Mimic sqlite_
#### ☓ Ran 2,067 tests as _sqlite_

* 60 failed
* 97% was OK


---- ---- ---- ---- ---- ---- ----
### 203/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_1.test)

_Mimic sqlite_
#### ★ Ran 1,056 tests as _sqlite_

* 100% was OK

`sqlite 1056 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_1.test`


---- ---- ---- ---- ---- ---- ----
### 204/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_2.test)

_Mimic sqlite_
#### ★ Ran 1,027 tests as _sqlite_

* 100% was OK

`sqlite 1027 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_2.test`


---- ---- ---- ---- ---- ---- ----
### 205/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_3.test)

_Mimic sqlite_
#### ★ Ran 1,033 tests as _sqlite_

* 100% was OK

`sqlite 1033 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_3.test`


---- ---- ---- ---- ---- ---- ----
### 206/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_4.test)

_Mimic sqlite_
#### ★ Ran 1,032 tests as _sqlite_

* 100% was OK

`sqlite 1032 OK: /Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_4.test`


---- ---- ---- ---- ---- ---- ----
### 207/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_5.test)

_Mimic sqlite_
#### ☓ Ran 4,333 tests as _sqlite_

* 205 failed
* 95% was OK


---- ---- ---- ---- ---- ---- ----
### 208/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_6.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_6.test)

_Mimic sqlite_

```sql
SELECT ALL * FROM tab0 AS cor0 WHERE ( col3 ) IN ( + col0 )

Expected: ["750","79","2150","0","79","1716","0"] but got ["750","79","2150.540","kuzlf","79","1716.500","wqnrb"]
```

#### ☓ Ran 11,021 tests as _sqlite_

* 545 failed
* 95% was OK


---- ---- ---- ---- ---- ---- ----
### 209/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_7.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_7.test)

_Mimic sqlite_

```sql
SELECT ALL col2 FROM tab0 WHERE - + col3 BETWEEN - 72 AND 50 + + 78

Expected: ["0","0","0","0","0"] but got ["ernxs","orpfh","pirjf","tbpkm","zphbq"]
```

#### ☓ Ran 11,022 tests as _sqlite_

* 560 failed
* 94% was OK


---- ---- ---- ---- ---- ---- ----
### 210/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_8.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/random/1000/slt_good_8.test)

_Mimic sqlite_
#### ☓ Ran 4,841 tests as _sqlite_

* 245 failed
* 94% was OK


---- ---- ---- ---- ---- ---- ----
### 211/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/view/10/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/view/10/slt_good_0.test)

_Mimic sqlite_

---- ---- ---- ---- ---- ---- ----
### 212/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/view/10/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/view/10/slt_good_1.test)

_Mimic sqlite_

```sql
SELECT pk, col0 FROM view_1_tab0_153

Data source number 0 in undefined
```


```sql
SELECT pk, col0 FROM view_2_tab0_155

Expected: ["6","0"] but got ["NULL","NULL"]
```


```sql
SELECT pk, col0 FROM view_1_tab0_160

Expected: ["1","95","4","84","7","65","9","88"] but got ["NULL","NULL","NULL","NULL","NULL","NULL","NULL","NULL"]
```


```sql
SELECT * FROM view_3_tab0_169

Expected: ["0","2","3","5","6","7","8"] but got ["NULL","NULL","NULL","NULL","NULL","NULL","NULL"]
```

#### ☓ Ran 7,135 tests as _sqlite_

* 1,820 failed
* 74% was OK


---- ---- ---- ---- ---- ---- ----
### 213/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/view/10/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/view/10/slt_good_2.test)

_Mimic sqlite_
#### ☓ Ran 7,333 tests as _sqlite_

* 1,855 failed
* 74% was OK


---- ---- ---- ---- ---- ---- ----
### 214/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/view/10/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/view/10/slt_good_3.test)

_Mimic sqlite_
#### ☓ Ran 6,734 tests as _sqlite_

* 1,735 failed
* 74% was OK


---- ---- ---- ---- ---- ---- ----
### 215/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/view/10/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/view/10/slt_good_4.test)

_Mimic sqlite_
#### ☓ Ran 7,536 tests as _sqlite_

* 1,890 failed
* 74% was OK


---- ---- ---- ---- ---- ---- ----
### 216/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/view/10/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/view/10/slt_good_5.test)

_Mimic sqlite_
#### ☓ Ran 7,237 tests as _sqlite_

* 1,815 failed
* 74% was OK


---- ---- ---- ---- ---- ---- ----
### 217/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/view/10/slt_good_6.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/view/10/slt_good_6.test)

_Mimic sqlite_
#### ☓ Ran 6,135 tests as _sqlite_

* 1,570 failed
* 74% was OK


---- ---- ---- ---- ---- ---- ----
### 218/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/view/10/slt_good_7.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/view/10/slt_good_7.test)

_Mimic sqlite_
#### ☓ Ran 6,936 tests as _sqlite_

* 1,740 failed
* 74% was OK


---- ---- ---- ---- ---- ---- ----
### 219/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/view/100/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/view/100/slt_good_0.test)

_Mimic sqlite_
#### ☓ Ran 7,726 tests as _sqlite_

* 3,291 failed
* 57% was OK


---- ---- ---- ---- ---- ---- ----
### 220/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/view/100/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/view/100/slt_good_1.test)

_Mimic sqlite_
#### ☓ Ran 7,122 tests as _sqlite_

* 3,011 failed
* 57% was OK


---- ---- ---- ---- ---- ---- ----
### 221/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/view/100/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/view/100/slt_good_2.test)

_Mimic sqlite_
#### ☓ Ran 7,323 tests as _sqlite_

* 3,046 failed
* 58% was OK


---- ---- ---- ---- ---- ---- ----
### 222/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/view/100/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/view/100/slt_good_3.test)

_Mimic sqlite_
#### ☓ Ran 6,322 tests as _sqlite_

* 2,651 failed
* 58% was OK


---- ---- ---- ---- ---- ---- ----
### 223/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/view/100/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/view/100/slt_good_4.test)

_Mimic sqlite_
#### ☓ Ran 6,923 tests as _sqlite_

* 2,896 failed
* 58% was OK


---- ---- ---- ---- ---- ---- ----
### 224/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/view/100/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/view/100/slt_good_5.test)

_Mimic sqlite_
#### ☓ Ran 7,322 tests as _sqlite_

* 3,081 failed
* 57% was OK


---- ---- ---- ---- ---- ---- ----
### 225/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/view/1000/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/view/1000/slt_good_0.test)

_Mimic sqlite_
#### ☓ Ran 6,823 tests as _sqlite_

* 2,536 failed
* 62% was OK


---- ---- ---- ---- ---- ---- ----
### 226/620 [`/Users/mwulff/git/alasql-sqllogictest/test/index/view/10000/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/index/view/10000/slt_good_0.test)

_Mimic sqlite_
#### ☓ Ran 10,622 tests as _sqlite_

* 271 failed
* 97% was OK


---- ---- ---- ---- ---- ---- ----
### 227/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_0.test)

_Mimic sqlite_

```sql
SELECT ALL + col0 AS col1, + CAST ( NULL AS INTEGER ) + + col2 FROM tab0 AS cor0

Expected: ["15","NULL","87","NULL","97","NULL"] but got ["15","47","87","10","97","99"]
```


```sql
SELECT DISTINCT * FROM tab2 cor0 JOIN tab2 cor1 ON + ( 90 ) IS NOT NULL, tab0 AS cor2

Parse error on line 1:
...+ ( 90 ) IS NOT NULL, tab0 AS cor2
-----------------------^
Expecting 'EOF', 'WITH', 'RPAR', 'PIVOT', 'UNPIVOT', 'IN', 'LIKE', 'ARROW', 'DOT', 'ORDER', 'CARET', 'EQ', 'WHERE', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'GTGT', 'LTLT', 'NOT', 'UNION', 'INTERSECT', 'EXCEP…
```


```sql
SELECT col2 + + 76 / - ( - + col1 ) AS col1, 71 + col0 / + - CAST ( NULL AS INTEGER ) AS col2 FROM tab2

Expected: ["24","NULL","40","NULL","59","NULL"] but got ["24.490","NULL","40.987","NULL","59.134","NULL"]
```

#### ☓ Ran 10,012 tests as _sqlite_

* 1,454 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 228/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_1.test)

_Mimic sqlite_

```sql
SELECT 48 + + col2 AS col0, 47 + - + col2 + CAST ( NULL AS REAL ) + + col2 AS col0 FROM tab2 AS cor0

Expected: ["106","NULL","71","NULL","88","NULL"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

#### ☓ Ran 10,012 tests as _sqlite_

* 1,272 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 229/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_10.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_10.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,516 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 230/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_100.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_100.test)

_Mimic sqlite_

```sql
SELECT DISTINCT col2 AS col0, col0 / + - CAST ( + ( CAST ( NULL AS INTEGER ) ) AS INTEGER ) AS col0 FROM tab1

Expected: ["59","NULL","68","NULL","96","NULL"] but got ["NULL","NULL"]
```


```sql
SELECT DISTINCT + 23 + - CAST ( NULL AS REAL ) - + + 67 * + + col2 col1, + col1 * + CAST ( NULL AS INTEGER ) + + - col0 FROM tab0 AS cor0

Expected: ["NULL","NULL"] but got ["NULL","-15","NULL","-87","NULL","-97"]
```

#### ☓ Ran 10,012 tests as _sqlite_

* 1,510 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 231/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_101.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_101.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,538 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 232/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_102.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_102.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,427 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 233/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_103.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_103.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,438 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 234/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_104.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_104.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,483 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 235/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_105.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_105.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,532 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 236/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_106.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_106.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,439 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 237/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_107.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_107.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,370 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 238/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_108.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_108.test)

_Mimic sqlite_

```sql
SELECT 12 / + - CAST ( NULL AS INTEGER ) AS col0, CAST ( NULL AS INTEGER ) AS col2 FROM tab0

Expected: ["NULL","NULL","NULL","NULL","NULL","NULL"] but got ["NULL","0","NULL","0","NULL","0"]
```

#### ☓ Ran 10,012 tests as _sqlite_

* 1,508 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 239/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_109.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_109.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,516 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 240/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_11.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_11.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,537 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 241/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_110.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_110.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,470 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 242/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_111.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_111.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,518 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 243/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_112.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_112.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,430 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 244/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_113.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_113.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,461 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 245/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_114.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_114.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,460 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 246/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_115.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_115.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,430 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 247/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_116.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_116.test)

_Mimic sqlite_

```sql
SELECT DISTINCT + 51 AS col2, + col0 * + col0 * CAST ( NULL AS REAL ) * + - col1 / - col2 AS col2 FROM tab1

Expected: ["51","NULL"] but got ["NULL","NULL"]
```

#### ☓ Ran 10,012 tests as _sqlite_

* 1,486 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 248/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_117.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_117.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,463 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 249/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_118.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_118.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,389 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 250/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_119.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_119.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,475 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 251/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_12.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_12.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,528 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 252/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_120.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_120.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,453 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 253/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_121.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_121.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,464 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 254/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_122.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_122.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,478 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 255/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_123.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_123.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,507 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 256/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_124.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_124.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,466 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 257/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_125.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_125.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,513 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 258/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_126.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_126.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,482 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 259/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_127.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_127.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,463 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 260/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_128.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_128.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,523 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 261/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_129.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_129.test)

_Mimic sqlite_
#### ☓ Ran 802 tests as _sqlite_

* 113 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 262/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_13.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_13.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,406 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 263/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_14.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_14.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,509 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 264/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_15.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_15.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,501 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 265/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_16.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_16.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,437 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 266/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_17.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_17.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,448 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 267/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_18.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_18.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,457 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 268/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_19.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_19.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,506 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 269/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_2.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,397 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 270/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_20.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_20.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,465 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 271/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_21.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_21.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,474 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 272/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_22.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_22.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,522 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 273/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_23.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_23.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,443 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 274/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_24.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_24.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,440 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 275/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_25.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_25.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,541 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 276/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_26.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_26.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,496 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 277/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_27.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_27.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,515 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 278/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_28.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_28.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,520 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 279/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_29.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_29.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,502 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 280/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_3.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,525 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 281/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_30.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_30.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,468 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 282/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_31.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_31.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,539 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 283/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_32.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_32.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,508 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 284/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_33.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_33.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,557 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 285/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_34.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_34.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,358 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 286/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_35.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_35.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,405 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 287/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_36.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_36.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,420 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 288/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_37.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_37.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,419 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 289/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_38.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_38.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,418 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 290/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_39.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_39.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,472 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 291/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_4.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,545 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 292/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_40.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_40.test)

_Mimic sqlite_

```sql
SELECT DISTINCT + 40 / 83 * + - col0 AS col0, CAST ( NULL AS REAL ) * - col1 * 80 AS col1 FROM tab2

Expected: ["0","NULL"] but got ["-22.169","NULL","-30.843","NULL","-36.145","NULL"]
```

#### ☓ Ran 10,012 tests as _sqlite_

* 1,454 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 293/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_41.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_41.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,340 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 294/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_42.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_42.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,411 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 295/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_43.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_43.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,447 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 296/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_44.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_44.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,476 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 297/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_45.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_45.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,389 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 298/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_46.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_46.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,460 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 299/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_47.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_47.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,465 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 300/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_48.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_48.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,373 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 301/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_49.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_49.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,415 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 302/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_5.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,499 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 303/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_50.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_50.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,412 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 304/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_51.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_51.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,463 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 305/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_52.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_52.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,368 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 306/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_53.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_53.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,482 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 307/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_54.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_54.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,457 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 308/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_55.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_55.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,419 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 309/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_56.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_56.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,426 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 310/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_57.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_57.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,452 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 311/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_58.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_58.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,382 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 312/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_59.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_59.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,384 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 313/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_6.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_6.test)

_Mimic sqlite_

```sql
SELECT DISTINCT 9 + COUNT ( * ) AS col2, AVG ( DISTINCT + + col2 ) col2, - MAX ( col2 ) AS col0 FROM tab2 AS cor0 WHERE NOT 13 IS NOT NULL

Expected: ["9","NULL","NULL"] but got ["NULL","NULL"]
```

#### ☓ Ran 10,012 tests as _sqlite_

* 1,522 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 314/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_60.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_60.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,477 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 315/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_61.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_61.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,401 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 316/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_62.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_62.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,381 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 317/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_63.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_63.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,349 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 318/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_64.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_64.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,437 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 319/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_65.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_65.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,426 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 320/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_66.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_66.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,408 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 321/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_67.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_67.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,480 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 322/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_68.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_68.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,429 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 323/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_69.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_69.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,399 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 324/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_7.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_7.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,508 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 325/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_70.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_70.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,445 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 326/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_71.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_71.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,425 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 327/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_72.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_72.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,405 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 328/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_73.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_73.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,395 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 329/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_74.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_74.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,366 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 330/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_75.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_75.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,459 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 331/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_76.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_76.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,419 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 332/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_77.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_77.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,441 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 333/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_78.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_78.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,537 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 334/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_79.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_79.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,407 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 335/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_8.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_8.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,508 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 336/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_80.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_80.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,423 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 337/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_81.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_81.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,435 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 338/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_82.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_82.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,478 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 339/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_83.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_83.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,461 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 340/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_84.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_84.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,490 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 341/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_85.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_85.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,412 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 342/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_86.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_86.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,387 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 343/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_87.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_87.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,465 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 344/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_88.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_88.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,510 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 345/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_89.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_89.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,468 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 346/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_9.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_9.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,396 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 347/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_90.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_90.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,523 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 348/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_91.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_91.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,488 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 349/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_92.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_92.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,460 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 350/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_93.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_93.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,462 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 351/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_94.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_94.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,443 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 352/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_95.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_95.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,447 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 353/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_96.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_96.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,409 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 354/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_97.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_97.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,493 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 355/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_98.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_98.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,484 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 356/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_99.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/aggregates/slt_good_99.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,445 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 357/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_0.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,676 failed
* 83% was OK


---- ---- ---- ---- ---- ---- ----
### 358/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_1.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,027 failed
* 89% was OK


---- ---- ---- ---- ---- ---- ----
### 359/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_10.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_10.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,904 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 360/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_100.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_100.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,936 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 361/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_101.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_101.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,898 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 362/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_102.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_102.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 2,002 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 363/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_103.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_103.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,915 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 364/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_104.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_104.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,928 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 365/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_105.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_105.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,846 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 366/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_106.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_106.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,894 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 367/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_107.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_107.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,903 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 368/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_108.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_108.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,878 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 369/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_109.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_109.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,718 failed
* 82% was OK


---- ---- ---- ---- ---- ---- ----
### 370/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_11.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_11.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,928 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 371/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_110.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_110.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,894 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 372/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_111.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_111.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,870 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 373/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_112.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_112.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,959 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 374/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_113.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_113.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,876 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 375/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_114.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_114.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,924 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 376/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_115.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_115.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,923 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 377/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_116.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_116.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,866 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 378/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_117.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_117.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,794 failed
* 82% was OK


---- ---- ---- ---- ---- ---- ----
### 379/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_118.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_118.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,942 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 380/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_119.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_119.test)

_Mimic sqlite_
#### ☓ Ran 8,938 tests as _sqlite_

* 1,710 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 381/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_12.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_12.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,979 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 382/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_13.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_13.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,532 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 383/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_14.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_14.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,978 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 384/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_15.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_15.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,977 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 385/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_16.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_16.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,908 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 386/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_17.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_17.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,928 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 387/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_18.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_18.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,941 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 388/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_19.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_19.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,917 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 389/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_2.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,346 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 390/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_20.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_20.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,946 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 391/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_21.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_21.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,943 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 392/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_22.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_22.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,871 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 393/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_23.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_23.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,916 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 394/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_24.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_24.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,718 failed
* 82% was OK


---- ---- ---- ---- ---- ---- ----
### 395/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_25.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_25.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,713 failed
* 82% was OK


---- ---- ---- ---- ---- ---- ----
### 396/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_26.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_26.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,723 failed
* 82% was OK


---- ---- ---- ---- ---- ---- ----
### 397/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_27.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_27.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,690 failed
* 83% was OK


---- ---- ---- ---- ---- ---- ----
### 398/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_28.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_28.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,780 failed
* 82% was OK


---- ---- ---- ---- ---- ---- ----
### 399/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_29.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_29.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,368 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 400/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_3.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,911 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 401/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_30.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_30.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,632 failed
* 83% was OK


---- ---- ---- ---- ---- ---- ----
### 402/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_31.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_31.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,657 failed
* 83% was OK


---- ---- ---- ---- ---- ---- ----
### 403/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_32.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_32.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,310 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 404/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_33.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_33.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,698 failed
* 83% was OK


---- ---- ---- ---- ---- ---- ----
### 405/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_34.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_34.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,792 failed
* 82% was OK


---- ---- ---- ---- ---- ---- ----
### 406/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_35.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_35.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,747 failed
* 82% was OK


---- ---- ---- ---- ---- ---- ----
### 407/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_36.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_36.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,768 failed
* 82% was OK


---- ---- ---- ---- ---- ---- ----
### 408/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_37.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_37.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,791 failed
* 82% was OK


---- ---- ---- ---- ---- ---- ----
### 409/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_38.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_38.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,839 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 410/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_39.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_39.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,827 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 411/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_4.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,903 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 412/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_40.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_40.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,810 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 413/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_41.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_41.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,780 failed
* 82% was OK


---- ---- ---- ---- ---- ---- ----
### 414/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_42.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_42.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,802 failed
* 82% was OK


---- ---- ---- ---- ---- ---- ----
### 415/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_43.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_43.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,435 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 416/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_44.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_44.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,825 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 417/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_45.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_45.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,855 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 418/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_46.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_46.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,780 failed
* 82% was OK


---- ---- ---- ---- ---- ---- ----
### 419/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_47.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_47.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,773 failed
* 82% was OK


---- ---- ---- ---- ---- ---- ----
### 420/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_48.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_48.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,873 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 421/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_49.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_49.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,845 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 422/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_5.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,887 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 423/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_50.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_50.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,825 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 424/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_51.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_51.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,794 failed
* 82% was OK


---- ---- ---- ---- ---- ---- ----
### 425/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_52.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_52.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,899 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 426/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_53.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_53.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,827 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 427/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_54.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_54.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,449 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 428/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_55.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_55.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,930 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 429/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_56.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_56.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,861 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 430/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_57.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_57.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,827 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 431/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_58.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_58.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,802 failed
* 82% was OK


---- ---- ---- ---- ---- ---- ----
### 432/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_59.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_59.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,830 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 433/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_6.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_6.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,869 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 434/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_60.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_60.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,853 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 435/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_61.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_61.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,855 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 436/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_62.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_62.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,892 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 437/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_63.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_63.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,845 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 438/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_64.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_64.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,895 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 439/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_65.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_65.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,539 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 440/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_66.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_66.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,877 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 441/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_67.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_67.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,880 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 442/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_68.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_68.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,778 failed
* 82% was OK


---- ---- ---- ---- ---- ---- ----
### 443/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_69.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_69.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,885 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 444/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_7.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_7.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,903 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 445/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_70.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_70.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,842 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 446/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_71.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_71.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,834 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 447/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_72.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_72.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,895 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 448/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_73.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_73.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,873 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 449/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_74.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_74.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,929 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 450/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_75.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_75.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,903 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 451/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_76.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_76.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,533 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 452/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_77.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_77.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,844 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 453/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_78.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_78.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,857 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 454/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_79.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_79.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,911 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 455/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_8.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_8.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,961 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 456/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_80.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_80.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,879 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 457/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_81.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_81.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,888 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 458/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_82.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_82.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,931 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 459/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_83.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_83.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,853 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 460/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_84.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_84.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,827 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 461/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_85.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_85.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,890 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 462/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_86.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_86.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,765 failed
* 82% was OK


---- ---- ---- ---- ---- ---- ----
### 463/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_87.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_87.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,594 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 464/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_88.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_88.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,916 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 465/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_89.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_89.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,840 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 466/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_9.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_9.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,892 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 467/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_90.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_90.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,909 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 468/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_91.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_91.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,882 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 469/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_92.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_92.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,942 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 470/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_93.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_93.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,898 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 471/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_94.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_94.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,888 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 472/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_95.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_95.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,932 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 473/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_96.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_96.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,841 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 474/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_97.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_97.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,887 failed
* 81% was OK


---- ---- ---- ---- ---- ---- ----
### 475/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_98.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_98.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,630 failed
* 83% was OK


---- ---- ---- ---- ---- ---- ----
### 476/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_99.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/expr/slt_good_99.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,903 failed
* 80% was OK


---- ---- ---- ---- ---- ---- ----
### 477/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_0.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 4,256 failed
* 57% was OK


---- ---- ---- ---- ---- ---- ----
### 478/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_1.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 4,113 failed
* 58% was OK


---- ---- ---- ---- ---- ---- ----
### 479/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_10.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_10.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 258 failed
* 97% was OK


---- ---- ---- ---- ---- ---- ----
### 480/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_11.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_11.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 752 failed
* 92% was OK


---- ---- ---- ---- ---- ---- ----
### 481/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_12.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_12.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,343 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 482/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_13.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_13.test)

_Mimic sqlite_
#### ☓ Ran 3,182 tests as _sqlite_

* 1,244 failed
* 60% was OK


---- ---- ---- ---- ---- ---- ----
### 483/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_2.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 4,160 failed
* 58% was OK


---- ---- ---- ---- ---- ---- ----
### 484/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_3.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 4,441 failed
* 55% was OK


---- ---- ---- ---- ---- ---- ----
### 485/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_4.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 4,333 failed
* 56% was OK


---- ---- ---- ---- ---- ---- ----
### 486/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_5.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 4,461 failed
* 55% was OK


---- ---- ---- ---- ---- ---- ----
### 487/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_6.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_6.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 4,573 failed
* 54% was OK


---- ---- ---- ---- ---- ---- ----
### 488/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_7.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_7.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 4,505 failed
* 55% was OK


---- ---- ---- ---- ---- ---- ----
### 489/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_8.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_8.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 2,953 failed
* 70% was OK


---- ---- ---- ---- ---- ---- ----
### 490/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_9.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/groupby/slt_good_9.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 462 failed
* 95% was OK


---- ---- ---- ---- ---- ---- ----
### 491/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_0.test)

_Mimic sqlite_

```sql
SELECT ALL * FROM tab1 cor0 CROSS JOIN tab1, tab2 AS cor1

Parse error on line 1:
...cor0 CROSS JOIN tab1, tab2 AS cor1
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'WITH', 'AS', 'RPAR', 'PIVOT', 'UNPIVOT', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', …
```

#### ☓ Ran 10,012 tests as _sqlite_

* 1,507 failed
* 84% was OK


---- ---- ---- ---- ---- ---- ----
### 492/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_1.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,252 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 493/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_10.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_10.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,190 failed
* 88% was OK


---- ---- ---- ---- ---- ---- ----
### 494/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_100.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_100.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,303 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 495/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_101.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_101.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,321 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 496/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_102.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_102.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,323 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 497/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_103.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_103.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,324 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 498/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_104.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_104.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,320 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 499/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_105.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_105.test)

_Mimic sqlite_
#### ☓ Ran 10,010 tests as _sqlite_

* 1,316 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 500/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_106.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_106.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,298 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 501/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_107.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_107.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,314 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 502/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_108.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_108.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,274 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 503/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_109.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_109.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,277 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 504/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_11.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_11.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,245 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 505/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_110.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_110.test)

_Mimic sqlite_
#### ☓ Ran 10,009 tests as _sqlite_

* 1,306 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 506/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_111.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_111.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,358 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 507/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_112.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_112.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,316 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 508/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_113.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_113.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,227 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 509/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_114.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_114.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,267 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 510/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_115.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_115.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,323 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 511/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_116.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_116.test)

_Mimic sqlite_
#### ☓ Ran 10,010 tests as _sqlite_

* 1,334 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 512/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_117.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_117.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,406 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 513/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_118.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_118.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,327 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 514/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_119.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_119.test)

_Mimic sqlite_
#### ☓ Ran 10,010 tests as _sqlite_

* 1,320 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 515/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_12.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_12.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,160 failed
* 88% was OK


---- ---- ---- ---- ---- ---- ----
### 516/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_120.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_120.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,289 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 517/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_121.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_121.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,283 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 518/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_122.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_122.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,331 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 519/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_123.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_123.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,312 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 520/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_124.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_124.test)

_Mimic sqlite_
#### ☓ Ran 2,865 tests as _sqlite_

* 365 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 521/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_125.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_125.test)

_Mimic sqlite_
#### ★ Ran 12 tests as _sqlite_

* 100% was OK

`sqlite 12 OK: /Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_125.test`


---- ---- ---- ---- ---- ---- ----
### 522/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_126.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_126.test)

_Mimic sqlite_
#### ★ Ran 12 tests as _sqlite_

* 100% was OK

`sqlite 12 OK: /Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_126.test`


---- ---- ---- ---- ---- ---- ----
### 523/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_13.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_13.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,216 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 524/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_14.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_14.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,205 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 525/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_15.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_15.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,189 failed
* 88% was OK


---- ---- ---- ---- ---- ---- ----
### 526/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_16.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_16.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,205 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 527/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_17.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_17.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,222 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 528/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_18.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_18.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,211 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 529/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_19.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_19.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,205 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 530/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_2.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,213 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 531/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_20.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_20.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,194 failed
* 88% was OK


---- ---- ---- ---- ---- ---- ----
### 532/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_21.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_21.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,247 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 533/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_22.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_22.test)

_Mimic sqlite_
#### ☓ Ran 10,010 tests as _sqlite_

* 1,236 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 534/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_23.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_23.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,258 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 535/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_24.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_24.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,219 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 536/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_25.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_25.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,192 failed
* 88% was OK


---- ---- ---- ---- ---- ---- ----
### 537/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_26.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_26.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,231 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 538/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_27.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_27.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,165 failed
* 88% was OK


---- ---- ---- ---- ---- ---- ----
### 539/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_28.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_28.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,205 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 540/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_29.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_29.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,281 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 541/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_3.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,161 failed
* 88% was OK


---- ---- ---- ---- ---- ---- ----
### 542/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_30.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_30.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,325 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 543/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_31.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_31.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,253 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 544/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_32.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_32.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,260 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 545/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_33.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_33.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,270 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 546/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_34.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_34.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,271 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 547/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_35.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_35.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,236 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 548/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_36.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_36.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,308 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 549/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_37.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_37.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,197 failed
* 88% was OK


---- ---- ---- ---- ---- ---- ----
### 550/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_38.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_38.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,234 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 551/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_39.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_39.test)

_Mimic sqlite_
#### ☓ Ran 10,010 tests as _sqlite_

* 1,225 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 552/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_4.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,224 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 553/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_40.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_40.test)

_Mimic sqlite_
#### ☓ Ran 10,010 tests as _sqlite_

* 1,229 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 554/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_41.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_41.test)

_Mimic sqlite_
#### ☓ Ran 10,010 tests as _sqlite_

* 1,219 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 555/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_42.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_42.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,287 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 556/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_43.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_43.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,206 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 557/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_44.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_44.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,243 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 558/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_45.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_45.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,244 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 559/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_46.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_46.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,265 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 560/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_47.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_47.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,250 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 561/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_48.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_48.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,259 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 562/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_49.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_49.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,238 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 563/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_5.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,233 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 564/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_50.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_50.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,300 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 565/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_51.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_51.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,232 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 566/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_52.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_52.test)

_Mimic sqlite_
#### ☓ Ran 10,010 tests as _sqlite_

* 1,291 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 567/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_53.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_53.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,259 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 568/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_54.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_54.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,332 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 569/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_55.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_55.test)

_Mimic sqlite_
#### ☓ Ran 10,009 tests as _sqlite_

* 1,281 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 570/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_56.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_56.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,203 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 571/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_57.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_57.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,307 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 572/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_58.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_58.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,281 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 573/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_59.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_59.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,296 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 574/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_6.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_6.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,229 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 575/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_60.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_60.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,288 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 576/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_61.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_61.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,281 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 577/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_62.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_62.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,234 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 578/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_63.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_63.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,303 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 579/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_64.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_64.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,260 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 580/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_65.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_65.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,286 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 581/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_66.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_66.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,265 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 582/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_67.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_67.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,242 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 583/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_68.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_68.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,263 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 584/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_69.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_69.test)

_Mimic sqlite_
#### ☓ Ran 10,010 tests as _sqlite_

* 1,281 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 585/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_7.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_7.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,202 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 586/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_70.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_70.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,329 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 587/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_71.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_71.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,282 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 588/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_72.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_72.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,321 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 589/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_73.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_73.test)

_Mimic sqlite_
#### ☓ Ran 10,010 tests as _sqlite_

* 1,318 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 590/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_74.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_74.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,270 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 591/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_75.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_75.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,242 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 592/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_76.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_76.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,319 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 593/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_77.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_77.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,291 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 594/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_78.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_78.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,269 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 595/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_79.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_79.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,269 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 596/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_8.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_8.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,233 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 597/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_80.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_80.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,307 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 598/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_81.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_81.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,289 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 599/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_82.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_82.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,241 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 600/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_83.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_83.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,301 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 601/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_84.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_84.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,314 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 602/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_85.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_85.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,315 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 603/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_86.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_86.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,263 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 604/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_87.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_87.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,263 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 605/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_88.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_88.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,311 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 606/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_89.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_89.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,290 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 607/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_9.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_9.test)

_Mimic sqlite_
#### ☓ Ran 10,010 tests as _sqlite_

* 1,202 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 608/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_90.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_90.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,281 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 609/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_91.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_91.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,259 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 610/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_92.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_92.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,369 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 611/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_93.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_93.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,264 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 612/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_94.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_94.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,314 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 613/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_95.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_95.test)

_Mimic sqlite_
#### ☓ Ran 10,011 tests as _sqlite_

* 1,280 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 614/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_96.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_96.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,223 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 615/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_97.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_97.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,308 failed
* 86% was OK


---- ---- ---- ---- ---- ---- ----
### 616/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_98.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_98.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,263 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 617/620 [`/Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_99.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/random/select/slt_good_99.test)

_Mimic sqlite_
#### ☓ Ran 10,012 tests as _sqlite_

* 1,263 failed
* 87% was OK


---- ---- ---- ---- ---- ---- ----
### 618/620 [`/Users/mwulff/git/alasql-sqllogictest/test/select1.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/select1.test)

_Mimic sqlite_
#### ★ Ran 1,031 tests as _sqlite_

* 100% was OK

`sqlite 1031 OK: /Users/mwulff/git/alasql-sqllogictest/test/select1.test`


---- ---- ---- ---- ---- ---- ----
### 619/620 [`/Users/mwulff/git/alasql-sqllogictest/test/select2.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/select2.test)

_Mimic sqlite_

```sql
SELECT a, (SELECT count(*) FROM t1 AS x WHERE x.b<t1.b), a+b*2+c*3+d*4+e*5, d FROM t1 WHERE a IS NULL

Expected: ["NULL","1","NULL","114","NULL","18","NULL","207"] but got ["NULL","18","NULL","207","NULL","1","NULL","114"]
```

#### ☓ Ran 1,031 tests as _sqlite_

* 152 failed
* 85% was OK


---- ---- ---- ---- ---- ---- ----
### 620/620 [`/Users/mwulff/git/alasql-sqllogictest/test/select3.test`](https://github.com/alasql/alasql-logictest/blob/master//Users/mwulff/git/alasql-sqllogictest/test/select3.test)

_Mimic sqlite_
#### ☓ Ran 3,351 tests as _sqlite_

* 306 failed
* 90% was OK


-----------------------------

## Final result

* `alasql@4.7.0` (Bun 1.3.1)
* Total tested: 5,934,591
* Failed tests: 655,333
* Skipped tests: 8,991
* Final score: [0m[33m88[0m % was OK


_Please note that repetitive errors are not always printed again_
