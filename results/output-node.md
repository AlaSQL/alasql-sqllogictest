# SQLlogictest results for AlaSQL 

`2025-11-06T07:54:03.960Z target: alasql@4.7.0`

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
SELECT null NOT IN ()

Expected: ["1"] but got ["NULL"]
```


```sql
SELECT 1 IN t1

Cannot read properties of undefined (reading 't1')
```


```sql
SELECT 1 NOT IN t1

Cannot read properties of undefined (reading 't1')
```


```sql
SELECT null IN t1

Cannot read properties of undefined (reading 't1')
```


```sql
SELECT null NOT IN t1

Cannot read properties of undefined (reading 't1')
```


```sql
SELECT null NOT IN (SELECT * FROM t1)

Expected: ["1"] but got ["NULL"]
```


```sql
SELECT 1 IN t2

Cannot read properties of undefined (reading 't2')
```


```sql
SELECT 1 NOT IN t2

Cannot read properties of undefined (reading 't2')
```


```sql
SELECT null IN t2

Cannot read properties of undefined (reading 't2')
```


```sql
SELECT null NOT IN t2

Cannot read properties of undefined (reading 't2')
```


```sql
SELECT null NOT IN (SELECT * FROM t2)

Expected: ["1"] but got ["NULL"]
```


```sql
SELECT null NOT IN (SELECT * FROM t3)

Expected: ["1"] but got ["NULL"]
```


```sql
SELECT null IN (SELECT x+y FROM t1,t2)

Expected: ["0"] but got ["NULL"]
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
SELECT 1 FROM t1 WHERE 1 IN ( NULL, 1 )

Query was expected to return results (but did not) 
```


```sql
SELECT 1 FROM t1 WHERE 1.0 IN ( NULL, 1.0 )

Query was expected to return results (but did not) 
```


```sql
SELECT 1 FROM t1 WHERE '1' IN ( NULL, '1' )

Query was expected to return results (but did not) 
```


```sql
SELECT 1 FROM t1 WHERE 1 IN (SELECT 1,2)

Expected to get an error but did not
```


```sql
SELECT 1 FROM t1 WHERE 1 IN (SELECT x,y FROM t1)

Expected to get an error but did not
```


```sql
SELECT 1 FROM t1 WHERE 1 IN (SELECT * FROM t1)

Expected to get an error but did not
```


```sql
SELECT 1 FROM t1 WHERE 1 IN (SELECT min(x),max(x) FROM t1)

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
SELECT avg(x) FROM t1

Expected: ["1"] but got ["1.250"]
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
SELECT group_concat(x,':') FROM t1 NOT INDEXED

Expected: ["1:0:2:2"] but got [":,:,:,:,:"]
```


```sql
SELECT group_concat(x) FROM t1 NOT INDEXED

Expected: ["1,0,2,2"] but got ["1,0,undefined,2,2"]
```


```sql
SELECT sum(x) FROM t1 WHERE y='null'

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT sum(DISTINCT x) FROM t1 WHERE y='null'

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT total(DISTINCT x) FROM t1

Expected: ["3.000"] but got ["3"]
```


```sql
SELECT sum(DISTINCT x) FROM t1

Expected: ["7.000"] but got ["7"]
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

Cannot read properties of undefined (reading '0')
```


```sql
SELECT pk FROM tab0 WHERE (col0 IS NULL) AND ((col0 IN (SELECT col3 FROM tab0 WHERE col1 IN (SELECT col4 FROM tab0 WHERE col4 > 4.43) OR col3 = 7 AND ((col3 >= 2)) AND col4 IN (4.79,4.35,6.77,0.17,8.22) OR (col0 < 8) AND (col0 >= 6) AND col3 >= 8 AND col3 <= 7 AND col3 < 3 AND col3 IS NULL AND col3…

Cannot read properties of undefined (reading '0')
```


```sql
SELECT pk FROM tab1 WHERE (col0 IS NULL) AND ((col0 IN (SELECT col3 FROM tab1 WHERE col1 IN (SELECT col4 FROM tab1 WHERE col4 > 4.43) OR col3 = 7 AND ((col3 >= 2)) AND col4 IN (4.79,4.35,6.77,0.17,8.22) OR (col0 < 8) AND (col0 >= 6) AND col3 >= 8 AND col3 <= 7 AND col3 < 3 AND col3 IS NULL AND col3…

Cannot read properties of undefined (reading '0')
```


```sql
SELECT pk FROM tab1 WHERE (col0 IS NULL) AND ((col0 IN (SELECT col3 FROM tab1 WHERE col1 IN (SELECT col4 FROM tab1 WHERE col4 > 4.43) OR col3 = 7 AND ((col3 >= 2)) AND col4 IN (4.79,4.35,6.77,0.17,8.22) OR (col0 < 8) AND (col0 >= 6) AND col3 >= 8 AND col3 <= 7 AND col3 < 3 AND col3 IS NULL AND col3…

Cannot read properties of undefined (reading '0')
```


```sql
SELECT pk FROM tab2 WHERE (col0 IS NULL) AND ((col0 IN (SELECT col3 FROM tab2 WHERE col1 IN (SELECT col4 FROM tab2 WHERE col4 > 4.43) OR col3 = 7 AND ((col3 >= 2)) AND col4 IN (4.79,4.35,6.77,0.17,8.22) OR (col0 < 8) AND (col0 >= 6) AND col3 >= 8 AND col3 <= 7 AND col3 < 3 AND col3 IS NULL AND col3…

Cannot read properties of undefined (reading '0')
```


```sql
SELECT pk FROM tab2 WHERE (col0 IS NULL) AND ((col0 IN (SELECT col3 FROM tab2 WHERE col1 IN (SELECT col4 FROM tab2 WHERE col4 > 4.43) OR col3 = 7 AND ((col3 >= 2)) AND col4 IN (4.79,4.35,6.77,0.17,8.22) OR (col0 < 8) AND (col0 >= 6) AND col3 >= 8 AND col3 <= 7 AND col3 < 3 AND col3 IS NULL AND col3…

Cannot read properties of undefined (reading '0')
```


```sql
SELECT pk FROM tab3 WHERE (col0 IS NULL) AND ((col0 IN (SELECT col3 FROM tab3 WHERE col1 IN (SELECT col4 FROM tab3 WHERE col4 > 4.43) OR col3 = 7 AND ((col3 >= 2)) AND col4 IN (4.79,4.35,6.77,0.17,8.22) OR (col0 < 8) AND (col0 >= 6) AND col3 >= 8 AND col3 <= 7 AND col3 < 3 AND col3 IS NULL AND col3…

Cannot read properties of undefined (reading '0')
```


```sql
SELECT pk FROM tab3 WHERE (col0 IS NULL) AND ((col0 IN (SELECT col3 FROM tab3 WHERE col1 IN (SELECT col4 FROM tab3 WHERE col4 > 4.43) OR col3 = 7 AND ((col3 >= 2)) AND col4 IN (4.79,4.35,6.77,0.17,8.22) OR (col0 < 8) AND (col0 >= 6) AND col3 >= 8 AND col3 <= 7 AND col3 < 3 AND col3 IS NULL AND col3…

Cannot read properties of undefined (reading '0')
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

