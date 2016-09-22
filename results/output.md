# SQLlogictest results for AlaSQL 

`2016-09-22T13:08:18.614Z target: alasql@0.3.2`

Results from 622 test files:

---- ---- ---- ---- ---- ---- ----
### 1/622 [`./test/evidence/in1.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/evidence/in1.test)

_Mimic sqlite_

```sql
SELECT null IN ()

Expected: ["0"] but got ["NULL"]
```


```sql
SELECT 1 IN t1

Cannot read property 't1' of undefined
```


```sql
INSERT INTO t5 SELECT * FROM t4

Cannot insert record, because it already exists in primary key index
```

_Fail found for statement setting up data so skipping rest of tests_

#### ☓ Ran 217 tests as _sqlite_

* 149 skipped
* 29 failed
* 17% was OK


---- ---- ---- ---- ---- ---- ----
### 2/622 [`./test/evidence/in2.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/evidence/in2.test)

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
### 3/622 [`./test/evidence/slt_lang_aggfunc.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/evidence/slt_lang_aggfunc.test)

_Mimic sqlite_

```sql
SELECT avg(DISTINCT x) FROM t1

Expected: ["0"] but got ["0.500"]
```


```sql
SELECT total(DISTINCT x) FROM t1

alasql.fn.total is not a function
```


```sql
SELECT group_concat(DISTINCT x) FROM t1 NOT INDEXED

alasql.fn.group_concat is not a function
```


```sql
SELECT avg(y) FROM t1

Expected: ["0"] but got ["NULL"]
```


```sql
SELECT sum(y) FROM t1

Expected: ["0"] but got ["truefalseNULLtruetrue"]
```


```sql
SELECT sum(DISTINCT y) FROM t1

Expected: ["0"] but got ["truefalseNULL"]
```


```sql
SELECT count(DISTINCT *) FROM t1 WHERE y='false'

Expected to get an error but did not
```


```sql
SELECT sum(x) FROM t1 WHERE y='null'

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT total(x) FROM t1 WHERE y='null'

Query was expected to return results (but did not) 
```

#### ☓ Ran 80 tests as _sqlite_

* 37 failed
* 53% was OK


---- ---- ---- ---- ---- ---- ----
### 4/622 [`./test/evidence/slt_lang_createtrigger.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/evidence/slt_lang_createtrigger.test)

_Mimic sqlite_

```sql
CREATE TRIGGER t1r1 UPDATE ON t1 BEGIN SELECT 1; END;

Expected to get an error but did not
```


```sql
DROP TRIGGER t1r1

Cannot read property 'beforeinsert' of undefined
```

_Fail found for statement setting up data so skipping rest of tests_

#### ☓ Ran 27 tests as _sqlite_

* 10 skipped
* 2 failed
* 55% was OK


---- ---- ---- ---- ---- ---- ----
### 5/622 [`./test/evidence/slt_lang_createview.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/evidence/slt_lang_createview.test)

_Mimic sqlite_

```sql
SELECT x FROM view1

Expected: ["1"] but got ["NULL"]
```


```sql
DELETE FROM view1 WHERE x>0

Expected to get an error but did not
```

#### ☓ Ran 23 tests as _sqlite_

* 8 failed
* 65% was OK


---- ---- ---- ---- ---- ---- ----
### 6/622 [`./test/evidence/slt_lang_dropindex.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/evidence/slt_lang_dropindex.test)

_Mimic sqlite_

```sql
DROP INDEX t1i1;

Expected to get an error but did not
```

#### ☓ Ran 8 tests as _sqlite_

* 2 failed
* 75% was OK


---- ---- ---- ---- ---- ---- ----
### 7/622 [`./test/evidence/slt_lang_droptable.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/evidence/slt_lang_droptable.test)

_Mimic sqlite_

```sql
DROP INDEX t1i1;

Expected to get an error but did not
```

#### ☓ Ran 12 tests as _sqlite_

* 1 failed
* 91% was OK


---- ---- ---- ---- ---- ---- ----
### 8/622 [`./test/evidence/slt_lang_droptrigger.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/evidence/slt_lang_droptrigger.test)

_Mimic sqlite_

```sql
DROP TRIGGER t1r1

Cannot read property 'beforeinsert' of undefined
```

_Fail found for statement setting up data so skipping rest of tests_

#### ☓ Ran 13 tests as _sqlite_

* 6 skipped
* 1 failed
* 46% was OK


---- ---- ---- ---- ---- ---- ----
### 9/622 [`./test/evidence/slt_lang_dropview.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/evidence/slt_lang_dropview.test)

_Mimic sqlite_

```sql
SELECT x FROM view2

Expected: ["0"] but got ["NULL"]
```

#### ☓ Ran 13 tests as _sqlite_

* 1 failed
* 92% was OK


---- ---- ---- ---- ---- ---- ----
### 10/622 [`./test/evidence/slt_lang_reindex.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/evidence/slt_lang_reindex.test)

_Mimic sqlite_

#### ★ Assuming all 7 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 11/622 [`./test/evidence/slt_lang_replace.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/evidence/slt_lang_replace.test)

_Mimic sqlite_

#### ★ Assuming all 14 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 12/622 [`./test/evidence/slt_lang_update.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/evidence/slt_lang_update.test)

_Mimic sqlite_

```sql
UPDATE t1 SET z='foo'

Expected to get an error but did not
```

#### ☓ Ran 27 tests as _sqlite_

* 2 failed
* 92% was OK


---- ---- ---- ---- ---- ---- ----
### 13/622 [`./test/index/between/1/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/between/1/slt_good_0.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col0 IS NULL) AND ((col0 IN (SELECT col3 FROM tab0 WHERE col1 IN (SELECT col4 FROM tab0 WHERE col4 > 4.43) OR col3 = 7 AND ((col3 >= 2)) AND col4 IN (4.79,4.35,6.77,0.17,8.22) OR (col0 < 8) AND (col0 >= 6) AND col3 >= 8 AND col3 <= 7 AND col3 < 3 AND col3 IS NULL AND col3…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col3 > 9 AND col3 IN (SELECT col0 FROM tab0 WHERE (col1 IN (SELECT col4 FROM tab0 WHERE ((col4 <= 6.41)) AND (((col0 >= 6 AND (((col4 > 4.0 OR (col3 BETWEEN 3 AND 0) OR col3 > 3 OR (col3 < 2)) AND col0 IN (SELECT col3 FROM tab0 WHERE col3 BETWEEN 5 AND 5 AND col3 <= 3) AND…

Cannot read property '1' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((col3 <= 4 AND ((((col3 IS NULL) OR (col3 < 9 AND col3 IN (SELECT col0 FROM tab0 WHERE col1 <= 8.23 AND col1 > 5.14 OR (col4 <= 8.72) AND col3 = 0 AND (col1 < 0.76) AND col0 BETWEEN 4 AND 0 OR col4 > 6.20 OR ((col1 IS NULL AND ((col4 >= 8.13) AND col0 < 5) AND col4 > 3.49…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((col0 IN (SELECT col3 FROM tab0 WHERE (((col0 > 9 OR col3 IN (SELECT col0 FROM tab0 WHERE col1 < 4.40) OR col3 BETWEEN 6 AND 3) AND col1 IS NULL OR (col3 < 1 AND col3 < 2))) OR (col3 IS NULL) AND col0 > 3) OR col3 > 9))

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 IN (SELECT col3 FROM tab0 WHERE (col3 <= 7 OR ((col0 >= 9 AND ((col4 < 3.79)) AND col0 >= 5 AND col3 IS NULL) OR col3 < 8 AND col0 IN (SELECT col3 FROM tab0 WHERE ((col0 BETWEEN 9 AND 4)))) OR col1 >= 3.1))

Cannot read property '0' of undefined
```

#### ☓ Ran 10,022 tests as _sqlite_

* 50 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 14/622 [`./test/index/between/10/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/between/10/slt_good_0.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE ((col0 >= 64)) AND col0 > 88 OR col0 IS NULL AND ((((((col1 IN (64.87,50.15,55.44,96.63,90.84)))) OR ((col3 < 39))))) AND col1 = 14.23 OR (col3 > 23) OR col4 IS NULL AND col1 > 33.73 AND col1 = 42.62 AND (((col1 <= 79.77) AND ((col4 <= 8.8) AND col0 > 1 OR col1 IN (88.91,1…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab4 WHERE ((col0 >= 64)) AND col0 > 88 OR col0 IS NULL AND ((((((col1 IN (64.87,50.15,55.44,96.63,90.84)))) OR ((col3 < 39))))) AND col1 = 14.23 OR (col3 > 23) OR col4 IS NULL AND col1 > 33.73 AND col1 = 42.62 AND (((col1 <= 79.77) AND ((col4 <= 8.8) AND col0 > 1 OR col1 IN (88.91,1…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,033 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 15/622 [`./test/index/between/10/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/between/10/slt_good_1.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col3 IS NULL AND col3 > 36 OR (col4 = 11.9) AND col0 >= 11 AND ((col3 >= 65) AND (col0 >= 92 OR col3 > 10 OR col1 >= 13.57)) OR ((col1 > 49.52)) AND col3 > 15 OR ((col3 = 16)) AND col3 < 91 AND col0 > 64 AND col0 <= 69 AND (col0 IN (SELECT col3 FROM tab0 WHERE (col1 < 95.5…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((((((col3 < 81)))) OR ((col3 IS NULL)) OR col4 > 51.62 AND ((col0 >= 72 AND col0 IN (16,39,2,51,36,86)) AND ((col3 > 54) AND ((col4 < 4.42)) OR ((col4 BETWEEN 86.9 AND 84.37) AND col1 IN (74.70) OR (col3 < 23)) AND (col0 >= 50) OR (col3 IS NULL AND col0 > 5)) OR col1 = 18…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col3 > 67 AND (col0 >= 49 OR col4 > 37.99 AND (col3 IN (25,46) OR col4 BETWEEN 29.91 AND 56.3) AND col1 <= 14.93 OR ((col0 < 90 AND (col3 < 55 AND ((((((col3 IN (92,12,95,7)))) OR col3 < 44)))))) AND col0 IN (SELECT col3 FROM tab0 WHERE col1 IN (SELECT col4 FROM tab0 WHER…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col4 < 28.47 AND col1 IN (SELECT col4 FROM tab0 WHERE (((col3 = 64 OR (((col3 IN (SELECT col0 FROM tab0 WHERE col3 BETWEEN 85 AND 52 OR (((col3 < 20)) AND col3 > 60)))))) AND col1 = 95.83)))

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col4 IN (44.24,50.42,93.11,32.81,75.51) AND (col3 <= 46 OR col3 = 24) OR col0 IN (SELECT col3 FROM tab0 WHERE col0 IN (SELECT col3 FROM tab0 WHERE col0 BETWEEN 26 AND 8 AND (col0 < 97) AND col1 = 33.75 OR col1 > 32.50 AND (col3 > 78) AND col3 = 3 AND col0 < 85 AND col4 IS …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col3 <= 75 OR ((col0 >= 43 AND (col3 IN (SELECT col0 FROM tab0 WHERE (((col1 <= 39.93)) OR col4 IN (SELECT col1 FROM tab0 WHERE (col3 <= 61)) AND col3 >= 30 AND (col0 = 47) OR col4 <= 34.70) AND col0 < 89) AND ((col4 IN (62.16,22.88,83.55,9.55,93.96) AND (((col0 >= 92))))…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (((col3 < 37) OR (col3 < 21) AND col0 = 55 AND col1 > 20.23 AND (col0 IN (SELECT col3 FROM tab0 WHERE col0 >= 21 OR ((col1 IN (SELECT col4 FROM tab0 WHERE col4 > 6.55 AND (col0 < 82 AND col3 < 23) AND ((col4 >= 37.19))))) OR col1 BETWEEN 86.90 AND 68.90 AND col0 >= 90 AND …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 < 2 OR (col3 IS NULL) AND ((col4 IN (SELECT col1 FROM tab0 WHERE col3 IN (SELECT col0 FROM tab0 WHERE (((col4 IN (38.48,96.1))) AND col4 < 86.59) AND (col4 BETWEEN 74.20 AND 46.72))) AND col1 IS NULL OR (col3 = 43 AND (col3 < 10 OR col1 >= 23.59))))

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col0 < 61 AND (((((col0 >= 84 OR col0 IN (SELECT col3 FROM tab0 WHERE ((col0 IS NULL) AND col4 = 41.99 OR ((col4 > 78.58)) AND col4 <= 94.8 OR col1 = 32.23 AND col3 < 27 AND ((col3 = 64) AND col3 <= 81 AND col3 >= 87 OR col3 <= 22 AND (col0 <= 43) AND (col3 = 92 OR ((col1…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,029 tests as _sqlite_

* 100 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 16/622 [`./test/index/between/10/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/between/10/slt_good_2.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col3 < 32) AND ((((col3 <= 73 AND col0 < 84 OR col0 >= 3 AND (((col4 < 22.55) OR col0 <= 88 AND (col4 <= 26.20) OR col3 < 9) AND col0 >= 80 AND col0 = 25 AND (((col3 = 9)))) OR (col3 <= 96) AND col1 < 20.30 AND col3 > 2 OR (col4 >= 34.97 OR ((col1 > 27.35))) AND ((col4 < …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (((col1 >= 59.7 AND ((((((((col3 <= 99))))) OR col3 <= 70 OR (col0 > 93) OR col0 < 83 AND col4 IS NULL OR (col3 > 47 OR ((col3 > 21 OR (col0 > 67))) AND (col0 <= 42) AND col1 >= 27.10 AND col0 >= 50 AND col3 <= 38) AND (col0 = 65 AND col0 < 71) OR (col0 IN (29,35,82,24,75)…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col4 >= 27.95 AND (col4 >= 54.22) AND (((((((((col3 IS NULL AND col1 IS NULL AND col4 > 54.18 OR col3 > 66 AND col0 IN (SELECT col3 FROM tab0 WHERE col3 IN (SELECT col0 FROM tab0 WHERE (col4 > 28.60) AND ((col1 >= 56.55))) OR col4 = 24.21)))) AND col4 IS NULL AND col0 > 98…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((col3 >= 9 OR (col0 < 58) AND (col4 <= 67.40)) OR col1 > 80.59 AND col3 IS NULL AND (col0 BETWEEN 71 AND 61) OR col3 < 38 AND col4 < 71.65 OR col4 >= 89.62 OR col1 > 94.81 OR (col3 = 7 OR col0 >= 3) OR col0 IN (SELECT col3 FROM tab0 WHERE ((col0 IN (SELECT col3 FROM tab0 …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col1 IN (52.47)) OR (col3 < 30 AND col0 IN (SELECT col3 FROM tab0 WHERE (col3 IN (SELECT col0 FROM tab0 WHERE (col1 < 26.64) OR ((col1 BETWEEN 53.93 AND 34.62) OR (col0 < 46 AND col0 < 96 OR (col0 <= 49)) AND col0 < 89 OR col1 > 58.60 OR col0 < 43 AND col0 <= 6 OR col3 = …

Cannot read property '1' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col3 > 62 AND ((col3 IN (SELECT col0 FROM tab0 WHERE ((col4 BETWEEN 12.24 AND 61.32) AND (col1 < 65.21 OR (col3 >= 9 AND col0 > 87) AND col3 IN (75,99,35,70)) AND (col3 IN (SELECT col0 FROM tab0 WHERE ((col3 > 92))) OR ((col0 = 76))))))) AND (col3 > 36) AND ((col0 > 55)) …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 > 39 OR (col0 = 86 AND col3 = 21 OR ((col0 IS NULL) OR col3 < 71 OR (col1 < 97.87) OR col1 = 7.0 OR (((col0 > 74) OR (((((((((col1 > 96.29) AND col0 > 42 AND (col0 < 95) AND col3 > 92 AND col0 <= 34 AND (col0 > 24 OR (col3 < 79)) OR ((col3 > 4)) AND col3 < 3 AND ((col…

Cannot read property '1' of undefined
```

#### ☓ Ran 10,032 tests as _sqlite_

* 80 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 17/622 [`./test/index/between/10/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/between/10/slt_good_3.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col0 IN (SELECT col3 FROM tab0 WHERE ((col4 > 94.14) AND ((col3 > 79)) AND (((col0 IS NULL) AND col0 < 83 AND col3 < 67 AND (col0 <= 49 AND col0 IS NULL OR (col3 > 46 AND col0 < 88) AND col3 < 28 AND (col0 < 75 OR col3 >= 61 OR (col3 > 58) OR col3 <= 16) OR col1 < 48.84 AN…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 >= 59 OR col3 >= 98 AND ((((col3 <= 63)))) OR col1 < 35.20 OR col3 BETWEEN 17 AND 36 AND (col3 IN (SELECT col0 FROM tab0 WHERE (col3 < 59 AND ((((col3 = 36 OR (((col0 > 95))) AND col3 = 60 AND ((col0 = 38 OR col1 > 41.18 AND col1 < 6.43 AND (col0 >= 27) AND (col0 > 23…

Cannot read property '1' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col4 IN (SELECT col1 FROM tab0 WHERE ((col3 > 36 AND col3 <= 99 OR col0 IN (96)) AND col0 < 68 AND col4 <= 99.77 OR col3 IS NULL AND (col3 < 1) AND (((((col0 >= 58))) OR col3 >= 83 AND col1 IN (18.37,88.67,29.68,15.46,37.17) OR col3 = 73) OR col4 <= 29.27 AND ((col0 > 28) …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col0 > 77 AND (col4 <= 85.97 OR (col4 > 49.45) AND col3 < 69 OR col0 >= 10 OR col4 <= 69.71) OR col0 = 78 OR (col3 IS NULL) OR col4 < 28.85 AND col0 = 98 AND (((col0 < 80) OR col0 <= 94)) OR col3 > 77 OR (((col0 IS NULL AND (((col4 < 50.42)) AND col3 = 86) AND col1 < 99.4…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,032 tests as _sqlite_

* 40 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 18/622 [`./test/index/between/10/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/between/10/slt_good_4.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col3 <= 32) OR col3 > 9 AND (((col3 = 6 AND col3 IN (SELECT col0 FROM tab0 WHERE (((col0 < 95) OR (col3 >= 69 AND col0 = 84 AND col0 >= 61 AND ((col3 >= 67 OR col1 < 78.31)) AND (col0 > 95 AND col0 >= 95 OR col0 < 16) OR (col3 IN (SELECT col0 FROM tab0 WHERE col4 > 20.20 …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col1 < 54.69 AND col4 = 78.2 OR (col3 < 12) AND (col4 <= 25.48) OR (col4 > 22.68) OR (col0 <= 63) AND ((((col0 IS NULL OR (col4 > 59.10 OR col0 = 65 AND (col3 < 33) AND col0 > 40 OR col1 > 3.69 AND ((col3 < 86 AND (col0 = 4 AND col0 < 82) OR (col3 >= 67)) OR (col3 IN (15,3…

Cannot read property '1' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 IN (33,74,15,24,83) AND (col1 < 2.43 OR (col3 = 9 AND col0 <= 38 OR col0 > 53) AND (col1 < 78.46 OR col3 IS NULL OR col0 < 87 AND col3 > 52 AND (col3 >= 40 AND (col0 > 4)) AND ((((col3 <= 51)))) AND col4 > 82.46 AND col0 >= 79 AND ((col4 >= 8.85) OR col4 >= 6.62 AND c…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col0 > 49) AND col3 >= 2 AND ((col3 < 93 OR col0 < 14 AND col3 > 55 AND col0 IS NULL AND col0 IS NULL OR (col0 <= 64) AND (col3 IN (99,98) OR (((col0 <= 30)))) OR ((col0 >= 64)))) AND col4 < 44.40 OR (((col0 > 48 AND col0 IN (23,60,53)))) OR col1 >= 67.59 AND (col1 < 24.3…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((col3 < 51 AND col0 >= 81 OR col0 <= 58) OR col1 <= 67.14 OR ((((((col4 IS NULL))) AND (((col1 <= 82.72 OR (((col1 >= 15.16 OR col3 < 10 AND (col1 < 62.58 AND ((col4 < 70.98)) AND (col1 > 84.99 AND col3 IS NULL AND ((col3 > 30) AND (((col0 IS NULL AND col3 <= 23 AND col0 …

Cannot read property '0' of undefined
```

#### ☓ Ran 10,032 tests as _sqlite_

* 50 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 19/622 [`./test/index/between/10/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/between/10/slt_good_5.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE ((col3 < 49 AND (col4 >= 2.37 AND col3 <= 34 OR (col0 > 45 AND col3 IN (84,55,60,5,10,51) AND col3 > 44)) AND ((col4 BETWEEN 85.7 AND 68.3 AND col0 > 12) OR col3 >= 61 AND col1 < 44.10 OR ((((col1 <= 88.54)) AND col3 BETWEEN 50 AND 64) AND col0 < 7) OR ((col0 > 68)) AND co…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col0 >= 27 AND col3 > 56) AND ((col3 IN (SELECT col0 FROM tab0 WHERE col4 IN (SELECT col1 FROM tab0 WHERE col0 > 5)) OR col0 > 37) AND (col1 >= 21.70 AND col3 < 91 OR col1 <= 75.40 AND (col0 >= 78) AND col0 >= 67 OR (((col1 >= 88.22 OR col3 IN (44,30,92,25,97,33) OR ((col…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((col3 < 53)) AND (col3 >= 63) AND ((col0 > 85 AND col1 >= 95.36) OR (((col1 IN (43.28,87.90,59.13,29.45,15.2,77.59) AND (col4 > 89.84 AND ((col1 < 37.2 AND ((col1 = 88.87) OR col3 BETWEEN 36 AND 36))) AND (col3 = 26) AND (col4 IN (66.90,7.14) AND col1 < 85.14 OR col0 IN (…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((col0 IN (SELECT col3 FROM tab0 WHERE col0 < 24 OR col3 IN (SELECT col0 FROM tab0 WHERE col0 <= 91 OR col0 >= 11 OR ((col1 > 85.14)) AND col3 <= 9) AND col0 > 26 AND (col1 BETWEEN 84.8 AND 22.52 OR col0 < 36 AND col1 > 16.44 AND col0 > 25 OR col3 = 60 AND col1 <= 39.94) O…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col4 > 54.75 AND col3 > 95) OR col0 IN (SELECT col3 FROM tab0 WHERE (col0 BETWEEN 51 AND 11 AND (col4 IN (1.33,48.61,45.74,94.24)) AND col3 > 92 AND (col4 < 49.22 AND ((((col3 > 16 OR col4 = 84.44))) AND col0 IS NULL) OR (col4 IN (10.21,47.97))) AND col0 >= 67 OR col0 <= …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col3 IN (SELECT col0 FROM tab0 WHERE ((col0 > 99 OR col0 > 79 AND col0 <= 25 AND (col3 >= 48) AND col0 IN (41,47) OR (((col0 > 41) OR (col3 >= 97 OR (col0 = 99 AND col3 > 74) OR col0 = 11))) OR col3 IN (SELECT col0 FROM tab0 WHERE ((col3 >= 59))) OR col0 <= 12 AND ((((((co…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col0 IN (51,0,58) AND (((col1 IN (SELECT col4 FROM tab0 WHERE col3 > 20 OR (col4 IN (SELECT col1 FROM tab0 WHERE col4 BETWEEN 17.98 AND 34.97) AND col3 IS NULL AND col3 < 23)))) AND (col0 = 77)))

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col3 IN (SELECT col0 FROM tab0 WHERE ((((col1 > 50.44)) OR col0 > 80) OR (col0 BETWEEN 2 AND 34 OR (col0 >= 68)) AND col4 IS NULL AND ((col3 > 83) AND col1 > 91.52) OR (col3 >= 41) AND (col1 >= 97.71 AND col0 IS NULL OR (col0 > 90) AND col0 > 26) AND ((col1 > 79.75 OR col…

Cannot read property '1' of undefined
```

#### ☓ Ran 10,031 tests as _sqlite_

* 90 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 20/622 [`./test/index/between/100/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/between/100/slt_good_0.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col3 <= 50 AND col3 IN (SELECT col0 FROM tab0 WHERE (col0 = 307) AND col0 IN (SELECT col3 FROM tab0 WHERE (((col3 > 437)) AND col4 >= 364.33)) AND col1 <= 749.88 AND col4 > 248.44 OR (col0 >= 492) AND (col0 >= 673)) OR (col3 <= 465 OR (col1 BETWEEN 428.17 AND 578.38))

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col0 = 571 AND (col4 > 284.35) AND (col3 > 728 OR col3 BETWEEN 589 AND 800 OR ((col1 < 3.14 AND col0 <= 851)) OR ((col1 > 526.62) AND col4 = 552.16 AND (col3 >= 782) OR (col4 >= 874.55) AND (((((col4 > 35.15))) AND (col0 IN (SELECT col3 FROM tab0 WHERE (col1 IN (SELECT co…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 >= 430 AND col4 >= 267.79 AND col3 > 802 AND col0 > 758 AND (col0 IS NULL) OR (((col3 > 171 AND col3 IN (SELECT col0 FROM tab0 WHERE ((((col3 < 423 AND col0 < 417) AND col3 IS NULL OR col4 IN (586.23,999.2,786.31,381.30,709.4,783.23) AND col0 > 478 OR ((col3 <= 930) A…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((col4 <= 380.4) AND (col4 > 201.28) OR ((col4 > 199.97)) AND ((((col0 > 714)))) OR (((((col0 IN (SELECT col3 FROM tab0 WHERE ((col1 = 672.71)) AND col4 IN (SELECT col1 FROM tab0 WHERE ((col4 > 169.88 OR col0 > 939 AND ((col3 > 578))))) AND col0 >= 377) AND col4 >= 817.87 …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab4 WHERE ((col4 <= 380.4) AND (col4 > 201.28) OR ((col4 > 199.97)) AND ((((col0 > 714)))) OR (((((col0 IN (SELECT col3 FROM tab4 WHERE ((col1 = 672.71)) AND col4 IN (SELECT col1 FROM tab4 WHERE ((col4 > 169.88 OR col0 > 939 AND ((col3 > 578))))) AND col0 >= 377) AND col4 >= 817.87 …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (((((col3 IN (603,605,377)) OR (col3 = 617) OR ((col3 < 369)) AND col0 < 793)))) AND col3 IN (SELECT col0 FROM tab0 WHERE (col1 > 17.71) OR col3 > 611 AND col3 > 123 AND col0 IN (731,864,783,149,953) OR col0 = 976 OR (col3 < 710) AND ((((col0 > 435) OR col1 >= 355.47 AND c…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (((col4 BETWEEN 674.67 AND 840.78)) OR ((col0 <= 136) OR col0 IN (SELECT col3 FROM tab0 WHERE (((((col0 <= 420)))) AND ((col1 > 81.31 AND col0 = 304 OR (col0 = 337) OR col1 >= 639.77 AND ((col0 BETWEEN 775 AND 179) AND (col3 = 278 OR col1 < 155.72 AND col4 >= 588.69 OR col…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,123 tests as _sqlite_

* 70 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 21/622 [`./test/index/between/100/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/between/100/slt_good_1.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col3 >= 547 AND ((col0 > 327))) OR ((col1 <= 951.17) AND (col1 >= 159.63 AND (col4 >= 145.97 OR (((col0 > 261 OR col1 IS NULL OR col4 < 749.21 OR col0 >= 407 AND col0 <= 471 OR col3 IN (164) AND ((col3 > 382) OR ((col4 IN (SELECT col1 FROM tab0 WHERE (col0 < 797 AND ((col…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col3 IN (SELECT col0 FROM tab0 WHERE ((col3 > 386 AND ((col0 > 207 OR (col1 = 301.54))) AND (col3 = 276) OR col4 < 806.25 AND (col3 IS NULL AND (col0 < 501) AND col3 = 71 AND (col0 > 720 OR col0 < 202)) OR (col4 < 207.4) OR col3 <= 758 AND (((col0 >= 446) AND (col0 > 893 O…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col3 < 443 AND (col1 IN (SELECT col4 FROM tab0 WHERE col4 = 240.90 AND (col0 < 78 OR (((col3 >= 227 AND (((col1 >= 967.69 AND col1 = 166.11))) AND col1 >= 591.53 AND col3 <= 739 AND col0 <= 233 OR col0 > 379 AND ((((col3 IN (SELECT col0 FROM tab0 WHERE ((col0 > 798) AND c…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (((col3 < 162 OR col3 > 135 AND ((col4 < 722.46))) AND (((col0 > 694 OR (col3 > 447 OR col4 > 449.10 OR ((col1 <= 895.2 OR col0 < 760)) AND col0 <= 888 AND ((col1 IS NULL AND col3 >= 415) AND col4 < 230.83) OR col1 IN (370.68,50.37,87.68,73.48,145.12,117.98) OR ((col3 < 95…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col1 <= 223.31 OR col4 > 300.45) AND col1 IN (774.76,147.9,429.52) AND col3 > 781 AND col1 >= 958.53 AND (col1 > 7.35) OR col0 > 797 AND col0 <= 244 OR (col0 > 989) OR col4 >= 45.94 OR col3 < 246 OR (col0 BETWEEN 29 AND 829 AND (((col3 > 624))) OR (((col3 > 278) OR ((col3…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 IN (SELECT col3 FROM tab0 WHERE (col4 = 360.85 AND col3 >= 860 AND (col3 <= 357) AND col0 <= 695 OR (col0 IS NULL OR col0 > 641 AND ((((((col1 > 64.91)) AND col1 >= 195.31 OR col1 > 15.78)) OR col0 BETWEEN 820 AND 152)) OR (col0 > 864 AND (col0 > 40) AND col3 BETWEEN …

Cannot read property '0' of undefined
```

#### ☓ Ran 10,125 tests as _sqlite_

* 70 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 22/622 [`./test/index/between/100/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/between/100/slt_good_2.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col3 > 849 AND col0 > 225 OR (col1 >= 315.31 AND (col3 >= 673)) OR col3 BETWEEN 210 AND 661 OR ((col0 IN (724,814)) OR (col3 IN (SELECT col0 FROM tab0 WHERE (col0 < 652 OR col1 IN (943.46,551.4,485.92,538.11)) OR col3 > 671 AND ((col0 < 248)) OR col4 >= 201.29 OR col0 > 7…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (((col4 IN (SELECT col1 FROM tab0 WHERE (col3 = 458) OR col0 < 143 AND (col0 = 469) AND ((col4 = 800.32)) OR col3 >= 805 AND col3 >= 739 OR col0 > 952 AND col3 >= 72 AND (((col0 <= 725) AND (col4 IS NULL) AND col3 > 6 AND col1 IN (689.94,501.63,669.97))) AND col3 IN (624,3…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col3 < 343) AND ((col4 < 439.47 OR col3 < 720)) AND (((((col0 < 134) AND (col1 >= 828.34 OR (((col3 <= 0 AND col0 = 278) AND (col0 > 70 OR (col4 >= 481.2 OR col4 < 326.48 OR (col3 <= 61))) AND (col1 > 636.77) AND col3 IS NULL AND (col3 <= 727 OR col3 IN (SELECT col0 FROM …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col3 < 19 OR col0 >= 938 AND (col3 >= 492 AND (col3 > 958 AND col0 > 602 AND col0 IN (SELECT col3 FROM tab0 WHERE ((((col3 > 628 OR (col0 > 677) OR col3 IN (SELECT col0 FROM tab0 WHERE col0 <= 985) AND (col0 > 176 AND col0 > 917)) AND col4 = 278.5) AND (((col4 < 302.24 AND…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col4 <= 300.88 AND col0 IS NULL AND ((col0 IN (SELECT col3 FROM tab0 WHERE (col1 >= 784.39 AND (((col1 > 423.99))) AND col0 < 900 AND col3 IN (SELECT col0 FROM tab0 WHERE (col3 > 455) AND (col0 <= 791 OR (col1 < 267.83))) OR col4 < 159.62) OR (col0 = 397) AND (col3 BETWEEN…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (((col0 > 606 AND (col0 IN (SELECT col3 FROM tab0 WHERE ((col4 > 134.26) OR col3 >= 822 AND col0 > 172) OR (col3 BETWEEN 253 AND 935) AND (col4 < 546.31) OR (col3 IS NULL) AND ((col4 IN (SELECT col1 FROM tab0 WHERE (col4 > 727.21)) OR col3 < 269 OR col3 < 693 OR ((col4 < 9…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (((((((col1 IN (SELECT col4 FROM tab0 WHERE ((col3 <= 554) AND col0 BETWEEN 735 AND 859 AND col0 IN (SELECT col3 FROM tab0 WHERE (col1 >= 36.15))) AND ((((col1 <= 171.81))))) AND col4 < 379.48 OR col4 IS NULL AND col1 >= 914.18 OR col3 >= 324 OR ((col4 > 84.85 AND col0 >= …

Cannot read property '0' of undefined
```

#### ☓ Ran 10,121 tests as _sqlite_

* 80 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 23/622 [`./test/index/between/100/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/between/100/slt_good_3.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE ((col1 < 624.66)) AND col0 = 129 OR ((col4 < 93.88)) AND (col4 <= 177.86) OR col3 IS NULL OR (col3 >= 456 AND col3 > 850) OR ((col0 IN (SELECT col3 FROM tab0 WHERE (col1 IS NULL) AND ((((col0 IN (923,510,473,814,412) OR (col3 >= 217 OR (col3 < 660)) AND col3 < 692)) AND ((…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((col4 < 129.64 OR ((col0 > 168)) AND (col1 < 565.60) OR col1 IN (22.11,998.89,305.33,19.85) OR ((col0 <= 84) OR col1 IN (753.3,162.95,834.61,504.52,768.31,436.28)) OR col4 < 525.98 OR col1 > 997.49 AND col3 >= 536 AND col0 <= 615 OR col0 = 188 AND col3 > 372 AND col4 >= 6…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col4 IN (SELECT col1 FROM tab0 WHERE col3 IN (808,18,855,768,767,23) AND ((col0 > 394 AND col1 = 993.11 AND col3 < 701 AND col3 >= 317 OR ((col0 <= 101 OR col0 < 928)) AND (col3 IN (SELECT col0 FROM tab0 WHERE ((col3 >= 671) OR col0 > 775) AND ((((col0 <= 903 OR (col0 > 9)…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((((col3 BETWEEN 117 AND 645) AND col3 <= 459 AND col3 < 111 AND ((col3 <= 25)) OR col0 IS NULL AND (col1 IN (SELECT col4 FROM tab0 WHERE col3 IN (SELECT col0 FROM tab0 WHERE (col3 = 170 OR col1 < 678.18 OR ((col3 > 818 OR col0 IN (714,853,2,467,3,95))))) OR col4 >= 734.9)…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col3 IN (SELECT col0 FROM tab0 WHERE (col3 < 829 AND col1 <= 192.65) AND col0 > 889 AND (((col1 >= 949.68) OR col1 IN (SELECT col4 FROM tab0 WHERE col0 < 922) OR (col3 < 414) OR col3 > 87 AND col3 <= 607 AND (((col0 >= 183) OR col3 IN (SELECT col0 FROM tab0 WHERE col0 = 8…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((((((col3 > 809)) AND col4 < 153.40 AND col4 = 812.41 AND col1 IN (45.85,458.23,884.16,788.92,341.54,225.51) AND col0 IN (SELECT col3 FROM tab0 WHERE (((col0 > 884)))) OR (((((col0 = 282 AND col3 > 861 AND col0 >= 529) OR ((((col3 < 183) AND col3 < 148))) OR col3 = 194 OR…

Cannot read property '1' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((col0 >= 947 AND ((col4 IN (109.8,329.52,333.80,441.57,694.76,1.63))) AND (((col0 <= 688)) OR col3 >= 281 AND (col3 >= 954 OR ((col0 > 871) OR (col3 > 1 AND (((col3 >= 409))) OR col1 < 252.96) AND (col0 < 237 OR (col0 >= 572 OR (((col4 IS NULL) OR (col0 < 582 AND col3 < 8…

Cannot read property '2' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col3 IN (SELECT col0 FROM tab0 WHERE (((col0 > 549 AND col1 < 961.77 AND (((col1 < 560.12))) OR col0 < 85 AND (col3 <= 54) OR (((((col0 IN (SELECT col3 FROM tab0 WHERE col4 > 101.45))) OR col4 > 855.72 OR (col3 < 451) OR col0 > 488 AND col0 >= 863 AND col0 IS NULL AND (col…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (((col1 < 429.37) OR (col0 IN (SELECT col3 FROM tab0 WHERE ((col3 IS NULL OR (((((col0 >= 456))))) AND (col1 < 639.34) OR col1 = 703.58 OR col1 IN (SELECT col4 FROM tab0 WHERE ((col3 <= 306)) OR (col3 < 263) AND col1 >= 178.89 AND ((col1 BETWEEN 963.6 AND 466.90 OR col0 >=…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,121 tests as _sqlite_

* 90 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 24/622 [`./test/index/between/100/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/between/100/slt_good_4.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col0 IN (SELECT col3 FROM tab0 WHERE col4 IN (SELECT col1 FROM tab0 WHERE (((((((col3 BETWEEN 320 AND 970 AND col3 <= 223) OR col4 <= 829.17) AND (col3 >= 651 AND (col3 < 768 OR col0 > 379 OR ((col0 <= 960 OR ((((col4 >= 450.22 AND (col0 = 332 AND col3 < 129)) OR (col1 IN…

Cannot read property '1' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col0 = 979) AND (col0 <= 811) AND (col0 BETWEEN 35 AND 732 OR (col0 >= 701) OR col1 BETWEEN 269.6 AND 992.26 OR col3 IN (SELECT col0 FROM tab0 WHERE col1 > 770.27 OR col4 < 163.79) OR col3 > 319 AND (col0 < 445 AND ((col4 BETWEEN 412.90 AND 564.83)) AND col0 > 876 AND col…

Cannot read property '2' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col4 < 638.52) OR col3 IN (SELECT col0 FROM tab0 WHERE (((col4 IN (SELECT col1 FROM tab0 WHERE ((((((((col1 IN (953.9,989.52,802.46) AND (col3 >= 648 OR col3 <= 4) AND col0 < 341 OR (col0 = 983) OR ((col1 < 991.34)) AND (col0 > 503)))) AND ((col4 BETWEEN 893.52 AND 223.31…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 < 775 AND ((((col3 > 765 AND col4 <= 488.0 AND col4 < 165.48 AND (col3 >= 396)) OR col3 > 65 AND col4 > 312.50 AND col0 >= 216 OR col1 <= 366.43 OR (col3 BETWEEN 848 AND 787) OR ((col0 < 233)) OR col4 < 489.47 AND col0 = 877 AND (col3 = 310) OR (col0 <= 984 AND (col0 …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col3 IN (SELECT col0 FROM tab0 WHERE ((col3 <= 458 OR col3 < 535 AND (col4 < 597.2) AND (col0 > 367 OR col0 > 603 OR col4 >= 705.54 OR (col0 >= 373) OR (col4 BETWEEN 97.63 AND 15.82) AND col3 >= 44 OR col1 BETWEEN 61.65 AND 919.56 OR ((col3 > 870)) OR col0 BETWEEN 284 AND…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col3 IN (SELECT col0 FROM tab0 WHERE col4 > 35.85 AND (((col3 IS NULL OR col3 > 403 AND col0 >= 715 AND col1 = 206.64 AND col3 >= 107 OR col4 > 929.83 OR col4 BETWEEN 900.32 AND 749.83 OR (col3 = 880) OR (col0 > 331) OR (col3 > 444) OR col4 >= 78.88 OR (col0 IS NULL) OR c…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col0 < 722 AND col3 < 943 AND col0 >= 952 OR col4 < 261.89 OR ((col3 <= 285 OR col0 BETWEEN 434 AND 549) AND col0 IS NULL AND col0 < 977 OR col4 IN (SELECT col1 FROM tab0 WHERE col4 < 601.44) OR (col4 = 136.51) OR col0 IN (SELECT col3 FROM tab0 WHERE col0 = 459 OR (col0 >…

Cannot read property '1' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col4 > 608.48 OR (((col4 > 519.65)) OR col3 > 741) OR col0 < 753 AND ((((((col1 BETWEEN 250.88 AND 705.84)) AND (col0 >= 101))) AND col3 IN (SELECT col0 FROM tab0 WHERE (col4 IN (SELECT col1 FROM tab0 WHERE col1 > 964.19 OR col0 <= 660 AND col4 >= 529.94 AND col3 < 351) O…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,125 tests as _sqlite_

* 90 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 25/622 [`./test/index/between/1000/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/between/1000/slt_good_0.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col1 > 1140.37 AND col0 > 6867 AND col3 IS NULL OR col3 >= 4028 OR ((((((col3 > 7836 OR ((((col3 < 2360 AND ((col3 = 4198)) OR (((col4 > 1701.59) OR col4 = 6837.88) OR col3 < 7916) AND col0 BETWEEN 8446 AND 7080 OR col3 IS NULL))) OR (col1 >= 9678.28 OR col1 <= 9172.75 AN…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col0 > 4054 OR col0 > 9557 AND col3 IN (1113,2593,6147,7553)) AND col1 > 6949.54 AND col4 > 5483.98 OR (((col0 IN (1974,615,3732,9444,5574,7033))) AND col0 IN (SELECT col3 FROM tab0 WHERE ((col1 < 415.92) AND (((col3 >= 1296) OR col4 IS NULL)) AND ((col0 <= 6210 AND (col3…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab4 WHERE (col0 > 4054 OR col0 > 9557 AND col3 IN (1113,2593,6147,7553)) AND col1 > 6949.54 AND col4 > 5483.98 OR (((col0 IN (1974,615,3732,9444,5574,7033))) AND col0 IN (SELECT col3 FROM tab4 WHERE ((col1 < 415.92) AND (((col3 >= 1296) OR col4 IS NULL)) AND ((col0 <= 6210 AND (col3…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 > 2377 OR ((col1 > 2834.62)) AND (col0 IS NULL OR (col4 < 7463.98 AND (col3 <= 1805)) OR ((col3 >= 5222))) AND col0 <= 9495 AND col3 IN (SELECT col0 FROM tab0 WHERE col1 >= 6814.64 OR (col1 > 7430.5) AND col3 > 6478 OR col3 < 2867 AND col1 > 1953.89 AND (col3 >= 2268 …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col3 = 2333 AND col0 > 8327 AND col0 >= 6492) AND (col3 = 1676 AND col0 <= 582 OR (col4 <= 8505.17 OR col0 BETWEEN 2254 AND 2551 OR (col0 >= 1242) OR ((((col4 = 2301.0 AND col3 < 4479) OR col1 < 2756.19 OR ((col3 <= 8143 OR (col0 >= 3296) OR col0 >= 4752 AND col3 > 4813))…

Cannot read property '1' of undefined
```

#### ☓ Ran 3,792 tests as _sqlite_

* 41 failed
* 98% was OK


---- ---- ---- ---- ---- ---- ----
### 26/622 [`./test/index/commute/10/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_0.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE ((((col4 < 26.48))) AND col4 IN (SELECT col1 FROM tab0 WHERE (col3 < 55 OR ((col0 >= 53 AND (((((col0 > 8) AND (((col3 IN (SELECT col0 FROM tab0 WHERE col0 < 65 AND col1 > 42.32)) OR col1 IS NULL OR col3 > 84 OR (col4 IS NULL)) OR ((col0 <= 9))))) AND col0 IN (1))) OR col3…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,034 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 27/622 [`./test/index/commute/10/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_1.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col0 > 58 OR (((col1 = 10.50))) AND col4 IN (SELECT col1 FROM tab0 WHERE col3 >= 20 OR (col3 <= 72) AND ((col3 > 44)) AND (col0 >= 6 AND (col0 IN (SELECT col3 FROM tab0 WHERE col1 > 67.85) OR col4 IN (78.74))) OR ((((col4 > 4.45)))) AND col3 BETWEEN 9 AND 89 AND col0 > 12)

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 = 62 OR col4 >= 39.18 OR ((((col3 > 13) OR col3 >= 38 AND ((col3 > 76)) OR ((col0 >= 62 AND (col3 <= 41)) AND col1 < 22.8 AND col3 >= 7) OR col3 <= 50 AND col3 BETWEEN 52 AND 47 AND col3 >= 11 AND col3 > 94 OR col1 > 98.62 OR col3 >= 76 OR ((((col0 < 79))) AND (((((co…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col3 > 7) OR col1 > 63.12 OR col3 > 23 AND col0 >= 38 AND (col1 < 14.6) AND (col3 >= 55 AND col4 >= 55.35 AND col1 IS NULL AND col1 > 1.43) AND (col3 < 56) AND col3 < 3 AND col1 < 86.17 AND ((col4 = 23.79) OR ((col0 BETWEEN 18 AND 97)) AND (col3 > 11 AND col0 <= 25) AND (…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col3 IN (SELECT col0 FROM tab0 WHERE (col3 >= 45))) OR ((col4 = 84.11 AND col3 BETWEEN 80 AND 33 OR col3 < 34 OR col0 > 43) AND (col4 <= 1.15)) OR col0 >= 43 AND col1 IN (24.41,73.20) AND ((((col0 IS NULL)))) AND (((col0 >= 45))) OR (col0 IN (74,28,23,25,37,55) OR col0 <=…

Cannot read property '1' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col3 < 92 AND col4 = 8.95) OR (col4 >= 74.88 AND (((col0 > 55) OR (col4 >= 42.16) AND col0 > 63 OR col3 < 57 AND col3 > 91 AND (((col3 > 61) OR (col4 > 62.75 OR col3 IS NULL)) AND col3 BETWEEN 38 AND 34) AND col0 > 11 AND (col3 <= 75) OR (col0 = 59) AND col1 < 51.99 AND c…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,030 tests as _sqlite_

* 50 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 28/622 [`./test/index/commute/10/slt_good_10.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_10.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col3 >= 18 AND ((col4 > 53.9)) OR col3 IN (SELECT col0 FROM tab0 WHERE (col0 < 49 AND col1 > 94.70 AND col0 IN (SELECT col3 FROM tab0 WHERE col0 >= 91) AND (col3 BETWEEN 85 AND 24 OR col0 >= 69)))

Cannot read property '0' of undefined
```

#### ☓ Ran 4,261 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 29/622 [`./test/index/commute/10/slt_good_11.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_11.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE ((((col3 > 38 OR (col4 > 28.25)) AND col3 >= 30 OR col4 >= 10.47))) OR ((col4 < 68.79 AND col4 IN (SELECT col1 FROM tab0 WHERE col4 IN (SELECT col1 FROM tab0 WHERE col0 > 20 AND col1 IS NULL OR col0 > 35 AND col4 > 72.86) OR col0 < 65) AND col4 <= 75.39))

Cannot read property '0' of undefined
```

#### ☓ Ran 10,032 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 30/622 [`./test/index/commute/10/slt_good_12.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_12.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col3 <= 11 OR (col0 BETWEEN 52 AND 46) AND (col0 > 12 OR (col3 = 58) OR col1 > 56.50 AND col4 >= 79.17 OR ((col4 IN (74.92,16.46,69.35,86.16,87.80)) AND col1 > 35.57 AND col4 <= 87.17) AND (((col0 < 70 AND col3 < 34 AND col1 BETWEEN 89.6 AND 54.59 AND (col3 < 34 AND col4 <…

Cannot read property '1' of undefined
```

#### ☓ Ran 10,031 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 31/622 [`./test/index/commute/10/slt_good_13.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_13.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col0 IN (SELECT col3 FROM tab0 WHERE col0 IN (SELECT col3 FROM tab0 WHERE col0 IN (42,31,88,70,42,7) AND col1 <= 23.6 OR (col3 > 8 OR col3 IS NULL))) AND (col0 > 99)

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col4 > 7.76 AND (((col3 > 58 AND col0 BETWEEN 43 AND 26 AND ((col3 < 28 OR (col3 <= 55 AND (col4 >= 55.84 OR (((col0 > 26) OR col3 < 12 OR (col4 IS NULL)) OR col0 > 42)) AND col4 >= 80.25 OR (col3 IN (31,19,38,50) AND col1 BETWEEN 13.74 AND 34.97 OR col1 < 7.94 AND (col3 …

Cannot read property '1' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 < 59 OR ((col4 IN (86.62,83.11) OR (col1 > 37.53) OR (col4 < 93.58 AND col0 < 97 AND col3 > 47 AND ((col3 <= 32 AND col0 > 55 AND col0 > 93)) AND (col3 <= 70 AND col1 > 77.57) AND col3 < 29 OR (col0 IN (SELECT col3 FROM tab0 WHERE col4 IN (61.2,5.96,98.40,9.93,14.31,3…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 > 25 AND col0 IN (SELECT col3 FROM tab0 WHERE (((col1 BETWEEN 41.82 AND 38.63 AND col4 > 59.54) OR ((col3 > 70 AND (col4 >= 29.84))) AND col0 < 30 OR (col1 >= 78.32) AND (((col3 >= 34) OR (col0 < 71)) OR col0 > 41 OR col0 < 72 AND col4 < 65.61 OR col3 < 72 OR (col4 >=…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,032 tests as _sqlite_

* 40 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 32/622 [`./test/index/commute/10/slt_good_14.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_14.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col3 >= 47 OR (col1 > 11.26 AND ((col0 > 69 AND col0 > 99 OR col1 >= 0.24 AND col3 >= 15 AND col0 >= 11 AND col4 = 32.61 AND col0 < 63 AND col0 IS NULL)) AND (((((col3 = 87)))) OR (col1 IS NULL) AND (col3 > 56 OR col3 > 18 AND col1 <= 42.22 OR (col1 < 33.32) AND (col0 > 8…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 > 97 AND col1 >= 20.2 AND (col0 < 53) AND (col4 = 16.46) AND (col3 = 46) AND col4 > 63.24 OR col3 IN (SELECT col0 FROM tab0 WHERE (((col4 = 89.68 AND col4 = 86.11) AND col4 <= 92.46 AND (col3 > 61 OR col0 IN (82,96,77,8)) AND col3 IN (28,43,25) OR ((((col3 < 4) AND co…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col4 >= 53.3 AND (((((((col3 IS NULL) OR (((col0 = 16) AND col3 > 98 OR col0 = 14 OR (((col0 = 42) AND (col3 IN (14,24,44,37) AND (col4 >= 89.81) AND col3 = 62 AND col0 < 0 AND col1 IS NULL) AND col0 > 32 OR ((((((col3 < 75 OR col3 < 87 AND (col1 IN (50.42) OR (col3 <= 3)…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col4 IN (SELECT col1 FROM tab0 WHERE ((col3 >= 17 AND col3 > 34 AND ((((col1 < 73.21))) AND (col3 >= 34) AND col0 IN (SELECT col3 FROM tab0 WHERE col1 > 9.76) OR col1 >= 9.67) OR col0 < 84 AND ((col4 > 67.64)) OR ((col3 IS NULL AND col1 < 8.67)) AND (col3 = 91 AND col0 > 7…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,032 tests as _sqlite_

* 50 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 33/622 [`./test/index/commute/10/slt_good_15.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_15.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE ((((col3 >= 18 AND (((col0 > 1) OR col0 <= 28 AND (col3 < 86)) AND col0 > 81 OR (col0 > 1 AND (col3 < 46)))))) OR ((col1 IN (SELECT col4 FROM tab0 WHERE col0 > 38 OR (col0 = 33) OR (col3 >= 28) AND col4 <= 66.49 OR ((col0 >= 40) OR col3 < 3 OR col3 IS NULL) AND (col0 <= 92…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 > 15 OR (col3 IN (SELECT col0 FROM tab0 WHERE col0 > 84 AND (col0 = 88) AND col3 = 71 AND col3 > 13 AND col1 < 21.44 AND col0 <= 5 AND col3 IN (15,13) OR (col4 IN (SELECT col1 FROM tab0 WHERE col0 <= 59) AND (((((col0 >= 13))) AND col4 >= 25.56 AND ((col4 <= 29.73 AND…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,030 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 34/622 [`./test/index/commute/10/slt_good_16.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_16.test)

_Mimic sqlite_

#### ★ Assuming all 10,032 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 35/622 [`./test/index/commute/10/slt_good_17.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_17.test)

_Mimic sqlite_

#### ★ Assuming all 10,031 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 36/622 [`./test/index/commute/10/slt_good_18.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_18.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE ((col0 > 70 OR col0 IN (SELECT col3 FROM tab0 WHERE (col3 < 11 AND (col0 < 90 OR col1 IS NULL AND (col1 > 24.98 OR col0 IN (SELECT col3 FROM tab0 WHERE (col0 >= 54 OR col3 <= 10 OR col3 IS NULL AND (col1 >= 78.2 AND ((col4 >= 59.24)) AND col4 < 33.83)))) AND col0 = 81 AND …

Cannot read property '0' of undefined
```

#### ☓ Ran 10,034 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 37/622 [`./test/index/commute/10/slt_good_19.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_19.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col4 <= 62.66 AND (((col1 > 64.76)))) AND col1 IN (SELECT col4 FROM tab0 WHERE ((col1 IN (SELECT col4 FROM tab0 WHERE col3 < 54)) OR col3 IS NULL AND (col0 < 83) AND (col0 < 45 OR col0 > 52 OR (col0 < 50) AND col1 > 35.55) AND col0 < 97))

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col3 >= 66 OR col3 < 28 AND (((col3 <= 52 OR col0 < 52 OR (col0 >= 91)) AND (col1 IN (SELECT col4 FROM tab0 WHERE col4 = 52.71 AND (col1 <= 10.86 OR (((col0 < 81 OR ((((col3 > 81)))) AND (col0 > 95) OR ((col3 > 6 AND col0 >= 52))) AND (col0 = 74) OR col0 >= 58 AND ((col0 >…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,031 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 38/622 [`./test/index/commute/10/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_2.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col3 BETWEEN 34 AND 30 OR col0 >= 51 OR (((col0 >= 5)) OR (col0 > 89 AND col3 IN (SELECT col0 FROM tab0 WHERE ((((col3 IN (SELECT col0 FROM tab0 WHERE col0 < 16))) AND ((((col0 > 44)) AND ((col3 IN (61,11,73,92,40,71) OR col1 > 56.22 AND (((col1 > 37.94))) AND col1 < 36.46…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((((((col4 > 6.36) OR col1 <= 85.95 AND col4 <= 0.14 AND col3 <= 6 OR (col3 IN (72))) OR col0 IS NULL AND col0 >= 11))) AND ((col1 > 35.58 OR (((col0 > 73)) AND col0 IS NULL) AND (col0 < 98 OR (((col3 < 6))) OR (((col0 < 7)))) OR col1 >= 80.42 OR col0 <= 73 OR ((col0 > 94)…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,037 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 39/622 [`./test/index/commute/10/slt_good_20.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_20.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE ((col0 >= 54)) AND (col3 IS NULL) AND (col4 IN (SELECT col1 FROM tab0 WHERE (col0 <= 60 AND (col3 >= 28) OR ((col3 < 46 AND col3 > 89 OR (col4 < 45.11) AND col0 > 31 OR col3 >= 62 AND col1 = 7.35)) AND col3 >= 62 AND ((col0 <= 64 AND col3 > 48) AND ((col3 >= 95)) OR (((col…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col0 < 35 OR (col3 BETWEEN 87 AND 15) AND ((((col4 < 25.17)) OR (col3 < 28) AND col1 < 9.34 AND col0 < 87 AND col1 <= 28.70 AND col3 = 84 AND col3 = 6 OR col4 < 68.84)) AND col1 <= 63.2 OR ((col3 < 87 AND col0 > 67)) OR (col0 < 95) AND (((col3 <= 73))) AND col4 IN (SELECT…

Cannot read property '1' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col3 >= 67 OR col0 > 24) AND (col3 < 88) AND (((col3 < 50) AND ((col4 <= 4.53) OR (col3 >= 2) OR (col1 < 83.58) AND col0 IS NULL AND col3 IN (89,64,18,54) AND col1 = 42.53) AND col3 IN (SELECT col0 FROM tab0 WHERE (((col1 > 52.65 AND ((((col4 = 44.78) OR col4 < 36.91) AND…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col3 IN (SELECT col0 FROM tab0 WHERE col3 IN (SELECT col0 FROM tab0 WHERE col4 <= 98.22) OR col4 < 79.66 OR col4 <= 22.62) AND (col3 >= 32)

Cannot read property '0' of undefined
```

#### ☓ Ran 10,032 tests as _sqlite_

* 40 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 40/622 [`./test/index/commute/10/slt_good_21.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_21.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE ((col0 IN (SELECT col3 FROM tab0 WHERE col1 < 95.31 OR col4 < 84.50 AND (((col0 = 5) OR col0 = 89 OR (col0 IN (60,29) AND ((((col1 <= 28.1) AND ((col3 = 79))))) OR col3 > 9) AND ((col0 = 36) AND (col3 > 41 AND (((col3 IS NULL)) OR (col3 IN (SELECT col0 FROM tab0 WHERE col0…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,030 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 41/622 [`./test/index/commute/10/slt_good_22.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_22.test)

_Mimic sqlite_

#### ★ Assuming all 10,033 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 42/622 [`./test/index/commute/10/slt_good_23.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_23.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col3 < 37 OR col4 > 98.50 OR (col0 < 17 OR col1 IN (78.25,48.30,92.36,21.40,87.86,5.59) OR ((col0 <= 23) OR col4 > 21.67 AND ((col0 < 83 AND (((col0 < 31) OR col0 IN (SELECT col3 FROM tab0 WHERE col0 < 65) OR col0 <= 51 AND col3 < 56 AND (col0 > 95 AND col1 > 42.82) AND c…

Cannot read property '1' of undefined
```

#### ☓ Ran 10,033 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 43/622 [`./test/index/commute/10/slt_good_24.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_24.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col3 > 9 OR (((col0 IN (68,77,77)) OR (col3 IN (SELECT col0 FROM tab0 WHERE col3 > 9 AND (col4 < 38.45) AND (col3 = 60) AND col1 >= 18.12 AND (((col1 IN (1.2,52.61)) AND col0 > 28)) AND (((col3 > 19) AND col0 IN (SELECT col3 FROM tab0 WHERE col0 < 27 OR (((col3 < 99))) AND…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col1 IN (SELECT col4 FROM tab0 WHERE col0 IS NULL OR col3 IN (SELECT col0 FROM tab0 WHERE col3 > 99 AND (col3 > 89 AND col0 > 36)))

Cannot read property '0' of undefined
```

#### ☓ Ran 10,033 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 44/622 [`./test/index/commute/10/slt_good_25.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_25.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col1 < 80.86 OR (col3 >= 77 OR col3 >= 37 OR col0 < 54 AND col1 >= 76.16 AND (col1 <= 6.1 AND col3 >= 36)) OR col0 IN (SELECT col3 FROM tab0 WHERE (((col3 < 88 AND (((col3 < 80 AND col4 > 90.2) OR (col3 > 14 OR col0 <= 41 AND col3 = 88) AND col3 >= 58 AND (((col3 < 39))) A…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((((col0 >= 66)) OR (((col4 > 49.65 OR ((((col0 IS NULL)))) AND (col4 > 99.43) OR (col3 >= 66 OR (((col3 = 98 AND (col1 IN (SELECT col4 FROM tab0 WHERE col1 <= 49.51 OR ((col0 >= 84 OR col3 > 40)) OR ((((col0 IN (SELECT col3 FROM tab0 WHERE col3 < 37 OR ((col3 > 29) OR (co…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (((((col4 < 4.17))) AND (col0 IN (47,25,98,18,99)) OR (col3 IS NULL) AND col4 >= 62.49 OR col0 < 35 AND col0 = 91)) OR (col1 BETWEEN 94.29 AND 78.70) AND (((((col0 > 24) AND col0 IN (59,41,46,2,88,12) OR col1 < 26.34 AND (col3 <= 82))) OR (col3 BETWEEN 24 AND 70 AND col1 >…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col3 >= 29 OR ((col3 < 29) AND col3 <= 49) AND (col3 <= 90) OR (col3 = 43) OR ((col3 < 90) OR (col3 IN (43,74,98,54)) AND (col0 = 24)) OR col3 = 16 AND ((col3 >= 76) AND (col3 IS NULL) AND (col1 > 65.38) OR col0 >= 43 OR col3 > 26) AND ((col1 <= 92.0 AND col4 IS NULL AND c…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,030 tests as _sqlite_

* 40 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 45/622 [`./test/index/commute/10/slt_good_26.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_26.test)

_Mimic sqlite_

#### ★ Assuming all 10,031 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 46/622 [`./test/index/commute/10/slt_good_27.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_27.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE ((col0 > 54 AND col3 > 85 AND col0 >= 20) OR col3 = 19 AND col0 > 99) AND col3 < 27 AND col4 BETWEEN 70.7 AND 62.42 AND col3 IN (SELECT col0 FROM tab0 WHERE (((col1 < 34.56 OR (col3 <= 16))) AND col3 > 56 AND col0 >= 86 AND (col0 >= 64)) AND ((col1 < 64.41 OR ((col3 >= 25 …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((col3 = 66) AND (((col4 IN (69.49,58.95,77.36,96.45) AND ((col3 IS NULL)) AND col0 = 71 OR col3 IN (SELECT col0 FROM tab0 WHERE col1 IS NULL AND (col3 < 72 AND ((((col0 IS NULL)) AND col1 IS NULL OR col3 > 20 AND ((col0 IS NULL)) OR (col0 > 27) AND col4 IS NULL OR col0 < …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col3 < 70) AND col3 > 64 AND (col1 IN (SELECT col4 FROM tab0 WHERE ((col0 < 10 AND (col0 < 91) AND col4 IN (SELECT col1 FROM tab0 WHERE ((col0 >= 62))) AND ((col3 >= 33)) OR ((((col3 <= 26 OR ((col3 = 11)))))))))) AND ((col3 > 69 OR ((col3 > 5)) OR (col1 < 43.36) AND col4…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,033 tests as _sqlite_

* 30 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 47/622 [`./test/index/commute/10/slt_good_28.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_28.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col0 IN (57,80,56,59) OR ((col3 = 70) AND (col0 >= 11)) OR col0 < 84 AND ((col3 IS NULL OR (col3 <= 52))) OR col0 IN (25) AND col4 >= 86.32 OR (col1 < 27.27) OR (col0 < 48) OR col3 IN (SELECT col0 FROM tab0 WHERE (((col0 < 63) OR col0 <= 65 AND (col4 >= 16.87 OR col1 >= 59…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,033 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 48/622 [`./test/index/commute/10/slt_good_29.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_29.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE ((col3 < 0)) OR col3 < 68 AND (col3 = 11) OR col4 IN (SELECT col1 FROM tab0 WHERE col1 IN (SELECT col4 FROM tab0 WHERE (col1 = 28.45))) AND col0 > 89 OR col4 > 99.5 AND col0 < 4 AND col3 <= 46

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col3 > 1) OR col0 >= 77 OR col1 >= 19.28 AND col1 >= 73.79 AND (col3 <= 70) OR col3 >= 37 AND col3 IN (56) AND col0 > 51 AND col4 < 51.77 AND (((((col1 IN (SELECT col4 FROM tab0 WHERE ((((col3 >= 93 OR ((col3 IS NULL AND (col3 < 65 OR ((col3 > 78)) AND (col3 < 7) AND ((co…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col1 IN (SELECT col4 FROM tab0 WHERE ((col0 > 59 AND (col1 < 85.23) AND (col0 > 92 OR col4 <= 69.12 OR ((col3 = 19) OR col3 > 82) AND col3 > 69 OR (col3 > 15) AND (col1 < 4.13) OR col0 < 79))) OR (col3 IS NULL) OR (((col1 < 61.76 AND col0 IS NULL AND col3 >= 93) AND col4 >…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,032 tests as _sqlite_

* 30 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 49/622 [`./test/index/commute/10/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_3.test)

_Mimic sqlite_

#### ★ Assuming all 10,032 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 50/622 [`./test/index/commute/10/slt_good_30.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_30.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col0 < 76 AND col4 IN (SELECT col1 FROM tab0 WHERE (((((col1 = 19.47 AND (col1 >= 22.43 AND col3 IS NULL AND ((col4 < 98.2 OR col4 >= 77.53 AND ((col3 <= 53 OR (col1 = 78.66 AND ((col3 >= 75 AND col3 < 40 OR col3 < 80 OR col3 >= 77))) AND col0 = 53 OR col1 >= 3.44 AND col…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col3 IN (SELECT col0 FROM tab0 WHERE col0 = 27 OR (col4 <= 97.74 OR col3 <= 1 AND col0 > 6 OR col0 IN (40,62,6,92,71) OR col1 >= 60.26) AND col3 IN (SELECT col0 FROM tab0 WHERE col1 > 79.94 AND (col3 IS NULL)) OR (((col0 > 29 OR ((col0 > 17)) AND col0 >= 66))) OR col0 > 10…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col4 >= 79.35) OR col4 > 55.94 AND (col4 <= 51.86) AND col0 > 48 OR (col4 IN (SELECT col1 FROM tab0 WHERE col3 = 73 AND col1 IS NULL AND (col1 <= 80.19 AND (col3 IN (SELECT col0 FROM tab0 WHERE col0 >= 2) AND (col3 < 31) OR (col3 > 86) AND col1 > 7.38 AND (col4 >= 90.23) …

Cannot read property '0' of undefined
```

#### ☓ Ran 10,032 tests as _sqlite_

* 30 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 51/622 [`./test/index/commute/10/slt_good_31.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_31.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE ((((col1 IN (SELECT col4 FROM tab0 WHERE (col0 IN (76,3,95,48,9) OR (((((col3 <= 71) AND (col4 IN (SELECT col1 FROM tab0 WHERE col0 IN (65,6,76,75,55,35)) OR ((col1 >= 48.43) AND ((((col1 > 72.29)))))) OR col0 > 55 AND col3 IS NULL OR (col4 < 75.76))) OR col1 > 5.3))) OR c…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 IN (SELECT col3 FROM tab0 WHERE col1 > 82.42 OR (col0 < 46) OR col1 < 44.84 OR ((col0 IN (SELECT col3 FROM tab0 WHERE col0 IS NULL)) OR col3 IN (35) AND ((col3 >= 81) AND col4 < 80.95 AND (((col1 IN (66.28,60.85,41.35,43.9,63.93,28.95)) AND col4 IN (SELECT col1 FROM t…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (((col4 < 67.11 AND ((((col3 IN (SELECT col0 FROM tab0 WHERE col4 >= 60.35 AND col0 < 58 AND col1 > 69.60 AND col1 > 18.88 OR (col1 IS NULL) OR col1 < 11.68 OR col0 IN (SELECT col3 FROM tab0 WHERE col3 <= 97))) AND col3 IS NULL) AND (col1 >= 58.45)))))) AND (col0 = 4) AND …

Cannot read property '0' of undefined
```

#### ☓ Ran 10,033 tests as _sqlite_

* 30 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 52/622 [`./test/index/commute/10/slt_good_32.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_32.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col0 >= 58 OR col0 IN (30,36,25,55,51) OR (col0 < 82 AND col1 < 14.96 AND col3 >= 6 OR col4 > 1.17 AND col0 >= 45 OR col3 > 1 AND (col4 = 92.34 AND col0 < 80 OR col3 <= 43 OR col3 IS NULL OR col0 >= 4 AND col3 > 54 OR col3 IN (21)) OR col3 > 22 OR ((col3 IS NULL) AND (col0…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,032 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 53/622 [`./test/index/commute/10/slt_good_33.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_33.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (((((col3 BETWEEN 73 AND 64 AND col3 > 44 AND col1 IN (89.76,81.49,63.2,32.63,62.88) AND ((col3 <= 46 OR col4 >= 11.19) AND (col3 > 30) OR col3 < 47 OR col1 = 41.77 AND ((col4 <= 16.36 OR ((col3 >= 80) OR col3 <= 87) OR col4 > 67.73) AND (col3 > 0 OR (((col4 > 1.60)) OR (c…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (((col1 < 92.66 AND ((col4 >= 42.15) AND col1 = 7.96) OR col3 >= 34 AND (((((col3 >= 37 AND col0 IN (89,4,95,76)) AND (((((col1 <= 70.57 OR col4 > 46.98 AND col3 IN (32,68,19,56))))) AND col3 > 1 AND (col1 > 24.15) OR col3 < 6 AND col1 IS NULL OR ((col1 < 36.31)) OR (col0 …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((col0 < 69) AND (((((col0 IN (SELECT col3 FROM tab0 WHERE col3 < 92 AND (col3 < 29 OR col3 > 60) OR col4 BETWEEN 19.38 AND 60.87 OR (((col1 >= 57.72 AND (((col0 = 88 OR col1 > 32.34 OR (((col3 > 21 AND col3 >= 60 AND col3 <= 28 AND ((col4 IN (SELECT col1 FROM tab0 WHERE (…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col3 < 95 AND ((col1 < 25.58) OR (col0 <= 32 OR (((col3 <= 16 AND col3 >= 39)) AND col0 > 21) OR col1 IS NULL OR col0 > 97) OR (((col0 IS NULL))) OR col3 > 99 AND col1 IN (SELECT col4 FROM tab0 WHERE col1 >= 31.35 AND col0 = 84 AND (((((((col3 > 48 OR (col0 > 34) OR col4 <…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,034 tests as _sqlite_

* 40 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 54/622 [`./test/index/commute/10/slt_good_34.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_34.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col0 <= 30 OR col0 IN (SELECT col3 FROM tab0 WHERE (col3 < 6) AND col4 IN (SELECT col1 FROM tab0 WHERE (col0 BETWEEN 97 AND 13)))

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 = 51 OR col3 >= 40 OR col0 BETWEEN 69 AND 30 OR (col0 <= 42) OR col4 IS NULL OR (col3 < 70) OR (((col0 = 47 OR col1 < 91.30 OR col4 IN (SELECT col1 FROM tab0 WHERE ((((col3 IN (SELECT col0 FROM tab0 WHERE (col4 > 47.5 AND col0 IS NULL AND col4 < 55.52) OR col0 > 82)))…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col0 >= 82 AND ((col0 >= 43 OR col0 <= 81))) AND col0 > 71 OR col0 = 72 AND ((((col0 > 34 AND ((col1 < 13.57)) OR (col0 >= 34) OR col4 > 62.52)))) AND col3 > 36 AND col1 IN (SELECT col4 FROM tab0 WHERE (col3 = 7 OR col3 >= 23 AND (((((((col3 > 18 AND col4 IN (SELECT col1 …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col3 IN (SELECT col0 FROM tab0 WHERE (((col1 <= 95.62 AND ((((col0 > 16)) OR ((col0 >= 38 OR col0 > 70 AND col3 < 75 AND (col0 > 78) AND col1 > 77.59 AND col0 > 46 AND ((col3 > 36 AND col0 BETWEEN 44 AND 74 OR (col3 > 12 AND col3 >= 2) AND ((((col0 IS NULL) AND col3 >= 56…

Cannot read property '1' of undefined
```

#### ☓ Ran 10,032 tests as _sqlite_

* 50 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 55/622 [`./test/index/commute/10/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_4.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col1 IN (SELECT col4 FROM tab0 WHERE col0 >= 20 OR col4 IN (89.83,54.21,56.63,3.25,43.0) AND col3 < 0 AND col4 <= 75.34 AND ((col3 < 34)) OR col0 BETWEEN 99 AND 9 OR col0 > 55 AND (col4 IN (SELECT col1 FROM tab0 WHERE ((col3 <= 38 AND col0 > 55) AND col4 > 93.36 AND col4 …

Cannot read property '0' of undefined
```

#### ☓ Ran 10,030 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 56/622 [`./test/index/commute/10/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_5.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col3 <= 88 OR col0 IN (SELECT col3 FROM tab0 WHERE col3 IS NULL AND col3 >= 88 AND col0 = 0 AND (col0 IS NULL) AND col3 <= 25 AND (col4 > 37.85) OR (col1 IN (SELECT col4 FROM tab0 WHERE (col4 IN (92.81,73.37,41.28,48.15,77.90)) OR (col0 > 11) AND col3 >= 77 AND col1 IN (89…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 IN (SELECT col3 FROM tab0 WHERE col4 >= 17.80) AND col3 > 65 AND (col4 >= 9.94) AND col0 > 19 AND (((col0 < 69 OR (col3 > 47) OR col3 >= 62 OR (col1 >= 69.96 AND col4 > 39.77 AND col3 >= 98) OR (col3 IN (SELECT col0 FROM tab0 WHERE (((((col3 IN (SELECT col0 FROM tab0 …

Cannot read property '1' of undefined
```

#### ☓ Ran 10,032 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 57/622 [`./test/index/commute/10/slt_good_6.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_6.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col3 >= 22 AND col3 IS NULL OR (col0 <= 92 AND (col3 IN (82,73,69,28,90,98) OR ((col0 > 53))) AND col3 > 41) AND col1 < 7.43 AND ((col0 > 45)) AND col1 >= 86.98 OR col4 IN (98.61) AND col0 < 82 OR col3 IN (SELECT col0 FROM tab0 WHERE ((((col3 <= 2) OR col4 > 64.95 OR (col3…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col3 >= 59 AND col1 <= 71.60 OR (((((((((col1 <= 48.17) OR (col1 = 98.21 AND (col3 < 63 OR (col0 < 72))) OR col4 < 1.60 AND col0 > 76 AND col1 > 54.0 AND ((((col0 <= 77) AND col0 <= 26 AND col1 >= 94.86))) OR ((col0 IN (22,87,94,62))) OR col4 = 96.97 OR (((col0 > 85 AND (c…

Cannot read property '1' of undefined
```

#### ☓ Ran 10,036 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 58/622 [`./test/index/commute/10/slt_good_7.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_7.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col1 > 33.14 OR (((col3 > 73 OR (col3 IN (63,42)))) AND ((((col0 IN (SELECT col3 FROM tab0 WHERE (col3 < 37) AND col0 > 24 OR (col1 IN (SELECT col4 FROM tab0 WHERE col1 > 49.28) OR col3 > 9))) OR col3 > 51 OR (col1 > 52.62)))) OR col0 IS NULL) OR ((((col4 = 81.75) OR (col0…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,034 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 59/622 [`./test/index/commute/10/slt_good_8.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_8.test)

_Mimic sqlite_

#### ★ Assuming all 10,032 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 60/622 [`./test/index/commute/10/slt_good_9.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/10/slt_good_9.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col4 IN (SELECT col1 FROM tab0 WHERE ((col0 IN (SELECT col3 FROM tab0 WHERE col3 >= 39) AND col0 <= 84)))) AND col4 <= 14.38

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col3 <= 87) OR col3 >= 80 AND (((col4 BETWEEN 98.96 AND 57.12))) AND (col0 > 63) OR col3 < 31 OR (((col3 <= 88 AND col0 >= 22) AND ((col3 = 94 AND (((col0 >= 70) AND (col3 > 3))) OR ((col0 < 15 AND col1 = 9.76 OR col0 = 31 AND (((((col3 <= 79))) OR col1 > 26.19)) AND (col…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (((col0 < 3 AND col0 = 62 OR col0 > 27) AND (col3 IS NULL AND col0 > 33 AND col0 BETWEEN 21 AND 41 AND col4 > 88.59 OR ((((col3 > 94 OR col4 = 73.88)))) OR col1 >= 91.82 AND ((((col0 > 16 AND col0 = 7 AND (col1 = 1.37 OR col3 > 28) OR col3 <= 98 AND col3 < 36 AND col3 > 79…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,034 tests as _sqlite_

* 30 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 61/622 [`./test/index/commute/100/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/100/slt_good_0.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col4 < 749.14 AND (col3 >= 449 AND ((col3 = 703)) AND col0 > 373) AND (col3 < 160) AND col0 > 859 AND col1 BETWEEN 47.53 AND 235.98 AND col0 < 447 OR col3 <= 639 OR col1 IN (SELECT col4 FROM tab0 WHERE col4 > 401.5 AND ((col4 < 922.12 AND ((col0 > 154) AND (col1 IN (SELECT…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col4 IN (SELECT col1 FROM tab0 WHERE col1 < 267.50 AND col4 = 165.21 OR (((col0 > 720)) AND col0 < 733 AND col3 < 698 AND ((col4 > 65.64)) AND (col3 > 272) AND ((col3 >= 290 AND col3 IN (SELECT col0 FROM tab0 WHERE ((col4 >= 972.30)))) AND (col3 >= 282 AND (col1 >= 765.5)…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,122 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 62/622 [`./test/index/commute/100/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/100/slt_good_1.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col0 IN (SELECT col3 FROM tab0 WHERE col3 > 969 AND col4 <= 479.12 AND col4 > 588.75 OR (col1 < 756.83) OR col3 > 205 AND col4 > 12.36 OR col3 > 41 AND (col0 > 252 OR (((col4 > 237.26 AND (col0 < 576) AND ((((col4 = 793.82) OR ((col3 < 213 OR col0 < 256)) AND (col0 < 923 A…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,120 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 63/622 [`./test/index/commute/100/slt_good_10.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/100/slt_good_10.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col3 > 947) OR col3 > 4 AND col3 > 701 OR col3 < 582 AND col0 = 425 AND col3 IN (SELECT col0 FROM tab0 WHERE (col0 > 828) AND (col3 < 354) OR col3 > 915 AND col3 > 35 OR col3 = 309 AND (col3 > 9) OR col0 IN (SELECT col3 FROM tab0 WHERE (col3 > 541)) OR (col4 < 108.47 OR c…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,124 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 64/622 [`./test/index/commute/100/slt_good_11.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/100/slt_good_11.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col1 > 934.79 OR (col0 <= 122) AND col3 IN (572,775,935,506) OR (col1 <= 126.68) OR col3 IN (SELECT col0 FROM tab0 WHERE ((col3 IN (SELECT col0 FROM tab0 WHERE (col0 <= 963) AND col4 < 611.64 AND ((col4 > 507.11))) OR ((col1 > 59.38 AND (col4 >= 918.90)))))) AND col3 <= 93

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col3 IS NULL AND (col1 = 535.56 AND col4 > 195.17 OR ((col3 IS NULL AND col3 > 467 OR col4 < 66.40 OR col3 > 591 AND col4 > 303.1 OR col0 > 462 OR col0 >= 967 AND col4 < 38.37 OR col0 BETWEEN 140 AND 833 OR col4 <= 81.60 OR (((((((col0 >= 20)) OR (col0 = 743 OR col4 >= 133…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,123 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 65/622 [`./test/index/commute/100/slt_good_12.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/100/slt_good_12.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col0 BETWEEN 408 AND 366 OR (col3 IN (SELECT col0 FROM tab0 WHERE col3 IN (SELECT col0 FROM tab0 WHERE col0 <= 560)) OR col3 > 127)

Cannot read property '0' of undefined
```

#### ☓ Ran 10,123 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 66/622 [`./test/index/commute/100/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/100/slt_good_2.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE ((col0 < 105 AND col0 >= 485 AND col1 > 757.73 OR col1 IN (SELECT col4 FROM tab0 WHERE (((col0 < 672 OR col0 >= 526 AND (col3 BETWEEN 22 AND 304) AND col1 > 954.83 AND (col3 <= 866 AND col0 = 165 OR (((((col0 <= 156)))))) AND col4 < 865.95) AND col0 BETWEEN 71 AND 54) AND …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col0 = 981 OR (col3 < 354) OR col0 < 285 OR (((((col3 >= 657)) OR col4 IS NULL) AND col0 = 873 AND col0 IN (SELECT col3 FROM tab0 WHERE col1 >= 978.7 OR col4 IS NULL AND col0 > 278 AND col0 < 107 OR (((col3 <= 464 OR (col0 <= 657) OR col3 > 579)) AND col3 > 419 AND (((col…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab3 WHERE (col0 = 981 OR (col3 < 354) OR col0 < 285 OR (((((col3 >= 657)) OR col4 IS NULL) AND col0 = 873 AND col0 IN (SELECT col3 FROM tab3 WHERE col1 >= 978.7 OR col4 IS NULL AND col0 > 278 AND col0 < 107 OR (((col3 <= 464 OR (col0 <= 657) OR col3 > 579)) AND col3 > 419 AND (((col…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,123 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 67/622 [`./test/index/commute/100/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/100/slt_good_3.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col0 IN (SELECT col3 FROM tab0 WHERE ((((((((col3 < 927) OR col0 BETWEEN 727 AND 937 OR col0 = 89))))) AND col0 BETWEEN 817 AND 967) OR col3 IN (SELECT col0 FROM tab0 WHERE col0 < 797)))

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col4 >= 166.54 AND col3 = 307) AND col0 >= 87 OR (col0 IS NULL) AND col0 <= 769 AND (col0 > 721 AND col3 > 60 AND col0 IN (SELECT col3 FROM tab0 WHERE (col0 < 265 AND ((col1 < 162.61) AND col0 <= 8 AND col3 < 114 OR (col1 > 413.19))) OR (col0 >= 572 AND (col4 >= 936.63 OR…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,121 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 68/622 [`./test/index/commute/100/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/100/slt_good_4.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col0 >= 640 OR ((col3 IN (SELECT col0 FROM tab0 WHERE (col3 IN (SELECT col0 FROM tab0 WHERE (col1 < 98.26)) OR (col3 < 181) AND col4 < 574.65) OR (col1 <= 733.28)) AND col0 > 357) AND (((col0 >= 686))) AND col3 = 476 AND col3 > 153 AND ((col0 < 909)) AND ((col0 > 631 AND (…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col3 < 924 AND col3 IN (SELECT col0 FROM tab0 WHERE (col3 IN (SELECT col0 FROM tab0 WHERE col4 >= 818.6 OR (col3 = 390 OR col3 = 844 AND col0 = 855)))) AND col0 = 166 AND col3 <= 702 AND col0 < 372 AND col0 <= 877

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col4 <= 301.95 AND (col0 < 621 OR col3 >= 283 AND (col0 > 557 AND col0 IN (432,835,595,209,775,73) AND (col0 >= 553 OR col0 IS NULL AND (col0 > 136 OR col0 >= 30 AND col0 <= 559 AND col3 IN (372) AND col4 > 78.10) AND (col0 < 542) AND col0 > 549)) OR col0 <= 350 OR col0 >…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,124 tests as _sqlite_

* 30 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 69/622 [`./test/index/commute/100/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/100/slt_good_5.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col3 > 631 AND col0 <= 75 AND (col0 > 474 AND col3 IS NULL AND (col1 IN (339.25,625.38,745.73,21.91,895.79) OR (col3 >= 174 OR (col3 > 880) OR (((col0 >= 555)) AND ((((col4 < 408.63 AND col4 >= 560.51 AND col0 > 164 AND ((col0 <= 25 AND col0 > 365)) AND ((col0 > 298 AND (…

Cannot read property '1' of undefined
```

#### ☓ Ran 10,121 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 70/622 [`./test/index/commute/100/slt_good_6.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/100/slt_good_6.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (((col4 > 25.14) AND col0 >= 363 OR (((col3 < 635 OR col0 > 836)) OR (col3 IN (SELECT col0 FROM tab0 WHERE ((col0 > 656 AND ((col1 < 1.74 AND col0 < 513 AND (col0 >= 513) AND col3 > 699 AND col4 <= 727.95 OR (col3 = 493) OR ((col3 > 761 AND col4 < 746.24 AND (((col3 < 305)…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col1 >= 775.92 OR (col3 < 898 AND (col4 IN (SELECT col1 FROM tab0 WHERE col3 IN (SELECT col0 FROM tab0 WHERE col4 < 552.87)) AND ((col0 <= 166)) AND col3 IS NULL AND col3 <= 883 OR col4 >= 1.64 AND (((col0 <= 832) OR (col3 <= 130))))) OR col1 > 641.85 AND (((col4 < 803.30)…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col3 >= 832 OR ((((col3 > 431 AND col1 < 469.47 OR col4 < 302.72 AND (col0 > 662) AND col1 > 878.49 AND (((col1 = 665.3 OR col4 < 312.68 AND (col0 >= 764) OR ((col0 <= 605)) OR col4 IN (SELECT col1 FROM tab0 WHERE (((col0 IN (SELECT col3 FROM tab0 WHERE col0 BETWEEN 780 AN…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,122 tests as _sqlite_

* 30 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 71/622 [`./test/index/commute/100/slt_good_7.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/100/slt_good_7.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (((col4 < 939.13)) AND col3 <= 880 OR ((col0 < 477 AND col0 >= 956) AND (((col3 > 871)) OR ((col3 <= 61)) AND col4 IS NULL AND col0 < 73 AND col0 IS NULL AND (col4 <= 562.80) OR col0 IN (SELECT col3 FROM tab0 WHERE col3 > 893 AND ((col1 <= 114.46 AND (((col3 >= 167)))) AND…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((col0 IN (478,602,74,922,704) AND col0 > 729)) AND col0 IS NULL AND (col3 >= 314 AND ((col1 >= 945.67)) OR (col0 >= 831) OR col3 < 977 OR ((col3 IN (SELECT col0 FROM tab0 WHERE ((col3 <= 804) OR col4 = 596.79 AND col1 >= 544.2 OR (col0 > 22 OR col4 <= 154.0) OR col3 <= 35…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,123 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 72/622 [`./test/index/commute/100/slt_good_8.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/100/slt_good_8.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col0 = 783) AND col0 >= 334 OR ((col0 > 336 OR col1 < 601.60 AND ((((((col4 > 896.38)) AND col3 > 417)) OR (col4 > 98.79 AND (((col0 >= 184) AND (col4 > 480.55 OR col0 > 561 AND col0 >= 133 AND (col0 < 937))) OR col3 > 684 OR col3 > 499 AND col0 < 895)) AND ((col0 < 706))…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,122 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 73/622 [`./test/index/commute/100/slt_good_9.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/100/slt_good_9.test)

_Mimic sqlite_

#### ★ Assuming all 10,123 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 74/622 [`./test/index/commute/1000/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/1000/slt_good_0.test)

_Mimic sqlite_

#### ★ Assuming all 4,741 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 75/622 [`./test/index/commute/1000/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/1000/slt_good_1.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE ((((col0 IN (SELECT col3 FROM tab0 WHERE col3 = 7862 OR (col0 > 7104) AND col3 IN (SELECT col0 FROM tab0 WHERE ((col4 < 3774.80))) OR col0 >= 4545 OR (col3 > 1867) AND col1 >= 3341.69 AND col1 <= 8546.42 AND col0 <= 6797 AND col0 = 9644 AND (col3 IN (8505,121,8833,5588,941…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col4 IN (SELECT col1 FROM tab0 WHERE ((((col3 <= 5590) OR (col3 IN (SELECT col0 FROM tab0 WHERE col0 > 9868)) OR col0 > 3139) AND (((col1 > 3295.20)))))))

Cannot read property '0' of undefined
```

#### ☓ Ran 10,583 tests as _sqlite_

* 20 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 76/622 [`./test/index/commute/1000/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/1000/slt_good_2.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col3 <= 6435 OR (col0 > 8171 OR ((col3 < 3525)) AND (col3 > 9333) OR col0 <= 3782 AND ((col0 < 472) AND col3 <= 7977 AND col3 >= 9646 OR col3 > 6234) OR ((col3 > 212)) OR (col1 <= 5936.96)) AND col3 >= 1779 AND col0 = 45 AND ((col4 >= 5532.54)) AND col0 <= 8199 AND (col3 B…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 IS NULL AND (((((col4 > 9479.97)) OR col0 IN (SELECT col3 FROM tab0 WHERE col3 >= 6275) AND col0 < 1688 AND col4 >= 4658.58 AND (col0 < 7331 AND (((col4 >= 8005.28 OR col1 IN (SELECT col4 FROM tab0 WHERE col0 IN (6587,3000) AND (((col0 > 1924) AND (col4 <= 4884.47) AN…

Cannot read property '1' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col3 IN (SELECT col0 FROM tab0 WHERE (col0 IN (SELECT col3 FROM tab0 WHERE col1 < 444.10)) AND col4 >= 7680.91)

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 > 2427 AND (col1 < 724.45) AND (col1 >= 1781.61) AND (col3 <= 7299) OR col1 IN (3235.93,7548.26,9420.58) OR (((col0 <= 3232 AND col3 <= 4367))) OR (col1 IN (SELECT col4 FROM tab0 WHERE col3 >= 5523 AND ((col4 < 2022.68) AND (col0 >= 7390) OR ((col3 > 2115)) AND (((col…

Cannot read property '0' of undefined
```

#### ☓ Ran 11,021 tests as _sqlite_

* 40 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 77/622 [`./test/index/commute/1000/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/commute/1000/slt_good_3.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col0 > 5758) OR col3 >= 72 OR (col0 BETWEEN 3090 AND 2143 OR ((col3 IN (SELECT col0 FROM tab0 WHERE col4 >= 4353.54 OR (col3 >= 7552) AND ((col3 <= 6550)) AND (col4 > 5877.34) AND col1 = 5667.87 OR ((col3 > 5812) AND col0 < 1085 OR (((col3 > 7040 OR col3 = 2901) AND col1 …

Cannot read property '0' of undefined
```

#### ☓ Ran 11,025 tests as _sqlite_

* 10 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 78/622 [`./test/index/delete/1/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/delete/1/slt_good_0.test)

_Mimic sqlite_

#### ★ Assuming all 10,907 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 79/622 [`./test/index/delete/10/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/delete/10/slt_good_0.test)

_Mimic sqlite_

#### ★ Assuming all 10,730 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 80/622 [`./test/index/delete/10/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/delete/10/slt_good_1.test)

_Mimic sqlite_

#### ★ Assuming all 10,774 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 81/622 [`./test/index/delete/10/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/delete/10/slt_good_2.test)

_Mimic sqlite_

#### ★ Assuming all 9,390 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 82/622 [`./test/index/delete/10/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/delete/10/slt_good_3.test)

_Mimic sqlite_

#### ★ Assuming all 10,065 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 83/622 [`./test/index/delete/10/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/delete/10/slt_good_4.test)

_Mimic sqlite_

#### ★ Assuming all 10,599 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 84/622 [`./test/index/delete/10/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/delete/10/slt_good_5.test)

_Mimic sqlite_

#### ★ Assuming all 10,353 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 85/622 [`./test/index/delete/100/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/delete/100/slt_good_0.test)

_Mimic sqlite_

#### ★ Assuming all 11,145 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 86/622 [`./test/index/delete/100/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/delete/100/slt_good_1.test)

_Mimic sqlite_

#### ★ Assuming all 10,895 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 87/622 [`./test/index/delete/100/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/delete/100/slt_good_2.test)

_Mimic sqlite_

#### ★ Assuming all 11,033 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 88/622 [`./test/index/delete/100/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/delete/100/slt_good_3.test)

_Mimic sqlite_

#### ★ Assuming all 10,942 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 89/622 [`./test/index/delete/1000/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/delete/1000/slt_good_0.test)

_Mimic sqlite_

#### ★ Assuming all 11,924 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 90/622 [`./test/index/delete/1000/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/delete/1000/slt_good_1.test)

_Mimic sqlite_

#### ★ Assuming all 11,838 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 91/622 [`./test/index/delete/10000/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/delete/10000/slt_good_0.test)

_Mimic sqlite_

#### ★ Assuming all 20,347 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 92/622 [`./test/index/in/10/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/in/10/slt_good_0.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col3 > 31 OR col3 <= 49 AND (col0 IN (SELECT col3 FROM tab0 WHERE col3 IN (74,13,49,39,67) OR col4 >= 87.31 OR col1 <= 89.41 AND col0 > 12 AND (col3 < 4 OR col0 <= 52 OR col1 > 0.4 AND col3 > 5 AND col0 = 86 OR ((((col0 = 83 OR (((col0 IN (77) OR ((col1 > 51.39)) AND col3 …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col0 IN (SELECT col3 FROM tab0 WHERE (col3 > 12) AND col3 IN (SELECT col0 FROM tab0 WHERE ((col3 < 5 OR (((((col0 < 73)))))))) AND ((col1 < 36.50 OR col4 IN (96.52,65.16,79.93,34.90,71.48,36.65)) AND col0 IN (60,22) OR ((col3 < 69)) AND col4 >= 49.16 OR (col3 > 96) OR (((…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col0 <= 94 OR col0 >= 79 AND ((((((col0 < 16 AND col4 > 80.31 AND col0 IS NULL)) OR col3 < 43 OR col0 >= 51 AND col0 < 42 OR ((col3 <= 9 AND (col3 < 72) AND (((col0 > 54)) OR col4 IS NULL AND col1 IN (47.75,54.73,0.67,0.45,9.25) OR (col3 >= 2) AND (col0 = 17 OR (col0 > 85…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,035 tests as _sqlite_

* 45 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 93/622 [`./test/index/in/10/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/in/10/slt_good_1.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col0 > 4 OR col0 < 18 AND col0 IN (SELECT col3 FROM tab0 WHERE (((((col4 > 66.88 OR col0 <= 52 OR col1 > 71.2 AND (((((col3 IS NULL OR col0 IN (1,21,75,43,77,32))) AND col4 > 30.70) AND (((col4 = 59.26))))))) OR (((col4 <= 79.30)) OR (col1 = 3.2)) OR col1 = 46.65 AND (col3…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((col0 IN (SELECT col3 FROM tab0 WHERE (col3 IN (SELECT col0 FROM tab0 WHERE col1 > 74.44))) AND ((col3 IN (73,90)) OR col4 > 54.25 OR (col0 IN (58,68,2) AND col0 = 51 OR col1 > 30.12)))) OR col3 < 34

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 > 32 OR ((((col3 = 78 AND col0 > 33)) OR ((col0 >= 49 OR col3 <= 80 AND ((((col0 > 86)))) AND col3 < 81)))) AND (col4 IS NULL AND (col3 >= 62 OR col0 < 96 AND (((col0 < 1))) OR col3 IS NULL AND col4 <= 91.73) AND (col0 = 77)) AND col4 > 0.46 AND col0 = 58 AND ((col0 >…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col4 < 20.7 OR col0 = 35 AND col4 BETWEEN 87.51 AND 9.82 AND col3 IN (SELECT col0 FROM tab0 WHERE ((col4 <= 68.84 AND ((col1 < 14.50 AND col0 = 73 AND ((col0 BETWEEN 15 AND 66 OR col1 IN (SELECT col4 FROM tab0 WHERE col3 > 77) AND col3 > 39 AND col3 <= 91 OR col3 > 55)))))…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 IN (SELECT col3 FROM tab0 WHERE (col3 = 87 OR col0 > 47 AND (col0 BETWEEN 8 AND 79) OR col3 <= 28 AND (((col3 > 74 AND col1 IN (48.31,29.5,55.50,10.95,94.4,37.35) OR col0 IN (4,46,13) OR col1 > 46.32 AND (((col1 = 31.94)) OR col3 IS NULL) AND ((col0 IN (52,21,61,45) O…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (((col0 >= 85 AND (col3 > 83) AND col3 IS NULL AND (((col4 > 88.99) AND col3 >= 1 OR (((col3 < 99) AND (col4 > 35.49 OR (col3 >= 3) AND col0 <= 77 AND (col0 <= 96 OR col3 < 12 AND (col0 >= 60))))) OR (col3 < 83) AND ((col3 > 70) OR col0 BETWEEN 2 AND 87) AND col3 > 26 AND …

Cannot read property '0' of undefined
```

#### ☓ Ran 10,036 tests as _sqlite_

* 120 failed
* 98% was OK


---- ---- ---- ---- ---- ---- ----
### 94/622 [`./test/index/in/10/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/in/10/slt_good_2.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE ((col3 = 95) OR ((col0 >= 22)) OR (col3 < 58 AND col3 >= 24) OR (col0 >= 35 AND ((col0 IN (SELECT col3 FROM tab0 WHERE col1 >= 64.47)))) AND col3 > 57 AND (col0 IS NULL AND col4 <= 9.75) AND col0 >= 31 OR (col3 > 29) AND col0 IN (SELECT col3 FROM tab0 WHERE (col3 = 70 AND …

Cannot read property '1' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((col3 IS NULL AND ((col3 >= 55 OR col0 > 3 AND (col0 < 14) AND col4 > 21.7 AND col0 < 41 OR (col3 < 19 AND (((col4 IN (SELECT col1 FROM tab0 WHERE ((((((((col1 < 16.45))))))) AND col3 < 2 AND col3 < 68 AND col3 > 70) AND col4 < 99.48 OR col3 = 66 AND ((((col3 >= 47))) OR …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((((col1 IN (28.30) OR col3 >= 29 OR (col0 < 97) OR col1 <= 50.3 AND (col0 IN (SELECT col3 FROM tab0 WHERE col3 IN (32,84,32,54,7,1) AND col1 < 95.94 AND col0 >= 56 OR (col3 BETWEEN 45 AND 9 OR col4 > 20.58) AND col3 <= 70 AND (col4 <= 9.31) AND col0 > 93 AND col0 BETWEEN …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 >= 94 OR ((col3 < 39 OR (col0 >= 23 OR col1 >= 32.77) OR ((((((col4 = 76.93 OR ((col3 <= 70)) OR col3 IN (SELECT col0 FROM tab0 WHERE (col3 > 88) AND (col0 > 77) AND col3 > 16 AND ((col3 >= 59) OR col1 >= 65.22 AND ((col4 > 12.9))) AND col3 > 87 AND col0 IS NULL OR (c…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,035 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 95/622 [`./test/index/in/10/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/in/10/slt_good_3.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col0 < 25 AND (col3 <= 97 AND col1 < 41.32) AND (col3 BETWEEN 87 AND 65 AND col4 IN (SELECT col1 FROM tab0 WHERE (col0 IS NULL AND col3 IS NULL OR (((col0 < 85 OR col3 <= 13) AND col0 IN (SELECT col3 FROM tab0 WHERE (col1 > 47.41 OR (((col3 < 12 AND col1 = 61.47 OR col3 IN…

Cannot read property '2' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col1 >= 3.85 AND (col3 <= 27) OR (col3 IS NULL) OR col3 BETWEEN 82 AND 96 AND col1 >= 2.98 AND col1 > 17.81 AND (((col3 = 30)) OR col4 > 76.41 AND (col1 <= 59.57 OR ((col0 < 18 OR col3 >= 86 OR (col4 > 45.60) OR col1 < 9.53)) AND col4 >= 87.45 AND ((col1 >= 84.94)) AND (co…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col3 > 74 AND col3 IN (69) OR (col3 IN (SELECT col0 FROM tab0 WHERE ((((((col0 > 1) OR (col1 > 8.30 AND col4 IN (96.41,64.44) AND ((col0 >= 99 AND (col3 < 99)))) AND col3 BETWEEN 52 AND 38)) OR (col1 < 11.23) OR (col4 >= 4.29)) AND col0 < 65 AND ((col3 < 66) AND (((col3 IN…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col1 IN (95.16,3.28,89.71) OR ((col0 IN (SELECT col3 FROM tab0 WHERE col0 > 30))) AND col4 < 62.57 AND col1 < 39.41 AND ((((col0 IN (SELECT col3 FROM tab0 WHERE (col0 >= 32) AND (col1 < 71.41 AND col3 < 38 OR (col3 <= 42) OR ((((col1 <= 22.6) AND (col0 < 86 AND (((col3 < 5…

Cannot read property '1' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col0 > 96) OR (col3 < 76 OR col1 > 28.96 OR (col4 BETWEEN 7.66 AND 25.95 AND (((col3 IN (45) OR col3 < 71) AND ((((col3 > 57)) AND (col3 <= 55 AND ((col1 >= 61.17))) OR col3 = 33 AND col0 < 44)) AND col3 > 25) AND ((((col0 IS NULL)) OR col0 > 92) OR col3 > 54 AND (col0 BE…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,037 tests as _sqlite_

* 105 failed
* 98% was OK


---- ---- ---- ---- ---- ---- ----
### 96/622 [`./test/index/in/10/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/in/10/slt_good_4.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col0 = 32 AND col0 > 66 AND ((col0 IS NULL)) OR (col4 <= 40.93) AND ((col3 <= 55)) OR ((col3 > 88)) OR ((col3 < 42) AND col0 < 32 OR (col3 > 72) AND col3 IN (99,86,86,87,87,11) AND (((col0 > 51)))) OR ((col4 < 3.44)) OR (col1 IN (92.43) OR ((col3 = 32))) AND (((col3 = 23))…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 BETWEEN 78 AND 43 AND ((col1 IN (SELECT col4 FROM tab0 WHERE col0 IN (SELECT col3 FROM tab0 WHERE col4 < 88.93 OR ((col4 >= 64.21 AND col3 < 56 AND col3 >= 78)) OR (((col3 = 14 AND ((col4 > 29.37)) OR col3 < 19) AND (col1 <= 55.52 AND col0 > 72 AND col4 > 76.93 OR col…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((((col0 IN (11,98,47) AND ((col4 <= 64.10)) AND col0 > 5 OR col1 IS NULL) OR col0 IN (39,57,77,20,54,84)) OR col3 IN (SELECT col0 FROM tab0 WHERE col3 = 76)) AND (col0 > 2) AND col3 > 82 OR (col1 > 51.24 AND (col4 > 83.71 AND col1 > 5.7 AND col3 < 12 OR col1 > 13.63)) OR …

Cannot read property '1' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col1 IN (SELECT col4 FROM tab0 WHERE col3 >= 77 OR (col4 IS NULL) AND col0 < 3 OR col0 < 24 AND col4 > 38.78 AND col4 < 7.44 AND ((((col4 BETWEEN 11.18 AND 7.73)))) AND (col0 < 18) OR col4 = 43.76 OR col3 > 65 OR col1 IN (SELECT col4 FROM tab0 WHERE col4 > 51.57) AND col3…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 IN (SELECT col3 FROM tab0 WHERE (col3 > 66) AND col1 IN (99.75,31.36,84.18,22.13) AND ((col3 IN (SELECT col0 FROM tab0 WHERE col0 < 95))) AND (col3 = 56) AND col3 = 97 AND col3 < 78 AND col0 IN (46,65,15,15,3) AND ((((col3 < 57 AND (col0 > 54))) OR col4 > 68.53) AND c…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,038 tests as _sqlite_

* 75 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 97/622 [`./test/index/in/10/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/in/10/slt_good_5.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col1 > 76.14 AND col1 <= 4.64 AND col4 = 78.23 AND col0 > 95 AND col3 > 79 AND (col3 = 87) AND col0 > 65 AND col0 < 43 OR (((((col0 < 23)))) OR col4 IN (45.93,74.52,0.25,28.85,23.61) OR col0 > 22 OR col4 = 38.20 AND (col3 > 5 OR (col3 < 65 OR ((col0 <= 36 AND col3 >= 22 AN…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab3 WHERE col1 > 76.14 AND col1 <= 4.64 AND col4 = 78.23 AND col0 > 95 AND col3 > 79 AND (col3 = 87) AND col0 > 65 AND col0 < 43 OR (((((col0 < 23)))) OR col4 IN (45.93,74.52,0.25,28.85,23.61) OR col0 > 22 OR col4 = 38.20 AND (col3 > 5 OR (col3 < 65 OR ((col0 <= 36 AND col3 >= 22 AN…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col3 > 69 OR (((col0 >= 74 AND (col4 < 52.5)) OR ((col0 IN (47,88)) OR (col4 BETWEEN 94.47 AND 53.92) AND (col3 < 2 AND ((col3 < 64) AND (col1 = 12.39))) AND (col0 > 84) OR col3 >= 17 OR (col3 > 45) AND (((((col3 >= 3))))) OR (col1 < 65.77 OR (col0 IS NULL) AND ((((col3 <=…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 IN (SELECT col3 FROM tab0 WHERE (col4 > 6.23 OR (col3 < 42 OR col3 < 51 AND ((col1 < 50.85) OR (col3 IN (SELECT col0 FROM tab0 WHERE col0 = 90 AND col0 > 50) AND (col0 >= 3) AND col1 > 79.65 OR col4 > 74.54) OR col3 = 22 AND col1 < 76.83 OR col0 < 16 OR col4 > 0.88 OR…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col3 < 86 OR ((((col0 < 14 AND (col3 <= 50) AND col3 <= 39 AND (col0 >= 61))) OR ((col1 IN (SELECT col4 FROM tab0 WHERE col0 = 65 OR ((((col0 >= 65) AND col4 < 60.87 AND col0 < 51 AND (col0 > 83)) OR (((((col3 <= 2))))) OR ((((col3 < 26)) AND (col3 >= 10) OR col0 > 55)) AN…

Cannot read property '1' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((col0 > 56) OR col0 IN (68) AND ((((col3 > 75) OR col4 >= 56.37 AND col3 > 4))) AND ((col4 > 21.20) AND (col4 < 9.10 OR ((col0 < 65)))) OR (col3 >= 32) AND (col3 > 21 OR (col0 <= 83) AND ((col0 < 9)) OR (((col3 >= 39 AND col4 IN (63.68,45.90,13.40,17.89,62.48,47.88) AND (…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 IN (SELECT col3 FROM tab0 WHERE (col4 >= 20.97 AND ((col0 < 40 AND col0 >= 8)) AND (col3 IS NULL AND col0 > 0 OR col3 IS NULL AND col0 > 26 OR (col3 > 21) OR col1 < 91.1 AND (col0 >= 72) AND (col4 = 54.42) AND ((col1 > 44.1)) OR ((col3 < 43 AND (col0 >= 77))) OR ((col…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((col3 IS NULL) OR ((col0 >= 88 AND col4 > 89.54 AND (col3 IN (SELECT col0 FROM tab0 WHERE ((col0 > 30 AND (((col3 > 24))) AND (col0 < 9 OR col0 < 72 OR (((col3 > 42) AND col4 <= 45.5 AND (col0 <= 91))) OR col0 BETWEEN 63 AND 68 AND col1 IN (5.45,32.0,94.21,60.12,0.21,17.2…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab3 WHERE ((col3 IS NULL) OR ((col0 >= 88 AND col4 > 89.54 AND (col3 IN (SELECT col0 FROM tab3 WHERE ((col0 > 30 AND (((col3 > 24))) AND (col0 < 9 OR col0 < 72 OR (((col3 > 42) AND col4 <= 45.5 AND (col0 <= 91))) OR col0 BETWEEN 63 AND 68 AND col1 IN (5.45,32.0,94.21,60.12,0.21,17.2…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,038 tests as _sqlite_

* 120 failed
* 98% was OK


---- ---- ---- ---- ---- ---- ----
### 98/622 [`./test/index/in/100/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/in/100/slt_good_0.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (((col0 = 470) AND col3 < 284 AND col0 IN (621)) OR col0 < 964) AND (col4 < 67.53) OR (col0 <= 139) AND col0 >= 975 AND (col1 > 31.70) AND col3 = 210 AND col3 IN (SELECT col0 FROM tab0 WHERE col3 IN (SELECT col0 FROM tab0 WHERE col4 <= 996.20 AND ((col1 >= 664.99)) AND (co…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col1 IS NULL OR (col3 IS NULL OR col3 > 196 OR (col0 >= 189 OR col1 <= 240.94 AND (col3 < 571 AND col3 > 967 OR ((col0 < 102)) AND col1 > 699.52 OR col0 < 411 AND ((col3 < 425 AND col0 >= 575)) AND (col3 <= 306)) AND ((((col1 <= 381.52)))) OR col3 > 650 AND col1 IN (SELECT…

Cannot read property '2' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((col4 IN (SELECT col1 FROM tab0 WHERE (col0 < 695 AND col0 < 292) AND col0 <= 273 OR (((col3 > 747 AND ((col4 < 651.69 OR (col3 <= 317) AND col0 <= 765 AND col1 IS NULL OR col0 >= 554 OR (col3 < 681))) AND (col4 > 292.81) OR (((col0 BETWEEN 661 AND 1 OR col4 = 40.43 OR co…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((col0 IN (SELECT col3 FROM tab0 WHERE col0 >= 9 OR col3 = 821 AND col1 <= 392.86 AND col3 > 947 AND ((col0 = 103)) AND (((col4 IS NULL))) AND col3 > 317 OR (col1 >= 263.91) AND ((col4 > 795.31)) OR col1 < 998.88 AND col1 > 394.63 AND (col0 > 366 OR ((col3 IN (SELECT col0 …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab4 WHERE ((col0 IN (SELECT col3 FROM tab4 WHERE col0 >= 9 OR col3 = 821 AND col1 <= 392.86 AND col3 > 947 AND ((col0 = 103)) AND (((col4 IS NULL))) AND col3 > 317 OR (col1 >= 263.91) AND ((col4 > 795.31)) OR col1 < 998.88 AND col1 > 394.63 AND (col0 > 366 OR ((col3 IN (SELECT col0 …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col1 > 114.48 OR ((col4 < 925.53 AND ((col1 < 601.82 AND col0 > 427 AND ((col0 > 618 AND col4 <= 609.58 AND col0 < 47 OR col4 >= 256.53))) OR col3 < 843 OR (((col3 >= 365))) AND col1 < 91.6 AND col0 < 743 OR ((((((((col3 IN (428,989,963,826,119,390))) AND (col0 <= 999) OR …

Cannot read property '0' of undefined
```

#### ☓ Ran 10,128 tests as _sqlite_

* 90 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 99/622 [`./test/index/in/100/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/in/100/slt_good_1.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col4 > 945.15 AND col0 <= 745 AND (col3 < 668 OR col3 IN (SELECT col0 FROM tab0 WHERE (col3 = 227) AND (col3 = 758) AND col4 >= 234.80 OR (col0 IS NULL) OR (col0 IN (455,424,243,331,768)) AND col4 < 813.43 OR col0 > 392 OR col1 BETWEEN 990.61 AND 364.96 OR col0 <= 886 AND…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,127 tests as _sqlite_

* 15 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 100/622 [`./test/index/in/100/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/in/100/slt_good_2.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col1 >= 196.55 AND ((((col0 <= 274)) AND col0 > 676 OR (((col0 < 747 AND (col1 < 448.35)))) OR (col3 IN (SELECT col0 FROM tab0 WHERE col3 > 612) AND (col0 IN (84,102,155,846)) AND (col3 < 664)) OR col0 >= 909 OR (col0 = 936) AND (col4 >= 226.22))) AND col0 <= 835 OR col1 …

Cannot read property '1' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col0 <= 746 OR ((col1 >= 499.9 OR (col0 > 377))) OR col3 < 959 OR col4 = 630.37 OR (col4 <= 780.41)) OR (((((col0 > 167) AND col0 <= 591 OR col4 IN (SELECT col1 FROM tab0 WHERE (((((col4 < 476.18)))) AND col4 IS NULL AND ((((((col4 >= 758.71))) AND col4 > 44.3 AND (col1 I…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col0 <= 746 OR ((col1 >= 499.9 OR (col0 > 377))) OR col3 < 959 OR col4 = 630.37 OR (col4 <= 780.41)) OR (((((col0 > 167) AND col0 <= 591 OR col4 IN (SELECT col1 FROM tab0 WHERE (((((col4 < 476.18)))) AND col4 IS NULL AND ((((((col4 >= 758.71))) AND col4 > 44.3 AND ((col1 …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col0 IN (SELECT col3 FROM tab0 WHERE col0 >= 192 AND ((((col3 <= 388)) OR (col0 > 822) AND (col3 = 758) OR ((col1 < 506.94)))) OR (col3 <= 243 OR col0 IS NULL AND (col3 IN (SELECT col0 FROM tab0 WHERE (col3 >= 927)) AND col3 BETWEEN 38 AND 283) OR (col1 >= 209.98)) AND co…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 = 911 AND (col4 IN (SELECT col1 FROM tab0 WHERE ((col0 < 68) AND col4 <= 117.94 AND col4 IN (SELECT col1 FROM tab0 WHERE (((col1 <= 518.42))) OR col0 <= 123 OR col4 IN (709.10,602.18,863.36,0.57)) AND col0 = 918) AND col3 < 698 OR col4 >= 882.78 AND (col0 = 913)))

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col3 < 703 OR col3 >= 401 AND col0 <= 478 OR col0 >= 110 AND (col3 > 673) OR ((col3 <= 299) OR col1 IS NULL AND col3 >= 449) OR col3 IS NULL AND ((((col4 >= 100.86))) OR col3 IS NULL OR col3 IS NULL AND col1 >= 698.64 OR col3 > 307 OR (col3 > 112 OR (col0 > 477) AND (((col…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (((col0 = 391 AND ((col4 IN (SELECT col1 FROM tab0 WHERE col0 IN (SELECT col3 FROM tab0 WHERE col1 >= 469.79 AND ((col0 <= 999)) OR (col4 >= 175.92 OR col1 > 936.67)) OR col3 <= 725))) AND col0 IN (387,718,548) OR (col3 < 969 AND col0 <= 753 OR col1 > 170.16 AND col0 = 558…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,128 tests as _sqlite_

* 90 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 101/622 [`./test/index/in/100/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/in/100/slt_good_3.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (((((((col0 <= 382))) AND col4 IN (SELECT col1 FROM tab0 WHERE (col0 <= 332 OR (((col1 < 576.83)) OR col1 <= 724.21 OR col0 BETWEEN 587 AND 730 OR (col3 > 794 AND col1 IN (SELECT col4 FROM tab0 WHERE col1 IN (0.79,673.92,13.18,990.13) AND col4 >= 532.39))))))))) AND (((col…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col0 >= 444) AND (col3 > 585) AND (col3 > 220 OR ((col3 = 872 AND (col3 >= 680)) OR col3 < 196 AND col0 IN (SELECT col3 FROM tab0 WHERE (col3 IN (SELECT col0 FROM tab0 WHERE (col4 <= 108.89)) AND col4 <= 235.65) OR col1 > 88.37 AND (col3 > 75 AND (col4 < 148.79) OR col0 I…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col4 > 415.28 AND col3 >= 630 AND (col3 >= 574) AND col1 >= 795.59 OR (((((col0 > 598 OR col3 = 784 AND (col4 IN (760.51,437.85,596.96,263.46)) OR col3 IN (SELECT col0 FROM tab0 WHERE (col0 <= 259 OR col3 > 864 AND col0 > 14 AND col0 >= 207 AND col0 > 531 OR ((col0 >= 657…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,126 tests as _sqlite_

* 45 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 102/622 [`./test/index/in/100/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/in/100/slt_good_4.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col4 = 526.85 AND col3 IN (339,955) AND col3 = 134 AND col0 IN (SELECT col3 FROM tab0 WHERE ((((((col0 <= 553 AND col0 < 499 AND col0 >= 905)) AND col1 = 577.28 OR col4 > 767.50))) OR col0 >= 594 AND col0 <= 213 AND col3 >= 486 AND col0 IN (SELECT col3 FROM tab0 WHERE col…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col0 BETWEEN 611 AND 486 OR col3 >= 509 AND (((col0 IN (43)) AND col4 < 232.45)) OR col1 >= 356.22 AND (((col3 > 654) AND col3 >= 619) OR col3 > 956 OR ((((col4 >= 23.43) OR ((((col0 >= 669 AND ((((((col0 > 524) AND col3 > 84)))) OR col1 <= 908.84 OR ((((col0 > 799 OR col0…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((col3 IN (874,94,150,276) AND ((col3 > 777 AND col1 <= 843.68 AND col1 IN (SELECT col4 FROM tab0 WHERE ((((col0 < 781)) AND (col3 <= 384) OR (col0 IS NULL) OR (col4 < 914.5 AND ((col4 > 221.80))) AND col3 IS NULL OR ((col4 > 831.44 AND (col4 <= 541.39 OR (col0 < 929 AND c…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col3 > 899 OR (((col1 >= 781.44) AND (col1 > 811.50) OR col4 IN (SELECT col1 FROM tab0 WHERE (col0 > 326)) OR col1 IN (SELECT col4 FROM tab0 WHERE col3 < 408 AND ((col1 IS NULL) OR col0 = 360 OR col3 < 552 AND (((col0 < 869))) OR (col1 = 480.17) AND col0 IS NULL OR (col0 >…

Cannot read property '1' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col0 > 793) AND col3 < 242 AND (((((col0 IS NULL AND col3 < 254)) AND ((col0 >= 221) OR col3 < 269 AND (col3 IS NULL) AND (((col3 = 922) AND col0 <= 264 AND (col0 <= 157) AND col0 > 495) AND (col3 < 188)) AND ((col4 = 842.46) OR col3 >= 851 OR col4 IN (SELECT col1 FROM ta…

Cannot read property '1' of undefined
```


```sql
SELECT pk FROM tab1 WHERE ((col3 IN (SELECT col0 FROM tab1 WHERE col0 >= 924 AND ((col3 < 386)) AND (((col3 < 13 OR ((col4 IS NULL))))) OR ((col3 > 341 OR col3 <= 599 OR col3 <= 557 AND (col3 <= 306)) OR col0 IS NULL) OR col3 <= 445 AND (col0 = 432) OR (((col0 < 612) OR (col3 BETWEEN 503 AND 75) OR…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col3 = 763 OR col0 >= 422 AND col0 >= 675 AND col1 > 962.43 AND col4 < 121.77 OR col0 >= 456 AND (col0 <= 963) OR (col3 > 104)) AND (((col0 > 709) OR (col1 > 826.46 AND col3 = 597 AND ((col0 > 244)) AND (col4 < 536.38) AND col3 < 935 AND (col4 = 557.92) OR col0 < 534) OR …

Cannot read property '0' of undefined
```

#### ☓ Ran 10,127 tests as _sqlite_

* 120 failed
* 98% was OK


---- ---- ---- ---- ---- ---- ----
### 103/622 [`./test/index/in/1000/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/in/1000/slt_good_0.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (((col4 >= 6897.58 AND col0 IN (7530,4312)) AND col1 <= 494.83 AND (col3 > 7877 OR col0 > 8556) OR (col3 IN (SELECT col0 FROM tab0 WHERE ((((col1 >= 3878.9)) AND col0 <= 9103 OR col3 = 6252 OR col3 > 30 AND (col0 < 8923 AND col4 = 8696.1 AND col3 IS NULL) AND (col0 <= 9125…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col4 <= 8133.59 OR col0 <= 8701 AND col0 <= 9191) OR col1 >= 322.48 AND col3 IN (SELECT col0 FROM tab0 WHERE col1 = 6561.81 OR col0 = 559 OR col1 >= 2154.39 OR col3 > 697 AND col0 > 6296 OR col3 < 9036 AND ((col3 IN (8017,1690,8072,3222,384) OR col1 IN (SELECT col4 FROM t…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col1 < 7717.24 AND (((((col0 >= 8255)))) AND (col0 < 1127) OR (col3 IN (5582,4833,6788,5683,8071,8620) OR (col3 < 4851) OR ((col0 BETWEEN 4562 AND 525 OR (col4 < 6425.64) AND col0 > 2189 OR col1 = 8111.22 AND col3 < 8030 AND col0 = 1733 OR col3 BETWEEN 1514 AND 6388 OR ((c…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col4 IN (SELECT col1 FROM tab0 WHERE col0 < 3024 OR (col0 = 474) AND col3 = 9159 AND ((col0 <= 4976)) OR col3 > 2013 AND col0 IN (SELECT col3 FROM tab0 WHERE col0 > 9352 OR ((((((col0 >= 1200)))) AND col0 > 9169)) AND ((col4 <= 9577.11))) OR col4 IS NULL AND ((col4 = 2965…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((col3 = 8516 OR ((col1 IN (SELECT col4 FROM tab0 WHERE ((((col1 = 3557.34))) AND col0 < 9963 AND (col4 >= 4963.67 OR col4 <= 2520.6 AND ((((col0 > 7245 AND col3 <= 4058 AND ((col0 = 6835)) AND col0 <= 4322 AND (((col0 <= 8469 AND ((((((col1 > 1512.83) OR (col0 = 5196) AND…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col4 IN (SELECT col1 FROM tab0 WHERE (col1 BETWEEN 1291.59 AND 4645.45) AND (col0 IN (7600,8836)) AND col0 >= 3976 AND ((((col3 >= 4466 AND col3 IN (8219,3486) OR (col0 IN (SELECT col3 FROM tab0 WHERE (col0 > 9444)))) OR ((col0 BETWEEN 1887 AND 5311)))) OR col3 <= 2493 AN…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col3 > 9346 AND col1 BETWEEN 9287.17 AND 7298.36 OR (col0 IS NULL AND ((col4 >= 9698.97) AND col0 IS NULL AND (col3 < 2088 OR (((col4 IN (5559.42,4972.6,8959.37,515.41) OR col0 <= 2302 AND (col0 < 8374) OR col4 >= 9171.66 AND (col1 IN (SELECT col4 FROM tab0 WHERE (col0 = 3…

Cannot read property '0' of undefined
```

#### ☓ Ran 11,028 tests as _sqlite_

* 105 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 104/622 [`./test/index/in/1000/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/in/1000/slt_good_1.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col1 < 7239.61) OR ((col3 >= 983) OR ((col0 IS NULL) AND ((((col0 >= 2799)) AND ((col0 >= 9551)))) AND col3 <= 6313 OR (col3 >= 1943 OR col4 IS NULL OR col3 >= 5068 OR col0 < 263) OR (((col3 < 341)))) AND (col3 > 328) AND (col0 > 6930 OR col0 = 8918 OR col3 > 8402 AND ((c…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE ((((col4 <= 6261.86 OR (col1 = 5799.50 AND (col3 <= 6016)) OR col1 IS NULL OR (col4 > 2827.19 OR ((col3 > 9422)) OR ((col3 > 5133) AND col0 > 3751 OR col0 > 7395 AND ((col1 >= 4800.18) AND ((col0 < 9365)) AND (((col3 < 8915) AND col4 < 8048.12)) AND col0 <= 9248 OR col3 <=…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col1 < 3182.50) OR col3 BETWEEN 1740 AND 8127 AND (((col3 > 9327)) AND (((col1 IN (SELECT col4 FROM tab0 WHERE col1 >= 744.97 AND (col3 IN (SELECT col0 FROM tab0 WHERE col1 < 3307.95)) OR col1 >= 6307.79 AND ((col4 IS NULL AND col4 <= 4023.54)) AND col0 BETWEEN 1122 AND 6…

Cannot read property '0' of undefined
```

#### ☓ Ran 11,024 tests as _sqlite_

* 45 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 105/622 [`./test/index/orderby/10/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_0.test)

_Mimic sqlite_

#### ★ Assuming all 10,053 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 106/622 [`./test/index/orderby/10/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_1.test)

_Mimic sqlite_

#### ★ Assuming all 10,054 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 107/622 [`./test/index/orderby/10/slt_good_10.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_10.test)

_Mimic sqlite_

#### ★ Assuming all 10,051 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 108/622 [`./test/index/orderby/10/slt_good_11.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_11.test)

_Mimic sqlite_

#### ★ Assuming all 10,053 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 109/622 [`./test/index/orderby/10/slt_good_12.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_12.test)

_Mimic sqlite_

#### ★ Assuming all 10,053 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 110/622 [`./test/index/orderby/10/slt_good_13.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_13.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col0 >= 506 AND ((col0 >= 245 AND (col1 <= 933.9 AND col0 < 820 OR (col4 BETWEEN 910.38 AND 990.47 AND (col0 >= 95) OR col3 = 617 OR (col1 >= 614.99 AND col3 <= 543)) OR col3 > 58 OR ((col0 <= 930 AND (col0 > 649) AND (col4 > 620.93 AND (col4 > 157.14) AND (col4 > 447.76))…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,051 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 111/622 [`./test/index/orderby/10/slt_good_14.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_14.test)

_Mimic sqlite_

#### ★ Assuming all 10,053 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 112/622 [`./test/index/orderby/10/slt_good_15.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_15.test)

_Mimic sqlite_

#### ★ Assuming all 10,052 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 113/622 [`./test/index/orderby/10/slt_good_16.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_16.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (((((col1 IS NULL AND col0 >= 67) OR ((col4 > 867.74))))) OR (col0 <= 636) OR (col0 >= 410 OR (col0 > 169 AND (col4 IS NULL OR col1 >= 744.16 AND ((((col0 < 922)) OR (col3 > 578 OR col0 > 300 AND col0 < 704 OR col0 >= 204 AND ((col3 = 16) AND col1 < 171.41) AND (col4 < 150…

Cannot read property '2' of undefined
```

#### ☓ Ran 10,050 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 114/622 [`./test/index/orderby/10/slt_good_17.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_17.test)

_Mimic sqlite_

#### ★ Assuming all 10,054 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 115/622 [`./test/index/orderby/10/slt_good_18.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_18.test)

_Mimic sqlite_

#### ★ Assuming all 10,053 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 116/622 [`./test/index/orderby/10/slt_good_19.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_19.test)

_Mimic sqlite_

#### ★ Assuming all 10,052 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 117/622 [`./test/index/orderby/10/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_2.test)

_Mimic sqlite_

#### ★ Assuming all 10,051 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 118/622 [`./test/index/orderby/10/slt_good_20.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_20.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col4 < 384.93 OR col1 < 239.78 OR col4 = 233.10 OR (col3 IN (SELECT col0 FROM tab0 WHERE (col0 > 428) OR col3 > 471 AND col3 IN (SELECT col0 FROM tab0 WHERE col0 < 986 AND (col3 < 892)) OR col0 = 201 AND col1 >= 908.84))) OR col4 = 925.62 OR col3 >= 628 AND col1 > 669.11 …

Cannot read property '0' of undefined
```

#### ☓ Ran 10,052 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 119/622 [`./test/index/orderby/10/slt_good_21.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_21.test)

_Mimic sqlite_

#### ★ Assuming all 10,053 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 120/622 [`./test/index/orderby/10/slt_good_22.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_22.test)

_Mimic sqlite_

#### ★ Assuming all 10,052 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 121/622 [`./test/index/orderby/10/slt_good_23.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_23.test)

_Mimic sqlite_

#### ★ Assuming all 10,053 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 122/622 [`./test/index/orderby/10/slt_good_24.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_24.test)

_Mimic sqlite_

#### ★ Assuming all 10,051 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 123/622 [`./test/index/orderby/10/slt_good_25.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_25.test)

_Mimic sqlite_

#### ★ Assuming all 10,053 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 124/622 [`./test/index/orderby/10/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_3.test)

_Mimic sqlite_

#### ★ Assuming all 10,051 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 125/622 [`./test/index/orderby/10/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_4.test)

_Mimic sqlite_

#### ★ Assuming all 10,052 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 126/622 [`./test/index/orderby/10/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_5.test)

_Mimic sqlite_

#### ★ Assuming all 10,051 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 127/622 [`./test/index/orderby/10/slt_good_6.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_6.test)

_Mimic sqlite_

#### ★ Assuming all 10,048 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 128/622 [`./test/index/orderby/10/slt_good_7.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_7.test)

_Mimic sqlite_

#### ★ Assuming all 10,052 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 129/622 [`./test/index/orderby/10/slt_good_8.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_8.test)

_Mimic sqlite_

#### ★ Assuming all 10,051 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 130/622 [`./test/index/orderby/10/slt_good_9.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/10/slt_good_9.test)

_Mimic sqlite_

#### ★ Assuming all 10,050 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 131/622 [`./test/index/orderby/100/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/100/slt_good_0.test)

_Mimic sqlite_

#### ★ Assuming all 10,141 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 132/622 [`./test/index/orderby/100/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/100/slt_good_1.test)

_Mimic sqlite_

#### ★ Assuming all 10,140 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 133/622 [`./test/index/orderby/100/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/100/slt_good_2.test)

_Mimic sqlite_

#### ★ Assuming all 10,142 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 134/622 [`./test/index/orderby/100/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/100/slt_good_3.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE ((col1 IN (SELECT col4 FROM tab0 WHERE (col3 IN (SELECT col0 FROM tab0 WHERE col1 > 474.87)) AND col3 > 159))) ORDER BY 1 DESC

Cannot read property '0' of undefined
```

#### ☓ Ran 10,140 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 135/622 [`./test/index/orderby/1000/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby/1000/slt_good_0.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE ((((col1 <= 7103.46 AND col0 > 2211 AND col0 > 4703 AND col3 <= 2105 AND col4 > 1731.51 OR (col0 > 3287) AND col3 <= 5111 AND col4 >= 8249.41 AND ((col3 <= 6788) AND ((col4 IS NULL) OR col0 >= 4782 OR col0 IN (SELECT col3 FROM tab0 WHERE col1 IN (SELECT col4 FROM tab0 WHER…

Cannot read property '0' of undefined
```

#### ☓ Ran 11,043 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 136/622 [`./test/index/orderby_nosort/10/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_0.test)

_Mimic sqlite_

#### ★ Assuming all 10,053 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 137/622 [`./test/index/orderby_nosort/10/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_1.test)

_Mimic sqlite_

#### ★ Assuming all 10,051 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 138/622 [`./test/index/orderby_nosort/10/slt_good_10.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_10.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (((((col1 <= 18.18 OR col4 > 95.58) OR col3 = 67) OR col3 < 21 OR col1 > 98.18))) OR col0 < 85 OR (col1 > 24.90 OR (col0 > 10 AND ((((col4 IN (50.77,83.38,0.55,80.0,49.57) OR col1 IN (SELECT col4 FROM tab0 WHERE col0 > 76 OR (((((col1 >= 51.83 AND col1 < 61.20))) AND ((col…

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE (col0 >= 85) OR ((col0 IS NULL OR (col0 > 91 OR col3 < 42) AND (((col4 < 55.19) AND (col3 <= 20))) AND col1 >= 36.21 OR col0 > 9 AND col0 > 46 OR (((((col3 IN (45,56) AND col4 > 98.82) AND (col1 >= 1.1)) AND col3 > 7) AND col0 > 58)) AND col3 <= 56 AND (col3 <= 39) OR ((((…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,051 tests as _sqlite_

* 120 failed
* 98% was OK


---- ---- ---- ---- ---- ---- ----
### 139/622 [`./test/index/orderby_nosort/10/slt_good_11.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_11.test)

_Mimic sqlite_

#### ★ Assuming all 10,052 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 140/622 [`./test/index/orderby_nosort/10/slt_good_12.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_12.test)

_Mimic sqlite_

#### ★ Assuming all 10,051 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 141/622 [`./test/index/orderby_nosort/10/slt_good_13.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_13.test)

_Mimic sqlite_

#### ★ Assuming all 10,053 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 142/622 [`./test/index/orderby_nosort/10/slt_good_14.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_14.test)

_Mimic sqlite_

#### ★ Assuming all 10,052 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 143/622 [`./test/index/orderby_nosort/10/slt_good_15.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_15.test)

_Mimic sqlite_

#### ★ Assuming all 10,054 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 144/622 [`./test/index/orderby_nosort/10/slt_good_16.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_16.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (((col4 > 78.90 OR (col1 IN (96.63,13.91)) OR ((col3 BETWEEN 2 AND 5)) OR ((col1 <= 98.32)) AND col3 >= 78 AND (col3 < 73 OR (col4 < 1.49 AND (col0 IS NULL) AND (col0 IN (SELECT col3 FROM tab0 WHERE (col1 = 10.61) AND (((col0 IS NULL) AND ((col1 < 31.10) AND col4 = 93.89 A…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,053 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 145/622 [`./test/index/orderby_nosort/10/slt_good_17.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_17.test)

_Mimic sqlite_

#### ★ Assuming all 10,050 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 146/622 [`./test/index/orderby_nosort/10/slt_good_18.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_18.test)

_Mimic sqlite_

#### ★ Assuming all 10,050 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 147/622 [`./test/index/orderby_nosort/10/slt_good_19.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_19.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col0 >= 65) AND (col0 > 93) AND col1 < 97.32 OR col0 <= 97 OR col3 < 47 AND ((col3 > 33)) OR ((((col3 < 42) AND col3 <= 91))) OR (col0 <= 67) AND (col1 IN (SELECT col4 FROM tab0 WHERE col3 IN (SELECT col0 FROM tab0 WHERE ((col1 = 17.17 AND ((col4 > 71.88)) OR col3 < 9 AND…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,053 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 148/622 [`./test/index/orderby_nosort/10/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_2.test)

_Mimic sqlite_

#### ★ Assuming all 10,052 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 149/622 [`./test/index/orderby_nosort/10/slt_good_20.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_20.test)

_Mimic sqlite_

#### ★ Assuming all 10,053 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 150/622 [`./test/index/orderby_nosort/10/slt_good_21.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_21.test)

_Mimic sqlite_

#### ★ Assuming all 10,052 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 151/622 [`./test/index/orderby_nosort/10/slt_good_22.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_22.test)

_Mimic sqlite_

#### ★ Assuming all 10,054 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 152/622 [`./test/index/orderby_nosort/10/slt_good_23.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_23.test)

_Mimic sqlite_

#### ★ Assuming all 10,051 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 153/622 [`./test/index/orderby_nosort/10/slt_good_24.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_24.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE ((col4 IS NULL)) OR (col4 IN (SELECT col1 FROM tab0 WHERE ((col1 = 40.57) AND col3 BETWEEN 62 AND 36 AND col3 IN (SELECT col0 FROM tab0 WHERE (col3 IS NULL) OR col1 >= 51.81 OR col0 <= 41 OR col1 < 32.73 AND ((((col0 <= 61 AND col0 < 95 AND col0 < 10))) OR ((col1 < 41.63 O…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,054 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 154/622 [`./test/index/orderby_nosort/10/slt_good_25.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_25.test)

_Mimic sqlite_

#### ★ Assuming all 10,052 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 155/622 [`./test/index/orderby_nosort/10/slt_good_26.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_26.test)

_Mimic sqlite_

#### ★ Assuming all 10,053 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 156/622 [`./test/index/orderby_nosort/10/slt_good_27.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_27.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col4 = 5.55 AND col4 > 33.85 OR (col4 <= 71.14 AND col4 IS NULL AND col0 < 6 OR ((col4 < 32.98) AND col3 >= 73 AND (col0 IN (SELECT col3 FROM tab0 WHERE (col4 >= 43.27 AND col0 > 70 OR ((col1 >= 73.33 OR (((col0 IS NULL) AND col0 > 10) OR col0 IN (64,52,81,83)) AND col0 < …

Cannot read property '0' of undefined
```

#### ☓ Ran 10,051 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 157/622 [`./test/index/orderby_nosort/10/slt_good_28.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_28.test)

_Mimic sqlite_

#### ★ Assuming all 10,052 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 158/622 [`./test/index/orderby_nosort/10/slt_good_29.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_29.test)

_Mimic sqlite_

#### ★ Assuming all 10,050 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 159/622 [`./test/index/orderby_nosort/10/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_3.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col3 >= 14 AND ((col0 > 77)) AND ((col4 <= 70.31 OR col0 <= 48) AND ((col4 < 61.20) OR (col4 < 96.55) AND col0 <= 62 OR col0 > 79) AND col1 < 10.18) AND col0 > 49 AND ((((col3 > 59)))) OR ((col4 < 50.35)) OR (col3 = 16) OR (col0 > 63) AND col3 <= 39 AND col0 > 13 AND (col3…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,051 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 160/622 [`./test/index/orderby_nosort/10/slt_good_30.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_30.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE (col3 BETWEEN 31 AND 12) OR col1 >= 79.18 AND (col4 IN (SELECT col1 FROM tab0 WHERE (col0 < 71 OR (col0 <= 86) AND (col3 >= 25) AND (col0 <= 87 AND (col0 > 20 AND (col0 < 14 AND col3 >= 25 OR ((col0 IS NULL))) AND (col0 BETWEEN 26 AND 94) AND col3 < 32 AND col3 = 1) AND ((…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,052 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 161/622 [`./test/index/orderby_nosort/10/slt_good_31.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_31.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE ((col0 < 6 AND col0 > 68 AND col4 IN (SELECT col1 FROM tab0 WHERE ((col0 IN (SELECT col3 FROM tab0 WHERE (col0 >= 93))) AND col0 IS NULL) AND col3 > 80 AND col3 > 83) OR col4 > 20.81 OR ((col0 > 79)) AND ((col3 >= 74 AND col3 > 77 AND (col1 BETWEEN 73.63 AND 58.39 OR col0 …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab4 WHERE ((col0 < 6 AND col0 > 68 AND col4 IN (SELECT col1 FROM tab4 WHERE ((col0 IN (SELECT col3 FROM tab4 WHERE (col0 >= 93))) AND col0 IS NULL) AND col3 > 80 AND col3 > 83) OR col4 > 20.81 OR ((col0 > 79)) AND ((col3 >= 74 AND col3 > 77 AND (col1 BETWEEN 73.63 AND 58.39 OR col0 …

Cannot read property '0' of undefined
```


```sql
SELECT pk FROM tab0 WHERE col4 >= 36.81 AND col4 IS NULL AND col0 < 26 AND col0 > 50 AND ((col4 > 16.33)) AND col3 BETWEEN 88 AND 35 AND (col3 >= 60) AND (((col4 < 30.59 OR col3 <= 65 OR (col4 < 72.3) OR col3 < 59 AND ((col4 > 75.91)) AND col1 <= 5.63 OR col0 = 76 OR col3 > 58 OR col0 <= 33 OR ((((…

Cannot read property '0' of undefined
```


```sql
SELECT pk, col0 FROM tab1 WHERE col4 >= 36.81 AND col4 IS NULL AND col0 < 26 AND col0 > 50 AND ((col4 > 16.33)) AND col3 BETWEEN 88 AND 35 AND (col3 >= 60) AND (((col4 < 30.59 OR col3 <= 65 OR (col4 < 72.3) OR col3 < 59 AND ((col4 > 75.91)) AND col1 <= 5.63 OR col0 = 76 OR col3 > 58 OR col0 <= 33 O…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,052 tests as _sqlite_

* 120 failed
* 98% was OK


---- ---- ---- ---- ---- ---- ----
### 162/622 [`./test/index/orderby_nosort/10/slt_good_32.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_32.test)

_Mimic sqlite_

#### ★ Assuming all 10,052 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 163/622 [`./test/index/orderby_nosort/10/slt_good_33.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_33.test)

_Mimic sqlite_

#### ★ Assuming all 10,050 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 164/622 [`./test/index/orderby_nosort/10/slt_good_34.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_34.test)

_Mimic sqlite_

#### ★ Assuming all 10,052 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 165/622 [`./test/index/orderby_nosort/10/slt_good_35.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_35.test)

_Mimic sqlite_

#### ★ Assuming all 10,049 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 166/622 [`./test/index/orderby_nosort/10/slt_good_36.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_36.test)

_Mimic sqlite_

#### ★ Assuming all 10,052 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 167/622 [`./test/index/orderby_nosort/10/slt_good_37.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_37.test)

_Mimic sqlite_

#### ★ Assuming all 10,052 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 168/622 [`./test/index/orderby_nosort/10/slt_good_38.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_38.test)

_Mimic sqlite_

#### ★ Assuming all 10,052 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 169/622 [`./test/index/orderby_nosort/10/slt_good_39.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_39.test)

_Mimic sqlite_

#### ★ Assuming all 10,052 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 170/622 [`./test/index/orderby_nosort/10/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_4.test)

_Mimic sqlite_

#### ★ Assuming all 10,053 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 171/622 [`./test/index/orderby_nosort/10/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_5.test)

_Mimic sqlite_

#### ★ Assuming all 10,052 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 172/622 [`./test/index/orderby_nosort/10/slt_good_6.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_6.test)

_Mimic sqlite_

#### ★ Assuming all 10,053 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 173/622 [`./test/index/orderby_nosort/10/slt_good_7.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_7.test)

_Mimic sqlite_

#### ★ Assuming all 10,052 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 174/622 [`./test/index/orderby_nosort/10/slt_good_8.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_8.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE ((col4 < 13.3) AND col0 BETWEEN 80 AND 63 OR col3 < 67 OR ((((col3 >= 47 OR col3 < 37 OR ((col0 = 47)) OR col4 > 64.58 OR (col0 IS NULL) AND col3 >= 76 OR col0 < 94 AND ((col0 >= 91) AND (col0 IN (11) AND col0 >= 51 OR ((col3 = 76)) AND ((col0 > 79)) AND col0 <= 8 OR col3 …

Cannot read property '0' of undefined
```

#### ☓ Ran 10,054 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 175/622 [`./test/index/orderby_nosort/10/slt_good_9.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/10/slt_good_9.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col0 > 23 AND col3 IN (SELECT col0 FROM tab0 WHERE (col4 IN (87.49,43.86,39.83,73.23,60.73,8.41) OR col0 < 89 AND (col1 IN (SELECT col4 FROM tab0 WHERE (col4 > 21.30))) AND col0 < 96 OR col1 > 78.39)) ORDER BY 1 DESC

Cannot read property '0' of undefined
```

#### ☓ Ran 10,055 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 176/622 [`./test/index/orderby_nosort/100/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/100/slt_good_0.test)

_Mimic sqlite_

```sql
SELECT pk FROM tab0 WHERE col0 IS NULL OR ((col3 < 305) OR col0 IS NULL AND (((col1 < 745.40 AND (((col0 > 994 OR col0 > 376 OR col1 < 54.41))) AND col0 <= 90 OR (col3 > 27 AND col3 > 276 AND (col1 = 260.97 AND col4 > 175.12) AND col4 IS NULL) AND (col3 < 482) OR (col0 > 223 OR col3 > 710 AND ((col…

Cannot read property '0' of undefined
```

#### ☓ Ran 10,149 tests as _sqlite_

* 60 failed
* 99% was OK


---- ---- ---- ---- ---- ---- ----
### 177/622 [`./test/index/orderby_nosort/100/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/100/slt_good_1.test)

_Mimic sqlite_

#### ★ Assuming all 10,141 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 178/622 [`./test/index/orderby_nosort/100/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/100/slt_good_2.test)

_Mimic sqlite_

#### ★ Assuming all 10,142 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 179/622 [`./test/index/orderby_nosort/100/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/100/slt_good_3.test)

_Mimic sqlite_

#### ★ Assuming all 10,143 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 180/622 [`./test/index/orderby_nosort/100/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/100/slt_good_4.test)

_Mimic sqlite_

#### ★ Assuming all 10,141 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 181/622 [`./test/index/orderby_nosort/100/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/100/slt_good_5.test)

_Mimic sqlite_

#### ★ Assuming all 10,142 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 182/622 [`./test/index/orderby_nosort/100/slt_good_6.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/100/slt_good_6.test)

_Mimic sqlite_

#### ★ Assuming all 10,144 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 183/622 [`./test/index/orderby_nosort/1000/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/1000/slt_good_0.test)

_Mimic sqlite_

#### ★ Assuming all 11,040 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 184/622 [`./test/index/orderby_nosort/1000/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/orderby_nosort/1000/slt_good_1.test)

_Mimic sqlite_

#### ★ Assuming all 11,043 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 185/622 [`./test/index/random/10/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/10/slt_good_0.test)

_Mimic sqlite_

```sql
SELECT + col2 FROM tab0 AS cor0 WHERE col3 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - - COUNT ( * ) FROM tab0 AS cor0 WHERE NOT ( NULL ) > + col3

Expected: ["0"] but got ["10"]
```


```sql
SELECT 79 FROM tab0 WHERE ( + 94 ) - + ( + 1 ) NOT BETWEEN NULL AND ( col1 + + 33 )

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT + COUNT ( * ) FROM tab0 WHERE NOT NULL <> NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT ALL - SUM ( - col4 ) * 47 + + COUNT ( * ) AS col1 FROM tab0 WHERE NOT ( NULL > col4 + + col0 )

Expected: ["NULL"] but got ["284635.420"]
```


```sql
SELECT + CAST ( NULL AS INTEGER ) + + + ( 2 ) AS col3 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - 96 FROM tab0 AS cor0 WHERE NOT col1 IN ( + + 68 )

Query was expected to return results (but did not) 
```


```sql
SELECT MIN ( ALL col0 ) AS col2 FROM tab0 AS cor0 WHERE NOT ( NULL ) > col3 + 67 - - + col1 + - 53

Expected: ["NULL"] but got ["90"]
```


```sql
SELECT + col5 FROM tab0 cor0 WHERE NOT + ( - + 23 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT 68 * + col0 - + - CAST ( NULL AS INTEGER ) FROM tab0 WHERE NOT + 37 BETWEEN col4 AND + col1 + - ( + 74 )

Query was expected to return results (but did not) 
```


```sql
SELECT - COUNT ( * ) FROM tab0 WHERE NOT NULL > + 62

Expected: ["0"] but got ["-10"]
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
SELECT DISTINCT - COUNT ( * ) AS col1 FROM tab0 WHERE NOT + 79 IN ( - - col0, col0 )

Expected: ["-10"] but got ["0"]
```


```sql
SELECT ALL + - col0 AS col4 FROM tab0 AS cor0 WHERE NOT ( + col3 ) * + - col1 BETWEEN + col0 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + COUNT ( * ) AS col0 FROM tab0 AS cor0 WHERE NOT NULL <= ( + 14 )

Expected: ["0"] but got ["10"]
```


```sql
SELECT - 62 - 94 FROM tab0 AS cor0 WHERE NOT ( - col4 ) BETWEEN - col1 + + 52 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL col5 AS col2 FROM tab0 cor0 WHERE ( + - col1 ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT SUM ( ALL + col1 ) FROM tab0 AS cor0 WHERE NOT NULL IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col5 AS col5 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col3 FROM tab0 WHERE col0 NOT BETWEEN NULL AND col1

Query was expected to return results (but did not) 
```


```sql
SELECT ALL - COUNT ( * ) AS col1 FROM tab0 AS cor0 WHERE NOT col4 IN ( - CAST ( col3 AS INTEGER ) )

Expected: ["-10"] but got ["0"]
```


```sql
SELECT DISTINCT + - COUNT ( * ) FROM tab0 AS cor0 WHERE NOT NULL = 20

Expected: ["0"] but got ["-10"]
```


```sql
SELECT col0 FROM tab0 AS cor0 WHERE NOT + 64 BETWEEN - 55 AND - + col4 * - - ( + col3 ) + - + 89 + col0

Query was expected to return results (but did not) 
```


```sql
SELECT col5 AS col2, 13 AS col0, - - col3 AS col0 FROM tab0 AS cor0 WHERE + col4 > + 12

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT COUNT ( * ) AS col1 FROM tab0 WHERE NOT CAST ( NULL AS INTEGER ) IS NOT NULL

Expected: ["10"] but got ["0"]
```


```sql
SELECT DISTINCT CAST ( NULL AS INTEGER ) + - - 15 * col4 FROM tab0 AS cor0 WHERE NOT ( NULL ) IS NOT NULL

Expected: ["NULL"] but got ["10289.550","10478.250","1132.500","12314.700","12553.200","14436.450","4742.250","7344.450","7564.200","9982.350"]
```


```sql
SELECT ALL SUM ( - col1 ) * - COUNT ( * ) AS col2 FROM tab3 AS cor0 WHERE NOT NULL IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL 33 * COUNT ( * ) AS col1 FROM tab0 AS cor0 WHERE NOT NULL < 94 + + - 70 + + col1 - 64 / + col3

Expected: ["0"] but got ["330"]
```


```sql
SELECT 57 FROM tab0 cor0 WHERE NOT + 78 + - - CAST ( NULL AS INTEGER ) / - 2 IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + col2 FROM tab0 AS cor0 WHERE 47 * - 19 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col2 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + col5 FROM tab0 cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT MAX ( DISTINCT + 30 ) * 75 AS col0 FROM tab0 WHERE + col0 NOT BETWEEN ( + col1 ) + 53 AND NULL

Expected: ["2250"] but got ["NULL"]
```


```sql
SELECT + MIN ( 81 ) + - COUNT ( * ) FROM tab0 AS cor0 WHERE NOT col3 = NULL

Expected: ["NULL"] but got ["71"]
```


```sql
SELECT - CAST ( NULL AS INTEGER ) AS col5 FROM tab0 WHERE NOT + 62 - - 12 + - 53 * - col1 IN ( col1 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL - COUNT ( * ) - ( + 12 ) AS col3 FROM tab0 cor0 WHERE ( NOT - col3 < ( NULL ) )

Expected: ["-12"] but got ["-22"]
```


```sql
SELECT ALL - MAX ( ALL + 54 ) AS col4 FROM tab0 cor0 WHERE NOT NULL < col3

Expected: ["NULL"] but got ["-54"]
```


```sql
SELECT ALL + + col2 col5 FROM tab0 AS cor0 WHERE NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col5 AS col0 FROM tab0 WHERE NOT col4 + + col0 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT MIN ( DISTINCT + 43 ) AS col1 FROM tab0 AS cor0 WHERE 92 + - col4 <> CAST ( NULL AS INTEGER )

Expected: ["NULL"] but got ["43"]
```


```sql
SELECT + + 96 + - COUNT ( * ) FROM tab0 WHERE NOT NULL <> - CAST ( NULL AS INTEGER ) * col4 + - col0

Expected: ["96"] but got ["86"]
```


```sql
SELECT 42 AS col2, + 80 * + CAST ( NULL AS INTEGER ) + + COUNT ( * ) AS col5 FROM tab0 AS cor0 WHERE ( 17 ) IS NOT NULL

Expected: ["42","NULL"] but got ["42","10"]
```


```sql
SELECT col3 col2 FROM tab0 AS cor0 WHERE NOT + col3 * + CAST ( + col3 AS INTEGER ) + + 36 IN ( col4 + col4 )

Query was expected to return results (but did not) 
```


```sql
SELECT - SUM ( + 70 ) AS col1 FROM tab0 WHERE NOT col3 NOT IN ( 87 + - col3 )

Expected: ["NULL"] but got ["-700"]
```


```sql
SELECT + COUNT ( * ) AS col4 FROM tab0 AS cor0 WHERE NOT NULL <= - col1 + col3

Expected: ["0"] but got ["10"]
```


```sql
SELECT - 8 AS col5, + 0 * - col0 * 57 - + col3 AS col5 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT 6 / 42 AS col4 FROM tab0 WHERE NOT + col4 BETWEEN NULL AND 79

Query was expected to return results (but did not) 
```


```sql
SELECT - SUM ( 36 ) * 76 FROM tab0 AS cor0 WHERE NOT - col1 IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + MIN ( ALL 65 ), + CAST ( NULL AS INTEGER ) AS col4 FROM tab0 WHERE NULL IS NOT NULL

Expected: ["NULL","NULL"] but got ["NULL","0"]
```


```sql
SELECT ALL + ( CAST ( NULL AS INTEGER ) ) AS col3 FROM tab0 WHERE ( + col0 ) NOT IN ( - 23 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + COUNT ( * ) FROM tab0 AS cor0 WHERE NOT col0 <> NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT - 83 FROM tab0 AS cor0 WHERE NOT + col1 * + 59 / - CAST ( NULL AS INTEGER ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT - CAST ( NULL AS INTEGER ) * - 28 * - COUNT ( * ) AS col0 FROM tab0 AS cor0 WHERE - col0 = NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL - - 57 * + ( - 62 ) AS col4, COUNT ( * ) AS col5 FROM tab0 WHERE NOT + 98 * - col0 / + col0 > NULL

Expected: ["-3534","0"] but got ["-3534","10"]
```


```sql
SELECT - CAST ( NULL AS INTEGER ) + + + 36 + - - col1 FROM tab0 cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + COUNT ( * ) * MIN ( DISTINCT col0 / - 73 ) FROM tab0 WHERE NOT + col0 <> NULL

Expected: ["NULL"] but got ["-123.836"]
```


```sql
SELECT ALL COUNT ( * ) AS col4 FROM tab0 AS cor0 WHERE NOT 63 / col0 IN ( 19 * + ( 7 ) )

Expected: ["10"] but got ["0"]
```


```sql
SELECT ALL - + COUNT ( * ) FROM tab0 AS cor0 WHERE NOT - 29 < NULL

Expected: ["0"] but got ["-10"]
```


```sql
SELECT + + col2 AS col0 FROM tab0 WHERE NOT col0 * col0 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - COUNT ( * ) + - COUNT ( * ) AS col1 FROM tab0 cor0 WHERE NOT NULL > NULL

Expected: ["0"] but got ["-20"]
```


```sql
SELECT DISTINCT + - 7 AS col0 FROM tab0 AS cor0 WHERE NOT col1 * - col1 BETWEEN NULL AND + 27 * - 77

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + + col2 FROM tab0 AS cor0 WHERE ( NULL ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - 3 AS col0 FROM tab0 WHERE + col1 + 36 NOT BETWEEN NULL AND + col1

Query was expected to return results (but did not) 
```


```sql
SELECT - CAST ( + COUNT ( * ) AS INTEGER ) FROM tab0 AS cor0 WHERE NOT ( 96 ) NOT BETWEEN NULL AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL - + COUNT ( * ) AS col3 FROM tab0 WHERE NOT CAST ( NULL AS INTEGER ) IS NULL

Expected: ["0"] but got ["-10"]
```


```sql
SELECT - 49 + + MIN ( - col0 ) FROM tab0 WHERE NOT ( NOT + 99 NOT BETWEEN ( - + ( + col1 ) ) AND - col4 * - 99 * - col3 )

Expected: ["-953"] but got ["NULL"]
```


```sql
SELECT + col2 AS col4 FROM tab0 WHERE ( NOT + col1 IS NULL )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col2 AS col5 FROM tab0 WHERE NOT 63 + col0 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT COUNT ( ALL - col3 ) AS col4 FROM tab0 AS cor0 WHERE CAST ( NULL AS INTEGER ) <= + ( + col0 ) OR NOT NULL IS NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT ALL - col0, col2 AS col0 FROM tab0 WHERE - 64 NOT BETWEEN NULL AND - - col0 * + - 25 + + 96

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT - CAST ( - COUNT ( * ) AS INTEGER ) FROM tab0 WHERE NOT + col4 / + col4 IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT - SUM ( - CAST ( - col4 AS INTEGER ) ) FROM tab0 WHERE NULL IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL SUM ( DISTINCT + 5 ) FROM tab0 AS cor0 WHERE NOT + 34 IN ( 60 * col4 )

Expected: ["5"] but got ["0"]
```


```sql
SELECT col2 FROM tab0 WHERE + 79 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - col3 * 12 / 43 AS col0 FROM tab0 WHERE ( - col1 - col0 ) < col0

Correct amount of values returned but hash was different than expected.
```

#### ☓ Ran 10,032 tests as _sqlite_

* 570 failed
* 94% was OK


---- ---- ---- ---- ---- ---- ----
### 186/622 [`./test/index/random/10/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/10/slt_good_1.test)

_Mimic sqlite_

```sql
SELECT col2 col5 FROM tab0 WHERE NOT + col1 * col0 - - 45 = + 75

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - 42 AS col2 FROM tab0 cor0 WHERE NOT CAST ( NULL AS INTEGER ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL - 47, + col2 FROM tab0 cor0 WHERE col5 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT CAST ( NULL AS INTEGER ) col1, + COUNT ( * ) * + 7 col2 FROM tab0 AS cor0 WHERE NULL IS NULL

Expected: ["NULL","70"] but got ["0","70"]
```


```sql
SELECT ALL - COUNT ( * ) * - - 43 AS col0 FROM tab0 WHERE NOT NULL = NULL

Expected: ["0"] but got ["-430"]
```


```sql
SELECT ALL - CAST ( NULL AS INTEGER ) AS col4 FROM tab0 AS cor0 WHERE NOT + 31 BETWEEN 90 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT 77 col0, - SUM ( ALL col4 ) AS col5 FROM tab0 AS cor0 WHERE ( NULL ) >= 80 * - - ( - col4 ) + col3

Expected: ["77","NULL"] but got ["77","0"]
```


```sql
SELECT ( 92 ) AS col5, COUNT ( * ) FROM tab0 AS cor0 WHERE NOT ( - col3 ) > ( NULL )

Expected: ["92","0"] but got ["92","10"]
```


```sql
SELECT ALL col0 FROM tab0 AS cor0 WHERE col1 * CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + col2 FROM tab0 AS cor0 WHERE NOT + col1 * + 30 * + col3 + col1 + - col4 + 17 - + + 81 * - col0 * + 56 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + + col2 FROM tab0 WHERE - col4 + col1 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - 33 FROM tab0 WHERE NOT + col0 IN ( col4 )

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT + ( - AVG ( col4 ) ) FROM tab0 WHERE NOT NULL NOT IN ( + ( - col4 ) )

Expected: ["NULL"] but got ["-373.175"]
```


```sql
SELECT col2 FROM tab0 AS cor0 WHERE NOT + ( + col1 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - + col3 * + 47 FROM tab0 cor0 WHERE NOT ( - + 46 ) * - - CAST ( NULL AS INTEGER ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + col5 FROM tab0 AS cor0 WHERE + 13 + - col3 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL CAST ( SUM ( ALL + col3 ) AS INTEGER ) FROM tab0 WHERE + - 4 > - col1

g is not defined
```


```sql
SELECT - + COUNT ( * ) FROM tab0 WHERE NOT NULL <= - col1 * - col1

Expected: ["0"] but got ["-10"]
```


```sql
SELECT + col3 col2 FROM tab0 WHERE NOT - col0 IN ( 35 + + 71 )

Query was expected to return results (but did not) 
```


```sql
SELECT - SUM ( DISTINCT - 84 ) AS col2 FROM tab0 AS cor0 WHERE NULL IN ( + col1 )

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT 67 FROM tab0 AS cor0 WHERE NOT + 89 BETWEEN NULL AND + col1 * - 35

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT + COUNT ( * ) col0 FROM tab0 cor0 WHERE NOT NULL NOT BETWEEN ( 46 ) AND + 6 * + 80

Expected: ["0"] but got ["10"]
```


```sql
SELECT col2 FROM tab0 AS cor0 WHERE - ( - col0 ) NOT IN ( col4 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + col2 col4 FROM tab0 AS cor0 WHERE NOT + 11 + CAST ( NULL AS INTEGER ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + col5 AS col0 FROM tab0 cor0 WHERE ( NOT - col0 >= + + col4 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + col2 FROM tab0 WHERE NOT - - 10 <= - + col4 - - col3

Expected: ["0","0","0","0"] but got ["hzanm","lktfw","mguub","mwyzu"]
```


```sql
SELECT ALL + + COUNT ( + col0 ) AS col2 FROM tab0 AS cor0 WHERE NOT NULL NOT IN ( + - col3 ) AND NOT NULL IS NOT NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT - COUNT ( * ) + CAST ( NULL AS INTEGER ) AS col1 FROM tab0 WHERE NULL > + + col3 / 9

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL + col5 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT 52 + - SUM ( + 30 ) FROM tab0 AS cor0 WHERE NOT NULL IS NULL

Expected: ["NULL"] but got ["52"]
```


```sql
SELECT ALL col3 AS col3 FROM tab0 AS cor0 WHERE col4 NOT BETWEEN NULL AND + - col0

Query was expected to return results (but did not) 
```


```sql
SELECT CAST ( COUNT ( col4 ) AS INTEGER ) FROM tab0 AS cor0 WHERE NOT col3 IN ( 40 / col3 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL - ( CAST ( NULL AS INTEGER ) ) FROM tab0 cor0 WHERE 51 >= + col0 * - col4

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL COUNT ( * ) FROM tab0 cor0 WHERE NOT col3 <> NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT - + 86 + - - COUNT ( * ) AS col4 FROM tab0 WHERE NOT NULL < NULL

Expected: ["-86"] but got ["-76"]
```


```sql
SELECT ALL CAST ( NULL AS INTEGER ) - - ( col3 ) * + - col0 * col0 - 9 FROM tab0 cor0 WHERE 52 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL COUNT ( * ) FROM tab0 AS cor0 WHERE NOT NULL = NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT DISTINCT 90 AS col3 FROM tab0 AS cor0 WHERE NOT - CAST ( NULL AS INTEGER ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + CAST ( 60 AS INTEGER ) AS col4 FROM tab0 WHERE + col0 + - CAST ( NULL AS INTEGER ) * ( + col1 ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT 45 AS col0, COUNT ( * ) - COUNT ( * ) col0 FROM tab0 WHERE 87 < - + col4

Expected: ["45","0"] but got ["0"]
```


```sql
SELECT DISTINCT + AVG ( - 69 ) AS col1, ( 37 ) AS col3 FROM tab0 AS cor0 WHERE NOT NULL < + 90 + - col0 + + - col0 + - col3 * - + col1

Expected: ["NULL","37"] but got ["-69","37"]
```


```sql
SELECT ALL - + col3 / + 69 AS col3 FROM tab0 AS cor0 WHERE NOT + col4 * + col4 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - 43 * MAX ( ALL - 96 * + col3 ) FROM tab0 WHERE NOT ( - col1 ) IN ( + ( 36 ) )

Expected: ["445824"] but got ["NULL"]
```


```sql
SELECT 95 * - COUNT ( * ) FROM tab0 WHERE NOT NULL < NULL

Expected: ["0"] but got ["-950"]
```


```sql
SELECT SUM ( + col3 ) + + - 2 AS col1 FROM tab0 cor0 WHERE NOT NULL IS NULL

Expected: ["NULL"] but got ["-2"]
```


```sql
SELECT + + COUNT ( * ) AS col4 FROM tab0 WHERE NOT NULL <> - 24

Expected: ["0"] but got ["10"]
```


```sql
SELECT 49 / - 21 + - + 49 AS col2 FROM tab0 WHERE - 78 / + col1 * + + col0 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + CAST ( + COUNT ( * ) AS INTEGER ) AS col2 FROM tab0 AS cor0 WHERE col1 > NULL

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT CAST ( MAX ( DISTINCT - col0 ) AS INTEGER ) col3 FROM tab0 AS cor0 WHERE NULL IS NULL

g is not defined
```


```sql
SELECT DISTINCT CAST ( NULL AS INTEGER ) AS col0 FROM tab0 cor0 WHERE NOT + 9 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL + col5 AS col4 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + 53 / 9 FROM tab0 WHERE + col4 NOT IN ( + 22 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL COUNT ( * ) FROM tab0 WHERE NOT NULL >= + ( 30 ) - col3

Expected: ["0"] but got ["10"]
```


```sql
SELECT col2 AS col5 FROM tab0 WHERE NOT - col3 BETWEEN + col1 * + 84 + 67 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + - CAST ( NULL AS INTEGER ) AS col3, 20 + - - CAST ( COUNT ( * ) AS INTEGER ) FROM tab0 WHERE NOT NULL >= - ( - 7 ) + + col1

g is not defined
```


```sql
SELECT + col5 FROM tab0 WHERE NOT col1 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - COUNT ( * ) * SUM ( DISTINCT - col4 ) FROM tab0 WHERE col0 BETWEEN + col0 AND NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + + CAST ( COUNT ( * ) AS INTEGER ) col4 FROM tab0 AS cor0 WHERE col1 IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT - SUM ( ALL - col4 ) FROM tab0 WHERE NULL < - 45

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL - CAST ( AVG ( col1 ) AS INTEGER ) + 12 AS col1 FROM tab0 AS cor0 WHERE + col3 <> NULL

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT CAST ( NULL AS INTEGER ) AS col3 FROM tab0 cor0 WHERE ( 2 ) <> col4

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT - SUM ( + 0 ) * - - 98 AS col3 FROM tab0 WHERE NULL <> 3

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT 87 FROM tab0 WHERE NOT col0 + + 52 IN ( + col1 + + 45 )

Query was expected to return results (but did not) 
```


```sql
SELECT + col2 AS col0 FROM tab0 AS cor0 WHERE NOT + 92 >= + col0 + col3 + + col3

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col5 AS col5 FROM tab0 AS cor0 WHERE 89 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - SUM ( DISTINCT - 25 ) AS col5 FROM tab0 AS cor0 WHERE NOT NULL <> NULL

Expected: ["NULL"] but got ["25"]
```


```sql
SELECT + col5 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - COUNT ( * ) col0 FROM tab0 AS cor0 WHERE NOT col0 BETWEEN NULL AND + - col1

Expected: ["-10"] but got ["0"]
```


```sql
SELECT 92 + - + SUM ( col4 ) * + COUNT ( * ) AS col4 FROM tab0 AS cor0 WHERE NULL IS NOT NULL

Expected: ["NULL"] but got ["92"]
```


```sql
SELECT DISTINCT col0 FROM tab0 AS cor0 WHERE NOT + col0 * - CAST ( NULL AS INTEGER ) + + 91 IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT COUNT ( * ) + + COUNT ( * ) / 33 FROM tab0 WHERE NOT ( NULL ) = - col4 + + 86

Expected: ["0"] but got ["10.303"]
```


```sql
SELECT col2 AS col5 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT col0 col2 FROM tab0 WHERE NOT col1 IN ( col0, + 79, col0 )

Query was expected to return results (but did not) 
```


```sql
SELECT 18, ( - COUNT ( * ) ) AS col0 FROM tab0 cor0 WHERE NOT ( NULL ) >= + + col1

Expected: ["18","0"] but got ["18","-10"]
```


```sql
SELECT + col5 FROM tab0 AS cor0 WHERE ( NULL ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + + SUM ( ALL - col1 ) AS col3 FROM tab0 AS cor0 WHERE NOT - col0 IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL CAST ( NULL AS INTEGER ) * - col1 FROM tab0 AS cor0 WHERE ( NULL ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT col3 * - + 99 FROM tab0 AS cor0 WHERE col1 NOT BETWEEN ( + col4 ) AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT col5 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT AVG ( ALL + col1 ) FROM tab0 WHERE NOT 49 >= NULL

Expected: ["NULL"] but got ["430.981"]
```


```sql
SELECT DISTINCT - - SUM ( DISTINCT - 1 ) FROM tab0 WHERE NOT NULL <> NULL

Expected: ["NULL"] but got ["-1"]
```


```sql
SELECT ALL col0 - - CAST ( NULL AS INTEGER ) + - col0 / + - 59 col1 FROM tab0 WHERE NOT - - col1 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - - col4 * CAST ( NULL AS INTEGER ), 51 AS col5 FROM tab0 AS cor0 WHERE NOT col5 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + + COUNT ( * ) FROM tab0 AS cor0 WHERE NOT NULL > - 53 / col0

Expected: ["0"] but got ["10"]
```


```sql
SELECT col3 / col0 FROM tab0 AS cor0 WHERE NOT 46 IN ( - ( ( 32 ) ) + 67 * + col3 )

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT 81 / + 10 FROM tab0 AS cor0 WHERE - col4 IS NOT NULL

Expected: ["8"] but got ["8.100"]
```

#### ☓ Ran 10,034 tests as _sqlite_

* 625 failed
* 93% was OK


---- ---- ---- ---- ---- ---- ----
### 187/622 [`./test/index/random/10/slt_good_10.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/10/slt_good_10.test)

_Mimic sqlite_

```sql
SELECT + COUNT ( * ) AS col2 FROM tab0 WHERE NOT NULL >= - col3

Expected: ["0"] but got ["10"]
```


```sql
SELECT COUNT ( * ) AS col1 FROM tab0 AS cor0 WHERE NOT NULL > + 64

Expected: ["0"] but got ["10"]
```


```sql
SELECT ALL + - ( + 76 ) FROM tab0 WHERE NOT + col4 * + + CAST ( NULL AS INTEGER ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + - 39 + + + 57 AS col5, - col3 AS col5 FROM tab0 AS cor0 WHERE ( NULL ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT COUNT ( * ) FROM tab0 WHERE ( NOT ( - col4 < NULL ) )

Expected: ["0"] but got ["10"]
```


```sql
SELECT col5 FROM tab0 WHERE ( 99 ) NOT BETWEEN ( NULL ) AND col1

Query was expected to return results (but did not) 
```


```sql
SELECT ALL col5 col4 FROM tab0 AS cor0 WHERE col0 / + + 94 NOT IN ( - col1 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - - 42 * - + 88 * - 49 AS col1 FROM tab0 WHERE NOT + col4 IN ( + 25 / 47, - 85 )

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT - - COUNT ( * ) FROM tab0 WHERE + col1 * - + col1 * + - 14 + CAST ( NULL AS INTEGER ) + - ( + col0 ) + - 75 IS NULL

Expected: ["10"] but got ["0"]
```


```sql
SELECT + CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE NOT ( - 71 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT CAST ( NULL AS INTEGER ) FROM tab0 WHERE - + col0 NOT BETWEEN + col1 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL - 59 col5, + COUNT ( * ) AS col5 FROM tab0 AS cor0 WHERE 71 / - col0 >= NULL

Expected: ["-59","0"] but got ["0"]
```


```sql
SELECT ALL + SUM ( DISTINCT - col0 ) FROM tab0 WHERE NOT col5 IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + col2 AS col5 FROM tab3 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col2 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + 73 * 54 * + + 18 AS col1 FROM tab0 WHERE CAST ( NULL AS INTEGER ) - + + 30 IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + 0 FROM tab0 AS cor0 WHERE NOT ( + 3 ) BETWEEN col1 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT AVG ( ALL 18 ) FROM tab0 WHERE NOT - 26 + + 58 * + col4 / + col4 NOT IN ( 54 )

Expected: ["NULL"] but got ["18"]
```


```sql
SELECT DISTINCT - COUNT ( * ) * 87 + - 78 / + + 54 + - 74 AS col4 FROM tab0 WHERE NOT + col3 + + + CAST ( - 29 AS INTEGER ) * + ( 53 ) = - col4

Expected: ["-945"] but got ["-945.444"]
```


```sql
SELECT ALL + col5 FROM tab0 AS cor0 WHERE NOT - col4 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT COUNT ( * ) AS col5 FROM tab0 AS cor0 WHERE NOT col4 BETWEEN col3 AND NULL

Expected: ["3"] but got ["0"]
```


```sql
SELECT DISTINCT CAST ( COUNT ( * ) AS INTEGER ) FROM tab0 AS cor0 WHERE NOT NULL IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT - COUNT ( DISTINCT + col4 ) AS col0 FROM tab0 cor0 WHERE NOT + ( - 0 ) BETWEEN + ( 83 ) AND NULL

Expected: ["-10"] but got ["0"]
```


```sql
SELECT DISTINCT - 10 AS col0, + ( col3 ) AS col0 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT CAST ( NULL AS INTEGER ) / 86 AS col1 FROM tab0 WHERE NOT ( col5 ) IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT COUNT ( * ) FROM tab0 WHERE NOT + 5 NOT BETWEEN ( - ( 77 ) ) + 23 AND + 62

Expected: ["10"] but got ["0"]
```


```sql
SELECT + col5 AS col1 FROM tab0 WHERE NOT NULL NOT IN ( 33 + + 81 ) OR ( 47 ) NOT BETWEEN 65 AND NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + col2 AS col2 FROM tab0 WHERE NOT ( + + col0 - + + col1 ) >= ( col1 )

Expected: ["0","0","0","0","0","0"] but got ["gaven","qlgja","qnpgu","xobsl","youok","yqgcu"]
```


```sql
SELECT col3 * + col0 FROM tab0 WHERE - 94 NOT BETWEEN - - col3 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + + col2 FROM tab0 AS cor0 WHERE + ( + + 73 ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - ( - col0 ) * 51 + + 54 AS col3 FROM tab0 AS cor0 WHERE CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + col5 FROM tab0 WHERE - col3 = - col3

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - ( - 24 ) + - 10 + - 36 + + col3 AS col0, col2 col1 FROM tab0 AS cor0 WHERE NOT - 1 BETWEEN + + 27 AND - - 83

Query was expected to return results (but did not) 
```


```sql
SELECT + 36 AS col4 FROM tab0 WHERE NOT 76 IN ( ( 84 ) )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL col5 AS col1 FROM tab0 WHERE col0 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL SUM ( DISTINCT col0 ) AS col5 FROM tab0 WHERE NOT NULL = NULL

Expected: ["NULL"] but got ["6681"]
```


```sql
SELECT COUNT ( * ) * + MAX ( DISTINCT + - col4 ) FROM tab0 AS cor0 WHERE NOT NULL = NULL

Expected: ["NULL"] but got ["-1396.600"]
```


```sql
SELECT DISTINCT + 12 col1 FROM tab0 WHERE NOT 28 IN ( + col0 + + + 97 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + col2 FROM tab0 AS cor0 WHERE NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + COUNT ( * ) AS col1 FROM tab0 cor0 WHERE NOT CAST ( NULL AS INTEGER ) IS NOT NULL

Expected: ["10"] but got ["0"]
```


```sql
SELECT DISTINCT col0 AS col5 FROM tab0 AS cor0 WHERE - CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT CAST ( NULL AS INTEGER ) col1 FROM tab0 WHERE NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + - SUM ( ALL col1 ) FROM tab0 WHERE + - 0 + - 45 BETWEEN 32 * + - 23 + - col3 AND NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL + col5 FROM tab0 WHERE NOT - col4 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - + col0 col1 FROM tab0 WHERE NOT ( CAST ( NULL AS INTEGER ) IS NOT NULL )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL col2 FROM tab0 AS cor0 WHERE + col3 NOT BETWEEN ( NULL ) AND 87

Query was expected to return results (but did not) 
```


```sql
SELECT ALL - + SUM ( + 59 ) AS col0 FROM tab0 WHERE NOT + 73 BETWEEN - - col4 + col3 AND NULL

Expected: ["-590"] but got ["0"]
```


```sql
SELECT + MIN ( DISTINCT + col0 ) AS col4 FROM tab0 WHERE NOT + + col3 * + col0 - - CAST ( NULL AS INTEGER ) IS NULL

Expected: ["NULL"] but got ["33"]
```


```sql
SELECT col5 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + CAST ( NULL AS INTEGER ) + COUNT ( * ) / + 41 + + 55 FROM tab0 AS cor0 WHERE ( NULL ) IS NULL

Expected: ["NULL"] but got ["55.244"]
```


```sql
SELECT + col2 FROM tab0 AS cor0 WHERE NOT + col2 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL COUNT ( * ) + 12 / - 56 FROM tab0 cor0 WHERE NOT NULL >= - 37

Expected: ["0"] but got ["9.786"]
```


```sql
SELECT ALL MIN ( col1 ) FROM tab0 WHERE NOT + 33 = NULL

Expected: ["NULL"] but got ["26.480"]
```


```sql
SELECT DISTINCT + - CAST ( COUNT ( * ) AS INTEGER ) FROM tab0 WHERE NOT NULL IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL CAST ( NULL AS INTEGER ) AS col3 FROM tab0 cor0 WHERE 0 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + - COUNT ( * ) FROM tab0 AS cor0 WHERE NOT col0 >= NULL

Expected: ["0"] but got ["-10"]
```


```sql
SELECT + ( col3 ) AS col2 FROM tab0 AS cor0 WHERE NOT ( col4 * 88 ) BETWEEN NULL AND ( - col3 * + col0 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + col2 FROM tab0 WHERE ( NULL ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - CAST ( NULL AS INTEGER ) col0 FROM tab0 AS cor0 WHERE 47 + + ( - + 61 ) * - col4 IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT 59 AS col1, COUNT ( * ) - + ( + - 28 ) AS col5 FROM tab0 AS cor0 WHERE NOT NULL < CAST ( NULL AS REAL ) - + col3 - - - 31 + - - col0

Expected: ["59","28"] but got ["59","38"]
```


```sql
SELECT + col2, col5 AS col2 FROM tab0 AS cor0 WHERE - 19 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL col2 col4 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - 28 / + ( 99 ) FROM tab0 WHERE - col1 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - 41 / COUNT ( * ) FROM tab0 WHERE NOT col1 * + col4 IS NULL

Expected: ["-4"] but got ["-4.100"]
```


```sql
SELECT + col0 AS col1 FROM tab0 WHERE NOT + - 70 * + col0 BETWEEN ( col1 * 56 ) AND ( + CAST ( + 40 AS INTEGER ) )

Query was expected to return results (but did not) 
```


```sql
SELECT + col0 AS col1 FROM tab4 WHERE NOT + - 70 * + col0 BETWEEN ( col1 * 56 ) AND ( + CAST ( + 40 AS INTEGER ) )

Query was expected to return results (but did not) 
```


```sql
SELECT + col5 FROM tab0 AS cor0 WHERE NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT COUNT ( * ) FROM tab0 AS cor0 WHERE NOT NULL = - 77

Expected: ["0"] but got ["10"]
```


```sql
SELECT - 88 + + ( - CAST ( COUNT ( * ) AS INTEGER ) ) AS col0 FROM tab0 WHERE NULL IS NULL

g is not defined
```


```sql
SELECT DISTINCT - AVG ( DISTINCT + col0 ) col3 FROM tab0 WHERE NOT NULL <= NULL

Expected: ["NULL"] but got ["-668.100"]
```


```sql
SELECT - + COUNT ( - ( col3 ) ) AS col2 FROM tab0 AS cor0 WHERE NOT NULL > - 74

Expected: ["0"] but got ["-10"]
```


```sql
SELECT + col5 FROM tab0 AS cor0 WHERE NOT + col4 / + col1 + - col4 BETWEEN + 51 AND + 88 / col1 - - col1

Query was expected to return results (but did not) 
```


```sql
SELECT + col5 AS col0 FROM tab0 AS cor0 WHERE NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + 52 / col3 FROM tab0 WHERE ( col1 ) IS NOT NULL

Expected: ["0"] but got ["0.061","0.068","0.073","0.078","0.080","0.082","0.252","0.340","0.477","0.505"]
```


```sql
SELECT 14 FROM tab0 WHERE NOT ( 97 ) BETWEEN + col3 AND col4

Query was expected to return results (but did not) 
```


```sql
SELECT - 20 * + ( SUM ( ALL col4 ) ) FROM tab0 WHERE NULL IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + col5 FROM tab0 AS cor0 WHERE ( NULL IS NULL )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL COUNT ( * ) / + 92 AS col0 FROM tab0 WHERE NOT NULL <= NULL

Expected: ["0"] but got ["0.109"]
```


```sql
SELECT ALL - col0 + col3 AS col4 FROM tab2 WHERE NOT + col0 / + col1 IN ( + - col3 )

Query was expected to return results (but did not) 
```


```sql
SELECT + ( col2 ) FROM tab0 WHERE + col1 / col3 IS NOT NULL OR NOT NULL > + col3

Correct amount of values returned but hash was different than expected.
```

#### ☓ Ran 10,034 tests as _sqlite_

* 630 failed
* 93% was OK


---- ---- ---- ---- ---- ---- ----
### 188/622 [`./test/index/random/10/slt_good_11.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/10/slt_good_11.test)

_Mimic sqlite_

```sql
SELECT + col2 AS col2 FROM tab0 WHERE NOT + + col3 + col3 BETWEEN col3 AND - col1

Query was expected to return results (but did not) 
```


```sql
SELECT col5 FROM tab0 WHERE 75 NOT BETWEEN - col1 * - - 7 AND ( - col0 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT CAST ( COUNT ( * ) AS INTEGER ) FROM tab0 WHERE NOT NULL IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT col5 AS col4 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT SUM ( ALL col4 ) FROM tab0 AS cor0 WHERE + col4 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT - COUNT ( * ) col2 FROM tab0 AS cor0 WHERE NOT NULL >= NULL

Expected: ["0"] but got ["-10"]
```


```sql
SELECT col5 FROM tab0 WHERE NOT + col4 * col1 - + 21 IN ( + ( - 26 ) )

Query was expected to return results (but did not) 
```


```sql
SELECT + col0 / 51 + - col0 FROM tab0 AS cor0 WHERE ( + col0 ) < 9 * col4

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + SUM ( + 40 ) FROM tab0 AS cor0 WHERE - col1 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL + 98, col2 FROM tab0 WHERE NOT + 56 >= col0

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT COUNT ( * ) * + COUNT ( * ) + - 11 AS col0 FROM tab0 AS cor0 WHERE NOT 97 BETWEEN NULL AND col3 * - + ( 33 ) + - col3

Expected: ["89"] but got ["-11"]
```


```sql
SELECT + col2 FROM tab0 WHERE NOT - col3 BETWEEN - 88 * 0 * ( + col3 ) AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + col2 FROM tab1 WHERE NOT - col3 BETWEEN - 88 * 0 * ( + col3 ) AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + col2 FROM tab0 cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL SUM ( ALL col0 ) * - 34 + + COUNT ( 43 ) AS col1 FROM tab0 WHERE NOT NULL < ( NULL )

Expected: ["NULL"] but got ["-225682"]
```


```sql
SELECT CAST ( NULL AS INTEGER ) - + col4 / 72 FROM tab0 AS cor0 WHERE NOT 92 NOT BETWEEN col0 / - col4 AND col4

Query was expected to return results (but did not) 
```


```sql
SELECT COUNT ( * ) / + 71 col1 FROM tab0 WHERE 65 IS NOT NULL

Expected: ["0"] but got ["0.141"]
```


```sql
SELECT + col2 col3 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT col0 AS col2, + col3 AS col0 FROM tab0 WHERE NOT - ( + col1 ) IN ( + col4 )

Query was expected to return results (but did not) 
```


```sql
SELECT CAST ( NULL AS INTEGER ), col2 AS col2 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + MIN ( ALL col1 ) FROM tab0 AS cor0 WHERE NOT - col0 <> NULL

Expected: ["NULL"] but got ["112.750"]
```


```sql
SELECT ALL 72 * + + AVG ( col3 ) FROM tab0 WHERE NOT NULL NOT IN ( col1 + - + 63, 59, + 50 )

Expected: ["NULL"] but got ["39333.600"]
```


```sql
SELECT - COUNT ( * ) + 36 AS col4 FROM tab0 WHERE NOT NULL NOT IN ( CAST ( ( - col1 ) AS INTEGER ) )

Expected: ["36"] but got ["26"]
```


```sql
SELECT 30 + - 90 AS col3 FROM tab0 WHERE NOT + col3 IN ( col4 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL AVG ( ALL 51 ) FROM tab0 WHERE NOT NULL < col1 * - 64

Expected: ["NULL"] but got ["51"]
```


```sql
SELECT - col1 * CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - COUNT ( * ) + - - CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE NULL IN ( col0 )

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + + 28, 15 - + MAX ( ALL + - col1 ) FROM tab0 WHERE col3 IS NOT NULL

Expected: ["28","127"] but got ["28","127.750"]
```


```sql
SELECT - CAST ( NULL AS INTEGER ) FROM tab0 WHERE NOT - - col4 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT COUNT ( * ) FROM tab4 WHERE NOT - + 20 NOT BETWEEN - - col3 + + col1 * - ( + col0 ) AND 76

Expected: ["10"] but got ["0"]
```


```sql
SELECT col2 AS col0 FROM tab0 AS cor0 WHERE NOT + col3 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + 86 + - 47 * col0 AS col2 FROM tab0 AS cor0 WHERE col0 NOT BETWEEN NULL AND - 33

Query was expected to return results (but did not) 
```


```sql
SELECT ALL SUM ( DISTINCT col1 ) FROM tab0 WHERE NOT - 45 NOT IN ( 26 )

Expected: ["NULL"] but got ["4985.050"]
```


```sql
SELECT DISTINCT col0 / col3 FROM tab0 WHERE col0 <> + col0 * col4

Expected: ["0","1","3","5"] but got ["0.861","0.861","0.905","0.931","0.982","1.217","1.394","1.698","3.617","5.459"]
```


```sql
SELECT ALL - col0 + - CAST ( NULL AS INTEGER ) FROM tab0 WHERE 4 <= col1

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col0 col0 FROM tab0 AS cor0 WHERE NOT + CAST ( NULL AS INTEGER ) IS NOT NULL AND ( - col0 ) NOT BETWEEN NULL AND - col3

Query was expected to return results (but did not) 
```


```sql
SELECT 11 / CAST ( 24 AS INTEGER ) AS col2 FROM tab0 WHERE NOT ( + 97 ) * col4 = ( 49 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - 90 * - - COUNT ( DISTINCT + - 78 ) FROM tab0 WHERE NOT CAST ( NULL AS INTEGER ) + - + 26 IS NULL

Expected: ["0"] but got ["-90"]
```


```sql
SELECT + col2 AS col0, + ( 3 ) FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - SUM ( ALL col1 ) * + 79 + - COUNT ( ALL + 58 ) AS col2 FROM tab0 AS cor0 WHERE NOT - col4 + - 39 IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + COUNT ( * ) AS col4, 7 AS col4 FROM tab0 WHERE NOT NULL >= + col1

Expected: ["0","7"] but got ["7"]
```


```sql
SELECT DISTINCT - SUM ( ALL 15 ) FROM tab0 WHERE NOT 68 <= col1

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT - 78 AS col2, COUNT ( * ) AS col2 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Expected: ["-78","10"] but got ["10"]
```


```sql
SELECT DISTINCT + 51 + col3 * + col0 FROM tab0 WHERE col4 NOT BETWEEN NULL AND - 44 + - + ( + col4 )

Query was expected to return results (but did not) 
```


```sql
SELECT col2 FROM tab0 WHERE + col0 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + col5, col5 FROM tab0 WHERE ( col0 IS NOT NULL ) OR NOT NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ( - - 48 ) * - COUNT ( * ) AS col1 FROM tab0 AS cor0 WHERE NOT NULL < NULL

Expected: ["0"] but got ["-480"]
```


```sql
SELECT col2 col5 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + 34, SUM ( ALL - 11 ) * + - 83 AS col4 FROM tab0 AS cor0 WHERE NOT ( NULL ) IS NULL

Expected: ["34","NULL"] but got ["34","0"]
```


```sql
SELECT col2 FROM tab0 WHERE NOT col3 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT MAX ( DISTINCT col3 ) AS col0 FROM tab0 AS cor0 WHERE NOT 31 * + - col1 BETWEEN ( col4 + + col3 + - col4 ) AND + 34 * col1

Expected: ["938"] but got ["NULL"]
```


```sql
SELECT + + 22 FROM tab0 WHERE NOT - col3 BETWEEN - + col4 AND + 89

Expected: ["22","22","22","22","22","22"] but got ["22","22","22","22","22","22","22","22","22","22"]
```


```sql
SELECT DISTINCT COUNT ( * ) col1 FROM tab0 AS cor0 WHERE NOT NULL <= 76

Expected: ["0"] but got ["10"]
```


```sql
SELECT 75 / 7 FROM tab0 cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL col2 FROM tab0 AS cor0 WHERE NOT 73 BETWEEN NULL AND + - col0 + col4

Query was expected to return results (but did not) 
```


```sql
SELECT + + col2 AS col5 FROM tab0 WHERE NOT col0 BETWEEN + col0 AND col3

Query was expected to return results (but did not) 
```


```sql
SELECT col5 FROM tab0 AS cor0 WHERE col2 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT COUNT ( * ) AS col1 FROM tab0 WHERE NOT col0 NOT IN ( 2 )

Expected: ["0"] but got ["10"]
```


```sql
SELECT SUM ( DISTINCT + col1 ) FROM tab0 AS cor0 WHERE NOT NULL NOT IN ( 10 )

Expected: ["NULL"] but got ["4985.050"]
```


```sql
SELECT ALL col5 FROM tab0 AS cor0 WHERE ( 91 ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + MAX ( - + col0 ) AS col5 FROM tab0 AS cor0 WHERE col0 + - CAST ( NULL AS REAL ) IS NULL

Expected: ["-333"] but got ["NULL"]
```


```sql
SELECT CAST ( - COUNT ( * ) AS INTEGER ) + - 21 AS col1 FROM tab0 AS cor0 WHERE 43 * + - CAST ( NULL AS INTEGER ) IS NOT NULL

g is not defined
```


```sql
SELECT DISTINCT - COUNT ( * ) AS col1 FROM tab0 AS cor0 WHERE NOT NULL <= NULL

Expected: ["0"] but got ["-10"]
```


```sql
SELECT + ( + - col3 ) + + col3 FROM tab0 AS cor0 WHERE NOT + 44 + + 94 * - col4 IN ( col0, - 94 )

Query was expected to return results (but did not) 
```


```sql
SELECT - SUM ( DISTINCT + col3 ) AS col4 FROM tab0 WHERE + CAST ( - 83 AS INTEGER ) / + col4 * - col1 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT - MAX ( ALL + + 25 ) FROM tab0 AS cor0 WHERE + col1 NOT BETWEEN NULL AND + + col0

Expected: ["-25"] but got ["NULL"]
```


```sql
SELECT - 22 + + CAST ( NULL AS INTEGER ) FROM tab0 cor0 WHERE NOT 17 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + - AVG ( ALL - - ( + col1 ) ) col5 FROM tab0 WHERE ( NOT + ( + col1 ) >= NULL )

Expected: ["NULL"] but got ["-498.505"]
```


```sql
SELECT DISTINCT 57 / - 16 FROM tab0 WHERE NOT NULL IS NOT NULL

Expected: ["-3"] but got ["-3.563"]
```


```sql
SELECT ALL - 39 * - SUM ( - col3 ) * - 75 AS col0 FROM tab0 AS cor0 WHERE NULL BETWEEN NULL AND NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT - COUNT ( * ), 64 FROM tab0 WHERE NOT NULL IS NOT NULL

Expected: ["-10","64"] but got ["64","-10"]
```


```sql
SELECT 90 FROM tab0 WHERE NOT + + col4 BETWEEN 0 + + col3 - col4 * + 94 AND - - 86 * - 66 + - col4 * + col3 + 88 / 58

Query was expected to return results (but did not) 
```


```sql
SELECT ALL col5 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col2 FROM tab0 WHERE col0 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT CAST ( NULL AS INTEGER ) * COUNT ( * ) AS col3 FROM tab0 WHERE NOT ( ( ( col0 ) ) * - 46 ) > col0 - + 33

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL + col3 / - col0 FROM tab0 AS cor0 WHERE col0 NOT BETWEEN NULL AND ( - 39 )

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT - col3 + + col3 AS col4 FROM tab0 WHERE NOT + 59 * col3 - - - col1 IN ( 59, ( + - col1 ) )

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT 16 + + - COUNT ( * ) AS col1 FROM tab0 AS cor0 WHERE NOT col3 BETWEEN + 50 + - 8 AND + + 12

Expected: ["6"] but got ["16"]
```


```sql
SELECT col5 AS col3 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL AVG ( + 72 ) AS col5 FROM tab0 WHERE NOT ( + col4 + col4 ) NOT IN ( + 89 )

Expected: ["NULL"] but got ["72"]
```


```sql
SELECT - ( - COUNT ( * ) ) / + 3 AS col4 FROM tab0 AS cor0 WHERE NOT ( NULL ) IS NOT NULL

Expected: ["3"] but got ["3.333"]
```


```sql
SELECT col2 AS col3 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL col3, - col3 AS col1 FROM tab0 AS cor0 WHERE NOT ( 13 / + 93 ) BETWEEN ( + col1 ) AND NULL

Query was expected to return results (but did not) 
```

#### ☓ Ran 10,031 tests as _sqlite_

* 605 failed
* 93% was OK


---- ---- ---- ---- ---- ---- ----
### 189/622 [`./test/index/random/10/slt_good_12.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/10/slt_good_12.test)

_Mimic sqlite_

```sql
SELECT - + ( - col3 ) * - + col3 FROM tab0 AS cor0 WHERE NOT + 20 BETWEEN col4 * 57 AND - + col4 + col1

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + - CAST ( NULL AS INTEGER ) FROM tab0 cor0 WHERE col4 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - COUNT ( ALL - col4 ) * - 71 + - 0 FROM tab0 AS cor0 WHERE NOT + 97 < NULL

Expected: ["0"] but got ["710"]
```


```sql
SELECT col3 AS col4 FROM tab0 cor0 WHERE NOT - 12 - + col1 BETWEEN col1 AND + 40

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + CAST ( NULL AS INTEGER ) AS col1 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - 36 / COUNT ( * ) FROM tab0 cor0 WHERE ( NULL ) IS NULL

Expected: ["-3"] but got ["-3.600"]
```


```sql
SELECT ALL SUM ( + 23 ) FROM tab0 WHERE NULL IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL col2 AS col2 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + 47 FROM tab0 WHERE col3 * - CAST ( NULL AS INTEGER ) + + + 15 + + col0 IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL - col3, ( + col0 ) FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col3 - + col0 AS col1 FROM tab0 AS cor0 WHERE NOT ( + col1 ) IN ( + 33 + 45 )

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT - COUNT ( * ) FROM tab0 WHERE NOT 60 BETWEEN ( + + col0 ) AND NULL

Expected: ["-10"] but got ["0"]
```


```sql
SELECT DISTINCT - COUNT ( * ) FROM tab1 WHERE NOT 60 BETWEEN ( + + col0 ) AND NULL

Expected: ["-10"] but got ["0"]
```


```sql
SELECT ALL - - 18 / ( - 96 ) FROM tab0 AS cor0 WHERE - col0 * - col4 * 17 / - col3 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - SUM ( - ( ( - - ( - - 66 ) ) ) ) FROM tab0 WHERE NOT ( col5 ) IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT + CAST ( NULL AS INTEGER ) AS col3 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL + ( + + col2 ) FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col1 * CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE NOT col3 < + 71

Expected: ["NULL","NULL","NULL","NULL","NULL","NULL","NULL","NULL"] but got ["0","0","0","0","0","0","0","0"]
```


```sql
SELECT ALL col2 AS col3 FROM tab0 WHERE NOT ( + col0 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - COUNT ( * ) col1 FROM tab0 WHERE NOT ( + col1 - - col4 ) > NULL

Expected: ["0"] but got ["-10"]
```


```sql
SELECT + + col2, col3 AS col4 FROM tab0 AS cor0 WHERE NOT col0 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - col0 - + 9 AS col5 FROM tab0 WHERE - col3 NOT BETWEEN NULL AND + - 29

Query was expected to return results (but did not) 
```


```sql
SELECT + col3 / - - col0 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL COUNT ( * ) + 19 AS col0 FROM tab0 AS cor0 WHERE NOT NULL > NULL

Expected: ["19"] but got ["29"]
```


```sql
SELECT col5 AS col4 FROM tab0 AS cor0 WHERE col0 NOT BETWEEN ( NULL ) AND ( + col1 )

Query was expected to return results (but did not) 
```


```sql
SELECT + ( + col2 ) AS col2 FROM tab0 WHERE NOT - col0 * 68 + 92 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - SUM ( DISTINCT col3 ) - - COUNT ( * ) / 17 AS col3 FROM tab0 AS cor0 WHERE NOT ( + CAST ( - + 69 AS INTEGER ) ) IN ( col3 )

Expected: ["-3760"] but got ["0"]
```


```sql
SELECT ( 31 ) + + col0 FROM tab0 AS cor0 WHERE NOT + 40 IN ( + - 4, + 29 )

Query was expected to return results (but did not) 
```


```sql
SELECT col0, col5 AS col4 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE - 26 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col5 FROM tab0 AS cor0 WHERE ( + ( + + col4 ) / - - col4 * + - col4 + - + 78 + - col4 ) NOT BETWEEN col1 * + 4 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL CAST ( NULL AS INTEGER ) FROM tab0 WHERE 47 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + col5 AS col3 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - COUNT ( * ) FROM tab0 WHERE NOT + col3 * + - 76 IN ( - - col4 * + col1 - + col1 )

Expected: ["-10"] but got ["0"]
```


```sql
SELECT ALL + MIN ( ALL col0 ) + + CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Expected: ["NULL"] but got ["95"]
```


```sql
SELECT ALL col2 AS col3 FROM tab0 WHERE ( CAST ( NULL AS INTEGER ) * col4 ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL 93, CAST ( NULL AS INTEGER ) / - col3 AS col5 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - 18 * + + MAX ( - + CAST ( NULL AS INTEGER ) ) FROM tab0, tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL + col5 FROM tab0 AS cor0 WHERE NOT col1 BETWEEN col4 AND - col1

Query was expected to return results (but did not) 
```


```sql
SELECT ALL COUNT ( * ) - + MAX ( ALL - + 62 ) AS col3 FROM tab0 AS cor0 WHERE ( ( NOT ( NULL ) < - col1 ) )

Expected: ["NULL"] but got ["72"]
```


```sql
SELECT ALL - 4 * ( - 50 ) * CAST ( NULL AS INTEGER ) * + col4 AS col2 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - 75, - col3 / 72 AS col0 FROM tab0 AS cor0 WHERE NOT - col4 BETWEEN - 47 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT 14, col5 AS col4 FROM tab0 AS cor0 WHERE 94 + col0 + + 95 - + col0 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - COUNT ( * ) / 29 FROM tab0 WHERE col1 - col4 NOT IN ( col1 )

Expected: ["0"] but got ["-0.345"]
```


```sql
SELECT - COUNT ( * ) FROM tab0 WHERE NOT NULL NOT IN ( - + col0 )

Expected: ["0"] but got ["-10"]
```


```sql
SELECT ALL - 70 AS col4, col5 AS col0 FROM tab0 cor0 WHERE NOT 25 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT AVG ( 0 ) / 81 AS col0 FROM tab0 AS cor0 WHERE NOT NULL <= NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL + col2 FROM tab0 WHERE NOT + 32 IN ( - 94 / + - col0 )

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT - + COUNT ( * ) AS col1 FROM tab0 AS cor0 WHERE NOT + 42 < NULL

Expected: ["0"] but got ["-10"]
```


```sql
SELECT col2 AS col2 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - AVG ( + - 72 ) / + 2 FROM tab0 WHERE NOT 54 <= NULL

Expected: ["NULL"] but got ["36"]
```


```sql
SELECT + - COUNT ( * ) + - - COUNT ( ALL + + col3 ) AS col2, + CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE ( NULL ) IS NULL

Expected: ["0","NULL"] but got ["0","0"]
```


```sql
SELECT ALL + col5 FROM tab0 WHERE ( + col2 ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + 87 / - COUNT ( * ) AS col1 FROM tab0 AS cor0 WHERE NOT + 25 IS NULL

Expected: ["-8"] but got ["-8.700"]
```


```sql
SELECT DISTINCT CAST ( - SUM ( DISTINCT col4 ) AS INTEGER ) AS col5 FROM tab0 AS cor0 WHERE NOT NULL IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + col4 * + CAST ( NULL AS INTEGER ) * + col0 AS col2 FROM tab0 AS cor0 WHERE NOT - 63 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT COUNT ( * ) + - CAST ( NULL AS INTEGER ), + 66 AS col4 FROM tab0 cor0 WHERE ( 34 ) IS NULL

Expected: ["NULL","66"] but got ["0","66"]
```


```sql
SELECT col0 AS col4 FROM tab0 WHERE NOT - col0 NOT BETWEEN - col0 AND 65

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + col2 AS col2 FROM tab0 AS cor0 WHERE NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT ( - ( SUM ( DISTINCT - col3 ) ) ) AS col0 FROM tab0 AS cor0 WHERE NULL <= 91

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT CAST ( CAST ( NULL AS REAL ) AS INTEGER ) FROM tab0 WHERE NOT col4 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - COUNT ( * ) FROM tab0 WHERE NOT ( - 13 * - col3 ) NOT IN ( col3 + col1 )

Expected: ["0"] but got ["-10"]
```


```sql
SELECT ALL + col5 AS col4 FROM tab0 AS cor0 WHERE NOT ( + col4 * - 66 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + SUM ( CAST ( NULL AS INTEGER ) ) AS col1 FROM tab0 AS cor0 WHERE NOT ( ( NULL ) < NULL ) OR NOT NULL BETWEEN - 29 * col4 AND col4 / 35

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT - CAST ( NULL AS INTEGER ) + + - col1 AS col5 FROM tab0 AS cor0 WHERE + col0 IS NOT NULL

Expected: ["NULL"] but got ["-105.400","-147.220","-166.760","-236.870","-416.670","-517.400","-567.310","-612.530","-959.880","-983.400"]
```


```sql
SELECT + COUNT ( * ) FROM tab0 AS cor0 WHERE NOT - 65 <> NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT + col2 AS col3 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + - SUM ( DISTINCT col1 ) col2 FROM tab0 AS cor0 WHERE - CAST ( col4 AS INTEGER ) BETWEEN + + col0 + - CAST ( NULL AS INTEGER ) AND 8

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL + col2 AS col4 FROM tab0 WHERE NOT ( 28 ) BETWEEN col0 / - col1 + - - 88 AND 90

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT - COUNT ( * ) FROM tab0 WHERE + 95 * - CAST ( NULL AS INTEGER ) IS NULL

Expected: ["-10"] but got ["0"]
```


```sql
SELECT + ( 25 ) * SUM ( ALL 53 ) AS col0 FROM tab0 WHERE NOT + col3 NOT BETWEEN NULL AND NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT SUM ( ALL - col3 ) AS col3 FROM tab0 AS cor0 WHERE NOT 9 IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL + col5 FROM tab0 WHERE 60 < + 19 + col0

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - CAST ( - 47 AS INTEGER ) / COUNT ( * ) AS col0 FROM tab0 WHERE NOT NULL IS NOT NULL

Expected: ["4"] but got ["4.700"]
```


```sql
SELECT + col5 AS col4 FROM tab0 WHERE NOT - 72 * - - col0 >= + 1

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + SUM ( DISTINCT + col3 ) AS col5 FROM tab0 WHERE ( - CAST ( - CAST ( 61 AS INTEGER ) AS INTEGER ) ) IS NULL

Expected: ["NULL"] but got ["0"]
```

#### ☓ Ran 10,033 tests as _sqlite_

* 630 failed
* 93% was OK


---- ---- ---- ---- ---- ---- ----
### 190/622 [`./test/index/random/10/slt_good_13.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/10/slt_good_13.test)

_Mimic sqlite_

```sql
SELECT COUNT ( * ) AS col1, 28 FROM tab0 AS cor0 WHERE NULL IS NOT NULL

Expected: ["0","28"] but got ["28","0"]
```


```sql
SELECT - - CAST ( NULL AS INTEGER ) + col0 * 46 AS col2 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + - CAST ( + ( - COUNT ( * ) ) AS INTEGER ) AS col4 FROM tab0 WHERE NOT NULL NOT BETWEEN 96 * + 33 / - 1 + 95 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + ( SUM ( DISTINCT + col3 ) ) AS col2 FROM tab0 AS cor0 WHERE 6 / + col3 * + - ( - + 47 ) IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL + CAST ( NULL AS INTEGER ) AS col5 FROM tab0 AS cor0 WHERE NOT ( NOT + 36 >= - col4 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - SUM ( CAST ( NULL AS INTEGER ) ) FROM tab0 WHERE - col4 <= - + col3

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT + COUNT ( * ) FROM tab0 WHERE NOT ( NULL ) <= - 95 OR NULL BETWEEN NULL AND col0

Expected: ["0"] but got ["10"]
```


```sql
SELECT ALL - col3 + + - col3 FROM tab0 WHERE NOT + col0 BETWEEN col3 AND + col3

Query was expected to return results (but did not) 
```


```sql
SELECT + col2 FROM tab0 AS cor0 WHERE NOT col0 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + - 58 FROM tab0 WHERE - col4 NOT BETWEEN - - col0 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT col5 AS col0 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + ( - CAST ( NULL AS REAL ) ) FROM tab0 WHERE + 12 * + CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + - ( COUNT ( col3 ) ) AS col0 FROM tab0 AS cor0 WHERE NOT NULL >= ( NULL )

Expected: ["0"] but got ["-10"]
```


```sql
SELECT + COUNT ( * ) * - 4, 57 / + - 91 + 56 FROM tab0, tab0 AS cor0 WHERE ( NULL ) IS NULL

Expected: ["-400","56"] but got ["-400","55.374"]
```


```sql
SELECT ALL - MAX ( ALL + 23 ) col1 FROM tab0 WHERE NOT - 37 = NULL

Expected: ["NULL"] but got ["-23"]
```


```sql
SELECT ALL + col5 AS col2 FROM tab0 WHERE NOT - ( - ( col3 ) ) NOT IN ( + col3, - 47 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col0 * + col0 + CAST ( NULL AS INTEGER ) col1 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL COUNT ( * ) FROM tab0 AS cor0 WHERE NOT NULL >= NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT DISTINCT AVG ( - col3 ) AS col3 FROM tab0 WHERE NOT NULL = ( + 90 )

Expected: ["NULL"] but got ["-607.300"]
```


```sql
SELECT DISTINCT - SUM ( 16 ) FROM tab0 WHERE + col2 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col5 AS col3 FROM tab0 WHERE ( col4 ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col2 AS col5 FROM tab0 cor0 WHERE NOT NULL IS NULL OR NOT 56 + - CAST ( NULL AS INTEGER ) * - 9 IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + 98 AS col3, col0 AS col3 FROM tab0 cor0 WHERE + 24 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - SUM ( ALL - col4 ) AS col2 FROM tab0 AS cor0 WHERE ( NULL ) NOT IN ( - + 7 / + 32 )

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + SUM ( + col4 ) AS col3 FROM tab0 WHERE - - col4 <= 48

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT COUNT ( * ) FROM tab0 WHERE NOT col4 + - CAST ( NULL AS INTEGER ) <> NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT + + col5 AS col3 FROM tab0 AS cor0 WHERE NOT col0 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + MAX ( ( col3 ) ) / - - 2 - - - 2 AS col5 FROM tab0 WHERE NOT + col0 IN ( - col1, col3 + 57 )

Expected: ["458"] but got ["NULL"]
```


```sql
SELECT col2 AS col3 FROM tab0 WHERE col0 + - 68 >= ( - col0 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - COUNT ( DISTINCT - 92 ) FROM tab0 AS cor0 WHERE NOT col1 = NULL

Expected: ["0"] but got ["-1"]
```


```sql
SELECT ALL 7 AS col5 FROM tab0 WHERE NOT + col0 IN ( col1 - - 89 * ( - col3 ) )

Query was expected to return results (but did not) 
```


```sql
SELECT MIN ( ALL - col3 ) AS col1 FROM tab0 WHERE NOT NULL <> ( NULL )

Expected: ["NULL"] but got ["-921"]
```


```sql
SELECT ALL + COUNT ( * ) AS col4 FROM tab0 WHERE NOT - + 60 / - CAST ( NULL AS REAL ) * - 71 = col4 * - 79 - col3

Expected: ["0"] but got ["10"]
```


```sql
SELECT DISTINCT - 72 * + CAST ( + MIN ( col4 ) AS INTEGER ) + + 24 FROM tab0 WHERE - col4 - CAST ( NULL AS INTEGER ) BETWEEN - ( - col4 ) AND ( NULL )

Query was expected to return results (but did not) 
```


```sql
SELECT + col2 AS col0 FROM tab0 WHERE NOT + + col1 = + + col3

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + SUM ( ALL + 77 ), - COUNT ( * ) AS col5 FROM tab0 AS cor0 WHERE NOT ( + + 26 IS NOT NULL )

Expected: ["NULL","0"] but got ["0","0"]
```


```sql
SELECT ALL col5 AS col4 FROM tab0 cor0 WHERE NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + CAST ( - + COUNT ( * ) AS INTEGER ) FROM tab0 AS cor0 WHERE ( NOT NULL NOT BETWEEN NULL AND ( + - ( col3 ) ) )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + CAST ( NULL AS INTEGER ) AS col3 FROM tab0 AS cor0 WHERE NOT col5 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT COUNT ( * ) FROM tab0 WHERE NOT NULL <> - 10

Expected: ["0"] but got ["10"]
```


```sql
SELECT + col2 FROM tab0 WHERE - 30 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + col0 * - CAST ( NULL AS INTEGER ) FROM tab0 WHERE NOT ( NOT NULL IS NULL )

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + 91 col1 FROM tab0 WHERE NOT - CAST ( NULL AS INTEGER ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + col5 AS col3 FROM tab0 WHERE col5 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT CAST ( NULL AS INTEGER ) * - - COUNT ( ALL - - 30 ) AS col0 FROM tab0 WHERE NULL BETWEEN + ( col0 ) - 21 + + col0 AND + col0 + 83

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col2, 99 col3 FROM tab0 WHERE NOT col0 < + ( + col4 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col4 AS col0 FROM tab0 WHERE ( 52 ) NOT BETWEEN 67 / + col1 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT MAX ( ALL + col1 ) AS col5 FROM tab0 AS cor0 WHERE NOT - col4 * col4 > NULL

Expected: ["NULL"] but got ["956.140"]
```


```sql
SELECT col5 AS col3 FROM tab0 WHERE - - 33 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - - 73, - SUM ( 59 ) * - 93 AS col3 FROM tab0 WHERE NOT - col4 IS NOT NULL

Expected: ["73","NULL"] but got ["73","0"]
```


```sql
SELECT - + COUNT ( * ) col4 FROM tab0 WHERE NOT - - col1 <= NULL

Expected: ["0"] but got ["-10"]
```


```sql
SELECT CAST ( NULL AS INTEGER ) * col0 FROM tab0 WHERE NOT col0 - col1 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT 22 * SUM ( + col3 ) AS col1 FROM tab0 WHERE NOT ( - col3 ) + col3 IN ( + 98 )

Expected: ["133606"] but got ["0"]
```


```sql
SELECT ALL + 80 AS col3 FROM tab0 cor0 WHERE ( CAST ( NULL AS INTEGER ) ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT - 95 FROM tab0 WHERE NOT + col0 NOT BETWEEN + - 9 AND ( + col1 + + 55 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + col5 FROM tab0 WHERE - - 33 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + COUNT ( ALL + 67 ) FROM tab0 AS cor0 WHERE NOT col3 IN ( - col3, - 36 + ( + + ( - col1 ) ) - col1 )

Expected: ["10"] but got ["0"]
```


```sql
SELECT ALL + - CAST ( NULL AS INTEGER ) AS col2 FROM tab0 WHERE col4 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - + col0 AS col4 FROM tab0 AS cor0 WHERE col1 * + + CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT - CAST ( NULL AS INTEGER ) AS col1 FROM tab0 AS cor0 WHERE + 88 IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT - COUNT ( * ) * 86 AS col4 FROM tab0 cor0 WHERE NOT ( NULL ) >= - + col0

Expected: ["0"] but got ["-860"]
```


```sql
SELECT ALL + col2 col4 FROM tab0 WHERE + - 47 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL COUNT ( * ) + - 9 + + CAST ( NULL AS INTEGER ) col1 FROM tab0 WHERE NULL IS NULL

Expected: ["NULL"] but got ["1"]
```


```sql
SELECT + col5 col3 FROM tab0 WHERE + col1 NOT BETWEEN - 96 AND col0

Expected: ["0","0","0","0","0","0"] but got ["hbwys","kxrzu","qbdwp","vruch","xarlb","ybarm"]
```


```sql
SELECT DISTINCT + 31 FROM tab0 AS cor0 WHERE NOT + col3 + - 33 - - + 99 BETWEEN - col3 AND - 22

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + ( CAST ( NULL AS INTEGER ) ) AS col0, + col2 AS col1 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT 53 AS col0 FROM tab0 AS cor0 WHERE CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + col3 / col0 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - CAST ( NULL AS INTEGER ) FROM tab0 WHERE NOT ( col0 ) BETWEEN NULL AND + 19

Query was expected to return results (but did not) 
```


```sql
SELECT col5 FROM tab0 AS cor0 WHERE col0 + ( col1 ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT COUNT ( * ) AS col1 FROM tab0 AS cor0 WHERE NOT NULL > NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT DISTINCT SUM ( + col4 ) + - 40 FROM tab0 WHERE NULL <> NULL

Expected: ["NULL"] but got ["-40"]
```


```sql
SELECT - - col3 FROM tab0 AS cor0 WHERE CAST ( + + col3 AS INTEGER ) NOT BETWEEN NULL AND + 79

Query was expected to return results (but did not) 
```


```sql
SELECT - COUNT ( * ) + - + 17 AS col5 FROM tab0 cor0 WHERE NOT ( + 20 NOT BETWEEN - col1 AND NULL )

Expected: ["-17"] but got ["-27"]
```


```sql
SELECT col5 AS col2 FROM tab0 WHERE + col3 + + 44 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + SUM ( ALL CAST ( NULL AS INTEGER ) ) AS col2 FROM tab0 AS cor0 WHERE + col0 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + CAST ( + MIN ( - col0 ) AS INTEGER ) FROM tab0 AS cor0 WHERE ( NULL ) NOT BETWEEN ( + ( col0 ) ) AND ( ( 31 ) )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL col5 AS col4 FROM tab0 WHERE - CAST ( + col3 AS INTEGER ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - + CAST ( NULL AS INTEGER ) FROM tab0 WHERE - + col4 + - col1 / + col0 IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + - col3 FROM tab0 WHERE NOT + col4 BETWEEN 22 + col3 + - col3 * + col1 + - + 66 AND + + col3

Expected: ["-240","-588","-597"] but got ["-305","-532","-554","-588","-597","-681","-752","-903","-921"]
```


```sql
SELECT DISTINCT + 64 * - - MAX ( + 95 ) AS col4 FROM tab0 AS cor0 WHERE CAST ( NULL AS INTEGER ) IS NULL

Expected: ["6080"] but got ["NULL"]
```


```sql
SELECT DISTINCT - CAST ( - + COUNT ( * ) AS INTEGER ) AS col2 FROM tab0 WHERE NOT + col1 IS NULL

g is not defined
```


```sql
SELECT - + COUNT ( * ) AS col0, 19 FROM tab0 WHERE NOT NULL IS NULL

Expected: ["0","19"] but got ["19","0"]
```


```sql
SELECT + col5 col1 FROM tab0 WHERE NOT - ( col1 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col5 AS col3 FROM tab0 WHERE NOT ( ( + 45 ) BETWEEN NULL AND col1 )

Expected: ["0"] but got ["hbwys","kxrzu","lkyfk","pavon","pfxqp","qbdwp","vruch","xarlb","ybarm","ziuqv"]
```


```sql
SELECT DISTINCT - ( - ( - + CAST ( NULL AS INTEGER ) ) ), CAST ( NULL AS INTEGER ) + + 80 AS col1 FROM tab0 AS cor0 WHERE NULL IS NULL

Expected: ["NULL","NULL"] but got ["0","80"]
```


```sql
SELECT ALL CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE NOT - col4 * col0 BETWEEN - col3 AND CAST ( NULL AS REAL ) * col4

Query was expected to return results (but did not) 
```


```sql
SELECT - + 84 / 77 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col3 / 53 AS col0 FROM tab0 AS cor0 WHERE + col2 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + ( + col0 ) FROM tab0 WHERE NOT + col1 * - 14 + - col3 + + 16 IN ( ( + 56 ) / + col1 )

Query was expected to return results (but did not) 
```

#### ☓ Ran 10,032 tests as _sqlite_

* 700 failed
* 93% was OK


---- ---- ---- ---- ---- ---- ----
### 191/622 [`./test/index/random/10/slt_good_14.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/10/slt_good_14.test)

_Mimic sqlite_

```sql
SELECT - col3, + CAST ( NULL AS INTEGER ) FROM tab0 WHERE + - 98 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE ( - - col1 - + - col3 IS NOT NULL )

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT - + ( + ( - ( ( - COUNT ( * ) ) ) ) ) FROM tab0 AS cor0 WHERE NOT + col0 = NULL

Expected: ["0"] but got ["-10"]
```


```sql
SELECT DISTINCT + SUM ( DISTINCT - 53 ) AS col2 FROM tab0 WHERE NOT + 41 * - - ( - 70 ) <= - ( - col0 )

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col2 AS col4 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - COUNT ( * ) FROM tab0 WHERE 43 * CAST ( NULL AS INTEGER ) IS NULL

Expected: ["-10"] but got ["0"]
```


```sql
SELECT col2 FROM tab0 WHERE + col1 <> ( col3 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT CAST ( NULL AS INTEGER ) + col4 AS col0 FROM tab0 WHERE NOT + ( col3 ) = ( - 49 )

Expected: ["NULL"] but got ["162.410","169.580","242.880","517.380","539.960","541.240","548.430","629.360","842.490","88.940"]
```


```sql
SELECT + 10, + 54 FROM tab0 AS cor0 WHERE NOT 66 IN ( - ( + - col3 ) )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + ( - SUM ( ALL + 68 ) ) AS col1, ( 21 ) FROM tab1 WHERE ( NOT NULL BETWEEN 82 AND NULL )

Expected: ["NULL","21"] but got ["0","21"]
```


```sql
SELECT ALL CAST ( NULL AS INTEGER ) AS col0 FROM tab0 WHERE NOT - col4 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + + COUNT ( * ) FROM tab0 AS cor0 WHERE NOT ( NULL ) = NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT + + col2 AS col3, + 28 AS col1 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT ( - ( - COUNT ( * ) ) ) FROM tab0 WHERE NOT ( + col4 * - col3 ) = NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT + + col2 FROM tab0 WHERE NOT col4 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - COUNT ( * ) AS col0 FROM tab0 WHERE NOT ( + + 27 ) <= NULL

Expected: ["0"] but got ["-10"]
```


```sql
SELECT + col2 AS col5 FROM tab0 WHERE - col4 + + + ( + + ( + 83 ) ) - col0 NOT BETWEEN col0 AND ( NULL )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL col2 FROM tab0 WHERE NOT - 87 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL col2 col2 FROM tab0 AS cor0 WHERE ( NULL ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT COUNT ( * ) - - ( + 30 ) FROM tab0 WHERE NOT NULL >= ( - col0 )

Expected: ["30"] but got ["40"]
```


```sql
SELECT 53 + + CAST ( NULL AS INTEGER ) AS col2 FROM tab0 cor0 WHERE col0 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - SUM ( - 61 ) AS col0 FROM tab0 AS cor0 WHERE NOT NULL IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL + 14 + col0 * + col3 FROM tab0 AS cor0 WHERE NOT + 16 IN ( col4 * col3 )

Query was expected to return results (but did not) 
```


```sql
SELECT ( - 79 ) * + COUNT ( * ) - COUNT ( * ) / + - ( SUM ( col3 ) ) col3 FROM tab0 AS cor0 WHERE NOT ( + - col4 ) IS NULL

Expected: ["-790"] but got ["-789.998"]
```


```sql
SELECT ALL col5 AS col5 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - + col3 AS col5, 78 AS col5 FROM tab0 cor0 WHERE 35 + col0 IS NOT NULL

2 results returned but expected 20
```


```sql
SELECT ALL + CAST ( NULL AS INTEGER ) + - + COUNT ( ALL 97 ) AS col3 FROM tab0 AS cor0 WHERE NOT NULL IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col2 FROM tab0 WHERE NOT ( + col2 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col2 FROM tab1 WHERE NOT ( + col2 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + + col2, + col0 FROM tab0 AS cor0 WHERE + col0 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - ( SUM ( ALL col0 ) ) AS col3 FROM tab0 WHERE NOT NULL < + col4 * + 13

Expected: ["NULL"] but got ["-5417"]
```


```sql
SELECT ALL + ( 43 ) FROM tab0 WHERE NOT col4 IN ( + col0 - + col3 )

Query was expected to return results (but did not) 
```


```sql
SELECT + COUNT ( * ) + - 14 FROM tab0 AS cor0 WHERE NOT + 17 IN ( + ( col0 ) * + col3 * + 56 )

Expected: ["-4"] but got ["-14"]
```


```sql
SELECT + COUNT ( * ) + - 14 FROM tab4 AS cor0 WHERE NOT + 17 IN ( + ( col0 ) * + col3 * + 56 )

Expected: ["-4"] but got ["-14"]
```


```sql
SELECT - ( 7 ) * - + col0 FROM tab0 AS cor0 WHERE - CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE NOT + col0 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + + col2 FROM tab0 AS cor0 WHERE NOT - col0 > - - col3

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + SUM ( DISTINCT + CAST ( NULL AS REAL ) ) AS col2 FROM tab0 WHERE NULL IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + ( - col0 ) FROM tab0 AS cor0 WHERE - col4 + - CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + col0 AS col5, + 82 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + CAST ( NULL AS INTEGER ) * col4 FROM tab0 AS cor0 WHERE NULL IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT COUNT ( * ) AS col0 FROM tab0 WHERE NOT ( NULL ) BETWEEN - col4 AND col0

Expected: ["0"] but got ["10"]
```


```sql
SELECT - COUNT ( * ) FROM tab1 WHERE NOT 64 NOT BETWEEN + CAST ( NULL AS INTEGER ) + col0 AND col1

Expected: ["0"] but got ["-10"]
```


```sql
SELECT DISTINCT + CAST ( NULL AS INTEGER ) AS col4 FROM tab0 WHERE ( NULL ) IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT CAST ( NULL AS INTEGER ) FROM tab0 WHERE NOT - + col1 > ( + col4 )

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL col5 FROM tab0 AS cor0 WHERE col4 * 0 / + col1 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + COUNT ( * ) / - + 20 + - 94 FROM tab0 WHERE - + 65 IS NOT NULL

Expected: ["-94"] but got ["-94.500"]
```


```sql
SELECT ALL + col5 AS col3 FROM tab0 WHERE - + col1 NOT BETWEEN NULL AND - col3

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + col0 FROM tab0 AS cor0 WHERE NOT - col0 * + - 29 / - - CAST ( NULL AS INTEGER ) / col1 * col3 IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT - CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE ( NULL ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - - 37 / + COUNT ( * ) FROM tab0 WHERE - - col4 * - col1 IS NOT NULL

Expected: ["3"] but got ["3.700"]
```


```sql
SELECT COUNT ( * ) FROM tab4 WHERE NOT NULL NOT IN ( col3 )

Expected: ["0"] but got ["10"]
```


```sql
SELECT DISTINCT + 96 + - - CAST ( NULL AS INTEGER ) AS col5 FROM tab0 WHERE NOT NULL IS NOT NULL

Expected: ["NULL"] but got ["96"]
```


```sql
SELECT DISTINCT + 96 + - - CAST ( NULL AS INTEGER ) AS col5 FROM tab4 WHERE NOT NULL IS NOT NULL

Expected: ["NULL"] but got ["96"]
```


```sql
SELECT + - col3 / - col0 + 59 FROM tab0 AS cor0 WHERE NOT 58 * + + col4 + col3 * - - 28 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + col0 + col0, + CAST ( - 45 AS INTEGER ) / - - 59 FROM tab0 AS cor0 WHERE col1 <> - col0

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + 2 * 49 / - - COUNT ( * ) AS col3 FROM tab0 AS cor0 WHERE NULL IS NULL

Expected: ["9"] but got ["9.800"]
```


```sql
SELECT ( + + 39 ) AS col3 FROM tab0 AS cor0 WHERE NOT col4 BETWEEN NULL AND - + col3

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT + CAST ( NULL AS INTEGER ) FROM tab0 WHERE NULL IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + col2 FROM tab0 WHERE + col4 <> col1 * + col0

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT MAX ( DISTINCT CAST ( NULL AS INTEGER ) ) * - COUNT ( - 83 ) + 17 + + 98 AS col0 FROM tab0 AS cor0 WHERE NOT ( NULL ) IS NOT NULL

Expected: ["NULL"] but got ["115"]
```


```sql
SELECT ALL - 46 col5 FROM tab0 WHERE NOT - 68 IN ( + col0 + + 66 )

Query was expected to return results (but did not) 
```


```sql
SELECT - + COUNT ( * ) AS col5 FROM tab0 AS cor0 WHERE CAST ( NULL AS INTEGER ) IS NOT NULL

Expected: ["0"] but got ["-10"]
```


```sql
SELECT ( + - CAST ( NULL AS INTEGER ) ) AS col3 FROM tab0 AS cor0 WHERE - 21 NOT BETWEEN col3 AND + col1

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT CAST ( NULL AS INTEGER ) + 38 - - + col1 FROM tab0 WHERE 77 NOT IN ( + + col4 )

Expected: ["NULL"] but got ["122.920","170.200","396.720","582.400","713.300","728.510","775.590","815.260","831.340","972.850"]
```


```sql
SELECT ALL - ( - - SUM ( ALL - - col4 ) ) AS col3 FROM tab0 cor0 WHERE NOT NULL IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col2 AS col4 FROM tab0 AS cor0 WHERE col0 NOT IN ( col1 * 80 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - CAST ( NULL AS INTEGER ) * + COUNT ( * ) * + 64 / - 52 * + ( + 83 ), - 17 FROM tab0 AS cor0 WHERE NULL IS NULL

Expected: ["NULL","-17"] but got ["0","-17"]
```


```sql
SELECT + + col2 FROM tab0 cor0 WHERE NOT ( NOT ( - col4 + ( - col0 ) IS NOT NULL ) )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + col2 AS col3 FROM tab0 cor0 WHERE NOT + 97 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL col2, - col3 FROM tab0 AS cor0 WHERE NOT ( col3 ) NOT BETWEEN - col1 AND col1

Query was expected to return results (but did not) 
```


```sql
SELECT ALL 45 / - - COUNT ( * ) AS col5 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Expected: ["4"] but got ["4.500"]
```


```sql
SELECT + - SUM ( - ( - col1 ) ) FROM tab0 WHERE + 50 / + - col1 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL col2 FROM tab0 AS cor0 WHERE + 74 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - CAST ( NULL AS INTEGER ) FROM tab0 WHERE NOT + col5 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT MAX ( ALL + CAST ( NULL AS INTEGER ) ) + + 9 AS col0 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Expected: ["NULL"] but got ["9"]
```


```sql
SELECT + ( - - MAX ( DISTINCT - col0 ) ) - - 76 AS col4, 30 FROM tab0 AS cor0 WHERE ( NULL ) IN ( col3 )

Expected: ["NULL","30"] but got ["30","NULL"]
```


```sql
SELECT + SUM ( ALL + CAST ( NULL AS INTEGER ) ) FROM tab0 AS cor0 WHERE + ( + - col1 ) * - ( - ( + col4 ) ) IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT COUNT ( * ) AS col0 FROM tab0 AS cor0 WHERE ( NOT - col3 IN ( + + ( - + col1 ) - col4 + + col4, CAST ( - col0 AS INTEGER ) + - + col4 - 40 ) )

Expected: ["10"] but got ["0"]
```


```sql
SELECT + col2 FROM tab0 AS cor0 WHERE NOT + col1 <= 72

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - COUNT ( * ) + - - ( - - MAX ( + col0 ) ) + 9 AS col3, 63 FROM tab0 AS cor0 WHERE NULL IS NULL

Expected: ["924","63"] but got ["63","924"]
```


```sql
SELECT DISTINCT - col0 - + CAST ( NULL AS INTEGER ) AS col3 FROM tab0 WHERE + col3 IS NOT NULL

Expected: ["NULL"] but got ["-244","-26","-516","-621","-688","-7","-762","-763","-865","-925"]
```


```sql
SELECT col2 FROM tab0 AS cor0 WHERE NOT ( - col0 / col4 ) IN ( 5 )

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT + ( + MIN ( CAST ( NULL AS INTEGER ) ) ) col1 FROM tab1 WHERE NOT + + col4 + + col1 >= ( col3 )

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT - - 43 / - col3 FROM tab0 AS cor0 WHERE NOT col4 < 17

Expected: ["0"] but got ["-0.055","-0.058","-0.072","-0.081","-0.081","-0.121","-0.142","-0.191","-0.262","-0.328"]
```


```sql
SELECT + 7 AS col5 FROM tab0 AS cor0 WHERE NOT col1 BETWEEN 24 + col4 AND - col1

Query was expected to return results (but did not) 
```

#### ☓ Ran 10,031 tests as _sqlite_

* 660 failed
* 93% was OK


---- ---- ---- ---- ---- ---- ----
### 192/622 [`./test/index/random/10/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/10/slt_good_2.test)

_Mimic sqlite_

```sql
SELECT - col3 col3 FROM tab0 WHERE NOT - CAST ( - + col3 AS INTEGER ) BETWEEN NULL AND col1

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + COUNT ( * ) * 11 AS col3 FROM tab0 AS cor0 WHERE NOT NULL > NULL

Expected: ["0"] but got ["110"]
```


```sql
SELECT ALL col5 FROM tab0 AS cor0 WHERE NOT col1 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - CAST ( NULL AS INTEGER ) AS col2 FROM tab0 WHERE NULL IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + 31 + - MIN ( - 42 ) FROM tab0 cor0 WHERE NOT - col3 * + col3 * + + col0 + + col4 BETWEEN col1 AND NULL

Expected: ["73"] but got ["NULL"]
```


```sql
SELECT ALL 89 + + COUNT ( * ) + COUNT ( * ) AS col2 FROM tab0 AS cor0 WHERE NOT col4 + - col3 NOT IN ( - col0 )

Expected: ["89"] but got ["109"]
```


```sql
SELECT DISTINCT - SUM ( col4 ) AS col0 FROM tab0 WHERE NOT NULL < - col0

Expected: ["NULL"] but got ["-4246.480"]
```


```sql
SELECT DISTINCT CAST ( + COUNT ( * ) AS INTEGER ) AS col5 FROM tab0 WHERE col3 > ( NULL )

Query was expected to return results (but did not) 
```


```sql
SELECT + col5 AS col5 FROM tab0 WHERE NOT ( + 69 ) < - col1

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT CAST ( NULL AS INTEGER ) AS col3 FROM tab0 cor0 WHERE + col3 NOT IN ( col0 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT 91 + - SUM ( - ( col1 ) ) * 69 FROM tab0 AS cor0 WHERE NOT col0 / + 97 + + CAST ( NULL AS INTEGER ) * col4 IN ( col1 )

Expected: ["NULL"] but got ["91"]
```


```sql
SELECT DISTINCT + col3 FROM tab0 AS cor0 WHERE NOT CAST ( NULL AS INTEGER ) / - + col0 + + + 39 IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT - + col3, ( + CAST ( NULL AS INTEGER ) ) FROM tab0 AS cor0 WHERE ( - 50 ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - 91 + + MIN ( + 30 ) + - 17 col4 FROM tab0 WHERE NOT + col0 IN ( ( - - col4 ), + col4 )

Expected: ["-78"] but got ["NULL"]
```


```sql
SELECT ALL + col2 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - CAST ( NULL AS INTEGER ) + + 5 AS col0 FROM tab0 WHERE NOT col1 = col3

Expected: ["NULL"] but got ["5"]
```


```sql
SELECT col0 AS col1 FROM tab0 WHERE NOT 77 IN ( + 17 )

Query was expected to return results (but did not) 
```


```sql
SELECT col0 AS col1 FROM tab3 WHERE NOT 77 IN ( + 17 )

Query was expected to return results (but did not) 
```


```sql
SELECT col5 FROM tab0 WHERE NOT 88 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + CAST ( NULL AS INTEGER ) col5 FROM tab0 WHERE NOT col1 <= - col4 / col0

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL - COUNT ( * ) AS col5 FROM tab0 AS cor0 WHERE NOT - col1 >= NULL

Expected: ["0"] but got ["-10"]
```


```sql
SELECT + - 28 + - - COUNT ( * ) AS col5 FROM tab0 WHERE NOT NULL = NULL

Expected: ["-28"] but got ["-18"]
```


```sql
SELECT ALL col0 * + CAST ( NULL AS INTEGER ), col2 AS col0 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL 2 + + COUNT ( * ) FROM tab0 AS cor0 WHERE NOT NULL NOT IN ( + 34, 6, + - 25 )

Expected: ["2"] but got ["12"]
```


```sql
SELECT col5 AS col2 FROM tab0 WHERE NOT 60 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + col5 AS col2 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT ( COUNT ( * ) ) AS col5 FROM tab0 AS cor0 WHERE NOT + 57 IN ( + - 97 ) AND NULL IS NULL

Expected: ["10"] but got ["0"]
```


```sql
SELECT DISTINCT + 57 + + + col0 AS col0 FROM tab0 WHERE NOT - 6 BETWEEN + 66 + - col0 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + col2 col2 FROM tab0 WHERE + + col3 + - col0 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col2 FROM tab0 AS cor0 WHERE 44 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + COUNT ( * ) AS col0 FROM tab0 WHERE NOT col4 NOT IN ( + 45 + col1 )

Expected: ["0"] but got ["10"]
```


```sql
SELECT col5 FROM tab0 WHERE - ( - col1 ) <= + col0

Expected: ["0","0","0","0","0","0"] but got ["bqisj","gtdhg","mylwf","tlesg","vrkrw","ylzxx"]
```


```sql
SELECT + CAST ( NULL AS INTEGER ) AS col5 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - col3 * - 48 AS col2 FROM tab0 AS cor0 WHERE NOT - 89 + 78 * 8 IN ( col1 )

Query was expected to return results (but did not) 
```


```sql
SELECT + SUM ( + 84 ) + 30 AS col1 FROM tab0 cor0 WHERE ( NOT + + col1 NOT IN ( + + col0 ) )

Expected: ["NULL"] but got ["870"]
```


```sql
SELECT ALL + 61 / + COUNT ( * ) col1 FROM tab0 WHERE NOT col1 > - - col1

Expected: ["6"] but got ["6.100"]
```


```sql
SELECT ALL + - 46 * + col0, CAST ( NULL AS INTEGER ) * + + col3 * + col0 FROM tab0 WHERE NOT col1 / col1 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + - SUM ( DISTINCT - + col0 ) + + 58 FROM tab0 WHERE NOT + 84 * - + col3 - + col1 IS NOT NULL

Expected: ["NULL"] but got ["58"]
```


```sql
SELECT + + col2 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - + 55 * + CAST ( NULL AS INTEGER ) - - 11 * + + col1 col0 FROM tab0 WHERE NOT - ( - 32 ) IS NULL

Expected: ["NULL"] but got ["10133.310","102.300","1428.570","2488.640","3809.190","4384.050","4866.180","6344.910","8532.590","9792.970"]
```


```sql
SELECT ALL 60 + MAX ( ALL CAST ( NULL AS INTEGER ) ) FROM tab0 cor0 WHERE NOT NULL <> ( CAST ( NULL AS REAL ) )

Expected: ["NULL"] but got ["60"]
```


```sql
SELECT col2 col3, - col3 AS col5 FROM tab0 cor0 WHERE NOT ( - 52 ) = - col3 * col0

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT COUNT ( * ) FROM tab0 AS cor0 WHERE NOT + col0 * + - col3 * col1 + + col0 IN ( + + 18 )

Expected: ["10"] but got ["0"]
```


```sql
SELECT DISTINCT COUNT ( * ) FROM tab4 AS cor0 WHERE NOT + col0 * + - col3 * col1 + + col0 IN ( + + 18 )

Expected: ["10"] but got ["0"]
```


```sql
SELECT ALL + col2 AS col2 FROM tab0 AS cor0 WHERE NOT col0 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + CAST ( NULL AS INTEGER ) * MAX ( DISTINCT + - ( + 30 ) ) AS col2 FROM tab0 WHERE NOT NULL IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT COUNT ( * ) AS col3 FROM tab0 WHERE NOT ( NOT ( NOT NULL <= NULL ) )

Expected: ["0"] but got ["10"]
```


```sql
SELECT 20, col2 FROM tab0 AS cor0 WHERE NOT - col3 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT SUM ( + + col4 ) FROM tab0 WHERE NOT NULL <> + - col0 * - col1

Expected: ["NULL"] but got ["4246.480"]
```


```sql
SELECT ALL + + col5 AS col0 FROM tab0 AS cor0 WHERE NOT - 21 / + col3 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT 10 + col0 AS col2 FROM tab0 WHERE col3 / col3 - col4 NOT BETWEEN ( + ( 68 ) / + CAST ( + col3 + 12 AS INTEGER ) ) AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT SUM ( DISTINCT col3 ) FROM tab0 WHERE 42 - col4 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + 98 AS col2 FROM tab0 WHERE NOT + 43 NOT BETWEEN - ( - col1 ) AND col3

Expected: ["98"] but got ["98","98","98","98","98","98","98","98","98","98"]
```


```sql
SELECT ALL ( - CAST ( NULL AS INTEGER ) ) AS col4 FROM tab0 AS cor0 WHERE NOT ( NOT - CAST ( NULL AS INTEGER ) IS NULL )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL col5 FROM tab0 WHERE NOT col2 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - COUNT ( * ) FROM tab0 AS cor0 WHERE NOT - col0 * col1 * 73 NOT BETWEEN + col3 - + + col1 / - 11 AND - col1

Expected: ["0"] but got ["-10"]
```


```sql
SELECT + SUM ( col4 ) FROM tab0 cor0 WHERE col0 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE 85 < col4

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT CAST ( COUNT ( * ) AS INTEGER ) AS col4 FROM tab0 WHERE - col4 + - - CAST ( - ( + + col3 ) AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT - CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE NOT col4 > + + col1

Expected: ["NULL","NULL","NULL","NULL","NULL","NULL"] but got ["0","0","0","0","0","0"]
```


```sql
SELECT col5 AS col2 FROM tab0 WHERE 54 * 27 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - COUNT ( * ) - - CAST ( - COUNT ( * ) AS INTEGER ) FROM tab0 AS cor0 WHERE ( NULL ) IS NULL

Expected: ["-20"] but got ["-10"]
```


```sql
SELECT ALL + ( + col2 ) FROM tab0 AS cor0 WHERE NOT col1 * col0 + ( + col0 ) <= 23 + col1 * - CAST ( CAST ( 2 AS INTEGER ) AS INTEGER )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + CAST ( - SUM ( - col3 ) AS INTEGER ) col3 FROM tab0 WHERE + ( col3 ) NOT IN ( - 44 + col1 * + + col4, 39 )

g is not defined
```


```sql
SELECT ALL + + 74 AS col3, COUNT ( * ) * - CAST ( NULL AS INTEGER ) AS col4 FROM tab0 AS cor0 WHERE 86 / - + col4 IS NULL

Expected: ["74","NULL"] but got ["74","0"]
```


```sql
SELECT ALL + + col2 AS col1 FROM tab0 WHERE NOT ( - 16 / - col0 IS NULL )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT MAX ( ALL + CAST ( 69 AS INTEGER ) ) FROM tab0 AS cor0 WHERE NOT 73 BETWEEN NULL AND ( + 38 )

Expected: ["69"] but got ["NULL"]
```


```sql
SELECT ALL - + SUM ( + + CAST ( NULL AS REAL ) ) AS col5 FROM tab0 AS cor0 WHERE NOT 93 * - col0 >= col1

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE NOT - col3 BETWEEN - + col1 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT CAST ( NULL AS INTEGER ) + MIN ( DISTINCT - col3 ) FROM tab0 cor0 WHERE NOT col3 + + col0 IS NULL

Expected: ["NULL"] but got ["-989"]
```


```sql
SELECT ALL + 44, col5 FROM tab0 WHERE - col4 <= col0 * 8

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + CAST ( + COUNT ( * ) AS INTEGER ) - + - 77 FROM tab0 WHERE NOT col2 IS NULL

g is not defined
```


```sql
SELECT ALL - 35 / 86 col3, + ( + col5 ) AS col4, + col3 FROM tab2 WHERE NOT ( ( NOT ( col3 ) IS NOT NULL ) )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + SUM ( 97 ) - - 74 AS col5 FROM tab0 AS cor0 WHERE NOT col4 IS NOT NULL

Expected: ["NULL"] but got ["74"]
```


```sql
SELECT ALL col2 FROM tab0 WHERE NOT - CAST ( NULL AS INTEGER ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT COUNT ( * ) AS col0 FROM tab0 AS cor0 WHERE col3 + + - CAST ( NULL AS INTEGER ) > - col1

Expected: ["0"] but got ["10"]
```


```sql
SELECT ALL - SUM ( - col1 ) FROM tab0 AS cor0 WHERE NOT - col3 >= + col4 * - col0

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT - - COUNT ( * ) AS col2 FROM tab0 WHERE NOT - - 65 <= NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT - + CAST ( - COUNT ( * ) AS INTEGER ) AS col0 FROM tab0 AS cor0 WHERE NOT NULL NOT IN ( 77, ( + col1 ), - CAST ( - - col4 AS INTEGER ) )

g is not defined
```


```sql
SELECT col5 FROM tab0 WHERE CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT - 45 FROM tab0 AS cor0 WHERE NOT + col1 * 41 / + + 82 BETWEEN - col3 AND ( - + ( - 64 ) )

10 results returned but expected 9
```


```sql
SELECT + col2 FROM tab0 cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + - CAST ( + + MIN ( - col4 ) AS INTEGER ) FROM tab0 AS cor0 WHERE NOT - col4 * + col1 IS NULL

g is not defined
```


```sql
SELECT ALL + - 54 AS col2, col2 AS col3 FROM tab0 WHERE NOT + col5 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - CAST ( NULL AS INTEGER ) * - COUNT ( * ) FROM tab0 WHERE col3 NOT BETWEEN - 48 AND NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL + ( col5 ) FROM tab0 AS cor0 WHERE NOT - col0 BETWEEN ( + 65 ) AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + col5 AS col5 FROM tab0 AS cor0 WHERE ( NULL ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + COUNT ( * ) FROM tab0 WHERE NOT ( NULL ) > + col1

Expected: ["0"] but got ["10"]
```


```sql
SELECT 17 FROM tab0 AS cor0 WHERE NOT - 67 BETWEEN ( col3 * - + col3 / - + 94 ) AND col1

Query was expected to return results (but did not) 
```


```sql
SELECT - - SUM ( ALL - col0 ) AS col2 FROM tab0 AS cor0 WHERE NOT - 85 * - 93 IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col5 FROM tab0 WHERE - col0 / + col1 * col0 <> col4 * - 53

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + + COUNT ( * ) AS col4 FROM tab0 AS cor0 WHERE NOT col1 < NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT CAST ( NULL AS INTEGER ) / - 26 * + 18 / - 2, + 76 * + COUNT ( * ) FROM tab0 WHERE ( NULL ) IS NOT NULL

Expected: ["NULL","0"] but got ["0","0"]
```


```sql
SELECT - col0 AS col0 FROM tab0 WHERE NOT + + 30 BETWEEN NULL AND + - col3

Query was expected to return results (but did not) 
```


```sql
SELECT col1 * - + col0 + CAST ( NULL AS INTEGER ) FROM tab0 WHERE NOT + col4 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + SUM ( 12 ) - - COUNT ( * ) FROM tab0 WHERE NOT NULL >= NULL

Expected: ["NULL"] but got ["130"]
```


```sql
SELECT 79 / + COUNT ( * ) AS col3 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Expected: ["7"] but got ["7.900"]
```

#### ☓ Ran 10,034 tests as _sqlite_

* 760 failed
* 92% was OK


---- ---- ---- ---- ---- ---- ----
### 193/622 [`./test/index/random/10/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/10/slt_good_3.test)

_Mimic sqlite_

```sql
SELECT ALL col5 FROM tab0 AS cor0 WHERE + col4 * + col4 * + 24 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - COUNT ( * ) * 9 FROM tab0 WHERE NOT NULL <= ( + col1 )

Expected: ["0"] but got ["-90"]
```


```sql
SELECT + col3 AS col0 FROM tab0 AS cor0 WHERE NOT - CAST ( NULL AS REAL ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + col2 AS col1 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + COUNT ( * ) + + COUNT ( ALL - col1 ) FROM tab0 AS cor0 WHERE NOT ( - col3 + + - 50 + - col1 * + col3 ) <> ( NULL )

Expected: ["0"] but got ["20"]
```


```sql
SELECT ( + col3 ) + + 30 FROM tab0 cor0 WHERE NOT col4 BETWEEN - CAST ( NULL AS INTEGER ) * - col1 * - 31 AND - ( + col0 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + + col5 FROM tab0 AS cor0 WHERE - 70 <= - + 58

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col2 AS col1 FROM tab0 WHERE NOT col1 <= col4

Expected: ["0","0","0","0","0"] but got ["ayfdf","iiegz","kaetk","reayu","unszc"]
```


```sql
SELECT DISTINCT CAST ( - COUNT ( * ) AS INTEGER ) + - 63 AS col0 FROM tab0 WHERE NULL NOT IN ( 71 )

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT - + CAST ( NULL AS INTEGER ) col1 FROM tab0 AS cor0 WHERE NOT - 89 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL + col2 FROM tab0 AS cor0 WHERE NOT 70 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - COUNT ( * ) col3 FROM tab0 WHERE NOT NULL <= NULL

Expected: ["0"] but got ["-10"]
```


```sql
SELECT COUNT ( * ) AS col2 FROM tab0 WHERE NOT NULL <> + + 42

Expected: ["0"] but got ["10"]
```


```sql
SELECT col5 col1 FROM tab0 AS cor0 WHERE NOT col0 < + col1

Expected: ["0","0"] but got ["hkqiq","wjfwi"]
```


```sql
SELECT DISTINCT - SUM ( col4 ) AS col2 FROM tab0 WHERE - CAST ( + - col3 AS REAL ) IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + ( col5 ) AS col2 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - SUM ( DISTINCT + col3 ) FROM tab0 WHERE NOT ( NULL ) NOT IN ( - col4 )

Expected: ["NULL"] but got ["-4502"]
```


```sql
SELECT 70 * CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE - 22 / 89 BETWEEN 16 / 61 + - 36 AND 87

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL COUNT ( ALL 33 ) FROM tab0 WHERE NOT - 79 NOT IN ( + - col4, ( + - col1 ) )

Expected: ["0"] but got ["10"]
```


```sql
SELECT ALL CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE 62 NOT IN ( 15 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + col2 FROM tab0 cor0 WHERE NOT ( ( NOT + col0 + - 88 + - + col0 IS NOT NULL ) )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col0 / ( + col3 ) AS col1 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - 22 AS col4 FROM tab0 AS cor0 WHERE NOT + 69 BETWEEN NULL AND - - col3

Query was expected to return results (but did not) 
```


```sql
SELECT + + COUNT ( * ) * + 25 AS col0 FROM tab0 WHERE - CAST ( NULL AS REAL ) IS NULL

Expected: ["250"] but got ["0"]
```


```sql
SELECT DISTINCT - CAST ( NULL AS INTEGER ) - + 50 FROM tab0 AS cor0 WHERE NOT ( NULL ) IS NOT NULL

Expected: ["NULL"] but got ["-50"]
```


```sql
SELECT ALL + + col5 AS col4 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ( - col3 ) AS col0 FROM tab0 AS cor0 WHERE NOT + 53 BETWEEN NULL AND 56 + - col1

Query was expected to return results (but did not) 
```


```sql
SELECT ALL - 0 - + SUM ( ALL 23 ) AS col1 FROM tab0 AS cor0 WHERE ( NOT - 80 * - col0 NOT BETWEEN NULL AND - col1 )

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT 83 * - 92 + CAST ( - CAST ( NULL AS INTEGER ) AS INTEGER ) AS col3, - CAST ( NULL AS INTEGER ) / col4 * + 52 AS col5 FROM tab0 AS cor0 WHERE col3 <= 81

Expected: ["NULL","NULL"] but got ["-7636","0"]
```


```sql
SELECT ALL + AVG ( DISTINCT + 55 ) AS col2 FROM tab0 AS cor0 WHERE NOT NULL <= ( NULL )

Expected: ["NULL"] but got ["55"]
```


```sql
SELECT ALL - + col0 FROM tab0 WHERE ( NOT 9 BETWEEN - - 7 * - - col3 + + col0 AND NULL )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL col2 AS col2 FROM tab0 AS cor0 WHERE NOT - col3 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE - col1 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT COUNT ( DISTINCT col1 ) FROM tab0 WHERE NOT NULL > NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT - COUNT ( DISTINCT 30 ) FROM tab0 WHERE NOT + 65 <= ( NULL )

Expected: ["0"] but got ["-1"]
```


```sql
SELECT - MIN ( DISTINCT col0 ) + 54 FROM tab0 WHERE NOT ( col1 + + col3 * + col0 ) IN ( col0 )

Expected: ["-130"] but got ["NULL"]
```


```sql
SELECT ALL col3 - + - col4 + + CAST ( NULL AS INTEGER ) FROM tab0 WHERE ( + col4 * - 84 ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - - COUNT ( * ) col0 FROM tab0 WHERE NOT NULL >= NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT DISTINCT - col3, 13 AS col4 FROM tab0 AS cor0 WHERE NOT CAST ( NULL AS INTEGER ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT + ( + ( - 38 ) ) * + + 75 AS col0, SUM ( ALL 74 ) AS col1 FROM tab0 WHERE NULL <= NULL

Expected: ["-2850","NULL"] but got ["-2850","0"]
```


```sql
SELECT + CAST ( + + col0 AS INTEGER ) AS col4 FROM tab0 WHERE - 99 NOT BETWEEN NULL AND - + col4 * + col1 * col1

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + + col0 / + + 72 AS col1 FROM tab0 AS cor0 WHERE NOT col2 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col2 FROM tab0 WHERE ( - col3 ) NOT IN ( 77 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + 11 / + col0 FROM tab0 WHERE NOT col3 IN ( col3 - - col0 )

Query was expected to return results (but did not) 
```


```sql
SELECT 20 FROM tab0 AS cor0 WHERE NOT ( NOT 20 * + - 45 NOT IN ( col4 ) )

Query was expected to return results (but did not) 
```


```sql
SELECT + - COUNT ( * ) AS col4 FROM tab0 AS cor0 WHERE NOT + col4 <= NULL

Expected: ["0"] but got ["-10"]
```


```sql
SELECT + AVG ( - + ( + + CAST ( NULL AS INTEGER ) ) ) AS col5 FROM tab0 AS cor0 WHERE NOT col4 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL + col5 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - + 30 / - - 41 FROM tab0 WHERE NULL IS NULL

Expected: ["0"] but got ["-0.732"]
```


```sql
SELECT ALL 65 AS col2 FROM tab0 WHERE NOT - col4 IN ( - 1 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL MIN ( CAST ( 31 AS INTEGER ) ) AS col0 FROM tab0 WHERE NOT NULL < 65

Expected: ["NULL"] but got ["31"]
```


```sql
SELECT DISTINCT SUM ( - - col4 ) FROM tab0 AS cor0 WHERE NOT NULL IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col5 FROM tab0 AS cor0 WHERE ( 17 * + col4 / col0 + + 18 ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL CAST ( NULL AS INTEGER ) - + ( + + col0 ) AS col5 FROM tab0 AS cor0 WHERE NOT 88 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - COUNT ( * ) FROM tab0 WHERE NOT NULL <= NULL

Expected: ["0"] but got ["-10"]
```


```sql
SELECT - + CAST ( NULL AS INTEGER ) FROM tab0 cor0 WHERE ( + col4 ) + + col1 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col2 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - 41 + COUNT ( * ) AS col4 FROM tab0 AS cor0 WHERE NOT ( + - col4 * 0 > NULL )

Expected: ["-41"] but got ["-31"]
```


```sql
SELECT - 41 + COUNT ( * ) AS col4 FROM tab4 AS cor0 WHERE NOT ( + - col4 * 0 > NULL )

Expected: ["-41"] but got ["-31"]
```


```sql
SELECT ALL + col5 AS col1 FROM tab0 WHERE NOT col0 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - + SUM ( col1 ) FROM tab0 WHERE NOT NULL IN ( col0 + + col0, + col3 * - col3 - - - 34 * + 98 + 2 )

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL + + col2 FROM tab0 AS cor0 WHERE col1 / col4 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + + CAST ( - - COUNT ( * ) AS INTEGER ) FROM tab0 AS cor0 WHERE col0 / + col0 IS NOT NULL

g is not defined
```


```sql
SELECT + COUNT ( - CAST ( NULL AS INTEGER ) ) FROM tab0 AS cor0 WHERE NOT + 6 > NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT COUNT ( * ) FROM tab0 WHERE - CAST ( + col0 AS REAL ) * + - CAST ( NULL AS INTEGER ) IS NULL

Expected: ["10"] but got ["0"]
```


```sql
SELECT ALL + col0 + + col0 / 81 FROM tab0 AS cor0 WHERE NOT 43 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + CAST ( + - COUNT ( * ) AS INTEGER ) FROM tab0 cor0 WHERE NOT NULL IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + col2 col1 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - - 4 / + COUNT ( DISTINCT col3 ), 86 AS col2 FROM tab0 WHERE NULL IS NULL

Expected: ["0","86"] but got ["0.400","86"]
```


```sql
SELECT col0 FROM tab0 AS cor0 WHERE NOT - 8 * - ( - 20 ) IN ( 62 * - col0 * - 42 )

Query was expected to return results (but did not) 
```


```sql
SELECT - CAST ( NULL AS INTEGER ) FROM tab0 WHERE 85 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```

#### ☓ Ran 10,034 tests as _sqlite_

* 535 failed
* 94% was OK


---- ---- ---- ---- ---- ---- ----
### 194/622 [`./test/index/random/10/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/10/slt_good_4.test)

_Mimic sqlite_

```sql
SELECT ALL + col5 FROM tab0 AS cor0 WHERE ( NULL ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT CAST ( NULL AS INTEGER ), ( + COUNT ( * ) ) FROM tab0 WHERE NOT + 26 IS NULL

Expected: ["NULL","10"] but got ["0","10"]
```


```sql
SELECT DISTINCT COUNT ( * ) FROM tab0 WHERE NOT ( - 12 ) <= NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT COUNT ( * ) AS col1 FROM tab0 AS cor0 WHERE NOT NULL <= 30 + col1

Expected: ["0"] but got ["10"]
```


```sql
SELECT ALL CAST ( - COUNT ( * ) AS INTEGER ) AS col4 FROM tab0 cor0 WHERE col0 IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT - SUM ( + - col3 ) AS col4 FROM tab0 WHERE NOT NULL <= col0 / - 18

Expected: ["NULL"] but got ["4446"]
```


```sql
SELECT ALL + 60 - - COUNT ( * ), CAST ( + 94 AS INTEGER ) / - + 63 FROM tab0 cor0 WHERE NULL IS NULL

Expected: ["70","-1"] but got ["70","-1.492"]
```


```sql
SELECT CAST ( + CAST ( NULL AS INTEGER ) AS REAL ) FROM tab0 AS cor0 WHERE col0 / + + 92 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + COUNT ( * ) AS col3 FROM tab0 AS cor0 WHERE NOT NULL <= 17

Expected: ["0"] but got ["10"]
```


```sql
SELECT col2 AS col1 FROM tab0 WHERE ( ( ( NULL ) IS NULL ) )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - CAST ( ( COUNT ( * ) ) AS INTEGER ) AS col1 FROM tab0 WHERE ( NOT col0 NOT BETWEEN + col4 AND + + col1 )

g is not defined
```


```sql
SELECT COUNT ( * ) FROM tab0 cor0 WHERE NOT NULL = NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT ALL + col2 col3 FROM tab0 AS cor0 WHERE NOT ( + 83 + col1 IS NULL )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT CAST ( - COUNT ( * ) AS INTEGER ) FROM tab0 WHERE NOT - 10 * + col1 < NULL

g is not defined
```


```sql
SELECT + 69 - SUM ( + 63 ) AS col2 FROM tab0 WHERE NOT col0 / - + 84 * + - ( + col3 ) IN ( - + col3 )

Expected: ["-561"] but got ["69"]
```


```sql
SELECT - SUM ( ALL 28 ) FROM tab0 WHERE col1 - - + col1 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT - 0 FROM tab0 WHERE NOT - col0 BETWEEN 84 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT 62 * + - COUNT ( * ) FROM tab0 AS cor0 WHERE NOT + col4 BETWEEN col3 AND ( NULL )

Expected: ["-248"] but got ["0"]
```


```sql
SELECT ALL col2 col2 FROM tab0 AS cor0 WHERE NOT + ( + 16 ) / - - col4 / - - col1 * - - 39 + - col1 / + - 58 = - col0 + + col3 * col4

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + 38 / + 51 FROM tab0 WHERE NOT 33 BETWEEN NULL AND + 4 * - 86 - col3

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT + SUM ( - col1 ) AS col5 FROM tab0 AS cor0 WHERE NOT ( + 80 * col3 ) > + ( 58 )

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT col3 AS col5 FROM tab0 cor0 WHERE ( NOT - - 77 IN ( + 79 ) )

Query was expected to return results (but did not) 
```


```sql
SELECT 89, col5 AS col0 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - + 58 / CAST ( - 60 AS INTEGER ) AS col0 FROM tab0 WHERE NULL IS NULL

Expected: ["0"] but got ["0.967"]
```


```sql
SELECT + 48 * - COUNT ( * ) FROM tab2 AS cor0 WHERE NOT col0 IN ( 40 )

Expected: ["-480"] but got ["0"]
```


```sql
SELECT DISTINCT + CAST ( NULL AS INTEGER ) * - - 91 AS col1 FROM tab0 AS cor0 WHERE NOT ( NULL ) IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + SUM ( ALL - col3 ) FROM tab0 AS cor0 WHERE - col3 >= NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + COUNT ( * ) FROM tab0 cor0 WHERE NOT NULL >= - ( + col4 )

Expected: ["0"] but got ["10"]
```


```sql
SELECT DISTINCT SUM ( ALL col1 ) FROM tab0 AS cor0 WHERE 5 * 75 <= ( + CAST ( NULL AS INTEGER ) * col3 )

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT col3 AS col0 FROM tab0 AS cor0 WHERE 22 NOT BETWEEN NULL AND ( - 99 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + col5 FROM tab0 AS cor0 WHERE NOT + 69 + - col4 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col5 FROM tab0 WHERE ( NOT ( NOT + CAST ( NULL AS REAL ) * + col0 IS NULL ) )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - COUNT ( ALL + + col0 ) AS col1 FROM tab0 WHERE NOT NULL = - col1 / - col0

Expected: ["0"] but got ["-10"]
```


```sql
SELECT ALL + CAST ( COUNT ( * ) AS INTEGER ) * 32 * - 79 FROM tab0 WHERE NOT ( NULL ) >= + col1

g is not defined
```


```sql
SELECT col1 * 19 / col1 * 47 + + - CAST ( NULL AS INTEGER ) col2 FROM tab0 cor0 WHERE NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - SUM ( DISTINCT - + col1 ) FROM tab0 WHERE NOT NULL IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL - SUM ( DISTINCT - + col1 ) FROM tab2 WHERE NOT NULL IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + col5 AS col3 FROM tab0 WHERE - col1 + col4 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT CAST ( NULL AS INTEGER ) / + - col1 AS col4 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + SUM ( DISTINCT + 66 ) FROM tab0 WHERE NOT ( col3 ) IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col5 AS col5 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col5 AS col4 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT 60 AS col3 FROM tab0 AS cor0 WHERE NOT - col3 BETWEEN + + 36 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL - COUNT ( * ) / - 81 FROM tab0 WHERE NULL IS NULL

Expected: ["0"] but got ["0.123"]
```


```sql
SELECT ALL + MAX ( + - 5 ) AS col3, 99 col5 FROM tab0 WHERE NOT NULL > 55 + - 14 + - col0

Expected: ["NULL","99"] but got ["-5","99"]
```


```sql
SELECT + 3 FROM tab0 WHERE - CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT + + AVG ( + CAST ( NULL AS INTEGER ) ) AS col5 FROM tab0 AS cor0 WHERE NOT ( - 6 ) IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + col5 AS col4 FROM tab0 cor0 WHERE col4 * - - 86 <> - col4

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - - COUNT ( * ) FROM tab0 cor0 WHERE NOT NULL < - 51

Expected: ["0"] but got ["10"]
```


```sql
SELECT + 66 / COUNT ( * ) - 18 FROM tab0 AS cor0 WHERE ( + ( - + col3 ) ) NOT BETWEEN ( 30 ) AND ( + col0 + col0 * + 1 )

Expected: ["-12"] but got ["-11.400"]
```


```sql
SELECT CAST ( NULL AS INTEGER ) AS col0 FROM tab0 WHERE CAST ( NULL AS INTEGER ) + - 73 * + col3 * 28 + + col0 * 11 IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT SUM ( - col4 ) FROM tab0 WHERE ( 14 ) IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col2 FROM tab0 WHERE ( - 83 ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - COUNT ( * ) AS col3, 37 AS col3 FROM tab0 WHERE - CAST ( NULL AS INTEGER ) > NULL

Expected: ["0","37"] but got ["37"]
```


```sql
SELECT + col5 AS col5 FROM tab0 AS cor0 WHERE + 60 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + col3 + 31 FROM tab0 WHERE NOT 83 IN ( 77 )

Query was expected to return results (but did not) 
```


```sql
SELECT + COUNT ( * ) / + + 37 FROM tab0 AS cor0 WHERE NOT ( NULL ) IS NOT NULL

Expected: ["0"] but got ["0.270"]
```


```sql
SELECT col5 col1 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - SUM ( + 60 ) + - 40 FROM tab0 AS cor0 WHERE ( NULL ) IS NOT NULL

Expected: ["NULL"] but got ["-40"]
```


```sql
SELECT DISTINCT - ( - CAST ( NULL AS INTEGER ) ) / 19 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT 82 + 89 FROM tab0 WHERE col0 NOT BETWEEN NULL AND + + col1

Query was expected to return results (but did not) 
```


```sql
SELECT - 31 AS col5, col2 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - COUNT ( * ) / + 70 FROM tab0 WHERE NOT + col1 + - col4 * col0 IS NULL

Expected: ["0"] but got ["-0.143"]
```


```sql
SELECT - COUNT ( * ) / 35 AS col2 FROM tab0 WHERE NOT ( NULL ) IS NOT NULL

Expected: ["0"] but got ["-0.286"]
```


```sql
SELECT col5 FROM tab0 WHERE NOT ( col4 + + col0 * 61 ) BETWEEN col3 AND col1

Query was expected to return results (but did not) 
```


```sql
SELECT - 52 / - - CAST ( col1 AS INTEGER ) - + - ( + col0 ) * + 36 * + 85 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT MIN ( - - col0 ) FROM tab0 AS cor0 WHERE NOT NULL <> + col0 / 3

Expected: ["NULL"] but got ["13"]
```


```sql
SELECT - col3 AS col5, col0 / + col3 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT SUM ( ALL - col4 ) + + ( + - 27 ) FROM tab0 WHERE 53 IS NULL

Expected: ["NULL"] but got ["-27"]
```


```sql
SELECT + ( + CAST ( NULL AS INTEGER ) ) FROM tab0 WHERE NOT - col1 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - COUNT ( * ) AS col5 FROM tab0 WHERE NOT - col0 + CAST ( NULL AS INTEGER ) >= ( NULL )

Expected: ["0"] but got ["-10"]
```


```sql
SELECT ALL col0 / 79 AS col4 FROM tab4 WHERE NOT - ( col1 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - COUNT ( * ) AS col4 FROM tab0 WHERE NOT ( + col0 ) < NULL

Expected: ["0"] but got ["-10"]
```


```sql
SELECT DISTINCT + MAX ( + col3 ) FROM tab0 AS cor0 WHERE NOT col1 NOT BETWEEN - + col3 + col3 AND + col0

Expected: ["922"] but got ["NULL"]
```

#### ☓ Ran 10,033 tests as _sqlite_

* 520 failed
* 94% was OK


---- ---- ---- ---- ---- ---- ----
### 195/622 [`./test/index/random/10/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/10/slt_good_5.test)

_Mimic sqlite_

```sql
SELECT + col2 AS col5 FROM tab0 WHERE NOT ( col0 ) * - - col4 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - 81 FROM tab0 WHERE NOT col0 IN ( - 9 + + 10 * - + 68, col4 )

Query was expected to return results (but did not) 
```


```sql
SELECT ( - CAST ( NULL AS INTEGER ) ) - - COUNT ( * ) FROM tab0 AS cor0 WHERE NULL < NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT SUM ( + 90 ) AS col2 FROM tab0 AS cor0 WHERE - col1 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + - COUNT ( * ) AS col4 FROM tab0 AS cor0 WHERE 64 / col0 NOT BETWEEN - col1 AND + + CAST ( NULL AS INTEGER )

Expected: ["0"] but got ["-10"]
```


```sql
SELECT - ( + + 8 ) AS col1 FROM tab0 WHERE NOT ( - col0 ) BETWEEN + 21 / + col0 AND - - col1

Query was expected to return results (but did not) 
```


```sql
SELECT + col2 col4 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT COUNT ( * ) FROM tab0 cor0 WHERE NOT NULL <> NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT + MIN ( ALL ( + col3 ) ) FROM tab0 WHERE NOT - col1 NOT IN ( - col3 + 8 + - col3 )

Expected: ["NULL"] but got ["85"]
```


```sql
SELECT DISTINCT - MAX ( + col0 ), AVG ( DISTINCT - 74 ) col0 FROM tab0 AS cor0 WHERE NOT NULL <> ( + col0 * - + col4 )

Expected: ["NULL","NULL"] but got ["-885","-74"]
```


```sql
SELECT - + SUM ( + + 77 ) FROM tab0 WHERE NOT - col3 BETWEEN col0 - + col1 * + col1 * - col0 * 15 * col0 AND NULL

Expected: ["-770"] but got ["0"]
```


```sql
SELECT + col0 FROM tab0 AS cor0 WHERE NOT + ( 9 ) IN ( + 72, col3 * - col1 )

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT - 13 * - CAST ( NULL AS INTEGER ) - col0 AS col2 FROM tab0 AS cor0 WHERE - 3 <> - + ( CAST ( - ( - col1 ) AS INTEGER ) )

Expected: ["NULL"] but got ["-27","-535","-626","-646","-671","-778","-780","-810","-840","-885"]
```


```sql
SELECT + col2 FROM tab0 AS cor0 WHERE NOT col4 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - - COUNT ( * ) FROM tab0 cor0 WHERE NOT NULL <> + col0 + ( - col4 )

Expected: ["0"] but got ["10"]
```


```sql
SELECT DISTINCT SUM ( DISTINCT + 76 ) + - 7 * - COUNT ( * ) FROM tab0 WHERE NOT - ( CAST ( NULL AS INTEGER ) ) / - 46 IS NOT NULL

Expected: ["146"] but got ["0"]
```


```sql
SELECT SUM ( ALL ( + col1 ) ) FROM tab0 WHERE NOT ( + col0 ) IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col5 AS col2 FROM tab0 WHERE NOT - 67 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + 13 FROM tab0 AS cor0 WHERE NOT - col1 IN ( col4 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL - 24 AS col2, col3 FROM tab0 WHERE - 25 * + CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT col5 AS col0 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - 7 * + col3 FROM tab0 AS cor0 WHERE NOT col4 BETWEEN CAST ( - col4 AS REAL ) + col3 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT SUM ( + col0 ) - - 50 FROM tab0 WHERE NOT ( - col1 ) NOT BETWEEN - col4 - col4 * + col0 AND ( col3 )

Expected: ["6648"] but got ["50"]
```


```sql
SELECT DISTINCT + AVG ( DISTINCT + 50 ) FROM tab0 WHERE NOT + col4 * + CAST ( NULL AS INTEGER ) - - col1 = NULL

Expected: ["NULL"] but got ["50"]
```


```sql
SELECT + col2 AS col0 FROM tab0 AS cor0 WHERE NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + col2 AS col5 FROM tab0 WHERE + col4 - ( - + col0 ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - SUM ( - ( - 54 ) ) FROM tab0 AS cor0 WHERE NULL IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col2 AS col0 FROM tab0 AS cor0 WHERE NOT col4 = + col1

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ( + SUM ( ALL - col0 ) ) col0 FROM tab0 AS cor0 WHERE NOT ( NOT ( NULL < NULL ) )

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT + 74 FROM tab0 WHERE + CAST ( NULL AS INTEGER ) * 87 * + col3 IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT - COUNT ( * ) FROM tab0 AS cor0 WHERE NOT NULL <= ( NULL )

Expected: ["0"] but got ["-10"]
```


```sql
SELECT + col5 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - SUM ( ALL col4 ) FROM tab0 AS cor0 WHERE NOT ( NULL ) <= + ( col0 )

Expected: ["NULL"] but got ["-4779.480"]
```


```sql
SELECT DISTINCT + ( 81 ) * COUNT ( * ) FROM tab0 WHERE NOT ( col0 ) NOT IN ( + col0 * - 53 )

Expected: ["0"] but got ["810"]
```


```sql
SELECT DISTINCT + ( 81 ) * COUNT ( * ) FROM tab2 WHERE NOT ( col0 ) NOT IN ( + col0 * - 53 )

Expected: ["0"] but got ["810"]
```


```sql
SELECT ( col5 ) FROM tab0 AS cor0 WHERE NOT ( + 45 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col2 AS col5 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT 89 AS col4 FROM tab0 AS cor0 WHERE NOT - 89 BETWEEN + 97 AND - 74

Query was expected to return results (but did not) 
```


```sql
SELECT ALL 93 + - SUM ( DISTINCT - + CAST ( NULL AS INTEGER ) ) FROM tab0 WHERE NOT NULL IS NULL

Expected: ["NULL"] but got ["93"]
```


```sql
SELECT DISTINCT 41 * - col0 FROM tab0 WHERE NOT col4 IN ( - 28 )

Query was expected to return results (but did not) 
```


```sql
SELECT - COUNT ( * ) AS col0 FROM tab0 WHERE NOT ( NULL ) < NULL

Expected: ["0"] but got ["-10"]
```


```sql
SELECT ALL AVG ( 57 ) / COUNT ( * ) AS col4 FROM tab0 WHERE NOT NULL NOT IN ( + ( col1 ) )

Expected: ["NULL"] but got ["5.700"]
```


```sql
SELECT - CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT col2 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - COUNT ( * ) FROM tab0 AS cor0 WHERE NOT NULL > col0

Expected: ["0"] but got ["-10"]
```


```sql
SELECT DISTINCT - col0 - - col0 FROM tab2 AS cor0 WHERE + 44 / - CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT col5 FROM tab0 WHERE - 3 - + col3 NOT IN ( col1 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + AVG ( col1 ) AS col1 FROM tab0 WHERE NOT col1 NOT IN ( 52 )

Expected: ["NULL"] but got ["619.493"]
```


```sql
SELECT + COUNT ( * ) FROM tab0 WHERE NOT - 69 = NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT - COUNT ( * ) FROM tab0 WHERE NOT + 13 / + col1 = NULL

Expected: ["0"] but got ["-10"]
```


```sql
SELECT ALL 56 + 60 FROM tab0 WHERE NOT + col1 * + col3 IN ( 97 )

Query was expected to return results (but did not) 
```


```sql
SELECT col2 AS col3 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col2 FROM tab0 AS cor0 WHERE NOT col1 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL col5 FROM tab0 AS cor0 WHERE col4 <> + col1 OR NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - AVG ( ( + + col0 ) ) FROM tab0 AS cor0 WHERE NOT + 83 * + 3 + - 17 = NULL

Expected: ["NULL"] but got ["-659.800"]
```


```sql
SELECT - 67 FROM tab0 AS cor0 WHERE 31 NOT BETWEEN NULL AND - 31

Query was expected to return results (but did not) 
```


```sql
SELECT ALL - SUM ( ALL col4 ) FROM tab0 WHERE NOT - col4 NOT IN ( col1 )

Expected: ["NULL"] but got ["-4779.480"]
```


```sql
SELECT ( + col2 ) FROM tab0 AS cor0 WHERE ( NULL ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - 86 AS col1 FROM tab0 AS cor0 WHERE NOT col4 BETWEEN NULL AND ( - + col1 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL ( CAST ( NULL AS REAL ) ) / - 21 AS col1 FROM tab0 AS cor0 WHERE col4 NOT BETWEEN col1 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL col2 AS col2 FROM tab0 WHERE ( NULL ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + COUNT ( ALL + col3 ) AS col4, 8 FROM tab0 AS cor0 WHERE NOT + 6 >= NULL

Expected: ["0","8"] but got ["8","10"]
```


```sql
SELECT + CAST ( NULL AS INTEGER ) - + COUNT ( * ) col0 FROM tab0 AS cor0 WHERE col4 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT - 64 / col0 * - - 1 FROM tab0 cor0 WHERE + 82 <> - col1

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + 64 / col0 AS col4 FROM tab0 WHERE NOT - col3 IN ( 40 )

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT + COUNT ( * ) AS col0 FROM tab0 AS cor0 WHERE NOT col0 = NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT 66 + 15 / - 71 FROM tab0 AS cor0 WHERE NOT CAST ( NULL AS INTEGER ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT col5 AS col0 FROM tab0 AS cor0 WHERE NOT - col3 + - 69 < - col0 * col0

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - + 92 * + ( - MAX ( ALL - col4 ) ) FROM tab0 cor0 WHERE NOT 21 = + CAST ( NULL AS INTEGER )

Expected: ["NULL"] but got ["-11749.320"]
```


```sql
SELECT SUM ( DISTINCT - col4 ) col0 FROM tab0 AS cor0 WHERE NULL NOT IN ( - 4 * + - 0, - col4, + 70 )

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT + col3 / 12 FROM tab0 WHERE NOT - + col4 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col2 AS col3 FROM tab0 WHERE + col1 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + COUNT ( * ), + COUNT ( * ) AS col0 FROM tab0 WHERE NOT NULL NOT BETWEEN col4 AND col4

Expected: ["0","0"] but got ["10","10"]
```


```sql
SELECT + col2 col5 FROM tab0 AS cor0 WHERE ( col4 ) BETWEEN col0 AND - 96 * - col3

Expected: ["0","0","0"] but got ["amwpr","ehefd","uxbns"]
```


```sql
SELECT ALL col2 AS col0 FROM tab0 WHERE ( - 1 * col4 ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```

#### ☓ Ran 10,034 tests as _sqlite_

* 570 failed
* 94% was OK


---- ---- ---- ---- ---- ---- ----
### 196/622 [`./test/index/random/10/slt_good_6.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/10/slt_good_6.test)

_Mimic sqlite_

```sql
SELECT SUM ( DISTINCT + + 90 ) AS col3 FROM tab0 AS cor0 WHERE NULL IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL col2 AS col2 FROM tab0 WHERE 80 * 48 - - 91 > - col4

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT CAST ( NULL AS INTEGER ) AS col0 FROM tab0 WHERE NOT col1 >= + 89

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT COUNT ( * ) FROM tab0 AS cor0 WHERE NOT - 33 <> ( NULL )

Expected: ["0"] but got ["10"]
```


```sql
SELECT DISTINCT 36 / COUNT ( * ) FROM tab0 WHERE NOT NULL IS NOT NULL

Expected: ["3"] but got ["3.600"]
```


```sql
SELECT col5 FROM tab0 WHERE NOT - col1 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL - col3 / col0 + + + 65 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL ( - col0 ) - 31 - - 80 FROM tab0 AS cor0 WHERE NOT col4 / 6 IN ( + col1 / - + col0 * - col1 )

Query was expected to return results (but did not) 
```


```sql
SELECT - - SUM ( DISTINCT 83 ) - + CAST ( NULL AS INTEGER ) AS col0 FROM tab0 cor0 WHERE NOT ( - 67 ) >= 48

Expected: ["NULL"] but got ["83"]
```


```sql
SELECT + col5 AS col1 FROM tab0 WHERE NOT 22 IN ( + ( - col0 ) + + col0 )

Query was expected to return results (but did not) 
```


```sql
SELECT col2 FROM tab0 AS cor0 WHERE ( 74 ) >= - col4

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - CAST ( - col0 AS INTEGER ) * - - CAST ( NULL AS INTEGER ) / - + col0 AS col4 FROM tab0 AS cor0 WHERE + col4 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ( - ( SUM ( - col3 ) ) ) FROM tab0 WHERE + col0 NOT BETWEEN ( - - CAST ( NULL AS REAL ) + col3 * - col4 ) AND col0 + + col3 + - col1 + col3 * col4

Expected: ["NULL"] but got ["5976"]
```


```sql
SELECT col2 FROM tab0 WHERE col1 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + COUNT ( * ) AS col4 FROM tab0 AS cor0 WHERE NOT NULL > NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT ALL + col0 FROM tab0 AS cor0 WHERE NOT - CAST ( NULL AS INTEGER ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT - - 69 * - SUM ( DISTINCT - 33 ) + + 58 FROM tab0 WHERE NOT col4 * - 78 + - 59 IS NOT NULL

Expected: ["NULL"] but got ["58"]
```


```sql
SELECT col2 AS col2 FROM tab0 AS cor0 WHERE ( NULL ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + SUM ( ALL ( - - col3 ) ) AS col0 FROM tab0 AS cor0 WHERE NOT 56 IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT - COUNT ( * ) AS col4 FROM tab0 AS cor0 WHERE NOT NULL < col1 * + - CAST ( + col3 AS REAL )

Expected: ["0"] but got ["-10"]
```


```sql
SELECT + + COUNT ( * ) AS col1, - CAST ( NULL AS INTEGER ) * 42 AS col4 FROM tab0 cor0 WHERE + col0 NOT BETWEEN NULL AND NULL

Expected: ["0","NULL"] but got ["0","0"]
```


```sql
SELECT ALL + col5 AS col1 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - CAST ( + + COUNT ( * ) AS INTEGER ) FROM tab0 WHERE NOT NULL IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + CAST ( COUNT ( * ) AS INTEGER ) FROM tab0 WHERE NOT ( col4 ) <= NULL

g is not defined
```


```sql
SELECT + col5 AS col5 FROM tab0 AS cor0 WHERE ( col3 + - 83 ) >= ( col0 / - col1 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT COUNT ( * ) AS col2 FROM tab0 WHERE NOT + 79 BETWEEN NULL AND + col1

Expected: ["1"] but got ["0"]
```


```sql
SELECT DISTINCT MIN ( DISTINCT - 43 ) AS col0 FROM tab0 AS cor0 WHERE NOT ( - - col1 <> NULL )

Expected: ["NULL"] but got ["-43"]
```


```sql
SELECT ALL col5 col0 FROM tab0 WHERE + col3 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - COUNT ( * ) AS col1 FROM tab0 WHERE NOT NULL > col4

Expected: ["0"] but got ["-10"]
```


```sql
SELECT CAST ( NULL AS INTEGER ) AS col3 FROM tab0 AS cor0 WHERE NOT - col3 IN ( + - 29 * 82 )

Query was expected to return results (but did not) 
```


```sql
SELECT - AVG ( DISTINCT 27 ) + - MAX ( DISTINCT col1 ) AS col4 FROM tab0 WHERE NOT NULL <> - + 90

Expected: ["NULL"] but got ["-920.410"]
```


```sql
SELECT DISTINCT - SUM ( CAST ( col1 AS INTEGER ) ) + - AVG ( ALL col1 + col0 ) FROM tab0 AS cor0 WHERE NOT - col4 + col1 NOT IN ( 39 )

Expected: ["NULL"] but got ["-6331.939"]
```


```sql
SELECT ALL + col4 * + CAST ( NULL AS INTEGER ) AS col2 FROM tab0 WHERE + 43 * + - col4 < ( + + col0 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT COUNT ( * ) / + + 42 FROM tab0 WHERE - 16 - - col0 IS NOT NULL

Expected: ["0"] but got ["0.238"]
```


```sql
SELECT ALL 72 FROM tab0 WHERE + - col1 * - - ( - col0 ) / + col4 - + col3 + + col0 + + 62 * CAST ( NULL AS INTEGER ) * col0 * - col4 + + 91 IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL col2 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT CAST ( NULL AS INTEGER ) * + + 42 * - col4 AS col3 FROM tab0 cor0 WHERE NOT NULL IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + COUNT ( 15 ) FROM tab0 cor0 WHERE NOT NULL <= col3 / - + 34

Expected: ["0"] but got ["10"]
```


```sql
SELECT ALL + col2 FROM tab0 WHERE ( - col0 ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col2 FROM tab0 WHERE ( 60 + + col3 ) < ( + col0 )

Expected: ["0","0","0","0","0"] but got ["gvttq","qvahk","tgsmz","zfxgo","zkoew"]
```


```sql
SELECT DISTINCT - 57 FROM tab0 cor0 WHERE NOT ( - col1 - 46 ) NOT BETWEEN - col0 AND + 94 + + 33

Query was expected to return results (but did not) 
```


```sql
SELECT ALL - + CAST ( NULL AS INTEGER ) * + - col1 FROM tab0 AS cor0 WHERE NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + 50 FROM tab0 WHERE + + CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT SUM ( 74 ) FROM tab0 AS cor0 WHERE NULL IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL + CAST ( COUNT ( ALL col0 ) AS INTEGER ) col3 FROM tab0 WHERE NULL IS NULL

g is not defined
```


```sql
SELECT ALL + CAST ( COUNT ( ALL col0 ) AS INTEGER ) col3 FROM tab3 WHERE NULL IS NULL

g is not defined
```


```sql
SELECT + col5 FROM tab0 WHERE NOT + 47 >= + col0 - + col4 + + col3 * - + col1 * - 53

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + ( COUNT ( * ) ) FROM tab0 AS cor0 WHERE NOT NULL <> - CAST ( NULL AS INTEGER )

Expected: ["0"] but got ["10"]
```


```sql
SELECT MAX ( ALL - - CAST ( NULL AS INTEGER ) ) AS col1 FROM tab0 WHERE NOT + col2 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col3 / + 44 AS col1 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + COUNT ( * ) FROM tab0 cor0 WHERE NOT ( NULL ) <= + 55

Expected: ["0"] but got ["10"]
```


```sql
SELECT MIN ( DISTINCT - col4 ) * - COUNT ( * ) * 66 AS col1 FROM tab0 WHERE NOT col3 * + col0 > NULL

Expected: ["NULL"] but got ["558188.400"]
```


```sql
SELECT ALL COUNT ( * ) AS col1 FROM tab0 AS cor0 WHERE NOT NULL <> NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT - CAST ( NULL AS INTEGER ) * col0 AS col0 FROM tab0 WHERE col5 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL COUNT ( * ) FROM tab2 AS cor0 WHERE NOT ( - col0 ) > NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT 35 * + col0 FROM tab0 WHERE NOT + 74 IN ( ( - + ( + 23 ) ) + + col1 )

Query was expected to return results (but did not) 
```


```sql
SELECT + col3 col5, col2 col5 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL col5 col0 FROM tab0 AS cor0 WHERE + col5 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT AVG ( + 7 ) AS col4 FROM tab0 AS cor0 WHERE NOT CAST ( NULL AS INTEGER ) IS NULL

Expected: ["NULL"] but got ["7"]
```


```sql
SELECT - COUNT ( * ) FROM tab0 WHERE NOT NULL <> ( NULL )

Expected: ["0"] but got ["-10"]
```


```sql
SELECT ALL + col2 col1 FROM tab0 WHERE NOT ( col0 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - CAST ( NULL AS INTEGER ) AS col2 FROM tab0 cor0 WHERE - CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT + COUNT ( * ) FROM tab0 AS cor0 WHERE NOT ( NULL ) NOT BETWEEN - CAST ( NULL AS INTEGER ) AND - 18

Expected: ["0"] but got ["10"]
```


```sql
SELECT DISTINCT SUM ( ALL col0 ) AS col1 FROM tab0 AS cor0 WHERE NOT ( col3 * + ( col0 ) ) > NULL

Expected: ["NULL"] but got ["6102"]
```


```sql
SELECT ALL + col2 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + SUM ( ( + col1 ) ) * - - MAX ( + 27 ) AS col2 FROM tab0 WHERE NOT - col1 >= NULL

Expected: ["NULL"] but got ["140599.530"]
```


```sql
SELECT DISTINCT 20 * + COUNT ( * ) + 23 / - 37 FROM tab0 WHERE NULL >= + 70

Expected: ["0"] but got ["-0.622"]
```


```sql
SELECT + col5 AS col0 FROM tab0 AS cor0 WHERE + 49 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col5 AS col0 FROM tab4 AS cor0 WHERE + 49 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + COUNT ( * ) FROM tab0 WHERE NOT ( - 1 * - col4 + + 7 ) BETWEEN + 13 / 22 AND ( - col4 )

Expected: ["10"] but got ["0"]
```


```sql
SELECT col2 FROM tab0 WHERE NOT col3 + col3 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col2 FROM tab0 WHERE + col0 * + col0 + - col4 * col3 <= ( + col1 + col4 * - 0 ) OR ( + 57 * + col0 ) = NULL

Expected: ["0","0"] but got ["naijw","wodwv"]
```


```sql
SELECT ALL col0 - 18 AS col5 FROM tab0 WHERE NOT col3 + - col0 IN ( col1 )

Query was expected to return results (but did not) 
```


```sql
SELECT SUM ( ALL col1 ) + - COUNT ( * ) FROM tab0 AS cor0 WHERE ( NOT - col4 <= NULL )

Expected: ["NULL"] but got ["5197.390"]
```


```sql
SELECT col0 * + - 7 FROM tab0 WHERE CAST ( col0 AS INTEGER ) NOT BETWEEN NULL AND + col3

Query was expected to return results (but did not) 
```


```sql
SELECT ALL - 72 / + + SUM ( DISTINCT + 51 ) AS col4 FROM tab0 WHERE NOT - 65 IS NULL

Expected: ["-1"] but got ["-1.412"]
```


```sql
SELECT CAST ( - MAX ( - + 58 ) AS INTEGER ) AS col3, 25 + COUNT ( * ) + - 74 FROM tab0 AS cor0 WHERE - col3 BETWEEN + 50 AND NULL

Expected: ["NULL","-49"] but got ["0","-49"]
```

#### ☓ Ran 10,034 tests as _sqlite_

* 600 failed
* 94% was OK


---- ---- ---- ---- ---- ---- ----
### 197/622 [`./test/index/random/10/slt_good_7.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/10/slt_good_7.test)

_Mimic sqlite_

```sql
SELECT DISTINCT - 19 FROM tab0 cor0 WHERE col3 NOT BETWEEN + 31 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + CAST ( + CAST ( NULL AS INTEGER ) AS INTEGER ) FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - MIN ( ALL + + 73 ) AS col4 FROM tab0 cor0 WHERE NOT 35 >= NULL

Expected: ["NULL"] but got ["-73"]
```


```sql
SELECT + 29 / + 68 AS col5 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + 39 AS col0 FROM tab0 WHERE NOT ( ( col0 ) ) IN ( 38 )

Query was expected to return results (but did not) 
```


```sql
SELECT col3 * 2 AS col0 FROM tab0 WHERE NOT + col1 BETWEEN - 95 AND col0

Expected: ["1568","158","1710","488"] but got ["1150","1568","158","1710","1858","1944","26","468","488","662"]
```


```sql
SELECT ( - 18 ) * + COUNT ( * ) FROM tab0 AS cor0 WHERE NOT NULL >= NULL

Expected: ["0"] but got ["-180"]
```


```sql
SELECT + - CAST ( NULL AS INTEGER ) FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT 80 FROM tab0 WHERE NOT + CAST ( NULL AS INTEGER ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT + 11 * COUNT ( * ) + - + 13 FROM tab0 WHERE NOT NULL = NULL

Expected: ["-13"] but got ["97"]
```


```sql
SELECT + col2 col1, 42 + + 49 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + CAST ( NULL AS INTEGER ) / - COUNT ( * ) FROM tab0 WHERE NOT - + col4 * - col3 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + CAST ( NULL AS INTEGER ) / - COUNT ( * ) FROM tab3 WHERE NOT - + col4 * - col3 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + - COUNT ( col3 ) AS col5 FROM tab0 AS cor0 WHERE NOT col1 + + col4 <> NULL

Expected: ["0"] but got ["-10"]
```


```sql
SELECT 13 - col3 FROM tab0 WHERE NOT - 57 + col4 IN ( ( + 63 ) )

Query was expected to return results (but did not) 
```


```sql
SELECT + ( - col3 ) FROM tab0 AS cor0 WHERE - CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ( + SUM ( col3 ) ) AS col5 FROM tab0 WHERE + + col0 * + CAST ( NULL AS INTEGER ) IS NULL

Expected: ["5016"] but got ["0"]
```


```sql
SELECT DISTINCT - + AVG ( + col3 ) * 99 FROM tab0 WHERE CAST ( NULL AS INTEGER ) * + CAST ( + 29 AS REAL ) IS NOT NULL

Expected: ["NULL"] but got ["-49658.400"]
```


```sql
SELECT - CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE NOT + CAST ( + col4 AS INTEGER ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT COUNT ( * ) col0 FROM tab0 cor0 WHERE NOT NULL <= NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT DISTINCT - 66 FROM tab0 WHERE NOT + col4 IN ( 95 - - col0 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL MAX ( 72 ) col2 FROM tab0 AS cor0 WHERE NOT ( - 35 ) >= NULL

Expected: ["NULL"] but got ["72"]
```


```sql
SELECT ALL + COUNT ( * ) AS col3 FROM tab0 cor0 WHERE NOT col0 <> NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT ALL col5 FROM tab0 AS cor0 WHERE NOT ( col2 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT 30 * - 57 + - AVG ( DISTINCT + col0 ) + + 96 FROM tab0 WHERE NOT NULL <= NULL

Expected: ["NULL"] but got ["-2160.100"]
```


```sql
SELECT + ( col5 ) AS col1 FROM tab0 WHERE + 82 >= - + 91 * - - 1

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + + 31 * + + 36 + SUM ( col1 ) FROM tab0 AS cor0 WHERE NOT ( NULL ) <> NULL

Expected: ["NULL"] but got ["6368.470"]
```


```sql
SELECT DISTINCT + CAST ( NULL AS INTEGER ) + + col1 FROM tab0 cor0 WHERE NOT col5 IS NULL

Expected: ["NULL"] but got ["10.980","258.580","352.360","452.800","476.200","614.560","736.810","760.280","770.210","819.690"]
```


```sql
SELECT + col5 AS col1 FROM tab0 AS cor0 WHERE ( - 0 ) BETWEEN 6 * - col4 AND ( + col0 * - - col1 - 48 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL col3 FROM tab0 WHERE NOT 66 NOT BETWEEN col3 AND - - col4

Expected: ["13"] but got ["13","234","244","331","575","784","79","855","929","972"]
```


```sql
SELECT + CAST ( NULL AS INTEGER ) AS col2 FROM tab0 WHERE NOT - 57 >= + ( - col4 )

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT - 68 col3, + col2 FROM tab0 WHERE ( + 76 ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + 92 * + - 75 FROM tab0 AS cor0 WHERE NOT + ( + - col0 ) IN ( - + ( + + 81 ) + + col3 )

Query was expected to return results (but did not) 
```


```sql
SELECT + + col2 FROM tab0 cor0 WHERE NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + + col2 FROM tab1 cor0 WHERE NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT COUNT ( * ) AS col1 FROM tab0 cor0 WHERE NOT 33 BETWEEN col4 AND NULL

Expected: ["9"] but got ["0"]
```


```sql
SELECT - 39 FROM tab0 AS cor0 WHERE NOT - col3 BETWEEN NULL AND - col0

Query was expected to return results (but did not) 
```


```sql
SELECT + COUNT ( * ) FROM tab0 WHERE NOT NULL <> ( - - col0 )

Expected: ["0"] but got ["10"]
```


```sql
SELECT ALL col5 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + - MAX ( DISTINCT + col3 ) AS col2, + ( + COUNT ( * ) ) + + 71 FROM tab0 WHERE NOT + 13 * CAST ( NULL AS INTEGER ) IS NOT NULL

Expected: ["-972","81"] but got ["NULL","71"]
```


```sql
SELECT + - COUNT ( * ) FROM tab0 AS cor0 WHERE NOT 26 = NULL

Expected: ["0"] but got ["-10"]
```


```sql
SELECT - COUNT ( * ) * AVG ( DISTINCT + col3 ) AS col3 FROM tab0 WHERE NOT NULL <= + + col3

Expected: ["NULL"] but got ["-5016"]
```


```sql
SELECT - CAST ( NULL AS INTEGER ) FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL col2 AS col0 FROM tab0 WHERE + - 31 NOT IN ( col0 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - COUNT ( * ) * ( + COUNT ( * ) ) col1 FROM tab0 WHERE ( + CAST ( NULL AS INTEGER ) / - 69 + + col1 ) IS NOT NULL

Expected: ["0"] but got ["-100"]
```


```sql
SELECT ALL + 53 FROM tab0 AS cor0 WHERE NOT - 45 IN ( - 18 * + 49 / - 78 )

Query was expected to return results (but did not) 
```


```sql
SELECT + + col2 FROM tab0 AS cor0 WHERE NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL col2 AS col0, - col0 AS col1 FROM tab0 AS cor0 WHERE NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - MAX ( DISTINCT + col3 ) + + + COUNT ( * ) AS col1 FROM tab0 AS cor0 WHERE NOT NULL = + col3

Expected: ["NULL"] but got ["-962"]
```


```sql
SELECT DISTINCT MIN ( - - 16 ) / + 63 FROM tab0 WHERE - col4 IS NOT NULL

Expected: ["0"] but got ["0.254"]
```


```sql
SELECT ALL CAST ( NULL AS INTEGER ) AS col1 FROM tab0 cor0 WHERE NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - COUNT ( * ) FROM tab0 AS cor0 WHERE NOT 83 >= NULL

Expected: ["0"] but got ["-10"]
```


```sql
SELECT + col5 FROM tab0 AS cor0 WHERE + 92 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL CAST ( NULL AS INTEGER ) AS col2 FROM tab0 AS cor0 WHERE 90 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col2 FROM tab0 AS cor0 WHERE col2 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + CAST ( NULL AS INTEGER ) * - COUNT ( * ) * + COUNT ( * ) - SUM ( 21 ) FROM tab0 AS cor0 WHERE NOT + 60 * 88 * + col1 IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT 57 col1 FROM tab0 WHERE NOT - CAST ( - 56 AS INTEGER ) BETWEEN col1 AND + col4

Query was expected to return results (but did not) 
```


```sql
SELECT CAST ( NULL AS INTEGER ) / ( - COUNT ( * ) ) - - 45 col3 FROM tab0 WHERE NOT NULL IS NOT NULL

Expected: ["NULL"] but got ["45"]
```


```sql
SELECT col5, 87 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL COUNT ( * ) FROM tab0 WHERE NOT NULL <= NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT + col2 AS col0, - ( - 29 ) * + 17 FROM tab0 AS cor0 WHERE NOT CAST ( NULL AS INTEGER ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + 55 / - - col3 col1 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col5 FROM tab0 WHERE NOT CAST ( + 24 AS REAL ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT COUNT ( * ) - - CAST ( NULL AS INTEGER ) AS col2 FROM tab0 WHERE col1 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT + CAST ( NULL AS INTEGER ) AS col4 FROM tab0 WHERE - - col4 IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL col2 AS col5 FROM tab0 WHERE - + col3 BETWEEN - 72 AND 50 + + 78

Expected: ["0"] but got ["hmsci"]
```


```sql
SELECT 39 AS col3 FROM tab0 cor0 WHERE NOT - col1 + - col1 IN ( + col4 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL - 4 col4 FROM tab0 WHERE + col4 NOT BETWEEN + + ( + CAST ( NULL AS REAL ) ) AND ( 78 )

Query was expected to return results (but did not) 
```


```sql
SELECT + - COUNT ( * ) AS col4 FROM tab0 AS cor0 WHERE NOT NULL <= 27

Expected: ["0"] but got ["-10"]
```


```sql
SELECT + + col2 FROM tab0 cor0 WHERE + col2 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + CAST ( NULL AS INTEGER ) AS col5 FROM tab0 WHERE NULL IS NULL

Expected: ["NULL"] but got ["0"]
```

#### ☓ Ran 10,031 tests as _sqlite_

* 520 failed
* 94% was OK


---- ---- ---- ---- ---- ---- ----
### 198/622 [`./test/index/random/10/slt_good_8.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/10/slt_good_8.test)

_Mimic sqlite_

```sql
SELECT SUM ( col3 ) AS col4 FROM tab0 WHERE NOT - 85 + ( + CAST ( NULL AS INTEGER ) ) NOT IN ( col3 * 49 )

Expected: ["NULL"] but got ["5614"]
```


```sql
SELECT ALL COUNT ( * ) AS col4 FROM tab0 WHERE NOT ( + - col1 ) BETWEEN col3 * + col0 + - - col3 AND ( - + col4 + + + col0 )

Expected: ["10"] but got ["0"]
```


```sql
SELECT ALL - - 78 + - - MAX ( DISTINCT - + col0 ) FROM tab0 WHERE NOT + - col4 - + + col4 < NULL

Expected: ["NULL"] but got ["-131"]
```


```sql
SELECT DISTINCT 70 AS col4 FROM tab0 AS cor0 WHERE 32 * - + col1 * - ( - col4 ) NOT BETWEEN + 2 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT 2 * 68 / + 92 AS col2, COUNT ( * ) - 8 - - + 97 + - 7 FROM tab3 WHERE + - 4 IN ( 81 * col4 )

Expected: ["1","82"] but got ["1.478","82"]
```


```sql
SELECT + AVG ( - + 82 ) AS col2 FROM tab0 cor0 WHERE NOT NULL < - 39

Expected: ["NULL"] but got ["-82"]
```


```sql
SELECT + AVG ( - + 82 ) AS col2 FROM tab1 cor0 WHERE NOT NULL < - 39

Expected: ["NULL"] but got ["-82"]
```


```sql
SELECT ALL - - COUNT ( * ) AS col3 FROM tab0 WHERE NOT CAST ( NULL AS INTEGER ) IS NOT NULL

Expected: ["10"] but got ["0"]
```


```sql
SELECT col5 FROM tab0 AS cor0 WHERE NOT ( col0 - col4 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + + col2 FROM tab0 WHERE NOT + col4 * + + 59 + - + col3 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + - col0 * col3 FROM tab0 AS cor0 WHERE col4 NOT BETWEEN NULL AND + 82

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + col2 FROM tab0 AS cor0 WHERE - col3 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - CAST ( NULL AS INTEGER ) + + ( ( - col3 ) + col1 ) FROM tab0 WHERE - col3 + + 27 * + col1 IS NOT NULL

Expected: ["NULL"] but got ["-239","-276.290","-409.650","-416.580","-54.230","-811.430","159.290","55.330","556.350","59.720"]
```


```sql
SELECT DISTINCT COUNT ( 69 ) AS col1 FROM tab0 WHERE NOT + CAST ( NULL AS INTEGER ) < NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT + col5 AS col5 FROM tab0 AS cor0 WHERE + col4 NOT BETWEEN NULL AND + col3

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT - ( 8 ) / - 66 AS col2 FROM tab0 WHERE + col3 * + ( - CAST ( + col4 AS INTEGER ) ) - - - col1 * + col1 NOT BETWEEN + col4 AND + ( 6 ) + + CAST ( NULL AS REAL ) * + col1

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT CAST ( NULL AS INTEGER ) - COUNT ( * ) FROM tab0 WHERE ( 72 * + col3 + + CAST ( + ( + 15 ) AS INTEGER ) ) IS NOT NULL

Expected: ["NULL"] but got ["-10"]
```


```sql
SELECT DISTINCT col0 / - - col3 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Expected: ["0","1","2"] but got ["0.223","0.358","0.545","1.154","1.356","1.447","1.513","1.743","2.215","2.336"]
```


```sql
SELECT + - CAST ( COUNT ( * ) AS INTEGER ) FROM tab0 AS cor0 WHERE NOT 75 * - 78 * + - ( ( - + 46 ) ) IS NULL

g is not defined
```


```sql
SELECT col2 AS col4 FROM tab0 cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + - SUM ( DISTINCT ( col0 ) ) FROM tab0 WHERE 46 * + CAST ( 85 AS INTEGER ) = NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col3 * CAST ( NULL AS INTEGER ) FROM tab0 WHERE NOT ( + ( 75 ) ) = ( 55 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - col0 col3 FROM tab0 WHERE NOT - col3 IN ( + col0 )

Query was expected to return results (but did not) 
```


```sql
SELECT SUM ( - + col1 ) FROM tab0 AS cor0 WHERE ( NOT NULL NOT IN ( + col4 * + 42 ) )

Expected: ["NULL"] but got ["-4237.510"]
```


```sql
SELECT CAST ( NULL AS INTEGER ) AS col3 FROM tab0 WHERE NOT - 64 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL COUNT ( * ) AS col5 FROM tab0 WHERE ( NOT ( 15 * CAST ( NULL AS INTEGER ) + col4 ) IS NULL )

Expected: ["0"] but got ["10"]
```


```sql
SELECT + col5 col1 FROM tab0 AS cor0 WHERE - 7 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col5 AS col5 FROM tab0 WHERE 13 NOT BETWEEN + 18 AND ( NULL )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL col2 AS col1 FROM tab0 AS cor0 WHERE NOT ( col5 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - 65 + - - COUNT ( * ) FROM tab0 WHERE NOT NULL < NULL

Expected: ["-65"] but got ["-55"]
```


```sql
SELECT col3 FROM tab0 AS cor0 WHERE NOT + col4 IN ( col0 )

Query was expected to return results (but did not) 
```


```sql
SELECT col3 / 15 AS col0 FROM tab0 AS cor0 WHERE NOT ( col0 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - ( 33 ) * COUNT ( * ) col3 FROM tab0 WHERE NOT + col0 * + CAST ( NULL AS INTEGER ) + 57 NOT IN ( + col0 )

Expected: ["0"] but got ["-330"]
```


```sql
SELECT DISTINCT - 17 col1, - SUM ( ALL CAST ( + 31 AS INTEGER ) ) FROM tab0 WHERE ( NOT col4 NOT BETWEEN + 82 AND ( - col0 ) )

Expected: ["-17","NULL"] but got ["-17","-310"]
```


```sql
SELECT ALL + col5 AS col2 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - + col3 col5 FROM tab0 AS cor0 WHERE NOT + 42 IN ( 84, col3 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL - COUNT ( * ) + + - 22 FROM tab0 cor0 WHERE NOT NULL NOT BETWEEN 80 AND 75

Expected: ["-22"] but got ["-32"]
```


```sql
SELECT + col2 AS col4 FROM tab0 WHERE + col0 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col3 * + col3 col1 FROM tab0 cor0 WHERE NOT - col3 + - col3 * + 99 BETWEEN + col4 - - + col4 AND CAST ( - col3 AS INTEGER ) * col4 * - col1 + - col3

Query was expected to return results (but did not) 
```


```sql
SELECT - - COUNT ( * ) AS col5 FROM tab0 AS cor0 WHERE NOT NULL > + CAST ( - + 83 AS INTEGER )

Expected: ["0"] but got ["10"]
```


```sql
SELECT ALL 97 + - COUNT ( * ) * + CAST ( NULL AS INTEGER ) FROM tab0 cor0 WHERE NOT + col1 * - - 27 IS NULL

Expected: ["NULL"] but got ["97"]
```


```sql
SELECT - - CAST ( NULL AS INTEGER ) AS col4 FROM tab0 AS cor0 WHERE col4 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT 1 col2 FROM tab0 AS cor0 WHERE NOT ( 60 ) + - col0 * + col1 IN ( 65 + + col4, 44, + col0, - 95 )

Query was expected to return results (but did not) 
```


```sql
SELECT - COUNT ( * ) AS col0 FROM tab0 AS cor0 WHERE NOT NULL < 64

Expected: ["0"] but got ["-10"]
```


```sql
SELECT ALL + col5 FROM tab0 AS cor0 WHERE - col1 + + 47 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + COUNT ( * ) AS col0 FROM tab0 WHERE NOT + - col1 > NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT + MIN ( ALL + ( + col0 ) ) AS col3 FROM tab0 AS cor0 WHERE NOT + col3 / + 80 * + col3 >= NULL

Expected: ["NULL"] but got ["209"]
```


```sql
SELECT col0 * + ( 90 ) AS col4 FROM tab0 WHERE NOT - 24 IN ( col4 )

Query was expected to return results (but did not) 
```


```sql
SELECT + + col2 AS col2 FROM tab0 AS cor0 WHERE NOT + 72 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT COUNT ( * ) FROM tab0 AS cor0 WHERE NOT NULL >= NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT ALL - + 98 FROM tab0 AS cor0 WHERE - 57 + + col1 NOT BETWEEN NULL AND - col0 / - col0 - col3

Query was expected to return results (but did not) 
```


```sql
SELECT - MAX ( ALL + + 78 ) FROM tab0 AS cor0 WHERE NOT + 18 BETWEEN col1 + - ( col1 ) + + ( col1 ) * - - col1 AND 17 * + col0

Expected: ["-78"] but got ["NULL"]
```


```sql
SELECT - 86 + - col3 + 16 / + - col0 AS col2 FROM tab0 AS cor0 WHERE 40 * + col4 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT SUM ( col0 ) * - 44 FROM tab0 AS cor0 WHERE ( NULL ) >= NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col5 AS col1 FROM tab0 AS cor0 WHERE col4 NOT BETWEEN - ( - 32 ) AND - CAST ( - col1 AS INTEGER )

Expected: ["0","0","0","0","0"] but got ["apjmo","dubev","ithfo","ktnfz","vzeio"]
```


```sql
SELECT DISTINCT - + SUM ( ALL - + 79 ) AS col5 FROM tab0 WHERE + 50 + 66 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT - COUNT ( * ) FROM tab0 AS cor0 WHERE NOT NULL <= col4

Expected: ["0"] but got ["-10"]
```


```sql
SELECT col5 FROM tab0 AS cor0 WHERE 55 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL ( - 76 ) FROM tab0 WHERE NOT - 62 * CAST ( NULL AS INTEGER ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL CAST ( COUNT ( * ) AS INTEGER ) col1 FROM tab0 AS cor0 WHERE NOT ( NULL ) NOT IN ( + col1 * + 58 )

g is not defined
```


```sql
SELECT + - COUNT ( * ) AS col0 FROM tab0 WHERE NOT NULL <> + 43 / + 92

Expected: ["0"] but got ["-10"]
```


```sql
SELECT + MAX ( DISTINCT - col1 ) + + - CAST ( NULL AS INTEGER ) AS col0 FROM tab0 WHERE NOT NULL IS NOT NULL

Expected: ["NULL"] but got ["-85.420"]
```


```sql
SELECT ALL col5 AS col2 FROM tab0 cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + CAST ( + + MIN ( + 65 ) AS INTEGER ) FROM tab0 cor0 WHERE NOT + ( - + col1 ) IS NULL

g is not defined
```


```sql
SELECT ALL - - CAST ( NULL AS INTEGER ) * + - MIN ( - col1 ) FROM tab0 AS cor0 WHERE NOT 47 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT CAST ( - COUNT ( * ) AS INTEGER ) FROM tab0 cor0 WHERE NOT + 44 IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL col2 col2, + 43 - + + col3 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT 57 AS col2, - col0 + + col3 FROM tab0 WHERE + col4 NOT BETWEEN NULL AND + 81

Query was expected to return results (but did not) 
```


```sql
SELECT col2 FROM tab0 AS cor0 WHERE col1 * 12 - + 12 * - col0 * - + 15 NOT BETWEEN 99 AND + - 78 * - col1

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - 73 * 51 - + CAST ( NULL AS INTEGER ) AS col1 FROM tab0 WHERE NOT + - col3 / - + 42 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - 52 FROM tab0 AS cor0 WHERE NOT ( col3 * + col3 + + - 49 ) IN ( + col3, + 1 - col3 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + col5 AS col1 FROM tab0 cor0 WHERE NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT 4 - SUM ( ALL - - col4 ) AS col0 FROM tab0 AS cor0 WHERE NULL IS NOT NULL

Expected: ["NULL"] but got ["4"]
```


```sql
SELECT - 87 * COUNT ( + - CAST ( NULL AS INTEGER ) ) FROM tab0 AS cor0 WHERE NOT col1 IS NULL

Expected: ["0"] but got ["-870"]
```


```sql
SELECT ALL SUM ( CAST ( NULL AS INTEGER ) ) AS col0 FROM tab0 AS cor0 WHERE NOT ( 28 * CAST ( CAST ( NULL AS REAL ) AS REAL ) ) < 42

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL col5 FROM tab0 WHERE NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL 52 / 22 col1 FROM tab0 WHERE ( - col3 ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT MAX ( ALL + col0 ) * SUM ( ALL col4 * col3 ) FROM tab0 cor0 WHERE NOT NULL >= - CAST ( NULL AS INTEGER ) - - col0 + - 63 + 75

Expected: ["NULL"] but got ["2741543907.300"]
```


```sql
SELECT ALL COUNT ( * ) / 34 AS col2 FROM tab0 AS cor0 WHERE NULL IS NULL

Expected: ["0"] but got ["0.294"]
```


```sql
SELECT - MAX ( - - 47 ) AS col4 FROM tab0 AS cor0 WHERE NOT NULL = col1 + 53

Expected: ["NULL"] but got ["-47"]
```


```sql
SELECT ALL col3 / - col0 FROM tab0 cor0 WHERE NOT + 95 IS NULL

Correct amount of values returned but hash was different than expected.
```

#### ☓ Ran 10,032 tests as _sqlite_

* 600 failed
* 94% was OK


---- ---- ---- ---- ---- ---- ----
### 199/622 [`./test/index/random/10/slt_good_9.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/10/slt_good_9.test)

_Mimic sqlite_

```sql
SELECT DISTINCT + + 86 + - col3 AS col0 FROM tab0 cor0 WHERE NOT + 70 * - - 75 - - 75 BETWEEN - col3 + - col4 AND + + col3 * - + col3

Query was expected to return results (but did not) 
```


```sql
SELECT col2 col3 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL CAST ( col3 AS INTEGER ) * + CAST ( NULL AS INTEGER ) AS col3 FROM tab0 cor0 WHERE ( + 49 + + col4 ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT COUNT ( * ) * - CAST ( NULL AS INTEGER ) + - 76 AS col3 FROM tab0 AS cor0 WHERE NOT - ( col0 ) + - col0 IS NOT NULL

Expected: ["NULL"] but got ["-76"]
```


```sql
SELECT ALL 55 / ( COUNT ( * ) ) FROM tab0 cor0 WHERE col5 IS NOT NULL

Expected: ["5"] but got ["5.500"]
```


```sql
SELECT ALL - - SUM ( - + 61 ) FROM tab0 WHERE NOT - col0 * 33 * + + 46 BETWEEN NULL AND + col1

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + col5 FROM tab0 AS cor0 WHERE NOT + col3 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + 7, - COUNT ( * ) AS col5 FROM tab0 cor0 WHERE NOT + 25 * - 27 < NULL

Expected: ["7","0"] but got ["7","-10"]
```


```sql
SELECT ALL + MIN ( + col1 ) + + - ( - 53 ) + + - 81 FROM tab0 WHERE NOT NULL < + 32 + 88 / col4

Expected: ["NULL"] but got ["55.280"]
```


```sql
SELECT col0 FROM tab0 WHERE NOT - CAST ( NULL AS INTEGER ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT ( - COUNT ( * ) ) col5 FROM tab0 WHERE NOT ( NULL ) NOT IN ( - col0 )

Expected: ["0"] but got ["-10"]
```


```sql
SELECT - 75 / + 66 AS col2 FROM tab0 WHERE ( NULL ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - COUNT ( * ) * 47 FROM tab0 WHERE NOT - + col3 BETWEEN + + col0 AND NULL

Expected: ["-470"] but got ["0"]
```


```sql
SELECT + col0 AS col1, col5 AS col5 FROM tab0 cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + + CAST ( NULL AS INTEGER ) AS col0 FROM tab0 WHERE - ( col0 ) * + col1 IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT + col0 / - 59 FROM tab0 WHERE NOT - col3 IS NULL

Expected: ["-11","-14","-16","-2","-3","-6"] but got ["-11.508","-14.678","-16.085","-16.237","-16.390","-16.831","-2.034","-3.847","-6.322","-6.678"]
```


```sql
SELECT col2 AS col0 FROM tab0 AS cor0 WHERE 7 + + - col1 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - + CAST ( - SUM ( DISTINCT - - CAST ( + 91 AS INTEGER ) ) AS INTEGER ), - 51 AS col0 FROM tab0 WHERE NOT NULL <= 60

g is not defined
```


```sql
SELECT COUNT ( * ) FROM tab0 WHERE NOT NULL <= col0

Expected: ["0"] but got ["10"]
```


```sql
SELECT ALL + col2 AS col1 FROM tab0 AS cor0 WHERE NOT col4 IN ( - + col0 )

Query was expected to return results (but did not) 
```


```sql
SELECT SUM ( - ( + col0 ) ) FROM tab0 WHERE NOT col3 IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT - - CAST ( NULL AS INTEGER ) * + COUNT ( * ) FROM tab0 WHERE ( - + col0 ) > 68

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + col0 FROM tab0 WHERE NOT ( NOT 86 + + 24 NOT BETWEEN NULL AND col1 )

Expected: ["866"] but got ["120","227","373","394","679","866","949","958","967","993"]
```


```sql
SELECT ALL + + col5, - col1 * CAST ( NULL AS REAL ) AS col3 FROM tab0 AS cor0 WHERE NOT - 43 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + col5 FROM tab0 cor0 WHERE col0 > ( + - 44 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - + SUM ( ALL - - 35 ) FROM tab0 AS cor0 WHERE 9 * 98 + - 45 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT 50 + - COUNT ( * ) FROM tab0 WHERE NOT NULL NOT BETWEEN 82 AND - 63

Expected: ["50"] but got ["40"]
```


```sql
SELECT - 93 + - col3 / - 49 + - + col0 AS col4 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + col5 AS col4 FROM tab2 cor0 WHERE + CAST ( - col1 AS INTEGER ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + - MAX ( - 52 ) / - - COUNT ( * ) + COUNT ( ALL col1 ) FROM tab0 AS cor0 WHERE col0 < + col4

Expected: ["20"] but got ["20.333"]
```


```sql
SELECT 77 AS col5 FROM tab0 WHERE NOT - 42 * - 0 NOT BETWEEN ( - 27 ) AND 29

Query was expected to return results (but did not) 
```


```sql
SELECT - COUNT ( * ) FROM tab0 AS cor0 WHERE NOT ( NULL ) >= ( NULL )

Expected: ["0"] but got ["-10"]
```


```sql
SELECT ALL CAST ( NULL AS INTEGER ) FROM tab0 WHERE NOT + + 49 / - + col0 * ( col4 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - MIN ( ALL col4 ) FROM tab0 WHERE ( NOT - col4 * + col4 * + col1 + - col1 <= NULL )

Expected: ["NULL"] but got ["-154.530"]
```


```sql
SELECT ALL + COUNT ( col0 ) FROM tab0 AS cor0 WHERE NOT 17 BETWEEN 92 - + col0 AND ( - 8 )

Expected: ["10"] but got ["0"]
```


```sql
SELECT ALL col2 AS col0 FROM tab0 AS cor0 WHERE NOT - col1 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - ( + 33 ) FROM tab0 AS cor0 WHERE NOT 18 * - 6 + col4 BETWEEN + col1 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL 89 / col3 FROM tab0 WHERE - 69 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + MIN ( - - col4 ) + - + COUNT ( * ) AS col1 FROM tab0 WHERE NOT NULL = - col1

Expected: ["NULL"] but got ["144.530"]
```


```sql
SELECT col5 AS col1 FROM tab0 AS cor0 WHERE + 80 + col4 > - - col1 + col3

Expected: ["0","0"] but got ["axwip","klkhp"]
```


```sql
SELECT + col3 FROM tab0 AS cor0 WHERE NOT col3 IN ( - 94, - 36, col0 / col0, + col1 / - col3 )

Query was expected to return results (but did not) 
```


```sql
SELECT MAX ( + - CAST ( - 17 AS INTEGER ) ) AS col2 FROM tab1 WHERE - 78 * CAST ( NULL AS INTEGER ) IS NOT NULL

Expected: ["NULL"] but got ["17"]
```


```sql
SELECT col5 FROM tab0 WHERE + col5 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - CAST ( - COUNT ( + col4 ) AS INTEGER ) AS col2 FROM tab0 WHERE NOT + 9 - + ( - col4 ) * + col4 IS NULL

g is not defined
```


```sql
SELECT 42 FROM tab0 WHERE NOT 4 IN ( + 0 + + 93 )

Query was expected to return results (but did not) 
```


```sql
SELECT - COUNT ( - col3 ), 96 FROM tab0 WHERE + - col1 IS NULL

Expected: ["0","96"] but got ["96","0"]
```


```sql
SELECT 49 AS col0, col2 AS col5 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + COUNT ( - - col4 ) FROM tab0 AS cor0 WHERE NOT 84 > NULL

Expected: ["0"] but got ["10"]
```


```sql
SELECT DISTINCT + ( CAST ( NULL AS INTEGER ) ) + + 64 + + 71 / 10 col0 FROM tab0 cor0 WHERE col2 IS NOT NULL

Expected: ["NULL"] but got ["71.100"]
```


```sql
SELECT 8 AS col0 FROM tab0 WHERE + 48 + 12 NOT BETWEEN + col0 + 35 + col0 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL COUNT ( * ) * 34 AS col5 FROM tab0 WHERE NOT ( 39 ) IN ( col3 + 50 )

Expected: ["340"] but got ["0"]
```


```sql
SELECT col2 FROM tab0 AS cor0 WHERE + col4 NOT IN ( + 0 + + col1 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + SUM ( DISTINCT - col3 ) FROM tab0 AS cor0 WHERE NOT ( NULL ) NOT IN ( - 66, + col4 * CAST ( NULL AS INTEGER ) * + + 65 + col1 + col1 - col3 )

Expected: ["NULL"] but got ["-5204"]
```


```sql
SELECT col2 AS col4 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL col2 col5 FROM tab0 WHERE NOT + CAST ( NULL AS INTEGER ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + COUNT ( * ) / - 42 - - + COUNT ( * ) + - - 43 AS col4 FROM tab0 AS cor0 WHERE NOT col4 + + col4 > + + col1

Expected: ["45"] but got ["44.952"]
```


```sql
SELECT + col2 FROM tab0 AS cor0 WHERE 94 / col1 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - CAST ( + COUNT ( * ) AS INTEGER ) FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

g is not defined
```


```sql
SELECT + 48 FROM tab0 WHERE + + col1 + 92 NOT BETWEEN NULL AND - 83

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT - CAST ( NULL AS INTEGER ) FROM tab0 WHERE NOT ( NULL ) IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL + COUNT ( * ), - 30 AS col4 FROM tab0 AS cor0 WHERE NOT NULL > NULL

Expected: ["0","-30"] but got ["10","-30"]
```


```sql
SELECT col2 AS col2 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + SUM ( + col1 ) col0 FROM tab0 AS cor0 WHERE ( col3 + + col4 ) IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col0 AS col3 FROM tab0 WHERE NOT ( col3 * - - 34 * 40 ) BETWEEN + 79 * + CAST ( + col0 AS INTEGER ) AND ( col1 )

Query was expected to return results (but did not) 
```


```sql
SELECT + ( col2 ) FROM tab0 WHERE 35 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + + col5 AS col4 FROM tab0 WHERE NOT - col0 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + + 87 FROM tab0 AS cor0 WHERE CAST ( NULL AS INTEGER ) - - 62 IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT - - 73 AS col5, COUNT ( * ) + CAST ( NULL AS INTEGER ) AS col0 FROM tab0 WHERE - 71 = NULL

Expected: ["73","NULL"] but got ["73","0"]
```


```sql
SELECT ALL - + CAST ( - COUNT ( * ) AS INTEGER ) AS col3 FROM tab0 WHERE NOT NULL IS NOT NULL

g is not defined
```


```sql
SELECT - 18 / + 74 FROM tab0 cor0 WHERE NOT 57 - col0 * - 60 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL SUM ( DISTINCT - 20 ) FROM tab0 cor0 WHERE + 63 / - col1 IN ( ( - 15 ) )

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col1 * + - CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE - col1 NOT BETWEEN ( - 44 ) AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT + CAST ( NULL AS INTEGER ) AS col1 FROM tab0 AS cor0 WHERE NOT col2 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL - + COUNT ( * ) + + 74 AS col5 FROM tab0 WHERE NOT - 48 <= NULL

Expected: ["74"] but got ["64"]
```


```sql
SELECT + + col5 AS col4 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT COUNT ( * ) col2 FROM tab0 WHERE NOT + 63 IN ( + col0 )

Expected: ["10"] but got ["0"]
```


```sql
SELECT + col2 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```

#### ☓ Ran 10,031 tests as _sqlite_

* 590 failed
* 94% was OK


---- ---- ---- ---- ---- ---- ----
### 200/622 [`./test/index/random/100/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/100/slt_good_0.test)

_Mimic sqlite_

```sql
SELECT ALL + 52 / + 95 FROM tab0 WHERE + col4 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - col0 * - CAST ( NULL AS INTEGER ) AS col5 FROM tab0 WHERE - 72 NOT BETWEEN 37 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL col5 col0 FROM tab0 WHERE + col3 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - COUNT ( * ) AS col1 FROM tab0 WHERE NOT NULL > col4

Expected: ["0"] but got ["-100"]
```


```sql
SELECT CAST ( NULL AS INTEGER ) AS col3 FROM tab0 AS cor0 WHERE NOT - col3 IN ( + - 29 * 82 )

Query was expected to return results (but did not) 
```


```sql
SELECT - AVG ( DISTINCT 27 ) + - MAX ( DISTINCT col1 ) AS col4 FROM tab0 WHERE NOT NULL <> - + 90

Expected: ["NULL"] but got ["-9975.140"]
```


```sql
SELECT DISTINCT - COUNT ( * ) FROM tab0 AS cor0 WHERE NOT NULL = - ( - col0 ) + - 89

Expected: ["0"] but got ["-100"]
```


```sql
SELECT DISTINCT - SUM ( CAST ( col1 AS INTEGER ) ) + - AVG ( ALL col1 + col0 ) FROM tab0 AS cor0 WHERE NOT - col4 + col1 NOT IN ( 39 )

Expected: ["NULL"] but got ["-506912.290"]
```


```sql
SELECT ALL + col4 * + CAST ( NULL AS INTEGER ) AS col2 FROM tab0 WHERE + 43 * + - col4 < ( + + col0 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT COUNT ( * ) / + + 42 FROM tab0 WHERE - 16 - - col0 IS NOT NULL

Expected: ["2"] but got ["2.381"]
```


```sql
SELECT ALL 72 FROM tab0 WHERE + - col1 * - - ( - col0 ) / + col4 - + col3 + + col0 + + 62 * CAST ( NULL AS INTEGER ) * col0 * - col4 + + 91 IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL col2 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT CAST ( NULL AS INTEGER ) * + + 42 * - col4 AS col3 FROM tab0 cor0 WHERE NOT NULL IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + COUNT ( 15 ) FROM tab0 cor0 WHERE NOT NULL <= col3 / - + 34

Expected: ["0"] but got ["100"]
```


```sql
SELECT ALL + col2 FROM tab0 WHERE ( - col0 ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - 57 FROM tab0 cor0 WHERE NOT ( - col1 - 46 ) NOT BETWEEN - col0 AND + 94 + + 33

Query was expected to return results (but did not) 
```


```sql
SELECT ALL - + CAST ( NULL AS INTEGER ) * + - col1 FROM tab0 AS cor0 WHERE NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT SUM ( 74 ) FROM tab0 AS cor0 WHERE NULL IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + + col5 AS col0 FROM tab0 WHERE NOT col3 BETWEEN NULL AND col3 * + + col4 / - col4

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + CAST ( COUNT ( ALL col0 ) AS INTEGER ) col3 FROM tab0 WHERE NULL IS NULL

g is not defined
```


```sql
SELECT + col5 FROM tab0 WHERE NOT + 47 >= + col0 - + col4 + + col3 * - + col1 * - 53

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + ( COUNT ( * ) ) FROM tab0 AS cor0 WHERE NOT NULL <> - CAST ( NULL AS INTEGER )

Expected: ["0"] but got ["100"]
```


```sql
SELECT ALL + col5 AS col0 FROM tab0 AS cor0 WHERE + col0 >= - 41 + 49

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + COUNT ( * ) FROM tab0 cor0 WHERE NOT ( NULL ) <= + 55

Expected: ["0"] but got ["100"]
```


```sql
SELECT MIN ( DISTINCT - col4 ) * - COUNT ( * ) * 66 AS col1 FROM tab0 WHERE NOT col3 * + col0 > NULL

Expected: ["NULL"] but got ["65957430.000"]
```


```sql
SELECT ALL 51 + + CAST ( NULL AS INTEGER ) AS col1, + COUNT ( * ) FROM tab0 WHERE NOT - + col4 = ( - 9 + - col0 )

Expected: ["NULL","100"] but got ["51","100"]
```


```sql
SELECT ALL COUNT ( * ) AS col1 FROM tab0 AS cor0 WHERE NOT NULL <> NULL

Expected: ["0"] but got ["100"]
```


```sql
SELECT - CAST ( NULL AS INTEGER ) * col0 AS col0 FROM tab0 WHERE col5 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL COUNT ( * ) FROM tab0 AS cor0 WHERE NOT ( - col0 ) > NULL

Expected: ["0"] but got ["100"]
```


```sql
SELECT 35 * + col0 FROM tab0 WHERE NOT + 74 IN ( ( - + ( + 23 ) ) + + col1 )

Query was expected to return results (but did not) 
```


```sql
SELECT + col3 col5, col2 col5 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL col5 col0 FROM tab1 AS cor0 WHERE + col5 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT AVG ( + 7 ) AS col4 FROM tab0 AS cor0 WHERE NOT CAST ( NULL AS INTEGER ) IS NULL

Expected: ["NULL"] but got ["7"]
```


```sql
SELECT - COUNT ( * ) FROM tab0 WHERE NOT NULL <> ( NULL )

Expected: ["0"] but got ["-100"]
```


```sql
SELECT ALL + col2 col1 FROM tab0 WHERE NOT ( col0 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - CAST ( NULL AS INTEGER ) AS col2 FROM tab0 cor0 WHERE - CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT SUM ( ALL col0 ) AS col1 FROM tab0 AS cor0 WHERE NOT ( col3 * + ( col0 ) ) > NULL

Expected: ["NULL"] but got ["490238"]
```


```sql
SELECT - col3 col1 FROM tab0 WHERE NOT 62 NOT BETWEEN - col3 AND 92

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + col2 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + SUM ( ( + col1 ) ) * - - MAX ( + 27 ) AS col2 FROM tab0 WHERE NOT - col1 >= NULL

Expected: ["NULL"] but got ["13421457.270"]
```


```sql
SELECT DISTINCT 20 * + COUNT ( * ) + 23 / - 37 FROM tab0 WHERE NULL >= + 70

Expected: ["0"] but got ["-0.622"]
```


```sql
SELECT col2 AS col0 FROM tab0 WHERE NOT - - col0 >= 54 + 23

Expected: ["0"] but got ["qckcw"]
```


```sql
SELECT + col5 AS col0 FROM tab0 AS cor0 WHERE + 49 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT CAST ( NULL AS INTEGER ) AS col3 FROM tab3 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + COUNT ( * ) FROM tab0 WHERE NOT ( - 1 * - col4 + + 7 ) BETWEEN + 13 / 22 AND ( - col4 )

Expected: ["100"] but got ["0"]
```


```sql
SELECT col2 FROM tab0 WHERE + col0 * + col0 + - col4 * col3 <= ( + col1 + col4 * - 0 ) OR ( + 57 * + col0 ) = NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL col0 - 18 AS col5 FROM tab0 WHERE NOT col3 + - col0 IN ( col1 )

Query was expected to return results (but did not) 
```


```sql
SELECT SUM ( ALL col1 ) + - COUNT ( * ) FROM tab0 AS cor0 WHERE ( NOT - col4 <= NULL )

Expected: ["NULL"] but got ["496991.010"]
```


```sql
SELECT ALL - 72 / + + SUM ( DISTINCT + 51 ) AS col4 FROM tab0 WHERE NOT - 65 IS NULL

Expected: ["-1"] but got ["-1.412"]
```


```sql
SELECT + COUNT ( * ) FROM tab0 AS cor0 WHERE 32 * col4 * - col0 * + 46 NOT BETWEEN col3 AND NULL

Expected: ["100"] but got ["0"]
```


```sql
SELECT CAST ( - MAX ( - + 58 ) AS INTEGER ) AS col3, 25 + COUNT ( * ) + - 74 FROM tab0 AS cor0 WHERE - col3 BETWEEN + 50 AND NULL

Expected: ["NULL","-49"] but got ["0","-49"]
```


```sql
SELECT + CAST ( + CAST ( NULL AS INTEGER ) AS INTEGER ) FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col2 AS col0 FROM tab0 AS cor0 WHERE ( ( CAST ( NULL AS INTEGER ) ) ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL - MIN ( ALL + + 73 ) AS col4 FROM tab0 cor0 WHERE NOT 35 >= NULL

Expected: ["NULL"] but got ["-73"]
```


```sql
SELECT + 29 / + 68 AS col5 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + 39 AS col0 FROM tab0 WHERE NOT ( ( col0 ) ) IN ( 38 )

Query was expected to return results (but did not) 
```


```sql
SELECT - 60 / + COUNT ( * ) FROM tab0 AS cor0 WHERE + ( - col3 ) NOT IN ( - 54 * 40 )

Expected: ["0"] but got ["-0.600"]
```


```sql
SELECT col3 * 2 AS col0 FROM tab0 WHERE NOT + col1 BETWEEN - 95 AND col0

100 results returned but expected 49
```


```sql
SELECT ( - 18 ) * + COUNT ( * ) FROM tab0 AS cor0 WHERE NOT NULL >= NULL

Expected: ["0"] but got ["-1800"]
```


```sql
SELECT - 66 FROM tab0 AS cor0 WHERE NOT ( - col3 ) NOT BETWEEN + col3 - + col0 AND ( - 46 )

100 results returned but expected 25
```


```sql
SELECT + - CAST ( NULL AS INTEGER ) FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT 80 FROM tab0 WHERE NOT + CAST ( NULL AS INTEGER ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT + 11 * COUNT ( * ) + - + 13 FROM tab0 WHERE NOT NULL = NULL

Expected: ["-13"] but got ["1087"]
```


```sql
SELECT col5 FROM tab0 WHERE NOT - col0 NOT BETWEEN + ( - 78 ) AND 35

Query was expected to return results (but did not) 
```


```sql
SELECT + col2 col1, 42 + + 49 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + CAST ( NULL AS INTEGER ) / - COUNT ( * ) FROM tab0 WHERE NOT - + col4 * - col3 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + - COUNT ( col3 ) AS col5 FROM tab0 AS cor0 WHERE NOT col1 + + col4 <> NULL

Expected: ["0"] but got ["-100"]
```


```sql
SELECT 13 - col3 FROM tab0 WHERE NOT - 57 + col4 IN ( ( + 63 ) )

Query was expected to return results (but did not) 
```


```sql
SELECT + ( - col3 ) FROM tab0 AS cor0 WHERE - CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ( + SUM ( col3 ) ) AS col5 FROM tab0 WHERE + + col0 * + CAST ( NULL AS INTEGER ) IS NULL

Expected: ["484805"] but got ["0"]
```


```sql
SELECT DISTINCT - + AVG ( + col3 ) * 99 FROM tab0 WHERE CAST ( NULL AS INTEGER ) * + CAST ( + 29 AS REAL ) IS NOT NULL

Expected: ["NULL"] but got ["-479956.950"]
```


```sql
SELECT - CAST ( NULL AS INTEGER ) FROM tab0 AS cor0 WHERE NOT + CAST ( + col4 AS INTEGER ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT COUNT ( * ) col0 FROM tab0 cor0 WHERE NOT NULL <= NULL

Expected: ["0"] but got ["100"]
```


```sql
SELECT DISTINCT - 66 FROM tab0 WHERE NOT + col4 IN ( 95 - - col0 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL MAX ( 72 ) col2 FROM tab0 AS cor0 WHERE NOT ( - 35 ) >= NULL

Expected: ["NULL"] but got ["72"]
```


```sql
SELECT 33 col1 FROM tab0 WHERE - col1 NOT BETWEEN ( ( col1 ) ) AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + COUNT ( * ) AS col3 FROM tab0 cor0 WHERE NOT col0 <> NULL

Expected: ["0"] but got ["100"]
```


```sql
SELECT ALL col5 FROM tab0 AS cor0 WHERE NOT ( col2 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT 30 * - 57 + - AVG ( DISTINCT + col0 ) + + 96 FROM tab0 WHERE NOT NULL <= NULL

Expected: ["NULL"] but got ["-6516.380"]
```


```sql
SELECT ALL 36 / - - 46 AS col3 FROM tab0 WHERE NOT + col4 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + CAST ( NULL AS INTEGER ) + + col1 FROM tab0 cor0 WHERE NOT col5 IS NULL

Expected: ["NULL"] but got ["1047.520","117.700","136.580","1420.220","1489.400","151.460","1536.130","1645.370","1717.820","1719.740","1898.180","2258.970","2304.840","2315.760","2317.500","2321.500","2375.330","2446.370","2518.980","254.940","2552.610","2634.940","2991.150","3098.520","3257.180",…
```

#### ☓ Ran 10,123 tests as _sqlite_

* 570 failed
* 94% was OK


---- ---- ---- ---- ---- ---- ----
### 201/622 [`./test/index/random/100/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/100/slt_good_1.test)

_Mimic sqlite_

```sql
SELECT + col5 AS col1 FROM tab0 AS cor0 WHERE ( - 0 ) BETWEEN 6 * - col4 AND ( + col0 * - - col1 - 48 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - 68 col3, + col2 FROM tab0 WHERE ( + 76 ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + 92 * + - 75 FROM tab0 AS cor0 WHERE NOT + ( + - col0 ) IN ( - + ( + + 81 ) + + col3 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL col2, - 84 + - + col0 AS col5 FROM tab0 AS cor0 WHERE NOT - col3 IN ( + col3 )

Query was expected to return results (but did not) 
```


```sql
SELECT + + col2 FROM tab0 cor0 WHERE NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT COUNT ( * ) AS col1 FROM tab0 cor0 WHERE NOT 33 BETWEEN col4 AND NULL

Expected: ["100"] but got ["0"]
```


```sql
SELECT + col5 FROM tab0 AS cor0 WHERE col3 * col3 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + COUNT ( * ) FROM tab0 WHERE NOT NULL <> ( - - col0 )

Expected: ["0"] but got ["100"]
```


```sql
SELECT ALL col5 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + - MAX ( DISTINCT + col3 ) AS col2, + ( + COUNT ( * ) ) + + 71 FROM tab0 WHERE NOT + 13 * CAST ( NULL AS INTEGER ) IS NOT NULL

Expected: ["-9951","171"] but got ["NULL","71"]
```


```sql
SELECT + - COUNT ( * ) FROM tab0 AS cor0 WHERE NOT 26 = NULL

Expected: ["0"] but got ["-100"]
```


```sql
SELECT - COUNT ( * ) * AVG ( DISTINCT + col3 ) AS col3 FROM tab0 WHERE NOT NULL <= + + col3

Expected: ["NULL"] but got ["-531399"]
```


```sql
SELECT - CAST ( NULL AS INTEGER ) FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL col2 AS col0 FROM tab0 WHERE + - 31 NOT IN ( col0 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - COUNT ( * ) * ( + COUNT ( * ) ) col1 FROM tab0 WHERE ( + CAST ( NULL AS INTEGER ) / - 69 + + col1 ) IS NOT NULL

Expected: ["0"] but got ["-10000"]
```


```sql
SELECT ALL + 23 * - CAST ( NULL AS INTEGER ) + - 61 * - col3 AS col0 FROM tab3 AS cor0 WHERE ( NOT - col4 / + col3 IS NULL )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + 53 FROM tab0 AS cor0 WHERE NOT - 45 IN ( - 18 * + 49 / - 78 )

Query was expected to return results (but did not) 
```


```sql
SELECT - - col3 * + CAST ( NULL AS INTEGER ) FROM tab0 cor0 WHERE ( NULL ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - MAX ( DISTINCT + col3 ) + + + COUNT ( * ) AS col1 FROM tab0 AS cor0 WHERE NOT NULL = + col3

Expected: ["NULL"] but got ["-9851"]
```


```sql
SELECT DISTINCT MIN ( - - 16 ) / + 63 FROM tab0 WHERE - col4 IS NOT NULL

Expected: ["0"] but got ["0.254"]
```


```sql
SELECT + col5 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL col5 FROM tab0 WHERE - col4 * 44 <> 61 * col1

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - COUNT ( * ) FROM tab0 AS cor0 WHERE NOT 83 >= NULL

Expected: ["0"] but got ["-100"]
```


```sql
SELECT + col5 FROM tab0 AS cor0 WHERE + 92 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col2 AS col3 FROM tab0 cor0 WHERE 69 * 36 > + - 45

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + CAST ( NULL AS INTEGER ) * - COUNT ( * ) * + COUNT ( * ) - SUM ( 21 ) FROM tab0 AS cor0 WHERE NOT + 60 * 88 * + col1 IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT 57 col1 FROM tab0 WHERE NOT - CAST ( - 56 AS INTEGER ) BETWEEN col1 AND + col4

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT 79 AS col4 FROM tab0 WHERE NOT - - 93 * col1 * 30 BETWEEN NULL AND + + col3 * - 29

Query was expected to return results (but did not) 
```


```sql
SELECT CAST ( NULL AS INTEGER ) / ( - COUNT ( * ) ) - - 45 col3 FROM tab0 WHERE NOT NULL IS NOT NULL

Expected: ["NULL"] but got ["45"]
```


```sql
SELECT col5, 87 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL COUNT ( * ) FROM tab0 WHERE NOT NULL <= NULL

Expected: ["0"] but got ["100"]
```


```sql
SELECT + col2 AS col0, - ( - 29 ) * + 17 FROM tab0 AS cor0 WHERE NOT CAST ( NULL AS INTEGER ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + 55 / - - col3 col1 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - - 29 AS col5 FROM tab0 AS cor0 WHERE NOT + 30 * + 76 BETWEEN + + col0 AND col1

Query was expected to return results (but did not) 
```


```sql
SELECT COUNT ( * ) - - CAST ( NULL AS INTEGER ) AS col2 FROM tab0 WHERE col1 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT + CAST ( NULL AS INTEGER ) AS col4 FROM tab0 WHERE - - col4 IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL - 4 col4 FROM tab0 WHERE + col4 NOT BETWEEN + + ( + CAST ( NULL AS REAL ) ) AND ( 78 )

Query was expected to return results (but did not) 
```


```sql
SELECT + - COUNT ( * ) AS col4 FROM tab0 AS cor0 WHERE NOT NULL <= 27

Expected: ["0"] but got ["-100"]
```


```sql
SELECT + + col2 FROM tab0 cor0 WHERE + col2 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + CAST ( NULL AS INTEGER ) AS col5 FROM tab0 WHERE NULL IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL col2 FROM tab0 cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT SUM ( col3 ) AS col4 FROM tab0 WHERE NOT - 85 + ( + CAST ( NULL AS INTEGER ) ) NOT IN ( col3 * 49 )

Expected: ["NULL"] but got ["531399"]
```


```sql
SELECT ALL COUNT ( * ) AS col4 FROM tab0 WHERE NOT ( + - col1 ) BETWEEN col3 * + col0 + - - col3 AND ( - + col4 + + + col0 )

Expected: ["100"] but got ["0"]
```


```sql
SELECT ALL - - 78 + - - MAX ( DISTINCT - + col0 ) FROM tab0 WHERE NOT + - col4 - + + col4 < NULL

Expected: ["NULL"] but got ["47"]
```


```sql
SELECT DISTINCT 70 AS col4 FROM tab0 AS cor0 WHERE 32 * - + col1 * - ( - col4 ) NOT BETWEEN + 2 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + AVG ( - + 82 ) AS col2 FROM tab0 cor0 WHERE NOT NULL < - 39

Expected: ["NULL"] but got ["-82"]
```


```sql
SELECT ALL - - COUNT ( * ) AS col3 FROM tab0 WHERE NOT CAST ( NULL AS INTEGER ) IS NOT NULL

Expected: ["100"] but got ["0"]
```


```sql
SELECT col5 FROM tab0 AS cor0 WHERE NOT ( col0 - col4 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + + col2 FROM tab0 WHERE NOT + col4 * + + 59 + - + col3 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + - col0 * col3 FROM tab0 AS cor0 WHERE col4 NOT BETWEEN NULL AND + 82

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + col2 FROM tab0 AS cor0 WHERE - col3 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col5 col5 FROM tab0 WHERE NOT ( ( col1 ) ) >= + ( - 80 ) * - 31 - col0

Expected: ["0","0","0","0"] but got ["kjkvp","rrlwc","uhpvq","ydhme"]
```


```sql
SELECT DISTINCT - CAST ( NULL AS INTEGER ) + + ( ( - col3 ) + col1 ) FROM tab0 WHERE - col3 + + 27 * + col1 IS NOT NULL

Expected: ["NULL"] but got ["-101.090","-1010.220","-1041.340","-1246.430","-1362.500","-1434.900","-1560.630","-1730.410","-1901.540","-2063.100","-2277.270","-231.700","-2339.120","-2475.610","-2675.600","-2680.610","-2789.330","-2790.600","-29.410","-296.410","-3324.220","-3345.570","-3507.630",…
```


```sql
SELECT col3 + - col0 FROM tab0 WHERE NOT ( - col4 ) BETWEEN ( col1 + col1 * - col1 ) AND - 84

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT COUNT ( 69 ) AS col1 FROM tab0 WHERE NOT + CAST ( NULL AS INTEGER ) < NULL

Expected: ["0"] but got ["100"]
```


```sql
SELECT 31 * - SUM ( ALL 95 ) AS col5 FROM tab0 AS cor0 WHERE + col0 + - col4 NOT IN ( - CAST ( NULL AS INTEGER ) )

Expected: ["NULL"] but got ["-294500"]
```


```sql
SELECT + col5 AS col5 FROM tab0 AS cor0 WHERE + col4 NOT BETWEEN NULL AND + col3

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT CAST ( NULL AS INTEGER ) - COUNT ( * ) FROM tab0 WHERE ( 72 * + col3 + + CAST ( + ( + 15 ) AS INTEGER ) ) IS NOT NULL

Expected: ["NULL"] but got ["-100"]
```


```sql
SELECT DISTINCT + - col0 AS col3, 4 FROM tab0 AS cor0 WHERE col1 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT col0 / - - col3 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

100 results returned but expected 10
```


```sql
SELECT + - CAST ( COUNT ( * ) AS INTEGER ) FROM tab0 AS cor0 WHERE NOT 75 * - 78 * + - ( ( - + 46 ) ) IS NULL

g is not defined
```


```sql
SELECT col3 * CAST ( NULL AS INTEGER ) FROM tab0 WHERE NOT ( + ( 75 ) ) = ( 55 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - col0 col3 FROM tab0 WHERE NOT - col3 IN ( + col0 )

Query was expected to return results (but did not) 
```


```sql
SELECT SUM ( - + col1 ) FROM tab0 AS cor0 WHERE ( NOT NULL NOT IN ( + col4 * + 42 ) )

Expected: ["NULL"] but got ["-452319.900"]
```


```sql
SELECT CAST ( NULL AS INTEGER ) AS col3 FROM tab0 WHERE NOT - 64 IS NULL

Correct amount of values returned but hash was different than expected.
```

#### ☓ Ran 10,123 tests as _sqlite_

* 470 failed
* 95% was OK


---- ---- ---- ---- ---- ---- ----
### 202/622 [`./test/index/random/1000/slt_good_0.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/1000/slt_good_0.test)

_Mimic sqlite_

```sql
SELECT ALL - col0 * - CAST ( NULL AS INTEGER ) AS col5 FROM tab0 WHERE - 72 NOT BETWEEN 37 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL col5 col0 FROM tab0 WHERE + col3 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - COUNT ( * ) AS col1 FROM tab0 WHERE NOT NULL > col4

Expected: ["0"] but got ["-1000"]
```


```sql
SELECT CAST ( NULL AS INTEGER ) AS col3 FROM tab0 AS cor0 WHERE NOT - col3 IN ( + - 29 * 82 )

Query was expected to return results (but did not) 
```


```sql
SELECT - AVG ( DISTINCT 27 ) + - MAX ( DISTINCT col1 ) AS col4 FROM tab0 WHERE NOT NULL <> - + 90

Expected: ["NULL"] but got ["-998348.240"]
```


```sql
SELECT DISTINCT - COUNT ( * ) FROM tab0 AS cor0 WHERE NOT NULL = - ( - col0 ) + - 89

Expected: ["0"] but got ["-1000"]
```


```sql
SELECT COUNT ( DISTINCT - col3 ) FROM tab1 WHERE NOT col1 IN ( + ( col0 ) + 79 )

Expected: ["1000"] but got ["0"]
```


```sql
SELECT ALL - SUM ( + col1 ) FROM tab0 WHERE 85 IN ( col3 )

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL + col4 * + CAST ( NULL AS INTEGER ) AS col2 FROM tab0 WHERE + 43 * + - col4 < ( + + col0 )

Correct amount of values returned but hash was different than expected.
```

#### ☓ Ran 2,067 tests as _sqlite_

* 60 failed
* 97% was OK


---- ---- ---- ---- ---- ---- ----
### 203/622 [`./test/index/random/1000/slt_good_1.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/1000/slt_good_1.test)

_Mimic sqlite_

#### ★ Assuming all 1,056 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 204/622 [`./test/index/random/1000/slt_good_2.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/1000/slt_good_2.test)

_Mimic sqlite_

#### ★ Assuming all 1,027 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 205/622 [`./test/index/random/1000/slt_good_3.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/1000/slt_good_3.test)

_Mimic sqlite_

#### ★ Assuming all 1,033 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 206/622 [`./test/index/random/1000/slt_good_4.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/1000/slt_good_4.test)

_Mimic sqlite_

#### ★ Assuming all 1,032 tests still passes as _sqlite_


---- ---- ---- ---- ---- ---- ----
### 207/622 [`./test/index/random/1000/slt_good_5.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/1000/slt_good_5.test)

_Mimic sqlite_

```sql
SELECT COUNT ( * ) / + + 42 FROM tab0 WHERE - 16 - - col0 IS NOT NULL

Expected: ["23"] but got ["23.810"]
```


```sql
SELECT ALL 72 FROM tab0 WHERE + - col1 * - - ( - col0 ) / + col4 - + col3 + + col0 + + 62 * CAST ( NULL AS INTEGER ) * col0 * - col4 + + 91 IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL col2 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT CAST ( NULL AS INTEGER ) * + + 42 * - col4 AS col3 FROM tab0 cor0 WHERE NOT NULL IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + COUNT ( 15 ) FROM tab0 cor0 WHERE NOT NULL <= col3 / - + 34

Expected: ["0"] but got ["1000"]
```


```sql
SELECT ALL + col2 FROM tab0 WHERE ( - col0 ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - 57 FROM tab0 cor0 WHERE NOT ( - col1 - 46 ) NOT BETWEEN - col0 AND + 94 + + 33

Query was expected to return results (but did not) 
```


```sql
SELECT ALL - + CAST ( NULL AS INTEGER ) * + - col1 FROM tab0 AS cor0 WHERE NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + 50 FROM tab0 WHERE + + CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT col4 + - CAST ( NULL AS INTEGER ) * + col4 AS col1 FROM tab0 WHERE NOT ( - 12 IS NULL )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT SUM ( 74 ) FROM tab0 AS cor0 WHERE NULL IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + + col5 AS col0 FROM tab0 WHERE NOT col3 BETWEEN NULL AND col3 * + + col4 / - col4

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + CAST ( COUNT ( ALL col0 ) AS INTEGER ) col3 FROM tab0 WHERE NULL IS NULL

g is not defined
```


```sql
SELECT + ( COUNT ( * ) ) FROM tab0 AS cor0 WHERE NOT NULL <> - CAST ( NULL AS INTEGER )

Expected: ["0"] but got ["1000"]
```


```sql
SELECT ALL - COUNT ( * ) FROM tab0 AS cor0 WHERE 69 / - + CAST ( NULL AS INTEGER ) IS NULL

Expected: ["-1000"] but got ["0"]
```


```sql
SELECT MAX ( ALL - - CAST ( NULL AS INTEGER ) ) AS col1 FROM tab0 WHERE NOT + col2 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL + col5 AS col0 FROM tab0 AS cor0 WHERE + col0 >= - 41 + 49

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + COUNT ( * ) FROM tab0 cor0 WHERE NOT ( NULL ) <= + 55

Expected: ["0"] but got ["1000"]
```


```sql
SELECT MIN ( DISTINCT - col4 ) * - COUNT ( * ) * 66 AS col1 FROM tab0 WHERE NOT col3 * + col0 > NULL

Expected: ["NULL"] but got ["659549880"]
```


```sql
SELECT ALL COUNT ( * ) AS col1 FROM tab0 AS cor0 WHERE NOT NULL <> NULL

Expected: ["0"] but got ["1000"]
```


```sql
SELECT - CAST ( NULL AS INTEGER ) * col0 AS col0 FROM tab0 WHERE col5 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL COUNT ( * ) FROM tab0 AS cor0 WHERE NOT ( - col0 ) > NULL

Expected: ["0"] but got ["1000"]
```


```sql
SELECT 35 * + col0 FROM tab0 WHERE NOT + 74 IN ( ( - + ( + 23 ) ) + + col1 )

Query was expected to return results (but did not) 
```


```sql
SELECT + col3 col5, col2 col5 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL col5 col0 FROM tab0 AS cor0 WHERE + col5 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT AVG ( + 7 ) AS col4 FROM tab0 AS cor0 WHERE NOT CAST ( NULL AS INTEGER ) IS NULL

Expected: ["NULL"] but got ["7"]
```


```sql
SELECT - COUNT ( * ) FROM tab0 WHERE NOT NULL <> ( NULL )

Expected: ["0"] but got ["-1000"]
```


```sql
SELECT ALL + col2 col1 FROM tab0 WHERE NOT ( col0 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - CAST ( NULL AS INTEGER ) AS col2 FROM tab0 cor0 WHERE - CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```

#### ☓ Ran 4,333 tests as _sqlite_

* 205 failed
* 95% was OK


---- ---- ---- ---- ---- ---- ----
### 208/622 [`./test/index/random/1000/slt_good_6.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/1000/slt_good_6.test)

_Mimic sqlite_

```sql
SELECT DISTINCT col1 - 9 * + ( + + CAST ( NULL AS INTEGER ) ) * - 41 * + + 35 FROM tab0 WHERE NOT - 70 IS NULL

Expected: ["NULL"] but got ["1001.490","101.350","1023.170","1029.400","1040.530","1041.320","105.910","1052.610","1055.210","1061.720","1077.130","1088.150","1134.630","1136.530","1141.510","1142.310","1145.470","1184.360","1189.950","119.510","1195.480","1196.280","1202.190","121.600","1210.330",…
```


```sql
SELECT ALL - 42 + + col0 AS col1, 66 AS col0 FROM tab0 AS cor0 WHERE NOT CAST ( 78 AS INTEGER ) * 42 * + 24 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + 89 FROM tab0 WHERE + - col0 NOT BETWEEN + + 45 + - + col4 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT - MIN ( + col4 ) AS col3 FROM tab0 AS cor0 WHERE ( NULL ) IS NULL

Expected: ["-61"] but got ["-61.500"]
```


```sql
SELECT ALL + col2 FROM tab0 WHERE + col0 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - col3 + - + CAST ( NULL AS INTEGER ) AS col5 FROM tab0 WHERE NOT - col4 IS NULL

Expected: ["NULL"] but got ["-1","-1011","-1013","-1016","-1029","-1055","-1076","-1085","-1091","-1097","-1105","-1106","-1119","-1127","-1135","-114","-1162","-1173","-1181","-1182","-1193","-1201","-1204","-1224","-1228","-1232","-1233","-1254","-1272","-1280","-1283","-1308","-1314","-1324","-1…
```


```sql
SELECT DISTINCT - col1 / ( + col3 ) * CAST ( NULL AS INTEGER ) AS col0 FROM tab0 AS cor0 WHERE ( NULL ) IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + col2 FROM tab0 WHERE NOT + col4 - - col4 = + col0

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - 74 * 61 FROM tab0 AS cor0 WHERE NOT 1 IN ( 78 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL * FROM tab0 AS cor0 WHERE ( col3 ) IN ( + col0 )

Expected: ["750","79","2150","0","79","1716","0"] but got ["750","79","2150.540","kuzlf","79","1716.500","wqnrb"]
```


```sql
SELECT col5 AS col4 FROM tab0 cor0 WHERE NOT ( col3 - col0 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL CAST ( - COUNT ( * ) AS INTEGER ) AS col1 FROM tab0 WHERE - + 60 IN ( - 66 * 54 )

Query was expected to return results (but did not) 
```


```sql
SELECT - 76 / - + ( + - 55 ) FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT - col0 / 26 AS col4 FROM tab0 WHERE - col3 IS NOT NULL

1000 results returned but expected 349
```


```sql
SELECT DISTINCT MAX ( DISTINCT - col4 ) AS col1 FROM tab0 WHERE NOT - 91 >= - 40

Expected: ["-61"] but got ["-61.500"]
```


```sql
SELECT col2 AS col5, col2 AS col2 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT 28 FROM tab0 WHERE NOT col4 IN ( - + 66 ) OR NULL >= + col0

Query was expected to return results (but did not) 
```


```sql
SELECT COUNT ( 11 ) FROM tab0 WHERE NOT NULL <= NULL

Expected: ["0"] but got ["1000"]
```


```sql
SELECT ALL + COUNT ( * ) FROM tab0 WHERE NOT ( + ( col1 ) * + + col3 * + - 33 + + col0 ) = ( NULL )

Expected: ["0"] but got ["1000"]
```


```sql
SELECT - CAST ( - MIN ( ALL - col4 ) AS INTEGER ) FROM tab0 WHERE NULL >= 40 + - col0 + ( - col4 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + col5 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL ( - + 73 ) FROM tab0 AS cor0 WHERE NOT 77 IN ( + - col3 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + - MAX ( + + 7 ) col4 FROM tab0 AS cor0 WHERE NOT col3 + - - 89 > NULL

Expected: ["NULL"] but got ["-7"]
```


```sql
SELECT + + 20 * + - col3, 56 - + 18 AS col3 FROM tab0 WHERE NOT - - col4 * - col4 > col3

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + - CAST ( + + MAX ( - 41 ) AS INTEGER ) * + + COUNT ( * ) + 71 AS col0 FROM tab0 AS cor0 WHERE NOT NULL < ( NULL )

Expected: ["NULL"] but got ["71"]
```


```sql
SELECT + col5 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - + CAST ( NULL AS INTEGER ) AS col0, - 45 * - + 1 AS col3 FROM tab1 WHERE NOT - - col4 = + col1 - + col0

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col5 FROM tab0 WHERE + col0 * + col0 + - col4 * col3 <= ( + col1 + col4 * - 0 ) OR NOT NULL >= + col0 / 65 - col0

1000 results returned but expected 457
```


```sql
SELECT DISTINCT CAST ( ( COUNT ( + 76 ) ) AS INTEGER ) AS col5 FROM tab0 WHERE NOT col3 IN ( CAST ( NULL AS INTEGER ) )

Query was expected to return results (but did not) 
```


```sql
SELECT - - AVG ( - - ( + 40 ) ) AS col0 FROM tab0 AS cor0 WHERE NOT NULL <> - col4 - 31

Expected: ["NULL"] but got ["40"]
```


```sql
SELECT col2 FROM tab0 WHERE NOT + + 54 BETWEEN - col4 AND + - col3

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + col5 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + 1, COUNT ( * ) col5 FROM tab0 WHERE NOT NULL >= NULL

Expected: ["1","0"] but got ["1","1000"]
```


```sql
SELECT ALL + col2 col3 FROM tab0 AS cor0 WHERE NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT 13 FROM tab0 cor0 WHERE NOT ( 49 ) + + col0 + + - col4 IN ( + col3 + 19 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL + COUNT ( * ) col2, 81 FROM tab0 WHERE NOT + 15 IS NULL

Expected: ["1000","81"] but got ["81","1000"]
```


```sql
SELECT + CAST ( NULL AS INTEGER ) / + + 28 * + 21 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - SUM ( 29 ) FROM tab0 WHERE NULL = + 42

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col3 * 2 + - 19 FROM tab0 WHERE NOT + col1 BETWEEN - 95 AND col0

1000 results returned but expected 503
```


```sql
SELECT + col2 FROM tab0 WHERE NOT + + ( 10 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + CAST ( NULL AS INTEGER ) + ( + + col3 ) + + col0 * 57 + - - col4 AS col0 FROM tab0 AS cor0 WHERE NOT col3 * col0 + - + 52 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT CAST ( + 41 AS INTEGER ) + - AVG ( ALL - 94 ) + + - 12 + + - CAST ( NULL AS INTEGER ) AS col1 FROM tab0 WHERE NOT - col1 >= NULL

Expected: ["NULL"] but got ["123"]
```


```sql
SELECT + CAST ( NULL AS INTEGER ) FROM tab0 WHERE col4 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - MAX ( + CAST ( + CAST ( NULL AS REAL ) AS INTEGER ) ) * - 20 AS col1 FROM tab0 AS cor0 WHERE NOT col4 * + 92 + - col3 + + - 37 + - 63 * - + col0 = NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL 48 + + - 67 AS col0, COUNT ( * ) - - 73 + 88 AS col0 FROM tab0 WHERE NOT NULL IS NULL

Expected: ["-19","161"] but got ["161"]
```


```sql
SELECT ALL CAST ( NULL AS INTEGER ) FROM tab0 WHERE - 96 * + 28 < col4 * + 68

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col3 / col0 FROM tab0 WHERE NOT - 57 + col4 IN ( ( + 63 ) )

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT SUM ( + CAST ( NULL AS INTEGER ) ) AS col1 FROM tab0 AS cor0 WHERE + col0 >= ( col1 )

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT 88 / + - 58 col5 FROM tab2 WHERE NOT ( + + ( + 96 ) ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + ( - COUNT ( * ) ) FROM tab0 WHERE - - col0 NOT IN ( + col4 + - CAST ( NULL AS INTEGER ) )

Expected: ["0"] but got ["-1000"]
```


```sql
SELECT SUM ( DISTINCT + 60 ) FROM tab0 AS cor0 WHERE NOT ( - col0 ) IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + COUNT ( * ) / + ( - 15 ) FROM tab4 AS cor0 WHERE NOT NULL IS NOT NULL

Expected: ["-66"] but got ["-66.667"]
```


```sql
SELECT + col0 AS col1 FROM tab0 AS cor0 WHERE NOT + col3 BETWEEN NULL AND - col4

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT - CAST ( NULL AS INTEGER ) FROM tab0 WHERE NOT + + col2 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col5 AS col3 FROM tab0 WHERE NOT - 87 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - 56 FROM tab0 WHERE - + col3 * - col4 NOT BETWEEN NULL AND + 52

Query was expected to return results (but did not) 
```


```sql
SELECT COUNT ( * ) AS col2, + COUNT ( * ) col0 FROM tab0 WHERE NOT NULL >= NULL

Expected: ["0","0"] but got ["1000","1000"]
```


```sql
SELECT - COUNT ( DISTINCT CAST ( NULL AS INTEGER ) ) AS col5 FROM tab0 AS cor0 WHERE NOT - col3 IS NULL

Expected: ["0"] but got ["-1"]
```


```sql
SELECT 36 AS col5 FROM tab0 WHERE NOT CAST ( NULL AS INTEGER ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT - MIN ( ALL + col0 ) AS col4 FROM tab0 cor0 WHERE NOT + 30 NOT BETWEEN ( + col0 ) AND ( ( - ( 25 ) ) + - col4 )

Expected: ["NULL"] but got ["-4"]
```


```sql
SELECT - + CAST ( NULL AS INTEGER ), + COUNT ( * ) AS col2 FROM tab0 WHERE NULL = NULL

Expected: ["NULL","0"] but got ["0","0"]
```


```sql
SELECT + COUNT ( * ) FROM tab0 AS cor0 WHERE NOT NULL = col1

Expected: ["0"] but got ["1000"]
```


```sql
SELECT col5 AS col0 FROM tab0 AS cor0 WHERE col4 * + col4 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col2 FROM tab0 WHERE NOT + col0 BETWEEN ( + 73 / col1 - - col0 ) AND + col4

Query was expected to return results (but did not) 
```


```sql
SELECT ALL 60 - - SUM ( DISTINCT col0 ) * 75 FROM tab0 AS cor0 WHERE 37 - - col0 NOT BETWEEN ( + CAST ( col3 AS INTEGER ) ) / - 11 AND NULL

Expected: ["NULL"] but got ["60"]
```


```sql
SELECT DISTINCT ( - - COUNT ( * ) ) * - 80 FROM tab0 cor0 WHERE NOT NULL < NULL

Expected: ["0"] but got ["-80000"]
```


```sql
SELECT col5 FROM tab0 WHERE - col0 - - col4 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ( - + SUM ( - col4 ) ) FROM tab0 WHERE - - col1 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT - SUM ( - + col3 ) FROM tab0 WHERE NULL IS NOT NULL

Expected: ["NULL"] but got ["0"]
```

#### ☓ Ran 11,021 tests as _sqlite_

* 545 failed
* 95% was OK


---- ---- ---- ---- ---- ---- ----
### 209/622 [`./test/index/random/1000/slt_good_7.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/1000/slt_good_7.test)

_Mimic sqlite_

```sql
SELECT MAX ( col4 ) FROM tab0 AS cor0 WHERE NOT NULL <> NULL

Expected: ["NULL"] but got ["9994.100"]
```


```sql
SELECT ALL + ( - - CAST ( - + COUNT ( * ) AS INTEGER ) ) AS col5 FROM tab0 WHERE NOT NULL IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + col5 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT CAST ( NULL AS INTEGER ) / + + col3 / + + 35 FROM tab0 WHERE - - 61 <> ( col1 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + CAST ( NULL AS INTEGER ) FROM tab0 cor0 WHERE NOT col2 IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT 37 AS col0 FROM tab0 cor0 WHERE NOT 33 BETWEEN col4 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL - COUNT ( * ) AS col1 FROM tab0 WHERE NOT NULL = col1

Expected: ["0"] but got ["-1000"]
```


```sql
SELECT DISTINCT 57 + COUNT ( * ) AS col5 FROM tab0 AS cor0 WHERE ( + col1 + 11 ) NOT IN ( col4 * col4 ) AND NOT NULL NOT IN ( col0 )

Expected: ["57"] but got ["1057"]
```


```sql
SELECT SUM ( - ( 40 ) ) * - COUNT ( * ) FROM tab0 AS cor0 WHERE ( NULL ) > NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col2 FROM tab0 WHERE NOT 83 + - col4 + + ( + 18 ) < - col1

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col5 FROM tab0 AS cor0 WHERE NOT - CAST ( NULL AS INTEGER ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT col2 AS col0 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col2 AS col2 FROM tab0 AS cor0 WHERE NOT - 21 + 69 + + col1 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + col3 * CAST ( NULL AS INTEGER ) FROM tab0 WHERE ( NULL ) IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + 11 AS col5 FROM tab0 AS cor0 WHERE NOT ( + 39 ) IN ( + CAST ( col4 AS REAL ) )

Query was expected to return results (but did not) 
```


```sql
SELECT col2 FROM tab0 AS cor0 WHERE NOT ( NULL ) IS NOT NULL OR NOT NULL NOT BETWEEN ( - 2 ) AND - ( - 9 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - COUNT ( * ) FROM tab0 WHERE NOT + col1 > NULL

Expected: ["0"] but got ["-1000"]
```


```sql
SELECT + 45 * + COUNT ( * ) + 85 FROM tab0 WHERE - - 43 * + 22 + - ( - 43 ) * - col0 NOT BETWEEN - - 30 + + - col3 AND NULL

Expected: ["44365"] but got ["85"]
```


```sql
SELECT SUM ( + 52 ) FROM tab0 AS cor0 WHERE - col0 NOT BETWEEN NULL AND ( NULL )

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + - COUNT ( * ) AS col5 FROM tab0 AS cor0 WHERE NOT 68 * - - CAST ( NULL AS INTEGER ) <= NULL

Expected: ["0"] but got ["-1000"]
```


```sql
SELECT - SUM ( - 32 ) col0 FROM tab0 WHERE NOT NULL IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT ALL COUNT ( * ) AS col5 FROM tab0 AS cor0 WHERE NOT col3 >= ( NULL )

Expected: ["0"] but got ["1000"]
```


```sql
SELECT ( + col2 ) AS col0 FROM tab0 cor0 WHERE NOT ( + 65 ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col5 AS col2 FROM tab0 WHERE NOT - col4 NOT BETWEEN - 24 AND ( col1 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL CAST ( NULL AS INTEGER ) + - col0 FROM tab0 AS cor0 WHERE 90 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + col0, - col3 FROM tab0 WHERE CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + col2 AS col1, 26 * + CAST ( NULL AS REAL ) AS col0 FROM tab0 AS cor0 WHERE ( col4 ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + 33 - - 33 / - COUNT ( * ) AS col5 FROM tab0 AS cor0 WHERE NOT ( + col1 ) * - - ( + 27 ) BETWEEN - + col0 * + + 0 - + 37 AND ( + col0 )

Expected: ["33"] but got ["32.967"]
```


```sql
SELECT ALL + + col5 FROM tab0 WHERE NOT col2 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - COUNT ( * ) * + CAST ( NULL AS INTEGER ) col5 FROM tab0 WHERE + 99 / col1 IN ( 34 )

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col2 AS col2 FROM tab0 WHERE NOT 43 = ( + col0 ) OR NOT - 74 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT 61 + COUNT ( * ) col0 FROM tab0 AS cor0 WHERE NOT NULL NOT IN ( col1 * + col1 )

Expected: ["61"] but got ["1061"]
```


```sql
SELECT 36 FROM tab0 WHERE - col3 + col0 NOT BETWEEN NULL AND ( + - col0 )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL COUNT ( * ) FROM tab0 cor0 WHERE NOT ( NULL ) <= + col3

Expected: ["0"] but got ["1000"]
```


```sql
SELECT + CAST ( COUNT ( * ) AS INTEGER ) / + 50 AS col4 FROM tab0 AS cor0 WHERE NOT ( NOT - + col4 IS NULL )

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT + 42 / + COUNT ( ALL + col1 ) AS col1 FROM tab0 AS cor0 WHERE NOT CAST ( NULL AS INTEGER ) IS NOT NULL

Expected: ["0"] but got ["NULL"]
```


```sql
SELECT col5 col3 FROM tab0 AS cor0 WHERE 92 NOT IN ( - col4, 38 * col1, + 80, - - col3 * + col4, + - 30 )

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col5 FROM tab0 AS cor0 WHERE - col1 <> - col0

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col5 FROM tab0 AS cor0 WHERE NOT + 30 * + 76 BETWEEN + + col0 AND col1

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT 36 / - 32 FROM tab0 WHERE NOT col5 IS NULL

Expected: ["-1"] but got ["-1.125"]
```


```sql
SELECT ALL col2 FROM tab0 WHERE - + col3 BETWEEN - 72 AND 50 + + 78

Expected: ["0","0","0","0","0"] but got ["ernxs","orpfh","pirjf","tbpkm","zphbq"]
```


```sql
SELECT ALL col2 AS col3 FROM tab0 WHERE NOT col0 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + + SUM ( 96 ) + + 85 AS col2 FROM tab0 AS cor0 WHERE NOT - 17 * + col4 NOT BETWEEN NULL AND NULL

Expected: ["NULL"] but got ["85"]
```


```sql
SELECT + - COUNT ( * ) col0, + COUNT ( * ) AS col0 FROM tab0 WHERE NULL = + col1

Expected: ["0","0"] but got ["0"]
```


```sql
SELECT + col2 AS col2 FROM tab0 WHERE NOT col0 + 90 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - ( SUM ( DISTINCT CAST ( col3 AS INTEGER ) ) ) FROM tab0 WHERE + 73 * ( - col3 ) IS NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT - 49 + + 21 AS col2 FROM tab0 WHERE NOT col3 BETWEEN NULL AND 23 * 33 + + col0

Query was expected to return results (but did not) 
```


```sql
SELECT + col2 AS col0 FROM tab0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT col5 FROM tab0 AS cor0 WHERE NOT + col4 * 9 * + col1 * - - col4 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT CAST ( NULL AS INTEGER ) + 96 AS col2 FROM tab0 WHERE + col4 IS NOT NULL

Expected: ["NULL"] but got ["96"]
```


```sql
SELECT - COUNT ( * ) AS col3 FROM tab0 WHERE ( + + 72 ) NOT BETWEEN 91 AND NULL

Expected: ["-1000"] but got ["0"]
```


```sql
SELECT + col2 AS col4 FROM tab0 WHERE - col1 NOT BETWEEN - 81 AND - col1 + + 47

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col5 col1 FROM tab0 AS cor0 WHERE - 63 NOT BETWEEN NULL AND - col1

Query was expected to return results (but did not) 
```


```sql
SELECT + COUNT ( * ) AS col2, + AVG ( ALL - col3 ) AS col4 FROM tab0 AS cor0 WHERE NOT ( NULL ) = - col3

Expected: ["0","NULL"] but got ["1000","-5013.515"]
```


```sql
SELECT ALL - COUNT ( * ) AS col4 FROM tab0 WHERE NOT NULL <> - col4

Expected: ["0"] but got ["-1000"]
```


```sql
SELECT + + col2 FROM tab0 cor0 WHERE col4 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT DISTINCT + COUNT ( * ) AS col3 FROM tab0 AS cor0 WHERE NOT - CAST ( - col4 AS INTEGER ) - 80 * + col4 <= ( NULL )

Expected: ["0"] but got ["1000"]
```


```sql
SELECT ALL + CAST ( NULL AS INTEGER ) AS col0 FROM tab0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - 63 FROM tab0 cor0 WHERE NOT - col4 BETWEEN ( 17 * col3 + 16 ) AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + COUNT ( * ) col0 FROM tab0 AS cor0 WHERE NOT + col0 BETWEEN + col1 AND ( + col3 )

Expected: ["805"] but got ["0"]
```


```sql
SELECT ALL + + col2 AS col4 FROM tab0 AS cor0 WHERE NOT + col2 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col0 FROM tab0 WHERE NOT + 54 / - col0 IN ( ( + + col3 ) )

Query was expected to return results (but did not) 
```


```sql
SELECT ALL 41 - - - 28 + - COUNT ( * ) - - ( - COUNT ( * ) ) AS col4, 39 FROM tab0 AS cor0 WHERE NULL IS NULL

Expected: ["-1987","39"] but got ["39","-1987"]
```


```sql
SELECT col2 AS col3, 45 - + col3 FROM tab0 WHERE NOT - col0 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL + COUNT ( DISTINCT - - col4 ) / - 3 AS col3 FROM tab0 AS cor0 WHERE + col2 IS NOT NULL

Expected: ["-333"] but got ["-333.333"]
```


```sql
SELECT + + col3 AS col0 FROM tab0 WHERE - + CAST ( NULL AS INTEGER ) IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT col2 AS col0 FROM tab0 WHERE NOT + col3 IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - 25 FROM tab0 WHERE NOT col0 * col1 + 61 IN ( - col0 * col3 )

Query was expected to return results (but did not) 
```

#### ☓ Ran 11,022 tests as _sqlite_

* 560 failed
* 94% was OK


---- ---- ---- ---- ---- ---- ----
### 210/622 [`./test/index/random/1000/slt_good_8.test`](https://github.com/alasql/alasql-logictest/blob/master/test/./test/index/random/1000/slt_good_8.test)

_Mimic sqlite_

```sql
SELECT DISTINCT col0 / - - col3 + + - col0 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

1000 results returned but expected 967
```


```sql
SELECT ALL ( + + col0 ) FROM tab0 AS cor0 WHERE NOT col4 IN ( + - col1 * - + 58, + col4 * - col0 )

Query was expected to return results (but did not) 
```


```sql
SELECT + ( - MAX ( - 10 ) ) * + + 59 AS col3 FROM tab0 AS cor0 WHERE NOT NULL < ( NULL )

Expected: ["NULL"] but got ["590"]
```


```sql
SELECT col5 AS col3 FROM tab0 AS cor0 WHERE NOT ( - col1 BETWEEN NULL AND + col1 * + col4 + col3 * - ( + 26 ) )

1000 results returned but expected 9
```


```sql
SELECT DISTINCT - CAST ( - AVG ( + - col0 ) AS INTEGER ) * + + 63 / 61 FROM tab0 WHERE NOT NULL IS NULL

Query was expected to return results (but did not) 
```


```sql
SELECT ALL MIN ( + col0 ) col1 FROM tab0 AS cor0 WHERE NOT col4 * col1 + + 76 - - + 33 + + 45 NOT BETWEEN 20 * + 11 + - 63 + - col0 * + col0 + - + col4 + + CAST ( + ( 34 ) AS INTEGER ) * + col4 AND col3 * - col0 + - col4

Expected: ["NULL"] but got ["6"]
```


```sql
SELECT DISTINCT - - COUNT ( * ) FROM tab0 AS cor0 WHERE NOT NULL <= col4 * + + col3 + + - col0 + - + col4

Expected: ["0"] but got ["1000"]
```


```sql
SELECT ALL - COUNT ( * ) * CAST ( NULL AS INTEGER ) * + - ( 51 ) AS col0 FROM tab0 AS cor0 WHERE NULL NOT BETWEEN col1 AND + col1

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT - ( + COUNT ( * ) ) AS col2 FROM tab0 AS cor0 WHERE ( ( NOT ( NULL ) < - - ( + + 93 ) + 42 ) )

Expected: ["0"] but got ["-1000"]
```


```sql
SELECT ALL + CAST ( col3 AS INTEGER ) * col3 + - ( + col0 ) / - col3 AS col2 FROM tab0 WHERE ( NULL ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + COUNT ( * ) AS col4 FROM tab0 AS cor0 WHERE NOT + col3 NOT IN ( - col1 )

Expected: ["0"] but got ["1000"]
```


```sql
SELECT DISTINCT - ( - CAST ( NULL AS INTEGER ) ) AS col1 FROM tab0 WHERE + - 71 IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT DISTINCT - ( - CAST ( NULL AS INTEGER ) ) AS col1 FROM tab1 WHERE + - 71 IS NOT NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT col5 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + ( col2 ) AS col4 FROM tab0 AS cor0 WHERE ( NULL ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col0 col1 FROM tab0 WHERE - - ( 10 ) - col1 NOT BETWEEN - col3 AND NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + + CAST ( NULL AS INTEGER ) col4 FROM tab0 cor0 WHERE col0 * - col3 < - col1 * 97

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + col0 AS col3 FROM tab0 cor0 WHERE NOT CAST ( NULL AS INTEGER ) * - col4 IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT + col0 + - + col4 + - CAST ( NULL AS INTEGER ) * + - 95 FROM tab0 WHERE 14 * + + col3 IS NOT NULL AND NOT ( NULL ) IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - 7 FROM tab0 AS cor0 WHERE NOT - 23 + - - col3 - - 62 * + CAST ( NULL AS INTEGER ) IS NOT NULL

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT - - 20 + + CAST ( NULL AS INTEGER ) FROM tab0 WHERE NULL IS NULL

Expected: ["NULL"] but got ["20"]
```


```sql
SELECT col5 FROM tab0 AS cor0 WHERE ( NULL ) IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + SUM ( col4 ) FROM tab0 AS cor0 WHERE - 70 IN ( 2 * 23 ) AND NOT - col4 * + col3 <= + col3

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + COUNT ( * ) AS col0 FROM tab0 WHERE NOT NULL <= ( NULL )

Expected: ["0"] but got ["1000"]
```


```sql
SELECT - 9 / col0 + + 93 AS col3 FROM tab0 cor0 WHERE NOT NULL IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT + + col2 FROM tab2 AS cor0 WHERE 31 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - SUM ( ALL - 30 ) FROM tab0 AS cor0 WHERE NOT NULL > + col4 / ( col4 )

Expected: ["NULL"] but got ["30000"]
```


```sql
SELECT ALL - CAST ( + + COUNT ( - - col1 ) AS INTEGER ) FROM tab0 AS cor0 WHERE NOT + 42 IN ( 84, col3 )

Query was expected to return results (but did not) 
```


```sql
SELECT DISTINCT + col4 + - CAST ( NULL AS INTEGER ) FROM tab0 cor0 WHERE NULL IS NULL

Expected: ["NULL"] but got ["1011.300","1012.500","1017.600","1029.890","1030.410","1043.120","1049.290","1051.600","1058.350","1059.900","1064.350","1065.950","1071.830","1072.570","1074.490","1083.730","1091.210","1126.780","1147.520","1174.800","1185.470","1186.920","1189.580","119.490","1194.39…
```


```sql
SELECT ALL + col2 AS col4 FROM tab0 AS cor0 WHERE NULL IS NULL

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT ALL - + COUNT ( * ) FROM tab0 AS cor0 WHERE NOT ( NULL ) >= CAST ( - + 66 AS INTEGER )

Expected: ["0"] but got ["-1000"]
```


```sql
SELECT ALL + SUM ( + 36 ) FROM tab0 AS cor0 WHERE col0 = NULL

Expected: ["NULL"] but got ["0"]
```


```sql
SELECT + + col5 FROM tab0 WHERE NOT 39 > col4

Correct amount of values returned but hash was different than expected.
```


```sql
SELECT - 21 FROM tab0 WHERE NOT - col0 IN ( - col1 * col4 )

Query was expected to return results (but did not) 
```


```sql
SELECT CAST ( NULL AS INTEGER ) FROM tab0 WHERE + col0 IS NOT NULL

Correct amount of values returned but hash was different than expected.
```

#### ☓ Ran 4,841 tests as _sqlite_

* 240 failed
* 95% was OK

