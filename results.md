# SQLlogictest results for AlaSQL 0.1.10

_2015-09-09T09:51:27.927Z_

This is a subset of the total 622 tests.
Results from 125 test files:

---- ---- ---- ---- ---- ---- ----
### 1/125 `test/evidence/in1.test`

_Mimic mysql_
```sql
SELECT 1 IN (SELECT * FROM t1)

context is not defined
```

```sql
SELECT 1 NOT IN (SELECT * FROM t1)

Query was expected to return results (but did not): undefined
```

```sql
INSERT INTO t5 SELECT * FROM t4

Cannot insert record, because it already exists in primary key index
```

```sql
INSERT INTO t4n SELECT * FROM t4

Cannot insert record, because it already exists in unique index
```

```sql
CREATE TABLE t7(a TEXT, UNIQUE (a(1)))

Parse error on line 1:
...t7(a TEXT, UNIQUE (a(1)))
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'ORDER', 'EQ', 'WHERE', 'DOT', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
INSERT INTO t7 VALUES('b')

Cannot read property 'columns' of undefined
```

```sql
SELECT 1 IN (2,3,4,null)

Expected: ["NULL"] but got ["0"]
```

#### ☓ Ran 128 tests as mysql

* 97 failed
* 24% was OK

Time: 186ms

---- ---- ---- ---- ---- ---- ----
### 2/125 `test/evidence/in2.test`

_Mimic mysql_
```sql
SELECT 1 FROM t1 WHERE 1 IN (2)

Query was expected to return results (but did not): []
```

```sql
SELECT 1 FROM t1 WHERE 1 IN (SELECT 1)

context is not defined
```

#### ☓ Ran 45 tests as mysql

* 19 failed
* 57% was OK

Time: 58ms

---- ---- ---- ---- ---- ---- ----
### 3/125 `test/evidence/slt_lang_aggfunc.test`

_Mimic mysql_
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```


`Halted`

#### ☓ Ran 5 tests as mysql

* 1 failed
* 80% was OK

Time: 14ms

---- ---- ---- ---- ---- ---- ----
### 4/125 `test/evidence/slt_lang_createtrigger.test`

_Mimic mysql_
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
CREATE TRIGGER t1r1 UPDATE ON t1 BEGIN SELECT 1; END;

Parse error on line 1:
CREATE TRIGGER t1r1 UPDATE ON t1 BE
---------------^
Expecting 'DATABASE', got 'LITERAL'
```

#### ☓ Ran 26 tests as mysql

* 21 failed
* 19% was OK

Time: 15ms

---- ---- ---- ---- ---- ---- ----
### 5/125 `test/evidence/slt_lang_createview.test`

_Mimic mysql_
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
SELECT x FROM view1

Expected: ["1"] but got ["NULL"]
```

```sql
DELETE FROM view1 WHERE x>0

No exception thrown
```

#### ☓ Ran 15 tests as mysql

* 5 failed
* 66% was OK

Time: 20ms

---- ---- ---- ---- ---- ---- ----
### 6/125 `test/evidence/slt_lang_dropindex.test`

_Mimic mysql_
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
DROP INDEX t1i1;

No exception thrown
```

#### ☓ Ran 8 tests as mysql

* 3 failed
* 62% was OK

Time: 10ms

---- ---- ---- ---- ---- ---- ----
### 7/125 `test/evidence/slt_lang_droptable.test`

_Mimic mysql_
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
DROP INDEX t1i1;

No exception thrown
```

#### ☓ Ran 12 tests as mysql

* 2 failed
* 83% was OK

Time: 11ms

---- ---- ---- ---- ---- ---- ----
### 8/125 `test/evidence/slt_lang_droptrigger.test`

_Mimic mysql_
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
CREATE TRIGGER t1r1 UPDATE ON t1 BEGIN SELECT 1; END;

Parse error on line 1:
CREATE TRIGGER t1r1 UPDATE ON t1 BE
---------------^
Expecting 'DATABASE', got 'LITERAL'
```

#### ☓ Ran 12 tests as mysql

* 4 failed
* 66% was OK

Time: 12ms

---- ---- ---- ---- ---- ---- ----
### 9/125 `test/evidence/slt_lang_dropview.test`

_Mimic mysql_
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
SELECT x FROM view2

Expected: ["0"] but got ["NULL"]
```

#### ☓ Ran 13 tests as mysql

* 2 failed
* 84% was OK

Time: 21ms

---- ---- ---- ---- ---- ---- ----
### 10/125 `test/evidence/slt_lang_reindex.test`

_Mimic mysql_
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```


`Halted`

#### ☓ Ran 5 tests as mysql

* 1 failed
* 80% was OK

Time: 7ms

---- ---- ---- ---- ---- ---- ----
### 11/125 `test/evidence/slt_lang_replace.test`

_Mimic mysql_
```sql
SELECT x, y FROM t1 WHERE x=2

Query was expected to return results (but did not): []
```

```sql
REPLACE INTO t1 VALUES(2, 'replace')

Parse error on line 1:
REPLACE INTO t1 VALUES(2, 'r
--------^
Expecting 'EOF', 'COMMA', 'LPAR', 'RPAR', 'END', 'ELSE', 'COLONDASH', 'SEMICOLON', 'GO', got 'INTO'
```

```sql
SELECT x, y FROM t1 WHERE x=2

Expected: ["2","replace"] but got ["2","insert"]
```

#### ☓ Ran 10 tests as mysql

* 5 failed
* 50% was OK

Time: 15ms

---- ---- ---- ---- ---- ---- ----
### 12/125 `test/evidence/slt_lang_update.test`

_Mimic mysql_
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
UPDATE t1 SET z='foo'

No exception thrown
```

#### ☓ Ran 27 tests as mysql

* 3 failed
* 88% was OK

Time: 32ms

---- ---- ---- ---- ---- ---- ----
### 13/125 `test/index/between/1/slt_good_0.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE col3 < 6 OR col3 < 1 AND col3 BETWEEN 2 AND 7

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (col4 IN (5.85,5.95,6.30,0.0,1.27) AND (col4 IN (9.41,4.56,2.55,0.83,3.95,6.92) AND (col1 = 6.24)) OR col0 IN (SELECT col3 FROM tab0 WHERE (((((col0 IN (8,1) AND col0 IS NULL AND col1 < 9.21) AND col4 > 8.64 AND (col3 >= 9) OR col0 < 5)))))) AND (col1 < 7.95 OR col0 < 0) AND col3 >= 9 AND col0 < 2 OR col4 BETWEEN 1.13 AND 0.71 AND (col3 > 9) AND (col0 < 3)

context is not defined
```

```sql
SELECT pk FROM tab4 WHERE (col1 BETWEEN 1.90 AND 3.10) AND col1 IN (8.38,1.48,7.69,4.1,3.47) OR ((col0 = 7)) AND col3 < 4 AND col3 < 2 OR (col0 >= 6 OR col3 <= 4 AND (col3 < 9 AND col0 >= 8) AND ((col0 IN (SELECT col3 FROM tab4 WHERE ((col3 > 2)) AND ((col3 > 8)) OR ((col4 <= 9.7)) AND (col4 > 3.11) AND col1 = 6.12 AND (col4 < 6.86) AND (((col3 >= 6) OR (col0 <= 2 OR (col4 >= 0.99 AND col4 > 2.94) AND col4 <= 0.88 OR ((((col3 > 2)) AND (col0 = 6) OR col1 > 8.12 AND col3 <= 1)) AND (col4 > 7.1) OR col3 <= 8 AND (col3 = 7) AND (col1 > 5.55) AND (((col0 <= 8)) OR col1 > 5.0 OR col0 >= 8) OR ((col3 = 2 OR ((col0 > 9 AND col3 >= 5) OR col1 < 5.10) AND (col0 < 0) OR (col0 = 8) AND (((((((((col1 < 6.38 AND ((col1 IS NULL))))))))) AND col0 = 1)) AND (col3 >= 0) AND col3 < 6 AND col0 > 4 AND col3 > 3 OR (col0 <= 3 OR col0 < 9) OR col3 IN (0,6,1,3,8) AND ((((col3 IS NULL)))) AND (((col0 BETWEEN 7 AND 9)) AND col3 > 9) AND col3 < 5 OR col1 < 2.1 OR col0 < 1 AND col3 > 0)) OR col0 < 2 OR (col0 > 0) OR col0 > 5 OR col3 IN (6,6,4,4,2) AND col0 = 5 AND (col3 > 3) AND col0 < 6 OR col0 < 9 OR (col4 <= 5.98) AND col4 < 1.51)))) AND ((col4 IS NULL) OR col0 = 5) AND (col3 > 4) OR col4 < 2.39 AND ((col4 >= 1.55)))) AND ((col0 < 9) OR col3 >= 3 OR col3 > 7 OR (col1 = 4.63)) OR (((col3 < 4 OR (col4 = 3.13) AND ((((((((col4 IN (8.21,8.86,5.93,7.28))) AND ((col0 IS NULL) OR col3 IN (1,2,0,3,5))) OR ((col1 > 8.41) AND ((col3 < 4) AND ((col4 = 2.94 AND ((col4 > 6.60)) OR col3 < 9 AND ((col0 >= 3)) AND col4 >= 5.47 OR (col0 >= 3) AND col3 > 5 AND (col3 >= 5 OR col1 > 1.99 AND col0 > 8) AND ((col0 > 3)) OR col0 > 3 AND (col0 > 6)) OR col3 = 1 AND col3 IS NULL AND ((((col3 > 0)))))))))) OR col3 IN (5,0))) OR (col1 <= 0.24) AND (((col3 <= 9 OR (col3 > 6 OR ((col3 < 2 OR (col4 > 7.70))) OR col1 = 1.51)))) AND (col1 > 7.48) AND col0 <= 6))) OR col0 = 6 OR col3 >= 4) OR col3 <= 4 OR col1 >= 8.50

Query was expected to return results (but did not): []
```

#### ☓ Ran 10022 tests as mysql

* 9184 failed
* 8% was OK

Time: 59119ms

---- ---- ---- ---- ---- ---- ----
### 14/125 `test/index/between/10/slt_good_0.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE col3 > 23 AND ((col0 <= 96)) OR (col3 >= 39) OR col1 < 11.32 AND col1 BETWEEN 5.32 AND 81.71 OR col0 <= 45 OR col4 >= 76.74 OR (col1 <= 49.6)

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab1 WHERE col3 > 23 AND ((col0 <= 96)) OR (col3 >= 39) OR col1 < 11.32 AND col1 BETWEEN 5.32 AND 81.71 OR col0 <= 45 OR col4 >= 76.74 OR (col1 <= 49.6)

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE col4 IN (SELECT col1 FROM tab0 WHERE (col1 > 13.14) AND (col3 < 54 AND col0 = 24) OR (col1 < 65.83 OR ((col1 BETWEEN 55.69 AND 90.94)) AND (col3 = 81) AND (col3 > 78)))

context is not defined
```

```sql
SELECT pk FROM tab1 WHERE col1 BETWEEN 34.51 AND 91.60

Query was expected to return results (but did not): []
```

#### ☓ Ran 10033 tests as mysql

* 9174 failed
* 8% was OK

Time: 61119ms

---- ---- ---- ---- ---- ---- ----
### 15/125 `test/index/between/10/slt_good_1.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab1 WHERE col4 BETWEEN 57.93 AND 43.23 OR ((col3 > 27) AND (col3 >= 59))

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE col0 < 72 AND ((col3 >= 83 AND ((col0 < 47) AND (((((col3 > 48 AND (col0 IN (50,39,39) AND (col4 IS NULL) AND col0 >= 2) OR col3 <= 96 AND (col3 >= 21) AND col3 < 88 AND (((col4 <= 11.16 AND ((col4 IN (88.42,47.16))) OR col0 < 13 OR col3 >= 73 OR ((col4 < 52.91)) OR (col0 > 57 AND (col0 IS NULL) OR col4 > 95.24) OR col1 > 77.61 AND col0 IS NULL AND col1 > 48.78 AND ((((col3 <= 3)) OR col3 <= 78 AND col3 >= 32 AND col0 = 51)) OR (col3 IS NULL) AND ((col4 <= 31.7 AND ((col0 > 85 AND col1 > 66.82 AND col1 < 40.74)) OR col4 > 85.63 AND col1 > 31.52 OR col1 = 92.80) AND col4 = 20.15 AND ((col0 IN (5,2,97,75))) OR ((col3 <= 6) OR col4 >= 54.96 AND col1 > 46.7) AND col3 < 94 AND col0 BETWEEN 22 AND 7 AND (col3 = 58)) AND col4 > 46.97))) AND col0 < 8 AND col1 < 42.88 OR col3 > 42 OR (col3 < 33) AND col3 > 44 OR (col3 < 30) AND col3 > 77 AND (col4 < 54.70 OR (col3 > 9 AND ((col0 > 30 AND col3 <= 10 AND col1 = 60.35 OR col4 IS NULL) AND (col0 < 76 OR (col4 >= 42.78) OR col4 >= 4.13 AND col3 >= 50 AND col0 BETWEEN 48 AND 36) AND col0 BETWEEN 28 AND 6 OR col4 < 2.31)) OR col0 BETWEEN 34 AND 18))))))) OR col0 <= 44)) OR col4 < 63.33 AND (col0 > 66) AND (col4 > 9.38) OR col3 > 26 AND (((col0 <= 64) OR ((col0 = 95) OR (col3 > 58 AND (col0 IS NULL AND col0 = 85 AND col0 > 26) OR col0 <= 86)) AND col4 IS NULL))

The hash of 9 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 9
```

```sql
SELECT pk FROM tab0 WHERE col0 = 46 OR col0 <= 11 AND (col3 < 66) AND col4 < 3.81 OR (col3 < 45) OR col3 = 24 OR col3 < 65 OR (((col1 IN (SELECT col4 FROM tab0 WHERE col3 = 93) OR col0 > 29) AND ((col3 > 65)) OR (col0 > 0) OR (col1 >= 6.23) AND (col0 < 32 AND col3 >= 67) AND (((col0 > 40)) OR col1 > 46.72) OR col1 < 73.29 AND (col0 IS NULL) AND col3 > 71 AND (col4 IS NULL))) AND col0 = 58 AND ((col1 = 62.35)) OR (col1 < 23.37 AND col4 < 16.53 OR col1 IS NULL AND col3 < 34) OR ((col0 IS NULL) AND (col0 >= 54) OR (col3 <= 68 OR ((col4 > 81.10))) OR (((((col3 < 89))) OR col3 <= 24 OR col3 >= 35 AND (((col3 >= 64 OR col3 IS NULL)) AND (col1 >= 77.50)) AND ((col1 IS NULL OR col3 > 52) AND col1 <= 15.10)) OR (((col3 < 22)) OR ((col1 IN (51.53,28.36,45.1,14.14,61.41))) AND (col0 IN (79,52)) AND (col1 >= 17.36) OR (col3 <= 85 AND col3 >= 99 AND (col4 BETWEEN 98.55 AND 60.32 AND (col3 < 9)) AND col0 <= 84 AND col3 <= 44 AND (col4 BETWEEN 98.70 AND 58.66) OR ((col3 > 98) AND col0 < 7) OR col4 IS NULL OR col4 IS NULL AND (col3 > 81) OR col0 < 56))) OR (((((col0 > 38))) OR (col3 < 74) OR ((col1 >= 42.63 AND (col0 > 96 OR col4 < 49.67 OR col3 = 77 OR (col1 IS NULL) AND ((((((col3 > 91)) OR col3 < 66 OR (col3 <= 1) OR col3 >= 17)))) OR (col1 = 83.87) OR (((col1 >= 43.32) AND col1 BETWEEN 18.63 AND 97.66 AND col0 > 78) OR col4 > 30.68 AND col0 >= 10)) OR (col4 < 84.61)))))) OR (((col0 > 37)))

context is not defined
```

```sql
SELECT pk FROM tab2 WHERE (col3 > 67 AND (col0 >= 49 OR col4 > 37.99 AND (col3 IN (25,46) OR col4 BETWEEN 29.91 AND 56.3) AND col1 <= 14.93 OR ((col0 < 90 AND (col3 < 55 AND ((((((col3 IN (92,12,95,7)))) OR col3 < 44)))))) AND col0 IN (SELECT col3 FROM tab2 WHERE col1 IN (SELECT col4 FROM tab2 WHERE col3 IN (83,42))) AND (col0 <= 36) OR col3 > 25))

Query was expected to return results (but did not): []
```

#### ☓ Ran 10029 tests as mysql

* 9228 failed
* 7% was OK

Time: 54877ms

---- ---- ---- ---- ---- ---- ----
### 16/125 `test/index/between/10/slt_good_2.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE (col0 < 82) AND ((col4 <= 26.19) OR col3 >= 85 OR (((col3 <= 85)))) AND col1 > 19.49 AND (col4 >= 52.41) AND (col3 > 87) AND ((((col4 <= 82.36))) AND col0 BETWEEN 66 AND 42) AND col1 <= 87.77

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE col0 > 23 AND col3 < 92 OR col3 > 3 OR ((col4 BETWEEN 62.55 AND 95.86 AND (col3 > 43))) AND (col3 > 77) OR col3 BETWEEN 35 AND 76 AND col1 > 18.46 OR col0 IS NULL AND col0 > 83

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab0 WHERE col0 = 58 AND (col3 BETWEEN 3 AND 52 AND col0 IN (SELECT col3 FROM tab0 WHERE ((col0 < 22 OR col3 >= 66 OR col3 > 41)))) AND (((col0 IN (91,11,67,84,35,45) AND col3 < 27)) AND ((col3 IN (75,51,70)) OR col0 > 19)) AND (((col0 > 68))) AND col0 IS NULL AND (col1 < 77.50 OR (col1 < 78.65) AND col4 < 54.80) OR col4 > 40.35

context is not defined
```

#### ☓ Ran 10032 tests as mysql

* 9186 failed
* 8% was OK

Time: 55971ms

---- ---- ---- ---- ---- ---- ----
### 17/125 `test/index/between/10/slt_good_3.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE (col0 <= 57 OR col1 IN (SELECT col4 FROM tab0 WHERE col3 = 43 AND col1 BETWEEN 62.29 AND 69.68 AND ((col0 >= 69 AND col0 IS NULL)) AND (col1 > 67.93 AND col3 > 99 OR col3 > 30 AND (col3 < 80) AND (col0 >= 88))) AND col3 < 78) OR col3 < 43

context is not defined
```

```sql
SELECT pk FROM tab1 WHERE (col0 <= 57 OR col1 IN (SELECT col4 FROM tab1 WHERE col3 = 43 AND col1 BETWEEN 62.29 AND 69.68 AND ((col0 >= 69 AND col0 IS NULL)) AND (col1 > 67.93 AND col3 > 99 OR col3 > 30 AND (col3 < 80) AND (col0 >= 88))) AND col3 < 78) OR col3 < 43

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE col1 < 38.52 OR (col0 BETWEEN 93 AND 11 OR ((col0 <= 60) OR (col1 >= 88.59) OR col1 >= 23.4))

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab0 WHERE col4 BETWEEN 63.41 AND 68.33 AND col3 <= 39 OR col0 > 36 AND col0 >= 73 AND col0 = 7 OR (((col3 < 4)) AND col4 <= 29.36 AND col1 > 43.72) OR (col1 <= 63.43 AND col1 = 30.15 OR ((col0 > 42 OR ((((((col3 IS NULL) OR (col4 < 25.9) OR col3 = 88)) OR col1 < 3.92))))) OR col1 = 58.46) OR col3 <= 41 OR ((col0 IS NULL)) OR (col0 IS NULL) AND ((col0 = 22)) OR (col1 > 11.50 OR (col3 <= 62) AND (col4 IS NULL) AND col4 = 82.22 OR col3 <= 79 OR col0 > 93 OR (((((col1 <= 5.3))) AND col3 >= 92 OR ((col3 >= 26) AND col4 >= 64.53 OR col0 <= 27)))) OR (col4 <= 19.48) OR col4 <= 14.3

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

#### ☓ Ran 10032 tests as mysql

* 9232 failed
* 7% was OK

Time: 60102ms

---- ---- ---- ---- ---- ---- ----
### 18/125 `test/index/between/10/slt_good_4.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE ((col1 > 7.83)) AND (((col0 BETWEEN 41 AND 20 AND col1 < 97.72 OR col0 >= 25 OR (col0 > 59)))) OR col3 >= 35

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab1 WHERE ((col1 > 7.83)) AND (((col0 BETWEEN 41 AND 20 AND col1 < 97.72 OR col0 >= 25 OR (col0 > 59)))) OR col3 >= 35

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE col3 IN (SELECT col0 FROM tab0 WHERE (((col0 BETWEEN 33 AND 1))))

context is not defined
```

```sql
SELECT pk FROM tab1 WHERE ((col1 > 44.41)) AND col3 >= 47 OR col0 < 92 OR col1 IS NULL AND col0 <= 29 OR (col0 > 67) AND (((col0 >= 18 AND col3 < 4))) AND col1 > 35.41 AND (col0 >= 60 OR (col0 <= 66) AND col4 IS NULL) OR col3 >= 11 AND (col0 > 59) AND col4 < 8.73 OR col0 < 38 AND (((col0 > 26))) AND (((((col3 BETWEEN 68 AND 72) OR (col3 >= 46)))))

Query was expected to return results (but did not): []
```

#### ☓ Ran 10032 tests as mysql

* 9246 failed
* 7% was OK

Time: 57574ms

---- ---- ---- ---- ---- ---- ----
### 19/125 `test/index/between/10/slt_good_5.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE ((((((col3 IN (44,24,63,44,60)) AND (col3 < 30 OR ((((col0 < 75 AND col1 < 39.22))) AND (col3 BETWEEN 25 AND 3) AND col3 >= 35 AND col0 <= 8 AND (col0 IN (31,83,83,69)) AND (((col3 < 64)) OR (col0 > 4 AND (col0 < 43))) AND (col3 = 12 AND (col3 > 6) OR ((col0 = 24) OR col1 IS NULL) AND col1 > 67.43) AND (col0 <= 62) AND (col0 IS NULL)) AND (col1 > 90.27) AND (col0 <= 64))))))) AND col3 > 13

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE ((col1 > 93.39)) AND col0 <= 43 OR col0 BETWEEN 55 AND 59 OR (((col3 < 6 OR col4 > 71.3)) AND col0 < 24 OR col1 > 74.36 OR col1 >= 19.10 AND col4 <= 52.51 OR (((col0 < 69) AND col1 IS NULL OR (col3 > 27) AND col1 < 51.86)) OR col0 IN (89) OR col3 = 80 OR col0 < 30 OR ((col1 = 70.19 OR ((col3 > 6 OR col3 < 97 OR ((col1 < 16.69)))) AND (col1 > 64.72 AND col0 >= 63))) OR (col3 <= 82) AND col4 = 37.0 AND col0 >= 65 AND (((col3 > 91) AND col0 < 95 OR col3 < 59 OR col3 BETWEEN 53 AND 99 AND col0 <= 80 OR (col1 < 89.34 OR col1 >= 15.4 OR (col3 <= 53 OR (col0 < 62))) OR col3 > 11 OR col0 > 12)) AND (col3 IS NULL))

The hash of 9 returned values was different than expected. Check the sorting: 0, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab0 WHERE ((col4 < 53.2 OR (col3 IN (SELECT col0 FROM tab0 WHERE col3 >= 21)) OR col3 >= 24)) OR (col0 > 91) AND (col1 BETWEEN 12.41 AND 14.37) AND (col3 > 76) AND col1 <= 32.8 OR col1 < 61.7

context is not defined
```

```sql
SELECT pk FROM tab3 WHERE col4 = 49.72 AND col3 <= 70 AND col0 < 59 OR col0 IN (6,29) AND (col4 <= 3.8) AND (((((( col3 >= 64 AND col3 <= 52)) AND col1 >= 15.75 AND col4 >= 64.65 OR col4 <= 27.57 AND col3 > 69 OR col0 = 9))) AND col4 > 17.59 AND col4 < 3.65 OR col1 >= 59.57 AND col3 >= 64 OR col3 IN (72,72) OR ((col0 < 92 OR (col1 IS NULL) OR col3 > 49)) AND col3 > 14 OR col3 >= 87 OR (col0 IN (81,54,93,17))) AND (((((col3 IN (6) AND col4 <= 68.36 AND (col0 = 82 AND (((col3 = 70)) AND ((((col0 > 33 OR col4 < 72.96 AND col0 IS NULL OR col0 >= 35 OR (((col3 = 3 OR col3 < 34)) AND (col3 >= 47)) AND col0 >= 86 OR (((col4 = 17.10)) OR col3 > 84) AND col4 >= 6.9 AND (col0 = 35)) AND col0 > 13))) AND col0 = 5) OR (col3 < 38)) AND (col4 <= 5.33 AND ((col4 <= 96.66) AND ((col1 = 65.76)) OR (col0 > 7 AND col3 > 87) OR (((col0 >= 26)) AND (col3 < 87) OR col3 >= 85 OR col3 = 68 AND col4 = 48.98 AND col3 > 6 OR col0 IS NULL OR (col1 <= 68.76) AND (col0 < 1) AND (col4 > 61.99) OR (col3 > 13)) AND col0 >= 2 AND col0 = 56 AND col4 < 26.99 OR (col1 < 24.31 OR (((col3 < 90) AND (col0 <= 60) AND col3 > 24 AND col0 < 9 AND col0 >= 15 OR ((col1 > 21.74 AND col4 > 85.68)) OR (col0 < 16)) OR ((((col3 < 95) AND col1 IS NULL) OR ((col3 < 47) OR (col0 > 52) OR ((((col3 < 35))))) OR ((((((col1 = 22.6)))) OR col3 IS NULL AND ((col3 > 24)) AND col1 < 5.96) AND col1 >= 93.99 OR (col4 >= 77.52) AND (((col3 < 83 OR col1 IN (39.34)) OR ((col3 > 6 OR ( col0 >= 66 AND col0 <= 94) AND col3 IS NULL AND col0 IN (51,20,42,9,6,62) AND col4 = 80.41)) OR ((col1 <= 42.15 OR ((col0 = 88)) OR col1 IS NULL)) AND (col3 > 12))) OR col4 > 18.44 AND (col3 > 12 AND col3 >= 39 AND ((((( col1 >= 95.64 AND col1 <= 8.8))) OR col3 <= 13 AND col0 < 87 AND (col0 IN (8,80,21,25)))) AND col0 >= 89 AND col0 <= 7 OR col3 < 25) OR col3 > 32 AND col3 < 5 AND ((col0 < 27 OR col3 < 75 OR col1 IS NULL)) AND col0 = 8 AND col3 IS NULL AND col3 > 17 OR ((col0 IN (13,88,43)) AND col0 <= 94 OR (col3 = 44) AND col1 > 43.43 AND col0 < 12) AND col4 < 30.13 OR (col4 > 34.65) OR (col4 = 48.57 AND col0 = 80) OR col0 = 54) AND (col0 < 70)) AND col1 > 99.0 OR (col0 > 64 AND ((col1 < 84.54)) OR (col0 > 96) AND (col3 = 50) OR col3 < 52 AND col4 IS NULL AND col4 > 11.13 AND col4 IS NULL AND (col3 >= 12)) OR ((col1 < 42.67 AND col0 > 33) AND (col0 = 47 OR (col1 > 68.40) OR col3 > 69 OR col0 > 30) AND col1 IN (51.16,93.24,40.46,40.10,3.60) AND col0 IS NULL) OR col0 = 85 OR col4 = 2.39))) AND col3 < 84))))))) AND (col0 IS NULL AND (col3 < 83) OR col0 < 66 OR ((col4 > 18.84 AND (col4 < 62.8) AND col1 >= 87.34 AND col0 = 36))) OR col3 > 41 AND col4 >= 7.88

Query was expected to return results (but did not): []
```

#### ☓ Ran 10031 tests as mysql

* 9114 failed
* 9% was OK

Time: 52580ms

---- ---- ---- ---- ---- ---- ----
### 20/125 `test/index/commute/10/slt_good_0.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE ((col1 < 71.25)) OR (col3 IN (53,42,27,44) OR (col3 IS NULL)) AND (col0 >= 42)

The hash of 9 returned values was different than expected. Check the sorting: 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab1 WHERE ((col1 < 71.25)) OR (col3 IN (53,42,27,44) OR (col3 IS NULL)) AND (col0 >= 42)

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE ((((col4 < 26.48))) AND col4 IN (SELECT col1 FROM tab0 WHERE (col3 < 55 OR ((col0 >= 53 AND (((((col0 > 8) AND (((col3 IN (SELECT col0 FROM tab0 WHERE col0 < 65 AND col1 > 42.32)) OR col1 IS NULL OR col3 > 84 OR (col4 IS NULL)) OR ((col0 <= 9))))) AND col0 IN (1))) OR col3 >= 2 OR ((col1 IS NULL)) AND col0 >= 55 OR col0 > 24 AND col0 > 63 OR col3 = 90))))) OR (col4 = 86.85) AND (col4 > 80.28) OR (((col0 IN (73,26,99))) AND col3 <= 73) OR ((((col4 < 0.98)))) OR col0 < 78 AND col0 >= 10

context is not defined
```

```sql
SELECT pk FROM tab1 WHERE ((((col1 <= 6.16 OR (col3 BETWEEN 39 AND 25 AND ((((col1 = 99.53 AND col0 > 42 OR (col0 >= 33)))) AND col4 IS NULL)) AND col4 < 45.9 AND (col3 < 7 AND (col0 > 1) AND (col1 >= 31.78)) AND (col3 IS NULL)))))

Query was expected to return results (but did not): []
```

#### ☓ Ran 10034 tests as mysql

* 8868 failed
* 11% was OK

Time: 19066ms

---- ---- ---- ---- ---- ---- ----
### 21/125 `test/index/commute/10/slt_good_1.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE col1 BETWEEN 33.32 AND 54.30 AND (col3 < 29) OR col0 IN (SELECT col3 FROM tab0 WHERE col1 >= 86.23) AND (col4 < 42.46) OR col1 = 74.64

context is not defined
```

```sql
SELECT pk FROM tab1 WHERE col1 BETWEEN 33.32 AND 54.30 AND (col3 < 29) OR col0 IN (SELECT col3 FROM tab1 WHERE col1 >= 86.23) AND (col4 < 42.46) OR col1 = 74.64

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (col3 = 33) OR (col0 > 9) OR col4 < 90.56

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab1 WHERE (col4 >= 2.21) OR ((col0 < 53)) AND col0 > 36

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab1 WHERE col0 = 57

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab3 WHERE 32.10 < col1

Query was expected to return results (but did not): []
```

#### ☓ Ran 10030 tests as mysql

* 8900 failed
* 11% was OK

Time: 20068ms

---- ---- ---- ---- ---- ---- ----
### 22/125 `test/index/commute/10/slt_good_2.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab1 WHERE col4 > 94.74

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (col3 < 78) OR col3 >= 27 AND ((col3 = 89))

The hash of 9 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8
```

```sql
SELECT pk FROM tab0 WHERE (col3 > 19 AND ((col4 >= 85.9) OR col4 > 25.21) OR col3 > 31 OR col3 > 94) AND (((col3 IN (SELECT col0 FROM tab0 WHERE col1 > 96.78 OR ((col0 BETWEEN 21 AND 0 AND ((col3 >= 86 OR (((col4 <= 66.71))) OR (((col4 = 16.26) OR col4 IS NULL)) AND ((col1 >= 74.85)) AND (col4 IS NULL) AND ((((col0 > 27))) AND col3 > 49 AND (col4 <= 29.6 AND col3 < 4) AND col0 BETWEEN 53 AND 43) AND (((col0 < 14 OR col4 < 49.75))) AND (col4 IS NULL) AND col3 < 18 OR col0 BETWEEN 89 AND 11 OR col1 = 97.97) OR col0 = 43 AND ((((((col3 IS NULL)) AND (col1 = 87.0) OR (col0 < 61) AND col0 > 7)) AND col1 > 64.91 OR col1 < 55.32))))))) AND col1 > 45.47) AND col0 < 64)

context is not defined
```

#### ☓ Ran 10037 tests as mysql

* 8936 failed
* 10% was OK

Time: 21607ms

---- ---- ---- ---- ---- ---- ----
### 23/125 `test/index/commute/10/slt_good_3.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE col1 >= 93.90 OR (col0 > 5) OR col4 > 57.41 AND (col1 < 1.49) OR col0 < 59 OR col4 < 33.12 AND (col3 < 90 AND col3 >= 68) AND col3 >= 35

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab1 WHERE col1 >= 93.90 OR (col0 > 5) OR col4 > 57.41 AND (col1 < 1.49) OR col0 < 59 OR col4 < 33.12 AND (col3 < 90 AND col3 >= 68) AND col3 >= 35

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (col0 >= 8) OR (col0 IN (SELECT col3 FROM tab0 WHERE (((col4 < 80.50) OR (col0 >= 42 AND col1 < 22.93 OR (col0 > 31) AND col0 IS NULL) OR (col4 <= 77.12 AND col1 BETWEEN 27.91 AND 9.60) AND col3 < 16 AND ((col1 < 84.70)) AND (col4 > 58.11) AND ((col3 > 62 AND col0 < 16))))) AND (col3 > 93) OR col0 IS NULL) OR col3 <= 56 OR col0 BETWEEN 24 AND 36 OR col4 IN (18.24,84.20)

context is not defined
```

#### ☓ Ran 10032 tests as mysql

* 8892 failed
* 11% was OK

Time: 21790ms

---- ---- ---- ---- ---- ---- ----
### 24/125 `test/index/commute/10/slt_good_4.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE (col3 >= 5)

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab1 WHERE (col3 >= 5)

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (col3 > 71) OR (((col1 IN (SELECT col4 FROM tab0 WHERE (col0 >= 47 OR col0 > 88 AND col3 <= 3 OR ((((col0 >= 82))) AND (col0 = 42 AND (col0 = 92 AND col0 < 54 OR col0 > 96)) AND col3 > 8 OR col4 > 35.19))) AND ((col0 > 33 AND (col0 <= 47 OR col0 < 70 AND (col3 > 74) AND col0 > 65 AND col1 > 59.56 OR (col4 < 70.94) OR (col4 >= 3.14) OR col3 IS NULL AND col1 < 22.22 AND ((((col0 IS NULL) AND col4 >= 97.67 AND col3 IN (SELECT col0 FROM tab0 WHERE col1 IS NULL AND (col3 = 88) AND (((col0 >= 43 AND (col3 > 39)))) OR col0 >= 51 AND (col1 < 24.45 OR col3 < 42) OR (col0 > 88) OR col0 = 26 AND col0 IN (53,24,92,90,99,87) OR col4 >= 67.89 AND (col4 > 43.68) AND col1 > 78.51 AND (col4 > 62.83) AND (col4 < 28.72) OR col3 >= 52 AND col1 BETWEEN 26.84 AND 67.10 AND col3 < 5 AND (col3 < 43))) AND ((col3 >= 24) AND (((col3 > 1))) OR col1 < 85.87 AND (col3 > 3) OR col0 = 7 AND col4 > 43.16 OR col0 < 22) AND col1 IS NULL AND (col3 < 23 AND (col0 > 28) AND ((col3 > 10))) OR col0 < 21 AND col3 > 39 AND col3 <= 71 AND col3 > 67 OR col1 > 90.35 AND ((col1 = 29.64 AND (col0 <= 90) OR col3 <= 99)) OR (col3 BETWEEN 88 AND 19 OR (col4 < 13.35)))) AND col0 < 72 OR col1 > 38.7 AND col3 < 19) AND (col3 > 68)) AND col3 < 4 OR (col4 IN (14.55,73.32,21.90,77.41)) AND col0 IS NULL AND col3 < 3 AND col0 = 38 AND col4 < 32.5 AND col4 > 79.47 AND col1 < 7.95) OR (col4 = 64.28) OR col0 > 71) AND (col3 >= 36)))

context is not defined
```

#### ☓ Ran 10030 tests as mysql

* 9030 failed
* 9% was OK

Time: 25595ms

---- ---- ---- ---- ---- ---- ----
### 25/125 `test/index/commute/10/slt_good_5.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE (col1 > 17.98) OR ((col0 >= 40))

The hash of 9 returned values was different than expected. Check the sorting: 0, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab1 WHERE (col1 > 17.98) OR ((col0 >= 40))

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE ((col1 IN (SELECT col4 FROM tab0 WHERE (col1 >= 3.89 OR (col3 >= 23 AND col1 > 10.55 OR col0 > 8) OR col3 > 54)) OR (col4 < 32.54 OR col3 < 89 AND col0 <= 44 OR col1 > 48.52 AND (((col0 < 84))))))

context is not defined
```

```sql
SELECT pk FROM tab0 WHERE 63.3 = col4

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab4 WHERE ((((col4 IN (94.18,49.28,48.74,32.28)) AND 4 < col3))) AND 31 >= col0 AND 30 <= col3 AND 71 < col3 OR (75 > col3)

Query was expected to return results (but did not): []
```

#### ☓ Ran 10032 tests as mysql

* 8988 failed
* 10% was OK

Time: 22126ms

---- ---- ---- ---- ---- ---- ----
### 26/125 `test/index/commute/10/slt_good_6.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE ((col0 IS NULL) OR (col1 >= 7.87))

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab1 WHERE ((col0 IS NULL) OR (col1 >= 7.87))

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE ((col3 = 15 AND col1 < 71.6)) AND (col0 >= 48) AND col1 > 48.67 OR (col3 >= 33) AND col3 IN (SELECT col0 FROM tab0 WHERE col3 IS NULL) AND col1 >= 99.23

context is not defined
```

```sql
SELECT pk FROM tab0 WHERE (col1 = 63.45)

Query was expected to return results (but did not): []
```

#### ☓ Ran 10036 tests as mysql

* 9144 failed
* 8% was OK

Time: 25937ms

---- ---- ---- ---- ---- ---- ----
### 27/125 `test/index/commute/10/slt_good_7.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab1 WHERE col1 >= 73.70 AND col0 >= 49 OR col4 < 43.15 OR ((col3 = 20 OR col0 < 48))

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (((col4 < 11.91 OR ((col3 <= 52 OR col1 >= 55.26 AND col0 >= 4 OR col0 IN (57) AND col4 <= 5.21 OR col0 > 2) OR col4 > 10.50 OR col1 >= 11.98) AND ((((col0 > 28))))) AND col3 < 7 OR col0 IS NULL AND col4 > 97.96 AND col3 > 44 OR col0 BETWEEN 39 AND 97 OR (col0 < 90) OR col4 > 30.67 OR col0 BETWEEN 16 AND 34 OR col1 >= 82.4))

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab0 WHERE ((col1 = 35.92 AND col4 < 7.27)) AND col0 IN (SELECT col3 FROM tab0 WHERE ((col4 < 6.3 AND col0 >= 22))) OR ((col3 < 83 AND (col3 IS NULL AND (col0 > 86)) AND col1 <= 91.73 AND ((col3 IS NULL)) OR col4 IS NULL OR (col1 <= 61.73 OR (col1 IN (SELECT col4 FROM tab0 WHERE col0 > 75)) OR (((col4 IN (45.62,97.82,92.85,39.41) AND ((col0 < 71)) AND col3 > 50)) AND col1 > 30.30 OR col1 > 93.35)) AND ((col4 = 32.71 OR col3 > 62 OR ((col4 < 33.80))))))

context is not defined
```

```sql
SELECT pk FROM tab0 WHERE 88.25 < col4

Query was expected to return results (but did not): []
```

#### ☓ Ran 10034 tests as mysql

* 9114 failed
* 9% was OK

Time: 24145ms

---- ---- ---- ---- ---- ---- ----
### 28/125 `test/index/commute/10/slt_good_8.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab1 WHERE col1 > 17.65

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE col0 = 65 OR (col0 <= 23) OR (col3 < 23 OR (((((col4 < 97.92))) OR (col4 >= 96.61) OR col3 > 5)))

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab3 WHERE (((37.72 >= col4)))

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (((col0 < 53 OR col0 IN (SELECT col3 FROM tab0 WHERE col4 >= 74.91) AND ((col0 > 54 AND ((col0 < 16 AND col4 IS NULL OR col3 < 91 AND col0 >= 12 OR col3 >= 14 OR col3 < 36 AND (((((col3 <= 26 AND (col3 IN (SELECT col0 FROM tab0 WHERE (col1 IS NULL AND col1 IN (74.63,32.73)))) OR (col1 IS NULL))) OR col3 < 99 OR col0 BETWEEN 74 AND 82))) AND (col0 > 36 AND ((col3 >= 15) AND col4 = 7.8 OR ((col3 <= 0) OR col0 < 23)) AND col4 < 62.10) AND (col3 < 87) OR col1 >= 90.59) AND (col1 IS NULL)) AND col3 > 33 OR col1 > 1.99 AND col3 < 1)))))

context is not defined
```

#### ☓ Ran 10032 tests as mysql

* 9032 failed
* 9% was OK

Time: 27569ms

---- ---- ---- ---- ---- ---- ----
### 29/125 `test/index/commute/10/slt_good_9.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE col3 > 29 AND (col3 <= 76) AND col3 <= 11 AND col1 > 15.46 OR col4 < 21.97 OR col4 IS NULL OR col3 > 18 OR (col3 IN (40,81,67)) OR col4 > 79.39

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab1 WHERE col3 > 29 AND (col3 <= 76) AND col3 <= 11 AND col1 > 15.46 OR col4 < 21.97 OR col4 IS NULL OR col3 > 18 OR (col3 IN (40,81,67)) OR col4 > 79.39

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE col0 IN (SELECT col3 FROM tab0 WHERE col3 < 92)

context is not defined
```

```sql
SELECT pk FROM tab0 WHERE col3 IN (33,80,86,63,86) AND 2.28 <= col4

Query was expected to return results (but did not): []
```

#### ☓ Ran 10034 tests as mysql

* 9110 failed
* 9% was OK

Time: 26913ms

---- ---- ---- ---- ---- ---- ----
### 30/125 `test/index/delete/1/slt_good_0.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE pk IS NULL

Query was expected to return results (but did not): []
```

#### ☓ Ran 10907 tests as mysql

* 4320 failed
* 60% was OK

Time: 14324ms

---- ---- ---- ---- ---- ---- ----
### 31/125 `test/index/delete/10/slt_good_0.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE pk IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE NOT ((col0 > 68))

The hash of 9 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 5, 6, 7, 8, 9
```

#### ☓ Ran 10730 tests as mysql

* 4446 failed
* 58% was OK

Time: 14759ms

---- ---- ---- ---- ---- ---- ----
### 32/125 `test/index/delete/10/slt_good_1.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE pk IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE NOT ((col0 = 32))

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

#### ☓ Ran 10774 tests as mysql

* 4466 failed
* 58% was OK

Time: 14824ms

---- ---- ---- ---- ---- ---- ----
### 33/125 `test/index/delete/10/slt_good_2.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE pk IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE NOT (col0 > 82)

The hash of 9 returned values was different than expected. Check the sorting: 0, 1, 3, 4, 5, 6, 7, 8, 9
```

#### ☓ Ran 9390 tests as mysql

* 3941 failed
* 58% was OK

Time: 16029ms

---- ---- ---- ---- ---- ---- ----
### 34/125 `test/index/delete/10/slt_good_3.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE pk IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE NOT ((((col4 > 93.60) AND (col0 < 22) OR col0 IS NULL AND ((col0 >= 73 OR col1 > 69.81 AND (col4 < 39.77 OR (col0 < 40)) OR col3 = 84)))) AND (col0 < 55 AND col3 < 32 OR (col1 < 18.79)))

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab2 WHERE NOT (col3 = 84)

Query was expected to return results (but did not): []
```

#### ☓ Ran 10065 tests as mysql

* 4075 failed
* 59% was OK

Time: 15077ms

---- ---- ---- ---- ---- ---- ----
### 35/125 `test/index/delete/10/slt_good_4.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE pk IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE NOT (col0 = 28)

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

#### ☓ Ran 10599 tests as mysql

* 4263 failed
* 59% was OK

Time: 14813ms

---- ---- ---- ---- ---- ---- ----
### 36/125 `test/index/delete/10/slt_good_5.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE pk IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE NOT ((col0 IN (27)))

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab1 WHERE NOT (col1 >= 45.4)

Query was expected to return results (but did not): []
```

#### ☓ Ran 10353 tests as mysql

* 4332 failed
* 58% was OK

Time: 14881ms

---- ---- ---- ---- ---- ---- ----
### 37/125 `test/index/in/10/slt_good_0.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE col1 IN (1.29,40.85,73.9,98.93,14.64,43.90)

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (col0 > 27 OR col1 <= 41.57 AND col0 <= 46 OR (col3 IS NULL) OR col3 > 87) AND ((col1 IN (SELECT col4 FROM tab0 WHERE (col0 < 85 OR ((col4 <= 45.40)) OR (((col4 >= 8.27 AND col3 IN (25,17) OR col0 >= 0 OR col0 >= 74 OR col3 IN (47,25) AND col3 > 18 OR col4 >= 61.28 OR (col1 IN (97.94,69.95,11.4)) OR col3 = 64) AND col3 > 49 AND col3 <= 20 OR (((((col0 > 93) AND col3 IN (66,33,66,90,14,1)))))) AND ((col1 IS NULL)) AND col3 < 93) OR col0 = 81 AND (col3 >= 84) OR col0 < 61) OR col1 = 65.10 OR (col0 <= 50 OR col3 < 28)) AND (col3 BETWEEN 11 AND 39) AND ((col3 BETWEEN 26 AND 3) AND (((col4 IN (SELECT col1 FROM tab0 WHERE (((col0 < 80 OR col1 IS NULL) AND col4 > 82.55 OR (col0 > 58)))) AND (col0 IN (46,4))) OR (col3 > 51) OR ((col0 > 88) OR col4 >= 99.61) OR ((col3 < 0)) AND col0 = 44 AND ((col0 = 7)) OR ((col4 > 64.58 OR (col3 >= 72 AND (((col3 <= 41 OR (col3 = 66 AND (col0 > 77 AND col3 > 79 AND (col3 >= 27))) OR ((col3 > 99))) OR (col0 IN (86,87,4,30) AND col3 > 63) AND col3 <= 60 AND col4 <= 54.47 OR (col3 IS NULL) AND (col3 > 12) OR (((col0 > 86 AND col1 IS NULL)) AND ((col0 >= 50))) OR col3 >= 66))) OR (col3 < 7) AND (col0 <= 23))) AND col0 >= 17 AND col3 > 2 AND col3 IS NULL OR col0 > 43))) AND col3 BETWEEN 29 AND 63))

context is not defined
```

```sql
SELECT pk FROM tab0 WHERE col4 > 12.48 OR (col1 IN (63.52,29.7,91.86,30.25,44.75,61.15) OR col4 >= 40.21 OR (col4 < 97.92)) AND col3 > 64

The hash of 9 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab0 WHERE ((((((col1 > 52.74 OR col0 > 51 AND (col4 > 71.43) OR col0 = 59)) AND ((col4 > 22.86 AND col4 < 0.23 AND col3 >= 24) AND (((((col1 < 83.25))) AND col0 <= 35 AND col0 IS NULL AND ((col1 > 81.51 OR (((((col1 >= 16.7)))) AND ((col3 > 40) AND ((col0 >= 23 OR (col3 > 49 OR ((((col0 IN (SELECT col3 FROM tab0 WHERE (((col3 > 37 AND (col1 <= 24.71)))) AND ((((col3 > 40 AND ((((col0 = 57 OR col0 = 72 OR col0 = 91 OR col0 = 30))) OR (col1 >= 78.19))))))) OR col0 < 41 OR ((col0 = 57 OR col0 = 2 OR col0 = 45 OR col0 = 10 OR col0 = 83 OR col0 = 50))))) AND col0 <= 93)) AND col3 IS NULL)))) AND ((col0 < 94) OR (col0 < 70) AND col1 < 20.60)) AND col4 >= 9.39 AND col3 IS NULL OR col0 > 1 AND col3 > 21 OR (col1 = 64.54 OR col1 = 91.42 OR col1 = 99.14 OR col1 = 59.85 OR col1 = 32.10) OR col3 BETWEEN 5 AND 14 AND (col3 < 16) OR col0 > 16 OR col1 > 46.48 AND col1 < 75.71 OR col1 >= 22.49 AND (col0 > 13) OR col0 >= 3 AND col4 < 90.83 OR col0 > 85 AND ((((col0 = 49 OR col0 = 28 OR col0 = 60)))) AND col1 <= 59.83) OR col3 < 65) OR col0 < 93) AND col0 < 37 OR col0 <= 56 AND (((col3 >= 24 AND col3 > 52 AND col1 >= 83.32 OR col1 = 81.21 AND (col1 <= 67.17 AND col1 >= 63.54) OR ((((((col1 < 33.30)))))) OR col3 IS NULL))) AND (col0 BETWEEN 73 AND 96 OR col4 >= 0.77) AND ((col3 <= 71)))))) AND col3 <= 28 OR (col4 > 88.64) AND col1 = 86.15 OR (col4 < 7.73) OR col0 >= 9) AND col3 >= 6 OR (((col1 > 41.48)) AND (col1 IS NULL) AND col3 <= 50 AND (col0 = 17 OR col0 = 81)) OR col0 > 31

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

#### ☓ Ran 10035 tests as mysql

* 9292 failed
* 7% was OK

Time: 73068ms

---- ---- ---- ---- ---- ---- ----
### 38/125 `test/index/in/10/slt_good_1.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab1 WHERE col3 >= 80 AND col4 IN (61.72,91.69,75.89,68.74) OR (((((col4 >= 34.44 OR col0 IN (18,43,46,71,41) AND (col3 > 22)))) AND (col0 >= 55 OR (col3 > 10))) OR col3 IN (29,14,2,22,10,54) AND col1 > 40.1) AND (col4 > 38.77)

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE ((col4 >= 68.49 AND col1 >= 17.80 OR col0 > 16 OR col3 > 21 OR col4 > 85.27 OR col0 <= 42 AND (col1 >= 81.71 OR col4 IS NULL) AND ((col0 IS NULL) OR col0 IN (89,62) AND col3 > 27 AND (((col3 < 47))) AND (col1 < 90.4) AND col0 >= 78 OR (col0 <= 16 OR (((col3 > 72 OR col3 > 3)) AND col4 IS NULL AND col0 = 14 AND col0 > 56 AND (col3 > 63)) OR (((col0 < 12))) OR col4 >= 66.26 AND col0 IN (SELECT col3 FROM tab0 WHERE col4 > 62.6) OR (col3 < 16) AND (col0 IS NULL)) OR col1 = 4.29 AND col3 < 13 AND col0 IN (2,39,96,76,67,3) AND ((((((col4 > 35.99)))))) OR col4 <= 58.34 AND (col0 <= 5) OR col4 > 53.31 OR col0 > 37 AND col3 <= 88 AND (col4 < 89.78) AND ((col3 = 52 OR (col4 > 68.17))) OR col0 > 42 AND (col1 IN (24.87,79.27,36.37,52.61,51.25)) AND col3 > 23) OR ((col1 > 91.76) AND col0 = 37) AND (col0 < 63) AND col3 > 31 AND col3 IS NULL OR col0 >= 59)) OR col3 = 41

The hash of 9 returned values was different than expected. Check the sorting: 0, 1, 2, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab3 WHERE (col1 IN (72.23,48.30,26.73,53.47) OR col4 IS NULL)

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (col1 >= 88.39) OR col1 IN (SELECT col4 FROM tab0 WHERE col3 < 46) AND col1 IS NULL OR col0 IN (94,63,3,33,55) AND ((((col3 > 12)))) AND ((col0 <= 95)) OR col4 IS NULL AND (((((col3 > 40 OR (col3 IN (59,68,91,47,49,47) AND (col0 >= 36 AND col1 = 20.8 AND col1 > 88.32)) AND (col0 <= 10 OR col0 >= 60)))))) OR col4 > 16.23 OR col4 < 81.56 AND col3 < 76 AND col3 IS NULL OR (col0 < 27) AND (col0 > 81) OR col0 > 99 OR (((col3 > 32)))

context is not defined
```

```sql
SELECT pk FROM tab0 WHERE col3 IN (SELECT col0 FROM tab0 WHERE col4 > 93.21) AND (col0 < 84 AND (col3 < 75 OR ((((col4 = 47.14))))) AND col3 = 51) OR (((col0 > 97) OR col3 > 56 AND col3 < 8 AND (col3 > 57) AND ((col4 IS NULL)) OR col1 IN (83.73,56.79,74.19,18.97,44.74)) AND col3 <= 11) AND (((((col3 IS NULL)))) AND ((((col4 = 72.80) AND col3 > 14 AND col0 = 29 AND col3 > 66 AND (col3 >= 48)) OR col0 <= 50 OR (col0 < 75) AND (((col3 IS NULL OR col4 <= 42.91 AND (col4 > 25.15)) AND col0 < 28)) AND (col3 > 31) OR col1 > 73.32 OR col0 > 44 AND ((col3 > 76) OR (col1 > 84.18) AND col3 > 12 AND (((col0 >= 13 OR (((col0 >= 9))) OR ((col3 >= 10) OR ((col0 = 73) AND (col3 > 47 AND (col0 = 48 AND col3 >= 91 AND ((col0 > 84) AND col0 >= 84 AND col0 > 47 AND col0 > 91 OR col1 > 99.92) AND (col3 <= 34 OR col1 > 72.9 AND col0 > 81) OR col0 < 73 AND (col4 < 92.32) AND col1 IN (94.13,29.4,51.89,5.72,41.89,74.83) OR (col0 BETWEEN 80 AND 84) OR col0 IS NULL OR (col4 < 63.1) OR col3 = 84 OR (col3 > 85 OR col0 >= 45) AND col0 <= 81 OR col3 > 28 AND col3 > 97 OR col0 >= 35 OR (col3 > 96) AND col0 >= 48 AND ((col4 IS NULL OR col4 >= 66.25)) OR col1 >= 81.61 AND col4 = 66.92 OR col3 <= 26 AND col4 IN (60.8,29.58))) AND col3 > 91 AND (col1 < 45.45) OR (col1 > 54.93) AND col0 < 45)))))) AND col3 < 27 AND ((((col4 > 27.60)))) AND ((col4 <= 51.72))))) OR (col1 IS NULL AND (((col4 > 11.5) OR ((((col0 < 81 OR col1 = 55.18 OR col0 <= 48)))) OR (col3 <= 63 OR col4 > 39.3) AND col0 < 70) AND (((col3 > 24) AND col0 <= 38 AND col1 >= 30.93) AND col4 IS NULL OR ((((col1 >= 15.20)) AND col0 = 94 OR col0 < 53 OR col3 > 31 AND col3 IS NULL)) AND col1 < 46.45 OR col3 > 60 OR col0 >= 41 OR (col1 = 5.2) AND col0 IN (39,93,46,43,25))) AND col0 >= 76) AND col3 <= 15 AND col0 = 29 AND ((col1 > 39.53 AND (((col3 BETWEEN 17 AND 63))) OR (col4 < 16.67)) OR col1 > 74.37) OR col0 <= 65 OR ((col4 >= 62.68)) AND col0 <= 78

context is not defined
```

#### ☓ Ran 10036 tests as mysql

* 9304 failed
* 7% was OK

Time: 73595ms

---- ---- ---- ---- ---- ---- ----
### 39/125 `test/index/in/10/slt_good_2.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE ((((col3 IS NULL OR col3 > 23)) OR col3 IN (79,61,90,93) AND (col1 > 2.48) AND col3 > 98 OR (col1 >= 15.24)))

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab1 WHERE ((((col3 IS NULL OR col3 > 23)) OR col3 IN (79,61,90,93) AND (col1 > 2.48) AND col3 > 98 OR (col1 >= 15.24)))

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE ((col1 IN (SELECT col4 FROM tab0 WHERE col3 > 94)) OR col3 > 37 AND (col1 IN (13.32,86.76))) AND col3 > 44

context is not defined
```

#### ☓ Ran 10035 tests as mysql

* 9304 failed
* 7% was OK

Time: 74137ms

---- ---- ---- ---- ---- ---- ----
### 40/125 `test/index/in/10/slt_good_3.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE col1 IN (72.87,27.1,87.50,54.71,85.53,90.29) AND col3 >= 88 AND col3 >= 88 AND col0 IN (50,69,18,13,81,40)

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (col0 < 12 OR (col1 > 73.76 AND col4 > 27.56 AND col4 > 78.54) AND col0 > 17 AND (col4 <= 84.75 OR col0 >= 62 AND col0 < 85 AND col0 < 0 AND col0 > 20 OR col0 IS NULL AND (col4 >= 92.35 AND col3 < 85 OR col3 < 29) OR col0 < 70 AND ((col4 IN (63.71,22.52,17.76,39.58,18.13,96.18)))) OR (col0 > 83 AND col0 <= 47 OR col0 < 63 AND col0 > 79 OR ((col0 IN (SELECT col3 FROM tab0 WHERE (col3 < 7)) AND col1 > 29.3))) AND col4 < 81.57)

context is not defined
```

```sql
SELECT pk FROM tab0 WHERE ((col3 >= 21 OR col3 < 36) OR col3 IN (22,27) AND col0 IS NULL AND col4 >= 97.4 OR col4 IS NULL)

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab3 WHERE ((col0 IS NULL) OR col3 >= 1 OR (col0 > 98) AND ((((col0 = 86 AND (col3 BETWEEN 33 AND 22) AND (((col3 > 82 AND (col3 >= 67 OR (col0 >= 30))))) OR col1 <= 50.57 OR col3 >= 17 AND (col0 > 35) AND col1 <= 77.36 OR col4 < 26.1 OR (col0 >= 26 AND (col4 < 6.96) AND (col4 > 94.7)) OR (col3 < 21) AND col0 >= 66 AND col0 > 56 OR col0 >= 91 OR (col3 >= 31 OR col0 > 81) AND col3 < 91 AND col3 > 52 OR (col1 < 89.33)) OR col1 >= 1.37) OR (col3 < 33) AND col3 < 4 AND col1 >= 15.73 OR ((col0 > 49)) AND col0 >= 9 AND col3 = 27 AND col3 > 26 OR col3 <= 94 AND (col0 IN (86)) AND col3 IN (18,7) OR (col3 IN (23,59,14,77)) OR col4 BETWEEN 89.81 AND 59.84 AND (col1 IS NULL) AND col4 IS NULL OR col3 < 61 OR col3 >= 87)) OR col1 >= 55.73 AND (col0 >= 36) OR ((col1 <= 54.3) AND col1 IS NULL AND (col3 BETWEEN 19 AND 84 OR col3 >= 73) OR col0 > 20 AND ((col3 BETWEEN 74 AND 50 AND (col3 > 48))) OR col4 > 30.39 OR ((((col0 <= 56 AND (((col0 >= 53 AND col0 = 6))))))) AND (col0 >= 95 OR (col4 = 97.61 AND (col3 > 74 OR ((col0 IN (33,6,27,18,95))) AND (col3 < 78)) OR col0 <= 54 AND col1 IN (93.33,87.19,62.18,42.8) AND ((col1 < 89.89)) AND (col3 < 54) OR col3 BETWEEN 6 AND 4 AND col0 = 86 AND col0 >= 31 AND col3 < 61 OR col4 IN (91.22,19.64,52.35,86.43,99.19) OR ((col4 < 4.16)) OR (col4 <= 29.99) OR (col0 IN (38,31,12,81,19)) OR col0 < 3 OR (((col1 > 82.5) OR ((col3 = 84) AND (col0 > 65)) OR (col3 = 13 AND col3 <= 28 AND (((((col4 <= 37.1)) OR col0 > 98 OR col3 = 49 OR col4 = 72.57 OR col4 BETWEEN 74.13 AND 99.56 OR col3 >= 57 AND (((col3 >= 5) AND col4 = 15.38 OR (col3 > 22) OR col4 = 82.38 AND (col0 < 4) AND col0 >= 19 OR (col0 < 7) AND (col0 > 98) AND col3 >= 55)) AND col3 < 12 AND (col1 IS NULL) OR col1 > 35.86 AND col1 < 46.14 AND (col1 IN (59.20)) OR (col3 > 31) OR col4 <= 41.46) AND col3 <= 49)))) AND col4 >= 56.69) OR col3 < 1 OR col4 >= 36.36 AND col3 < 95 OR col1 > 84.87 AND col3 IS NULL AND col3 IS NULL OR col3 < 85) AND (col3 < 70) AND col0 IN (70,70) OR ((col1 < 17.95) AND col0 > 12) OR (((col0 < 95))) OR col3 > 67 OR (col3 < 13))) AND (col1 IN (89.48,78.64,28.87,97.89,32.67,78.91)) AND col4 <= 13.33 OR col1 > 56.98 AND col3 > 64)

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab2 WHERE ((col3 >= 11 AND ((((col4 <= 88.98)))) OR (((col1 < 73.5))) AND col3 >= 76 OR col1 < 20.3 OR (col0 <= 65 AND col4 > 33.88) AND col3 IN (0,28,34,30) AND (col0 < 79 AND (col3 >= 90) OR col0 > 7) AND (((col4 > 63.19))) AND col3 >= 21) AND col0 IS NULL OR ((col3 BETWEEN 37 AND 72 AND col3 > 69 OR ((col3 = 97))) AND col0 BETWEEN 60 AND 81 AND col3 <= 35) OR col3 IN (92,27,48) AND col3 < 75 OR col3 <= 60 AND (col1 >= 95.61) OR (col0 > 48) OR col4 < 9.32 AND col0 >= 31 OR col0 < 98)

Query was expected to return results (but did not): []
```

#### ☓ Ran 10037 tests as mysql

* 9340 failed
* 6% was OK

Time: 69703ms

---- ---- ---- ---- ---- ---- ----
### 41/125 `test/index/in/10/slt_good_4.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE (col0 <= 20 OR col0 IN (SELECT col3 FROM tab0 WHERE col3 IS NULL AND ((col3 > 58)) AND ((col0 < 69)) OR ((((col3 < 73) OR col4 < 36.62) OR col3 >= 60)) OR ((col1 IN (36.28,52.39,78.56) OR (col4 <= 86.71))) AND col1 >= 27.26 AND col1 <= 96.67 OR col3 > 31 OR ((col3 > 8) AND ((col1 >= 2.94 AND (col0 >= 11) AND col3 < 44)))) OR col4 > 91.91 OR (col0 IS NULL) AND (col1 > 5.2))

context is not defined
```

```sql
SELECT pk FROM tab1 WHERE (col0 <= 20 OR col0 IN (SELECT col3 FROM tab1 WHERE col3 IS NULL AND ((col3 > 58)) AND ((col0 < 69)) OR ((((col3 < 73) OR col4 < 36.62) OR col3 >= 60)) OR ((col1 IN (36.28,52.39,78.56) OR (col4 <= 86.71))) AND col1 >= 27.26 AND col1 <= 96.67 OR col3 > 31 OR ((col3 > 8) AND ((col1 >= 2.94 AND (col0 >= 11) AND col3 < 44)))) OR col4 > 91.91 OR (col0 IS NULL) AND (col1 > 5.2))

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (col4 < 99.51 OR col0 IN (4,71,26,48,91,70))

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab3 WHERE col3 IN (35,90,46,13)

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab2 WHERE ((col4 = 7.61 OR col4 = 28.45 OR col4 = 53.32 OR col4 = 32.13 OR col4 = 76.89))

Query was expected to return results (but did not): []
```

#### ☓ Ran 10038 tests as mysql

* 9334 failed
* 7% was OK

Time: 71161ms

---- ---- ---- ---- ---- ---- ----
### 42/125 `test/index/in/10/slt_good_5.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE (col0 >= 93) AND (((col1 >= 55.99 OR (col3 <= 1) OR (((col3 >= 24))) AND col3 IN (84,92,96,26) OR ((col3 >= 53)) AND (col4 >= 6.22) AND (col0 >= 33 OR (((((col0 >= 6)) AND ((col3 < 27 AND (((col0 > 78))))) OR col1 > 90.47 OR col3 IN (79,47) AND col1 > 57.55 OR ((col1 < 77.85)) OR (col3 = 36 OR col0 < 90) AND col3 <= 44))) OR col1 IN (62.81,85.85,44.58,30.98,34.53) OR col3 IS NULL) AND (col3 IN (52,58,51,90,6,37) OR (col3 >= 55)))) AND ((col1 = 46.0 OR col3 <= 24)) AND ((((col0 < 75)) AND col4 >= 77.95)) OR (col0 < 40) OR ((((((col3 IS NULL))) OR (col3 > 61) AND col3 > 30)) OR col1 < 11.20) AND col1 >= 17.42 AND col0 >= 96 OR col3 > 47 OR (((col3 BETWEEN 4 AND 79) AND col3 >= 51)))

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (col4 > 87.16 OR ((col3 >= 36) OR col0 < 40 OR (col1 <= 26.97) OR (col3 IN (59,50,61,94,4,84)) AND col0 <= 59 OR (((col0 <= 44) AND col3 < 19 AND (col1 IS NULL) OR (col0 IN (51)) OR ((col1 <= 3.28 OR ((col1 < 96.29)) AND col3 = 31 AND (((((col3 >= 33))))) OR col0 >= 62)))) AND col0 >= 53 AND (((col1 IS NULL OR col0 > 5)))) OR col0 < 99 AND (((col3 < 19))) OR col1 = 38.60 OR (((col4 < 53.72))) OR ((col4 IN (SELECT col1 FROM tab0 WHERE col4 = 5.68))) AND (col0 < 80 AND (((col3 >= 0)))))

context is not defined
```

```sql
SELECT pk FROM tab0 WHERE ((((col3 >= 94 OR col0 <= 9 OR col0 >= 71 OR (col0 <= 11) AND ((col4 <= 96.59 AND (col3 > 15 OR (col0 >= 71 AND col0 > 61 AND col0 > 93) OR (col4 < 7.94)) OR col1 <= 75.70 AND (col3 > 99) OR col3 > 65 OR col0 > 37 AND col0 < 47 AND ((col0 IN (SELECT col3 FROM tab0 WHERE col4 >= 56.61))) OR ((col3 IS NULL AND ((col1 <= 25.77) AND ((col0 > 38)) AND col3 < 69))) AND col3 > 95 AND col3 > 30 OR col0 IN (80,68,1,52,75))) AND col0 > 74 AND col0 < 32 OR (col0 >= 86) AND col0 > 37) AND ((col3 >= 23 AND (col1 BETWEEN 19.99 AND 29.74) AND (col4 <= 33.60)))))) OR col3 >= 27 OR col3 > 51 OR ((col1 BETWEEN 81.73 AND 40.50 OR col3 < 58))

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

#### ☓ Ran 10038 tests as mysql

* 9310 failed
* 7% was OK

Time: 69612ms

---- ---- ---- ---- ---- ---- ----
### 43/125 `test/index/orderby/10/slt_good_0.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE col0 = 809 ORDER BY 1 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM tab0 WHERE col3 > 221 ORDER BY 1 DESC

The hash of 16 returned values was different than expected. Check the sorting: 0, 1, 2, 309, 4, 481, 5, 544, 551, 6, 691, 7, 725, 8, 823, 908
```

```sql
SELECT pk, col0 FROM tab3 WHERE col3 > 221 ORDER BY 1 DESC,2

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (col3 < 204) AND col3 IN (SELECT col0 FROM tab0 WHERE col3 >= 218) AND col4 IN (SELECT col1 FROM tab0 WHERE (((((col3 IN (427) OR col3 <= 404)))) OR ((col0 IS NULL AND (col4 > 802.10 AND col0 = 651))) OR col3 BETWEEN 851 AND 573)) ORDER BY 1 DESC

context is not defined
```

```sql
SELECT pk, col0 FROM tab1 WHERE (col3 >= 79) ORDER BY 1

Query was expected to return results (but did not): []
```

#### ☓ Ran 10053 tests as mysql

* 9380 failed
* 6% was OK

Time: 22732ms

---- ---- ---- ---- ---- ---- ----
### 44/125 `test/index/orderby/10/slt_good_1.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE ((col4 > 901.6) AND col0 >= 17 AND (col0 IS NULL) AND col0 < 649) AND (col3 > 960) OR (col3 > 58) ORDER BY 1 DESC

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab1 WHERE ((col4 > 901.6) AND col0 >= 17 AND (col0 IS NULL) AND col0 < 649) AND (col3 > 960) OR (col3 > 58) ORDER BY 1 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE ((col3 <= 161) OR (col0 IN (SELECT col3 FROM tab0 WHERE (col1 > 857.76 OR (col1 >= 322.83) AND ((col4 > 795.47)) AND col0 >= 884 OR ((col3 > 853)) AND (col0 <= 291) AND (col1 <= 344.78 OR col3 > 697 AND ((col0 > 13 OR col0 < 76)) AND col4 IS NULL AND (col3 >= 434 AND col3 < 98 AND col3 BETWEEN 812 AND 2))) AND col0 >= 886)) OR ((col1 = 866.5 AND col1 >= 74.62 AND ((col0 >= 278))))) ORDER BY 1 DESC

context is not defined
```

#### ☓ Ran 10054 tests as mysql

* 9530 failed
* 5% was OK

Time: 23220ms

---- ---- ---- ---- ---- ---- ----
### 45/125 `test/index/orderby/10/slt_good_2.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab1 WHERE (col3 > 444) ORDER BY 1 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM tab0 WHERE (col3 > 444) ORDER BY 1 DESC

The hash of 16 returned values was different than expected. Check the sorting: 0, 1, 199, 2, 238, 3, 351, 392, 4, 5, 593, 6, 698, 8, 840, 890
```

```sql
SELECT pk FROM tab0 WHERE ((col0 < 262 OR (col0 <= 778 AND col0 >= 217 AND col4 IS NULL) AND col3 <= 204 OR col0 >= 31) AND (col0 < 751) AND (col1 = 369.16) OR (col1 IN (SELECT col4 FROM tab0 WHERE ((col3 IS NULL))) AND col0 IS NULL AND col0 > 521) OR col3 BETWEEN 552 AND 745) ORDER BY 1 DESC

context is not defined
```

#### ☓ Ran 10051 tests as mysql

* 9424 failed
* 6% was OK

Time: 27162ms

---- ---- ---- ---- ---- ---- ----
### 46/125 `test/index/orderby/10/slt_good_3.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab1 WHERE (col3 <= 505) ORDER BY 1 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM tab0 WHERE (col3 <= 505) ORDER BY 1 DESC

The hash of 10 returned values was different than expected. Check the sorting: 1, 2, 3, 4, 475, 649, 660, 78, 8, 975
```

```sql
SELECT pk FROM tab0 WHERE col0 >= 160 AND ((col1 = 94.47) OR col4 IN (SELECT col1 FROM tab0 WHERE col0 >= 17) OR (col4 IN (SELECT col1 FROM tab0 WHERE (col1 < 275.82))) OR ((col0 <= 913) AND col1 <= 968.52 AND col1 >= 515.44 AND (col0 > 289) AND ((((col4 <= 938.95)))) AND col0 = 252 AND col1 < 912.27 OR (col3 >= 299 AND ((col3 > 918 OR (((((col4 >= 461.61)) AND col0 > 146))))))) AND col0 > 499 AND col1 > 945.42 OR col1 > 920.76) ORDER BY 1 DESC

context is not defined
```

```sql
SELECT pk, col0 FROM tab4 WHERE col0 >= 160 AND ((col1 = 94.47) OR col4 IN (SELECT col1 FROM tab4 WHERE col0 >= 17) OR (col4 IN (SELECT col1 FROM tab4 WHERE (col1 < 275.82))) OR ((col0 <= 913) AND col1 <= 968.52 AND col1 >= 515.44 AND (col0 > 289) AND ((((col4 <= 938.95)))) AND col0 = 252 AND col1 < 912.27 OR (col3 >= 299 AND ((col3 > 918 OR (((((col4 >= 461.61)) AND col0 > 146))))))) AND col0 > 499 AND col1 > 945.42 OR col1 > 920.76) ORDER BY 1 DESC,2 DESC

Query was expected to return results (but did not): []
```

#### ☓ Ran 10051 tests as mysql

* 9442 failed
* 6% was OK

Time: 26410ms

---- ---- ---- ---- ---- ---- ----
### 47/125 `test/index/orderby/10/slt_good_4.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE (col3 <= 548 OR (col0 >= 876 AND col0 > 113) AND col1 > 287.34) AND ((col1 > 436.4)) AND ((col3 >= 907) AND (col3 > 253 OR col3 > 950 AND col4 >= 323.24 OR col1 > 177.82)) AND (col1 > 91.72 AND col0 < 727 AND col1 > 443.80) ORDER BY 1 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM tab0 WHERE (((col0 >= 477))) OR (col0 IS NULL AND col4 <= 9.92) ORDER BY 1 DESC

The hash of 14 returned values was different than expected. Check the sorting: 0, 1, 3, 4, 587, 6, 646, 683, 7, 790, 8, 829, 846, 948
```

```sql
SELECT pk FROM tab0 WHERE col0 IN (SELECT col3 FROM tab0 WHERE (col3 = 877)) ORDER BY 1 DESC

context is not defined
```

```sql
SELECT pk, col0 FROM tab3 WHERE col3 = 303 ORDER BY 1 DESC,2

Query was expected to return results (but did not): []
```

#### ☓ Ran 10052 tests as mysql

* 9554 failed
* 4% was OK

Time: 20782ms

---- ---- ---- ---- ---- ---- ----
### 48/125 `test/index/orderby/10/slt_good_5.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE ((col1 >= 650.19 AND (col3 > 15) AND ((col1 >= 812.39) OR (((col0 > 20 AND col0 >= 727))) OR (col3 IS NULL) AND ((col0 = 4))) AND ((col0 IN (271,204,155,556,576,393))))) ORDER BY 1 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM tab0 WHERE col3 >= 264 ORDER BY 1 DESC

The hash of 16 returned values was different than expected. Check the sorting: 0, 1, 12, 252, 3, 4, 435, 540, 554, 591, 6, 7, 747, 8, 9, 998
```

```sql
SELECT pk, col0 FROM tab4 WHERE (col0 <= 61) ORDER BY 1 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (col1 IN (SELECT col4 FROM tab0 WHERE col1 > 660.38)) ORDER BY 1 DESC

context is not defined
```

#### ☓ Ran 10051 tests as mysql

* 9390 failed
* 6% was OK

Time: 20127ms

---- ---- ---- ---- ---- ---- ----
### 49/125 `test/index/orderby/10/slt_good_6.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE (((((((col0 = 760) OR (col1 IS NULL) OR ((col3 < 689) OR (col0 BETWEEN 904 AND 557 AND col3 > 608 AND (col3 < 683 AND (col1 IS NULL)))) AND col0 > 942 OR (col0 <= 423) OR col3 < 914 AND (col3 > 960) AND col3 >= 620 OR col3 >= 316 OR col0 = 578 AND col0 > 632 OR col3 >= 174 AND col3 > 765 OR col4 < 550.49 OR col0 > 93))) AND col0 > 279) AND col0 < 488 AND (col4 = 299.14) AND col1 < 432.81 OR col0 > 610 OR (((col0 <= 993))))) ORDER BY 1 DESC

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab1 WHERE (((((((col0 = 760) OR (col1 IS NULL) OR ((col3 < 689) OR (col0 BETWEEN 904 AND 557 AND col3 > 608 AND (col3 < 683 AND (col1 IS NULL)))) AND col0 > 942 OR (col0 <= 423) OR col3 < 914 AND (col3 > 960) AND col3 >= 620 OR col3 >= 316 OR col0 = 578 AND col0 > 632 OR col3 >= 174 AND col3 > 765 OR col4 < 550.49 OR col0 > 93))) AND col0 > 279) AND col0 < 488 AND (col4 = 299.14) AND col1 < 432.81 OR col0 > 610 OR (((col0 <= 993))))) ORDER BY 1 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE ((col3 < 606) AND col3 < 289 AND (col0 IN (SELECT col3 FROM tab0 WHERE col3 < 507) OR col0 > 656) AND ((col3 >= 542) OR ((col1 > 553.64)))) OR col0 >= 981 ORDER BY 1 DESC

context is not defined
```

```sql
SELECT pk, col0 FROM tab2 WHERE col0 IN (639,793) ORDER BY 1 DESC,2 DESC

Query was expected to return results (but did not): []
```

#### ☓ Ran 10048 tests as mysql

* 9430 failed
* 6% was OK

Time: 25538ms

---- ---- ---- ---- ---- ---- ----
### 50/125 `test/index/orderby/10/slt_good_7.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE col3 > 959 ORDER BY 1 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE ((col4 < 975.28)) ORDER BY 1 DESC

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab0 WHERE (col3 >= 598 OR (col3 IN (522,902,237,161,47,598) OR (col0 = 313) AND col0 < 839 OR (((col3 >= 24))) OR (col3 BETWEEN 441 AND 515) OR (((col1 >= 382.32) OR col3 < 351)) AND col0 < 967) AND col4 >= 817.48) AND col3 <= 778 OR (col0 >= 876 AND (col0 >= 664 AND col0 < 582) OR col0 >= 609 AND col0 IN (697,938) AND ((col1 > 340.76) AND col3 IS NULL AND col4 > 446.85 OR (col3 > 323 AND (col3 <= 747) OR col3 > 766 OR col1 >= 239.14 AND (col4 IS NULL OR col0 BETWEEN 399 AND 355 AND col3 = 784) OR (col4 <= 122.24 AND col3 <= 77 AND col3 BETWEEN 236 AND 47 AND col3 > 799 OR (col0 <= 3)) AND (col3 >= 480)) OR col3 <= 216) AND ((col0 < 626) AND col3 > 462) OR ((col1 IS NULL)) OR col1 > 926.78 AND (col3 < 684 AND col3 IN (SELECT col0 FROM tab0 WHERE col1 > 663.7)) AND col3 < 565 OR ((col0 < 315) AND col3 IN (725,811,401,708,186)) AND ((col4 <= 356.30) AND col4 IS NULL) AND (col1 = 109.7) OR col4 >= 447.64 OR col0 = 270 AND (col1 > 258.69 AND ((col0 IN (587,188,278)) OR col3 > 540 AND col4 >= 633.2 OR col3 IS NULL AND col0 < 290 OR ((col1 BETWEEN 913.69 AND 403.88 OR col1 = 755.69)) OR col4 < 304.43)) AND col3 < 202) OR (col0 = 845) ORDER BY 1 DESC

context is not defined
```

#### ☓ Ran 10052 tests as mysql

* 9334 failed
* 7% was OK

Time: 23356ms

---- ---- ---- ---- ---- ---- ----
### 51/125 `test/index/orderby/10/slt_good_8.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE (((col3 >= 420) OR col3 <= 614 OR col1 <= 720.18)) ORDER BY 1 DESC

The hash of 10 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

```sql
SELECT pk FROM tab1 WHERE (((col3 >= 420) OR col3 <= 614 OR col1 <= 720.18)) ORDER BY 1 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM tab3 WHERE col0 > 510 ORDER BY 2

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM tab2 WHERE (((col3 > 502 OR col1 < 96.65))) ORDER BY 1,2 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (((((col0 IS NULL)))) AND col3 > 548 OR col0 >= 611 OR col1 IN (SELECT col4 FROM tab0 WHERE ((col0 > 617))) AND (col3 > 33 AND col3 = 992 AND ((col3 IN (715,661,944,639))) OR col4 = 529.36 AND ((col1 < 526.36)) OR (col0 IS NULL OR col1 <= 130.61) OR col3 <= 364 AND (col0 < 289) AND (((col0 < 904 AND (col4 < 785.83) OR col0 <= 34 AND (col0 <= 504) OR (col0 >= 545)))) AND col4 IS NULL OR col0 > 102 OR col0 IS NULL OR (col0 = 298 AND col1 IN (710.83,73.4)) AND col4 <= 520.65 AND col3 < 938 AND ((col0 = 511 AND (col0 < 432))) AND col3 = 583 AND (col3 = 606 OR (((col0 > 46 OR col3 > 451 AND col0 > 812 AND (col4 > 627.97)) AND (col4 <= 304.83 AND col0 IS NULL) AND col3 > 666))) AND (col4 > 61.80) AND col0 = 20) AND col0 <= 559 OR col4 < 656.46 OR col0 = 219 AND col0 > 33 AND col0 > 524) ORDER BY 1 DESC

context is not defined
```

```sql
SELECT pk, col0 FROM tab1 WHERE (((col3 <= 253) OR col0 IS NULL OR col3 IN (844))) OR col3 BETWEEN 389 AND 977 ORDER BY 2

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM tab1 WHERE col0 < 209 ORDER BY 1,2

Query was expected to return results (but did not): []
```

#### ☓ Ran 10051 tests as mysql

* 9314 failed
* 7% was OK

Time: 24806ms

---- ---- ---- ---- ---- ---- ----
### 52/125 `test/index/orderby/10/slt_good_9.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE col3 <= 736 ORDER BY 1 DESC

The hash of 9 returned values was different than expected. Check the sorting: 0, 1, 2, 3, 4, 5, 6, 7, 8
```

```sql
SELECT pk FROM tab1 WHERE col3 <= 736 ORDER BY 1 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE col1 > 256.15 AND col0 IN (SELECT col3 FROM tab0 WHERE col1 > 61.18 AND ((col3 >= 806))) AND (col3 < 623) ORDER BY 1 DESC

context is not defined
```

#### ☓ Ran 10050 tests as mysql

* 9476 failed
* 5% was OK

Time: 23663ms

---- ---- ---- ---- ---- ---- ----
### 53/125 `test/index/orderby_nosort/10/slt_good_0.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab1 WHERE col1 > 71.33 ORDER BY 1 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE col0 < 97 OR col0 < 42 AND (col0 < 38 AND col3 > 17) AND (col4 > 2.38 AND col0 = 92 AND col1 > 83.70 OR (col0 > 43) OR col1 >= 89.38 OR ((col3 < 89) AND (col3 <= 92) OR ((col4 < 46.84)))) OR col0 > 48 ORDER BY 1 DESC

The hash of 10 returned values was different than expected. Check the sorting: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
```

```sql
SELECT pk FROM tab0 WHERE col3 = 19 OR ((col0 >= 42)) AND col3 = 10 OR (col0 < 75) AND col0 IN (SELECT col3 FROM tab0 WHERE col0 >= 4 OR (col0 IS NULL)) AND col3 >= 25 OR ((col0 = 86)) AND col3 >= 7 AND (col4 IN (SELECT col1 FROM tab0 WHERE ((col4 < 6.77)) AND col4 <= 58.50 OR (col3 < 58 AND (col4 >= 94.0) AND col3 < 44 AND (col3 <= 90) AND ((((col4 >= 48.67)))) AND col4 IN (21.57,71.95,30.46) AND (col0 <= 33)))) OR (col0 > 29) AND col3 >= 89 OR (((col0 <= 48))) OR (col4 < 34.76) ORDER BY 1 DESC

context is not defined
```

#### ☓ Ran 10053 tests as mysql

* 9366 failed
* 6% was OK

Time: 23040ms

---- ---- ---- ---- ---- ---- ----
### 54/125 `test/index/orderby_nosort/10/slt_good_1.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE col3 > 34 AND col3 <= 23 ORDER BY 1 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM tab0 WHERE ((col1 > 88.0 AND ((col3 > 52 AND col4 > 15.54 AND col0 <= 8)) AND col0 = 66)) OR ((col4 >= 77.37)) ORDER BY 1 DESC

The hash of 10 returned values was different than expected. Check the sorting: 8, 49, 6, 47, 4, 8, 2, 12, 0, 45
```

```sql
SELECT pk FROM tab0 WHERE (col4 IN (10.82,83.31,74.36,13.17,70.75,4.47) OR col3 < 54 OR col0 < 15 OR col3 > 84 AND (col3 < 49) OR ((col3 = 81) AND col3 < 80 AND col4 IS NULL AND col0 BETWEEN 62 AND 84 OR col3 >= 3 AND col1 < 22.36) AND col0 <= 10 AND (((col4 > 87.85)) AND col1 < 97.7)) OR col1 IN (SELECT col4 FROM tab0 WHERE col1 IS NULL) ORDER BY 1 DESC

context is not defined
```

#### ☓ Ran 10051 tests as mysql

* 9526 failed
* 5% was OK

Time: 26400ms

---- ---- ---- ---- ---- ---- ----
### 55/125 `test/index/orderby_nosort/10/slt_good_2.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab1 WHERE col3 < 21 OR col4 < 60.23 AND ((col3 > 55)) ORDER BY 1 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM tab0 WHERE col3 < 21 OR col4 < 60.23 AND ((col3 > 55)) ORDER BY 1 DESC

The hash of 12 returned values was different than expected. Check the sorting: 9, 52, 8, 37, 6, 19, 3, 15, 2, 54, 0, 18
```

```sql
SELECT pk, col0 FROM tab4 WHERE (col4 <= 65.27) AND (((col3 > 60)) AND col0 > 23) OR col0 > 45 AND col0 IS NULL AND (col0 >= 5 AND ((col1 IS NULL))) ORDER BY 2 DESC,1

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE col3 IN (SELECT col0 FROM tab0 WHERE col0 > 49 AND (col1 BETWEEN 79.99 AND 97.43) OR col3 >= 66 AND ((col0 > 76)) OR col3 IN (48,19)) ORDER BY 1 DESC

context is not defined
```

#### ☓ Ran 10052 tests as mysql

* 9448 failed
* 6% was OK

Time: 23142ms

---- ---- ---- ---- ---- ---- ----
### 56/125 `test/index/orderby_nosort/10/slt_good_3.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab1 WHERE col4 <= 7.70 ORDER BY 1 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM tab0 WHERE (((col0 >= 32) OR col1 < 77.8)) ORDER BY 1 DESC

The hash of 16 returned values was different than expected. Check the sorting: 9, 66, 7, 77, 6, 31, 5, 76, 4, 74, 3, 61, 2, 29, 1, 90
```

```sql
SELECT pk FROM tab0 WHERE (col0 IN (SELECT col3 FROM tab0 WHERE ((col0 >= 35 AND col0 >= 95)) OR (col3 < 73))) AND col3 >= 92 OR (col0 <= 78) ORDER BY 1 DESC

context is not defined
```

```sql
SELECT pk, col0 FROM tab3 WHERE col0 < 86 ORDER BY 2 DESC,1

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM tab2 WHERE (col3 <= 58) ORDER BY 1,2 DESC

Query was expected to return results (but did not): []
```

#### ☓ Ran 10051 tests as mysql

* 9434 failed
* 6% was OK

Time: 24671ms

---- ---- ---- ---- ---- ---- ----
### 57/125 `test/index/orderby_nosort/10/slt_good_4.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE ((col1 = 68.57 AND col3 > 79)) ORDER BY 1 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE ((col3 < 91 OR col1 > 67.99)) ORDER BY 1 DESC

The hash of 9 returned values was different than expected. Check the sorting: 9, 8, 7, 6, 5, 4, 3, 1, 0
```

```sql
SELECT pk FROM tab0 WHERE col3 IN (2,23,8,95,19) OR (col0 > 49 AND (col0 <= 8 AND col4 >= 96.56) OR col3 > 6 AND (col4 IN (SELECT col1 FROM tab0 WHERE ((col0 > 54))) AND ((col0 >= 59))) AND ((col1 <= 84.25 AND (col1 <= 65.92 AND col0 > 90)))) ORDER BY 1 DESC

context is not defined
```

```sql
SELECT pk, col0 FROM tab1 WHERE col0 >= 1 ORDER BY 1,2

Query was expected to return results (but did not): []
```

#### ☓ Ran 10053 tests as mysql

* 9374 failed
* 6% was OK

Time: 31876ms

---- ---- ---- ---- ---- ---- ----
### 58/125 `test/index/orderby_nosort/10/slt_good_5.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab1 WHERE col1 BETWEEN 3.14 AND 7.38 ORDER BY 1 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE ((col0 >= 85)) ORDER BY 1 DESC

The hash of 9 returned values was different than expected. Check the sorting: 8, 7, 6, 5, 4, 3, 2, 1, 0
```

```sql
SELECT pk, col0 FROM tab4 WHERE col0 <= 1 ORDER BY 2,1

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (col3 IN (SELECT col0 FROM tab0 WHERE col3 >= 62) AND (col4 > 25.15) OR col3 > 20) ORDER BY 1 DESC

context is not defined
```

#### ☓ Ran 10052 tests as mysql

* 9474 failed
* 5% was OK

Time: 24220ms

---- ---- ---- ---- ---- ---- ----
### 59/125 `test/index/orderby_nosort/10/slt_good_6.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE (col3 >= 34) ORDER BY 1 DESC

The hash of 9 returned values was different than expected. Check the sorting: 9, 8, 7, 6, 5, 4, 3, 2, 1
```

```sql
SELECT pk FROM tab1 WHERE (col3 >= 34) ORDER BY 1 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE col3 IN (SELECT col0 FROM tab0 WHERE col4 > 91.70) ORDER BY 1 DESC

context is not defined
```

```sql
SELECT pk, col0 FROM tab3 WHERE (col0 > 28) ORDER BY 1,2 DESC

Query was expected to return results (but did not): []
```

#### ☓ Ran 10053 tests as mysql

* 9204 failed
* 8% was OK

Time: 19481ms

---- ---- ---- ---- ---- ---- ----
### 60/125 `test/index/orderby_nosort/10/slt_good_7.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE (col0 < 90) ORDER BY 1 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM tab0 WHERE col4 > 49.52 ORDER BY 1 DESC

The hash of 14 returned values was different than expected. Check the sorting: 9, 159, 8, 158, 7, 157, 6, 156, 5, 155, 2, 147, 0, 138
```

```sql
SELECT pk FROM tab0 WHERE (col4 <= 37.74 AND ((col4 > 38.79 AND col3 < 7 AND (col1 <= 39.55 AND col0 < 90) OR col4 IN (SELECT col1 FROM tab0 WHERE col3 < 2) OR (((col0 IS NULL))) AND ((col0 > 20 OR col3 >= 5 AND col0 >= 77 AND ((col3 < 30) AND col3 < 86) AND col4 IS NULL)) OR (col0 < 60) OR col3 < 41 AND (col4 > 39.35)) OR col1 < 29.20 AND col0 < 78) OR col0 IS NULL AND (((col3 < 0 OR col0 >= 46))) AND ((col0 IS NULL)) OR ((col1 = 27.92 AND (col1 < 22.97) AND (((col0 IS NULL)) AND col0 > 70 AND col0 < 9 AND col0 >= 45 AND (col0 IS NULL AND col0 >= 89)) AND col4 > 89.37 OR col0 > 41 OR (col3 >= 96))) OR col0 > 39 OR col3 > 94 OR col1 <= 57.68 AND ((col3 >= 32)) OR col4 < 84.45 AND (col1 < 18.89 OR col3 IS NULL) OR (col4 >= 81.55) OR (col1 > 95.22) AND col3 > 83 AND col0 >= 27) OR col3 >= 77 ORDER BY 1 DESC

context is not defined
```

#### ☓ Ran 10052 tests as mysql

* 9860 failed
* 1% was OK

Time: 23222ms

---- ---- ---- ---- ---- ---- ----
### 61/125 `test/index/orderby_nosort/10/slt_good_8.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE (col3 > 10) OR col1 <= 58.48 ORDER BY 1 DESC

The hash of 10 returned values was different than expected. Check the sorting: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
```

```sql
SELECT pk FROM tab1 WHERE (col3 > 10) OR col1 <= 58.48 ORDER BY 1 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM tab0 WHERE (col4 = 45.99) ORDER BY 1,2 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE col3 IN (SELECT col0 FROM tab0 WHERE (col0 > 57 AND (col3 > 61 OR ((col0 > 47 AND col3 >= 66)) AND (col0 > 62 OR col1 < 82.26)))) AND ((col0 <= 29 AND col3 > 13) OR col4 > 91.89) ORDER BY 1 DESC

context is not defined
```

#### ☓ Ran 10054 tests as mysql

* 9810 failed
* 2% was OK

Time: 29946ms

---- ---- ---- ---- ---- ---- ----
### 62/125 `test/index/orderby_nosort/10/slt_good_9.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE col3 < 41 AND col1 < 34.22 AND (((((col3 IS NULL AND col4 = 49.2)) OR ((col0 BETWEEN 81 AND 76 AND (col3 < 40) OR col3 >= 27 OR col3 = 17 OR (col0 < 62) OR col0 >= 58 AND col3 < 33 AND (col4 < 62.91) AND col1 > 85.64))) OR (col3 < 87) OR col3 < 83 AND col3 >= 56 AND ((col0 > 40)) AND col3 < 52)) AND col3 > 18 OR (((col3 > 17) OR col0 < 21)) AND (col0 < 31 OR col0 >= 78 OR col3 < 54 AND col3 > 60 OR (col3 > 76)) OR col4 IN (45.27,39.58,74.16) ORDER BY 1 DESC

The hash of 10 returned values was different than expected. Check the sorting: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
```

```sql
SELECT pk FROM tab1 WHERE col3 < 41 AND col1 < 34.22 AND (((((col3 IS NULL AND col4 = 49.2)) OR ((col0 BETWEEN 81 AND 76 AND (col3 < 40) OR col3 >= 27 OR col3 = 17 OR (col0 < 62) OR col0 >= 58 AND col3 < 33 AND (col4 < 62.91) AND col1 > 85.64))) OR (col3 < 87) OR col3 < 83 AND col3 >= 56 AND ((col0 > 40)) AND col3 < 52)) AND col3 > 18 OR (((col3 > 17) OR col0 < 21)) AND (col0 < 31 OR col0 >= 78 OR col3 < 54 AND col3 > 60 OR (col3 > 76)) OR col4 IN (45.27,39.58,74.16) ORDER BY 1 DESC

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE col0 > 23 AND col3 IN (SELECT col0 FROM tab0 WHERE (col4 IN (87.49,43.86,39.83,73.23,60.73,8.41) OR col0 < 89 AND (col1 IN (SELECT col4 FROM tab0 WHERE (col4 > 21.30))) AND col0 < 96 OR col1 > 78.39)) ORDER BY 1 DESC

context is not defined
```

#### ☓ Ran 10055 tests as mysql

* 9868 failed
* 1% was OK

Time: 24433ms

---- ---- ---- ---- ---- ---- ----
### 63/125 `test/index/random/10/slt_good_0.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT col4 FROM tab0 cor0 WHERE NOT NULL IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT col0 + + col0 AS col4 FROM tab0 AS cor0 WHERE NULL IS NULL

The hash of 10 returned values was different than expected. Check the sorting: 1002, 1070, 1076, 1212, 1240, 1396, 1508, 180, 1808, 214
```

```sql
SELECT + col2 FROM tab0 AS cor0 WHERE col3 IS NOT NULL

The hash of 10 returned values was different than expected. Check the sorting: apdbu, cvygg, eozui, fuqeu, ijika, iofrg, lhfro, myrdv, ovmce, yrrzx
```

```sql
SELECT ALL + + ( - - COUNT( * ) ) FROM tab0 cor0 WHERE NULL <> col1

Expected: ["0"] but got ["10"]
```

```sql
SELECT ALL AVG ( ALL col3 ) FROM tab0 WHERE ( NULL ) NOT IN ( - 87 * + 98 )

Expected: ["NULL"] but got ["411.800"]
```

```sql
SELECT + CAST( NULL AS SIGNED ) + + + ( 2 ) AS col3 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

The hash of 10 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT ALL * FROM tab0 AS cor0 WHERE NOT 30 * col1 BETWEEN - + col3 DIV + - CAST( col0 AS SIGNED ) * col4 AND NULL

Parse error on line 1:
...l1 BETWEEN - + col3 DIV + - CAST( col0 A
-----------------------^
Expecting 'EOF', 'WITH', 'RPAR', 'IN', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'UNION', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PLUS', 'STAR', 'GROUP', 'LIMIT', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT + col5 FROM tab0 cor0 WHERE NOT + ( - + 23 ) IS NULL

The hash of 10 returned values was different than expected. Check the sorting: bgwrq, bzqba, dvkbh, ejyzs, etlyv, hpnyu, kpuhc, kwwsg, oxkuv, sqvis
```

```sql
SELECT - col3 DIV col0 AS col0 FROM tab0 AS cor0 WHERE NOT 53 IS NULL

Parse error on line 1:
SELECT - col3 DIV col0 AS col0 FROM ta
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT DISTINCT 62 - - + CAST( COUNT( ALL col1 ) AS SIGNED ) FROM tab0 cor0 WHERE NOT NULL IS NOT NULL

g is not defined
```

```sql
SELECT col2 AS col4 FROM tab0 WHERE - col1 > - 75

Expected: ["0"] but got ["ijika"]
```

```sql
SELECT + MAX( - 59 ) FROM tab1 WHERE NOT + col4 IS NULL

Expected: ["-59"] but got ["NULL"]
```

```sql
SELECT DISTINCT ( + 20 ) DIV COUNT( * ) AS col0 FROM tab0 cor0 WHERE - col4 IS NOT NULL

Parse error on line 1:
...STINCT ( + 20 ) DIV COUNT( * ) AS col0 F
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT 6 DIV 42 AS col4 FROM tab0 WHERE NOT + col4 BETWEEN NULL AND 79

Parse error on line 1:
SELECT 6 DIV 42 AS col4 FROM tab0
-------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT ALL - col0, col2 AS col0 FROM tab0 WHERE - 64 NOT BETWEEN NULL AND - - col0 * + - 25 + + 96

The hash of 20 returned values was different than expected. Check the sorting: -107, lhfro, -501, cvygg, -535, ijika, -538, fuqeu, -606, ovmce, -620, myrdv, -698, apdbu, -754, iofrg, -904, eozui, -90, yrrzx
```

```sql
SELECT ALL COUNT( * ) DIV + CAST( + 67 AS SIGNED ) AS col4 FROM tab0 WHERE - col0 * col1 IS NULL AND NULL IS NULL

Parse error on line 1:
... ALL COUNT( * ) DIV + CAST( + 67 AS SIGN
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT - col3 col2, col5 FROM tab0 AS cor0 WHERE NOT ( NOT col5 IS NOT NULL )

The hash of 20 returned values was different than expected. Check the sorting: -123, kpuhc, -286, kwwsg, -417, dvkbh, -431, sqvis, -48, ejyzs, -514, bgwrq, -630, hpnyu, -67, bzqba, -725, etlyv, -877, oxkuv
```

#### ☓ Ran 10032 tests as mysql

* 8843 failed
* 11% was OK

Time: 13072ms

---- ---- ---- ---- ---- ---- ----
### 64/125 `test/index/random/10/slt_good_1.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT 13 * 47 + 20 * col4 FROM tab0 AS cor0 WHERE NULL = - 17 * + + 32

Query was expected to return results (but did not): []
```

```sql
SELECT ALL 65 * 26 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

The hash of 10 returned values was different than expected. Check the sorting: 1690, 1690, 1690, 1690, 1690, 1690, 1690, 1690, 1690, 1690
```

```sql
SELECT DISTINCT ( + + COUNT( * ) ) AS col5 FROM tab1 WHERE + 30 IS NOT NULL

Expected: ["10"] but got ["0"]
```

```sql
SELECT ALL - 47, + col2 FROM tab0 cor0 WHERE col5 IS NOT NULL

The hash of 20 returned values was different than expected. Check the sorting: -47, hdikx, -47, hzanm, -47, jempi, -47, kmgry, -47, lktfw, -47, mguub, -47, mwyzu, -47, nwrqf, -47, qiyfp, -47, yydxj
```

```sql
SELECT + ( - - MIN( DISTINCT + col0 ) ) FROM tab1 AS cor0 WHERE NOT - col3 IS NULL

Expected: ["98"] but got ["NULL"]
```

```sql
SELECT DISTINCT CAST( NULL AS SIGNED ) col1, + COUNT( * ) * + 7 col2 FROM tab1 AS cor0 WHERE NULL IS NULL

Expected: ["NULL","70"] but got ["NULL","0"]
```

```sql
SELECT DISTINCT 77 col0, - SUM( ALL col4 ) AS col5 FROM tab0 AS cor0 WHERE ( NULL ) >= 80 * - - ( - col4 ) + col3

Expected: ["77","NULL"] but got ["77","0"]
```

```sql
SELECT ALL col5 AS col3 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

The hash of 10 returned values was different than expected. Check the sorting: aftom, cussx, dlbem, gavyb, imxxc, ixrql, snwlo, xljvu, xmtxn, xzvvo
```

```sql
SELECT ALL CAST( SUM( ALL + col3 ) AS SIGNED ) FROM tab0 WHERE + - 4 > - col1

g is not defined
```

```sql
SELECT DISTINCT - col3 + - 41 + - col0 * + - 47 + + + col0 DIV 37 FROM tab0 WHERE NULL IS NULL

Parse error on line 1:
...- 47 + + + col0 DIV 37 FROM tab0 WHERE N
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT + + CAST( NULL AS SIGNED ) AS col0, + 27 FROM tab0 WHERE + col3 IS NOT NULL

The hash of 20 returned values was different than expected. Check the sorting: NULL, 27, NULL, 27, NULL, 27, NULL, 27, NULL, 27, NULL, 27, NULL, 27, NULL, 27, NULL, 27, NULL, 27
```

```sql
SELECT ALL + col2 FROM tab0 WHERE NOT - - 10 <= - + col4 - - col3

Expected: ["0","0","0","0"] but got ["hdikx","jempi","kmgry","nwrqf","qiyfp","yydxj"]
```

```sql
SELECT ALL + col0 DIV + col0 FROM tab0 WHERE NOT NULL IS NOT NULL

Parse error on line 1:
...LECT ALL + col0 DIV + col0 FROM tab0 WHE
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT + 82 + - CAST( NULL AS SIGNED ), + MIN( ALL + col0 ) + - + 63 FROM tab1 WHERE NOT ( ( NULL ) IS NOT NULL )

Expected: ["NULL","35"] but got ["NULL","NULL"]
```

```sql
SELECT 49 DIV - 21 + - + 49 AS col2 FROM tab0 WHERE - 78 DIV + col1 * + + col0 IS NOT NULL

Parse error on line 1:
SELECT 49 DIV - 21 + - + 49 AS col
--------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT + col3, + col5 AS col4 FROM tab0 WHERE + col4 + - 23 NOT IN ( col4 )

The hash of 20 returned values was different than expected. Check the sorting: 108, dlbem, 174, imxxc, 251, xljvu, 596, xmtxn, 598, aftom, 711, snwlo, 740, cussx, 885, ixrql, 886, xzvvo, 918, gavyb
```

```sql
SELECT col3 DIV col0 FROM tab0 AS cor0 WHERE NOT 46 IN ( - ( ( 32 ) ) + 67 * + col3 )

Parse error on line 1:
SELECT col3 DIV col0 FROM tab0 AS co
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

#### ☓ Ran 10034 tests as mysql

* 8911 failed
* 11% was OK

Time: 13009ms

---- ---- ---- ---- ---- ---- ----
### 65/125 `test/index/random/10/slt_good_2.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT * FROM tab1 WHERE NOT col3 NOT IN ( + 72 + - col1 + - col1 + col3 * + col3 * + 74 )

Query was expected to return results (but did not): []
```

```sql
SELECT ALL - COUNT( * ) FROM tab0 WHERE NOT CAST( NULL AS DECIMAL ) IS NOT NULL

Expected: ["-10"] but got ["0"]
```

```sql
SELECT - CAST( - 45 AS SIGNED ) FROM tab0 WHERE - col1 IS NOT NULL

The hash of 10 returned values was different than expected. Check the sorting: 45, 45, 45, 45, 45, 45, 45, 45, 45, 45
```

```sql
SELECT ALL col5 FROM tab0 AS cor0 WHERE NOT col1 IS NULL

The hash of 10 returned values was different than expected. Check the sorting: bqisj, dgkbk, erkxs, gtdhg, hpkbx, mylwf, tlesg, toihb, vrkrw, ylzxx
```

```sql
SELECT 72 * + + SUM( + + col4 ) * - 78 + 11 FROM tab0 WHERE + 93 IS NULL

Expected: ["NULL"] but got ["11"]
```

```sql
SELECT DISTINCT COUNT( * ) DIV - 86 FROM tab0 AS cor0 WHERE NOT NULL IS NULL

Parse error on line 1:
...INCT COUNT( * ) DIV - 86 FROM tab0 AS co
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT + 31 + - MIN( - 42 ) FROM tab0 cor0 WHERE NOT - col3 * + col3 * + + col0 + + col4 BETWEEN col1 AND NULL

Expected: ["73"] but got ["NULL"]
```

```sql
SELECT ALL CAST( NULL AS SIGNED ) + CAST( NULL AS SIGNED ) * col4 AS col2 FROM tab0 AS cor0 WHERE + col3 IS NOT NULL

The hash of 10 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT ALL col2 col2 FROM tab0 WHERE 70 NOT IN ( + col0 * 7 )

The hash of 10 returned values was different than expected. Check the sorting: axjxg, bqwdh, cbpha, cyvvl, emyjj, fkgxz, sbaji, sfbbw, uyrso, wsyzc
```

```sql
SELECT ALL * FROM tab0 AS cor0 WHERE CAST( + col1 AS SIGNED ) IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT + 77 DIV + ( ( - 11 ) ) + + 69 AS col0 FROM tab0 WHERE NOT ( + ( - col1 ) DIV 46 + col0 * col1 ) IS NULL

Parse error on line 1:
SELECT + 77 DIV + ( ( - 11 ) ) + + 6
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT + 98 DIV 36 + col0 FROM tab0 WHERE ( + 54 ) IS NOT NULL

Parse error on line 1:
SELECT + 98 DIV 36 + col0 FROM tab0 
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT ALL + MIN( + ( - 35 ) ), 25 FROM tab0 AS cor0 WHERE NOT ( NULL ) = + col1 * col3

Expected: ["NULL","25"] but got ["25","NULL"]
```

```sql
SELECT ALL col0 * + CAST( NULL AS SIGNED ), col2 AS col0 FROM tab0 AS cor0 WHERE NULL IS NULL

The hash of 20 returned values was different than expected. Check the sorting: NULL, axjxg, NULL, bqwdh, NULL, cbpha, NULL, cyvvl, NULL, emyjj, NULL, fkgxz, NULL, sbaji, NULL, sfbbw, NULL, uyrso, NULL, wsyzc
```

```sql
SELECT - col3 FROM tab0 cor0 WHERE NOT - ( - col3 ) < 99

10 results returned but expected 9
```

```sql
SELECT col5 FROM tab0 WHERE - ( - col1 ) <= + col0

Expected: ["0","0","0","0","0","0"] but got ["bqisj","gtdhg","mylwf","tlesg","vrkrw","ylzxx"]
```

```sql
SELECT + CAST( - SUM( - col3 ) AS SIGNED ) col3 FROM tab0 WHERE + ( col3 ) NOT IN ( - 44 + col1 * + + col4, 39 )

g is not defined
```

```sql
SELECT DISTINCT col0 - CAST( col4 AS SIGNED ) DIV col3 AS col4 FROM tab0 WHERE NOT ( 81 + - col0 ) IS NULL

Parse error on line 1:
...ol4 AS SIGNED ) DIV col3 AS col4 FROM ta
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

#### ☓ Ran 10034 tests as mysql

* 9055 failed
* 9% was OK

Time: 13194ms

---- ---- ---- ---- ---- ---- ----
### 66/125 `test/index/random/10/slt_good_3.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT DISTINCT col0 AS col0 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

The hash of 10 returned values was different than expected. Check the sorting: 184, 256, 289, 327, 332, 342, 428, 444, 537, 659
```

```sql
SELECT DISTINCT col0 AS col0 FROM tab1 AS cor0 WHERE NOT NULL IS NOT NULL

Query was expected to return results (but did not): []
```

```sql
SELECT ALL + 46 * COUNT( * ) FROM tab1 WHERE - col4 IS NOT NULL

Expected: ["460"] but got ["0"]
```

```sql
SELECT ALL col5 FROM tab0 AS cor0 WHERE + col4 * + col4 * + 24 IS NOT NULL

The hash of 10 returned values was different than expected. Check the sorting: axobm, dzxvt, hkqiq, ixpwh, mccdb, noonc, qfzyg, qnhev, smtjr, wjfwi
```

```sql
SELECT col4 + + CAST( NULL AS SIGNED ) AS col5 FROM tab0 cor0 WHERE NOT ( NULL ) IS NOT NULL

The hash of 10 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT + col2 AS col1 FROM tab0 WHERE NULL IS NULL

The hash of 10 returned values was different than expected. Check the sorting: ayfdf, iiegz, iwjvw, kaetk, mmkqp, reayu, unszc, vbmqn, vuvdb, zsjyr
```

```sql
SELECT + col2 AS col1 FROM tab0 WHERE NOT col1 <= col4

Expected: ["0","0","0","0","0"] but got ["ayfdf","iiegz","iwjvw","kaetk","mmkqp","reayu","unszc","vbmqn","vuvdb","zsjyr"]
```

```sql
SELECT DISTINCT CAST( - COUNT( * ) AS SIGNED ) + - 63 AS col0 FROM tab0 WHERE NULL NOT IN ( 71 )

g is not defined
```

```sql
SELECT DISTINCT + + CAST( ( - ( col0 ) ) AS SIGNED ) col3 FROM tab0 AS cor0 WHERE NOT col1 + col1 + - + 77 <= - + 47 + col4

10 results returned but expected 9
```

```sql
SELECT col5 col1 FROM tab0 AS cor0 WHERE NOT col0 < + col1

Expected: ["0","0"] but got ["axobm","dzxvt","hkqiq","ixpwh","mccdb","noonc","qfzyg","qnhev","smtjr","wjfwi"]
```

```sql
SELECT MIN( ALL + - col0 ) FROM tab1 AS cor0 WHERE NOT - col3 * CAST( - 83 AS SIGNED ) + + + 40 IS NULL

Expected: ["-659"] but got ["NULL"]
```

```sql
SELECT DISTINCT - SUM( col4 ) AS col2 FROM tab0 WHERE - CAST( + - col3 AS DECIMAL ) IS NULL

Expected: ["NULL"] but got ["0"]
```

```sql
SELECT ALL - COUNT( * ) DIV 60 AS col1 FROM tab0 cor0 WHERE NOT NULL IS NOT NULL

Parse error on line 1:
...LL - COUNT( * ) DIV 60 AS col1 FROM tab0
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT col0 DIV ( + col3 ) AS col1 FROM tab0 WHERE NOT NULL IS NOT NULL

Parse error on line 1:
SELECT col0 DIV ( + col3 ) AS col1 F
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT + col5 AS col3, - col0 DIV + 89 AS col3 FROM tab0 WHERE NULL IS NULL

Parse error on line 1:
...AS col3, - col0 DIV + 89 AS col3 FROM ta
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT 56 + 83 DIV col3 FROM tab0 cor0 WHERE NULL IS NULL

Parse error on line 1:
SELECT 56 + 83 DIV col3 FROM tab0 cor0 
-------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT DISTINCT - + 30 DIV - - 41 FROM tab0 WHERE NULL IS NULL

Parse error on line 1:
...DISTINCT - + 30 DIV - - 41 FROM tab0 WHE
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT DISTINCT col0 FROM tab4 WHERE ( NOT NULL IS NOT NULL )

Query was expected to return results (but did not): []
```

```sql
SELECT DISTINCT + 33 / ( - SUM( DISTINCT + col0 ) ) FROM tab0 WHERE NOT - col1 * - ( col3 ) + + 86 * 62 IS NOT NULL

Expected: ["NULL"] but got ["-Infinity"]
```

#### ☓ Ran 10034 tests as mysql

* 8946 failed
* 10% was OK

Time: 13444ms

---- ---- ---- ---- ---- ---- ----
### 67/125 `test/index/random/10/slt_good_4.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT ALL * FROM tab0 WHERE ( - 71 ) = - col3

Query was expected to return results (but did not): []
```

```sql
SELECT - 49 FROM tab0 AS cor0 WHERE NULL IS NULL

The hash of 10 returned values was different than expected. Check the sorting: -49, -49, -49, -49, -49, -49, -49, -49, -49, -49
```

```sql
SELECT ALL + col5 FROM tab0 AS cor0 WHERE ( NULL ) IS NULL

The hash of 10 returned values was different than expected. Check the sorting: dllxu, fseeq, hmyuz, jjuvt, lhhde, pmvwn, qfnom, tafey, zlyap, zwyxg
```

```sql
SELECT CAST( NULL AS SIGNED ), ( + COUNT( * ) ) FROM tab1 WHERE NOT + 26 IS NULL

Expected: ["NULL","10"] but got ["NULL","0"]
```

```sql
SELECT ALL COUNT( * ) col2 FROM tab1 AS cor0 WHERE + col1 <> - - col3

Expected: ["10"] but got ["0"]
```

```sql
SELECT - SUM( + - col3 ) AS col4 FROM tab0 WHERE NOT NULL <= col0 / - 18

Expected: ["NULL"] but got ["0"]
```

```sql
SELECT ALL + 60 - - COUNT( * ), CAST( + 94 AS SIGNED ) DIV - + 63 FROM tab0 cor0 WHERE NULL IS NULL

Parse error on line 1:
... 94 AS SIGNED ) DIV - + 63 FROM tab0 cor
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT CAST( + CAST( NULL AS SIGNED ) AS DECIMAL ) FROM tab0 AS cor0 WHERE col0 / + + 92 IS NOT NULL

The hash of 10 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT col2 AS col1 FROM tab0 WHERE ( ( ( NULL ) IS NULL ) )

The hash of 10 returned values was different than expected. Check the sorting: avdcb, cuhds, eijcm, fadnj, jxozk, kbbin, lodjp, rchiw, sqtnl, xdiiw
```

```sql
SELECT - CAST( ( COUNT( * ) ) AS SIGNED ) AS col1 FROM tab0 WHERE ( NOT col0 NOT BETWEEN + col4 AND + + col1 )

g is not defined
```

```sql
SELECT ALL + ( - MIN( DISTINCT - 77 ) ) FROM tab1 WHERE NOT - 37 IS NULL

Expected: ["77"] but got ["NULL"]
```

```sql
SELECT ALL + 38 DIV + 51 FROM tab0 WHERE NOT 33 BETWEEN NULL AND + 4 * - 86 - col3

Parse error on line 1:
SELECT ALL + 38 DIV + 51 FROM tab0 WHERE
--------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT DISTINCT - + 58 DIV CAST( - 60 AS SIGNED ) AS col0 FROM tab0 WHERE NULL IS NULL

Parse error on line 1:
...DISTINCT - + 58 DIV CAST( - 60 AS SIGNED
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT * FROM tab3 WHERE NOT - - 6 IS NOT NULL

Query was expected to return results (but did not): []
```

```sql
SELECT ALL - 11 DIV 70 FROM tab0 AS cor0 WHERE NOT + col1 * - 59 + - col0 * col0 IS NULL

Parse error on line 1:
SELECT ALL - 11 DIV 70 FROM tab0 AS cor0
--------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT + 66 DIV COUNT( * ) - 18 FROM tab0 AS cor0 WHERE ( + ( - + col3 ) ) NOT BETWEEN ( 30 ) AND ( + col0 + col0 * + 1 )

Parse error on line 1:
SELECT + 66 DIV COUNT( * ) - 18 FROM
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT ALL col3 DIV col3 FROM tab0 AS cor0 WHERE NOT col2 IS NULL

Parse error on line 1:
SELECT ALL col3 DIV col3 FROM tab0 AS co
--------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

#### ☓ Ran 10033 tests as mysql

* 8949 failed
* 10% was OK

Time: 12911ms

---- ---- ---- ---- ---- ---- ----
### 68/125 `test/index/random/10/slt_good_5.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT ALL * FROM tab0 AS cor0 WHERE col3 <= - col4 + - - 99

Query was expected to return results (but did not): []
```

```sql
SELECT + + 60 AS col3, 29 AS col2 FROM tab0 WHERE col1 - col0 >= - col1

The hash of 16 returned values was different than expected. Check the sorting: 60, 29, 60, 29, 60, 29, 60, 29, 60, 29, 60, 29, 60, 29, 60, 29
```

```sql
SELECT + col2 AS col5 FROM tab0 WHERE NOT ( col0 ) * - - col4 IS NULL

The hash of 10 returned values was different than expected. Check the sorting: amwpr, bybhw, ehefd, etkzo, gobly, guvze, jjeyc, uwwcx, uxbns, wtgsg
```

```sql
SELECT ALL - col3 + 37 DIV col0, col0 FROM tab0 WHERE + col3 DIV + 54 IS NOT NULL

Parse error on line 1:
...ALL - col3 + 37 DIV col0, col0 FROM tab0
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL + 73 DIV - + col0 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Parse error on line 1:
SELECT ALL + 73 DIV - + col0 FROM tab0 A
--------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT DISTINCT - + COUNT( * ) FROM tab1 AS cor0 WHERE + col5 IS NOT NULL

Expected: ["-10"] but got ["0"]
```

```sql
SELECT ALL + CAST( NULL AS SIGNED ) AS col4 FROM tab0 WHERE NULL IS NULL

The hash of 10 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT SUM( + 90 ) AS col2 FROM tab0 AS cor0 WHERE - col1 IS NULL

Expected: ["NULL"] but got ["0"]
```

```sql
SELECT + MIN( + col0 ) FROM tab1 WHERE col3 >= 63 * - col1

Expected: ["27"] but got ["NULL"]
```

```sql
SELECT DISTINCT - MAX( + col0 ), AVG ( DISTINCT - 74 ) col0 FROM tab0 AS cor0 WHERE NOT NULL <> ( + col0 * - + col4 )

Expected: ["NULL","NULL"] but got ["-885","-74"]
```

```sql
SELECT + col5 col5 FROM tab0 cor0 WHERE NOT NULL IS NOT NULL

The hash of 10 returned values was different than expected. Check the sorting: dewii, gxycv, iemye, jvqkl, mzaak, ossgq, pyqzq, quyxq, sbnju, sdxrs
```

```sql
SELECT ALL ( CAST( NULL AS DECIMAL ) ) / - 21 AS col1 FROM tab0 AS cor0 WHERE col4 NOT BETWEEN col1 AND NULL

Expected: ["NULL","NULL","NULL","NULL","NULL","NULL","NULL"] but got ["NULL","NULL","NULL","NULL","NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT DISTINCT + col3 DIV 12 FROM tab0 WHERE NOT - + col4 IS NULL

Parse error on line 1:
...DISTINCT + col3 DIV 12 FROM tab0 WHERE N
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT 84 * - - col3 DIV + col3 AS col1 FROM tab0 AS cor0 WHERE - col4 NOT BETWEEN + col1 * + 63 + + - col0 AND ( + col4 * - col4 )

Parse error on line 1:
...T 84 * - - col3 DIV + col3 AS col1 FROM 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT ALL col3 DIV ( + 61 ) FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Parse error on line 1:
SELECT ALL col3 DIV ( + 61 ) FROM tab0 A
--------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT + col2 col5 FROM tab0 AS cor0 WHERE ( col4 ) BETWEEN col0 AND - 96 * - col3

Expected: ["0","0","0"] but got ["amwpr","ehefd","uxbns"]
```

#### ☓ Ran 10034 tests as mysql

* 9053 failed
* 9% was OK

Time: 12554ms

---- ---- ---- ---- ---- ---- ----
### 69/125 `test/index/random/10/slt_good_6.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT - col4 AS col2 FROM tab0 AS cor0 WHERE - col0 * + 76 IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT - ( 36 ) * + + SUM( ALL - col0 ) AS col5 FROM tab1 cor0 WHERE + col1 * + col4 IS NOT NULL

Expected: ["219672"] but got ["0"]
```

```sql
SELECT ALL + - CAST( 18 AS SIGNED ) FROM tab0 WHERE NULL IS NULL

The hash of 10 returned values was different than expected. Check the sorting: -18, -18, -18, -18, -18, -18, -18, -18, -18, -18
```

```sql
SELECT SUM( DISTINCT + + 90 ) AS col3 FROM tab0 AS cor0 WHERE NULL IS NOT NULL

Expected: ["NULL"] but got ["0"]
```

```sql
SELECT ALL col2 AS col2 FROM tab0 WHERE 80 * 48 - - 91 > - col4

The hash of 10 returned values was different than expected. Check the sorting: ehuhy, gvttq, naijw, plazu, qvahk, tgsmz, wodwv, zfxgo, zkoew, zsiag
```

```sql
SELECT DISTINCT 36 DIV COUNT( * ) FROM tab0 WHERE NOT NULL IS NOT NULL

Parse error on line 1:
...ECT DISTINCT 36 DIV COUNT( * ) FROM tab0
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT col5 FROM tab0 WHERE NOT - col1 IS NULL

The hash of 10 returned values was different than expected. Check the sorting: dkfhp, gpfjn, hsiew, jkfxi, kooky, pzhuq, qdvlm, rtrat, ycbmq, ztgnk
```

```sql
SELECT ALL - col3 DIV col0 + + + 65 FROM tab0 WHERE NULL IS NULL

Parse error on line 1:
...LECT ALL - col3 DIV col0 + + + 65 FROM t
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT + MIN( 89 ) AS col2 FROM tab0 WHERE NOT ( 48 ) >= col1 * + col0

Expected: ["89"] but got ["NULL"]
```

```sql
SELECT - CAST( - col0 AS SIGNED ) * - - CAST( NULL AS SIGNED ) / - + col0 AS col4 FROM tab0 AS cor0 WHERE + col4 IS NOT NULL

The hash of 10 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT + + COUNT( * ) DIV - - 94 AS col3 FROM tab0 AS cor0 WHERE NOT ( NULL ) IS NULL

Parse error on line 1:
... + + COUNT( * ) DIV - - 94 AS col3 FROM 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT + + COUNT( * ) AS col1, - CAST( NULL AS SIGNED ) * 42 AS col4 FROM tab0 cor0 WHERE + col0 NOT BETWEEN NULL AND NULL

Expected: ["0","NULL"] but got ["10","NULL"]
```

```sql
SELECT + 50 DIV + + col3 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

Parse error on line 1:
SELECT + 50 DIV + + col3 FROM tab0 A
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT + col2 FROM tab0 WHERE ( 60 + + col3 ) < ( + col0 )

Expected: ["0","0","0","0","0"] but got ["gvttq","qvahk","tgsmz","zfxgo","zkoew"]
```

```sql
SELECT - col3 AS col4, col2 col3 FROM tab0 WHERE col4 IS NOT NULL

The hash of 20 returned values was different than expected. Check the sorting: -139, zfxgo, -276, gvttq, -347, zkoew, -557, qvahk, -614, zsiag, -629, naijw, -759, tgsmz, -803, plazu, -908, ehuhy, -944, wodwv
```

```sql
SELECT ALL + CAST( COUNT( ALL col0 ) AS SIGNED ) col3 FROM tab0 WHERE NULL IS NULL

g is not defined
```

```sql
SELECT + col3 col5, col2 col5 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

The hash of 20 returned values was different than expected. Check the sorting: ehuhy, ehuhy, gvttq, gvttq, naijw, naijw, plazu, plazu, qvahk, qvahk, tgsmz, tgsmz, wodwv, wodwv, zfxgo, zfxgo, zkoew, zkoew, zsiag, zsiag
```

```sql
SELECT - - COUNT( * ) DIV 90 FROM tab0 cor0 WHERE ( NULL ) BETWEEN NULL AND + - col1

Parse error on line 1:
... - - COUNT( * ) DIV 90 FROM tab0 cor0 WH
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT col2 FROM tab0 WHERE + col0 * + col0 + - col4 * col3 <= ( + col1 + col4 * - 0 ) OR ( + 57 * + col0 ) = NULL

Expected: ["0","0"] but got ["naijw","wodwv"]
```

#### ☓ Ran 10034 tests as mysql

* 8955 failed
* 10% was OK

Time: 12699ms

---- ---- ---- ---- ---- ---- ----
### 70/125 `test/index/random/10/slt_good_7.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT * FROM tab0 WHERE NOT NULL < ( - + 34 ) * + col0

Query was expected to return results (but did not): []
```

```sql
SELECT ALL + col3 AS col5 FROM tab0 WHERE NOT + 15 IS NULL

The hash of 10 returned values was different than expected. Check the sorting: 13, 234, 244, 331, 575, 784, 79, 855, 929, 972
```

```sql
SELECT ALL - ( - + ( - COUNT( * ) ) ) col4 FROM tab1 WHERE NOT - 17 + + + 63 IS NULL

Expected: ["-10"] but got ["0"]
```

```sql
SELECT + CAST( + CAST( NULL AS SIGNED ) AS SIGNED ) FROM tab0 AS cor0 WHERE NULL IS NULL

The hash of 10 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT ALL - MAX( - 7 ) AS col2 FROM tab1 AS cor0 WHERE NOT - 76 IS NULL

Expected: ["7"] but got ["NULL"]
```

```sql
SELECT col2 FROM tab0 cor0 WHERE NOT col1 - 93 IS NULL

The hash of 10 returned values was different than expected. Check the sorting: bsdqx, fszup, hmsci, icvcr, nioox, ucmym, ueaat, uwcos, viqwz, xqhnp
```

```sql
SELECT DISTINCT SUM( ALL + + col1 ) FROM tab0 AS cor0 WHERE NOT ( NOT - 39 IN ( + col1, col3 ) )

Expected: ["NULL"] but got ["5252.470"]
```

```sql
SELECT + 29 DIV + 68 AS col5 FROM tab0 WHERE NOT NULL IS NOT NULL

Parse error on line 1:
SELECT + 29 DIV + 68 AS col5 FROM ta
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT + col5 AS col3 FROM tab0 WHERE NULL IS NULL

The hash of 10 returned values was different than expected. Check the sorting: ddtqu, hmfnl, ipwkm, moabs, peagi, rpsxh, rxtyx, ttqxt, xczft, ycfto
```

```sql
SELECT + - CAST( NULL AS SIGNED ) FROM tab4 WHERE NULL IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT + 4 DIV - col3 FROM tab0 AS cor0 WHERE NOT ( col1 * col0 ) IS NULL

Parse error on line 1:
SELECT + 4 DIV - col3 FROM tab0 AS 
---------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT + CAST( NULL AS SIGNED ) AS col2 FROM tab0 WHERE NOT - 57 >= + ( - col4 )

Expected: ["NULL"] but got ["NULL","NULL","NULL","NULL","NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT - + CAST( CAST( - + 73 AS SIGNED ) AS SIGNED ) + col0 AS col0, col2 FROM tab0 cor0 WHERE + 64 * - + ( col3 ) IS NOT NULL

The hash of 20 returned values was different than expected. Check the sorting: 1013, bsdqx, 1020, fszup, 1029, uwcos, 162, viqwz, 175, ucmym, 287, icvcr, 311, nioox, 562, xqhnp, 730, hmsci, 902, ueaat
```

```sql
SELECT ALL col2 AS col5 FROM tab0 WHERE - + col3 BETWEEN - 72 AND 50 + + 78

Expected: ["0"] but got ["hmsci"]
```

```sql
SELECT ALL - 4 col4 FROM tab0 WHERE + col4 NOT BETWEEN + + ( + CAST( NULL AS DECIMAL ) ) AND ( 78 )

10 results returned but expected 9
```

#### ☓ Ran 10031 tests as mysql

* 9050 failed
* 9% was OK

Time: 12874ms

---- ---- ---- ---- ---- ---- ----
### 71/125 `test/index/random/10/slt_good_8.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT * FROM tab0 cor0 WHERE NOT NULL BETWEEN CAST( NULL AS SIGNED ) + - 31 AND ( NULL )

Query was expected to return results (but did not): []
```

```sql
SELECT ALL col0 * - col0 FROM tab0 WHERE col1 * col1 IS NOT NULL

The hash of 10 returned values was different than expected. Check the sorting: -295936, -43681, -462400, -638401, -643204, -68121, -70225, -712336, -765625, -980100
```

```sql
SELECT SUM( col3 ) AS col4 FROM tab0 WHERE NOT - 85 + ( + CAST( NULL AS SIGNED ) ) NOT IN ( col3 * 49 )

Expected: ["NULL"] but got ["5614"]
```

```sql
SELECT ALL COUNT( * ) AS col4 FROM tab0 WHERE NOT ( + - col1 ) BETWEEN col3 * + col0 + - - col3 AND ( - + col4 + + + col0 )

Expected: ["10"] but got ["0"]
```

```sql
SELECT COUNT( * ), - COUNT( * ) DIV - - 64 * 28 FROM tab0 WHERE - col4 NOT IN ( col0 )

Parse error on line 1:
...), - COUNT( * ) DIV - - 64 * 28 FROM tab
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT 2 * 68 DIV + 92 AS col2, COUNT( * ) - 8 - - + 97 + - 7 FROM tab0 WHERE + - 4 IN ( 81 * col4 )

Parse error on line 1:
SELECT 2 * 68 DIV + 92 AS col2, COUNT(
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT + + CAST( NULL AS DECIMAL ) FROM tab0 WHERE NOT + ( - 66 ) * - - col4 IS NULL

The hash of 10 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT col5 FROM tab0 AS cor0 WHERE NOT ( col0 - col4 ) IS NULL

The hash of 10 returned values was different than expected. Check the sorting: apjmo, dubev, ithfo, ktnfz, swsmt, texha, ttvlt, vzeio, ylxxs, zwzyz
```

```sql
SELECT ALL COUNT( * ) + - 54 + - + MAX( + col3 ) FROM tab1 WHERE NOT - col1 IS NULL

Expected: ["-980"] but got ["NULL"]
```

```sql
SELECT + + col2 FROM tab0 WHERE NOT + col4 * + + 59 + - + col3 IS NULL

The hash of 10 returned values was different than expected. Check the sorting: gcpsu, hpvcv, ibryh, jlpzu, khsim, kyzuv, qcjek, qvxmy, tonyl, zlffy
```

```sql
SELECT + col5 AS col5 FROM tab0 AS cor0 WHERE + col4 NOT BETWEEN NULL AND + col3

Expected: ["0","0","0"] but got ["apjmo","dubev","ithfo","ktnfz","swsmt","texha","ttvlt","vzeio","ylxxs","zwzyz"]
```

```sql
SELECT DISTINCT COUNT( * ) DIV 70 * COUNT( * ) + 51 FROM tab0 cor0 WHERE + col1 * + 22 * + col3 IS NULL

Parse error on line 1:
...INCT COUNT( * ) DIV 70 * COUNT( * ) + 51
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT + - CAST( COUNT( * ) AS SIGNED ) FROM tab0 AS cor0 WHERE NOT 75 * - 78 * + - ( ( - + 46 ) ) IS NULL

g is not defined
```

```sql
SELECT ALL col0 FROM tab0 WHERE NOT - col4 * - col1 * + ( + col4 ) / 58 * + col1 <= ( + col1 + + - 87 )

9 results returned but expected 10
```

```sql
SELECT col3 - ( col0 ) DIV ( - 25 ) + 66 FROM tab0 WHERE NULL IS NULL

Parse error on line 1:
...col3 - ( col0 ) DIV ( - 25 ) + 66 FROM t
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT col5 AS col1 FROM tab0 AS cor0 WHERE col4 NOT BETWEEN - ( - 32 ) AND - CAST( - col1 AS SIGNED )

Expected: ["0","0","0","0","0"] but got ["apjmo","dubev","ithfo","ktnfz","vzeio"]
```

```sql
SELECT ALL - col0 * col3 col0, col2 AS col0 FROM tab0 AS cor0 WHERE NOT ( ( - 20 ) ) IS NULL

The hash of 20 returned values was different than expected. Check the sorting: gcpsu, gcpsu, hpvcv, hpvcv, ibryh, ibryh, jlpzu, jlpzu, khsim, khsim, kyzuv, kyzuv, qcjek, qcjek, qvxmy, qvxmy, tonyl, tonyl, zlffy, zlffy
```

#### ☓ Ran 10032 tests as mysql

* 8878 failed
* 11% was OK

Time: 13171ms

---- ---- ---- ---- ---- ---- ----
### 72/125 `test/index/random/10/slt_good_9.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT + + 74 FROM tab1 AS cor0 WHERE NOT NULL NOT BETWEEN ( NULL ) AND 94 + - + 59

Query was expected to return results (but did not): []
```

```sql
SELECT col2 col3 FROM tab0 AS cor0 WHERE NOT NULL IS NOT NULL

The hash of 10 returned values was different than expected. Check the sorting: bcqrx, byvxm, chhni, eiypt, gnuqz, ohmhq, pccbr, qqokf, ukgad, xpzjc
```

```sql
SELECT DISTINCT CAST( - col3 AS SIGNED ) * + 73, + 37 FROM tab0 WHERE NOT NULL IS NOT NULL

The hash of 20 returned values was different than expected. Check the sorting: -25915, 37, -29638, 37, -34018, 37, -3577, 37, -35843, 37, -38617, 37, -40880, 37, -52779, 37, -57524, 37, -61101, 37
```

```sql
SELECT ALL col5 AS col3 FROM tab0 WHERE NOT ( ( + - 78 ) IS NULL )

The hash of 10 returned values was different than expected. Check the sorting: axwip, gfxug, graqb, klkhp, mhtxw, nllff, ntvnp, ollyr, rmcra, ubbfz
```

```sql
SELECT + COUNT( * ) FROM tab1 AS cor0 WHERE NOT NULL IS NOT NULL

Expected: ["10"] but got ["0"]
```

```sql
SELECT ALL CAST( 92 AS SIGNED ) DIV + 50 - - col0 FROM tab0 WHERE NOT ( NULL ) IS NOT NULL

Parse error on line 1:
... 92 AS SIGNED ) DIV + 50 - - col0 FROM t
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT ALL CAST( col3 AS SIGNED ) * + CAST( NULL AS SIGNED ) AS col3 FROM tab0 cor0 WHERE ( + 49 + + col4 ) IS NOT NULL

The hash of 10 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT ALL 55 DIV ( COUNT( * ) ) FROM tab0 cor0 WHERE col5 IS NOT NULL

Parse error on line 1:
SELECT ALL 55 DIV ( COUNT( * ) ) FROM 
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT ALL + SUM( ALL + 84 ) AS col1 FROM tab0 AS cor0 WHERE NOT + 63 > - col1

Expected: ["NULL"] but got ["840"]
```

```sql
SELECT DISTINCT + MIN( DISTINCT + col3 ) FROM tab1 AS cor0 WHERE NOT col0 * - - col4 IS NULL

Expected: ["49"] but got ["NULL"]
```

```sql
SELECT + col0 AS col1, col5 AS col5 FROM tab0 cor0 WHERE NOT NULL IS NOT NULL

The hash of 20 returned values was different than expected. Check the sorting: 120, ubbfz, 227, gfxug, 373, graqb, 394, mhtxw, 679, rmcra, 866, axwip, 949, nllff, 958, klkhp, 967, ntvnp, 993, ollyr
```

```sql
SELECT - - col3 * col0 DIV - col3 AS col5 FROM tab0 AS cor0 WHERE NOT ( NOT NULL IS NULL )

Parse error on line 1:
...- - col3 * col0 DIV - col3 AS col5 FROM 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT - + CAST( - SUM( DISTINCT - - CAST( + 91 AS SIGNED ) ) AS SIGNED ), - 51 AS col0 FROM tab0 WHERE NOT NULL <= 60

g is not defined
```

```sql
SELECT ALL + + col5, - col1 * CAST( NULL AS DECIMAL ) AS col3 FROM tab0 AS cor0 WHERE NOT - 43 IS NULL

The hash of 20 returned values was different than expected. Check the sorting: axwip, NULL, gfxug, NULL, graqb, NULL, klkhp, NULL, mhtxw, NULL, nllff, NULL, ntvnp, NULL, ollyr, NULL, rmcra, NULL, ubbfz, NULL
```

```sql
SELECT 74 DIV 17 + + CAST( - COUNT( * ) AS SIGNED ) AS col2 FROM tab0 AS cor0 WHERE NULL BETWEEN ( NULL ) AND NULL

Parse error on line 1:
SELECT 74 DIV 17 + + CAST( - COUNT
--------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT ALL 89 DIV col3 FROM tab0 WHERE - 69 IS NOT NULL

Parse error on line 1:
SELECT ALL 89 DIV col3 FROM tab0 WHERE
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT col5 AS col1 FROM tab0 AS cor0 WHERE + 80 + col4 > - - col1 + col3

Expected: ["0","0"] but got ["axwip","klkhp"]
```

```sql
SELECT - 31 / + SUM( DISTINCT col4 ) FROM tab0 AS cor0 WHERE NULL IS NOT NULL

Expected: ["NULL"] but got ["-Infinity"]
```

#### ☓ Ran 10031 tests as mysql

* 8968 failed
* 10% was OK

Time: 12770ms

---- ---- ---- ---- ---- ---- ----
### 73/125 `test/index/view/10/slt_good_0.test`

_Mimic mysql_
Time: 0ms

---- ---- ---- ---- ---- ---- ----
### 74/125 `test/index/view/10/slt_good_1.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE pk IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM tab0

The hash of 20 returned values was different than expected. Check the sorting: 0, 30, 1, 95, 2, 22, 3, 45, 4, 84, 5, 58, 6, 0, 7, 65, 8, 47, 9, 88
```

```sql
SELECT pk, col0 FROM view_2_tab0_153

The hash of 20 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_1_tab0_154

The hash of 10 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_1_tab0_154 UNION SELECT pk, col0 FROM view_2_tab0_154

10 results returned but expected 20
```

```sql
SELECT * FROM view_3_tab0_154

Expected: ["1","4","5","7","9"] but got ["NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_1_tab0_155

The hash of 18 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_2_tab0_155

Expected: ["6","0"] but got ["NULL","NULL"]
```

```sql
SELECT * FROM view_3_tab0_155

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
CREATE VIEW view_1_tab0_157 AS SELECT pk, col0 FROM tab0 WHERE (col0 IN (SELECT col3 FROM tab0 WHERE ((col0 IS NULL) OR col3 > 5 OR col3 <= 50 OR col1 < 83.11))) OR col0 > 75

Cannot read property 'columns' of undefined
```

```sql
SELECT pk, col0 FROM tab0 WHERE (col0 IN (SELECT col3 FROM tab0 WHERE ((col0 IS NULL) OR col3 > 5 OR col3 <= 50 OR col1 < 83.11))) OR col0 > 75

context is not defined
```

```sql
SELECT pk FROM ( SELECT pk, col0 FROM tab0 WHERE (col0 IN (SELECT col3 FROM tab0 WHERE ((col0 IS NULL) OR col3 > 5 OR col3 <= 50 OR col1 < 83.11))) OR col0 > 75 ) AS tab0_157

Cannot read property '0' of undefined
```

```sql
SELECT * FROM view_3_tab0_157

undefined is not a function
```

```sql
DROP VIEW view_1_tab0_157

Can not drop table 'view_1_tab0_157', because it does not exist in the database.
```

```sql
SELECT pk, col0 FROM view_1_tab0_160

Expected: ["1","95","4","84","7","65","9","88"] but got ["NULL","NULL","NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_2_tab0_160

The hash of 12 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT * FROM view_3_tab0_160

Expected: ["1","4","7","9"] but got ["NULL","NULL","NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_1_tab0_162

The hash of 16 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_1_tab0_169

The hash of 14 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_2_tab0_169

Expected: ["1","95","4","84","9","88"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT * FROM view_3_tab0_169

Expected: ["0","2","3","5","6","7","8"] but got ["NULL","NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT * FROM view_3_tab0_170

Expected: ["6"] but got ["NULL"]
```

```sql
SELECT * FROM view_3_tab0_179

Expected: ["1","4","9"] but got ["NULL","NULL","NULL"]
```

#### ☓ Ran 7135 tests as mysql

* 3881 failed
* 45% was OK

Time: 10280ms

---- ---- ---- ---- ---- ---- ----
### 75/125 `test/index/view/10/slt_good_2.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE pk IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM tab0

The hash of 20 returned values was different than expected. Check the sorting: 0, 8, 1, 6, 2, 3, 3, 53, 4, 11, 5, 47, 6, 56, 7, 70, 8, 75, 9, 18
```

```sql
SELECT pk, col0 FROM view_1_tab0_302

The hash of 16 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_2_tab0_302

Expected: ["4","11","7","70"] but got ["NULL","NULL","NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_1_tab0_302 UNION ALL SELECT pk, col0 FROM view_2_tab0_302

The hash of 20 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_1_tab0_302 UNION SELECT pk, col0 FROM view_2_tab0_302

4 results returned but expected 20
```

```sql
SELECT * FROM view_3_tab0_302

Expected: ["0","1","2","3","5","6","8","9"] but got ["NULL","NULL","NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_1_tab0_305

The hash of 14 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_2_tab0_305

Expected: ["6","56","7","70","8","75"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT * FROM view_3_tab0_305

Expected: ["0","1","2","3","4","5","9"] but got ["NULL","NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_1_tab0_306

The hash of 18 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_2_tab0_306

Expected: ["4","11"] but got ["NULL","NULL"]
```

```sql
SELECT * FROM view_3_tab0_306

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_1_tab0_308

The hash of 10 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT * FROM view_3_tab0_308

Expected: ["2","3","5","8","9"] but got ["NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT * FROM view_3_tab0_316

Expected: ["6","7","8"] but got ["NULL","NULL","NULL"]
```

```sql
SELECT * FROM view_3_tab0_322

Expected: ["6"] but got ["NULL"]
```

```sql
SELECT pk, col0 FROM view_2_tab0_331

The hash of 12 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
CREATE VIEW view_1_tab0_367 AS SELECT pk, col0 FROM tab0 WHERE col3 IS NULL OR (((col0 < 64 AND (col0 BETWEEN 25 AND 41) AND (col4 >= 33.34) OR (col4 < 22.72 AND (col0 >= 61)) AND (col0 > 4) OR col0 >= 0 OR col0 >= 45 AND col3 IN (SELECT col0 FROM tab0 WHERE col3 > 42) AND col3 IS NULL AND col3 <= 75)))

Cannot read property 'columns' of undefined
```

```sql
SELECT * FROM view_3_tab0_367

undefined is not a function
```

```sql
DROP VIEW view_1_tab0_367

Can not drop table 'view_1_tab0_367', because it does not exist in the database.
```

```sql
SELECT pk, col0 FROM tab0 WHERE col3 IN (SELECT col0 FROM tab0 WHERE col0 > 39)

context is not defined
```

```sql
SELECT pk FROM ( SELECT pk, col0 FROM tab0 WHERE col3 IN (SELECT col0 FROM tab0 WHERE col0 > 39) ) AS tab0_373

Cannot read property '0' of undefined
```

#### ☓ Ran 7333 tests as mysql

* 3966 failed
* 45% was OK

Time: 10805ms

---- ---- ---- ---- ---- ---- ----
### 76/125 `test/index/view/10/slt_good_3.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE pk IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM tab0

The hash of 20 returned values was different than expected. Check the sorting: 0, 60, 1, 72, 2, 52, 3, 23, 4, 18, 5, 85, 6, 9, 7, 17, 8, 94, 9, 95
```

```sql
SELECT pk, col0 FROM view_1_tab0_376

The hash of 20 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_1_tab0_376 UNION SELECT pk, col0 FROM view_2_tab0_376

2 results returned but expected 20
```

```sql
SELECT * FROM view_3_tab0_376

The hash of 10 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_1_tab0_377

Expected: ["1","72","5","85","8","94","9","95"] but got ["NULL","NULL","NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_2_tab0_377

The hash of 12 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT * FROM view_3_tab0_377

Expected: ["1","5","8","9"] but got ["NULL","NULL","NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_1_tab0_378

Expected: ["2","52"] but got ["NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_2_tab0_378

The hash of 18 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT * FROM view_3_tab0_378

Expected: ["2"] but got ["NULL"]
```

```sql
SELECT * FROM view_3_tab0_379

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_2_tab0_380

The hash of 16 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT * FROM view_3_tab0_385

Expected: ["0","2","3","7","9"] but got ["NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_1_tab0_387

The hash of 14 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_2_tab0_387

Expected: ["0","60","1","72","9","95"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT * FROM view_3_tab0_387

Expected: ["2","3","4","5","6","7","8"] but got ["NULL","NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT * FROM view_3_tab0_405

Expected: ["2","6","7"] but got ["NULL","NULL","NULL"]
```

```sql
CREATE VIEW view_1_tab0_408 AS SELECT pk, col0 FROM tab0 WHERE col3 IS NULL AND (((((col1 < 63.79))) OR col0 >= 35 AND col4 > 76.20 AND col0 = 84 OR col0 <= 76 AND col3 IN (SELECT col0 FROM tab0 WHERE col4 = 39.20 AND col3 <= 5)))

Cannot read property 'columns' of undefined
```

```sql
SELECT * FROM view_3_tab0_408

undefined is not a function
```

```sql
DROP VIEW view_1_tab0_408

Can not drop table 'view_1_tab0_408', because it does not exist in the database.
```

```sql
SELECT pk, col0 FROM tab0 WHERE ((((col1 >= 65.44)))) OR ((col3 > 70 AND ((col0 < 62)) AND col4 >= 89.36 OR (col3 >= 98 OR col4 >= 21.28 OR (col1 IN (52.93,89.6,99.79,20.53,93.94))) OR col3 > 47)) AND col3 IS NULL OR col3 > 66 AND (((col3 = 15))) AND col4 > 59.22 OR ((((col0 IN (11) OR ((((col4 < 35.77))))))) AND col1 >= 6.83 OR ((col3 < 74 OR col4 < 50.68 OR col0 >= 69 AND ((col1 = 33.73) OR col4 IS NULL) OR ((col0 IN (SELECT col3 FROM tab0 WHERE (col0 > 32)) OR col3 = 34)) AND col3 IN (89) AND col3 = 75 AND col4 = 2.93 AND ((col1 = 15.25) AND col4 = 91.37 AND col3 >= 92 OR (col0 < 47 OR col4 >= 43.76 OR ((col1 > 13.13)) OR (col0 = 1) OR col0 < 74))) AND (col3 >= 41)) AND col3 <= 78 AND (col3 IS NULL)) AND col0 >= 77 AND col4 = 56.25

context is not defined
```

```sql
SELECT pk FROM ( SELECT pk, col0 FROM tab0 WHERE ((((col1 >= 65.44)))) OR ((col3 > 70 AND ((col0 < 62)) AND col4 >= 89.36 OR (col3 >= 98 OR col4 >= 21.28 OR (col1 IN (52.93,89.6,99.79,20.53,93.94))) OR col3 > 47)) AND col3 IS NULL OR col3 > 66 AND (((col3 = 15))) AND col4 > 59.22 OR ((((col0 IN (11) OR ((((col4 < 35.77))))))) AND col1 >= 6.83 OR ((col3 < 74 OR col4 < 50.68 OR col0 >= 69 AND ((col1 = 33.73) OR col4 IS NULL) OR ((col0 IN (SELECT col3 FROM tab0 WHERE (col0 > 32)) OR col3 = 34)) AND col3 IN (89) AND col3 = 75 AND col4 = 2.93 AND ((col1 = 15.25) AND col4 = 91.37 AND col3 >= 92 OR (col0 < 47 OR col4 >= 43.76 OR ((col1 > 13.13)) OR (col0 = 1) OR col0 < 74))) AND (col3 >= 41)) AND col3 <= 78 AND (col3 IS NULL)) AND col0 >= 77 AND col4 = 56.25 ) AS tab0_409

Cannot read property '0' of undefined
```

#### ☓ Ran 6734 tests as mysql

* 3674 failed
* 45% was OK

Time: 11114ms

---- ---- ---- ---- ---- ---- ----
### 77/125 `test/index/view/10/slt_good_4.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE pk IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM tab0

The hash of 20 returned values was different than expected. Check the sorting: 0, 37, 1, 65, 2, 66, 3, 6, 4, 18, 5, 67, 6, 7, 7, 52, 8, 29, 9, 46
```

```sql
SELECT pk, col0 FROM view_1_tab0_444

The hash of 16 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_2_tab0_444

Expected: ["1","65","5","67"] but got ["NULL","NULL","NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_1_tab0_444 UNION ALL SELECT pk, col0 FROM view_2_tab0_444

The hash of 20 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_1_tab0_444 UNION SELECT pk, col0 FROM view_2_tab0_444

4 results returned but expected 20
```

```sql
SELECT * FROM view_3_tab0_444

Expected: ["0","2","3","4","6","7","8","9"] but got ["NULL","NULL","NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_1_tab0_446

The hash of 18 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_2_tab0_446

Expected: ["1","65"] but got ["NULL","NULL"]
```

```sql
SELECT * FROM view_3_tab0_446

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT * FROM view_3_tab0_447

Expected: ["3"] but got ["NULL"]
```

```sql
SELECT pk, col0 FROM view_1_tab0_448

The hash of 10 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT * FROM view_3_tab0_448

Expected: ["2","3","4","8","9"] but got ["NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_1_tab0_462

Expected: ["3","6","7","52","8","29"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_2_tab0_462

The hash of 14 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT * FROM view_3_tab0_462

Expected: ["3","7","8"] but got ["NULL","NULL","NULL"]
```

```sql
SELECT * FROM view_3_tab0_463

Expected: ["0","1","2","5","7","8","9"] but got ["NULL","NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_1_tab0_465

The hash of 12 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
CREATE VIEW view_1_tab0_519 AS SELECT pk, col0 FROM tab0 WHERE (((col0 >= 39) OR (col1 < 88.77) AND (((col1 <= 79.45) AND col0 IN (83,70,92,44,74) AND col4 < 94.64 OR col0 > 49 AND (col3 >= 51 OR col0 > 38)) OR col0 < 10 OR col1 > 79.73 AND col3 > 53 AND col1 BETWEEN 24.95 AND 9.14 AND col3 < 51 OR col4 > 95.31 AND col3 >= 58 AND col3 >= 26) OR (((col3 > 15 OR (col0 = 45))) OR ((col1 < 47.23) OR col1 > 77.5 AND (col4 < 82.55)) OR col0 > 32 OR col0 < 49) OR col1 > 33.41 AND col4 < 70.58 OR col0 IN (34,11,90) AND col3 <= 3 OR col3 IN (SELECT col0 FROM tab0 WHERE col0 > 86) AND col0 IS NULL AND col0 > 45)) OR (col0 > 87 OR (col4 >= 8.13))

Cannot read property 'columns' of undefined
```

```sql
SELECT * FROM view_3_tab0_519

undefined is not a function
```

```sql
DROP VIEW view_1_tab0_519

Can not drop table 'view_1_tab0_519', because it does not exist in the database.
```

#### ☓ Ran 7536 tests as mysql

* 4053 failed
* 46% was OK

Time: 10760ms

---- ---- ---- ---- ---- ---- ----
### 78/125 `test/index/view/10/slt_good_5.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE pk IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM tab0

The hash of 20 returned values was different than expected. Check the sorting: 0, 48, 1, 2, 2, 85, 3, 93, 4, 44, 5, 36, 6, 16, 7, 37, 8, 23, 9, 32
```

```sql
SELECT pk, col0 FROM view_1_tab0_660

The hash of 16 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_2_tab0_660

Expected: ["2","85","3","93"] but got ["NULL","NULL","NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_1_tab0_660 UNION ALL SELECT pk, col0 FROM view_2_tab0_660

The hash of 20 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_1_tab0_660 UNION SELECT pk, col0 FROM view_2_tab0_660

4 results returned but expected 20
```

```sql
SELECT * FROM view_3_tab0_660

Expected: ["0","1","4","5","6","7","8","9"] but got ["NULL","NULL","NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_1_tab0_661

Expected: ["0","48","2","85","3","93"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_2_tab0_661

The hash of 14 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT * FROM view_3_tab0_661

Expected: ["0","2","3"] but got ["NULL","NULL","NULL"]
```

```sql
SELECT * FROM view_3_tab0_662

Expected: ["2","3"] but got ["NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_2_tab0_665

The hash of 12 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_1_tab0_666

The hash of 18 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT * FROM view_3_tab0_666

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT * FROM view_3_tab0_669

The hash of 10 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT * FROM view_3_tab0_677

Expected: ["0","2","3","4","5","7","9"] but got ["NULL","NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT * FROM view_3_tab0_687

Expected: ["8"] but got ["NULL"]
```

```sql
CREATE VIEW view_1_tab0_726 AS SELECT pk, col0 FROM tab0 WHERE col0 > 84 AND col4 <= 74.98 AND col1 IN (SELECT col4 FROM tab0 WHERE (col4 > 35.62) AND ((col3 > 33) AND (((((col3 > 1))) AND (col0 = 21 OR (((col3 > 79))) AND (col1 < 18.85) AND ((col3 > 26)) OR ((col3 > 73) AND col3 <= 84)))) OR ((((col3 <= 35))) AND col1 > 16.74) AND col4 <= 51.42 AND (col1 > 97.18)))

Cannot read property 'columns' of undefined
```

```sql
SELECT pk, col0 FROM tab0 WHERE col0 > 84 AND col4 <= 74.98 AND col1 IN (SELECT col4 FROM tab0 WHERE (col4 > 35.62) AND ((col3 > 33) AND (((((col3 > 1))) AND (col0 = 21 OR (((col3 > 79))) AND (col1 < 18.85) AND ((col3 > 26)) OR ((col3 > 73) AND col3 <= 84)))) OR ((((col3 <= 35))) AND col1 > 16.74) AND col4 <= 51.42 AND (col1 > 97.18)))

context is not defined
```

```sql
SELECT pk FROM ( SELECT pk, col0 FROM tab0 WHERE col0 > 84 AND col4 <= 74.98 AND col1 IN (SELECT col4 FROM tab0 WHERE (col4 > 35.62) AND ((col3 > 33) AND (((((col3 > 1))) AND (col0 = 21 OR (((col3 > 79))) AND (col1 < 18.85) AND ((col3 > 26)) OR ((col3 > 73) AND col3 <= 84)))) OR ((((col3 <= 35))) AND col1 > 16.74) AND col4 <= 51.42 AND (col1 > 97.18))) ) AS tab0_726

Cannot read property '0' of undefined
```

```sql
SELECT * FROM view_3_tab0_726

undefined is not a function
```

```sql
DROP VIEW view_1_tab0_726

Can not drop table 'view_1_tab0_726', because it does not exist in the database.
```

#### ☓ Ran 7237 tests as mysql

* 3874 failed
* 46% was OK

Time: 10578ms

---- ---- ---- ---- ---- ---- ----
### 79/125 `test/index/view/10/slt_good_6.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE pk IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM tab0

The hash of 20 returned values was different than expected. Check the sorting: 0, 87, 1, 35, 2, 73, 3, 18, 4, 84, 5, 85, 6, 59, 7, 71, 8, 30, 9, 0
```

```sql
SELECT pk, col0 FROM view_1_tab0_946

The hash of 10 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_1_tab0_946 UNION ALL SELECT pk, col0 FROM view_2_tab0_946

The hash of 20 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_1_tab0_946 UNION SELECT pk, col0 FROM view_2_tab0_946

10 results returned but expected 20
```

```sql
SELECT * FROM view_3_tab0_946

Expected: ["1","2","5","6","9"] but got ["NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_1_tab0_948

The hash of 18 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_2_tab0_948

Expected: ["7","71"] but got ["NULL","NULL"]
```

```sql
SELECT * FROM view_3_tab0_948

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_1_tab0_952

The hash of 12 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_2_tab0_952

Expected: ["1","35","3","18","7","71","9","0"] but got ["NULL","NULL","NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT * FROM view_3_tab0_952

Expected: ["0","2","4","5","6","8"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_1_tab0_961

The hash of 14 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT * FROM view_3_tab0_961

Expected: ["0","1","2","4","5","6","7"] but got ["NULL","NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT * FROM view_3_tab0_963

Expected: ["8"] but got ["NULL"]
```

```sql
SELECT pk, col0 FROM tab1 WHERE (col4 = 10.83) UNION SELECT pk, col0 FROM tab1 WHERE NOT ((col4 = 10.83))

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM view_1_tab0_970

The hash of 16 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_2_tab0_970

Expected: ["0","87","3","18"] but got ["NULL","NULL","NULL","NULL"]
```

```sql
SELECT * FROM view_3_tab0_975

Expected: ["3","7","9"] but got ["NULL","NULL","NULL"]
```

```sql
CREATE VIEW view_1_tab0_984 AS SELECT pk, col0 FROM tab0 WHERE (col0 > 42) AND ((col1 IS NULL)) OR ((((col3 > 72)))) OR (((col3 <= 90) AND ((col0 > 68)) AND (col0 IN (45,3,50,1) OR col4 < 9.99 OR col3 IN (76,97,24) AND col1 > 8.58 AND (col0 = 3) AND (col0 >= 50 AND col0 IN (SELECT col3 FROM tab0 WHERE ((col3 <= 60)))) OR (col0 > 40) OR col0 < 72) AND (col3 <= 99)) AND ((col3 IS NULL) OR ((((((col4 >= 86.47) OR ((col0 < 99) AND col3 IS NULL)))))) OR col1 < 21.99)) AND col4 < 9.77 AND col4 = 9.91

Cannot read property 'columns' of undefined
```

```sql
SELECT * FROM view_3_tab0_984

undefined is not a function
```

```sql
DROP VIEW view_1_tab0_984

Can not drop table 'view_1_tab0_984', because it does not exist in the database.
```

```sql
SELECT pk, col0 FROM tab0 WHERE ((col0 IN (SELECT col3 FROM tab0 WHERE (col0 IS NULL OR (((col3 <= 32)))) OR (col4 > 43.71 AND col4 > 26.46 AND ((((col4 >= 23.8) AND ((col3 >= 47)) OR (col0 >= 79) OR (col3 > 28) OR (((col4 >= 12.10 OR ((col3 IN (SELECT col0 FROM tab0 WHERE col0 >= 30) AND col3 <= 35 OR (col3 > 31) AND ((col0 > 77) AND col0 > 91 AND col0 <= 48) AND col0 > 6 OR (col0 <= 92 AND (((col3 IS NULL))) AND (col0 <= 65) AND col3 > 97 OR col1 > 57.36 AND ((((col1 <= 78.71) OR (((((col1 = 20.70))))) AND ((col3 IN (84))))) AND (col0 < 96)) OR (col3 BETWEEN 7 AND 49) OR (col3 > 64) OR (col1 < 42.5) AND col4 >= 76.60 AND col0 = 76 AND (col0 > 70) OR col0 IS NULL OR (col1 >= 52.53) AND (((((col3 IN (51,64) OR col0 > 63) AND col0 = 84 AND col3 >= 94)))) OR col1 > 51.23 OR col1 BETWEEN 39.92 AND 61.20 AND (col0 >= 0 AND ((col1 IS NULL) OR (col0 < 37 AND col4 <= 41.92 OR (col1 >= 65.14) OR col0 IN (42,56)) OR col1 < 55.30 OR (col0 > 69 AND col0 < 84) AND (col3 < 29) OR col4 < 19.55 AND (col4 >= 47.58) AND ((((col0 >= 73)) OR (col0 BETWEEN 38 AND 47) OR ((col3 <= 98)) AND col3 >= 99 AND col0 > 94 AND (col3 = 59) AND col4 > 49.41 OR col0 < 92 AND col0 BETWEEN 33 AND 76 AND col0 <= 68 OR col4 BETWEEN 72.87 AND 2.49 AND col3 IN (84,91,53,11))))) OR ((col3 BETWEEN 22 AND 10)) AND (col1 < 5.4) OR (col4 >= 44.55) AND ((col3 < 36)))) AND (((col3 IS NULL) OR (col4 IS NULL) OR col1 > 42.97))) OR ((col1 >= 20.41) AND col3 > 42) OR (col0 = 31) AND col3 < 46 AND col0 < 78 OR ((col0 < 4)) AND ((col3 > 90 OR (((col3 <= 29))))) OR col1 > 37.60 AND (col3 < 79) OR col4 < 41.8 OR col0 > 43 OR col4 = 51.29 AND (col3 IN (51,92,26,64))))) OR col4 > 68.98 AND ((col4 < 87.44 AND col1 <= 83.0 AND (col3 > 58) OR col1 > 65.25 AND col0 > 0)) AND (col4 <= 61.33 OR col3 <= 65 AND (col1 < 72.56 AND ((col3 IN (99,54))) AND (((col1 < 60.68 OR col3 > 64)) AND ((col3 > 24 AND (col1 <= 49.56 OR col3 > 96 AND col3 <= 16 AND col4 < 98.0 AND (col0 >= 11 OR col1 = 46.36) AND col0 >= 41))) AND col3 >= 55 AND (col0 > 51 OR (col0 > 16)) OR ((col3 <= 77))) AND ((col0 <= 52) OR ((((((col1 < 60.0) OR (((col3 <= 18) AND col0 = 66 OR ((((((((col3 IS NULL)) OR col4 < 48.79)) OR col0 > 63 OR (col3 >= 57 AND col3 <= 89 AND ((col3 > 47))) AND (col3 > 47))))) OR col0 = 12 OR ((((col3 > 15)) AND col0 < 78 AND col4 > 75.14 AND (col0 < 1) AND col3 IS NULL)) AND col1 IS NULL OR col0 = 15)) AND (col3 > 90)))))))) AND (col4 > 71.15 OR ((col3 IS NULL OR col1 IS NULL OR (((col3 >= 30) AND col0 >= 2 AND col3 >= 45 AND (col0 <= 95))) AND col4 <= 71.78 OR (col4 = 95.76 AND ((col3 > 93)) OR col0 < 41 AND col3 IS NULL AND (col0 >= 61)) AND col0 <= 74)) AND ((col3 >= 94 OR col3 IN (22,94,37)))) AND col0 > 49 AND (col3 >= 95 AND col3 = 28) AND (col0 < 21) AND col1 > 29.84 AND (col0 <= 56) OR (col0 > 2) OR col4 <= 51.84 OR (col0 > 62) AND col3 > 18 AND ((col0 > 8) OR col3 > 55) AND col3 > 18 AND col4 >= 97.99 AND ((col1 BETWEEN 16.69 AND 34.54)) OR col3 IS NULL AND ((col1 < 78.90)) OR col0 < 83 OR ((col3 > 39 OR ((col3 >= 55) AND col0 <= 32)) OR col4 BETWEEN 41.64 AND 92.0 OR col3 > 44) OR col1 = 87.36 AND col0 = 53 AND col0 >= 35) OR col3 < 61 OR col3 >= 19 OR col3 >= 0) AND col0 > 54 AND col4 IN (11.6,7.61,98.26,24.65,81.81,48.50)) AND col1 <= 57.49) OR (col3 > 27))))) AND col0 = 54 AND col0 < 39

context is not defined
```

```sql
SELECT pk FROM ( SELECT pk, col0 FROM tab0 WHERE ((col0 IN (SELECT col3 FROM tab0 WHERE (col0 IS NULL OR (((col3 <= 32)))) OR (col4 > 43.71 AND col4 > 26.46 AND ((((col4 >= 23.8) AND ((col3 >= 47)) OR (col0 >= 79) OR (col3 > 28) OR (((col4 >= 12.10 OR ((col3 IN (SELECT col0 FROM tab0 WHERE col0 >= 30) AND col3 <= 35 OR (col3 > 31) AND ((col0 > 77) AND col0 > 91 AND col0 <= 48) AND col0 > 6 OR (col0 <= 92 AND (((col3 IS NULL))) AND (col0 <= 65) AND col3 > 97 OR col1 > 57.36 AND ((((col1 <= 78.71) OR (((((col1 = 20.70))))) AND ((col3 IN (84))))) AND (col0 < 96)) OR (col3 BETWEEN 7 AND 49) OR (col3 > 64) OR (col1 < 42.5) AND col4 >= 76.60 AND col0 = 76 AND (col0 > 70) OR col0 IS NULL OR (col1 >= 52.53) AND (((((col3 IN (51,64) OR col0 > 63) AND col0 = 84 AND col3 >= 94)))) OR col1 > 51.23 OR col1 BETWEEN 39.92 AND 61.20 AND (col0 >= 0 AND ((col1 IS NULL) OR (col0 < 37 AND col4 <= 41.92 OR (col1 >= 65.14) OR col0 IN (42,56)) OR col1 < 55.30 OR (col0 > 69 AND col0 < 84) AND (col3 < 29) OR col4 < 19.55 AND (col4 >= 47.58) AND ((((col0 >= 73)) OR (col0 BETWEEN 38 AND 47) OR ((col3 <= 98)) AND col3 >= 99 AND col0 > 94 AND (col3 = 59) AND col4 > 49.41 OR col0 < 92 AND col0 BETWEEN 33 AND 76 AND col0 <= 68 OR col4 BETWEEN 72.87 AND 2.49 AND col3 IN (84,91,53,11))))) OR ((col3 BETWEEN 22 AND 10)) AND (col1 < 5.4) OR (col4 >= 44.55) AND ((col3 < 36)))) AND (((col3 IS NULL) OR (col4 IS NULL) OR col1 > 42.97))) OR ((col1 >= 20.41) AND col3 > 42) OR (col0 = 31) AND col3 < 46 AND col0 < 78 OR ((col0 < 4)) AND ((col3 > 90 OR (((col3 <= 29))))) OR col1 > 37.60 AND (col3 < 79) OR col4 < 41.8 OR col0 > 43 OR col4 = 51.29 AND (col3 IN (51,92,26,64))))) OR col4 > 68.98 AND ((col4 < 87.44 AND col1 <= 83.0 AND (col3 > 58) OR col1 > 65.25 AND col0 > 0)) AND (col4 <= 61.33 OR col3 <= 65 AND (col1 < 72.56 AND ((col3 IN (99,54))) AND (((col1 < 60.68 OR col3 > 64)) AND ((col3 > 24 AND (col1 <= 49.56 OR col3 > 96 AND col3 <= 16 AND col4 < 98.0 AND (col0 >= 11 OR col1 = 46.36) AND col0 >= 41))) AND col3 >= 55 AND (col0 > 51 OR (col0 > 16)) OR ((col3 <= 77))) AND ((col0 <= 52) OR ((((((col1 < 60.0) OR (((col3 <= 18) AND col0 = 66 OR ((((((((col3 IS NULL)) OR col4 < 48.79)) OR col0 > 63 OR (col3 >= 57 AND col3 <= 89 AND ((col3 > 47))) AND (col3 > 47))))) OR col0 = 12 OR ((((col3 > 15)) AND col0 < 78 AND col4 > 75.14 AND (col0 < 1) AND col3 IS NULL)) AND col1 IS NULL OR col0 = 15)) AND (col3 > 90)))))))) AND (col4 > 71.15 OR ((col3 IS NULL OR col1 IS NULL OR (((col3 >= 30) AND col0 >= 2 AND col3 >= 45 AND (col0 <= 95))) AND col4 <= 71.78 OR (col4 = 95.76 AND ((col3 > 93)) OR col0 < 41 AND col3 IS NULL AND (col0 >= 61)) AND col0 <= 74)) AND ((col3 >= 94 OR col3 IN (22,94,37)))) AND col0 > 49 AND (col3 >= 95 AND col3 = 28) AND (col0 < 21) AND col1 > 29.84 AND (col0 <= 56) OR (col0 > 2) OR col4 <= 51.84 OR (col0 > 62) AND col3 > 18 AND ((col0 > 8) OR col3 > 55) AND col3 > 18 AND col4 >= 97.99 AND ((col1 BETWEEN 16.69 AND 34.54)) OR col3 IS NULL AND ((col1 < 78.90)) OR col0 < 83 OR ((col3 > 39 OR ((col3 >= 55) AND col0 <= 32)) OR col4 BETWEEN 41.64 AND 92.0 OR col3 > 44) OR col1 = 87.36 AND col0 = 53 AND col0 >= 35) OR col3 < 61 OR col3 >= 19 OR col3 >= 0) AND col0 > 54 AND col4 IN (11.6,7.61,98.26,24.65,81.81,48.50)) AND col1 <= 57.49) OR (col3 > 27))))) AND col0 = 54 AND col0 < 39 ) AS tab0_1002

Cannot read property '1' of undefined
```

#### ☓ Ran 6135 tests as mysql

* 3299 failed
* 46% was OK

Time: 11810ms

---- ---- ---- ---- ---- ---- ----
### 80/125 `test/index/view/10/slt_good_7.test`

_Mimic mysql_
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE pk IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT pk, col0 FROM tab0

The hash of 20 returned values was different than expected. Check the sorting: 0, 71, 1, 57, 2, 89, 3, 5, 4, 92, 5, 97, 6, 36, 7, 9, 8, 14, 9, 56
```

```sql
SELECT pk, col0 FROM view_1_tab0_1009

The hash of 16 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_2_tab0_1009

Expected: ["0","71","5","97"] but got ["NULL","NULL","NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_1_tab0_1009 UNION ALL SELECT pk, col0 FROM view_2_tab0_1009

The hash of 20 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_1_tab0_1009 UNION SELECT pk, col0 FROM view_2_tab0_1009

4 results returned but expected 20
```

```sql
SELECT * FROM view_3_tab0_1009

Expected: ["1","2","3","4","6","7","8","9"] but got ["NULL","NULL","NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT pk, col0 FROM view_2_tab0_1012

The hash of 12 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_1_tab0_1013

The hash of 14 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_2_tab0_1013

Expected: ["2","89","4","92","5","97"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT * FROM view_3_tab0_1013

Expected: ["0","1","3","6","7","8","9"] but got ["NULL","NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT * FROM view_3_tab0_1014

The hash of 10 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_1_tab0_1023

The hash of 18 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT pk, col0 FROM view_2_tab0_1023

Expected: ["3","5"] but got ["NULL","NULL"]
```

```sql
SELECT * FROM view_3_tab0_1023

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT * FROM view_3_tab0_1027

Expected: ["6"] but got ["NULL"]
```

```sql
SELECT * FROM view_3_tab0_1031

Expected: ["1","3","6","7","9"] but got ["NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT * FROM view_3_tab0_1035

Expected: ["3","7","8"] but got ["NULL","NULL","NULL"]
```

```sql
CREATE VIEW view_1_tab0_1042 AS SELECT pk, col0 FROM tab0 WHERE ((col0 > 16 OR ((col0 < 9 OR col3 IN (SELECT col0 FROM tab0 WHERE (col0 < 94) AND col0 <= 61))) AND col3 = 18 OR col3 < 55 AND col3 IN (76,76) OR col3 >= 86 AND ((((((col0 < 9)))) AND col0 = 70 OR col1 IS NULL) AND (col3 IN (31,92,0))))) AND col1 > 29.45 OR col4 < 19.59

Cannot read property 'columns' of undefined
```

```sql
SELECT pk, col0 FROM tab0 WHERE ((col0 > 16 OR ((col0 < 9 OR col3 IN (SELECT col0 FROM tab0 WHERE (col0 < 94) AND col0 <= 61))) AND col3 = 18 OR col3 < 55 AND col3 IN (76,76) OR col3 >= 86 AND ((((((col0 < 9)))) AND col0 = 70 OR col1 IS NULL) AND (col3 IN (31,92,0))))) AND col1 > 29.45 OR col4 < 19.59

context is not defined
```

```sql
SELECT pk FROM ( SELECT pk, col0 FROM tab0 WHERE ((col0 > 16 OR ((col0 < 9 OR col3 IN (SELECT col0 FROM tab0 WHERE (col0 < 94) AND col0 <= 61))) AND col3 = 18 OR col3 < 55 AND col3 IN (76,76) OR col3 >= 86 AND ((((((col0 < 9)))) AND col0 = 70 OR col1 IS NULL) AND (col3 IN (31,92,0))))) AND col1 > 29.45 OR col4 < 19.59 ) AS tab0_1042

Cannot read property '0' of undefined
```

```sql
SELECT * FROM view_3_tab0_1042

undefined is not a function
```

```sql
DROP VIEW view_1_tab0_1042

Can not drop table 'view_1_tab0_1042', because it does not exist in the database.
```

#### ☓ Ran 6936 tests as mysql

* 3699 failed
* 46% was OK

Time: 10849ms

---- ---- ---- ---- ---- ---- ----
### 81/125 `test/random/aggregates/slt_good_0.test`

_Mimic mysql_
```sql
SELECT DISTINCT 20 DIV - 97 FROM tab0

Parse error on line 1:
...ECT DISTINCT 20 DIV - 97 FROM tab0
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT DISTINCT * FROM tab2 WHERE - col2 + col1 IS NOT NULL

The hash of 9 returned values was different than expected. Check the sorting: 46, 51, 23, 64, 77, 40, 75, 67, 58
```

```sql
SELECT DISTINCT * FROM tab1 AS cor0 WHERE NOT - 78 IS NOT NULL

Query was expected to return results (but did not): []
```

```sql
SELECT - col1 DIV + - col0 * - - 36 * + col2 FROM tab1

Parse error on line 1:
SELECT - col1 DIV + - col0 * - - 36 * 
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT 38 AS col2, - col0 AS col2 FROM tab2 WHERE + col2 IS NOT NULL

Expected: ["38","-46","38","-64","38","-75"] but got ["-46","-46","-64","-64","-75","-75"]
```

```sql
SELECT MIN( DISTINCT col1 ) * - + AVG ( DISTINCT + ( - + CAST( NULL AS SIGNED ) ) ) AS col2, COUNT( ALL - col0 ) AS col2 FROM tab2 AS cor0

Expected: ["NULL","3"] but got ["3"]
```

```sql
SELECT DISTINCT + CAST( ( + SUM( - 14 ) ) AS SIGNED ) AS col0 FROM tab1

g is not defined
```

```sql
SELECT 10 DIV 28 FROM tab0

Parse error on line 1:
SELECT 10 DIV 28 FROM tab0
--------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT DISTINCT - MAX( ALL col1 ) DIV COUNT( * ) AS col0 FROM tab1

Parse error on line 1:
...MAX( ALL col1 ) DIV COUNT( * ) AS col0 F
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT ALL + CAST( NULL AS SIGNED ) FROM tab2 AS cor0 CROSS JOIN tab1 AS cor1

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT DISTINCT SUM( DISTINCT - 71 ) + + - CAST( + + COUNT( * ) AS SIGNED ) col2 FROM tab1 AS cor0 CROSS JOIN tab1 cor1

Expected: ["-80"] but got ["NULL"]
```

```sql
SELECT ALL + 39 DIV col0 FROM tab1 AS cor0

Parse error on line 1:
SELECT ALL + 39 DIV col0 FROM tab1 AS co
--------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT DISTINCT * FROM tab1, tab0 AS cor0 WHERE NOT ( NULL ) IS NOT NULL

18 results returned but expected 54
```

```sql
SELECT - MAX( DISTINCT CAST( NULL AS SIGNED ) ) AS col0, + ( + SUM( DISTINCT + - 43 ) ) FROM tab1 WHERE NOT ( NULL BETWEEN col2 AND NULL )

Expected: ["NULL","NULL"] but got ["NULL","-43"]
```

```sql
SELECT ALL + - col1 + + col1 + + col0 AS col1, 81 DIV ( col1 ) * - col1 AS col2 FROM tab0 cor0

Parse error on line 1:
...ol0 AS col1, 81 DIV ( col1 ) * - col1 AS
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT ALL MIN( ALL + 80 ) AS col2, 27 FROM tab2 cor0 WHERE NOT ( NULL ) BETWEEN + 95 + + 63 AND + 0

Expected: ["NULL","27"] but got ["27","NULL"]
```

```sql
SELECT + ( COUNT( * ) ) DIV SUM( DISTINCT + col0 ) AS col0 FROM tab1 AS cor0

Parse error on line 1:
... ( COUNT( * ) ) DIV SUM( DISTINCT + col0
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'SUM'
```

```sql
SELECT MAX( ALL col1 ) + + COUNT( * ) + + 48 * + 20, SUM( DISTINCT col1 ) FROM tab1 AS cor0 WHERE - col1 NOT BETWEEN - col2 * col1 AND NULL

Expected: ["NULL","NULL"] but got ["1010","66"]
```

```sql
SELECT DISTINCT + CAST( NULL AS SIGNED ) AS col0, col0 FROM tab1

Expected: ["NULL","51","NULL","85","NULL","91"] but got ["51","51","85","85","91","91"]
```

```sql
SELECT DISTINCT * FROM tab2 cor0 JOIN tab2 cor1 ON + ( 90 ) IS NOT NULL, tab0 AS cor2

Parse error on line 1:
...+ ( 90 ) IS NOT NULL, tab0 AS cor2
-----------------------^
Expecting 'EOF', 'WITH', 'RPAR', 'PIVOT', 'UNPIVOT', 'IN', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'UNION', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PLUS', 'STAR', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'GROUP', 'LIMIT', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'COMMA'
```

```sql
SELECT - col1 DIV CAST( + col1 AS SIGNED ) FROM tab0 AS cor0

Parse error on line 1:
SELECT - col1 DIV CAST( + col1 AS SIGN
------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT * FROM tab2 AS cor0 WHERE NOT col0 DIV + col0 NOT IN ( + col1, col1 DIV + 60 )

Parse error on line 1:
...cor0 WHERE NOT col0 DIV + col0 NOT IN ( 
-----------------------^
Expecting 'EOF', 'WITH', 'RPAR', 'IN', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'UNION', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PLUS', 'STAR', 'GROUP', 'LIMIT', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT + col1 AS col0, - 8 * - + col2 - + ( CAST( NULL AS SIGNED ) + - col0 * + col0 ) * + 46 AS col0 FROM tab2 AS cor0

Expected: ["51","NULL","67","NULL","77","NULL"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT - ( COUNT( - 1 ) ) * ( - ( - ( + MAX( col1 ) ) ) - + 79 ) + SUM( 28 + col1 ) * COUNT( DISTINCT + col0 DIV 73 ) AS col1 FROM tab0

Parse error on line 1:
...NT( DISTINCT + col0 DIV 73 ) AS col1 FRO
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT 4 DIV MIN( ALL + col0 ) + 13 * - 64 FROM tab1

Parse error on line 1:
SELECT 4 DIV MIN( ALL + col0 ) + 
-------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MIN'
```

```sql
SELECT ALL 74 AS col1 FROM tab0 AS cor0 CROSS JOIN tab2 AS cor1

The hash of 9 returned values was different than expected. Check the sorting: 74, 74, 74, 74, 74, 74, 74, 74, 74
```

```sql
SELECT DISTINCT + 14 AS col2, + col0 - - CAST( NULL AS SIGNED ) AS col2 FROM tab2 AS cor0

Expected: ["14","NULL"] but got ["NULL","NULL"]
```

```sql
SELECT + - col1 / CAST( NULL AS SIGNED ) col0, + 69 + + ( + CAST( + + CAST( NULL AS SIGNED ) AS DECIMAL ) ) + - col1 - col2, + col0 * - - col2 AS col0 FROM tab2 AS cor0

The hash of 9 returned values was different than expected. Check the sorting: 1058, NULL, 1058, 2560, NULL, 2560, 4350, NULL, 4350
```

#### ☓ Ran 10012 tests as mysql

* 3171 failed
* 68% was OK

Time: 13344ms

---- ---- ---- ---- ---- ---- ----
### 82/125 `test/random/aggregates/slt_good_1.test`

_Mimic mysql_
```sql
SELECT * FROM tab2 AS cor0 WHERE NOT NULL IS NOT NULL

The hash of 9 returned values was different than expected. Check the sorting: 46, 51, 23, 64, 77, 40, 75, 67, 58
```

```sql
SELECT ALL * FROM tab1 AS cor0 WHERE NOT ( NULL ) BETWEEN NULL AND NULL

Query was expected to return results (but did not): []
```

```sql
SELECT ALL col1, + col2 col1 FROM tab2

Expected: ["51","23","67","58","77","40"] but got ["23","23","40","40","58","58"]
```

```sql
SELECT col2 DIV 30 col2 FROM tab1

Parse error on line 1:
SELECT col2 DIV 30 col2 FROM tab1
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT ALL col1 * ( 78 DIV 76 ) + - col2 AS col0 FROM tab1

Parse error on line 1:
...ECT ALL col1 * ( 78 DIV 76 ) + - col2 AS
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT ALL + MAX( col0 ) FROM tab2 AS cor0 WHERE col2 * + CAST( NULL AS DECIMAL ) IS NULL

Expected: ["75"] but got ["NULL"]
```

```sql
SELECT DISTINCT - - CAST( MAX( ALL + col1 ) AS SIGNED ) FROM tab2 AS cor0

g is not defined
```

```sql
SELECT ALL + - 72 DIV + col1 AS col2 FROM tab0 AS cor0

Parse error on line 1:
...LECT ALL + - 72 DIV + col1 AS col2 FROM 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT ALL col0 AS col1, col2 DIV - - col0 FROM tab0 cor0

Parse error on line 1:
...0 AS col1, col2 DIV - - col0 FROM tab0 c
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT ALL 93 DIV col0 * - - 78 DIV - col2 AS col2, 88 FROM tab2

Parse error on line 1:
SELECT ALL 93 DIV col0 * - - 78 DIV - 
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT SUM( ALL col2 ) AS col0 FROM tab1 AS cor0 WHERE NOT NULL IS NULL

Expected: ["NULL"] but got ["0"]
```

```sql
SELECT + - 43 DIV ( col0 ) FROM tab1 AS cor0

Parse error on line 1:
SELECT + - 43 DIV ( col0 ) FROM tab1 A
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT COUNT( col0 ) DIV COUNT( + ( + col0 ) ) FROM tab1

Parse error on line 1:
...T COUNT( col0 ) DIV COUNT( + ( + col0 ) 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT * FROM tab1 WHERE NOT ( - - 95 ) < - col2 * - 2 + + 55 DIV 79 * - - col1 + - col2

Parse error on line 1:
...- col2 * - 2 + + 55 DIV 79 * - - col1 + 
-----------------------^
Expecting 'EOF', 'WITH', 'RPAR', 'IN', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'UNION', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PLUS', 'STAR', 'GROUP', 'LIMIT', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL COUNT( - 81 ) + - + COUNT( * ) DIV MIN( DISTINCT col2 ) AS col2 FROM tab2 AS cor0

Parse error on line 1:
... - + COUNT( * ) DIV MIN( DISTINCT col2 )
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MIN'
```

```sql
SELECT DISTINCT * FROM tab1 AS cor0 CROSS JOIN tab1 AS cor1 WHERE NULL IS NULL

18 results returned but expected 54
```

```sql
SELECT ALL COUNT( * ) + - + 38 + 46 DIV SUM( ALL 22 ) AS col1 FROM tab0

Parse error on line 1:
...) + - + 38 + 46 DIV SUM( ALL 22 ) AS col
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'SUM'
```

```sql
SELECT DISTINCT + + CAST( NULL AS SIGNED ) - - - 40 col0, col0 FROM tab0 cor0

Expected: ["NULL","15","NULL","87","NULL","97"] but got ["15","15","87","87","97","97"]
```

```sql
SELECT ALL + CAST( NULL AS SIGNED ) AS col0 FROM tab2, tab0 AS cor0 WHERE 53 IS NOT NULL

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT ALL COUNT( * ) DIV CAST( + 9 AS SIGNED ) FROM tab0

Parse error on line 1:
... ALL COUNT( * ) DIV CAST( + 9 AS SIGNED 
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT 48 + + col2 AS col0, 47 + - + col2 + CAST( NULL AS DECIMAL ) + + col2 AS col0 FROM tab2 AS cor0

Expected: ["106","NULL","71","NULL","88","NULL"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT ALL + + CAST( - CAST( col2 AS DECIMAL ) AS SIGNED ) AS col2, + col2 AS col1 FROM tab1 AS cor0

Expected: ["-59","59","-68","68","-96","96"] but got ["NULL","59","NULL","68","NULL","96"]
```

```sql
SELECT DISTINCT + ( - col0 ) * - 22 AS col2, CAST( NULL AS SIGNED ) * + col2 * col1 col2 FROM tab1 AS cor0

Expected: ["1122","NULL","1870","NULL","2002","NULL"] but got ["NULL","NULL"]
```

```sql
SELECT + COUNT( ALL + - 30 ) AS col2, CAST( NULL AS SIGNED ) - + SUM( - + col0 ) AS col2 FROM tab2

Expected: ["3","NULL"] but got ["NULL"]
```

```sql
SELECT + CAST( NULL AS SIGNED ) + 36 / + - 21 AS col1, + CAST( NULL AS SIGNED ) * + COUNT( * ) AS col1 FROM tab2

Expected: ["NULL","NULL"] but got ["NULL"]
```

```sql
SELECT DISTINCT 8 DIV MAX( DISTINCT 11 ) FROM tab0 AS cor0

Parse error on line 1:
...LECT DISTINCT 8 DIV MAX( DISTINCT 11 ) F
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MAX'
```

#### ☓ Ran 10012 tests as mysql

* 3187 failed
* 68% was OK

Time: 13732ms

---- ---- ---- ---- ---- ---- ----
### 83/125 `test/random/aggregates/slt_good_2.test`

_Mimic mysql_
```sql
SELECT CAST( + SUM( ALL - 37 ) AS SIGNED ) AS col2 FROM tab0 AS cor0

g is not defined
```

```sql
SELECT DISTINCT + 97 col1 FROM tab2 AS cor0 WHERE NULL IS NOT NULL

Query was expected to return results (but did not): []
```

```sql
SELECT DISTINCT + - SUM( + CAST( NULL AS SIGNED ) ) + - 23 AS col1 FROM tab2 AS cor0

Expected: ["NULL"] but got ["-23"]
```

```sql
SELECT + - 40 DIV + + col2 AS col2 FROM tab2 AS cor0

Parse error on line 1:
SELECT + - 40 DIV + + col2 AS col2 FRO
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT ALL * FROM tab0 WHERE + - 57 IS NOT NULL

The hash of 9 returned values was different than expected. Check the sorting: 15, 81, 47, 87, 21, 10, 97, 1, 99
```

```sql
SELECT DISTINCT 34 DIV - col1 FROM tab0

Parse error on line 1:
...ECT DISTINCT 34 DIV - col1 FROM tab0
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT DISTINCT MIN( DISTINCT - - 27 ) + + - 50 AS col2, 4 + + 15 * - 47 AS col2 FROM tab2 AS cor0

Expected: ["-23","-701"] but got ["-701"]
```

```sql
SELECT ( + 0 ) + + ( + ( 4 ) ) DIV ( CAST( - 26 AS SIGNED ) + COUNT( * ) ) FROM tab0 AS cor0

Parse error on line 1:
...+ + ( + ( 4 ) ) DIV ( CAST( - 26 AS SIGN
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT + col2 DIV 66 + + col2 AS col2 FROM tab0 cor0

Parse error on line 1:
SELECT + col2 DIV 66 + + col2 AS col2 
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT DISTINCT col1 DIV col0 + + col1 * + col0 FROM tab1

Parse error on line 1:
...T DISTINCT col1 DIV col0 + + col1 * + co
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT + col0 + + 86 + 21 DIV + col2 + 7 FROM tab1

Parse error on line 1:
...ol0 + + 86 + 21 DIV + col2 + 7 FROM tab1
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT DISTINCT + 38 DIV COUNT( DISTINCT + ( - + col0 ) ) - - 13 + COUNT( * ) FROM tab2 cor0

Parse error on line 1:
...T DISTINCT + 38 DIV COUNT( DISTINCT + ( 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT DISTINCT - MIN( + - ( col2 ) ) AS col2, + CAST( NULL AS SIGNED ) col2 FROM tab0 cor0 WHERE NOT + col1 * 48 * col2 IS NULL

Expected: ["99","NULL"] but got ["NULL"]
```

```sql
SELECT DISTINCT + MIN( - 63 ) * + 42 * ( - - CAST( + + COUNT( * ) AS SIGNED ) ) - - 89 AS col2 FROM tab2

Expected: ["-7849"] but got ["NULL"]
```

```sql
SELECT ALL + CAST( NULL AS SIGNED ) FROM tab2 cor0 CROSS JOIN tab1 AS cor1

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT DISTINCT + SUM( ALL + col2 ) DIV MAX( col2 - col1 DIV 91 ) AS col1 FROM tab2

Parse error on line 1:
...M( ALL + col2 ) DIV MAX( col2 - col1 DIV
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MAX'
```

```sql
SELECT DISTINCT * FROM tab0, tab1 AS cor0 WHERE NOT + + 45 IS NULL

18 results returned but expected 54
```

```sql
SELECT CAST( NULL AS SIGNED ) + - + 22 AS col2, CAST( NULL AS SIGNED ) + ( - 74 ) * + ( + 83 ) AS col0 FROM tab1 AS cor0 CROSS JOIN tab1 cor1

The hash of 18 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT - COUNT( * ) DIV SUM( DISTINCT - + 28 ) + + 86 AS col0 FROM tab2

Parse error on line 1:
...CT - COUNT( * ) DIV SUM( DISTINCT - + 28
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'SUM'
```

```sql
SELECT ALL + 10 AS col0, col0 * + - CAST( NULL AS DECIMAL ) * - CAST( - + col0 AS SIGNED ) AS col0 FROM tab2

Expected: ["10","NULL","10","NULL","10","NULL"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT col1 * + ( - CAST( NULL AS SIGNED ) ) + col2 * + 9 / 48 * - + 49 AS col0, col0 FROM tab0

Expected: ["NULL","15","NULL","87","NULL","97"] but got ["15","15","87","87","97","97"]
```

```sql
SELECT + + col0 * ( 33 DIV col1 + col1 ) FROM tab2 AS cor0

Parse error on line 1:
...ECT + + col0 * ( 33 DIV col1 + col1 ) FR
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT DISTINCT col1 AS col2, - CAST( NULL AS SIGNED ) col2 FROM tab2 AS cor0

Expected: ["51","NULL","67","NULL","77","NULL"] but got ["NULL","NULL"]
```

```sql
SELECT + CAST( + col2 AS SIGNED ), col0 + col1 AS col2 FROM tab1 AS cor0 WHERE + col0 >= + col1 + col1 DIV + 58 * ( col2 )

Parse error on line 1:
...l0 >= + col1 + col1 DIV + 58 * ( col2 )
-----------------------^
Expecting 'EOF', 'WITH', 'RPAR', 'IN', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'UNION', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PLUS', 'STAR', 'GROUP', 'LIMIT', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL - + 55 * - CAST( NULL AS SIGNED ) AS col1 FROM ( tab1 AS cor0 CROSS JOIN tab0 AS cor1 )

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT ALL + + col0 DIV CAST( - col1 AS SIGNED ) FROM tab0 AS cor0

Parse error on line 1:
...CT ALL + + col0 DIV CAST( - col1 AS SIGN
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT + AVG ( ALL - CAST( NULL AS DECIMAL ) ), 42 / + CAST( NULL AS SIGNED ) - + SUM( + - col1 ) FROM tab0

Expected: ["NULL","NULL"] but got ["0","NULL"]
```

#### ☓ Ran 10012 tests as mysql

* 3139 failed
* 68% was OK

Time: 13856ms

---- ---- ---- ---- ---- ---- ----
### 84/125 `test/random/aggregates/slt_good_3.test`

_Mimic mysql_
```sql
SELECT ALL + 54 DIV 64 AS col0 FROM tab1 AS cor0

Parse error on line 1:
SELECT ALL + 54 DIV 64 AS col0 FROM tab1
--------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT ALL - CAST( + MAX( DISTINCT - col2 ) AS SIGNED ) AS col2 FROM tab2 WHERE NOT ( NULL ) NOT IN ( + col0 / + col1 / - - 59 * 70 / col0 )

g is not defined
```

```sql
SELECT + col2 DIV - col1 * + col2 * - col2 AS col1 FROM tab2

Parse error on line 1:
SELECT + col2 DIV - col1 * + col2 * - 
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT ALL * FROM tab0 WHERE - col0 - + col2 + + col0 IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT DISTINCT - + col2 AS col0, - CAST( NULL AS SIGNED ) AS col0 FROM tab0 AS cor0

Expected: ["-10","NULL","-47","NULL","-99","NULL"] but got ["NULL","NULL"]
```

```sql
SELECT * FROM tab2 AS cor0 WHERE 32 IS NOT NULL

The hash of 9 returned values was different than expected. Check the sorting: 46, 51, 23, 64, 77, 40, 75, 67, 58
```

```sql
SELECT 88 col0, 94 AS col0 FROM tab0

Expected: ["88","94","88","94","88","94"] but got ["94","94","94","94","94","94"]
```

```sql
SELECT DISTINCT - 40 DIV + COUNT( * ) - CAST( 62 AS SIGNED ) FROM tab0

Parse error on line 1:
...T DISTINCT - 40 DIV + COUNT( * ) - CAST(
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT col2 DIV col0 * col2 DIV + col2 AS col0 FROM tab1

Parse error on line 1:
SELECT col2 DIV col0 * col2 DIV + co
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT DISTINCT SUM( + CAST( NULL AS SIGNED ) ) - 55 AS col0 FROM tab0

Expected: ["NULL"] but got ["-55"]
```

```sql
SELECT DISTINCT 68 * - ( - col1 DIV col2 ) FROM tab1

Parse error on line 1:
...NCT 68 * - ( - col1 DIV col2 ) FROM tab1
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT DISTINCT + 31 DIV ( + COUNT( * ) ) FROM tab2

Parse error on line 1:
...T DISTINCT + 31 DIV ( + COUNT( * ) ) FRO
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT ALL + COUNT( * ) - + MIN( - + col1 ) FROM tab0 WHERE NOT col2 = + + 78 * - - col2 + - col1

Expected: ["84"] but got ["NULL"]
```

```sql
SELECT DISTINCT * FROM ( tab1 AS cor0 CROSS JOIN tab1 AS cor1 ) WHERE NULL IS NULL

18 results returned but expected 54
```

```sql
SELECT DISTINCT 22 + - + col2 DIV CAST( - + CAST( - col1 AS SIGNED ) AS SIGNED ) + - col1 FROM tab1

Parse error on line 1:
...T 22 + - + col2 DIV CAST( - + CAST( - co
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT - 2 - - 86 DIV COUNT( * ) AS col0 FROM tab1 AS cor0

Parse error on line 1:
...LECT - 2 - - 86 DIV COUNT( * ) AS col0 F
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT ALL + - ( - 73 ) * - + CAST( NULL AS SIGNED ) AS col1, col1 FROM tab2 AS cor0

Expected: ["NULL","51","NULL","67","NULL","77"] but got ["51","51","67","67","77","77"]
```

```sql
SELECT DISTINCT - 57 DIV MIN( DISTINCT col1 ) AS col2, - 78 AS col0 FROM tab0 AS cor0

Parse error on line 1:
...T DISTINCT - 57 DIV MIN( DISTINCT col1 )
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MIN'
```

```sql
SELECT 4 + + CAST( NULL AS SIGNED ) FROM tab2 cor0 CROSS JOIN tab1 AS cor1

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT 50 + COUNT( * ) + 41 DIV SUM( - 36 * - 13 ) col1 FROM tab2

Parse error on line 1:
...COUNT( * ) + 41 DIV SUM( - 36 * - 13 ) c
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'SUM'
```

```sql
SELECT + CAST( NULL AS SIGNED ) * + col1 + + col2 / - col2 AS col0 FROM tab0 WHERE NOT - col2 >= - col1 + col0

Expected: ["NULL","NULL"] but got ["NULL"]
```

```sql
SELECT - COUNT( * ) * + CAST( NULL AS DECIMAL ) AS col1, 1 FROM tab2 cor0

Expected: ["NULL","1"] but got ["1","NULL"]
```

```sql
SELECT ALL col0 FROM tab0 WHERE NOT + col2 DIV + - col1 + - + ( + col1 ) NOT IN ( - col1 )

Parse error on line 1:
...b0 WHERE NOT + col2 DIV + - col1 + - + (
-----------------------^
Expecting 'EOF', 'WITH', 'RPAR', 'IN', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'UNION', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PLUS', 'STAR', 'GROUP', 'LIMIT', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT DISTINCT 3 AS col0, - col1 * + CAST( NULL AS SIGNED ) col0 FROM tab2 AS cor0

Expected: ["3","NULL"] but got ["NULL","NULL"]
```

```sql
SELECT 29 DIV MAX( - + col2 ) FROM tab1

Parse error on line 1:
SELECT 29 DIV MAX( - + col2 ) FROM
--------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MAX'
```

```sql
SELECT ( - col0 ) * + - col2 * + 80 AS col2, - CAST( NULL AS SIGNED ) AS col2 FROM tab0 AS cor0

Expected: ["56400","NULL","69600","NULL","768240","NULL"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT col1, + col1, col2 + + + CAST( NULL AS SIGNED ) AS col0 FROM tab1 AS cor0

The hash of 9 returned values was different than expected. Check the sorting: 14, 14, NULL, 47, 47, NULL, 5, 5, NULL
```

#### ☓ Ran 10012 tests as mysql

* 3177 failed
* 68% was OK

Time: 14363ms

---- ---- ---- ---- ---- ---- ----
### 85/125 `test/random/aggregates/slt_good_4.test`

_Mimic mysql_
```sql
SELECT DISTINCT 63 DIV col1 AS col2 FROM tab2

Parse error on line 1:
...ECT DISTINCT 63 DIV col1 AS col2 FROM ta
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL * FROM tab0 AS cor0 WHERE col0 - - - col2 - col0 * + - col0 IS NOT NULL

The hash of 9 returned values was different than expected. Check the sorting: 15, 81, 47, 87, 21, 10, 97, 1, 99
```

```sql
SELECT * FROM tab0 cor0 WHERE + 21 >= - - 76 * + + CAST( - + CAST( NULL AS SIGNED ) AS SIGNED )

Query was expected to return results (but did not): []
```

```sql
SELECT ALL - + ( - 66 ) * + col2 DIV + col2 AS col0 FROM tab1 AS cor0

Parse error on line 1:
...- 66 ) * + col2 DIV + col2 AS col0 FROM 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT - 55 AS col0, COUNT( * ) AS col0 FROM tab0

Expected: ["-55","3"] but got ["3"]
```

```sql
SELECT + + 60 DIV - - col1 AS col0 FROM tab2 AS cor0

Parse error on line 1:
SELECT + + 60 DIV - - col1 AS col0 FRO
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT col2 AS col0, - 95 DIV 58 AS col0 FROM tab0 AS cor0

Parse error on line 1:
...2 AS col0, - 95 DIV 58 AS col0 FROM tab0
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT + + CAST( NULL AS SIGNED ) col1 FROM tab1 AS cor0 CROSS JOIN tab0 cor1

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT - CAST( + COUNT( DISTINCT + - col2 ) AS SIGNED ) FROM tab1

g is not defined
```

```sql
SELECT DISTINCT - 25 * 14 * - CAST( + + COUNT( * ) AS SIGNED ) * ( - MIN( 88 ) ) AS col0 FROM tab1

Expected: ["-92400"] but got ["NULL"]
```

```sql
SELECT - 62 DIV ( + 52 * col1 ) + 30 * - col1 AS col2 FROM tab1

Parse error on line 1:
SELECT - 62 DIV ( + 52 * col1 ) + 30
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT DISTINCT MIN( 38 ) AS col2 FROM tab1 WHERE NOT - col1 NOT BETWEEN NULL AND ( NULL )

Expected: ["NULL"] but got ["38"]
```

```sql
SELECT ALL 91 DIV COUNT( * ) DIV - + COUNT( * ) FROM tab1, tab0 cor0

Parse error on line 1:
SELECT ALL 91 DIV COUNT( * ) DIV - + C
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT DISTINCT COUNT( * ) AS col1, - 99 * + 9 + + ( + 42 ) DIV MIN( - 92 ) AS col2 FROM tab2 AS cor0

Parse error on line 1:
... 9 + + ( + 42 ) DIV MIN( - 92 ) AS col2 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MIN'
```

```sql
SELECT ALL col2, CAST( NULL AS SIGNED ), + ( + col0 ) FROM tab1

The hash of 9 returned values was different than expected. Check the sorting: 59, NULL, 85, 68, NULL, 91, 96, NULL, 51
```

```sql
SELECT ALL - CAST( CAST( - col1 AS DECIMAL ) AS SIGNED ) * - + col1 + + col0 + 97 FROM tab1 AS cor0

Expected: ["-2021","-48","157"] but got ["NULL","NULL","NULL"]
```

```sql
SELECT + 23 / - SUM( ALL col2 ) FROM tab0 WHERE ( + - 14 ) IS NULL

Expected: ["NULL"] but got ["-Infinity"]
```

```sql
SELECT col1, - CAST( NULL AS SIGNED ) * + col2 AS col1 FROM tab0 cor0

Expected: ["1","NULL","21","NULL","81","NULL"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT * FROM tab1 WHERE - col2 + col2 <> 57 DIV - 11 - - + CAST( col1 AS DECIMAL )

Parse error on line 1:
...- col2 + col2 <> 57 DIV - 11 - - + CAST(
-----------------------^
Expecting 'EOF', 'WITH', 'RPAR', 'IN', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'UNION', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PLUS', 'STAR', 'GROUP', 'LIMIT', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT - 7 + - COUNT( * ) DIV MAX( col1 * + 86 ) FROM tab2

Parse error on line 1:
... + - COUNT( * ) DIV MAX( col1 * + 86 ) F
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MAX'
```

```sql
SELECT DISTINCT * FROM tab2, tab2 AS cor0 WHERE 46 IS NOT NULL

18 results returned but expected 54
```

```sql
SELECT + col2 + - - CAST( NULL AS SIGNED ) - + + ( + + col0 ) AS col0, col0 FROM tab1 AS cor0

Expected: ["NULL","51","NULL","85","NULL","91"] but got ["51","51","85","85","91","91"]
```

```sql
SELECT + COUNT( * ) + - 90 DIV SUM( DISTINCT + col0 ) FROM tab0 AS cor0

Parse error on line 1:
...UNT( * ) + - 90 DIV SUM( DISTINCT + col0
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'SUM'
```

```sql
SELECT + + COUNT( * ) AS col1, MIN( - - 79 ) AS col1 FROM tab1 WHERE NOT NULL IS NULL

Expected: ["0","NULL"] but got ["NULL"]
```

```sql
SELECT - COUNT( * ) * ( + COUNT( * ) ) * MAX( - col0 DIV col2 ) + 66 AS col0 FROM tab1 AS cor0

Parse error on line 1:
...* ) ) * MAX( - col0 DIV col2 ) + 66 AS c
-----------------------^
Expecting 'EOF', 'COMMA', 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT - + SUM( DISTINCT - col1 ) AS col0 FROM tab0 WHERE NOT NULL IS NULL

Expected: ["NULL"] but got ["0"]
```

```sql
SELECT DISTINCT - 72 + - SUM( ALL col2 + 61 DIV 11 ) col2 FROM tab0

Parse error on line 1:
... SUM( ALL col2 + 61 DIV 11 ) col2 FROM t
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT DISTINCT col1 AS col1, + 34 / + CAST( NULL AS SIGNED ) + col2 * - - col1 * + 65 col1 FROM tab2

Expected: ["51","NULL","67","NULL","77","NULL"] but got ["NULL","NULL"]
```

#### ☓ Ran 10012 tests as mysql

* 3253 failed
* 67% was OK

Time: 14401ms

---- ---- ---- ---- ---- ---- ----
### 86/125 `test/random/aggregates/slt_good_5.test`

_Mimic mysql_
```sql
SELECT ALL * FROM tab1 WHERE NOT ( NOT ( + + 34 IS NOT NULL ) )

The hash of 9 returned values was different than expected. Check the sorting: 51, 14, 96, 85, 5, 59, 91, 47, 68
```

```sql
SELECT col2 DIV col2, 14 AS col1 FROM tab0

Parse error on line 1:
SELECT col2 DIV col2, 14 AS col1 FRO
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT - col1 AS col2 FROM tab0 AS cor0 WHERE NOT - 50 * 38 IS NOT NULL

Query was expected to return results (but did not): []
```

```sql
SELECT col2, 95 AS col2 FROM tab0

Expected: ["10","95","47","95","99","95"] but got ["95","95","95","95","95","95"]
```

```sql
SELECT + col0 + - col2 DIV + col1 FROM tab1

Parse error on line 1:
...+ col0 + - col2 DIV + col1 FROM tab1
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT ALL COUNT( * ) + - - CAST( - COUNT( * ) AS SIGNED ) * 14 FROM tab2

Expected: ["-39"] but got ["NULL"]
```

```sql
SELECT DISTINCT - col1 DIV - CAST( + col0 AS SIGNED ) col1 FROM tab0

Parse error on line 1:
...DISTINCT - col1 DIV - CAST( + col0 AS SI
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT - CAST( AVG ( + col0 ) AS SIGNED ) FROM tab0 AS cor0

g is not defined
```

```sql
SELECT ALL 50 DIV COUNT( * ) AS col0 FROM tab1

Parse error on line 1:
SELECT ALL 50 DIV COUNT( * ) AS col0 F
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT ALL - - SUM( ALL + col0 ) FROM tab2 AS cor0 WHERE NOT 30 NOT IN ( - 49, - col0 )

Expected: ["NULL"] but got ["185"]
```

```sql
SELECT col2, col0 * + col1 + CAST( NULL AS SIGNED ) AS col2 FROM tab1 AS cor0

Expected: ["59","NULL","68","NULL","96","NULL"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT ALL + - 93 AS col2, + col2 DIV ( 90 ) + - - col2 col2 FROM tab0 AS cor0 WHERE NOT + ( - 70 ) BETWEEN - col1 AND - col0 + 62

Parse error on line 1:
...AS col2, + col2 DIV ( 90 ) + - - col2 co
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT - 29 DIV 6 AS col2 FROM tab0

Parse error on line 1:
SELECT - 29 DIV 6 AS col2 FROM tab0
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT DISTINCT - 75 * COUNT( * ) col0, - CAST( NULL AS SIGNED ) * - MIN( CAST( NULL AS DECIMAL ) ) AS col0 FROM tab0

Expected: ["-225","NULL"] but got ["NULL"]
```

```sql
SELECT ALL + ( - - 96 ) + + CAST( NULL AS SIGNED ) FROM tab0, tab2 AS cor0

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT * FROM tab2 AS cor0 LEFT JOIN tab1 AS cor1 ON NOT NULL IS NOT NULL, tab1 AS cor2

Parse error on line 1:
...NOT NULL IS NOT NULL, tab1 AS cor2
-----------------------^
Expecting 'EOF', 'WITH', 'RPAR', 'PIVOT', 'UNPIVOT', 'IN', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'UNION', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PLUS', 'STAR', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'GROUP', 'LIMIT', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'COMMA'
```

```sql
SELECT + col0 + 15 DIV CAST( + col1 AS SIGNED ) + - col2 AS col1 FROM tab0

Parse error on line 1:
...ECT + col0 + 15 DIV CAST( + col1 AS SIGN
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT ALL - col0 + CAST( NULL AS SIGNED ) AS col0, - col1 AS col0 FROM tab1

Expected: ["NULL","-14","NULL","-47","NULL","-5"] but got ["-14","-14","-47","-47","-5","-5"]
```

```sql
SELECT * FROM tab2 WHERE NOT + 74 <= - - col2 - 26

6 results returned but expected 9
```

```sql
SELECT ( - COUNT( * ) ) * + SUM( DISTINCT + col2 DIV - 66 ) AS col1 FROM tab0

Parse error on line 1:
...UM( DISTINCT + col2 DIV - 66 ) AS col1 F
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT - - 83 DIV MIN( col1 ) AS col0 FROM tab2 AS cor0

Parse error on line 1:
SELECT - - 83 DIV MIN( col1 ) AS col0 
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MIN'
```

```sql
SELECT - col0, CAST( NULL AS DECIMAL ) / + - 92 AS col1, - + CAST( + col0 AS SIGNED ) + + + 43 AS col0 FROM tab0

The hash of 9 returned values was different than expected. Check the sorting: -15, NULL, 28, -87, NULL, -44, -97, NULL, -54
```

```sql
SELECT ALL CAST( - ( - CAST( + + 42 AS DECIMAL ) ) AS SIGNED ) AS col0 FROM tab2

Expected: ["42","42","42"] but got ["NULL","NULL","NULL"]
```

```sql
SELECT + COUNT( * ) DIV MAX( + col2 ) FROM tab0

Parse error on line 1:
...CT + COUNT( * ) DIV MAX( + col2 ) FROM t
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MAX'
```

#### ☓ Ran 10012 tests as mysql

* 3147 failed
* 68% was OK

Time: 14762ms

---- ---- ---- ---- ---- ---- ----
### 87/125 `test/random/aggregates/slt_good_6.test`

_Mimic mysql_
```sql
SELECT * FROM tab2 WHERE NULL <= 31

Query was expected to return results (but did not): []
```

```sql
SELECT DISTINCT + col1 * - col0 DIV col0 * col1 + 69 FROM tab2

Parse error on line 1:
...+ col1 * - col0 DIV col0 * col1 + 69 FRO
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT DISTINCT COUNT( * ) DIV + 45 AS col1, 95 FROM tab0

Parse error on line 1:
...INCT COUNT( * ) DIV + 45 AS col1, 95 FRO
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT DISTINCT col2 DIV - - col0 FROM tab2

Parse error on line 1:
...T DISTINCT col2 DIV - - col0 FROM tab2
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT ALL * FROM tab0 WHERE - - col1 + + col0 - col2 + + + ( - 86 ) * 67 * + col0 NOT BETWEEN + col1 AND ( NULL )

The hash of 9 returned values was different than expected. Check the sorting: 15, 81, 47, 87, 21, 10, 97, 1, 99
```

```sql
SELECT DISTINCT - col2 AS col2, 71 AS col2 FROM tab1

Expected: ["-59","71","-68","71","-96","71"] but got ["71","71"]
```

```sql
SELECT ( + CAST( COUNT( * ) AS SIGNED ) ) * + CAST( NULL AS SIGNED ) / - - 78 FROM tab0

g is not defined
```

```sql
SELECT - 90 DIV 7 - + ( - + 8 ) DIV + 50 col1 FROM tab0 AS cor0

Parse error on line 1:
SELECT - 90 DIV 7 - + ( - + 8 ) DIV 
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT + SUM( ALL - 65 ) FROM tab0 AS cor0 WHERE NOT NULL >= 49 + - 41 / 39 * col1 * col1 * - 76

Expected: ["NULL"] but got ["0"]
```

```sql
SELECT + + CAST( - - COUNT( * ) AS SIGNED ) * - + COUNT( * ) AS col1 FROM tab2 AS cor0 WHERE + col2 IS NULL

Expected: ["0"] but got ["NULL"]
```

```sql
SELECT ALL 72 DIV COUNT( * ) * - 26 + ( - 89 ) AS col2 FROM tab0

Parse error on line 1:
SELECT ALL 72 DIV COUNT( * ) * - 26 + 
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT CAST( NULL AS SIGNED ) FROM tab2 AS cor0 CROSS JOIN tab2 cor1

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT ALL + col1 DIV CAST( - - col1 AS SIGNED ) AS col1 FROM tab1 AS cor0

Parse error on line 1:
...LECT ALL + col1 DIV CAST( - - col1 AS SI
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT + + CAST( - CAST( - - col2 AS DECIMAL ) AS SIGNED ) AS col2 FROM tab0 AS cor0

Expected: ["-10","-47","-99"] but got ["NULL","NULL","NULL"]
```

```sql
SELECT + 98 + 98 + + - col2 DIV ( + col0 ) FROM tab0 AS cor0

Parse error on line 1:
...+ 98 + + - col2 DIV ( + col0 ) FROM tab0
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT col2 * - + col2 AS col0, CAST( NULL AS SIGNED ) AS col0 FROM tab0

Expected: ["-100","NULL","-2209","NULL","-9801","NULL"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT * FROM tab1 AS cor0 WHERE ( NOT - col0 > - col0 + + 40 + + 19 )

6 results returned but expected 9
```

```sql
SELECT - 99 + 39 DIV MIN( ALL - 29 ) AS col2 FROM tab2

Parse error on line 1:
...ELECT - 99 + 39 DIV MIN( ALL - 29 ) AS c
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MIN'
```

```sql
SELECT DISTINCT - col0 DIV + col1 AS col1 FROM tab2 AS cor0 WHERE - 47 + - col0 < + 33 - 40

Parse error on line 1:
...DISTINCT - col0 DIV + col1 AS col1 FROM 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT + CAST( NULL AS DECIMAL ) * - col0 AS col0, col0 AS col0 FROM tab1 AS cor0

Expected: ["NULL","51","NULL","85","NULL","91"] but got ["51","51","85","85","91","91"]
```

```sql
SELECT DISTINCT * FROM tab0 WHERE ( - col2 ) DIV - col1 IN ( + + col0 + - + col0 )

Parse error on line 1:
...b0 WHERE ( - col2 ) DIV - col1 IN ( + + 
-----------------------^
Expecting 'EOF', 'WITH', 'RPAR', 'IN', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'UNION', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PLUS', 'STAR', 'GROUP', 'LIMIT', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT DISTINCT + 82 DIV SUM( DISTINCT + ( + ( col1 ) ) ) col2 FROM tab0

Parse error on line 1:
...T DISTINCT + 82 DIV SUM( DISTINCT + ( + 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'SUM'
```

```sql
SELECT col0 * + ( + col1 DIV col2 ) FROM tab2 AS cor0 WHERE NOT col2 IS NULL

Parse error on line 1:
...T col0 * + ( + col1 DIV col2 ) FROM tab2
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT * FROM tab1 cor0 LEFT JOIN tab0 AS cor1 ON NOT NULL < ( NULL )

The hash of 18 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT DISTINCT 9 + COUNT( * ) AS col2, AVG ( DISTINCT + + col2 ) col2, - MAX( col2 ) AS col0 FROM tab2 AS cor0 WHERE NOT 13 IS NOT NULL

Expected: ["9","NULL","NULL"] but got ["NULL","NULL"]
```

```sql
SELECT ALL - col2 DIV + 31 FROM tab1 AS cor0

Parse error on line 1:
...LECT ALL - col2 DIV + 31 FROM tab1 AS co
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT DISTINCT + - ( + col2 ) + - + col0 AS col1, CAST( NULL AS SIGNED ) AS col1 FROM tab0 AS cor0

Expected: ["-196","NULL","-62","NULL","-97","NULL"] but got ["NULL","NULL"]
```

#### ☓ Ran 10012 tests as mysql

* 3184 failed
* 68% was OK

Time: 14253ms

---- ---- ---- ---- ---- ---- ----
### 88/125 `test/random/aggregates/slt_good_7.test`

_Mimic mysql_
```sql
SELECT col0 AS col1 FROM tab2 AS cor0 WHERE NOT NULL BETWEEN col0 / col0 AND NULL

Query was expected to return results (but did not): []
```

```sql
SELECT DISTINCT - + col2 + col1 DIV - + 86 AS col1 FROM tab1 AS cor0

Parse error on line 1:
...- + col2 + col1 DIV - + 86 AS col1 FROM 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT col1, - col0 + - - ( - + 25 ) AS col0, col1 FROM tab0

The hash of 9 returned values was different than expected. Check the sorting: 1, -122, 1, 21, -112, 21, 81, -40, 81
```

```sql
SELECT ALL + col2 DIV 28 AS col1 FROM tab0

Parse error on line 1:
...LECT ALL + col2 DIV 28 AS col1 FROM tab0
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT * FROM tab2 cor0 LEFT OUTER JOIN tab2 AS cor1 ON NOT - + 94 = NULL

The hash of 18 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT - 75 DIV col1 AS col0 FROM tab1

Parse error on line 1:
SELECT - 75 DIV col1 AS col0 FROM ta
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT + COUNT( - col0 ) AS col2 FROM tab0 AS cor0 WHERE NOT col2 <> - col2

Expected: ["0"] but got ["3"]
```

```sql
SELECT DISTINCT - col1 DIV + ( ( + 40 ) ) FROM tab0

Parse error on line 1:
...DISTINCT - col1 DIV + ( ( + 40 ) ) FROM 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT col0, + CAST( NULL AS SIGNED ) AS col0 FROM tab0 WHERE + col0 IS NOT NULL

Expected: ["15","NULL","87","NULL","97","NULL"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT DISTINCT + 48 * - SUM( ALL + - col2 ) FROM tab1 WHERE ( NOT ( NULL ) > NULL )

Expected: ["NULL"] but got ["0"]
```

```sql
SELECT ALL - + COUNT( * ) AS col0, MAX( CAST( NULL AS SIGNED ) ) AS col0 FROM tab0 AS cor0

Expected: ["-3","NULL"] but got ["NULL"]
```

```sql
SELECT * FROM tab2 cor0 WHERE + col2 * col2 DIV + 50 <> col1

Parse error on line 1:
...WHERE + col2 * col2 DIV + 50 <> col1
-----------------------^
Expecting 'EOF', 'WITH', 'RPAR', 'IN', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'UNION', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PLUS', 'STAR', 'GROUP', 'LIMIT', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL 99 DIV ( ( col1 ) ) AS col0 FROM tab1

Parse error on line 1:
SELECT ALL 99 DIV ( ( col1 ) ) AS col0
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT + CAST( + MAX( - 43 ) AS SIGNED ) FROM tab0 AS cor0 WHERE NOT NULL >= ( - col1 ) + col2

g is not defined
```

```sql
SELECT ALL + CAST( NULL AS SIGNED ) FROM tab2 AS cor0 WHERE NOT + 87 < - - 14 + + 1 * col1

Expected: ["NULL","NULL"] but got ["NULL","NULL","NULL"]
```

```sql
SELECT ALL CAST( COUNT( * ) AS SIGNED ) * + 79 * + COUNT( * ) col2 FROM tab1 cor0

Expected: ["711"] but got ["NULL"]
```

```sql
SELECT - col0 * - CAST( NULL AS SIGNED ) * + col2 AS col1, - col0 AS col1 FROM tab1 AS cor0

Expected: ["NULL","-51","NULL","-85","NULL","-91"] but got ["-51","-51","-85","-85","-91","-91"]
```

```sql
SELECT DISTINCT MIN( - col2 ) DIV COUNT( * ) + + ( 22 ) FROM tab0 AS cor0

Parse error on line 1:
...T MIN( - col2 ) DIV COUNT( * ) + + ( 22 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT - - CAST( NULL AS DECIMAL ) AS col0, - ( + + 28 ) FROM tab2 AS cor0 CROSS JOIN tab1 AS cor1

The hash of 18 returned values was different than expected. Check the sorting: NULL, -28, NULL, -28, NULL, -28, NULL, -28, NULL, -28, NULL, -28, NULL, -28, NULL, -28, NULL, -28
```

```sql
SELECT DISTINCT COUNT( * ) * 70 + + COUNT( * ) DIV SUM( DISTINCT - col1 ) FROM tab1

Parse error on line 1:
... + + COUNT( * ) DIV SUM( DISTINCT - col1
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'SUM'
```

```sql
SELECT DISTINCT * FROM tab2 AS cor0 CROSS JOIN tab1 AS cor1 WHERE ( - 49 ) IS NOT NULL

18 results returned but expected 54
```

```sql
SELECT DISTINCT 26 * col0 - + col1 * - col0 + col1 + - + 23 AS col0, - CAST( NULL AS SIGNED ) col0 FROM tab2

Expected: ["3570","NULL","6646","NULL","7019","NULL"] but got ["NULL","NULL"]
```

```sql
SELECT DISTINCT ( - - col0 ) DIV CAST( - + 89 AS SIGNED ) FROM tab1 cor0

Parse error on line 1:
...CT ( - - col0 ) DIV CAST( - + 89 AS SIGN
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT - 12 AS col0, + 6 DIV MIN( + 24 ) FROM tab2 AS cor0

Parse error on line 1:
...12 AS col0, + 6 DIV MIN( + 24 ) FROM tab
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MIN'
```

```sql
SELECT - col2 * + ( 12 DIV col2 ) - col0 FROM tab2

Parse error on line 1:
...ECT - col2 * + ( 12 DIV col2 ) - col0 FR
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT - + COUNT( * ) * - + 68 - + SUM( DISTINCT col0 ) col2, + MAX( DISTINCT col2 ) AS col2 FROM tab2 WHERE NOT NULL IS NULL

Expected: ["NULL","NULL"] but got ["NULL"]
```

```sql
SELECT ( + - COUNT( * ) ) DIV MAX( ALL + col2 ) AS col1 FROM tab2 AS cor0

Parse error on line 1:
... - COUNT( * ) ) DIV MAX( ALL + col2 ) AS
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MAX'
```

```sql
SELECT DISTINCT * FROM tab1 AS cor0 LEFT JOIN tab1 cor1 ON NOT 86 IS NOT NULL, tab0 AS cor2

Parse error on line 1:
...N NOT 86 IS NOT NULL, tab0 AS cor2
-----------------------^
Expecting 'EOF', 'WITH', 'RPAR', 'PIVOT', 'UNPIVOT', 'IN', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'UNION', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PLUS', 'STAR', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'GROUP', 'LIMIT', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'COMMA'
```

```sql
SELECT DISTINCT + 83 AS col1 FROM tab2 AS cor0 WHERE NULL <> NULL

Query was expected to return results (but did not): []
```

#### ☓ Ran 10012 tests as mysql

* 3176 failed
* 68% was OK

Time: 14294ms

---- ---- ---- ---- ---- ---- ----
### 89/125 `test/random/aggregates/slt_good_8.test`

_Mimic mysql_
```sql
SELECT DISTINCT - COUNT( * ) FROM tab1 WHERE NOT - CAST( - col0 AS SIGNED ) IN ( col2, + col2 )

Expected: ["-3"] but got ["0"]
```

```sql
SELECT ALL - col2 DIV - + col1 FROM tab0

Parse error on line 1:
...LECT ALL - col2 DIV - + col1 FROM tab0
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT DISTINCT * FROM tab2 AS cor0 WHERE NOT NULL BETWEEN NULL AND - col1

Query was expected to return results (but did not): []
```

```sql
SELECT 14 AS col1 FROM tab2 AS cor0 CROSS JOIN tab2 cor1

The hash of 9 returned values was different than expected. Check the sorting: 14, 14, 14, 14, 14, 14, 14, 14, 14
```

```sql
SELECT - + col0 DIV + + 24 FROM tab1 AS cor0

Parse error on line 1:
SELECT - + col0 DIV + + 24 FROM tab1 AS 
--------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT + SUM( DISTINCT col0 ) * SUM( 9 ) DIV 32 AS col2 FROM tab1

Parse error on line 1:
...l0 ) * SUM( 9 ) DIV 32 AS col2 FROM tab1
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT - 25 * + CAST( + + COUNT( ALL - 61 ) AS SIGNED ) AS col2 FROM tab2 AS cor0

g is not defined
```

```sql
SELECT ALL + ( - AVG ( - CAST( NULL AS SIGNED ) ) ) + - ( - 23 ) FROM tab0

Expected: ["NULL"] but got ["23"]
```

```sql
SELECT ALL MIN( - col1 ) DIV COUNT( * ) FROM tab2 AS cor0

Parse error on line 1:
...L MIN( - col1 ) DIV COUNT( * ) FROM tab2
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT ALL + + ( col0 ) DIV col0 + + col2 AS col1 FROM tab1 AS cor0

Parse error on line 1:
...LL + + ( col0 ) DIV col0 + + col2 AS col
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT DISTINCT - MIN( + ( - col0 ) ) * - 20 + 79 AS col1 FROM tab2 AS cor0 WHERE NOT + col0 IN ( - col1 * col2 )

Expected: ["-1421"] but got ["NULL"]
```

```sql
SELECT DISTINCT * FROM tab0 AS cor0 CROSS JOIN tab0 AS cor1 WHERE ( 36 ) IS NOT NULL

18 results returned but expected 54
```

```sql
SELECT + CAST( NULL AS SIGNED ) + - 47 AS col1 FROM tab2 AS cor0 CROSS JOIN tab1 AS cor1

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT + CAST( NULL AS SIGNED ) AS col1, CAST( - col2 AS SIGNED ) col1 FROM tab0 AS cor0

Expected: ["NULL","-10","NULL","-47","NULL","-99"] but got ["-10","-10","-47","-47","-99","-99"]
```

```sql
SELECT - 62 + + col1 + - col0 DIV ( - + col1 ) + + 36 + - col1 * - - col2 AS col0 FROM tab2 AS cor0

Parse error on line 1:
...+ col1 + - col0 DIV ( - + col1 ) + + 36 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT + 30 + col0 col0, - CAST( NULL AS DECIMAL ) AS col0 FROM tab0 AS cor0

Expected: ["117","NULL","127","NULL","45","NULL"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT DISTINCT MIN( - + 41 ) DIV SUM( + + col2 ) FROM tab0

Parse error on line 1:
...T MIN( - + 41 ) DIV SUM( + + col2 ) FROM
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'SUM'
```

```sql
SELECT - + col2 DIV CAST( - 94 AS SIGNED ) + - col0 * - col0 + + col0 FROM tab2 AS cor0

Parse error on line 1:
SELECT - + col2 DIV CAST( - 94 AS SIGNED
--------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT 37 AS col2, - COUNT( DISTINCT col0 ) * CAST( NULL AS SIGNED ), + 3 AS col2 FROM tab2 WHERE NOT - col2 IS NULL

Expected: ["37","NULL","3"] but got ["3","NULL"]
```

```sql
SELECT COUNT( * ) DIV MAX( col2 ), + COUNT( + col2 ) * + + 52 AS col0 FROM tab2

Parse error on line 1:
...LECT COUNT( * ) DIV MAX( col2 ), + COUNT
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MAX'
```

```sql
SELECT DISTINCT + 6 * - 31 + col1 AS col1, + 34 / - CAST( NULL AS SIGNED ) col1 FROM tab1 AS cor0

Expected: ["-139","NULL","-172","NULL","-181","NULL"] but got ["NULL","NULL"]
```

```sql
SELECT DISTINCT - - 80 AS col0, + CAST( - col2 AS SIGNED ) + col0 / + col1 + - CAST( NULL AS SIGNED ) AS col0 FROM tab2 cor0

Expected: ["80","NULL"] but got ["NULL","NULL"]
```

```sql
SELECT + ( + col1 ), - 49 AS col0, + + CAST( NULL AS SIGNED ) col2 FROM tab1

The hash of 9 returned values was different than expected. Check the sorting: 14, -49, NULL, 47, -49, NULL, 5, -49, NULL
```

```sql
SELECT DISTINCT + COUNT( * ) * MAX( col2 DIV 40 ) AS col2 FROM tab0

Parse error on line 1:
...NT( * ) * MAX( col2 DIV 40 ) AS col2 FRO
-----------------------^
Expecting 'EOF', 'COMMA', 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT col2 * ( + ( col2 ) DIV - col0 ) + col1 FROM tab2

Parse error on line 1:
...col2 * ( + ( col2 ) DIV - col0 ) + col1 
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT ALL - 91 DIV MIN( DISTINCT col1 ) FROM tab0 AS cor0

Parse error on line 1:
SELECT ALL - 91 DIV MIN( DISTINCT col1 )
--------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MIN'
```

#### ☓ Ran 10012 tests as mysql

* 3257 failed
* 67% was OK

Time: 14084ms

---- ---- ---- ---- ---- ---- ----
### 90/125 `test/random/aggregates/slt_good_9.test`

_Mimic mysql_
```sql
SELECT - 27 * + - ( col0 ) / + + 64 FROM tab0 WHERE + col2 <= NULL

Query was expected to return results (but did not): []
```

```sql
SELECT ALL * FROM tab0 WHERE - - 11 IS NOT NULL

The hash of 9 returned values was different than expected. Check the sorting: 15, 81, 47, 87, 21, 10, 97, 1, 99
```

```sql
SELECT ALL - + 1 * - col0 + - - 96 * ( + + 92 ) - 81 DIV - - ( + col0 ) AS col0 FROM tab0 AS cor0

Parse error on line 1:
...( + + 92 ) - 81 DIV - - ( + col0 ) AS co
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT 87 col0, col0 FROM tab0

Expected: ["87","15","87","87","87","97"] but got ["15","15","87","87","97","97"]
```

```sql
SELECT + col0 DIV ( - 27 ) FROM tab1

Parse error on line 1:
SELECT + col0 DIV ( - 27 ) FROM tab1
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT - col2 * col2 DIV + col2 FROM tab2

Parse error on line 1:
...T - col2 * col2 DIV + col2 FROM tab2
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT + - col2 DIV 37 + col2 + col1 DIV + col1 AS col1 FROM tab1 AS cor0

Parse error on line 1:
SELECT + - col2 DIV 37 + col2 + col1 DIV
--------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT + + 14 - + - col1 DIV col2 DIV + - col1 FROM tab1 AS cor0

Parse error on line 1:
...+ 14 - + - col1 DIV col2 DIV + - col1 FR
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT DISTINCT - + 86 + - - CAST( - - COUNT( * ) AS SIGNED ) FROM tab0 AS cor0

g is not defined
```

```sql
SELECT ALL - SUM( - col2 ) DIV COUNT( - col0 ) FROM tab0 AS cor0

Parse error on line 1:
...- SUM( - col2 ) DIV COUNT( - col0 ) FROM
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT - ( - + SUM( ALL + 68 ) ) FROM tab2 AS cor0 WHERE ( - col1 ) IS NULL

Expected: ["NULL"] but got ["0"]
```

```sql
SELECT ALL + + CAST( NULL AS DECIMAL ) FROM tab2 AS cor0 CROSS JOIN tab1 AS cor1

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT DISTINCT + COUNT( * ) + + CAST( ( + + MIN( DISTINCT + - col0 ) ) AS SIGNED ) AS col2 FROM tab2

Expected: ["-72"] but got ["NULL"]
```

```sql
SELECT 46 * + 52 * - + 18 DIV CAST( - COUNT( * ) AS SIGNED ) AS col0 FROM tab0

Parse error on line 1:
...* + 52 * - + 18 DIV CAST( - COUNT( * ) A
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT ALL 63 AS col0, CAST( NULL AS DECIMAL ) AS col0 FROM tab2

Expected: ["63","NULL","63","NULL","63","NULL"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT ALL - col2, col2 AS col1, CAST( NULL AS SIGNED ) AS col2 FROM tab1

The hash of 9 returned values was different than expected. Check the sorting: -59, 59, NULL, -68, 68, NULL, -96, 96, NULL
```

```sql
SELECT - 43 * CAST( NULL AS SIGNED ) + + CAST( - 71 AS SIGNED ) AS col1, col1 FROM tab1 cor0

Expected: ["NULL","14","NULL","47","NULL","5"] but got ["14","14","47","47","5","5"]
```

```sql
SELECT - ( - + COUNT( * ) ) - + - CAST( NULL AS SIGNED ) AS col1, 14 FROM tab1

Expected: ["NULL","14"] but got ["14","NULL"]
```

```sql
SELECT ALL + ( - 31 ) + - 71 + - MIN( - col2 ) DIV MAX( col0 ) AS col2 FROM tab0

Parse error on line 1:
...- MIN( - col2 ) DIV MAX( col0 ) AS col2 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MAX'
```

```sql
SELECT MIN( col0 ) DIV SUM( col2 * col2 ) FROM tab0

Parse error on line 1:
...ECT MIN( col0 ) DIV SUM( col2 * col2 ) F
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'SUM'
```

```sql
SELECT DISTINCT * FROM ( tab0 AS cor0 CROSS JOIN tab0 cor1 ) WHERE NULL IS NULL

18 results returned but expected 54
```

```sql
SELECT ALL COUNT( * ) * MIN( ALL + col2 DIV ( 19 ) ) - MAX( ALL col1 ) FROM tab2

Parse error on line 1:
...) * MIN( ALL + col2 DIV ( 19 ) ) - MAX( 
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT * FROM tab1 AS cor0 LEFT OUTER JOIN tab1 AS cor1 ON NOT NULL IS NULL

The hash of 18 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

#### ☓ Ran 10012 tests as mysql

* 3134 failed
* 68% was OK

Time: 14711ms

---- ---- ---- ---- ---- ---- ----
### 91/125 `test/random/expr/slt_good_0.test`

_Mimic mysql_
```sql
SELECT 20 DIV - - 96 + CAST( 90 AS SIGNED ) AS col2

Parse error on line 1:
SELECT 20 DIV - - 96 + CAST( 90 AS
--------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT 81 DIV + + 31

Parse error on line 1:
SELECT 81 DIV + + 31
--------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT ALL 62 DIV ( + - 2 )

Parse error on line 1:
SELECT ALL 62 DIV ( + - 2 )
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT 67 * + 85 * - CAST( - SUM( - 52 ) AS SIGNED ) col2

g is not defined
```

```sql
SELECT + - 78 + - - 19 - + 11 DIV 77 AS col1

Parse error on line 1:
...+ - - 19 - + 11 DIV 77 AS col1
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT DISTINCT 47 DIV COUNT( * ) * 74 - 6 + + 29 + + 36

Parse error on line 1:
...ECT DISTINCT 47 DIV COUNT( * ) * 74 - 6 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT 52 AS col0, 13 AS col0

Expected: ["52","13"] but got ["13","13"]
```

```sql
SELECT ALL - 24 * CAST( CAST( NULL AS SIGNED ) AS SIGNED ) AS col2, + 54 col2

Expected: ["NULL","54"] but got ["54","54"]
```

```sql
SELECT 64 * + 51 * - - 15 + 72 + - + 15 * + - 27 * + 54 * + COALESCE ( - + ( + 71 ), - 66 * + - 53 + + + 45, 4 DIV + 66 ) AS col2

Parse error on line 1:
... + - 53 + + + 45, 4 DIV + 66 ) AS col2
-----------------------^
Expecting 'EOF', 'COMMA', 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL COALESCE ( - 59, + 86 ) + - - CASE - + ( - 11 ) WHEN - 97 * + + 88 + - CASE - - MAX( - 89 ) WHEN - + 98 * 79 THEN - 67 * 98 ELSE NULL END + + - ( - 92 ) * - COUNT( * ) THEN - 49 + - 64 * + - 65 DIV + 99 ELSE + 78 * 97 END + 38 DIV - MAX( ALL 28 ) AS col2

Parse error on line 1:
... 49 + - 64 * + - 65 DIV + 99 ELSE + 78 *
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'WHEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT CASE + MAX( 57 ) WHEN - 19 THEN - - 1 WHEN - 25 * + 49 THEN + - 35 ELSE 45 DIV + + 1 + - 96 END * - 45 * - + 13 AS col1

Parse error on line 1:
...THEN + - 35 ELSE 45 DIV + + 1 + - 96 END
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT + + 25 + + CASE 20 WHEN 94 * + + 43 DIV COUNT( * ) THEN + - 84 * - 70 - + NULLIF ( - + 27, + 9 ) * - 60 + CASE + 84 WHEN 52 THEN + + NULLIF ( + - 79, - + COUNT( * ) * - + 85 + + 1 DIV + 74 * CAST( - CAST( + - NULLIF ( + 94, - 48 * SUM( DISTINCT - CAST( - - 70 AS SIGNED ) ) ) AS SIGNED ) AS SIGNED ) * ( - 57 - 57 ) + 14 ) DIV - 33 WHEN + 95 * 12 - + NULLIF ( 26, CAST( + 4 AS SIGNED ) ) THEN NULL END - - 13 * + 51 ELSE + 5 END + ( 94 + + 91 ) col2

Parse error on line 1:
...20 WHEN 94 * + + 43 DIV COUNT( * ) THEN 
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'THEN', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT CAST( - COUNT( * ) AS SIGNED ) + + ( + COUNT( 28 ) )

Expected: ["0"] but got ["NULL"]
```

```sql
SELECT + ( - + 89 ) DIV CAST( 24 AS SIGNED ) AS col1

Parse error on line 1:
...CT + ( - + 89 ) DIV CAST( 24 AS SIGNED )
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT ALL - CASE - 79 WHEN - - 80 * 31 THEN - 35 ELSE 79 * + - COUNT( ALL - - 63 ) + - 45 END * + - CAST( NULLIF ( + - CAST( NULL AS SIGNED ), 57 + 16 ) AS SIGNED ) * - + 47 AS col0, 86

Expected: ["NULL","86"] but got ["86","NULL"]
```

```sql
SELECT COALESCE ( MIN( + 92 ), + 87, - 43 ) DIV COALESCE ( 25 * + 59, COUNT( * ), - 47 * - 19 + 98 )

Parse error on line 1:
...), + 87, - 43 ) DIV COALESCE ( 25 * + 59
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL ( 93 ) DIV CASE - + COUNT( * ) WHEN + 93 * + 92 THEN - CASE - CAST( NULL AS DECIMAL ) WHEN + 87 DIV 94 + 64 THEN 61 + - 67 ELSE NULL END + + 7 DIV 6 WHEN - 40 THEN NULL ELSE CAST( 12 AS SIGNED ) + 95 * 37 END DIV - 90 + 30 * + 82 AS col0

Parse error on line 1:
...LECT ALL ( 93 ) DIV CASE - + COUNT( * ) 
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CASE'
```

```sql
SELECT SUM( + 73 ) * - CASE WHEN NOT ( NOT 27 BETWEEN 15 AND - NULLIF ( - 63, - 28 + + 76 ) ) THEN NULL ELSE + 77 * + 69 END / - CAST( - 69 AS SIGNED ) AS col0

Cannot read property 'toString' of undefined
```

```sql
SELECT + + COUNT( * ) - + + 77 DIV MAX( ( - 19 ) ) AS col1

Parse error on line 1:
...T( * ) - + + 77 DIV MAX( ( - 19 ) ) AS c
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MAX'
```

```sql
SELECT SUM( + 92 ) DIV MIN( 8 ) AS col2, + 59 + - 11 AS col1

Parse error on line 1:
...ECT SUM( + 92 ) DIV MIN( 8 ) AS col2, + 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MIN'
```

```sql
SELECT + ( 13 ) - + ( 82 + - 22 DIV - 86 )

Parse error on line 1:
...3 ) - + ( 82 + - 22 DIV - 86 )
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT 40 DIV SUM( + + 8 ) AS col1

Parse error on line 1:
SELECT 40 DIV SUM( + + 8 ) AS col1
--------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'SUM'
```

```sql
SELECT 46 / SUM( DISTINCT - CAST( NULL AS SIGNED ) ) / - + 76 AS col1

Expected: ["NULL"] but got ["-Infinity"]
```

```sql
SELECT DISTINCT + 50 col1, 11 * + CAST( NULL AS SIGNED ) + + + 13 AS col1

Expected: ["50","NULL"] but got ["NULL","NULL"]
```

#### ☓ Ran 10012 tests as mysql

* 1513 failed
* 84% was OK

Time: 14624ms

---- ---- ---- ---- ---- ---- ----
### 92/125 `test/random/expr/slt_good_1.test`

_Mimic mysql_
```sql
SELECT COUNT( * ) * - ( 7 ) DIV COUNT( * ) + 27 AS col1

Parse error on line 1:
...( * ) * - ( 7 ) DIV COUNT( * ) + 27 AS c
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT ALL COUNT( * ) AS col0, - 83 AS col0

Expected: ["1","-83"] but got ["-83"]
```

```sql
SELECT + 32 DIV 34

Parse error on line 1:
SELECT + 32 DIV 34
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT ALL 26 DIV - MAX( + 45 )

Parse error on line 1:
SELECT ALL 26 DIV - MAX( + 45 )
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT - SUM( CAST( NULL AS SIGNED ) ) + ( - 59 )

Expected: ["NULL"] but got ["-59"]
```

```sql
SELECT + 62 DIV + 16

Parse error on line 1:
SELECT + 62 DIV + 16
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT + COUNT( * ) DIV MAX( ( 64 ) )

Parse error on line 1:
...CT + COUNT( * ) DIV MAX( ( 64 ) )
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MAX'
```

```sql
SELECT CAST( - COUNT( ALL 73 ) AS SIGNED )

g is not defined
```

```sql
SELECT + - CAST( + - COUNT( * ) AS SIGNED ) * COUNT( * )

Expected: ["1"] but got ["NULL"]
```

```sql
SELECT + 90 AS col2, CAST( NULL AS DECIMAL ) * + 60 AS col2

Expected: ["90","NULL"] but got ["NULL","NULL"]
```

```sql
SELECT - CASE WHEN NOT NULL BETWEEN NULL AND NULL THEN 17 ELSE NULL END + + 12

Cannot read property 'toString' of undefined
```

```sql
SELECT ALL - COUNT( * ) DIV SUM( + - 5 ) DIV - 93

Parse error on line 1:
...LL - COUNT( * ) DIV SUM( + - 5 ) DIV - 9
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'SUM'
```

```sql
SELECT ALL + COUNT( * ) DIV ( 40 )

Parse error on line 1:
...LL + COUNT( * ) DIV ( 40 )
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT 67 DIV NULLIF ( + COUNT( * ), + 39 ) + 77

Parse error on line 1:
SELECT 67 DIV NULLIF ( + COUNT( * 
--------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT 47 * + COUNT( * ) AS col1, ( + CAST( + + 16 AS SIGNED ) ) * + CAST( NULL AS SIGNED ) AS col1

Expected: ["47","NULL"] but got ["NULL"]
```

#### ☓ Ran 10012 tests as mysql

* 613 failed
* 93% was OK

Time: 9064ms

---- ---- ---- ---- ---- ---- ----
### 93/125 `test/random/expr/slt_good_2.test`

_Mimic mysql_
```sql
SELECT + 62 DIV + SUM( - 80 ) * + + 23 + + 38 + CAST( + 31 AS SIGNED ) * + COUNT( DISTINCT - 54 ) * + ( + 88 + - CAST( 95 - COUNT( * ) * 18 AS SIGNED ) )

Parse error on line 1:
SELECT + 62 DIV + SUM( - 80 ) * + + 
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT 94 AS col1, + 23 DIV - - 85 col0

Parse error on line 1:
...4 AS col1, + 23 DIV - - 85 col0
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT - ( - CAST( + - SUM( DISTINCT - - 53 ) AS SIGNED ) )

g is not defined
```

```sql
SELECT DISTINCT - 33 DIV COUNT( * ) * - 79

Parse error on line 1:
...T DISTINCT - 33 DIV COUNT( * ) * - 79
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT - CASE + 13 WHEN + + COUNT( 15 ) THEN - + COUNT( + 55 ) DIV - 22 + + 48 WHEN - 17 + - 64 THEN COUNT( * ) ELSE 96 END

Parse error on line 1:
...N - + COUNT( + 55 ) DIV - 22 + + 48 WHEN
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'WHEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT ALL + 18 * + - CAST( 31 AS SIGNED ) AS col0, 67 AS col0

Expected: ["-558","67"] but got ["67","67"]
```

```sql
SELECT 81 * + 58 AS col2, - COALESCE ( + 60, + 86 ) DIV 63

Parse error on line 1:
... ( + 60, + 86 ) DIV 63
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT ALL - 87 * 88 + - 34 DIV ( CAST( - ( + 19 ) AS SIGNED ) ) DIV + COUNT( * ) + - COALESCE ( - + 69, - 20, 0 * 95 ) + - ( 29 ) col0

Parse error on line 1:
... 87 * 88 + - 34 DIV ( CAST( - ( + 19 ) A
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT ALL - MAX( - 84 ) + + + CAST( NULL AS DECIMAL ) AS col0, 10

Expected: ["NULL","10"] but got ["10","NULL"]
```

```sql
SELECT - 19 * + COUNT( * ) + + 98 + + CASE 63 WHEN 57 THEN + 81 ELSE NULL END + + 84 AS col1, - COUNT( * ) AS col1

Expected: ["NULL","-1"] but got ["-1"]
```

```sql
SELECT 58 + + 20 col1, COALESCE ( + - 99, - - COUNT( * ) + 85 + 82 DIV - 65 ) - - 13

Parse error on line 1:
...OUNT( * ) + 85 + 82 DIV - 65 ) - - 13
-----------------------^
Expecting 'EOF', 'COMMA', 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT + CASE + COUNT( * ) WHEN + COALESCE ( + MAX( DISTINCT - 17 ), 72 - + - 86 + + ( - CASE WHEN ( + CASE - 8 WHEN - 7 THEN NULL WHEN - 70 * + 18 THEN NULL ELSE 82 * + ( - - MIN( + 47 ) ) + - SUM( DISTINCT 97 ) END ) BETWEEN - 13 * + 57 AND - COUNT( * ) * - 74 THEN 89 WHEN NOT - 12 >= NULL THEN NULL ELSE NULL END ) * - 27, 40 / 27 - + 34 ) THEN 89 WHEN - COUNT( + 4 ) - CASE 90 WHEN ( - COUNT( * ) ) - SUM( - 77 ) * + COALESCE ( - SUM( 60 ), - 22 * - 33 ) THEN NULL WHEN COALESCE ( 19, - 94 + + 73, CAST( - NULLIF ( - 7, 87 ) AS SIGNED ) + - 52 * + 11 ) + + 59 * + 54 THEN COALESCE ( - NULLIF ( 15, + 9 ), + CASE - 2 WHEN - 67 + 26 THEN ( 2 ) END, 12 * 78 ) / - 76 ELSE NULL END THEN NULL ELSE NULL END AS col1

Cannot read property 'toString' of undefined
```

```sql
SELECT - 31 DIV CASE COUNT( * ) WHEN 44 + - ( + - ( - 99 ) ) THEN NULL WHEN - - 9 + 51 THEN + 87 ELSE - + 40 END * + 77 + - 17 + - - COUNT( * ) AS col2

Parse error on line 1:
SELECT - 31 DIV CASE COUNT( * ) WHEN
----------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CASE'
```

```sql
SELECT DISTINCT 43 * 25 * + - 20 * - - 92 * - CASE - 53 WHEN - 76 THEN NULL WHEN - - 91 THEN NULL WHEN 0 * - 44 * + 5 * + 42 - + COALESCE ( + - 58, + 81 ) THEN - CASE - 57 WHEN 88 DIV 34 THEN - - 19 DIV + COUNT( * ) * - 1 ELSE NULL END ELSE COALESCE ( + + 38, + 95 + + 22 ) END

Parse error on line 1:
...- CASE - 57 WHEN 88 DIV 34 THEN - - 19 D
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'THEN', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT ALL 35 DIV CAST( + COUNT( * ) AS SIGNED )

Parse error on line 1:
SELECT ALL 35 DIV CAST( + COUNT( * ) A
------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT - NULLIF ( - - COALESCE ( - COUNT( * ), 54 ), - 42 - + 53 * 18 ) + CAST( + SUM( DISTINCT + 15 ) + + 71 AS SIGNED )

Expected: ["87"] but got ["NULL"]
```

```sql
SELECT ALL + + 84 * 34 DIV COALESCE ( + + 34, + 85 ) DIV - 18 + COUNT( * ) AS col2

Parse error on line 1:
...ALL + + 84 * 34 DIV COALESCE ( + + 34, +
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT DISTINCT + COUNT( ALL + 34 ) DIV MIN( ALL 85 ) - + 44, 38 - - 15 col1

Parse error on line 1:
...UNT( ALL + 34 ) DIV MIN( ALL 85 ) - + 44
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MIN'
```

```sql
SELECT + 55 DIV MAX( 61 )

Parse error on line 1:
SELECT + 55 DIV MAX( 61 )
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MAX'
```

```sql
SELECT ( + COALESCE ( 52, COUNT( * ), + ( - + CASE 36 WHEN - + 64 THEN NULL WHEN + 12 + + 3 + - 80 THEN NULL ELSE - COUNT( * ) DIV - ( 51 ) * NULLIF ( 3, - - 67 - ( + COALESCE ( + 77, 77 * 81 + CASE - 63 WHEN 44 + 41 THEN MAX( - 59 ) + + NULLIF ( - 21 + 43 * + COUNT( * ), 74 ) ELSE 99 * - 55 END ) ) - + 55 * 46 ) END ) - + 9, CAST( NULL AS SIGNED ) ) ) AS col2

Parse error on line 1:
...L ELSE - COUNT( * ) DIV - ( 51 ) * NULLI
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT + 30 * - ( - 77 DIV 92 )

Parse error on line 1:
...ECT + 30 * - ( - 77 DIV 92 )
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT DISTINCT 51 + - 34 + + + COUNT( * ) DIV SUM( + 46 ) * 95 * CAST( + 63 AS SIGNED ) * - 22 AS col2

Parse error on line 1:
... + + COUNT( * ) DIV SUM( + 46 ) * 95 * C
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'SUM'
```

```sql
SELECT ALL ( - 92 ) col0, + CAST( NULL AS SIGNED ) + + 32 + 40 AS col0

Expected: ["-92","NULL"] but got ["NULL","NULL"]
```

#### ☓ Ran 10012 tests as mysql

* 1128 failed
* 88% was OK

Time: 12542ms

---- ---- ---- ---- ---- ---- ----
### 94/125 `test/random/expr/slt_good_3.test`

_Mimic mysql_
```sql
SELECT 0 AS col2, 27 AS col2

Expected: ["0","27"] but got ["27","27"]
```

```sql
SELECT - - 73 DIV - 29

Parse error on line 1:
SELECT - - 73 DIV - 29
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT + 35 DIV 77 * + - 28 * + 24

Parse error on line 1:
SELECT + 35 DIV 77 * + - 28 * + 24
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT DISTINCT ( - 76 ) DIV + 40 - - - COUNT( * ) + + 43 * - NULLIF ( - CAST( ( - 21 ) AS SIGNED ) * SUM( 44 * 6 ), - 18 + - 41 ) * - 38 AS col0

Parse error on line 1:
...STINCT ( - 76 ) DIV + 40 - - - COUNT( * 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT COALESCE ( - 33, - CAST( NULL AS SIGNED ) DIV - - 95 ) + 57

Parse error on line 1:
...T( NULL AS SIGNED ) DIV - - 95 ) + 57
-----------------------^
Expecting 'EOF', 'COMMA', 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT COUNT( * ) DIV COUNT( * ) * 9 * - 37

Parse error on line 1:
...LECT COUNT( * ) DIV COUNT( * ) * 9 * - 3
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT DISTINCT NULLIF ( - COUNT( * ), + 2 + - 50 * - + CASE - 63 WHEN 89 DIV 55 + + 67 THEN 60 + 76 WHEN + 31 DIV CAST( NULL AS DECIMAL ) THEN 91 * 16 ELSE COALESCE ( 60, 87, 50, NULLIF ( 11, + 73 ) * + 81 ) END ) DIV - COUNT( * )

Parse error on line 1:
...+ CASE - 63 WHEN 89 DIV 55 + + 67 THEN 6
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'THEN', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT ALL + CAST( SUM( ALL - 11 ) AS SIGNED ) * + CASE MAX( ALL - 13 ) WHEN 75 THEN NULL ELSE 89 + + COUNT( * ) - SUM( 36 + - 95 ) DIV + 30 END + 50 + - 42 * 42 AS col0

Parse error on line 1:
... - SUM( 36 + - 95 ) DIV + 30 END + 50 + 
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT + 29 * - NULLIF ( + 80, + CAST( + NULLIF ( + - 4, - + COUNT( * ) ) AS SIGNED ) * - 44 * - ( COALESCE ( 0, + 36 * 1 ) ) ) AS col1

g is not defined
```

```sql
SELECT 25 * 31 * 41 + - 1 + 40 DIV ( COUNT( DISTINCT + 66 ) ) - 28 * 49 AS col1

Parse error on line 1:
...* 41 + - 1 + 40 DIV ( COUNT( DISTINCT + 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT 86 - + - SUM( ALL - CAST( NULL AS DECIMAL ) )

Expected: ["NULL"] but got ["86"]
```

```sql
SELECT 91 * 80 DIV NULLIF ( + 12, - + NULLIF ( + 88, - 84 * - 34 + + 82 ) * - NULLIF ( + 32, + CAST( 59 AS SIGNED ) * - 32 ) + 93 ) DIV 52 AS col2

Parse error on line 1:
SELECT 91 * 80 DIV NULLIF ( + 12, - + N
-------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL + COUNT( * ) col2, + 36, + 43 DIV MAX( DISTINCT + 63 ) * + 33 col1

Parse error on line 1:
...ol2, + 36, + 43 DIV MAX( DISTINCT + 63 )
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MAX'
```

```sql
SELECT + - COUNT( * ) * 34, - CAST( CAST( - COUNT( * ) AS SIGNED ) AS SIGNED ) + - 31 AS col1

Expected: ["-34","-30"] but got ["-34","NULL"]
```

```sql
SELECT + COALESCE ( + CASE WHEN ( - 74 ) IS NOT NULL THEN + COUNT( * ) + - - 32 - + 10 * - 27 ELSE + + CASE + 15 WHEN + 62 THEN NULL WHEN + 27 THEN - 28 * + - 77 * 98 WHEN - - 60 * + ( - - 52 ) - - 18 THEN + 59 DIV - + COUNT( * ) * + 29 + - - 19 ELSE 79 * NULLIF ( 44, - MAX( DISTINCT + 33 ) ) END + ( + MIN( DISTINCT ( 71 ) ) + 29 ) END, + 97 * + MIN( 69 ), 23 + 71 * COUNT( * ) )

Parse error on line 1:
... ) - - 18 THEN + 59 DIV - + COUNT( * ) *
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'WHEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT 6 * - 8 * CASE - MAX( ALL - + 82 ) WHEN + COUNT( * ) THEN + CASE WHEN NOT COUNT( * ) BETWEEN 77 AND ( ( + COUNT( - 48 ) ) ) THEN NULL WHEN NULL IS NULL THEN NULL ELSE - 98 END * 3 WHEN + 75 * COUNT( * ) THEN NULL END * 62

Cannot read property 'toString' of undefined
```

```sql
SELECT ALL + 56 DIV CAST( - 45 AS SIGNED )

Parse error on line 1:
SELECT ALL + 56 DIV CAST( - 45 AS SIGNED
--------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT + COUNT( * ) * - + MIN( ALL 24 ) AS col2, CAST( NULL AS SIGNED ) AS col2

Expected: ["-24","NULL"] but got ["NULL"]
```

```sql
SELECT + SUM( ALL 36 ) * ( + 57 DIV - 24 ) AS col1

Parse error on line 1:
...( ALL 36 ) * ( + 57 DIV - 24 ) AS col1
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT COUNT( * ) + - 50 - 70 + - 88 + COALESCE ( + 71, + + ( - 13 ), - 30 * - ( - 10 ) ) DIV SUM( + 46 ) * 64

Parse error on line 1:
... * - ( - 10 ) ) DIV SUM( + 46 ) * 64
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'SUM'
```

```sql
SELECT ALL - 62 * - - 19 AS col2, - 52 * - CAST( NULL AS SIGNED ) + + - 14 + 58 + 95 * - 90 * + 79 col2

Expected: ["-1178","NULL"] but got ["NULL","NULL"]
```

```sql
SELECT - 92 * CAST( - COUNT( * ) AS SIGNED ) AS col0, SUM( DISTINCT - 24 ) * - CAST( + COUNT( * ) AS SIGNED ) AS col1

Expected: ["92","24"] but got ["NULL","NULL"]
```

```sql
SELECT COUNT( + - 55 ) * - 35 DIV CASE + 51 WHEN NULLIF ( + CASE + - CAST( + 42 AS DECIMAL ) WHEN + + 84 THEN NULL ELSE - SUM( - 55 ) + + 29 END, - 63 + 74 + + ( 22 ) DIV + 8 + - 36 * 73 ) THEN NULL ELSE - 79 END DIV 56 - + ( + 82 ) AS col2

Parse error on line 1:
...+ - 55 ) * - 35 DIV CASE + 51 WHEN NULLI
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CASE'
```

```sql
SELECT + ( + + 98 ) DIV MIN( ALL 2 ) AS col0, - 75 * 72 AS col2

Parse error on line 1:
...CT + ( + + 98 ) DIV MIN( ALL 2 ) AS col0
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MIN'
```

```sql
SELECT DISTINCT - - CASE ( + 65 ) WHEN + + COUNT( * ) THEN - 99 + 61 END AS col2, + 65 + - CAST( NULL AS SIGNED ) col2

Expected: ["NULL","NULL"] but got ["NULL"]
```

#### ☓ Ran 10012 tests as mysql

* 1733 failed
* 82% was OK

Time: 14708ms

---- ---- ---- ---- ---- ---- ----
### 95/125 `test/random/expr/slt_good_4.test`

_Mimic mysql_
```sql
SELECT COALESCE ( - 67, + CAST( NULL AS SIGNED ) DIV + 7 ) col2

Parse error on line 1:
...T( NULL AS SIGNED ) DIV + 7 ) col2
-----------------------^
Expecting 'EOF', 'COMMA', 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT + ( - ( - 91 ) ) DIV - 94 * + - 88 AS col1

Parse error on line 1:
... ( - ( - 91 ) ) DIV - 94 * + - 88 AS col
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT 78 DIV + 82 - + COUNT( * ) + NULLIF ( + 68, 66 ) * - SUM( - 36 ) AS col0

Parse error on line 1:
SELECT 78 DIV + 82 - + COUNT( * ) 
--------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT - 21 AS col2, 39 + + 17 AS col2

Expected: ["-21","56"] but got ["56","56"]
```

```sql
SELECT + 34 DIV 35 DIV - + 13 * + + COUNT( * ) AS col1, 18 AS col0

Parse error on line 1:
SELECT + 34 DIV 35 DIV - + 13 * + + 
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT DISTINCT - CAST( + + SUM( 41 ) AS SIGNED ) AS col1

g is not defined
```

```sql
SELECT ALL - 26 DIV ( - 58 ) * + 82

Parse error on line 1:
SELECT ALL - 26 DIV ( - 58 ) * + 82
--------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT ALL - - 16 + + CASE + 24 WHEN + - COUNT( * ) THEN - 63 * - 50 * - 93 DIV - - 59 + - + 17 ELSE - 75 + 14 END

Parse error on line 1:
... - 63 * - 50 * - 93 DIV - - 59 + - + 17 
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'WHEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT ALL + CAST( - - 31 AS SIGNED ) - - - 12 DIV MAX( DISTINCT - 86 ) + + 71 * - COUNT( * )

Parse error on line 1:
...GNED ) - - - 12 DIV MAX( DISTINCT - 86 )
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MAX'
```

```sql
SELECT - CASE WHEN NOT + CASE + AVG ( ALL + + 26 ) WHEN ( + 47 ) + CAST( + 26 AS SIGNED ) - - COUNT( * ) * - COALESCE ( - - 44, + ( 80 ) ) + + + 47 THEN - 2 ELSE NULL END BETWEEN NULL AND - COUNT( * ) THEN + + 25 WHEN 92 + + + COUNT( * ) <= ( + ( + 40 ) + 67 ) THEN NULL END * - 82 + 89

Cannot read property 'toString' of undefined
```

```sql
SELECT ALL - 50 * 99 * + + 73 + MIN( - 31 ) + MIN( DISTINCT - + 36 ) + + 7 DIV COUNT( * ) * 60 + - 69 AS col2

Parse error on line 1:
... - + 36 ) + + 7 DIV COUNT( * ) * 60 + - 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT DISTINCT - COUNT( * ) DIV NULLIF ( + 1, + 19 ) - - 16 * - 36 AS col0

Parse error on line 1:
...CT - COUNT( * ) DIV NULLIF ( + 1, + 19 )
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT DISTINCT - SUM( ALL + CAST( NULL AS SIGNED ) ), 67 + + ( + 71 ) AS col2, + 50 col1

Expected: ["NULL","138","50"] but got ["0","138","50"]
```

```sql
SELECT ALL - COUNT( * ) + + CAST( + NULLIF ( - COUNT( * ), + 31 ) AS SIGNED ) * + - 63 col0

Expected: ["62"] but got ["NULL"]
```

```sql
SELECT ALL ( + - CASE - 59 WHEN - + CASE - - COUNT( * ) WHEN - 19 - + - 24 THEN NULL WHEN + 7 THEN NULL WHEN - 14 DIV 40 + COALESCE ( + 85, - + 16 ) THEN + 69 ELSE - 91 * + + 10 END THEN NULL WHEN 3 THEN 0 ELSE + + 80 DIV + 56 END ) AS col2

Parse error on line 1:
...THEN NULL WHEN - 14 DIV 40 + COALESCE ( 
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'THEN', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT DISTINCT + CASE 20 WHEN 65 THEN NULL ELSE - 97 DIV + 82 END * 19 AS col0

Parse error on line 1:
...THEN NULL ELSE - 97 DIV + 82 END * 19 AS
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT ALL - 66 * + CAST( + 91 AS SIGNED ) * ( 61 DIV SUM( ALL + 42 ) ) AS col1

Parse error on line 1:
... AS SIGNED ) * ( 61 DIV SUM( ALL + 42 ) 
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT DISTINCT - - MAX( - + 36 ) + + NULLIF ( 23, ( 95 ) ) + + COUNT( - 10 ) DIV CASE + 30 WHEN COUNT( * ) THEN NULL ELSE COALESCE ( 72, + 18 + 89 * + ( - 74 * - 42 + - NULLIF ( - 37 + ( 98 ) * + 91, 51 ) * - 56 ) ) END

Parse error on line 1:
...+ COUNT( - 10 ) DIV CASE + 30 WHEN COUNT
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CASE'
```

```sql
SELECT + 81 AS col1, 4 + + MIN( DISTINCT 89 ) DIV SUM( ALL - ( - + 85 ) )

Parse error on line 1:
...( DISTINCT 89 ) DIV SUM( ALL - ( - + 85 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'SUM'
```

```sql
SELECT ALL - 55 AS col1, - MAX( ALL - 3 ) / MIN( ALL + 53 ) * + CASE - - 47 WHEN - + 13 THEN AVG ( ALL - NULLIF ( 1, + + NULLIF ( - 69, 37 + 95 + - 77 ) ) ) ELSE NULL END * - 92 - 65 + - 51 * - 61 * 37 - COUNT( * ) col1

Expected: ["-55","NULL"] but got ["NULL"]
```

```sql
SELECT - + 61 DIV CAST( COUNT( * ) AS SIGNED ) + + 69 AS col2

Parse error on line 1:
SELECT - + 61 DIV CAST( COUNT( * ) AS 
------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT ALL 68 AS col2, 5 - - CAST( NULL AS SIGNED ) * + 94 AS col2

Expected: ["68","NULL"] but got ["NULL","NULL"]
```

```sql
SELECT DISTINCT 48 DIV MIN( - 34 ), + 96 AS col0

Parse error on line 1:
...ECT DISTINCT 48 DIV MIN( - 34 ), + 96 AS
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MIN'
```

#### ☓ Ran 10012 tests as mysql

* 1714 failed
* 82% was OK

Time: 15136ms

---- ---- ---- ---- ---- ---- ----
### 96/125 `test/random/expr/slt_good_5.test`

_Mimic mysql_
```sql
SELECT - 79 DIV 44 + + + 90 col1

Parse error on line 1:
SELECT - 79 DIV 44 + + + 90 col1
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT - 72 DIV + 5

Parse error on line 1:
SELECT - 72 DIV + 5
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT DISTINCT + MAX( DISTINCT - + 68 ) AS col0, - MIN( - 50 ) AS col0

Expected: ["-68","50"] but got ["50"]
```

```sql
SELECT ALL CASE + - 88 WHEN - COALESCE ( - CAST( - 37 AS SIGNED ), + 62 ) - + COUNT( * ) DIV 56 THEN - 58 WHEN 41 THEN NULL END, 82 DIV 81 AS col0

Parse error on line 1:
...62 ) - + COUNT( * ) DIV 56 THEN - 58 WHE
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'THEN', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT ALL NULLIF ( + + 73, + 85 + 94 + - AVG ( DISTINCT - 43 ) * 89 DIV - ( - - 1 ) + + COUNT( * ) * - COUNT( * ) + - - MAX( + 96 ) + + 57 + + - 26 ) DIV - 42 + - 70 * - 98, 6 * 45 AS col1

Parse error on line 1:
...ISTINCT - 43 ) * 89 DIV - ( - - 1 ) + + 
-----------------------^
Expecting 'EOF', 'COMMA', 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT DISTINCT + 21 DIV - 64 + 84 * + 10 - - + 7 AS col0, - CAST( + 29 AS SIGNED ) + - + 66

Parse error on line 1:
...T DISTINCT + 21 DIV - 64 + 84 * + 10 - -
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT - 20 * + 62 + - 53 - 30 * + CASE COUNT( * ) WHEN CAST( NULL AS SIGNED ) * - 43 THEN NULL WHEN AVG ( - 54 ) THEN - 89 END col1, 87 * 7 * + 54 - - 9 + 57 * CAST( - 35 AS SIGNED ) * 60 col1, + COUNT( * ) AS col2

Expected: ["NULL","-86805","1"] but got ["-86805","1"]
```

```sql
SELECT DISTINCT - + 22 + - CASE + 97 WHEN COUNT( * ) * - + 2 * + + 78 THEN NULL WHEN - CAST( NULL AS SIGNED ) * + + NULLIF ( - MIN( DISTINCT 3 ), - COUNT( DISTINCT - 40 ) ) + CAST( NULL AS SIGNED ) THEN + 16 DIV - + 63 + + 88 * + 27 + + 89 ELSE + 63 * - ( + 14 ) * - - 3 * + 66 + 83 * - 4 END * + - 60 - 41 AS col0

Parse error on line 1:
... SIGNED ) THEN + 16 DIV - + 63 + + 88 * 
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'WHEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT - CASE + - 84 WHEN 82 * + 24 THEN NULL ELSE COUNT( * ) / SUM( CAST( NULL AS SIGNED ) ) - + 21 END * COUNT( * ) * - 76 * - + ( + 7 ) col0

Expected: ["NULL"] but got ["-Infinity"]
```

```sql
SELECT ALL - CAST( + ( + COUNT( * ) ) AS SIGNED ) AS col0

g is not defined
```

```sql
SELECT DISTINCT 9 AS col2, - 67 * + - CAST( NULL AS SIGNED ) AS col2

Expected: ["9","NULL"] but got ["NULL","NULL"]
```

```sql
SELECT + 93 DIV COUNT( * ) AS col2

Parse error on line 1:
SELECT + 93 DIV COUNT( * ) AS col2
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT - 95 + ( + 95 ) - + 83 + + 4 * 47 * 98 * 62 * - CASE + + ( + COUNT( * ) ) WHEN + MIN( ALL - 31 ) + + AVG ( 66 ) THEN + 98 WHEN - 48 * - 70 + 39 THEN NULL WHEN + - COUNT( * ) THEN NULL END AS col0, 49

Expected: ["NULL","49"] but got ["49","NULL"]
```

```sql
SELECT SUM( 32 ) - + 12 DIV NULLIF ( - + COUNT( * ), - + 72 )

Parse error on line 1:
...UM( 32 ) - + 12 DIV NULLIF ( - + COUNT( 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT DISTINCT - 73 DIV MAX( + + 85 )

Parse error on line 1:
...T DISTINCT - 73 DIV MAX( + + 85 )
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MAX'
```

```sql
SELECT DISTINCT + SUM( - COALESCE ( - + 85, - 85 + + + 10 * - + CASE - 11 WHEN + 77 THEN NULL WHEN + 10 THEN NULL ELSE - 52 DIV + ( + ( ( 31 ) ) ) END ) ) col1

Parse error on line 1:
...THEN NULL ELSE - 52 DIV + ( + ( ( 31 ) )
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT + + CAST( - 58 AS SIGNED ) DIV CASE + 60 WHEN + COALESCE ( - - COALESCE ( CAST( NULL AS DECIMAL ), 61 * 53, 32 * + COUNT( * ) ), + 80 - 93 ) + 50 THEN NULL ELSE + COUNT( * ) END * - 60 AS col2

Parse error on line 1:
... 58 AS SIGNED ) DIV CASE + 60 WHEN + COA
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CASE'
```

```sql
SELECT + 41 - - 35 - + COUNT( ALL + 82 ) + - - COALESCE ( - + 56, + CAST( + - 28 AS SIGNED ) ) * + 18 * 23 - + 43 * ( 93 DIV - COUNT( * ) ) * - ( + 4 ) AS col2

Parse error on line 1:
... * 23 - + 43 * ( 93 DIV - COUNT( * ) ) *
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT + 41 + 27 + + 64 * + SUM( ALL 43 ) * 22 + + 60 * + + 2 + CAST( + MAX( - + 35 ) AS SIGNED ) AS col0

Expected: ["60697"] but got ["NULL"]
```

```sql
SELECT 25 + + + COUNT( * ) + 9 DIV SUM( ALL - 53 ) * 73

Parse error on line 1:
... COUNT( * ) + 9 DIV SUM( ALL - 53 ) * 73
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'SUM'
```

```sql
SELECT + CAST( - + CASE WHEN NOT 4 NOT BETWEEN COUNT( * ) AND NULL THEN + 22 END AS DECIMAL ) * 73 * - 59 / - MAX( DISTINCT - 71 )

Cannot read property 'toString' of undefined
```

```sql
SELECT ALL + 58 DIV + 68

Parse error on line 1:
SELECT ALL + 58 DIV + 68
--------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT ALL - 87 DIV ( + 8 ) * 51 AS col2

Parse error on line 1:
SELECT ALL - 87 DIV ( + 8 ) * 51 AS col2
--------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT 52 * - 86 * MIN( DISTINCT - + 91 ) * 80 + + 64 DIV CAST( + 56 + SUM( + 71 + 1 ) AS SIGNED ) AS col2

Parse error on line 1:
...1 ) * 80 + + 64 DIV CAST( + 56 + SUM( + 
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT CASE ( - CASE - + ( + 60 ) WHEN - COALESCE ( - 43, + 42 ) + - - 23 THEN + - COUNT( * ) ELSE - 44 * + 52 END ) WHEN - 44 THEN - 73 END + + COUNT( * ) AS col0, CAST( NULL AS SIGNED ) * + 82 AS col0

Expected: ["NULL","NULL"] but got ["NULL"]
```

```sql
SELECT DISTINCT 52 AS col1, - 61 * - 69 DIV MIN( + 97 * + 62 )

Parse error on line 1:
...l1, - 61 * - 69 DIV MIN( + 97 * + 62 )
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MIN'
```

#### ☓ Ran 10012 tests as mysql

* 1678 failed
* 83% was OK

Time: 14941ms

---- ---- ---- ---- ---- ---- ----
### 97/125 `test/random/expr/slt_good_6.test`

_Mimic mysql_
```sql
SELECT 64 DIV - - 90 + + 22 * + ( - 0 ) AS col1

Parse error on line 1:
SELECT 64 DIV - - 90 + + 22 * + ( 
--------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT 64 - + - CASE + 33 WHEN + 80 * 8 * - - 62 + + 88 + - + 5 * 63 / 11 THEN - + COALESCE ( - 93, - 63 ) ELSE NULL END + - - 51 - + + 99 AS col1, 79 AS col1

Expected: ["NULL","79"] but got ["79","79"]
```

```sql
SELECT ALL 25 * 6 DIV 75 AS col1

Parse error on line 1:
...LECT ALL 25 * 6 DIV 75 AS col1
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT DISTINCT - + NULLIF ( - CAST( ( - 43 ) AS SIGNED ), + 1 * + + 67 ) DIV + 97 AS col2

Parse error on line 1:
... + 1 * + + 67 ) DIV + 97 AS col2
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT + - COUNT( DISTINCT + 77 ) * + 29 DIV ( + - 89 ) AS col0

Parse error on line 1:
...T + 77 ) * + 29 DIV ( + - 89 ) AS col0
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT + COUNT( * ) DIV CAST( + 35 AS SIGNED )

Parse error on line 1:
...CT + COUNT( * ) DIV CAST( + 35 AS SIGNED
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT ALL + - CASE - 72 WHEN + 91 THEN - 39 + - - COUNT( * ) + - ( 41 ) + + 92 + - - 51 DIV - 9 WHEN - - 12 + 7 THEN NULL ELSE + 93 * + 72 - + 92 END + 30 AS col2

Parse error on line 1:
...1 ) + + 92 + - - 51 DIV - 9 WHEN - - 12 
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'WHEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT ALL 0 - - CASE - + 31 WHEN + 55 THEN - 83 - + - 12 + ( 9 ) WHEN COALESCE ( 81, + + CAST( + + 73 AS SIGNED ) ) * + 45 THEN NULL ELSE 4 DIV 96 END

Parse error on line 1:
...45 THEN NULL ELSE 4 DIV 96 END
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT + 22 * + + COALESCE ( + 84, COALESCE ( - 28, - 51 DIV 97 ) ) - + 47 + 11 * + 41

Parse error on line 1:
...ALESCE ( - 28, - 51 DIV 97 ) ) - + 47 + 
-----------------------^
Expecting 'EOF', 'COMMA', 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT 5 AS col2, 57 * - 76 * 55 * - 62 * - + 15 AS col2

Expected: ["5","-221581800"] but got ["-221581800","-221581800"]
```

```sql
SELECT + + 92 * NULLIF ( COALESCE ( + - 44, 60 * + 41 ), - - 77 ) * 82 * CAST( NULLIF ( COUNT( * ), - 7 * - 79 + + + 35 ) AS SIGNED ) + + + 48

g is not defined
```

```sql
SELECT - 10 DIV COUNT( * ) * + + 61 + + - 29

Parse error on line 1:
SELECT - 10 DIV COUNT( * ) * + + 61 
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT - COALESCE ( 57, 68 * 93 - + 8, 22 ) DIV NULLIF ( + 41 + - 54, - 3 + 76 * 78 ) AS col1

Parse error on line 1:
... 93 - + 8, 22 ) DIV NULLIF ( + 41 + - 54
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT + 42 * + + 85 * - 50 + - 81 + + COUNT( * ) + + 71 - - COUNT( * ) + 79 + 73 * SUM( ALL CAST( - 15 AS SIGNED ) DIV 89 )

Parse error on line 1:
...T( - 15 AS SIGNED ) DIV 89 )
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT - 50 * + - 92 + + + COUNT( * ) - + COUNT( * ) DIV SUM( DISTINCT + ( 26 ) ) * + 4 + - 60 - - COUNT( * )

Parse error on line 1:
... - + COUNT( * ) DIV SUM( DISTINCT + ( 26
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'SUM'
```

```sql
SELECT - + COUNT( * ) DIV MAX( - + ( + CAST( + ( - - 1 ) AS SIGNED ) ) ) * 75 AS col0

Parse error on line 1:
... - + COUNT( * ) DIV MAX( - + ( + CAST( +
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MAX'
```

```sql
SELECT DISTINCT + - 82 * 34 * - 39 + - 69 col0, - 57 * - CAST( NULL AS SIGNED ) / 7 + + 90 AS col0

Expected: ["108663","NULL"] but got ["NULL","NULL"]
```

```sql
SELECT + COUNT( DISTINCT + + CAST( 14 AS SIGNED ) ) + + - 10 + + 17 + + - COALESCE ( - - 28, - 8 * - COUNT( * ) * - + NULLIF ( - + 56, + 63 ) - - ( - 86 ) + + CASE 72 WHEN - COUNT( * ) DIV - MIN( DISTINCT 27 ) + 54 THEN + ( 97 ) DIV - 85 WHEN AVG ( 6 ) THEN NULL END ) * NULLIF ( 5 + - 65, + 63 ) * - ( + 22 * + MAX( + 78 ) ) AS col1

Parse error on line 1:
...2 WHEN - COUNT( * ) DIV - MIN( DISTINCT 
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'THEN', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT 6 + - + 0 * + 51 / + ( CASE WHEN + 76 BETWEEN - 93 * + + CAST( - - 7 AS SIGNED ) * 71 * + + 10 - + AVG ( DISTINCT - 95 ) AND - 61 THEN - - 39 WHEN 73 BETWEEN 8 AND - ( 25 ) + 86 THEN + COUNT( * ) * AVG ( 33 ) END ) * 89 AS col1

Cannot read property 'toString' of undefined
```

```sql
SELECT ALL + CAST( NULL AS SIGNED ) AS col1, CASE - 45 WHEN 29 THEN + - COUNT( * ) WHEN + 74 THEN NULL END AS col1

Expected: ["NULL","NULL"] but got ["NULL"]
```

```sql
SELECT DISTINCT 67 AS col2, + CAST( NULL AS SIGNED ) + MAX( DISTINCT 87 ) * - - 30 col2

Expected: ["67","NULL"] but got ["NULL"]
```

```sql
SELECT + CAST( + COUNT( * ) AS SIGNED ) + - COUNT( * ) + - MAX( - 43 )

Expected: ["43"] but got ["NULL"]
```

```sql
SELECT ALL COALESCE ( ( 19 ), - 0 * - CASE - 67 DIV 91 WHEN 34 - - COUNT( * ) THEN ( NULLIF ( 11, 33 ) ) * MAX( + 48 ) + ( - COUNT( * ) ) END + 37 DIV + 87, 25 * 86 )

Parse error on line 1:
..., - 0 * - CASE - 67 DIV 91 WHEN 34 - - C
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'WHEN', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT DISTINCT - 12 - - - 58 DIV MIN( ALL + 33 ) AS col2

Parse error on line 1:
...T - 12 - - - 58 DIV MIN( ALL + 33 ) AS c
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MIN'
```

#### ☓ Ran 10012 tests as mysql

* 1641 failed
* 83% was OK

Time: 14987ms

---- ---- ---- ---- ---- ---- ----
### 98/125 `test/random/expr/slt_good_7.test`

_Mimic mysql_
```sql
SELECT ALL - 83 DIV - 36 AS col1

Parse error on line 1:
SELECT ALL - 83 DIV - 36 AS col1
--------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT DISTINCT 17 DIV MIN( 95 )

Parse error on line 1:
...ECT DISTINCT 17 DIV MIN( 95 )
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MIN'
```

```sql
SELECT ALL 63 DIV + 95 AS col2

Parse error on line 1:
SELECT ALL 63 DIV + 95 AS col2
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT DISTINCT 67 * + 94 AS col0, - 93 col0

Expected: ["6298","-93"] but got ["-93","-93"]
```

```sql
SELECT - 21 DIV 14 * - 27 + COUNT( * ) * + - NULLIF ( + 87, - - 49 + - - COUNT( * ) ) AS col0

Parse error on line 1:
SELECT - 21 DIV 14 * - 27 + COUNT( *
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT - COALESCE ( + ( + - 77 ), - 44 + - - 53 * + 44 * 5 * - AVG ( ALL + 6 ) DIV - - 27 + + + ( + CAST( + 75 AS SIGNED ) ) DIV + COUNT( * ) + - COALESCE ( - 17, - - 35 + - COUNT( * ) * + + CASE + 34 WHEN + 75 THEN NULL WHEN + 59 DIV + 13 THEN + 19 * + 56 ELSE NULL END + 38 ) ) * + 82 * 39 + - 69 AS col2

Parse error on line 1:
...* - AVG ( ALL + 6 ) DIV - - 27 + + + ( +
-----------------------^
Expecting 'EOF', 'COMMA', 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT - 33 AS col0, 3 / + COUNT( * ) + - CASE - 63 WHEN + + 43 * + COUNT( * ) THEN + 77 * + ( 69 ) WHEN - + ( + 24 ) + + 83 * - - 92 THEN + 91 END + - - 12 * + 64 col0

Expected: ["-33","NULL"] but got ["NULL"]
```

```sql
SELECT ALL + 50 col2, CASE + 78 WHEN 53 THEN COUNT( * ) DIV - 70 ELSE COUNT( * ) * 27 END + + 83 + - - 37 AS col2

Parse error on line 1:
... 53 THEN COUNT( * ) DIV - 70 ELSE COUNT(
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'WHEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT COUNT( * ) + - - 57 + 83 DIV ( - CAST( 90 AS SIGNED ) * 54 + + 75 )

Parse error on line 1:
...) + - - 57 + 83 DIV ( - CAST( 90 AS SIGN
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT DISTINCT CASE WHEN NOT NULLIF ( 11, - 27 ) BETWEEN - 40 + + 42 AND - CASE CAST( + 34 AS SIGNED ) WHEN ( 22 ) + + 40 THEN - 15 * 68 ELSE - 4 * 78 END THEN 72 END / COALESCE ( + 58, + MIN( - 44 ) ) AS col2

Cannot read property 'toString' of undefined
```

```sql
SELECT + 57 * - SUM( DISTINCT CAST( NULL AS DECIMAL ) ) - 76 col2

Expected: ["NULL"] but got ["-76"]
```

```sql
SELECT DISTINCT 27 col1, - CASE - + 30 WHEN + 37 THEN NULL WHEN + 0 + 2 * - 60 THEN + ( 95 ) / COALESCE ( - 40, 57 / - 17 ) WHEN - 64 - - 98 THEN NULL ELSE NULL END AS col1

Expected: ["27","NULL"] but got ["NULL","NULL"]
```

```sql
SELECT ALL + 99 * + CAST( - + COUNT( ALL - 18 ) AS SIGNED ) AS col2

g is not defined
```

```sql
SELECT - 38 + + + SUM( ALL - + NULLIF ( + 0, + 51 * + CAST( - 41 AS SIGNED ) ) ) AS col0, ( 39 ) + CAST( - 10 + 45 * COUNT( * ) AS SIGNED ) AS col1

Expected: ["-38","74"] but got ["-38","NULL"]
```

```sql
SELECT + NULLIF ( + 29, + + CASE - AVG ( DISTINCT ( - 44 ) ) WHEN + - 38 * 37 + 87 * - 77 DIV - - 23 * - 17 THEN COALESCE ( - 48, - + 46 ) ELSE - 43 DIV + 31 + 75 END * 53 ) DIV 19 AS col1

Parse error on line 1:
...38 * 37 + 87 * - 77 DIV - - 23 * - 17 TH
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'THEN', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT ( COUNT( * ) ) * 32 * CAST( + + COUNT( * ) AS SIGNED ) - 33 + - MIN( ALL 81 ) * 17 DIV CAST( + + 46 AS SIGNED )

Parse error on line 1:
...( ALL 81 ) * 17 DIV CAST( + + 46 AS SIGN
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT ALL - 90 * ( + - 1 ) DIV COUNT( DISTINCT - - 31 ) * + 11 * + COUNT( * ) - + + 4 * - + 83 * - 80 AS col1

Parse error on line 1:
... 90 * ( + - 1 ) DIV COUNT( DISTINCT - - 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT ALL 93 DIV MAX( ALL ( + 18 ) )

Parse error on line 1:
SELECT ALL 93 DIV MAX( ALL ( + 18 ) )
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MAX'
```

```sql
SELECT ALL + CASE + CAST( NULL AS SIGNED ) WHEN + + 22 * 38 THEN NULL ELSE - CAST( + + COUNT( * ) AS SIGNED ) DIV + 32 END

Parse error on line 1:
...NT( * ) AS SIGNED ) DIV + 32 END
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT 6 DIV SUM( 48 ) AS col0

Parse error on line 1:
SELECT 6 DIV SUM( 48 ) AS col0
-------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'SUM'
```

```sql
SELECT DISTINCT - 69 DIV COALESCE ( 83, NULLIF ( + 4, + 36 ) * COALESCE ( + 24 * 75, + 44 ) + 41 * 47 ) AS col1

Parse error on line 1:
...T DISTINCT - 69 DIV COALESCE ( 83, NULLI
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT - 63 + - 47 + 68 - 56 * MIN( DISTINCT + 13 ) DIV CASE - 32 WHEN - 73 - 77 THEN NULL WHEN + 64 + - 74 THEN NULL ELSE - 81 + + 24 END AS col2

Parse error on line 1:
...DISTINCT + 13 ) DIV CASE - 32 WHEN - 73 
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CASE'
```

```sql
SELECT - 95 - - + 1 + ( COUNT( * ) + + ( 93 + 87 DIV - 39 ) ) AS col2

Parse error on line 1:
...( * ) + + ( 93 + 87 DIV - 39 ) ) AS col2
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT ALL CASE + - 61 WHEN - MAX( DISTINCT + 77 ) THEN + - ( + 90 ) END col2, + 61 + - - 58 + 37 + + 19 * - ( 0 ) * + - CASE 92 WHEN - 25 * + 36 + - - 49 + 35 - - 81 THEN - + 63 + + 74 END / 19 * COUNT( - CAST( - + 26 AS DECIMAL ) ) * - + 91 * + + CASE - 90 WHEN - 99 THEN + 74 WHEN + 46 THEN NULL ELSE 10 END AS col2

Expected: ["NULL","NULL"] but got ["NULL"]
```

#### ☓ Ran 10012 tests as mysql

* 1662 failed
* 83% was OK

Time: 14855ms

---- ---- ---- ---- ---- ---- ----
### 99/125 `test/random/expr/slt_good_8.test`

_Mimic mysql_
```sql
SELECT ALL - 28 + - 30 * - + COUNT( * ) AS col2, + 59 DIV - COUNT( * ) AS col0

Parse error on line 1:
...) AS col2, + 59 DIV - COUNT( * ) AS col0
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT 48 DIV + + 76 + + - 81 + - 78 + + - 92

Parse error on line 1:
SELECT 48 DIV + + 76 + + - 81 + - 
--------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT ALL - ( - - CAST( COUNT( * ) AS SIGNED ) ) + 92

g is not defined
```

```sql
SELECT ALL ( 10 ) + - ( - + 53 ) + + COUNT( * ) AS col2, + 44 DIV 46 AS col2

Parse error on line 1:
...) AS col2, + 44 DIV 46 AS col2
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT DISTINCT 16 * + 63 AS col1, 20 + 11 DIV SUM( ALL + - 65 )

Parse error on line 1:
...S col1, 20 + 11 DIV SUM( ALL + - 65 )
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'SUM'
```

```sql
SELECT 78 * + - 8 AS col0, - 74 AS col0

Expected: ["-624","-74"] but got ["-74","-74"]
```

```sql
SELECT DISTINCT + CASE + - COUNT( * ) WHEN 8 THEN NULL WHEN CAST( NULL AS DECIMAL ) THEN - SUM( DISTINCT + 41 ) ELSE + COALESCE ( + 30, + - ( 11 ) DIV 98 + + 24 ) END AS col0

Parse error on line 1:
... ( + 30, + - ( 11 ) DIV 98 + + 24 ) END 
-----------------------^
Expecting 'EOF', 'COMMA', 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT COALESCE ( 8, - 90 ) * + 74, + CASE - COUNT( * ) WHEN + - CASE WHEN - 50 NOT BETWEEN + ( - 5 ) + 1 * - 15 AND COUNT( * ) THEN - 87 * + 60 END THEN NULL WHEN + 17 THEN 0 * CAST( - CAST( 8 AS SIGNED ) AS SIGNED ) END / 82 + - 48 * - 21 AS col1

Cannot read property 'toString' of undefined
```

```sql
SELECT DISTINCT CASE + - 29 WHEN - COALESCE ( 97, - 44 ) THEN NULL ELSE - 9 DIV 86 * + 59 END

Parse error on line 1:
... THEN NULL ELSE - 9 DIV 86 * + 59 END
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT ALL ( + CASE WHEN NOT 47 >= + 66 THEN - 66 ELSE NULL END )

Expected: ["-66"] but got ["NULL"]
```

```sql
SELECT 37 + + - 9 + + 72 - - - NULLIF ( + MAX( ALL 82 ), + - 69 * + + COUNT( * ) ) - COUNT( ( - COALESCE ( + - 43, + 24 ) ) ), 17 DIV CASE 88 WHEN - - 46 * 55 THEN - CASE + 75 WHEN + 15 THEN NULL WHEN + 89 + + 10 THEN + 96 END ELSE NULLIF ( + 99, - 90 * 50 ) + + 19 END AS col2

Parse error on line 1:
... + 24 ) ) ), 17 DIV CASE 88 WHEN - - 46 
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CASE'
```

```sql
SELECT ALL + CASE WHEN NOT NULL IS NULL THEN 11 ELSE NULL END AS col2, - 90 * - - 49 * + 40 AS col2

Expected: ["NULL","-176400"] but got ["-176400","-176400"]
```

```sql
SELECT COALESCE ( 2, + - COUNT( * ) * NULLIF ( - - CASE 32 WHEN - 73 DIV + CAST( NULL AS SIGNED ) + + 81 THEN NULL WHEN + CAST( NULL AS SIGNED ) THEN + - 94 * 28 ELSE - COALESCE ( + - ( ( - 80 ) ), + 58 * + 48 + - + 35 * + 6 ) END, + - 47 * + CAST( COUNT( * ) AS SIGNED ) DIV + COUNT( * ) + + COUNT( * ) + - 53 * - 29 + - 53 ) + SUM( DISTINCT + 42 ) DIV + 73, 81 ) DIV COUNT( * ) AS col2

Parse error on line 1:
...- CASE 32 WHEN - 73 DIV + CAST( NULL AS 
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'THEN', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT ALL 86 + - + 83 + - 54 DIV COALESCE ( + 6, + 13 * 6 - - ( 46 ) ) * + 5

Parse error on line 1:
...+ - + 83 + - 54 DIV COALESCE ( + 6, + 13
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL - COUNT( * ) DIV COUNT( * ) * + 83 - 34 AS col1

Parse error on line 1:
...LL - COUNT( * ) DIV COUNT( * ) * + 83 - 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT + 0 DIV ( - 11 ) + - + 85

Parse error on line 1:
SELECT + 0 DIV ( - 11 ) + - + 85
---------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT DISTINCT - CASE 14 WHEN 17 + 74 THEN NULL ELSE CASE 63 WHEN + 61 THEN 95 * - - COUNT( * ) * COUNT( * ) - + 76 ELSE NULL END + - + 2 + 90 - 20 - - 39 / + 45 * - 43 END col2, 38

Expected: ["NULL","38"] but got ["38","NULL"]
```

```sql
SELECT ALL - ( + - ( + 38 ) ) col0, - 66 + 33 + + 2 + + 30 + - + CAST( NULL AS SIGNED ) AS col0

Expected: ["38","NULL"] but got ["NULL","NULL"]
```

```sql
SELECT COALESCE ( + CASE - 91 WHEN 25 THEN 83 DIV + 45 * + 59 * - COALESCE ( - 82, ( - - 17 ) * - 62 + - 0 * - - ( + 27 ) - 32 ) + - 6 + + 13 - + + 19 + - 22 WHEN + 68 THEN NULL WHEN + COALESCE ( - COUNT( * ), - COUNT( * ) * - + 20 + - + 35 + + + 47 + 64 - - 62, - 29 ) THEN NULL ELSE NULL END, - 67 * NULLIF ( - - 84, 76 * 75 ) * - 31 * 60 ) DIV + 91 AS col2

Parse error on line 1:
... 91 WHEN 25 THEN 83 DIV + 45 * + 59 * - 
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'WHEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT DISTINCT - MAX( + 7 ) + + COUNT( * ) + - 20 + + 20 + - COUNT( + + CAST( NULL AS SIGNED ) ) - + 68 + - 27 - - ( + ( 49 ) ) DIV CAST( + ( + 80 ) * COALESCE ( CAST( NULL AS SIGNED ) DIV COUNT( * ), - 56, - 4 * MIN( DISTINCT 39 * + 98 ) + + 52 ) AS SIGNED ) * 30 * - 56 * 11 AS col1

Parse error on line 1:
... - ( + ( 49 ) ) DIV CAST( + ( + 80 ) * C
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT + NULLIF ( + 80, + 85 * + CAST( NULL AS SIGNED ) + - 44 ) DIV MAX( + 44 )

Parse error on line 1:
...GNED ) + - 44 ) DIV MAX( + 44 )
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MAX'
```

```sql
SELECT 99 + 38 DIV MIN( + 40 ) + + ( 65 )

Parse error on line 1:
SELECT 99 + 38 DIV MIN( + 40 ) + + ( 65
-------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MIN'
```

```sql
SELECT + - 18 DIV + + 19 + + - 1

Parse error on line 1:
SELECT + - 18 DIV + + 19 + + - 1
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT 3 * ( - 30 DIV - 94 ) + COUNT( * ) col0

Parse error on line 1:
SELECT 3 * ( - 30 DIV - 94 ) + COUNT( 
------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT DISTINCT + + MAX( 54 ) / - - SUM( - CAST( NULL AS DECIMAL ) ) * + 31 * - + ( 75 ) + - 8

Expected: ["NULL"] but got ["-Infinity"]
```

```sql
SELECT DISTINCT ( + 34 ) * + CASE + NULLIF ( AVG ( ALL + 65 ), + 59 - 27 ) DIV + CASE 69 WHEN COALESCE ( AVG ( DISTINCT - 31 ), 24 ) THEN NULLIF ( - 20, + COUNT( * ) + 89 * + 54 ) ELSE NULL END + + 56 WHEN + NULLIF ( - COUNT( DISTINCT 22 ), 66 * - 28 ) DIV - 32 THEN NULL WHEN 97 THEN NULL ELSE 96 DIV + COUNT( * ) END AS col1

Parse error on line 1:
...+ 65 ), + 59 - 27 ) DIV + CASE 69 WHEN C
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'WHEN', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT DISTINCT - 20 * + - 74 * - + 79 - + 6 + - 75 DIV + 15 AS col0

Parse error on line 1:
...79 - + 6 + - 75 DIV + 15 AS col0
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

#### ☓ Ran 10012 tests as mysql

* 1731 failed
* 82% was OK

Time: 15338ms

---- ---- ---- ---- ---- ---- ----
### 100/125 `test/random/expr/slt_good_9.test`

_Mimic mysql_
```sql
SELECT - NULLIF ( 52, 73 ) DIV - 38 AS col1

Parse error on line 1:
...LLIF ( 52, 73 ) DIV - 38 AS col1
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT - ( - - 7 ) + - COUNT( * ) DIV + - ( + 17 )

Parse error on line 1:
... + - COUNT( * ) DIV + - ( + 17 )
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT DISTINCT 76 AS col2, COUNT( * ) AS col2

Expected: ["76","1"] but got ["1"]
```

```sql
SELECT 22 col1, 35 * + CASE 28 WHEN 4 THEN NULL WHEN - 57 THEN 46 END * + 57 / - 91 AS col1

Expected: ["22","NULL"] but got ["NULL","NULL"]
```

```sql
SELECT ALL + 88 DIV 13 col1

Parse error on line 1:
SELECT ALL + 88 DIV 13 col1
--------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT ALL + CAST( + ( COUNT( * ) ) AS SIGNED )

g is not defined
```

```sql
SELECT DISTINCT - 85, + COALESCE ( + 84, - 34 DIV + 9 ) AS col0

Parse error on line 1:
...ALESCE ( + 84, - 34 DIV + 9 ) AS col0
-----------------------^
Expecting 'EOF', 'COMMA', 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT 87, + 53 + ( + - 75 ) - 60 + NULLIF ( - 95, - COUNT( - 30 ) * + COUNT( * ) * - 43 * + 5 + - COUNT( ALL 98 ) ) * + ( - 64 ) DIV COUNT( * ) AS col1

Parse error on line 1:
... ) * + ( - 64 ) DIV COUNT( * ) AS col1
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COUNT'
```

```sql
SELECT DISTINCT + COALESCE ( - CASE - + 8 WHEN - 20 THEN NULL WHEN + + COALESCE ( 94, - 64 * - - COUNT( * ) * - - 3 ) + - 60 THEN NULL ELSE + - 59 DIV CASE - + 34 WHEN - 68 + + 28 THEN + + 20 * - - 81 * + - 36 ELSE NULL END END, + 87 * - ( - ( + 46 ) ) + - - ( 42 ) ) DIV COUNT( * ) + 28 AS col2

Parse error on line 1:
...EN NULL ELSE + - 59 DIV CASE - + 34 WHEN
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT ALL SUM( ALL + + 26 ) DIV MIN( + 40 ) AS col0

Parse error on line 1:
...M( ALL + + 26 ) DIV MIN( + 40 ) AS col0
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MIN'
```

```sql
SELECT ALL + COUNT( * ) AS col1, 53 / CASE - 61 WHEN 73 + COUNT( * ) THEN COUNT( * ) * - 10 + - - 16 + + + 38 / COUNT( DISTINCT 78 ) + + 15 + 1 WHEN - + 91 THEN + COUNT( * ) + 49 END + 14 / 6 col1

Expected: ["1","NULL"] but got ["NULL"]
```

```sql
SELECT DISTINCT 60 * COUNT( * ) / 98 + + - ( ( COUNT( * ) ) ) + + CAST( NULL AS SIGNED ) AS col1, - COUNT( * ) AS col1

Expected: ["NULL","-1"] but got ["-1"]
```

```sql
SELECT ALL 31 DIV ( - 53 ) + 59 + 21 * 34, + 64 + NULLIF ( + + 56, 49 + CASE - 36 WHEN - 74 + - 71 THEN - COUNT( * ) ELSE + 23 + + 34 + - - 13 END ) AS col0

Parse error on line 1:
SELECT ALL 31 DIV ( - 53 ) + 59 + 21 *
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT NULLIF ( + CAST( COUNT( * ) AS SIGNED ), 13 + - 24 + COUNT( * ) + - 27 * + 31 ) AS col0

Expected: ["1"] but got ["NULL"]
```

```sql
SELECT CASE - COALESCE ( + 2, - CAST( NULL AS SIGNED ) ) WHEN + + 11 * - + 93 * 31 THEN 1 + + 71 WHEN - 72 THEN NULL END - - CASE WHEN ( NULL ) IS NOT NULL THEN NULL WHEN - 33 BETWEEN ( NULL ) AND - 14 THEN + 27 END - + 30 / - COALESCE ( 26, - NULLIF ( - 59, - COUNT( * ) ) + + COUNT( * ) + + 41 * 89 + 74 )

Cannot read property 'toString' of undefined
```

```sql
SELECT DISTINCT + COUNT( * ) DIV COALESCE ( + 9, COUNT( * ), + 2 ) * 32

Parse error on line 1:
...CT + COUNT( * ) DIV COALESCE ( + 9, COUN
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL + 67 DIV CASE - + 4 WHEN - + 18 THEN NULL ELSE + 95 * - 58 + + 16 END * 44 AS col1

Parse error on line 1:
SELECT ALL + 67 DIV CASE - + 4 WHEN - + 
--------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CASE'
```

```sql
SELECT ALL + COUNT( * ) DIV CAST( - 32 AS SIGNED ) + + 56

Parse error on line 1:
...LL + COUNT( * ) DIV CAST( - 32 AS SIGNED
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT DISTINCT - 66 * - - MIN( DISTINCT - 93 ) / + 66 + CAST( - 32 AS SIGNED ) / + SUM( - + CAST( NULL AS SIGNED ) ) * 14 AS col2

Expected: ["NULL"] but got ["-Infinity"]
```

```sql
SELECT - 40 DIV SUM( - + 45 ) + + 24 * 48 AS col1

Parse error on line 1:
SELECT - 40 DIV SUM( - + 45 ) + + 24
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'SUM'
```

```sql
SELECT ALL COALESCE ( + 42, 91 * - COALESCE ( - CASE + COALESCE ( + 78, - 97 + - 85 ) WHEN + 83 DIV - 74 * + - 86 + 95 + + + COUNT( * ) * - + 96 THEN 29 END, + + 68 * - - 67 + 14 - + 71 ) ) + + - 93 - + 17 DIV + + 59 AS col2

Parse error on line 1:
... + - 85 ) WHEN + 83 DIV - 74 * + - 86 + 
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'THEN', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT + 10, - COALESCE ( + 20, 39, CASE - 24 WHEN + MAX( - 70 ) THEN NULL WHEN 83 + - 4 THEN NULL WHEN 12 - 94 THEN - ( + CAST( NULL AS SIGNED ) ) + + 57 DIV CAST( NULL AS SIGNED ) ELSE - 14 + COUNT( - 45 - - 12 ) END + 80 ) + - 59 AS col0

Parse error on line 1:
...S SIGNED ) ) + + 57 DIV CAST( NULL AS SI
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'WHEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT - 12 * + ( - CAST( NULL AS SIGNED ) ) AS col0, + CASE MAX( - 48 ) WHEN 20 * - 45 THEN COUNT( * ) WHEN - 8 THEN 60 ELSE NULL END AS col0

Expected: ["NULL","NULL"] but got ["NULL"]
```

#### ☓ Ran 10012 tests as mysql

* 1697 failed
* 83% was OK

Time: 14502ms

---- ---- ---- ---- ---- ---- ----
### 101/125 `test/random/groupby/slt_good_0.test`

_Mimic mysql_
```sql
SELECT - tab1.col0 * 84 + + 38 AS col2 FROM tab1 GROUP BY tab1.col0

Expected: ["-1810","-2314","-6850"] but got ["NULL","NULL","NULL"]
```

```sql
SELECT ALL + tab2.col1 DIV tab2.col1 FROM tab2 GROUP BY col1

Parse error on line 1:
...ALL + tab2.col1 DIV tab2.col1 FROM tab2 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT DISTINCT * FROM tab0 AS cor0 GROUP BY cor0.col1, cor0.col2, cor0.col0

The hash of 9 returned values was different than expected. Check the sorting: 0, 38, 83, 0, 79, 26, 81, 24, 43
```

```sql
SELECT - + cor0.col1 FROM tab0, tab0 cor0 GROUP BY cor0.col1

Expected: ["-81","0"] but got ["NULL","NULL"]
```

```sql
SELECT DISTINCT + cor0.col1 FROM tab2 cor0 GROUP BY cor0.col1

Expected: ["41","59","61"] but got ["NULL"]
```

```sql
SELECT 9 DIV + cor0.col0 AS col1 FROM tab0 AS cor0 GROUP BY cor0.col0, cor0.col2

Parse error on line 1:
SELECT 9 DIV + cor0.col0 AS col1 
-------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT ALL 59 DIV 26 FROM tab2 AS cor0 GROUP BY cor0.col0

Parse error on line 1:
SELECT ALL 59 DIV 26 FROM tab2 AS cor0
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT + + cor0.col0 DIV - cor0.col0 FROM tab1, tab0 AS cor0 GROUP BY cor0.col0

Parse error on line 1:
...T + + cor0.col0 DIV - cor0.col0 FROM tab
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT cor0.col1 DIV ( + 99 ) col0 FROM tab0 AS cor0 GROUP BY cor0.col1

Parse error on line 1:
...ELECT cor0.col1 DIV ( + 99 ) col0 FROM t
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT cor0.col2 AS col2 FROM tab2 AS cor0 GROUP BY col2 HAVING NOT NULL < NULL

Query was expected to return results (but did not): []
```

```sql
SELECT - CASE col1 WHEN + cor0.col1 THEN 48 ELSE - 0 END AS col0 FROM tab1 cor0 GROUP BY cor0.col1

Expected: ["-48","-48","-48"] but got ["0","0","0"]
```

```sql
SELECT + cor1.col1 AS col0 FROM tab0 AS cor0 CROSS JOIN tab2 AS cor1 GROUP BY cor0.col0, cor1.col1

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT DISTINCT cor0.col1 + - COALESCE ( + 57, + col2 ) FROM tab1 AS cor0 GROUP BY col1

Expected: ["-13","-51","0"] but got ["NULL"]
```

```sql
SELECT DISTINCT + COALESCE ( cor0.col2, col2 ) DIV CAST( - 56 AS SIGNED ) AS col1 FROM tab1 AS cor0 GROUP BY cor0.col2

Parse error on line 1:
...r0.col2, col2 ) DIV CAST( - 56 AS SIGNED
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT + CASE cor0.col2 WHEN cor0.col1 THEN col1 END AS col1 FROM tab0 AS cor0 GROUP BY cor0.col2, cor0.col1

Expected: ["NULL","NULL","NULL"] but got ["0","0","81"]
```

#### ☓ Ran 10012 tests as mysql

* 4217 failed
* 57% was OK

Time: 12742ms

---- ---- ---- ---- ---- ---- ----
### 102/125 `test/random/groupby/slt_good_1.test`

_Mimic mysql_
```sql
SELECT 47 DIV + cor0.col1 FROM tab1 AS cor0 GROUP BY col1

Parse error on line 1:
SELECT 47 DIV + cor0.col1 FROM tab
--------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT DISTINCT + cor0.col1 AS col2 FROM tab0 AS cor0 GROUP BY col1, cor0.col0

Expected: ["0","81"] but got ["NULL"]
```

```sql
SELECT 79 * tab2.col2 + - 76 FROM tab2, tab1 AS cor0 GROUP BY tab2.col2

Expected: ["4506","6165","6797"] but got ["NULL","NULL","NULL"]
```

```sql
SELECT - col2 FROM tab0 GROUP BY col2 HAVING NOT NULL IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT 12 DIV cor0.col0 FROM tab2 cor0 GROUP BY col0

Parse error on line 1:
SELECT 12 DIV cor0.col0 FROM tab2 
--------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL + cor0.col1 + + ( col1 ) AS col1 FROM tab0 AS cor0 GROUP BY col1

Expected: ["0","162"] but got ["NULL","NULL"]
```

```sql
SELECT cor0.col1 DIV - 12 AS col2 FROM tab2 cor0 GROUP BY cor0.col1

Parse error on line 1:
...ELECT cor0.col1 DIV - 12 AS col2 FROM ta
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT DISTINCT - NULLIF ( + cor0.col2 * cor0.col1, - cor0.col1 ) + - 31 * cor0.col2 - - col1 col2 FROM tab0 cor0 GROUP BY cor0.col1, cor0.col2

Expected: ["-2607","NULL"] but got ["NULL"]
```

```sql
SELECT 69 DIV 79 + cor1.col2 FROM tab0, tab1 AS cor0, tab2 AS cor1 GROUP BY cor1.col2

Parse error on line 1:
SELECT 69 DIV 79 + cor1.col2 FROM 
--------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT + cor1.col0 * cor1.col0 FROM tab0 AS cor0 CROSS JOIN tab2 AS cor1 GROUP BY cor1.col0, cor0.col2

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT COALESCE ( cor0.col2, + 58, cor0.col1 * cor0.col0 ) col1 FROM tab2 AS cor0 GROUP BY cor0.col2

Expected: ["58","79","87"] but got ["58","58","58"]
```

```sql
SELECT - NULLIF ( + col2, cor0.col2 ) * - COALESCE ( 78, + cor0.col1 ) FROM tab0 AS cor0 GROUP BY cor0.col2

Expected: ["NULL","NULL","NULL"] but got ["1872","2964","6162"]
```

```sql
SELECT ALL - cor0.col2 DIV CAST( 53 AS SIGNED ) + cor0.col2 FROM tab2 AS cor0 GROUP BY cor0.col2

Parse error on line 1:
...ALL - cor0.col2 DIV CAST( 53 AS SIGNED )
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT cor0.col0 DIV ( - cor0.col2 ) + col2 * cor0.col0 FROM tab0 AS cor0 GROUP BY cor0.col0, cor0.col2

Parse error on line 1:
...ELECT cor0.col0 DIV ( - cor0.col2 ) + co
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT ALL cor1.col2 FROM tab1 AS cor0 CROSS JOIN tab2 AS cor1 GROUP BY cor0.col2, cor1.col2

The hash of 9 returned values was different than expected. Check the sorting: 58, 58, 58, 79, 79, 79, 87, 87, 87
```

```sql
SELECT ALL COALESCE ( 57, - col2 DIV col0 + + ( 49 ) * cor0.col1 ) AS col0 FROM tab0 AS cor0 GROUP BY cor0.col1, cor0.col0

Parse error on line 1:
...ALESCE ( 57, - col2 DIV col0 + + ( 49 ) 
-----------------------^
Expecting 'EOF', 'COMMA', 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT + cor0.col2 - - ( - 19 + cor0.col2 DIV 84 ) FROM tab1 AS cor0 GROUP BY cor0.col2

Parse error on line 1:
... ( - 19 + cor0.col2 DIV 84 ) FROM tab1 A
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT ALL 86 + cor1.col0 FROM tab0 AS cor0 CROSS JOIN tab0 AS cor1 GROUP BY cor0.col1, cor1.col0

Expected: ["112","112","129","129","169","169"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT ALL CASE - cor0.col1 WHEN cor0.col1 THEN NULL ELSE cor0.col1 END FROM tab0 cor0 GROUP BY cor0.col1

Expected: ["81","NULL"] but got ["NULL","NULL"]
```

```sql
SELECT DISTINCT cor0.col1 * - 17 + cor0.col1 FROM tab2 AS cor0 GROUP BY cor0.col1

Expected: ["-656","-944","-976"] but got ["NULL"]
```

```sql
SELECT DISTINCT cor1.col0 - + cor0.col0 * cor0.col0 AS col1 FROM tab2 AS cor0 CROSS JOIN tab2 AS cor1 GROUP BY cor0.col0, cor1.col0

1 results returned but expected 9
```

```sql
SELECT DISTINCT - cor0.col2 * CASE 41 WHEN + 82 THEN col1 DIV 13 ELSE 38 END AS col0 FROM tab1 AS cor0 GROUP BY cor0.col2

Parse error on line 1:
...WHEN + 82 THEN col1 DIV 13 ELSE 38 END A
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'WHEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT NULLIF ( - col1, cor0.col1 + + cor0.col1 ) FROM tab0 AS cor0 GROUP BY cor0.col1

Expected: ["-81","NULL"] but got ["-81","0"]
```

```sql
SELECT NULLIF ( cor0.col1, cor0.col1 * 4 + - col1 ) * + cor0.col0 AS col1 FROM tab0 AS cor0 GROUP BY cor0.col0, cor0.col1, cor0.col1

Expected: ["3483","NULL","NULL"] but got ["NULL","NULL","NULL"]
```

#### ☓ Ran 10012 tests as mysql

* 4137 failed
* 58% was OK

Time: 12765ms

---- ---- ---- ---- ---- ---- ----
### 103/125 `test/random/groupby/slt_good_2.test`

_Mimic mysql_
```sql
SELECT ALL - ( 50 ) + tab1.col2 AS col1 FROM tab1 GROUP BY col2

Expected: ["-42","-5","21"] but got ["NULL","NULL","NULL"]
```

```sql
SELECT DISTINCT + cor0.col1 AS col0 FROM tab2 AS cor0 GROUP BY cor0.col1, cor0.col1, cor0.col1

Expected: ["41","59","61"] but got ["NULL"]
```

```sql
SELECT - 66 + cor0.col1 FROM tab0 AS cor0 GROUP BY col1

Expected: ["-66","15"] but got ["NULL","NULL"]
```

```sql
SELECT DISTINCT - 70 DIV - 15 + col1 AS col2 FROM tab0 GROUP BY tab0.col1

Parse error on line 1:
...T DISTINCT - 70 DIV - 15 + col1 AS col2 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT ALL + cor0.col2 DIV cor0.col2 AS col1 FROM tab0 AS cor0 GROUP BY cor0.col2

Parse error on line 1:
...ALL + cor0.col2 DIV cor0.col2 AS col1 FR
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT DISTINCT cor0.col2 DIV 66 + 55 AS col1 FROM tab2 cor0 GROUP BY cor0.col2

Parse error on line 1:
...TINCT cor0.col2 DIV 66 + 55 AS col1 FROM
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT DISTINCT + cor0.col1 DIV + 38 AS col1 FROM tab2 AS cor0 GROUP BY cor0.col1

Parse error on line 1:
...NCT + cor0.col1 DIV + 38 AS col1 FROM ta
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT NULLIF ( + col1, cor0.col1 * - ( cor0.col1 ) ) AS col2 FROM tab0 cor0 GROUP BY cor0.col1, cor0.col0

Expected: ["81","NULL","NULL"] but got ["0","0","81"]
```

```sql
SELECT + COALESCE ( - cor0.col2, + 16, - cor0.col1 ) col1 FROM tab2 cor0 GROUP BY col2

Expected: ["-58","-79","-87"] but got ["16","16","16"]
```

```sql
SELECT ALL cor0.col2 FROM tab0 AS cor0 GROUP BY cor0.col2 HAVING NOT NULL < NULL

Query was expected to return results (but did not): []
```

```sql
SELECT ALL + cor0.col2 col1 FROM tab2 AS cor0 CROSS JOIN tab0 AS cor1 GROUP BY cor0.col1, cor0.col2, cor1.col1

Expected: ["58","58","79","79","87","87"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT ALL 34 AS col1 FROM tab0 AS cor0 CROSS JOIN tab2 cor1 GROUP BY cor0.col0, cor1.col1

The hash of 9 returned values was different than expected. Check the sorting: 34, 34, 34, 34, 34, 34, 34, 34, 34
```

```sql
SELECT COALESCE ( 30, col1 DIV CAST( 11 AS SIGNED ), cor0.col0 DIV - cor0.col2 + + cor0.col2, cor0.col2 + cor0.col2 DIV col2 ) AS col1 FROM tab0 AS cor0 GROUP BY cor0.col2, col1

Parse error on line 1:
...COALESCE ( 30, col1 DIV CAST( 11 AS SIGN
-----------------------^
Expecting 'EOF', 'COMMA', 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL + cor1.col2 AS col2 FROM tab2 AS cor0 CROSS JOIN tab2 AS cor1 GROUP BY cor1.col2, cor0.col1

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT DISTINCT cor0.col2 DIV ( + 28 ) AS col1 FROM tab1 cor0 GROUP BY col2

Parse error on line 1:
...TINCT cor0.col2 DIV ( + 28 ) AS col1 FRO
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT DISTINCT - cor0.col2 * - cor1.col0 col2 FROM tab0 AS cor0 CROSS JOIN tab1 cor1 GROUP BY cor0.col2, cor1.col0

1 results returned but expected 9
```

```sql
SELECT - - NULLIF ( col0, tab2.col0 ) AS col0 FROM tab2 GROUP BY tab2.col0

Expected: ["NULL","NULL","NULL"] but got ["15","91","92"]
```

```sql
SELECT + cor0.col1 - + NULLIF ( cor0.col1, COALESCE ( - cor0.col1, - cor0.col0, cor0.col1 + 52 ) ) FROM tab0 AS cor0 GROUP BY cor0.col1, cor0.col0

Expected: ["0","NULL","NULL"] but got ["NULL","NULL","NULL"]
```

#### ☓ Ran 10012 tests as mysql

* 4192 failed
* 58% was OK

Time: 13189ms

---- ---- ---- ---- ---- ---- ----
### 104/125 `test/random/groupby/slt_good_3.test`

_Mimic mysql_
```sql
SELECT 49 - - col2 * cor0.col1 FROM tab0 AS cor0 GROUP BY col1, cor0.col2

Expected: ["1993","49","49"] but got ["NULL","NULL","NULL"]
```

```sql
SELECT + tab1.col2 DIV - tab1.col2 FROM tab1 GROUP BY tab1.col2

Parse error on line 1:
...ECT + tab1.col2 DIV - tab1.col2 FROM tab
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT DISTINCT + tab1.col2 AS col1 FROM tab1 GROUP BY col2

Expected: ["45","71","8"] but got ["NULL"]
```

```sql
SELECT DISTINCT cor0.col1 AS col1 FROM tab1 AS cor0 GROUP BY cor0.col1 HAVING NOT NULL IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT 82 * cor0.col1 FROM tab0 AS cor0 GROUP BY cor0.col1

Expected: ["0","6642"] but got ["NULL","NULL"]
```

```sql
SELECT + 82 DIV 87 FROM tab0 GROUP BY tab0.col2

Parse error on line 1:
SELECT + 82 DIV 87 FROM tab0 GROUP B
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT + cor0.col1 DIV cor0.col1 FROM tab1 AS cor0 GROUP BY cor0.col1, cor0.col1

Parse error on line 1:
...ECT + cor0.col1 DIV cor0.col1 FROM tab1 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT - 73 DIV + cor0.col0 + + col0 AS col0 FROM tab2 AS cor0 GROUP BY cor0.col0

Parse error on line 1:
SELECT - 73 DIV + cor0.col0 + + col0
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT cor0.col0 FROM tab0 AS cor0 CROSS JOIN tab1 AS cor1 GROUP BY cor1.col2, cor1.col2, cor0.col0

The hash of 9 returned values was different than expected. Check the sorting: 26, 26, 26, 43, 43, 43, 83, 83, 83
```

```sql
SELECT CASE cor0.col0 WHEN cor0.col2 * + cor0.col2 THEN cor0.col2 WHEN - 42 DIV cor0.col2 + cor0.col0 THEN + ( - cor0.col0 ) WHEN - col2 + - cor0.col0 THEN NULL END + NULLIF ( + cor0.col2, + cor0.col0 ) FROM tab0 cor0 GROUP BY cor0.col0, col2

Parse error on line 1:
...cor0.col2 WHEN - 42 DIV cor0.col2 + cor0
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'THEN', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT COALESCE ( cor0.col1, + cor0.col1, - 70 + 16 ) AS col0 FROM tab0 AS cor0 GROUP BY cor0.col1

Expected: ["0","81"] but got ["-54","-54"]
```

```sql
SELECT ALL + CASE + tab1.col0 WHEN tab1.col0 THEN - tab1.col0 DIV tab1.col0 END AS col2 FROM tab1 GROUP BY tab1.col0

Parse error on line 1:
...l0 THEN - tab1.col0 DIV tab1.col0 END AS
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'WHEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT ALL - cor1.col1 + cor0.col0 AS col1 FROM tab1 AS cor0 CROSS JOIN tab2 cor1 GROUP BY cor1.col1, cor0.col0

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT ALL COALESCE ( 98, - col0 + - cor0.col2 DIV + cor0.col1 ) FROM tab2 AS cor0 GROUP BY cor0.col1, cor0.col1

Parse error on line 1:
... col0 + - cor0.col2 DIV + cor0.col1 ) FR
-----------------------^
Expecting 'EOF', 'COMMA', 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT - cor0.col0 DIV ( - 54 ) col1 FROM tab0 cor0 GROUP BY cor0.col0

Parse error on line 1:
...ECT - cor0.col0 DIV ( - 54 ) col1 FROM t
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT cor1.col1 + - cor0.col1 FROM tab2 AS cor0 CROSS JOIN tab0 AS cor1 GROUP BY cor0.col1, cor1.col1

Expected: ["-41","-59","-61","20","22","40"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT DISTINCT - NULLIF ( - col2, - tab0.col2 ) FROM tab0 GROUP BY col2

Expected: ["NULL"] but got ["24","38","79"]
```

```sql
SELECT tab1.col0 * + tab1.col0 FROM tab1 GROUP BY tab1.col0

Expected: ["484","6724","784"] but got ["NULL","NULL","NULL"]
```

```sql
SELECT - col0 + tab1.col0 AS col1 FROM tab1 GROUP BY tab1.col0

Expected: ["0","0","0"] but got ["NULL","NULL","NULL"]
```

#### ☓ Ran 10012 tests as mysql

* 4493 failed
* 55% was OK

Time: 12719ms

---- ---- ---- ---- ---- ---- ----
### 105/125 `test/random/groupby/slt_good_4.test`

_Mimic mysql_
```sql
SELECT ALL - - ( - tab0.col0 ) FROM tab0 GROUP BY tab0.col0

Expected: ["-26","-43","-83"] but got ["NULL","NULL","NULL"]
```

```sql
SELECT DISTINCT - cor0.col0 * - cor0.col0 AS col1 FROM tab1 cor0 GROUP BY col0

Expected: ["484","6724","784"] but got ["NULL"]
```

```sql
SELECT ALL cor0.col1 + col1 AS col2 FROM tab0 cor0 GROUP BY cor0.col1

Expected: ["0","162"] but got ["NULL","NULL"]
```

```sql
SELECT ALL tab0.col1 FROM tab0 GROUP BY tab0.col1 HAVING ( NULL ) IS NOT NULL

Query was expected to return results (but did not): []
```

```sql
SELECT - cor0.col1 DIV cor0.col1 AS col2 FROM tab2 AS cor0 GROUP BY cor0.col2, cor0.col1

Parse error on line 1:
...ECT - cor0.col1 DIV cor0.col1 AS col2 FR
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL CAST( NULL AS SIGNED ) FROM tab2 AS cor0 CROSS JOIN tab0 AS cor1 GROUP BY cor1.col0, cor0.col2, cor1.col1

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT 12 DIV 68 FROM tab2 GROUP BY tab2.col2

Parse error on line 1:
SELECT 12 DIV 68 FROM tab2 GROUP B
--------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT - 9 DIV - 9 col2 FROM tab2 GROUP BY tab2.col1

Parse error on line 1:
SELECT - 9 DIV - 9 col2 FROM tab2 G
---------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT 87 DIV + cor0.col1 FROM tab2 AS cor0 GROUP BY cor0.col1

Parse error on line 1:
SELECT 87 DIV + cor0.col1 FROM tab
--------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT 75 AS col0 FROM tab2 AS cor0 CROSS JOIN tab0 cor1 GROUP BY cor0.col0, cor1.col2

The hash of 9 returned values was different than expected. Check the sorting: 75, 75, 75, 75, 75, 75, 75, 75, 75
```

```sql
SELECT - COALESCE ( - tab1.col0, + 65 ) AS col2 FROM tab1 GROUP BY tab1.col0

Expected: ["22","28","82"] but got ["-65","-65","-65"]
```

```sql
SELECT NULLIF ( + 79, + cor0.col2 ) AS col1 FROM tab0 AS cor0 GROUP BY cor0.col2, cor0.col2, cor0.col1

Expected: ["79","79","NULL"] but got ["79","79","79"]
```

```sql
SELECT + cor1.col1 AS col1 FROM tab0 AS cor0 CROSS JOIN tab0 AS cor1 GROUP BY cor0.col2, cor1.col1

Expected: ["0","0","0","81","81","81"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT + COALESCE ( + 4, - cor0.col0, cor1.col0 DIV + cor1.col2 - cor0.col1 DIV cor1.col2 ) FROM tab0 AS cor0 CROSS JOIN tab0 AS cor1 GROUP BY cor1.col1

Parse error on line 1:
...or0.col0, cor1.col0 DIV + cor1.col2 - co
-----------------------^
Expecting 'EOF', 'COMMA', 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT CASE + tab2.col1 WHEN + CAST( NULL AS SIGNED ) THEN - COALESCE ( + 5, tab2.col0 ) END FROM tab2 GROUP BY tab2.col0

Expected: ["NULL","NULL","NULL"] but got ["-5","-5","-5"]
```

```sql
SELECT + cor0.col1 DIV ( cor0.col1 ) FROM tab2 AS cor0 GROUP BY cor0.col1

Parse error on line 1:
...ECT + cor0.col1 DIV ( cor0.col1 ) FROM t
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT ALL - cor0.col0 FROM tab2 AS cor0 GROUP BY cor0.col0 HAVING NOT NULL IS NOT NULL

Expected: ["-15","-91","-92"] but got ["NULL","NULL","NULL"]
```

```sql
SELECT ALL COALESCE ( - 43, tab0.col0 * + tab0.col0 + ( + tab0.col1 ) * tab0.col1, CASE tab0.col0 WHEN tab0.col0 THEN tab0.col0 * + tab0.col2 WHEN tab0.col0 * tab0.col1 THEN NULL WHEN + col1 + col1 THEN - tab0.col0 DIV - tab0.col1 + + tab0.col1 ELSE col1 END ) FROM tab0 GROUP BY tab0.col1

Parse error on line 1:
...l1 THEN - tab0.col0 DIV - tab0.col1 + + 
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'WHEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT DISTINCT + cor0.col0 + + CASE 37 + + cor0.col2 WHEN cor0.col1 DIV - cor0.col2 + col0 * cor0.col1 THEN NULL ELSE + 2 + cor0.col0 END DIV + cor0.col2 col1 FROM tab2 AS cor0 GROUP BY cor0.col1, cor0.col0, col2

Parse error on line 1:
...col2 WHEN cor0.col1 DIV - cor0.col2 + co
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'THEN', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT ALL cor0.col1 * NULLIF ( cor0.col1, - cor0.col1 ) + - cor0.col1 FROM tab0 AS cor0 GROUP BY col1

Expected: ["6480","NULL"] but got ["NULL","NULL"]
```

```sql
SELECT ALL + tab2.col1 * ( 65 DIV - tab2.col1 ) AS col2 FROM tab2 GROUP BY tab2.col1

Parse error on line 1:
... + tab2.col1 * ( 65 DIV - tab2.col1 ) AS
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

#### ☓ Ran 10012 tests as mysql

* 4456 failed
* 55% was OK

Time: 12930ms

---- ---- ---- ---- ---- ---- ----
### 106/125 `test/random/groupby/slt_good_5.test`

_Mimic mysql_
```sql
SELECT ALL + tab2.col1 col2 FROM tab2 GROUP BY col1

Expected: ["41","59","61"] but got ["NULL","NULL","NULL"]
```

```sql
SELECT ALL + cor0.col1 AS col2 FROM tab0 AS cor0 GROUP BY cor0.col1, col1

Expected: ["0","81"] but got ["NULL","NULL"]
```

```sql
SELECT DISTINCT - 0 DIV - cor0.col2 FROM tab2 cor0 CROSS JOIN tab2 AS cor1 GROUP BY cor0.col2

Parse error on line 1:
...CT DISTINCT - 0 DIV - cor0.col2 FROM tab
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT ALL col1 DIV + tab2.col1 AS col0 FROM tab2 GROUP BY col1

Parse error on line 1:
SELECT ALL col1 DIV + tab2.col1 AS col0 
--------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT DISTINCT - cor0.col2 + cor0.col2 FROM tab1 AS cor0 GROUP BY cor0.col2, col0

Expected: ["0"] but got ["NULL"]
```

```sql
SELECT DISTINCT cor0.col0 DIV cor0.col2 col0 FROM tab0 AS cor0 GROUP BY cor0.col2, cor0.col0

Parse error on line 1:
...TINCT cor0.col0 DIV cor0.col2 col0 FROM 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL + tab2.col2 FROM tab2 GROUP BY tab2.col2 HAVING ( NULL ) BETWEEN NULL AND NULL

Query was expected to return results (but did not): []
```

```sql
SELECT DISTINCT - 52 DIV 45 AS col0 FROM tab0 AS cor0 GROUP BY col1

Parse error on line 1:
...T DISTINCT - 52 DIV 45 AS col0 FROM tab0
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT DISTINCT + COALESCE ( tab1.col2, 3, tab1.col1 ) FROM tab1 GROUP BY col2

Expected: ["45","71","8"] but got ["3"]
```

```sql
SELECT DISTINCT cor0.col0 * COALESCE ( cor0.col0 DIV - cor0.col1, - col1 * cor0.col1 ) AS col1 FROM tab1 AS cor0 GROUP BY cor0.col0, cor0.col1, col0

Parse error on line 1:
...OALESCE ( cor0.col0 DIV - cor0.col1, - c
-----------------------^
Expecting 'EOF', 'COMMA', 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT - col0 * - cor0.col0 + ( + 36 + col0 DIV - 63 ) col2 FROM tab1 AS cor0 GROUP BY cor0.col0

Parse error on line 1:
...ol0 + ( + 36 + col0 DIV - 63 ) col2 FROM
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT cor1.col2 AS col1 FROM tab2 AS cor0 CROSS JOIN tab1 AS cor1 GROUP BY cor1.col2, cor0.col1

The hash of 9 returned values was different than expected. Check the sorting: 45, 45, 45, 71, 71, 71, 8, 8, 8
```

```sql
SELECT ALL + cor1.col1 AS col1 FROM tab2 AS cor0 CROSS JOIN tab0 AS cor1 GROUP BY cor1.col1, cor0.col2

Expected: ["0","0","0","81","81","81"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT + cor0.col2 + - COALESCE ( - 67, + cor0.col0, CASE 97 WHEN + cor0.col2 + cor0.col2 THEN NULL WHEN 21 * + 56 THEN - cor0.col0 DIV cor0.col0 END, - cor0.col1, - col2 + + cor0.col2 ) AS col2 FROM tab2 AS cor0 GROUP BY cor0.col2

Parse error on line 1:
...56 THEN - cor0.col0 DIV cor0.col0 END, -
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'WHEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT + cor1.col0 FROM tab1 AS cor0 CROSS JOIN tab0 AS cor1 GROUP BY cor0.col1, cor1.col0

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT ALL - tab2.col2 DIV ( + tab2.col2 ) FROM tab2 GROUP BY tab2.col2

Parse error on line 1:
...ALL - tab2.col2 DIV ( + tab2.col2 ) FROM
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT ALL + cor0.col2 * NULLIF ( - cor0.col1, cor0.col1 ) FROM tab0 AS cor0 GROUP BY cor0.col2, cor0.col1

Expected: ["-1944","NULL","NULL"] but got ["NULL","NULL","NULL"]
```

```sql
SELECT cor0.col1 * + CASE cor0.col0 DIV + cor0.col2 WHEN + cor0.col0 DIV cor0.col0 THEN cor0.col1 * + cor0.col1 WHEN cor0.col0 DIV - cor0.col0 THEN NULL END FROM tab2 AS cor0 GROUP BY cor0.col1, cor0.col0, cor0.col2

Parse error on line 1:
... * + CASE cor0.col0 DIV + cor0.col2 WHEN
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'WHEN', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT DISTINCT NULLIF ( cor0.col1, + cor0.col1 + + cor0.col1 ) AS col0 FROM tab0 AS cor0 GROUP BY cor0.col1

Expected: ["81","NULL"] but got ["NULL"]
```

```sql
SELECT DISTINCT - NULLIF ( col2, tab0.col2 ) FROM tab0 GROUP BY tab0.col2

Expected: ["NULL"] but got ["-24","-38","-79"]
```

```sql
SELECT NULLIF ( col2, tab2.col2 ) AS col2 FROM tab2 GROUP BY tab2.col2

Expected: ["NULL","NULL","NULL"] but got ["58","79","87"]
```

#### ☓ Ran 10012 tests as mysql

* 4513 failed
* 54% was OK

Time: 12749ms

---- ---- ---- ---- ---- ---- ----
### 107/125 `test/random/groupby/slt_good_6.test`

_Mimic mysql_
```sql
SELECT DISTINCT col0 * - cor0.col0 + cor0.col0 AS col0 FROM tab0 AS cor0 GROUP BY cor0.col0

Expected: ["-1806","-650","-6806"] but got ["NULL"]
```

```sql
SELECT ALL - cor0.col1 AS col0 FROM tab2 AS cor0 GROUP BY col0, cor0.col1, cor0.col1

Expected: ["-41","-59","-61"] but got ["NULL","NULL","NULL"]
```

```sql
SELECT DISTINCT 11 DIV - cor0.col1 AS col1 FROM tab1 AS cor0 GROUP BY cor0.col1

Parse error on line 1:
...ECT DISTINCT 11 DIV - cor0.col1 AS col1 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT ALL + cor0.col1 * - cor0.col1 FROM tab0 cor0 GROUP BY cor0.col1

Expected: ["-6561","0"] but got ["NULL","NULL"]
```

```sql
SELECT + 92 DIV + 53 FROM tab2 GROUP BY tab2.col2

Parse error on line 1:
SELECT + 92 DIV + 53 FROM tab2 GROUP
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT 19 DIV cor0.col1 FROM tab2 AS cor0 GROUP BY cor0.col1

Parse error on line 1:
SELECT 19 DIV cor0.col1 FROM tab2 
--------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT - + COALESCE ( 37, + tab2.col1, - 38 * - tab2.col2 + - 41 * tab2.col0 ) DIV 45 FROM tab2 GROUP BY col0

Parse error on line 1:
...1 * tab2.col0 ) DIV 45 FROM tab2 GROUP B
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT cor0.col1 FROM tab0 AS cor0 GROUP BY cor0.col1 HAVING NOT ( NULL ) IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT + 89 + col2 * - ( + cor0.col1 DIV col1 ) AS col0 FROM tab2 AS cor0 GROUP BY cor0.col1, cor0.col2

Parse error on line 1:
...2 * - ( + cor0.col1 DIV col1 ) AS col0 F
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT - CASE - 97 WHEN 83 THEN NULL ELSE - col1 DIV cor0.col1 END + 7 FROM tab1 AS cor0 GROUP BY col1

Parse error on line 1:
...EN NULL ELSE - col1 DIV cor0.col1 END + 
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT 81 AS col0 FROM tab1 cor0 CROSS JOIN tab1 AS cor1 GROUP BY cor0.col1, cor1.col1

The hash of 9 returned values was different than expected. Check the sorting: 81, 81, 81, 81, 81, 81, 81, 81, 81
```

```sql
SELECT + NULLIF ( col1, + cor0.col1 ) AS col2 FROM tab0 AS cor0 GROUP BY col1, cor0.col0

Expected: ["NULL","NULL","NULL"] but got ["0","0","81"]
```

```sql
SELECT ALL + COALESCE ( + tab2.col0, + tab2.col0, + 34 * + 28 ) AS col0 FROM tab2 GROUP BY tab2.col0

Expected: ["15","91","92"] but got ["952","952","952"]
```

```sql
SELECT - cor1.col2 FROM tab2 AS cor0 CROSS JOIN tab0 AS cor1 GROUP BY cor1.col2, cor0.col0

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT DISTINCT cor0.col1 DIV ( + cor0.col1 ) + cor0.col1 AS col1 FROM tab2 AS cor0 GROUP BY cor0.col2, cor0.col1

Parse error on line 1:
...TINCT cor0.col1 DIV ( + cor0.col1 ) + co
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT DISTINCT CASE cor0.col2 WHEN CASE - 14 WHEN cor0.col0 THEN cor0.col0 + 95 * + cor0.col0 WHEN - cor0.col2 THEN cor0.col2 END THEN + col2 WHEN - col2 THEN + col0 WHEN + col0 THEN NULL END AS col2 FROM tab0 AS cor0 GROUP BY cor0.col0, cor0.col1, cor0.col2

Expected: ["NULL"] but got ["24","38","79"]
```

```sql
SELECT - cor0.col0 DIV CAST( 77 AS SIGNED ) AS col0 FROM tab2 AS cor0 GROUP BY cor0.col0

Parse error on line 1:
...ECT - cor0.col0 DIV CAST( 77 AS SIGNED )
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

#### ☓ Ran 10012 tests as mysql

* 4444 failed
* 55% was OK

Time: 12822ms

---- ---- ---- ---- ---- ---- ----
### 108/125 `test/random/groupby/slt_good_7.test`

_Mimic mysql_
```sql
SELECT ALL + col2 * - cor0.col1 FROM tab0 AS cor0 GROUP BY cor0.col1, cor0.col2

Expected: ["-1944","0","0"] but got ["NULL","NULL","NULL"]
```

```sql
SELECT - cor0.col1 AS col2 FROM tab2, tab0 AS cor0 GROUP BY cor0.col1

Expected: ["-81","0"] but got ["NULL","NULL"]
```

```sql
SELECT DISTINCT col0 / col0 FROM tab1 AS cor0 GROUP BY col0 HAVING NOT ( - cor0.col0 ) = NULL

Query was expected to return results (but did not): []
```

```sql
SELECT DISTINCT cor0.col2 + - cor0.col2 + + cor0.col1 AS col0 FROM tab2 AS cor0 GROUP BY cor0.col2, cor0.col1, cor0.col2

Expected: ["41","59","61"] but got ["NULL"]
```

```sql
SELECT DISTINCT * FROM tab1 AS cor0 GROUP BY cor0.col0, col2, cor0.col1

The hash of 9 returned values was different than expected. Check the sorting: 22, 8, 6, 28, 45, 57, 82, 71, 44
```

```sql
SELECT - 49 DIV cor0.col0 AS col2 FROM tab0 AS cor0 GROUP BY cor0.col0

Parse error on line 1:
SELECT - 49 DIV cor0.col0 AS col2 FR
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL cor0.col1 DIV - cor0.col1 + cor0.col1 FROM tab1 cor0 GROUP BY col1, cor0.col2

Parse error on line 1:
...T ALL cor0.col1 DIV - cor0.col1 + cor0.c
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT ALL cor0.col2 DIV + cor0.col2 AS col2 FROM tab1 AS cor0 GROUP BY cor0.col2

Parse error on line 1:
...T ALL cor0.col2 DIV + cor0.col2 AS col2 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT ALL cor1.col2 + cor1.col2 DIV 26 AS col2 FROM tab1 cor0 CROSS JOIN tab2 cor1 GROUP BY cor1.col2

Parse error on line 1:
...ol2 + cor1.col2 DIV 26 AS col2 FROM tab1
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT - ( cor1.col0 ) FROM tab0 AS cor0 CROSS JOIN tab2 cor1 GROUP BY cor1.col0, cor0.col2

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT - cor0.col2 DIV ( 64 ) AS col1 FROM tab1 AS cor0 GROUP BY cor0.col1, cor0.col2

Parse error on line 1:
...ECT - cor0.col2 DIV ( 64 ) AS col1 FROM 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT DISTINCT - col1 DIV CAST( + col1 AS SIGNED ) AS col0 FROM tab2 AS cor0 GROUP BY cor0.col1, cor0.col1

Parse error on line 1:
...DISTINCT - col1 DIV CAST( + col1 AS SIGN
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT + cor1.col1 AS col2 FROM tab2 AS cor0 CROSS JOIN tab0 AS cor1 GROUP BY cor1.col1, cor0.col2

Expected: ["0","0","0","81","81","81"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT DISTINCT - tab2.col0 * + NULLIF ( - tab2.col0 + tab2.col0 DIV tab2.col0, 74 * - tab2.col0 ) AS col2 FROM tab2 GROUP BY tab2.col0

Parse error on line 1:
...b2.col0 + tab2.col0 DIV tab2.col0, 74 * 
-----------------------^
Expecting 'EOF', 'COMMA', 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL + 46 - - COALESCE ( - tab1.col1, + ( - 46 ) ) FROM tab1 GROUP BY tab1.col1

Expected: ["-11","2","40"] but got ["0","0","0"]
```

```sql
SELECT DISTINCT COALESCE ( 79, cor0.col1 + - CASE 20 WHEN + cor0.col2 THEN NULL ELSE + cor0.col0 + ( 94 + cor0.col1 DIV cor0.col1 ) END * cor0.col1 ) AS col2 FROM tab1 AS cor0 GROUP BY col2

Parse error on line 1:
... + ( 94 + cor0.col1 DIV cor0.col1 ) END 
-----------------------^
Expecting 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT - CASE cor0.col1 WHEN cor0.col1 THEN cor0.col1 DIV + cor0.col0 ELSE cor0.col2 * col2 END * col1 + 15 FROM tab1 AS cor0 GROUP BY cor0.col1, cor0.col2, cor0.col0

Parse error on line 1:
...col1 THEN cor0.col1 DIV + cor0.col0 ELSE
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'WHEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT DISTINCT NULLIF ( col2, cor0.col2 ) * 41 AS col0 FROM tab1 AS cor0 GROUP BY cor0.col2

Expected: ["NULL"] but got ["1845","2911","328"]
```

```sql
SELECT - CASE cor0.col0 WHEN cor0.col2 THEN NULL ELSE 8 DIV 52 END AS col2 FROM tab0 cor0 GROUP BY cor0.col2, cor0.col0

Parse error on line 1:
...l2 THEN NULL ELSE 8 DIV 52 END AS col2 F
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT NULLIF ( cor0.col1, - cor0.col1 ) * - col1 FROM tab0 AS cor0 GROUP BY cor0.col1

Expected: ["-6561","NULL"] but got ["NULL","NULL"]
```

```sql
SELECT DISTINCT - NULLIF ( + cor0.col1, cor0.col1 / - 16 ) FROM tab0 AS cor0 GROUP BY cor0.col1

Expected: ["-81","NULL"] but got ["NULL"]
```

```sql
SELECT ALL - NULLIF ( col1, + cor0.col1 ) AS col1 FROM tab0 AS cor0 GROUP BY cor0.col1

Expected: ["NULL","NULL"] but got ["-81","0"]
```

#### ☓ Ran 10012 tests as mysql

* 4495 failed
* 55% was OK

Time: 13529ms

---- ---- ---- ---- ---- ---- ----
### 109/125 `test/random/groupby/slt_good_8.test`

_Mimic mysql_
```sql
SELECT - tab2.col2 DIV - tab2.col2 AS col1 FROM tab2 GROUP BY col2

Parse error on line 1:
...ECT - tab2.col2 DIV - tab2.col2 AS col1 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT - cor0.col2 * cor0.col0 FROM tab1 AS cor0 GROUP BY cor0.col2, cor0.col0

Expected: ["-1260","-176","-5822"] but got ["NULL","NULL","NULL"]
```

```sql
SELECT col0 * col0 + col0 DIV cor0.col0 AS col1 FROM tab2 AS cor0 GROUP BY cor0.col2, cor0.col0

Parse error on line 1:
...0 * col0 + col0 DIV cor0.col0 AS col1 FR
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL + tab2.col0 col1 FROM tab2 GROUP BY col0 HAVING NOT NULL IS NULL

Query was expected to return results (but did not): []
```

```sql
SELECT DISTINCT + col1 * cor0.col1 AS col2 FROM tab0 AS cor0 GROUP BY cor0.col1

Expected: ["0","6561"] but got ["NULL"]
```

```sql
SELECT - cor0.col1 * - cor0.col1 FROM tab0 AS cor0 GROUP BY col1

Expected: ["0","6561"] but got ["NULL","NULL"]
```

```sql
SELECT - NULLIF ( cor0.col0, + 26 ) FROM tab0 AS cor0 GROUP BY cor0.col2, cor0.col0

Expected: ["-43","-83","NULL"] but got ["NULL","NULL","NULL"]
```

```sql
SELECT 65 DIV 40 AS col1 FROM tab1 GROUP BY tab1.col0

Parse error on line 1:
SELECT 65 DIV 40 AS col1 FROM tab1
--------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT - cor0.col1 DIV + 66 FROM tab2 AS cor0 GROUP BY col1

Parse error on line 1:
...ECT - cor0.col1 DIV + 66 FROM tab2 AS co
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT + COALESCE ( - cor0.col2, 71, + cor0.col1, + cor0.col2 ) FROM tab0 AS cor0 GROUP BY cor0.col2

Expected: ["-24","-38","-79"] but got ["71","71","71"]
```

```sql
SELECT DISTINCT - - tab2.col0 DIV CAST( 27 AS SIGNED ) + 50 col2 FROM tab2 GROUP BY tab2.col0

Parse error on line 1:
...T - - tab2.col0 DIV CAST( 27 AS SIGNED )
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT - tab1.col2 * CASE + tab1.col2 WHEN - tab1.col2 THEN NULL ELSE - NULLIF ( 18, + tab1.col2 ) * + tab1.col2 + - tab1.col2 DIV - 83 END FROM tab1 GROUP BY tab1.col2

Parse error on line 1:
....col2 + - tab1.col2 DIV - 83 END FROM ta
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT + - tab2.col1 - - COALESCE ( 22, + tab2.col0 DIV - tab2.col0 ) AS col2 FROM tab2 GROUP BY tab2.col1

Parse error on line 1:
...E ( 22, + tab2.col0 DIV - tab2.col0 ) AS
-----------------------^
Expecting 'EOF', 'COMMA', 'RPAR', 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT cor0.col2 AS col2 FROM tab2 AS cor0 CROSS JOIN tab2 cor1 GROUP BY cor1.col2, cor0.col2, cor1.col1

The hash of 9 returned values was different than expected. Check the sorting: 58, 58, 58, 79, 79, 79, 87, 87, 87
```

```sql
SELECT ALL + NULLIF ( col2, tab2.col2 ) AS col0 FROM tab2 GROUP BY col2

Expected: ["NULL","NULL","NULL"] but got ["58","79","87"]
```

```sql
SELECT ALL cor0.col2 + - 98 AS col2 FROM tab1 AS cor0 CROSS JOIN tab2 AS cor1 GROUP BY cor0.col2, cor1.col2

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT + - COALESCE ( 50, - tab2.col2, - tab2.col1 - CASE - tab2.col2 WHEN - tab2.col1 THEN + col2 DIV tab2.col0 WHEN 26 DIV col0 THEN NULL ELSE NULL END ) col2 FROM tab2 GROUP BY tab2.col2

Parse error on line 1:
...b2.col1 THEN + col2 DIV tab2.col0 WHEN 2
-----------------------^
Expecting 'IN', 'LIKE', 'ARROW', 'CARET', 'EQ', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'AND', 'OR', 'PLUS', 'STAR', 'END', 'WHEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', got 'LITERAL'
```

```sql
SELECT 74 + + tab0.col2 DIV ( 97 ) FROM tab0 GROUP BY tab0.col2

Parse error on line 1:
...4 + + tab0.col2 DIV ( 97 ) FROM tab0 GRO
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT cor0.col2 * - ( + cor0.col2 ) AS col2 FROM tab2 cor0 CROSS JOIN tab0 AS cor1 GROUP BY cor1.col1, cor0.col2

Expected: ["-3364","-3364","-6241","-6241","-7569","-7569"] but got ["NULL","NULL","NULL","NULL","NULL","NULL"]
```

```sql
SELECT ALL - col1, - col1 DIV + col1 AS col0 FROM tab1 GROUP BY col0, col1

Parse error on line 1:
... - col1, - col1 DIV + col1 AS col0 FROM 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

#### ☓ Ran 10012 tests as mysql

* 3460 failed
* 65% was OK

Time: 12339ms

---- ---- ---- ---- ---- ---- ----
### 110/125 `test/random/groupby/slt_good_9.test`

_Mimic mysql_
```sql
SELECT + col0 AS col2 FROM tab2 GROUP BY col0 HAVING NULL > ( col2 )

Query was expected to return results (but did not): []
```

```sql
SELECT - col1 DIV + col1 FROM tab1 AS cor0 GROUP BY col1, col1, col1

Parse error on line 1:
SELECT - col1 DIV + col1 FROM tab1 AS 
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT - col0 DIV - - col0 AS col2 FROM tab2 GROUP BY col0

Parse error on line 1:
SELECT - col0 DIV - - col0 AS col2 FRO
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT - col0 DIV col0 FROM tab2 AS cor0 GROUP BY col0, col1

Parse error on line 1:
SELECT - col0 DIV col0 FROM tab2 AS co
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT col0, - col0 AS col0 FROM tab0 AS cor0 GROUP BY col0, col2

Expected: ["26","-26","43","-43","83","-83"] but got ["-26","-43","-83"]
```

```sql
SELECT ALL + col0 * - col2 FROM tab2 AS cor0 WHERE NOT col0 >= col2 GROUP BY col2, col0

Expected: ["-1305"] but got ["NULL"]
```

```sql
SELECT + cor0.col2 * 38 AS col1 FROM tab2, tab0 AS cor0 GROUP BY cor0.col2

Expected: ["1444","3002","912"] but got ["NULL","NULL","NULL"]
```

```sql
SELECT 67 + 43 * cor0.col1 FROM tab0 AS cor0 GROUP BY cor0.col1

Expected: ["3550","67"] but got ["NULL","NULL"]
```

```sql
SELECT * FROM tab1 cor0 GROUP BY cor0.col0, cor0.col2, cor0.col1

The hash of 9 returned values was different than expected. Check the sorting: 22, 8, 6, 28, 45, 57, 82, 71, 44
```

```sql
SELECT + 99 DIV 43 AS col2 FROM tab2 cor0 GROUP BY cor0.col2

Parse error on line 1:
SELECT + 99 DIV 43 AS col2 FROM tab2
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT ALL col2 AS col1, - AVG ( - col2 ) AS col1, - col2 AS col1 FROM tab0 AS cor0 GROUP BY col2

3 results returned but expected 9
```

#### ☓ Ran 10012 tests as mysql

* 2386 failed
* 76% was OK

Time: 12490ms

---- ---- ---- ---- ---- ---- ----
### 111/125 `test/random/select/slt_good_0.test`

_Mimic mysql_
```sql
SELECT ALL * FROM tab0 cor0 CROSS JOIN tab2 AS cor1

The hash of 54 returned values was different than expected. Check the sorting: 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38
```

```sql
SELECT DISTINCT * FROM tab2, tab2 cor0

18 results returned but expected 54
```

```sql
SELECT - col2 DIV - col0 - + 69 AS col0 FROM tab1 AS cor0

Parse error on line 1:
SELECT - col2 DIV - col0 - + 69 AS col
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT ALL + ( + col1 ) DIV + tab0.col2 FROM tab0

Parse error on line 1:
...LL + ( + col1 ) DIV + tab0.col2 FROM tab
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT ALL + col0 DIV col1 AS col2 FROM tab2 AS cor0

Parse error on line 1:
...LECT ALL + col0 DIV col1 AS col2 FROM ta
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL * FROM tab1 cor0 CROSS JOIN tab1, tab2 AS cor1

Parse error on line 1:
...cor0 CROSS JOIN tab1, tab2 AS cor1
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'WITH', 'AS', 'RPAR', 'PIVOT', 'UNPIVOT', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COMMA'
```

```sql
SELECT - col1 * - CAST( col1 AS SIGNED ) + - col0 DIV CAST( + col1 + col1 AS SIGNED ) col2 FROM tab0 AS cor0

Parse error on line 1:
...GNED ) + - col0 DIV CAST( + col1 + col1 
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT ALL CAST( NULL AS SIGNED ) AS col1 FROM tab0, tab2 AS cor0

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT DISTINCT ( - col1 ) * col0 DIV ( col1 ) AS col0 FROM tab1 cor0

Parse error on line 1:
...- col1 ) * col0 DIV ( col1 ) AS col0 FRO
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT DISTINCT col0 DIV 40 FROM tab1

Parse error on line 1:
...T DISTINCT col0 DIV 40 FROM tab1
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT DISTINCT col2 FROM tab1 WHERE NULL BETWEEN NULL AND - col2

Query was expected to return results (but did not): []
```

```sql
SELECT + CAST( NULL AS SIGNED ) AS col1 FROM tab2, tab1 AS cor0, tab2 AS cor1

The hash of 27 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT ALL CAST( NULL AS SIGNED ) FROM tab0, tab0 AS cor0, tab2 AS cor1, tab0 AS cor2

The hash of 81 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

#### ☓ Ran 9979 tests as mysql

* 2124 failed
* 78% was OK

Time: 11068ms

---- ---- ---- ---- ---- ---- ----
### 112/125 `test/random/select/slt_good_1.test`

_Mimic mysql_
```sql
SELECT - col2 + + ( 69 ) DIV - col2 FROM tab1 AS cor0

Parse error on line 1:
...col2 + + ( 69 ) DIV - col2 FROM tab1 AS 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT + cor0.col0 * col0 - col1 DIV col1 FROM tab2 cor0

Parse error on line 1:
...0 * col0 - col1 DIV col1 FROM tab2 cor0
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT DISTINCT + + cor0.col2 DIV ( 63 + + col1 ) AS col1 FROM tab1 AS cor0

Parse error on line 1:
...T + + cor0.col2 DIV ( 63 + + col1 ) AS c
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT - CAST( + col1 AS SIGNED ) DIV + col1 + - 48 + + col0 * col1 * col2 AS col1 FROM tab2 AS cor0

Parse error on line 1:
...ol1 AS SIGNED ) DIV + col1 + - 48 + + co
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT 92 AS col2 FROM tab2, tab1 AS cor0

The hash of 9 returned values was different than expected. Check the sorting: 92, 92, 92, 92, 92, 92, 92, 92, 92
```

```sql
SELECT DISTINCT * FROM tab0, tab0 cor0, tab0 AS cor1

27 results returned but expected 243
```

```sql
SELECT * FROM tab1 AS cor0 CROSS JOIN tab0, tab1 AS cor1

Parse error on line 1:
...cor0 CROSS JOIN tab0, tab1 AS cor1
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'WITH', 'AS', 'RPAR', 'PIVOT', 'UNPIVOT', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COMMA'
```

```sql
SELECT DISTINCT col2 - + col0 * col1 DIV 41 AS col1 FROM tab2 AS cor0

Parse error on line 1:
...- + col0 * col1 DIV 41 AS col1 FROM tab2
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT ALL CAST( NULL AS SIGNED ) AS col0 FROM tab0, tab0 AS cor0, tab1 AS cor1

The hash of 27 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT ALL - CAST( NULL AS SIGNED ) FROM tab0, tab2 AS cor0

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT col2 * - col2 + + col0 FROM tab2 WHERE NOT ( - col0 / - col2 + - col0 ) < NULL

Query was expected to return results (but did not): []
```

```sql
SELECT - cor0.col2 * CAST( NULL AS SIGNED ) FROM tab1, tab2, tab2 AS cor0, tab2 cor1

The hash of 81 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT + - col2 DIV CAST( + col1 AS SIGNED ) FROM tab1 AS cor0

Parse error on line 1:
SELECT + - col2 DIV CAST( + col1 AS SIGN
--------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

#### ☓ Ran 9977 tests as mysql

* 1880 failed
* 81% was OK

Time: 11281ms

---- ---- ---- ---- ---- ---- ----
### 113/125 `test/random/select/slt_good_2.test`

_Mimic mysql_
```sql
SELECT DISTINCT + col2 * + tab0.col1 + - col0 DIV - col1 FROM tab0

Parse error on line 1:
...0.col1 + - col0 DIV - col1 FROM tab0
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT ALL col2 DIV 52 + - col0 * - col2 AS col1 FROM tab1

Parse error on line 1:
SELECT ALL col2 DIV 52 + - col0 * - col2
--------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT ALL + 86 FROM tab1, tab1 AS cor0

The hash of 9 returned values was different than expected. Check the sorting: 86, 86, 86, 86, 86, 86, 86, 86, 86
```

```sql
SELECT ALL - col2 DIV ( + cor0.col1 ) + 69 AS col0 FROM tab0 AS cor0

Parse error on line 1:
...LECT ALL - col2 DIV ( + cor0.col1 ) + 69
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT col2 DIV cor0.col2 FROM tab1 AS cor0

Parse error on line 1:
SELECT col2 DIV cor0.col2 FROM tab1 
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT + 34 * tab0.col0 + col0 DIV + tab0.col0 FROM tab0

Parse error on line 1:
...ab0.col0 + col0 DIV + tab0.col0 FROM tab
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT ALL 86 FROM tab2 cor0 CROSS JOIN tab2, tab2 AS cor1

Parse error on line 1:
...cor0 CROSS JOIN tab2, tab2 AS cor1
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'WITH', 'AS', 'RPAR', 'PIVOT', 'UNPIVOT', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COMMA'
```

```sql
SELECT DISTINCT * FROM tab2, tab2 AS cor0, tab2 AS cor1, tab1, tab0 AS cor2

45 results returned but expected 3645
```

```sql
SELECT - cor1.col2 - - CAST( NULL AS SIGNED ) FROM tab0 AS cor0 CROSS JOIN tab0 AS cor1

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT col2 AS col2 FROM tab2 AS cor0 WHERE + col1 + - col0 BETWEEN ( NULL ) AND cor0.col2

Query was expected to return results (but did not): []
```

```sql
SELECT - CAST( NULL AS SIGNED ) FROM tab1, tab2, tab1 cor0

The hash of 27 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT DISTINCT - col0 DIV CAST( + 34 AS SIGNED ) FROM tab0 AS cor0

Parse error on line 1:
...DISTINCT - col0 DIV CAST( + 34 AS SIGNED
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT col2 AS col1 FROM tab1 WHERE NOT col2 < - col0 * - col1 / + col1

Expected: ["54","96"] but got ["54","57","96"]
```

```sql
SELECT CAST( NULL AS SIGNED ) FROM tab0, tab2 AS cor0, tab0 cor1, tab0 cor2

The hash of 81 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

#### ☓ Ran 9976 tests as mysql

* 1920 failed
* 80% was OK

Time: 11908ms

---- ---- ---- ---- ---- ---- ----
### 114/125 `test/random/select/slt_good_3.test`

_Mimic mysql_
```sql
SELECT cor1.col1 AS col2 FROM tab0, tab1 AS cor0, tab1 AS cor1

The hash of 27 returned values was different than expected. Check the sorting: 10, 10, 10, 10, 10, 10, 10, 10, 10, 13, 13, 13, 13, 13, 13, 13, 13, 13, 26, 26, 26, 26, 26, 26, 26, 26, 26
```

```sql
SELECT ALL cor0.col0 + 94 DIV col2 FROM tab1 AS cor0

Parse error on line 1:
... cor0.col0 + 94 DIV col2 FROM tab1 AS co
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL - cor0.col0 DIV - 16 + col1 AS col0 FROM tab1 AS cor0

Parse error on line 1:
...ALL - cor0.col0 DIV - 16 + col1 AS col0 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT DISTINCT * FROM tab2, tab1 AS cor0, tab0, tab2 AS cor1

36 results returned but expected 972
```

```sql
SELECT ALL CAST( col2 AS SIGNED ) * tab1.col2 + + col1 + - col2 DIV + tab1.col0 col1 FROM tab1

Parse error on line 1:
...+ col1 + - col2 DIV + tab1.col0 col1 FRO
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT + CAST( NULL AS SIGNED ) AS col1 FROM tab2, tab1 AS cor0

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT DISTINCT * FROM tab2 AS cor0 CROSS JOIN tab0, tab1 AS cor1, tab1, tab0 AS cor2

Parse error on line 1:
...cor0 CROSS JOIN tab0, tab1 AS cor1, tab1
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'WITH', 'AS', 'RPAR', 'PIVOT', 'UNPIVOT', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COMMA'
```

```sql
SELECT col0 DIV ( tab1.col2 ) + col1 AS col2 FROM tab1

Parse error on line 1:
SELECT col0 DIV ( tab1.col2 ) + col1
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT DISTINCT 80 DIV 46 + col0 * + 9 AS col2 FROM tab0 AS cor0

Parse error on line 1:
...ECT DISTINCT 80 DIV 46 + col0 * + 9 AS c
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT + - CAST( NULL AS SIGNED ) FROM tab1, tab0, tab0 AS cor0

The hash of 27 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT * FROM tab2, tab1 AS cor0 WHERE NOT ( NULL ) BETWEEN NULL AND NULL

Query was expected to return results (but did not): []
```

```sql
SELECT + CAST( NULL AS SIGNED ) * 3 AS col2 FROM tab2, tab0, tab1 AS cor0, tab1

The hash of 81 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

#### ☓ Ran 9968 tests as mysql

* 1852 failed
* 81% was OK

Time: 11414ms

---- ---- ---- ---- ---- ---- ----
### 115/125 `test/random/select/slt_good_4.test`

_Mimic mysql_
```sql
SELECT 28 AS col0 FROM tab0, tab1 AS cor0

The hash of 9 returned values was different than expected. Check the sorting: 28, 28, 28, 28, 28, 28, 28, 28, 28
```

```sql
SELECT ALL + 60 DIV ( tab0.col0 + 64 ) FROM tab0

Parse error on line 1:
SELECT ALL + 60 DIV ( tab0.col0 + 64 ) F
--------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT col2 * tab2.col2 DIV col0 col1 FROM tab2

Parse error on line 1:
...ol2 * tab2.col2 DIV col0 col1 FROM tab2
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT DISTINCT col1 DIV + col2 + cor0.col0 * + col2 * + ( col2 ) FROM tab1 AS cor0

Parse error on line 1:
...T DISTINCT col1 DIV + col2 + cor0.col0 *
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT DISTINCT + 81 * col2 + + col1 DIV - col0 + col0 * - col1 AS col0 FROM tab1 AS cor0

Parse error on line 1:
...* col2 + + col1 DIV - col0 + col0 * - co
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT 16 DIV 71 + - col0 AS col0 FROM tab0

Parse error on line 1:
SELECT 16 DIV 71 + - col0 AS col0 
--------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT ALL * FROM tab1 cor0 CROSS JOIN tab2, tab1 AS cor1, tab0 AS cor2, tab2 AS cor3

Parse error on line 1:
...cor0 CROSS JOIN tab2, tab1 AS cor1, tab0
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'WITH', 'AS', 'RPAR', 'PIVOT', 'UNPIVOT', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COMMA'
```

```sql
SELECT * FROM tab1 WHERE NULL < - col1 / col0

Query was expected to return results (but did not): []
```

```sql
SELECT ALL col1 - - col1 DIV col1 FROM tab2

Parse error on line 1:
...L col1 - - col1 DIV col1 FROM tab2
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT DISTINCT * FROM tab2 AS cor0 CROSS JOIN tab1

18 results returned but expected 54
```

```sql
SELECT - CAST( NULL AS SIGNED ) AS col0 FROM tab2, tab2 AS cor0

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT - + 81 * cor0.col0 - - col2 DIV CAST( + 59 + + col2 AS SIGNED ) AS col1 FROM tab1 cor0

Parse error on line 1:
...0.col0 - - col2 DIV CAST( + 59 + + col2 
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT col2 + - col2 * col1 AS col1 FROM tab2 AS cor0 WHERE NOT ( - cor0.col0 ) >= ( + cor0.col0 - col2 )

Expected: ["-1508","-608"] but got ["-810"]
```

```sql
SELECT + CAST( NULL AS SIGNED ) * + 81 FROM tab0, tab2 AS cor0, tab1 AS cor1

The hash of 27 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

#### ☓ Ran 9965 tests as mysql

* 1956 failed
* 80% was OK

Time: 11348ms

---- ---- ---- ---- ---- ---- ----
### 116/125 `test/random/select/slt_good_5.test`

_Mimic mysql_
```sql
SELECT ALL * FROM tab0, tab0 cor0, tab2 cor1

The hash of 243 returned values was different than expected. Check the sorting: 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 7, 31, 27, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 78, 59, 26, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38, 79, 17, 38
```

```sql
SELECT + + col0 DIV + col0 FROM tab1 AS cor0

Parse error on line 1:
SELECT + + col0 DIV + col0 FROM tab1 AS 
--------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT DISTINCT + col1 DIV - 99 AS col1 FROM tab0

Parse error on line 1:
...DISTINCT + col1 DIV - 99 AS col1 FROM ta
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT + + col2 + col2 DIV col2 FROM tab1 AS cor0

Parse error on line 1:
...+ + col2 + col2 DIV col2 FROM tab1 AS co
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL - tab0.col1 FROM tab0 WHERE NULL BETWEEN NULL AND NULL

Query was expected to return results (but did not): []
```

```sql
SELECT DISTINCT * FROM tab2 cor0 CROSS JOIN tab0 cor1

18 results returned but expected 54
```

```sql
SELECT + col2 DIV ( col0 ) FROM tab2 cor0

Parse error on line 1:
SELECT + col2 DIV ( col0 ) FROM tab2 c
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT + - col0 DIV 34 FROM tab0 AS cor0

Parse error on line 1:
SELECT + - col0 DIV 34 FROM tab0 AS cor0
--------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT ALL * FROM tab0, tab0 AS cor0 CROSS JOIN tab2, tab0 AS cor1, tab0 AS cor2

Parse error on line 1:
...cor0 CROSS JOIN tab2, tab0 AS cor1, tab0
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'WITH', 'AS', 'RPAR', 'PIVOT', 'UNPIVOT', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COMMA'
```

```sql
SELECT - CAST( NULL AS SIGNED ) - cor0.col1 FROM tab1, tab0 AS cor0

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT - - CAST( NULL AS SIGNED ) AS col0 FROM tab2, tab0, tab0 AS cor0

The hash of 27 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT ALL + + CAST( NULL AS SIGNED ) AS col1 FROM tab0, tab1, tab0 AS cor0, tab2

The hash of 81 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT + ( - ( + col1 ) ) DIV CAST( - col0 AS SIGNED ) FROM tab1

Parse error on line 1:
... - ( + col1 ) ) DIV CAST( - col0 AS SIGN
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

#### ☓ Ran 9969 tests as mysql

* 1970 failed
* 80% was OK

Time: 11706ms

---- ---- ---- ---- ---- ---- ----
### 117/125 `test/random/select/slt_good_6.test`

_Mimic mysql_
```sql
SELECT cor0.col1 + - 52 AS col0 FROM tab0, tab1 AS cor0

The hash of 9 returned values was different than expected. Check the sorting: -26, -26, -26, -39, -39, -39, -42, -42, -42
```

```sql
SELECT + col0 DIV - col1 + - ( - col2 ) col0 FROM tab2 AS cor0

Parse error on line 1:
SELECT + col0 DIV - col1 + - ( - col2 
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT CAST( NULL AS SIGNED ) FROM tab1, tab1 AS cor0

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT ALL - ( + col2 ) + + 83 DIV 5 col0 FROM tab0 AS cor0

Parse error on line 1:
...+ col2 ) + + 83 DIV 5 col0 FROM tab0 AS 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT 4 DIV + cor0.col1 AS col2 FROM tab1 AS cor0 CROSS JOIN tab1 cor1

Parse error on line 1:
SELECT 4 DIV + cor0.col1 AS col2 
-------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT DISTINCT - col2 DIV tab1.col2 FROM tab1

Parse error on line 1:
...DISTINCT - col2 DIV tab1.col2 FROM tab1
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT + tab2.col0 / col2 AS col2 FROM tab2 WHERE - col1 > NULL

Query was expected to return results (but did not): []
```

```sql
SELECT ALL * FROM tab2 WHERE col0 NOT BETWEEN - col0 + + col2 / - col0 + + col2 AND NULL

Expected: ["7","31","27"] but got ["7","31","27","78","59","26","79","17","38"]
```

```sql
SELECT ALL 43 FROM tab0 AS cor0 CROSS JOIN tab1, tab2 AS cor1, tab1 AS cor2, tab1 AS cor3

Parse error on line 1:
...cor0 CROSS JOIN tab1, tab2 AS cor1, tab1
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'WITH', 'AS', 'RPAR', 'PIVOT', 'UNPIVOT', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COMMA'
```

```sql
SELECT DISTINCT * FROM tab1, tab1 AS cor0, tab0 AS cor1, tab0, tab0 AS cor2

45 results returned but expected 3645
```

```sql
SELECT ALL + CAST( NULL AS SIGNED ) AS col2 FROM tab1, tab1 AS cor0, tab0 AS cor1

The hash of 27 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT ALL cor0.col1 DIV ( 88 ) + cor0.col2 AS col1 FROM tab0 AS cor0 CROSS JOIN tab2, tab1 AS cor1

Parse error on line 1:
...T ALL cor0.col1 DIV ( 88 ) + cor0.col2 A
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT ALL CAST( NULL AS SIGNED ) AS col1 FROM tab2, tab2 AS cor0, tab1 AS cor1, tab0 AS cor2

The hash of 81 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT ALL col0 DIV CAST( 73 AS SIGNED ) FROM tab2 AS cor0

Parse error on line 1:
SELECT ALL col0 DIV CAST( 73 AS SIGNED )
--------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT CAST( NULL AS DECIMAL ) AS col1 FROM tab0, tab0 AS cor0, tab2 AS cor1, tab1, tab2 AS cor2

The hash of 243 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

#### ☓ Ran 9964 tests as mysql

* 2007 failed
* 79% was OK

Time: 11418ms

---- ---- ---- ---- ---- ---- ----
### 118/125 `test/random/select/slt_good_7.test`

_Mimic mysql_
```sql
SELECT ALL * FROM tab2 cor0 WHERE ( NULL ) <= ( NULL )

Query was expected to return results (but did not): []
```

```sql
SELECT DISTINCT - col0 DIV col2 FROM tab0 AS cor0

Parse error on line 1:
...DISTINCT - col0 DIV col2 FROM tab0 AS co
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL 65 FROM tab2, tab0 AS cor0, tab0 AS cor1

The hash of 27 returned values was different than expected. Check the sorting: 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65
```

```sql
SELECT DISTINCT * FROM tab0, tab0 AS cor0, tab2 AS cor1, tab0 AS cor2

36 results returned but expected 972
```

```sql
SELECT ALL - col1 DIV + tab2.col0 col1 FROM tab2

Parse error on line 1:
...LECT ALL - col1 DIV + tab2.col0 col1 FRO
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT cor0.col0 DIV - col0 FROM tab1 cor0

Parse error on line 1:
...ELECT cor0.col0 DIV - col0 FROM tab1 cor
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT - col0 * ( col1 ) DIV ( + ( - col2 ) * col1 ) FROM tab1

Parse error on line 1:
...col0 * ( col1 ) DIV ( + ( - col2 ) * col
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT * FROM tab2 AS cor0 CROSS JOIN tab0, tab1 AS cor1, tab1, tab1 AS cor2

Parse error on line 1:
...cor0 CROSS JOIN tab0, tab1 AS cor1, tab1
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'WITH', 'AS', 'RPAR', 'PIVOT', 'UNPIVOT', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COMMA'
```

```sql
SELECT ALL + CAST( NULL AS SIGNED ) FROM tab2, tab1 AS cor0

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT ALL + + col1 DIV 84 AS col1 FROM tab1 AS cor0

Parse error on line 1:
...CT ALL + + col1 DIV 84 AS col1 FROM tab1
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT ALL CAST( NULL AS SIGNED ) AS col0 FROM tab2, tab1, tab2 cor0

The hash of 27 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT - CAST( NULL AS SIGNED ) AS col1 FROM tab0, tab0 AS cor0, tab2 AS cor1, tab1, tab2 AS cor2

The hash of 243 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT ALL - ( + col1 ) + - cor0.col0 DIV CAST( col1 AS SIGNED ) AS col2 FROM tab0 AS cor0

Parse error on line 1:
...) + - cor0.col0 DIV CAST( col1 AS SIGNED
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT ALL + + CAST( NULL AS SIGNED ) AS col1 FROM tab1, tab0, tab2 AS cor0, tab2

The hash of 81 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

#### ☓ Ran 9974 tests as mysql

* 1962 failed
* 80% was OK

Time: 12458ms

---- ---- ---- ---- ---- ---- ----
### 119/125 `test/random/select/slt_good_8.test`

_Mimic mysql_
```sql
SELECT col0 DIV col2 AS col1 FROM tab0

Parse error on line 1:
SELECT col0 DIV col2 AS col1 FROM ta
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT DISTINCT col2 DIV + col1 - + ( + col2 ) * col1 AS col2 FROM tab1

Parse error on line 1:
...T DISTINCT col2 DIV + col1 - + ( + col2 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT 37 DIV - col1 AS col0 FROM tab1 AS cor0

Parse error on line 1:
SELECT 37 DIV - col1 AS col0 FROM 
--------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT ALL + CAST( 16 AS SIGNED ) col0 FROM tab0, tab2 AS cor0

The hash of 9 returned values was different than expected. Check the sorting: 16, 16, 16, 16, 16, 16, 16, 16, 16
```

```sql
SELECT col0 DIV 61 FROM tab2 AS cor0

Parse error on line 1:
SELECT col0 DIV 61 FROM tab2 AS cor0
----------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT DISTINCT * FROM tab0, tab0 AS cor0, tab1, tab2 AS cor1

36 results returned but expected 972
```

```sql
SELECT DISTINCT cor0.col0 * - ( - col0 ) + + col0 DIV ( + col2 ) + + col0 AS col2 FROM tab1 AS cor0

Parse error on line 1:
...col0 ) + + col0 DIV ( + col2 ) + + col0 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT - 46 col1 FROM tab1 cor0 CROSS JOIN tab2, tab0 cor1, tab2 cor2

Parse error on line 1:
...cor0 CROSS JOIN tab2, tab0 cor1, tab2 co
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'WITH', 'AS', 'RPAR', 'PIVOT', 'UNPIVOT', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COMMA'
```

```sql
SELECT ALL * FROM tab1 WHERE NOT NULL IN ( col0 )

Query was expected to return results (but did not): []
```

```sql
SELECT - + col1 * + 85 + col1 DIV CAST( - ( col1 ) AS SIGNED ) FROM tab0 AS cor0

Parse error on line 1:
...1 * + 85 + col1 DIV CAST( - ( col1 ) AS 
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT ALL - CAST( NULL AS SIGNED ) AS col2 FROM tab1, tab2 cor0

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT - CAST( NULL AS SIGNED ) FROM tab0, tab1 AS cor0, tab2 AS cor1

The hash of 27 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

#### ☓ Ran 9962 tests as mysql

* 2011 failed
* 79% was OK

Time: 11522ms

---- ---- ---- ---- ---- ---- ----
### 120/125 `test/random/select/slt_good_9.test`

_Mimic mysql_
```sql
SELECT + 52 * + 95 AS col0 FROM tab2, tab1 AS cor0

The hash of 9 returned values was different than expected. Check the sorting: 4940, 4940, 4940, 4940, 4940, 4940, 4940, 4940, 4940
```

```sql
SELECT + col0 DIV col2 + + col1 FROM tab0 cor0

Parse error on line 1:
SELECT + col0 DIV col2 + + col1 FROM t
------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LITERAL'
```

```sql
SELECT ALL 18 * col0 DIV CAST( col0 AS SIGNED ) FROM tab2 AS cor0

Parse error on line 1:
...T ALL 18 * col0 DIV CAST( col0 AS SIGNED
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'EndTransaction', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'SEARCH', 'PIVOT', 'FOR', 'UNPIVOT', 'IN', 'REMOVE', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'CLASS', 'NUMBER', 'STRING', 'SLASH', 'VERTEX', 'EDGE', 'EXCLAMATION', 'SHARP', 'MODULO', 'GT', 'LT', 'DOLLAR', 'DOT', 'AT', 'SET', 'TO', 'VALUE', 'ROW', 'COLON', 'NOT', 'IF', 'UNION', 'ALL', 'ANY', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PATH', 'RETURN', 'REPEAT', 'PLUS', 'STAR', 'QUESTION', 'FROM', 'DISTINCT', 'UNIQUE', 'SELECT', 'INDEX', 'INTO', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'HAVING', 'DIRECTION', 'COLLATE', 'LIMIT', 'JAVASCRIPT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'NSTRING', 'NULL', 'END', 'WHEN', 'THEN', 'ELSE', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'UPDATE', 'DELETE', 'INSERT', 'DEFAULT', 'CREATE', 'IDENTITY', 'CHECK', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'ColumnConstraints', 'ENUM', 'DROP', 'ALTER', 'RENAME', 'ADD', 'MODIFY', 'ATTACH', 'DATABASE', 'DETACH', 'USE', 'SHOW', 'HELP', 'SOURCE', 'ASSERT', 'ATLBRA', 'LCUR', 'RCUR', 'RBRA', 'OFF', 'COMMIT', 'ROLLBACK', 'BEGIN', 'WHILE', 'CONTINUE', 'BREAK', 'PRINT', 'REQUIRE', 'ECHO', 'DECLARE', 'TRUNCATE', 'MERGE', 'OUTPUT', 'CONTENT', 'COLONDASH', 'QUESTIONDASH', 'CALL', 'SEMICOLON', 'GO', got 'CAST'
```

```sql
SELECT CAST( NULL AS DECIMAL ) FROM tab2 cor0 CROSS JOIN tab0 AS cor1

The hash of 9 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT - + col2 DIV - cor0.col2 AS col1 FROM tab0 AS cor0

Parse error on line 1:
SELECT - + col2 DIV - cor0.col2 AS col1 
--------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'MINUS'
```

```sql
SELECT col1 + - CAST( col1 AS SIGNED ) DIV + cor0.col0 FROM tab2 AS cor0

Parse error on line 1:
...ol1 AS SIGNED ) DIV + cor0.col0 FROM tab
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'PLUS'
```

```sql
SELECT DISTINCT col1 DIV 9 + + col1 * col1 * col0 FROM tab1

Parse error on line 1:
...T DISTINCT col1 DIV 9 + + col1 * col1 * 
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NUMBER'
```

```sql
SELECT ALL - cor0.col2 + - col2 AS col0 FROM tab0 cor0 WHERE + col2 >= NULL

Query was expected to return results (but did not): []
```

```sql
SELECT * FROM tab1, tab1 AS cor0 CROSS JOIN tab0, tab1 AS cor1

Parse error on line 1:
...cor0 CROSS JOIN tab0, tab1 AS cor1
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'WITH', 'AS', 'RPAR', 'PIVOT', 'UNPIVOT', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COMMA'
```

```sql
SELECT DISTINCT - col0 DIV ( tab0.col0 ) + tab0.col0 FROM tab0

Parse error on line 1:
...DISTINCT - col0 DIV ( tab0.col0 ) + tab0
-----------------------^
Expecting 'EOF', 'WITH', 'COMMA', 'RPAR', 'PIVOT', 'UNPIVOT', 'REMOVE', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'INTO', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'LPAR'
```

```sql
SELECT DISTINCT * FROM tab0, tab2 AS cor0, tab1 cor1, tab2 AS cor2

36 results returned but expected 972
```

```sql
SELECT ALL CAST( NULL AS SIGNED ) FROM tab0, tab0 AS cor0, tab2 AS cor1

The hash of 27 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT ALL CAST( NULL AS SIGNED ) FROM tab1, tab2, tab0 AS cor0, tab1 AS cor1

The hash of 81 returned values was different than expected. Check the sorting: NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

#### ☓ Ran 9972 tests as mysql

* 1956 failed
* 80% was OK

Time: 11768ms

---- ---- ---- ---- ---- ---- ----
### 121/125 `test/select1.test`

_Mimic mysql_
```sql
SELECT CASE WHEN c>(SELECT avg(c) FROM t1) THEN a*2 ELSE b*10 END FROM t1 ORDER BY 1

The hash of 30 returned values was different than expected. Check the sorting: 358, 364, 376, 382, 398, 402, 410, 426, 432, 440, 458, 468, 478, 486, 490, 1000, 1050, 1120, 1180, 1240, 1290, 1300, 1390, 1430, 1450, 1510, 1580, 1600, 1670, 1700
```

```sql
SELECT (SELECT count(*) FROM t1 AS x WHERE x.b<t1.b) FROM t1 WHERE e+d BETWEEN a+b-10 AND c+130 AND a>b AND (a>b-2 AND a<b+2) ORDER BY 1

Query was expected to return results (but did not): []
```

#### ☓ Ran 1031 tests as mysql

* 937 failed
* 9% was OK

Time: 5479ms

---- ---- ---- ---- ---- ---- ----
### 122/125 `test/select2.test`

_Mimic mysql_
```sql
SELECT CASE WHEN c>(SELECT avg(c) FROM t1) THEN a*2 ELSE b*10 END FROM t1

The hash of 30 returned values was different than expected. Check the sorting: 1050, 1120, 1240, 1290, 1300, 1390, 1430, 1450, 1510, 1580, 1600, 1670, 1700, 2360, 358, 364, 376, 382, 398, 402, 426, 432, 440, 458, 468, 486, 490, NULL, NULL, NULL
```

```sql
SELECT e, abs(a), b, abs(b-c), CASE WHEN a<b-3 THEN 111 WHEN a<=b THEN 222 WHEN a<b+3 THEN 333 ELSE 444 END, a+b*2, a+b*2+c*3+d*4 FROM t1 WHERE a>b

The hash of 119 returned values was different than expected. Check the sorting: 109, 107, 105, 1, 333, 317, 1067, 132, 131, 130, 4, 333, 391, 1325, 146, 149, 145, 2, 444, 439, NULL, 157, 159, 158, 3, 333, 475, NULL, 162, 163, 160, 1, 444, 483, 1622, 165, 168, 167, 1, 333, 502, NULL, 173, 174, 170, 2, 444, 514, 1714, 177, 179, 175, 1, 444, 529, NULL, 180, 182, 181, 3, 333, 544, 1828, 189, 188, 186, 1, 333, 560, 1861, 197, 199, 198, 3, 333, 595, 1964, 210, 213, 211, 3, 333, 635, 2125, 227, 229, 228, 3, 333, 685, 2264, 230, 234, 232, 1, 333, 698, 2323, 237, 239, 236, NULL, 444, 711, NULL, NULL, 153, 151, 1, 333, 455, NULL, NULL, 243, 240, 4, 444, 723, NULL
```

```sql
SELECT abs(b-c), b, a+b*2+c*3+d*4 FROM t1 WHERE coalesce(a,b,c,d,e)<>0 AND (a>b-2 AND a<b+2)

The hash of 24 returned values was different than expected. Check the sorting: 1, 167, NULL, 2, 139, 1371, 2, 143, 1411, 3, 158, NULL, 3, 181, 1828, 3, 198, 1964, 3, 228, 2264, 4, 130, 1325
```

```sql
SELECT a, (SELECT count(*) FROM t1 AS x WHERE x.b<t1.b), a+b*2+c*3+d*4+e*5, d FROM t1 WHERE a IS NULL

Expected: ["NULL","1","NULL","114","NULL","18","NULL","207"] but got ["NULL","18","NULL","207","NULL","1","NULL","114"]
```

```sql
SELECT a+b*2+c*3, CASE WHEN a<b-3 THEN 111 WHEN a<=b THEN 222 WHEN a<b+3 THEN 333 ELSE 444 END, (SELECT count(*) FROM t1 AS x WHERE x.b<t1.b), b, CASE a+1 WHEN b THEN 111 WHEN c THEN 222 WHEN d THEN 333 WHEN e THEN 444 ELSE 555 END, a+b*2+c*3+d*4+e*5 FROM t1 WHERE d NOT BETWEEN 110 AND 150 OR b IS NOT NULL

The hash of 174 returned values was different than expected. Check the sorting: 1000, 333, 11, 167, 555, NULL, 1030, 444, 12, 170, 555, 2579, 1057, 444, 13, 175, 555, NULL, 1096, 333, 14, 181, 333, 2728, 1121, 333, 15, 186, 444, 2806, 1158, 222, 16, 194, 444, 2878, 1180, 333, 17, 198, 555, 2949, 1277, 333, 19, 211, 222, 3175, 1297, 222, 20, 218, 333, 3260, 1338, 222, 21, 223, 444, 3331, 1360, 333, 22, 228, 555, 3399, 1391, 333, 23, 232, 555, 3473, 1455, 444, 25, 240, 222, NULL, 1484, 111, 26, 249, 444, 3706, 635, 333, 0, 105, 333, 1612, 738, 222, 2, 124, 333, NULL, 760, 222, 3, 129, 333, 1902, 793, 333, 4, 130, 444, 1985, 827, 222, 5, 139, 111, 2046, 851, 222, 6, 143, 111, 2131, 880, 444, 7, 145, 555, NULL, 905, 333, 8, 151, 555, NULL, 940, 333, 9, 158, 555, NULL, 966, 444, 10, 160, 333, 2432, NULL, 444, 0, NULL, 222, NULL, NULL, 444, 0, NULL, 555, NULL, NULL, 444, 1, 112, 555, NULL, NULL, 444, 18, 206, 555, NULL, NULL, 444, 24, 236, 555, NULL
```

```sql
SELECT abs(b-c) FROM t1

The hash of 30 returned values was different than expected. Check the sorting: 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, NULL, NULL, NULL, NULL
```

```sql
SELECT c, CASE WHEN a<b-3 THEN 111 WHEN a<=b THEN 222 WHEN a<b+3 THEN 333 ELSE 444 END, d-e, c-d, (SELECT count(*) FROM t1 AS x WHERE x.b<t1.b), a+b*2+c*3+d*4+e*5, abs(a) FROM t1 WHERE (c<=d-2 OR c>=d+2) AND coalesce(a,b,c,d,e)<>0 AND c>d

The hash of 35 returned values was different than expected. Check the sorting: 119, 444, -1, 3, 0, NULL, 115, 187, 333, -4, 2, 15, 2806, 188, 193, 222, -2, 3, 16, 2878, 191, 214, 333, 2, 2, 19, 3175, 213, 224, 222, 1, 2, 21, 3331, 220
```

```sql
SELECT e, b, a, a+b*2+c*3+d*4+e*5, (SELECT count(*) FROM t1 AS x WHERE x.b<t1.b), a-b, (a+b+c+d+e)/5 FROM t1 WHERE b IS NOT NULL AND coalesce(a,b,c,d,e)<>0

The hash of 189 returned values was different than expected. Check the sorting: 109, 105, 107, 1612, 0, 2, 107, 110, 112, NULL, NULL, 1, NULL, NULL, 126, 129, 127, 1902, 3, -2, 127, 132, 130, 131, 1985, 4, 1, 132, 135, 139, 138, 2046, 5, -1, 137, 144, 143, 142, 2131, 6, -1, 142, 146, 145, 149, NULL, 7, 4, NULL, 157, 158, 159, NULL, 9, 1, NULL, 162, 160, 163, 2432, 10, 3, 162, 165, 167, 168, NULL, 11, 1, NULL, 173, 170, 174, 2579, 12, 4, 172, 177, 175, 179, NULL, 13, 4, NULL, 180, 181, 182, 2728, 14, 1, 182, 189, 186, 188, 2806, 15, 2, 187, 192, 194, 191, 2878, 16, -3, 192, 197, 198, 199, 2949, 17, 1, 197, 210, 211, 213, 3175, 19, 2, 212, 219, 218, 216, 3260, 20, -2, 217, 221, 223, 220, 3331, 21, -3, 222, 227, 228, 229, 3399, 22, 1, 227, 230, 232, 234, 3473, 23, 2, 232, 237, 236, 239, NULL, 24, 3, NULL, 246, 249, 245, 3706, 26, -4, 247, NULL, 124, 121, NULL, 2, -3, NULL, NULL, 151, 153, NULL, 8, 2, NULL, NULL, 206, NULL, NULL, 18, NULL, NULL, NULL, 240, 243, NULL, 25, 3, NULL
```

```sql
SELECT (SELECT count(*) FROM t1 AS x WHERE x.c>t1.c AND x.d<t1.d) FROM t1

The hash of 30 returned values was different than expected. Check the sorting: 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
```

```sql
SELECT d-e, c-d, (a+b+c+d+e)/5 FROM t1 WHERE coalesce(a,b,c,d,e)<>0 OR b>c OR b IS NOT NULL

The hash of 90 returned values was different than expected. Check the sorting: -1, -1, 197, -1, -1, 227, -1, -1, NULL, -1, -2, 107, -1, 3, NULL, -2, -2, 217, -2, 1, 172, -2, 3, 192, -4, 1, 142, -4, 2, 187, 1, 1, 132, 1, 1, 137, 1, 2, 222, 1, NULL, NULL, 2, -1, 247, 2, -3, 127, 2, -3, 162, 2, 2, 212, 3, -2, 232, 3, 1, 182, 4, -1, NULL, NULL, 1, NULL, NULL, 1, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT CASE WHEN c>(SELECT avg(c) FROM t1) THEN a*2 ELSE b*10 END, b, a+b*2+c*3+d*4, CASE WHEN a<b-3 THEN 111 WHEN a<=b THEN 222 WHEN a<b+3 THEN 333 ELSE 444 END, d-e, CASE a+1 WHEN b THEN 111 WHEN c THEN 222 WHEN d THEN 333 WHEN e THEN 444 ELSE 555 END, a-b FROM t1

The hash of 210 returned values was different than expected. Check the sorting: 1050, 105, 1067, 333, -1, 333, 2, 1120, 112, NULL, 444, 4, 555, NULL, 1240, 124, 1226, 222, NULL, 333, -3, 1290, 129, 1272, 222, 2, 333, -2, 1300, 130, 1325, 333, 1, 444, 1, 1390, 139, 1371, 222, 1, 111, -1, 1430, 143, 1411, 222, -4, 111, -1, 1450, 145, NULL, 444, NULL, 555, 4, 1510, 151, NULL, 333, NULL, 555, 2, 1580, 158, NULL, 333, NULL, 555, 1, 1600, 160, 1622, 444, 2, 333, 3, 1670, 167, NULL, 333, NULL, 555, 1, 1700, 170, 1714, 444, -2, 555, 4, 2360, 236, NULL, 444, 1, 555, 3, 358, 175, NULL, 444, NULL, 555, 4, 364, 181, 1828, 333, 3, 333, 1, 376, 186, 1861, 333, -4, 444, 2, 382, 194, 1918, 222, -2, 444, -3, 398, 198, 1964, 333, -1, 555, 1, 402, NULL, NULL, 444, -1, 222, NULL, 426, 211, 2125, 333, 2, 222, 2, 432, 218, 2165, 222, -2, 333, -2, 440, 223, 2226, 222, 1, 444, -3, 458, 228, 2264, 333, -1, 555, 1, 468, 232, 2323, 333, 3, 555, 2, 486, 240, NULL, 444, NULL, 222, 3, 490, 249, 2476, 111, 2, 444, -4, NULL, 206, NULL, 444, NULL, 555, NULL, NULL, NULL, NULL, 444, -1, 333, NULL, NULL, NULL, NULL, 444, NULL, 555, NULL
```

```sql
SELECT a+b*2+c*3+d*4+e*5, CASE a+1 WHEN b THEN 111 WHEN c THEN 222 WHEN d THEN 333 WHEN e THEN 444 ELSE 555 END, e FROM t1 WHERE coalesce(a,b,c,d,e)<>0 OR b>c OR a>b

The hash of 90 returned values was different than expected. Check the sorting: 1612, 333, 109, 1902, 333, 126, 1985, 444, 132, 2046, 111, 135, 2131, 111, 144, 2432, 333, 162, 2579, 555, 173, 2728, 333, 180, 2806, 444, 189, 2878, 444, 192, 2949, 555, 197, 3175, 222, 210, 3260, 333, 219, 3331, 444, 221, 3399, 555, 227, 3473, 555, 230, 3706, 444, 246, NULL, 222, 204, NULL, 222, NULL, NULL, 333, 117, NULL, 333, NULL, NULL, 555, 110, NULL, 555, 146, NULL, 555, 157, NULL, 555, 165, NULL, 555, 177, NULL, 555, 237, NULL, 555, NULL, NULL, 555, NULL, NULL, 555, NULL
```

```sql
SELECT (SELECT count(*) FROM t1 AS x WHERE x.c>t1.c AND x.d<t1.d), d-e, a+b*2+c*3+d*4+e*5 FROM t1 WHERE c BETWEEN b-2 AND d+2 AND EXISTS(SELECT 1 FROM t1 AS x WHERE x.b<t1.b) AND b IS NOT NULL

The hash of 42 returned values was different than expected. Check the sorting: 0, -2, 2579, 0, -4, 2131, 0, -4, 2806, 0, 1, 1985, 0, 1, 2046, 0, 1, 3331, 0, 2, 2432, 0, 2, 3175, 0, 2, 3706, 0, 3, 2728, 0, 3, 3473, 0, 4, NULL, 0, NULL, NULL, 0, NULL, NULL
```

```sql
SELECT a+b*2+c*3, a+b*2+c*3+d*4+e*5, e, a-b, CASE WHEN c>(SELECT avg(c) FROM t1) THEN a*2 ELSE b*10 END FROM t1 WHERE c>d

The hash of 65 returned values was different than expected. Check the sorting: 1030, 2579, 173, 4, 1700, 1096, 2728, 180, 1, 364, 1121, 2806, 189, 2, 376, 1158, 2878, 192, -3, 382, 1277, 3175, 210, 2, 426, 1338, 3331, 221, -3, 440, 738, NULL, NULL, -3, 1240, 793, 1985, 132, 1, 1300, 827, 2046, 135, -1, 1390, 851, 2131, 144, -1, 1430, NULL, NULL, 117, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT e, CASE WHEN c>(SELECT avg(c) FROM t1) THEN a*2 ELSE b*10 END, d-e, d, a+b*2+c*3+d*4 FROM t1

The hash of 150 returned values was different than expected. Check the sorting: 109, 1050, -1, 108, 1067, 110, 1120, 4, 114, NULL, 117, NULL, -1, 116, NULL, 126, 1290, 2, 128, 1272, 132, 1300, 1, 133, 1325, 135, 1390, 1, 136, 1371, 144, 1430, -4, 140, 1411, 146, 1450, NULL, NULL, NULL, 157, 1580, NULL, NULL, NULL, 162, 1600, 2, 164, 1622, 165, 1670, NULL, NULL, NULL, 173, 1700, -2, 171, 1714, 177, 358, NULL, NULL, NULL, 180, 364, 3, 183, 1828, 189, 376, -4, 185, 1861, 192, 382, -2, 190, 1918, 197, 398, -1, 196, 1964, 204, 402, -1, 203, NULL, 210, 426, 2, 212, 2125, 219, 432, -2, 217, 2165, 221, 440, 1, 222, 2226, 227, 458, -1, 226, 2264, 230, 468, 3, 233, 2323, 237, 2360, 1, 238, NULL, 246, 490, 2, 248, 2476, NULL, 1240, NULL, 122, 1226, NULL, 1510, NULL, NULL, NULL, NULL, 486, NULL, NULL, NULL, NULL, NULL, NULL, 101, NULL, NULL, NULL, NULL, 207, NULL
```

```sql
SELECT e, a, (SELECT count(*) FROM t1 AS x WHERE x.c>t1.c AND x.d<t1.d) FROM t1 WHERE EXISTS(SELECT 1 FROM t1 AS x WHERE x.b<t1.b) AND d NOT BETWEEN 110 AND 150

60 results returned but expected 42
```

```sql
SELECT a+b*2, abs(b-c), c, d-e, a+b*2+c*3+d*4, (SELECT count(*) FROM t1 AS x WHERE x.b<t1.b) FROM t1 WHERE (e>c OR e<d) OR (e>a AND e<b) OR a IS NULL

The hash of 138 returned values was different than expected. Check the sorting: 317, 1, 106, -1, 1067, 0, 385, 4, 125, 2, 1272, 3, 391, 4, 134, 1, 1325, 4, 416, 2, 137, 1, 1371, 5, 428, 2, 141, -4, 1411, 6, 475, 3, 155, NULL, NULL, 9, 483, 1, 161, 2, 1622, 10, 514, 2, 172, -2, 1714, 12, 529, 1, 176, NULL, NULL, 13, 544, 3, 184, 3, 1828, 14, 560, 1, 187, -4, 1861, 15, 579, 1, 193, -2, 1918, 16, 595, 3, 195, -1, 1964, 17, 635, 3, 214, 2, 2125, 19, 652, 3, 215, -2, 2165, 20, 666, 1, 224, 1, 2226, 21, 685, 3, 225, -1, 2264, 22, 698, 1, 231, 3, 2323, 23, 711, NULL, NULL, 1, NULL, 24, 743, 2, 247, 2, 2476, 26, NULL, 1, 113, 4, NULL, 1, NULL, 2, 208, NULL, NULL, 18, NULL, NULL, 202, -1, NULL, 0
```

```sql
SELECT a, c-d, a+b*2+c*3, a+b*2+c*3+d*4, (SELECT count(*) FROM t1 AS x WHERE x.c>t1.c AND x.d<t1.d) FROM t1 WHERE (a>b-2 AND a<b+2) OR b IS NOT NULL OR EXISTS(SELECT 1 FROM t1 AS x WHERE x.b<t1.b)

The hash of 135 returned values was different than expected. Check the sorting: 107, -2, 635, 1067, 0, 121, 1, 738, 1226, 0, 127, -3, 760, 1272, 0, 131, 1, 793, 1325, 0, 138, 1, 827, 1371, 0, 142, 1, 851, 1411, 0, 149, NULL, 880, NULL, 0, 153, NULL, 905, NULL, 0, 159, NULL, 940, NULL, 0, 163, -3, 966, 1622, 0, 168, NULL, 1000, NULL, 0, 174, 1, 1030, 1714, 0, 179, NULL, 1057, NULL, 0, 182, 1, 1096, 1828, 0, 188, 2, 1121, 1861, 0, 191, 3, 1158, 1918, 0, 199, -1, 1180, 1964, 0, 213, 2, 1277, 2125, 0, 216, -2, 1297, 2165, 0, 220, 2, 1338, 2226, 0, 229, -1, 1360, 2264, 0, 234, -2, 1391, 2323, 0, 239, NULL, NULL, NULL, 0, 243, NULL, 1455, NULL, 0, 245, -1, 1484, 2476, 0, NULL, -1, NULL, NULL, 0, NULL, 1, NULL, NULL, 0
```

```sql
SELECT CASE a+1 WHEN b THEN 111 WHEN c THEN 222 WHEN d THEN 333 WHEN e THEN 444 ELSE 555 END, a+b*2+c*3+d*4 FROM t1

The hash of 60 returned values was different than expected. Check the sorting: 111, 1371, 111, 1411, 222, 2125, 222, NULL, 222, NULL, 333, 1067, 333, 1226, 333, 1272, 333, 1622, 333, 1828, 333, 2165, 333, NULL, 444, 1325, 444, 1861, 444, 1918, 444, 2226, 444, 2476, 555, 1714, 555, 1964, 555, 2264, 555, 2323, 555, NULL, 555, NULL, 555, NULL, 555, NULL, 555, NULL, 555, NULL, 555, NULL, 555, NULL, 555, NULL
```

```sql
SELECT a+b*2+c*3, c-d FROM t1 WHERE b IS NOT NULL OR coalesce(a,b,c,d,e)<>0 OR d NOT BETWEEN 110 AND 150

The hash of 60 returned values was different than expected. Check the sorting: 1000, NULL, 1030, 1, 1057, NULL, 1096, 1, 1121, 2, 1158, 3, 1180, -1, 1277, 2, 1297, -2, 1338, 2, 1360, -1, 1391, -2, 1455, NULL, 1484, -1, 635, -2, 738, 1, 760, -3, 793, 1, 827, 1, 851, 1, 880, NULL, 905, NULL, 940, NULL, 966, -3, NULL, -1, NULL, -1, NULL, 1, NULL, 1, NULL, 3, NULL, NULL
```

```sql
SELECT c-d, b-c, a+b*2+c*3, abs(a), a+b*2+c*3+d*4 FROM t1

The hash of 150 returned values was different than expected. Check the sorting: -1, -1, NULL, NULL, NULL, -1, 2, 1484, 245, 2476, -1, 3, 1180, 199, 1964, -1, 3, 1360, 229, 2264, -1, NULL, NULL, 201, NULL, -2, -1, 635, 107, 1067, -2, 1, 1391, 234, 2323, -2, 3, 1297, 216, 2165, -3, -1, 966, 163, 1622, -3, 4, 760, 127, 1272, 1, -2, 1030, 174, 1714, 1, -2, NULL, NULL, NULL, 1, -3, 1096, 182, 1828, 1, -4, 793, 131, 1325, 1, 1, 738, 121, 1226, 1, 2, 827, 138, 1371, 1, 2, 851, 142, 1411, 1, NULL, NULL, 104, NULL, 2, -1, 1121, 188, 1861, 2, -1, 1338, 220, 2226, 2, -3, 1277, 213, 2125, 3, 1, 1158, 191, 1918, 3, NULL, NULL, 115, NULL, NULL, -1, 1057, 179, NULL, NULL, -2, 880, 149, NULL, NULL, -4, 1455, 243, NULL, NULL, 1, 1000, 168, NULL, NULL, 1, 905, 153, NULL, NULL, 3, 940, 159, NULL, NULL, NULL, NULL, 239, NULL
```

```sql
SELECT a-b, CASE WHEN c>(SELECT avg(c) FROM t1) THEN a*2 ELSE b*10 END FROM t1 WHERE (c<=d-2 OR c>=d+2) OR c>d OR (e>c OR e<d)

The hash of 52 returned values was different than expected. Check the sorting: -1, 1390, -1, 1430, -2, 1290, -2, 432, -3, 1240, -3, 382, -3, 440, -4, 490, 1, 1300, 1, 1580, 1, 364, 1, 398, 1, 458, 2, 1050, 2, 376, 2, 426, 2, 468, 3, 1600, 3, 2360, 4, 1700, 4, 358, NULL, 1120, NULL, 402, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT (SELECT count(*) FROM t1 AS x WHERE x.c>t1.c AND x.d<t1.d), d-e FROM t1 WHERE e+d BETWEEN a+b-10 AND c+130 AND (e>a AND e<b)

Query was expected to return results (but did not): []
```

```sql
SELECT d-e, a+b*2+c*3+d*4+e*5, a+b*2, a, b-c FROM t1 WHERE c BETWEEN b-2 AND d+2 AND EXISTS(SELECT 1 FROM t1 AS x WHERE x.b<t1.b)

The hash of 70 returned values was different than expected. Check the sorting: -2, 2579, 514, 174, -2, -4, 2131, 428, 142, 2, -4, 2806, 560, 188, -1, 1, 1985, 391, 131, -4, 1, 2046, 416, 138, 2, 1, 3331, 666, 220, -1, 2, 2432, 483, 163, -1, 2, 3175, 635, 213, -3, 2, 3706, 743, 245, 2, 3, 2728, 544, 182, -3, 3, 3473, 698, 234, 1, 4, NULL, NULL, NULL, -1, NULL, NULL, 369, 121, 1, NULL, NULL, NULL, NULL, -2
```

```sql
SELECT c-d FROM t1 WHERE EXISTS(SELECT 1 FROM t1 AS x WHERE x.b<t1.b)

The hash of 26 returned values was different than expected. Check the sorting: -1, -1, -1, -1, -2, -2, -3, -3, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT c-d, a+b*2, d-e, a+b*2+c*3+d*4 FROM t1 WHERE b>c AND b IS NOT NULL AND (a>b-2 AND a<b+2)

The hash of 24 returned values was different than expected. Check the sorting: -1, 595, -1, 1964, -1, 685, -1, 2264, 1, 416, 1, 1371, 1, 428, -4, 1411, NULL, 475, NULL, NULL, NULL, 502, NULL, NULL
```

```sql
SELECT (SELECT count(*) FROM t1 AS x WHERE x.c>t1.c AND x.d<t1.d), (a+b+c+d+e)/5, b-c FROM t1

The hash of 90 returned values was different than expected. Check the sorting: 0, 107, -1, 0, 127, 4, 0, 132, -4, 0, 137, 2, 0, 142, 2, 0, 162, -1, 0, 172, -2, 0, 182, -3, 0, 187, -1, 0, 192, 1, 0, 197, 3, 0, 212, -3, 0, 217, 3, 0, 222, -1, 0, 227, 3, 0, 232, 1, 0, 247, 2, 0, NULL, -1, 0, NULL, -1, 0, NULL, -2, 0, NULL, -2, 0, NULL, -4, 0, NULL, 1, 0, NULL, 1, 0, NULL, 1, 0, NULL, 3, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL
```

```sql
SELECT a+b*2+c*3+d*4+e*5, abs(b-c), (SELECT count(*) FROM t1 AS x WHERE x.c>t1.c AND x.d<t1.d), b-c, a+b*2+c*3, a+b*2+c*3+d*4 FROM t1 WHERE c>d

The hash of 78 returned values was different than expected. Check the sorting: 1985, 4, 0, -4, 793, 1325, 2046, 2, 0, 2, 827, 1371, 2131, 2, 0, 2, 851, 1411, 2579, 2, 0, -2, 1030, 1714, 2728, 3, 0, -3, 1096, 1828, 2806, 1, 0, -1, 1121, 1861, 2878, 1, 0, 1, 1158, 1918, 3175, 3, 0, -3, 1277, 2125, 3331, 1, 0, -1, 1338, 2226, NULL, 1, 0, 1, 738, 1226, NULL, 2, 0, -2, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL
```

```sql
SELECT CASE a+1 WHEN b THEN 111 WHEN c THEN 222 WHEN d THEN 333 WHEN e THEN 444 ELSE 555 END, a, d, b-c, b, a+b*2+c*3+d*4, a+b*2+c*3 FROM t1

The hash of 210 returned values was different than expected. Check the sorting: 111, 138, 136, 2, 139, 1371, 827, 111, 142, 140, 2, 143, 1411, 851, 222, 201, 203, NULL, NULL, NULL, NULL, 222, 213, 212, -3, 211, 2125, 1277, 222, 243, NULL, -4, 240, NULL, 1455, 333, 107, 108, -1, 105, 1067, 635, 333, 115, 116, NULL, NULL, NULL, NULL, 333, 121, 122, 1, 124, 1226, 738, 333, 127, 128, 4, 129, 1272, 760, 333, 163, 164, -1, 160, 1622, 966, 333, 182, 183, -3, 181, 1828, 1096, 333, 216, 217, 3, 218, 2165, 1297, 444, 131, 133, -4, 130, 1325, 793, 444, 188, 185, -1, 186, 1861, 1121, 444, 191, 190, 1, 194, 1918, 1158, 444, 220, 222, -1, 223, 2226, 1338, 444, 245, 248, 2, 249, 2476, 1484, 555, 104, 101, NULL, NULL, NULL, NULL, 555, 149, NULL, -2, 145, NULL, 880, 555, 153, NULL, 1, 151, NULL, 905, 555, 159, NULL, 3, 158, NULL, 940, 555, 168, NULL, 1, 167, NULL, 1000, 555, 174, 171, -2, 170, 1714, 1030, 555, 179, NULL, -1, 175, NULL, 1057, 555, 199, 196, 3, 198, 1964, 1180, 555, 229, 226, 3, 228, 2264, 1360, 555, 234, 233, 1, 232, 2323, 1391, 555, 239, 238, NULL, 236, NULL, NULL, 555, NULL, 114, -1, 112, NULL, NULL, 555, NULL, 207, -2, 206, NULL, NULL
```

```sql
SELECT CASE a+1 WHEN b THEN 111 WHEN c THEN 222 WHEN d THEN 333 WHEN e THEN 444 ELSE 555 END, a+b*2+c*3, CASE WHEN c>(SELECT avg(c) FROM t1) THEN a*2 ELSE b*10 END, e, d, c-d, a FROM t1 WHERE EXISTS(SELECT 1 FROM t1 AS x WHERE x.b<t1.b)

The hash of 182 returned values was different than expected. Check the sorting: 111, 827, 1390, 135, 136, 1, 138, 111, 851, 1430, 144, 140, 1, 142, 222, 1277, 426, 210, 212, 2, 213, 222, 1455, 486, NULL, NULL, NULL, 243, 333, 1096, 364, 180, 183, 1, 182, 333, 1297, 432, 219, 217, -2, 216, 333, 738, 1240, NULL, 122, 1, 121, 333, 760, 1290, 126, 128, -3, 127, 333, 966, 1600, 162, 164, -3, 163, 444, 1121, 376, 189, 185, 2, 188, 444, 1158, 382, 192, 190, 3, 191, 444, 1338, 440, 221, 222, 2, 220, 444, 1484, 490, 246, 248, -1, 245, 444, 793, 1300, 132, 133, 1, 131, 555, 1000, 1670, 165, NULL, NULL, 168, 555, 1030, 1700, 173, 171, 1, 174, 555, 1057, 358, 177, NULL, NULL, 179, 555, 1180, 398, 197, 196, -1, 199, 555, 1360, 458, 227, 226, -1, 229, 555, 1391, 468, 230, 233, -2, 234, 555, 880, 1450, 146, NULL, NULL, 149, 555, 905, 1510, NULL, NULL, NULL, 153, 555, 940, 1580, 157, NULL, NULL, 159, 555, NULL, 1120, 110, 114, -1, NULL, 555, NULL, 2360, 237, 238, NULL, 239, 555, NULL, NULL, NULL, 207, 1, NULL
```

```sql
SELECT (SELECT count(*) FROM t1 AS x WHERE x.b<t1.b), d, b-c, c-d, CASE a+1 WHEN b THEN 111 WHEN c THEN 222 WHEN d THEN 333 WHEN e THEN 444 ELSE 555 END, b, abs(b-c) FROM t1

The hash of 210 returned values was different than expected. Check the sorting: 0, 101, NULL, 1, 555, NULL, NULL, 0, 108, -1, -2, 333, 105, 1, 0, 116, NULL, 3, 333, NULL, NULL, 0, 203, NULL, -1, 222, NULL, NULL, 10, 164, -1, -3, 333, 160, 1, 1, 114, -1, -1, 555, 112, 1, 11, NULL, 1, NULL, 555, 167, 1, 12, 171, -2, 1, 555, 170, 2, 13, NULL, -1, NULL, 555, 175, 1, 14, 183, -3, 1, 333, 181, 3, 15, 185, -1, 2, 444, 186, 1, 16, 190, 1, 3, 444, 194, 1, 17, 196, 3, -1, 555, 198, 3, 18, 207, -2, 1, 555, 206, 2, 19, 212, -3, 2, 222, 211, 3, 20, 217, 3, -2, 333, 218, 3, 2, 122, 1, 1, 333, 124, 1, 21, 222, -1, 2, 444, 223, 1, 22, 226, 3, -1, 555, 228, 3, 23, 233, 1, -2, 555, 232, 1, 24, 238, NULL, NULL, 555, 236, NULL, 25, NULL, -4, NULL, 222, 240, 4, 26, 248, 2, -1, 444, 249, 2, 3, 128, 4, -3, 333, 129, 4, 4, 133, -4, 1, 444, 130, 4, 5, 136, 2, 1, 111, 139, 2, 6, 140, 2, 1, 111, 143, 2, 7, NULL, -2, NULL, 555, 145, 2, 8, NULL, 1, NULL, 555, 151, 1, 9, NULL, 3, NULL, 555, 158, 3
```

```sql
SELECT a+b*2, d, (SELECT count(*) FROM t1 AS x WHERE x.b<t1.b), d-e, a-b, a+b*2+c*3+d*4+e*5 FROM t1

The hash of 180 returned values was different than expected. Check the sorting: 317, 108, 0, -1, 2, 1612, 369, 122, 2, NULL, -3, NULL, 385, 128, 3, 2, -2, 1902, 391, 133, 4, 1, 1, 1985, 416, 136, 5, 1, -1, 2046, 428, 140, 6, -4, -1, 2131, 439, NULL, 7, NULL, 4, NULL, 455, NULL, 8, NULL, 2, NULL, 475, NULL, 9, NULL, 1, NULL, 483, 164, 10, 2, 3, 2432, 502, NULL, 11, NULL, 1, NULL, 514, 171, 12, -2, 4, 2579, 529, NULL, 13, NULL, 4, NULL, 544, 183, 14, 3, 1, 2728, 560, 185, 15, -4, 2, 2806, 579, 190, 16, -2, -3, 2878, 595, 196, 17, -1, 1, 2949, 635, 212, 19, 2, 2, 3175, 652, 217, 20, -2, -2, 3260, 666, 222, 21, 1, -3, 3331, 685, 226, 22, -1, 1, 3399, 698, 233, 23, 3, 2, 3473, 711, 238, 24, 1, 3, NULL, 723, NULL, 25, NULL, 3, NULL, 743, 248, 26, 2, -4, 3706, NULL, 101, 0, NULL, NULL, NULL, NULL, 114, 1, 4, NULL, NULL, NULL, 116, 0, -1, NULL, NULL, NULL, 203, 0, -1, NULL, NULL, NULL, 207, 18, NULL, NULL, NULL
```

```sql
SELECT abs(b-c), a+b*2+c*3+d*4, CASE WHEN a<b-3 THEN 111 WHEN a<=b THEN 222 WHEN a<b+3 THEN 333 ELSE 444 END, a+b*2+c*3, c, e, d FROM t1 WHERE a>b OR (e>c OR e<d) OR b IS NOT NULL

The hash of 196 returned values was different than expected. Check the sorting: 1, 1067, 333, 635, 106, 109, 108, 1, 1226, 222, 738, 123, NULL, 122, 1, 1622, 444, 966, 161, 162, 164, 1, 1861, 333, 1121, 187, 189, 185, 1, 1918, 222, 1158, 193, 192, 190, 1, 2226, 222, 1338, 224, 221, 222, 1, 2323, 333, 1391, 231, 230, 233, 1, NULL, 333, 1000, 166, 165, NULL, 1, NULL, 333, 905, 150, NULL, NULL, 1, NULL, 444, 1057, 176, 177, NULL, 1, NULL, 444, NULL, 113, 110, 114, 2, 1371, 222, 827, 137, 135, 136, 2, 1411, 222, 851, 141, 144, 140, 2, 1714, 444, 1030, 172, 173, 171, 2, 2476, 111, 1484, 247, 246, 248, 2, NULL, 444, 880, 147, 146, NULL, 2, NULL, 444, NULL, 208, NULL, 207, 3, 1828, 333, 1096, 184, 180, 183, 3, 1964, 333, 1180, 195, 197, 196, 3, 2125, 333, 1277, 214, 210, 212, 3, 2165, 222, 1297, 215, 219, 217, 3, 2264, 333, 1360, 225, 227, 226, 3, NULL, 333, 940, 155, 157, NULL, 4, 1272, 222, 760, 125, 126, 128, 4, 1325, 333, 793, 134, 132, 133, 4, NULL, 444, 1455, 244, NULL, NULL, NULL, NULL, 444, NULL, 202, 204, 203, NULL, NULL, 444, NULL, NULL, 237, 238
```

```sql
SELECT a+b*2+c*3+d*4+e*5, a+b*2, d, a+b*2+c*3+d*4, a-b, b-c, a FROM t1 WHERE b>c OR a IS NULL

The hash of 105 returned values was different than expected. Check the sorting: 1902, 385, 128, 1272, -2, 4, 127, 2046, 416, 136, 1371, -1, 2, 138, 2131, 428, 140, 1411, -1, 2, 142, 2878, 579, 190, 1918, -3, 1, 191, 2949, 595, 196, 1964, 1, 3, 199, 3260, 652, 217, 2165, -2, 3, 216, 3399, 685, 226, 2264, 1, 3, 229, 3473, 698, 233, 2323, 2, 1, 234, 3706, 743, 248, 2476, -4, 2, 245, NULL, 369, 122, 1226, -3, 1, 121, NULL, 455, NULL, NULL, 2, 1, 153, NULL, 475, NULL, NULL, 1, 3, 159, NULL, 502, NULL, NULL, 1, 1, 168, NULL, NULL, 114, NULL, NULL, -1, NULL, NULL, NULL, 207, NULL, NULL, -2, NULL
```

```sql
SELECT CASE a+1 WHEN b THEN 111 WHEN c THEN 222 WHEN d THEN 333 WHEN e THEN 444 ELSE 555 END, a+b*2+c*3+d*4+e*5, c-d, b-c, (SELECT count(*) FROM t1 AS x WHERE x.b<t1.b), a+b*2+c*3+d*4 FROM t1

The hash of 180 returned values was different than expected. Check the sorting: 111, 2046, 1, 2, 5, 1371, 111, 2131, 1, 2, 6, 1411, 222, 3175, 2, -3, 19, 2125, 222, NULL, -1, NULL, 0, NULL, 222, NULL, NULL, -4, 25, NULL, 333, 1612, -2, -1, 0, 1067, 333, 1902, -3, 4, 3, 1272, 333, 2432, -3, -1, 10, 1622, 333, 2728, 1, -3, 14, 1828, 333, 3260, -2, 3, 20, 2165, 333, NULL, 1, 1, 2, 1226, 333, NULL, 3, NULL, 0, NULL, 444, 1985, 1, -4, 4, 1325, 444, 2806, 2, -1, 15, 1861, 444, 2878, 3, 1, 16, 1918, 444, 3331, 2, -1, 21, 2226, 444, 3706, -1, 2, 26, 2476, 555, 2579, 1, -2, 12, 1714, 555, 2949, -1, 3, 17, 1964, 555, 3399, -1, 3, 22, 2264, 555, 3473, -2, 1, 23, 2323, 555, NULL, -1, -1, 1, NULL, 555, NULL, 1, -2, 18, NULL, 555, NULL, 1, NULL, 0, NULL, 555, NULL, NULL, -1, 13, NULL, 555, NULL, NULL, -2, 7, NULL, 555, NULL, NULL, 1, 11, NULL, 555, NULL, NULL, 1, 8, NULL, 555, NULL, NULL, 3, 9, NULL, 555, NULL, NULL, NULL, 24, NULL
```

```sql
SELECT (a+b+c+d+e)/5, a+b*2+c*3+d*4+e*5, (SELECT count(*) FROM t1 AS x WHERE x.c>t1.c AND x.d<t1.d), abs(b-c) FROM t1 WHERE (e>c OR e<d) OR coalesce(a,b,c,d,e)<>0 OR EXISTS(SELECT 1 FROM t1 AS x WHERE x.b<t1.b)

The hash of 120 returned values was different than expected. Check the sorting: 107, 1612, 0, 1, 127, 1902, 0, 4, 132, 1985, 0, 4, 137, 2046, 0, 2, 142, 2131, 0, 2, 162, 2432, 0, 1, 172, 2579, 0, 2, 182, 2728, 0, 3, 187, 2806, 0, 1, 192, 2878, 0, 1, 197, 2949, 0, 3, 212, 3175, 0, 3, 217, 3260, 0, 3, 222, 3331, 0, 1, 227, 3399, 0, 3, 232, 3473, 0, 1, 247, 3706, 0, 2, NULL, NULL, 0, 1, NULL, NULL, 0, 1, NULL, NULL, 0, 1, NULL, NULL, 0, 1, NULL, NULL, 0, 1, NULL, NULL, 0, 2, NULL, NULL, 0, 2, NULL, NULL, 0, 3, NULL, NULL, 0, 4, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL
```

```sql
SELECT abs(b-c), c-d, c, d-e, abs(a), b-c FROM t1 WHERE b IS NOT NULL OR (e>c OR e<d) OR d NOT BETWEEN 110 AND 150

The hash of 174 returned values was different than expected. Check the sorting: 1, -1, 113, 4, NULL, -1, 1, -2, 106, -1, 107, -1, 1, -2, 231, 3, 234, 1, 1, -3, 161, 2, 163, -1, 1, 1, 123, NULL, 121, 1, 1, 2, 187, -4, 188, -1, 1, 2, 224, 1, 220, -1, 1, 3, 193, -2, 191, 1, 1, NULL, 150, NULL, 153, 1, 1, NULL, 166, NULL, 168, 1, 1, NULL, 176, NULL, 179, -1, 2, -1, 247, 2, 245, 2, 2, 1, 137, 1, 138, 2, 2, 1, 141, -4, 142, 2, 2, 1, 172, -2, 174, -2, 2, 1, 208, NULL, NULL, -2, 2, NULL, 147, NULL, 149, -2, 3, -1, 195, -1, 199, 3, 3, -1, 225, -1, 229, 3, 3, -2, 215, -2, 216, 3, 3, 1, 184, 3, 182, -3, 3, 2, 214, 2, 213, -3, 3, NULL, 155, NULL, 159, 3, 4, -3, 125, 2, 127, 4, 4, 1, 134, 1, 131, -4, 4, NULL, 244, NULL, 243, -4, NULL, -1, 202, -1, 201, NULL, NULL, 1, 102, NULL, 104, NULL, NULL, NULL, NULL, 1, 239, NULL
```

```sql
SELECT c, a+b*2, (SELECT count(*) FROM t1 AS x WHERE x.b<t1.b), c-d FROM t1 WHERE b>c OR c>d OR a>b

The hash of 112 returned values was different than expected. Check the sorting: 102, NULL, 0, 1, 106, 317, 0, -2, 119, NULL, 0, 3, 123, 369, 2, 1, 125, 385, 3, -3, 134, 391, 4, 1, 137, 416, 5, 1, 141, 428, 6, 1, 147, 439, 7, NULL, 150, 455, 8, NULL, 155, 475, 9, NULL, 161, 483, 10, -3, 166, 502, 11, NULL, 172, 514, 12, 1, 176, 529, 13, NULL, 184, 544, 14, 1, 187, 560, 15, 2, 193, 579, 16, 3, 195, 595, 17, -1, 208, NULL, 18, 1, 214, 635, 19, 2, 215, 652, 20, -2, 224, 666, 21, 2, 225, 685, 22, -1, 231, 698, 23, -2, 244, 723, 25, NULL, 247, 743, 26, -1, NULL, 711, 24, NULL
```

```sql
SELECT a+b*2+c*3+d*4, abs(b-c), d-e, abs(a), a, e, c-d FROM t1

The hash of 210 returned values was different than expected. Check the sorting: 1067, 1, -1, 107, 107, 109, -2, 1226, 1, NULL, 121, 121, NULL, 1, 1272, 4, 2, 127, 127, 126, -3, 1325, 4, 1, 131, 131, 132, 1, 1371, 2, 1, 138, 138, 135, 1, 1411, 2, -4, 142, 142, 144, 1, 1622, 1, 2, 163, 163, 162, -3, 1714, 2, -2, 174, 174, 173, 1, 1828, 3, 3, 182, 182, 180, 1, 1861, 1, -4, 188, 188, 189, 2, 1918, 1, -2, 191, 191, 192, 3, 1964, 3, -1, 199, 199, 197, -1, 2125, 3, 2, 213, 213, 210, 2, 2165, 3, -2, 216, 216, 219, -2, 2226, 1, 1, 220, 220, 221, 2, 2264, 3, -1, 229, 229, 227, -1, 2323, 1, 3, 234, 234, 230, -2, 2476, 2, 2, 245, 245, 246, -1, NULL, 1, 4, NULL, NULL, 110, -1, NULL, 1, NULL, 153, 153, NULL, NULL, NULL, 1, NULL, 168, 168, 165, NULL, NULL, 1, NULL, 179, 179, 177, NULL, NULL, 2, NULL, 149, 149, 146, NULL, NULL, 2, NULL, NULL, NULL, NULL, 1, NULL, 3, NULL, 159, 159, 157, NULL, NULL, 4, NULL, 243, 243, NULL, NULL, NULL, NULL, -1, 115, 115, 117, 3, NULL, NULL, -1, 201, 201, 204, -1, NULL, NULL, 1, 239, 239, 237, NULL, NULL, NULL, NULL, 104, 104, NULL, 1
```

```sql
SELECT abs(a), a+b*2+c*3, a+b*2, c, d, a-b, a+b*2+c*3+d*4+e*5 FROM t1 WHERE b IS NOT NULL

The hash of 189 returned values was different than expected. Check the sorting: 107, 635, 317, 106, 108, 2, 1612, 121, 738, 369, 123, 122, -3, NULL, 127, 760, 385, 125, 128, -2, 1902, 131, 793, 391, 134, 133, 1, 1985, 138, 827, 416, 137, 136, -1, 2046, 142, 851, 428, 141, 140, -1, 2131, 149, 880, 439, 147, NULL, 4, NULL, 153, 905, 455, 150, NULL, 2, NULL, 159, 940, 475, 155, NULL, 1, NULL, 163, 966, 483, 161, 164, 3, 2432, 168, 1000, 502, 166, NULL, 1, NULL, 174, 1030, 514, 172, 171, 4, 2579, 179, 1057, 529, 176, NULL, 4, NULL, 182, 1096, 544, 184, 183, 1, 2728, 188, 1121, 560, 187, 185, 2, 2806, 191, 1158, 579, 193, 190, -3, 2878, 199, 1180, 595, 195, 196, 1, 2949, 213, 1277, 635, 214, 212, 2, 3175, 216, 1297, 652, 215, 217, -2, 3260, 220, 1338, 666, 224, 222, -3, 3331, 229, 1360, 685, 225, 226, 1, 3399, 234, 1391, 698, 231, 233, 2, 3473, 239, NULL, 711, NULL, 238, 3, NULL, 243, 1455, 723, 244, NULL, 3, NULL, 245, 1484, 743, 247, 248, -4, 3706, NULL, NULL, NULL, 113, 114, NULL, NULL, NULL, NULL, NULL, 208, 207, NULL, NULL
```

```sql
SELECT a+b*2+c*3+d*4+e*5, b-c, b, a, c, CASE WHEN c>(SELECT avg(c) FROM t1) THEN a*2 ELSE b*10 END, (a+b+c+d+e)/5 FROM t1

The hash of 210 returned values was different than expected. Check the sorting: 1612, -1, 105, 107, 106, 1050, 107, 1902, 4, 129, 127, 125, 1290, 127, 1985, -4, 130, 131, 134, 1300, 132, 2046, 2, 139, 138, 137, 1390, 137, 2131, 2, 143, 142, 141, 1430, 142, 2432, -1, 160, 163, 161, 1600, 162, 2579, -2, 170, 174, 172, 1700, 172, 2728, -3, 181, 182, 184, 364, 182, 2806, -1, 186, 188, 187, 376, 187, 2878, 1, 194, 191, 193, 382, 192, 2949, 3, 198, 199, 195, 398, 197, 3175, -3, 211, 213, 214, 426, 212, 3260, 3, 218, 216, 215, 432, 217, 3331, -1, 223, 220, 224, 440, 222, 3399, 3, 228, 229, 225, 458, 227, 3473, 1, 232, 234, 231, 468, 232, 3706, 2, 249, 245, 247, 490, 247, NULL, -1, 112, NULL, 113, 1120, NULL, NULL, -1, 175, 179, 176, 358, NULL, NULL, -2, 145, 149, 147, 1450, NULL, NULL, -2, 206, NULL, 208, NULL, NULL, NULL, -4, 240, 243, 244, 486, NULL, NULL, 1, 124, 121, 123, 1240, NULL, NULL, 1, 151, 153, 150, 1510, NULL, NULL, 1, 167, 168, 166, 1670, NULL, NULL, 3, 158, 159, 155, 1580, NULL, NULL, NULL, 236, 239, NULL, 2360, NULL, NULL, NULL, NULL, 104, 102, NULL, NULL, NULL, NULL, NULL, 115, 119, NULL, NULL, NULL, NULL, NULL, 201, 202, 402, NULL
```

```sql
SELECT b, a+b*2+c*3+d*4, a+b*2, d-e, abs(a), (SELECT count(*) FROM t1 AS x WHERE x.c>t1.c AND x.d<t1.d), d FROM t1 WHERE c>d OR (c<=d-2 OR c>=d+2) OR EXISTS(SELECT 1 FROM t1 AS x WHERE x.b<t1.b)

The hash of 203 returned values was different than expected. Check the sorting: 105, 1067, 317, -1, 107, 0, 108, 112, NULL, NULL, 4, NULL, 0, 114, 124, 1226, 369, NULL, 121, 0, 122, 129, 1272, 385, 2, 127, 0, 128, 130, 1325, 391, 1, 131, 0, 133, 139, 1371, 416, 1, 138, 0, 136, 143, 1411, 428, -4, 142, 0, 140, 145, NULL, 439, NULL, 149, 0, NULL, 151, NULL, 455, NULL, 153, 0, NULL, 158, NULL, 475, NULL, 159, 0, NULL, 160, 1622, 483, 2, 163, 0, 164, 167, NULL, 502, NULL, 168, 0, NULL, 170, 1714, 514, -2, 174, 0, 171, 175, NULL, 529, NULL, 179, 0, NULL, 181, 1828, 544, 3, 182, 0, 183, 186, 1861, 560, -4, 188, 0, 185, 194, 1918, 579, -2, 191, 0, 190, 198, 1964, 595, -1, 199, 0, 196, 206, NULL, NULL, NULL, NULL, 0, 207, 211, 2125, 635, 2, 213, 0, 212, 218, 2165, 652, -2, 216, 0, 217, 223, 2226, 666, 1, 220, 0, 222, 228, 2264, 685, -1, 229, 0, 226, 232, 2323, 698, 3, 234, 0, 233, 236, NULL, 711, 1, 239, 0, 238, 240, NULL, 723, NULL, 243, 0, NULL, 249, 2476, 743, 2, 245, 0, 248, NULL, NULL, NULL, -1, 115, 0, 116, NULL, NULL, NULL, NULL, 104, 0, 101
```

```sql
SELECT (a+b+c+d+e)/5, CASE WHEN a<b-3 THEN 111 WHEN a<=b THEN 222 WHEN a<b+3 THEN 333 ELSE 444 END, b-c, CASE WHEN c>(SELECT avg(c) FROM t1) THEN a*2 ELSE b*10 END, a+b*2+c*3+d*4+e*5, a+b*2, a+b*2+c*3+d*4 FROM t1

The hash of 210 returned values was different than expected. Check the sorting: 107, 333, -1, 1050, 1612, 317, 1067, 127, 222, 4, 1290, 1902, 385, 1272, 132, 333, -4, 1300, 1985, 391, 1325, 137, 222, 2, 1390, 2046, 416, 1371, 142, 222, 2, 1430, 2131, 428, 1411, 162, 444, -1, 1600, 2432, 483, 1622, 172, 444, -2, 1700, 2579, 514, 1714, 182, 333, -3, 364, 2728, 544, 1828, 187, 333, -1, 376, 2806, 560, 1861, 192, 222, 1, 382, 2878, 579, 1918, 197, 333, 3, 398, 2949, 595, 1964, 212, 333, -3, 426, 3175, 635, 2125, 217, 222, 3, 432, 3260, 652, 2165, 222, 222, -1, 440, 3331, 666, 2226, 227, 333, 3, 458, 3399, 685, 2264, 232, 333, 1, 468, 3473, 698, 2323, 247, 111, 2, 490, 3706, 743, 2476, NULL, 222, 1, 1240, NULL, 369, 1226, NULL, 333, 1, 1510, NULL, 455, NULL, NULL, 333, 1, 1670, NULL, 502, NULL, NULL, 333, 3, 1580, NULL, 475, NULL, NULL, 444, -1, 1120, NULL, NULL, NULL, NULL, 444, -1, 358, NULL, 529, NULL, NULL, 444, -2, 1450, NULL, 439, NULL, NULL, 444, -2, NULL, NULL, NULL, NULL, NULL, 444, -4, 486, NULL, 723, NULL, NULL, 444, NULL, 2360, NULL, 711, NULL, NULL, 444, NULL, 402, NULL, NULL, NULL, NULL, 444, NULL, NULL, NULL, NULL, NULL, NULL, 444, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT (a+b+c+d+e)/5, CASE WHEN a<b-3 THEN 111 WHEN a<=b THEN 222 WHEN a<b+3 THEN 333 ELSE 444 END, b, c-d, d, a+b*2+c*3+d*4, a+b*2+c*3 FROM t1

The hash of 210 returned values was different than expected. Check the sorting: 107, 333, 105, -2, 108, 1067, 635, 127, 222, 129, -3, 128, 1272, 760, 132, 333, 130, 1, 133, 1325, 793, 137, 222, 139, 1, 136, 1371, 827, 142, 222, 143, 1, 140, 1411, 851, 162, 444, 160, -3, 164, 1622, 966, 172, 444, 170, 1, 171, 1714, 1030, 182, 333, 181, 1, 183, 1828, 1096, 187, 333, 186, 2, 185, 1861, 1121, 192, 222, 194, 3, 190, 1918, 1158, 197, 333, 198, -1, 196, 1964, 1180, 212, 333, 211, 2, 212, 2125, 1277, 217, 222, 218, -2, 217, 2165, 1297, 222, 222, 223, 2, 222, 2226, 1338, 227, 333, 228, -1, 226, 2264, 1360, 232, 333, 232, -2, 233, 2323, 1391, 247, 111, 249, -1, 248, 2476, 1484, NULL, 222, 124, 1, 122, 1226, 738, NULL, 333, 151, NULL, NULL, NULL, 905, NULL, 333, 158, NULL, NULL, NULL, 940, NULL, 333, 167, NULL, NULL, NULL, 1000, NULL, 444, 112, -1, 114, NULL, NULL, NULL, 444, 145, NULL, NULL, NULL, 880, NULL, 444, 175, NULL, NULL, NULL, 1057, NULL, 444, 206, 1, 207, NULL, NULL, NULL, 444, 236, NULL, 238, NULL, NULL, NULL, 444, 240, NULL, NULL, NULL, 1455, NULL, 444, NULL, -1, 203, NULL, NULL, NULL, 444, NULL, 1, 101, NULL, NULL, NULL, 444, NULL, 3, 116, NULL, NULL
```

```sql
SELECT a+b*2+c*3, a+b*2+c*3+d*4+e*5, a+b*2+c*3+d*4, (SELECT count(*) FROM t1 AS x WHERE x.b<t1.b), c-d, (a+b+c+d+e)/5 FROM t1 WHERE coalesce(a,b,c,d,e)<>0

The hash of 180 returned values was different than expected. Check the sorting: 1000, NULL, NULL, 11, NULL, NULL, 1030, 2579, 1714, 12, 1, 172, 1057, NULL, NULL, 13, NULL, NULL, 1096, 2728, 1828, 14, 1, 182, 1121, 2806, 1861, 15, 2, 187, 1158, 2878, 1918, 16, 3, 192, 1180, 2949, 1964, 17, -1, 197, 1277, 3175, 2125, 19, 2, 212, 1297, 3260, 2165, 20, -2, 217, 1338, 3331, 2226, 21, 2, 222, 1360, 3399, 2264, 22, -1, 227, 1391, 3473, 2323, 23, -2, 232, 1455, NULL, NULL, 25, NULL, NULL, 1484, 3706, 2476, 26, -1, 247, 635, 1612, 1067, 0, -2, 107, 738, NULL, 1226, 2, 1, NULL, 760, 1902, 1272, 3, -3, 127, 793, 1985, 1325, 4, 1, 132, 827, 2046, 1371, 5, 1, 137, 851, 2131, 1411, 6, 1, 142, 880, NULL, NULL, 7, NULL, NULL, 905, NULL, NULL, 8, NULL, NULL, 940, NULL, NULL, 9, NULL, NULL, 966, 2432, 1622, 10, -3, 162, NULL, NULL, NULL, 0, -1, NULL, NULL, NULL, NULL, 0, 1, NULL, NULL, NULL, NULL, 0, 3, NULL, NULL, NULL, NULL, 1, -1, NULL, NULL, NULL, NULL, 18, 1, NULL, NULL, NULL, NULL, 24, NULL, NULL
```

```sql
SELECT c, b, abs(b-c), e, d-e, (SELECT count(*) FROM t1 AS x WHERE x.c>t1.c AND x.d<t1.d) FROM t1

The hash of 180 returned values was different than expected. Check the sorting: 102, NULL, NULL, NULL, NULL, 0, 106, 105, 1, 109, -1, 0, 113, 112, 1, 110, 4, 0, 119, NULL, NULL, 117, -1, 0, 123, 124, 1, NULL, NULL, 0, 125, 129, 4, 126, 2, 0, 134, 130, 4, 132, 1, 0, 137, 139, 2, 135, 1, 0, 141, 143, 2, 144, -4, 0, 147, 145, 2, 146, NULL, 0, 150, 151, 1, NULL, NULL, 0, 155, 158, 3, 157, NULL, 0, 161, 160, 1, 162, 2, 0, 166, 167, 1, 165, NULL, 0, 172, 170, 2, 173, -2, 0, 176, 175, 1, 177, NULL, 0, 184, 181, 3, 180, 3, 0, 187, 186, 1, 189, -4, 0, 193, 194, 1, 192, -2, 0, 195, 198, 3, 197, -1, 0, 202, NULL, NULL, 204, -1, 0, 208, 206, 2, NULL, NULL, 0, 214, 211, 3, 210, 2, 0, 215, 218, 3, 219, -2, 0, 224, 223, 1, 221, 1, 0, 225, 228, 3, 227, -1, 0, 231, 232, 1, 230, 3, 0, 244, 240, 4, NULL, NULL, 0, 247, 249, 2, 246, 2, 0, NULL, 236, NULL, 237, 1, 0
```

```sql
SELECT a+b*2+c*3+d*4+e*5, CASE a+1 WHEN b THEN 111 WHEN c THEN 222 WHEN d THEN 333 WHEN e THEN 444 ELSE 555 END, abs(b-c), (SELECT count(*) FROM t1 AS x WHERE x.b<t1.b), (a+b+c+d+e)/5, a+b*2+c*3+d*4 FROM t1

The hash of 180 returned values was different than expected. Check the sorting: 1612, 333, 1, 0, 107, 1067, 1902, 333, 4, 3, 127, 1272, 1985, 444, 4, 4, 132, 1325, 2046, 111, 2, 5, 137, 1371, 2131, 111, 2, 6, 142, 1411, 2432, 333, 1, 10, 162, 1622, 2579, 555, 2, 12, 172, 1714, 2728, 333, 3, 14, 182, 1828, 2806, 444, 1, 15, 187, 1861, 2878, 444, 1, 16, 192, 1918, 2949, 555, 3, 17, 197, 1964, 3175, 222, 3, 19, 212, 2125, 3260, 333, 3, 20, 217, 2165, 3331, 444, 1, 21, 222, 2226, 3399, 555, 3, 22, 227, 2264, 3473, 555, 1, 23, 232, 2323, 3706, 444, 2, 26, 247, 2476, NULL, 222, 4, 25, NULL, NULL, NULL, 222, NULL, 0, NULL, NULL, NULL, 333, 1, 2, NULL, 1226, NULL, 333, NULL, 0, NULL, NULL, NULL, 555, 1, 11, NULL, NULL, NULL, 555, 1, 13, NULL, NULL, NULL, 555, 1, 1, NULL, NULL, NULL, 555, 1, 8, NULL, NULL, NULL, 555, 2, 18, NULL, NULL, NULL, 555, 2, 7, NULL, NULL, NULL, 555, 3, 9, NULL, NULL, NULL, 555, NULL, 0, NULL, NULL, NULL, 555, NULL, 24, NULL, NULL
```

```sql
SELECT CASE WHEN c>(SELECT avg(c) FROM t1) THEN a*2 ELSE b*10 END, a+b*2+c*3+d*4, a+b*2+c*3+d*4+e*5, a, (a+b+c+d+e)/5, e, d FROM t1

The hash of 210 returned values was different than expected. Check the sorting: 1050, 1067, 1612, 107, 107, 109, 108, 1120, NULL, NULL, NULL, NULL, 110, 114, 1240, 1226, NULL, 121, NULL, NULL, 122, 1290, 1272, 1902, 127, 127, 126, 128, 1300, 1325, 1985, 131, 132, 132, 133, 1390, 1371, 2046, 138, 137, 135, 136, 1430, 1411, 2131, 142, 142, 144, 140, 1450, NULL, NULL, 149, NULL, 146, NULL, 1510, NULL, NULL, 153, NULL, NULL, NULL, 1580, NULL, NULL, 159, NULL, 157, NULL, 1600, 1622, 2432, 163, 162, 162, 164, 1670, NULL, NULL, 168, NULL, 165, NULL, 1700, 1714, 2579, 174, 172, 173, 171, 2360, NULL, NULL, 239, NULL, 237, 238, 358, NULL, NULL, 179, NULL, 177, NULL, 364, 1828, 2728, 182, 182, 180, 183, 376, 1861, 2806, 188, 187, 189, 185, 382, 1918, 2878, 191, 192, 192, 190, 398, 1964, 2949, 199, 197, 197, 196, 402, NULL, NULL, 201, NULL, 204, 203, 426, 2125, 3175, 213, 212, 210, 212, 432, 2165, 3260, 216, 217, 219, 217, 440, 2226, 3331, 220, 222, 221, 222, 458, 2264, 3399, 229, 227, 227, 226, 468, 2323, 3473, 234, 232, 230, 233, 486, NULL, NULL, 243, NULL, NULL, NULL, 490, 2476, 3706, 245, 247, 246, 248, NULL, NULL, NULL, 104, NULL, NULL, 101, NULL, NULL, NULL, 115, NULL, 117, 116, NULL, NULL, NULL, NULL, NULL, NULL, 207
```

```sql
SELECT a-b, c-d, (a+b+c+d+e)/5, a+b*2+c*3+d*4+e*5, CASE a+1 WHEN b THEN 111 WHEN c THEN 222 WHEN d THEN 333 WHEN e THEN 444 ELSE 555 END, d FROM t1

The hash of 180 returned values was different than expected. Check the sorting: -1, 1, 137, 2046, 111, 136, -1, 1, 142, 2131, 111, 140, -2, -2, 217, 3260, 333, 217, -2, -3, 127, 1902, 333, 128, -3, 1, NULL, NULL, 333, 122, -3, 2, 222, 3331, 444, 222, -3, 3, 192, 2878, 444, 190, -4, -1, 247, 3706, 444, 248, 1, -1, 197, 2949, 555, 196, 1, -1, 227, 3399, 555, 226, 1, 1, 132, 1985, 444, 133, 1, 1, 182, 2728, 333, 183, 1, NULL, NULL, NULL, 555, NULL, 1, NULL, NULL, NULL, 555, NULL, 2, -2, 107, 1612, 333, 108, 2, -2, 232, 3473, 555, 233, 2, 2, 187, 2806, 444, 185, 2, 2, 212, 3175, 222, 212, 2, NULL, NULL, NULL, 555, NULL, 3, -3, 162, 2432, 333, 164, 3, NULL, NULL, NULL, 222, NULL, 3, NULL, NULL, NULL, 555, 238, 4, 1, 172, 2579, 555, 171, 4, NULL, NULL, NULL, 555, NULL, 4, NULL, NULL, NULL, 555, NULL, NULL, -1, NULL, NULL, 222, 203, NULL, -1, NULL, NULL, 555, 114, NULL, 1, NULL, NULL, 555, 101, NULL, 1, NULL, NULL, 555, 207, NULL, 3, NULL, NULL, 333, 116
```

#### ☓ Ran 1031 tests as mysql

* 917 failed
* 11% was OK

Time: 4761ms

---- ---- ---- ---- ---- ---- ----
### 123/125 `test/select3.test`

_Mimic mysql_
```sql
SELECT CASE WHEN c>(SELECT avg(c) FROM t1) THEN a*2 ELSE b*10 END FROM t1

The hash of 30 returned values was different than expected. Check the sorting: 1050, 1120, 1240, 1290, 1300, 1390, 1430, 1450, 1510, 1580, 1600, 1670, 1700, 2360, 358, 364, 376, 382, 398, 402, 426, 432, 440, 458, 468, 486, 490, NULL, NULL, NULL
```

```sql
SELECT a+b*2+c*3+d*4+e*5, (a+b+c+d+e)/5 FROM t1

The hash of 60 returned values was different than expected. Check the sorting: 1612, 107, 1902, 127, 1985, 132, 2046, 137, 2131, 142, 2432, 162, 2579, 172, 2728, 182, 2806, 187, 2878, 192, 2949, 197, 3175, 212, 3260, 217, 3331, 222, 3399, 227, 3473, 232, 3706, 247, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT a+b*2+c*3+d*4+e*5, CASE WHEN a<b-3 THEN 111 WHEN a<=b THEN 222 WHEN a<b+3 THEN 333 ELSE 444 END, abs(b-c), (a+b+c+d+e)/5, a+b*2+c*3 FROM t1 WHERE d>e AND (e>c OR e<d) AND EXISTS(SELECT 1 FROM t1 AS x WHERE x.b<t1.b)

The hash of 55 returned values was different than expected. Check the sorting: 1902, 222, 4, 127, 760, 1985, 333, 4, 132, 793, 2046, 222, 2, 137, 827, 2432, 444, 1, 162, 966, 2728, 333, 3, 182, 1096, 3175, 333, 3, 212, 1277, 3331, 222, 1, 222, 1338, 3473, 333, 1, 232, 1391, 3706, 111, 2, 247, 1484, NULL, 444, 1, NULL, NULL, NULL, 444, NULL, NULL, NULL
```

```sql
SELECT a, a+b*2+c*3+d*4, e, d, a+b*2 FROM t1 WHERE (e>a AND e<b)

The hash of 15 returned values was different than expected. Check the sorting: 191, 1918, 192, 190, 579, 220, 2226, 221, 222, 666, 245, 2476, 246, 248, 743
```

```sql
SELECT a+b*2+c*3+d*4, CASE WHEN a<b-3 THEN 111 WHEN a<=b THEN 222 WHEN a<b+3 THEN 333 ELSE 444 END, a+b*2+c*3+d*4+e*5 FROM t1

The hash of 90 returned values was different than expected. Check the sorting: 1067, 333, 1612, 1226, 222, NULL, 1272, 222, 1902, 1325, 333, 1985, 1371, 222, 2046, 1411, 222, 2131, 1622, 444, 2432, 1714, 444, 2579, 1828, 333, 2728, 1861, 333, 2806, 1918, 222, 2878, 1964, 333, 2949, 2125, 333, 3175, 2165, 222, 3260, 2226, 222, 3331, 2264, 333, 3399, 2323, 333, 3473, 2476, 111, 3706, NULL, 333, NULL, NULL, 333, NULL, NULL, 333, NULL, NULL, 444, NULL, NULL, 444, NULL, NULL, 444, NULL, NULL, 444, NULL, NULL, 444, NULL, NULL, 444, NULL, NULL, 444, NULL, NULL, 444, NULL, NULL, 444, NULL
```

```sql
SELECT b, a+b*2+c*3, c-d, CASE WHEN a<b-3 THEN 111 WHEN a<=b THEN 222 WHEN a<b+3 THEN 333 ELSE 444 END FROM t1 WHERE (a>b-2 AND a<b+2) AND (e>a AND e<b) AND b>c

Query was expected to return results (but did not): []
```

```sql
SELECT e, a, CASE WHEN c>(SELECT avg(c) FROM t1) THEN a*2 ELSE b*10 END, (a+b+c+d+e)/5, d-e FROM t1 WHERE (c<=d-2 OR c>=d+2) OR d>e

The hash of 80 returned values was different than expected. Check the sorting: 109, 107, 1050, 107, -1, 110, NULL, 1120, NULL, 4, 117, 115, NULL, NULL, -1, 126, 127, 1290, 127, 2, 132, 131, 1300, 132, 1, 135, 138, 1390, 137, 1, 162, 163, 1600, 162, 2, 180, 182, 364, 182, 3, 189, 188, 376, 187, -4, 192, 191, 382, 192, -2, 210, 213, 426, 212, 2, 219, 216, 432, 217, -2, 221, 220, 440, 222, 1, 230, 234, 468, 232, 3, 237, 239, 2360, NULL, 1, 246, 245, 490, 247, 2
```

```sql
SELECT a+b*2+c*3+d*4+e*5 FROM t1

The hash of 30 returned values was different than expected. Check the sorting: 1612, 1902, 1985, 2046, 2131, 2432, 2579, 2728, 2806, 2878, 2949, 3175, 3260, 3331, 3399, 3473, 3706, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT d FROM t1 WHERE a>b OR d>e

The hash of 22 returned values was different than expected. Check the sorting: 108, 114, 128, 133, 136, 164, 171, 183, 185, 196, 212, 222, 226, 233, 238, 248, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT abs(a), (a+b+c+d+e)/5, a+b*2+c*3+d*4, c, (SELECT count(*) FROM t1 AS x WHERE x.b<t1.b), a+b*2+c*3, a-b FROM t1 WHERE a>b

The hash of 119 returned values was different than expected. Check the sorting: 107, 107, 1067, 106, 0, 635, 2, 131, 132, 1325, 134, 4, 793, 1, 149, NULL, NULL, 147, 7, 880, 4, 153, NULL, NULL, 150, 8, 905, 2, 159, NULL, NULL, 155, 9, 940, 1, 163, 162, 1622, 161, 10, 966, 3, 168, NULL, NULL, 166, 11, 1000, 1, 174, 172, 1714, 172, 12, 1030, 4, 179, NULL, NULL, 176, 13, 1057, 4, 182, 182, 1828, 184, 14, 1096, 1, 188, 187, 1861, 187, 15, 1121, 2, 199, 197, 1964, 195, 17, 1180, 1, 213, 212, 2125, 214, 19, 1277, 2, 229, 227, 2264, 225, 22, 1360, 1, 234, 232, 2323, 231, 23, 1391, 2, 239, NULL, NULL, NULL, 24, NULL, 3, 243, NULL, NULL, 244, 25, 1455, 3
```

```sql
SELECT d, a, a+b*2+c*3+d*4+e*5 FROM t1

The hash of 90 returned values was different than expected. Check the sorting: 101, 104, NULL, 108, 107, 1612, 114, NULL, NULL, 116, 115, NULL, 122, 121, NULL, 128, 127, 1902, 133, 131, 1985, 136, 138, 2046, 140, 142, 2131, 164, 163, 2432, 171, 174, 2579, 183, 182, 2728, 185, 188, 2806, 190, 191, 2878, 196, 199, 2949, 203, 201, NULL, 207, NULL, NULL, 212, 213, 3175, 217, 216, 3260, 222, 220, 3331, 226, 229, 3399, 233, 234, 3473, 238, 239, NULL, 248, 245, 3706, NULL, 149, NULL, NULL, 153, NULL, NULL, 159, NULL, NULL, 168, NULL, NULL, 179, NULL, NULL, 243, NULL
```

```sql
SELECT d-e, c-d, (a+b+c+d+e)/5 FROM t1 WHERE d NOT BETWEEN 110 AND 150 OR e+d BETWEEN a+b-10 AND c+130 OR b>c

81 results returned but expected 72
```

```sql
SELECT a+b*2+c*3, CASE WHEN c>(SELECT avg(c) FROM t1) THEN a*2 ELSE b*10 END, c, (a+b+c+d+e)/5, d-e, a+b*2+c*3+d*4+e*5 FROM t1

The hash of 180 returned values was different than expected. Check the sorting: 1000, 1670, 166, NULL, NULL, NULL, 1030, 1700, 172, 172, -2, 2579, 1057, 358, 176, NULL, NULL, NULL, 1096, 364, 184, 182, 3, 2728, 1121, 376, 187, 187, -4, 2806, 1158, 382, 193, 192, -2, 2878, 1180, 398, 195, 197, -1, 2949, 1277, 426, 214, 212, 2, 3175, 1297, 432, 215, 217, -2, 3260, 1338, 440, 224, 222, 1, 3331, 1360, 458, 225, 227, -1, 3399, 1391, 468, 231, 232, 3, 3473, 1455, 486, 244, NULL, NULL, NULL, 1484, 490, 247, 247, 2, 3706, 635, 1050, 106, 107, -1, 1612, 738, 1240, 123, NULL, NULL, NULL, 760, 1290, 125, 127, 2, 1902, 793, 1300, 134, 132, 1, 1985, 827, 1390, 137, 137, 1, 2046, 851, 1430, 141, 142, -4, 2131, 880, 1450, 147, NULL, NULL, NULL, 905, 1510, 150, NULL, NULL, NULL, 940, 1580, 155, NULL, NULL, NULL, 966, 1600, 161, 162, 2, 2432, NULL, 1120, 113, NULL, 4, NULL, NULL, 2360, NULL, NULL, 1, NULL, NULL, 402, 202, NULL, -1, NULL, NULL, NULL, 102, NULL, NULL, NULL, NULL, NULL, 119, NULL, -1, NULL, NULL, NULL, 208, NULL, NULL, NULL
```

```sql
SELECT a+b*2+c*3+d*4, (a+b+c+d+e)/5 FROM t1 WHERE (e>c OR e<d) AND d>e AND d NOT BETWEEN 110 AND 150

The hash of 14 returned values was different than expected. Check the sorting: 1622, 162, 1828, 182, 2125, 212, 2226, 222, 2323, 232, 2476, 247, NULL, NULL
```

```sql
SELECT a-b, d, c-d, a+b*2+c*3+d*4, CASE a+1 WHEN b THEN 111 WHEN c THEN 222 WHEN d THEN 333 WHEN e THEN 444 ELSE 555 END FROM t1 WHERE (e>c OR e<d) OR b>c

The hash of 125 returned values was different than expected. Check the sorting: -1, 136, 1, 1371, 111, -1, 140, 1, 1411, 111, -2, 128, -3, 1272, 333, -2, 217, -2, 2165, 333, -3, 122, 1, 1226, 333, -3, 190, 3, 1918, 444, -3, 222, 2, 2226, 444, -4, 248, -1, 2476, 444, 1, 133, 1, 1325, 444, 1, 183, 1, 1828, 333, 1, 196, -1, 1964, 555, 1, 226, -1, 2264, 555, 1, NULL, NULL, NULL, 555, 1, NULL, NULL, NULL, 555, 2, 108, -2, 1067, 333, 2, 185, 2, 1861, 444, 2, 212, 2, 2125, 222, 2, 233, -2, 2323, 555, 2, NULL, NULL, NULL, 555, 3, 164, -3, 1622, 333, 3, 238, NULL, NULL, 555, 4, 171, 1, 1714, 555, 4, NULL, NULL, NULL, 555, NULL, 114, -1, NULL, 555, NULL, 203, -1, NULL, 222
```

```sql
SELECT CASE a+1 WHEN b THEN 111 WHEN c THEN 222 WHEN d THEN 333 WHEN e THEN 444 ELSE 555 END, a-b, e, d-e, a+b*2+c*3+d*4+e*5 FROM t1 WHERE b>c

The hash of 65 returned values was different than expected. Check the sorting: 111, -1, 135, 1, 2046, 111, -1, 144, -4, 2131, 333, -2, 126, 2, 1902, 333, -2, 219, -2, 3260, 333, -3, NULL, NULL, NULL, 444, -3, 192, -2, 2878, 444, -4, 246, 2, 3706, 555, 1, 157, NULL, NULL, 555, 1, 165, NULL, NULL, 555, 1, 197, -1, 2949, 555, 1, 227, -1, 3399, 555, 2, 230, 3, 3473, 555, 2, NULL, NULL, NULL
```

```sql
SELECT a+b*2+c*3+d*4, a-b, abs(b-c), (SELECT count(*) FROM t1 AS x WHERE x.c>t1.c AND x.d<t1.d), a+b*2+c*3, b-c FROM t1 WHERE d>e OR (c<=d-2 OR c>=d+2)

The hash of 96 returned values was different than expected. Check the sorting: 1067, 2, 1, 0, 635, -1, 1272, -2, 4, 0, 760, 4, 1325, 1, 4, 0, 793, -4, 1371, -1, 2, 0, 827, 2, 1622, 3, 1, 0, 966, -1, 1828, 1, 3, 0, 1096, -3, 1861, 2, 1, 0, 1121, -1, 1918, -3, 1, 0, 1158, 1, 2125, 2, 3, 0, 1277, -3, 2165, -2, 3, 0, 1297, 3, 2226, -3, 1, 0, 1338, -1, 2323, 2, 1, 0, 1391, 1, 2476, -4, 2, 0, 1484, 2, NULL, 3, NULL, 0, NULL, NULL, NULL, NULL, 1, 0, NULL, -1, NULL, NULL, NULL, 0, NULL, NULL
```

```sql
SELECT b-c, CASE WHEN c>(SELECT avg(c) FROM t1) THEN a*2 ELSE b*10 END, a+b*2+c*3, b, c-d, a+b*2 FROM t1

The hash of 180 returned values was different than expected. Check the sorting: -1, 1050, 635, 105, -2, 317, -1, 1120, NULL, 112, -1, NULL, -1, 1600, 966, 160, -3, 483, -1, 358, 1057, 175, NULL, 529, -1, 376, 1121, 186, 2, 560, -1, 440, 1338, 223, 2, 666, -2, 1450, 880, 145, NULL, 439, -2, 1700, 1030, 170, 1, 514, -2, NULL, NULL, 206, 1, NULL, -3, 364, 1096, 181, 1, 544, -3, 426, 1277, 211, 2, 635, -4, 1300, 793, 130, 1, 391, -4, 486, 1455, 240, NULL, 723, 1, 1240, 738, 124, 1, 369, 1, 1510, 905, 151, NULL, 455, 1, 1670, 1000, 167, NULL, 502, 1, 382, 1158, 194, 3, 579, 1, 468, 1391, 232, -2, 698, 2, 1390, 827, 139, 1, 416, 2, 1430, 851, 143, 1, 428, 2, 490, 1484, 249, -1, 743, 3, 1580, 940, 158, NULL, 475, 3, 398, 1180, 198, -1, 595, 3, 432, 1297, 218, -2, 652, 3, 458, 1360, 228, -1, 685, 4, 1290, 760, 129, -3, 385, NULL, 2360, NULL, 236, NULL, 711, NULL, 402, NULL, NULL, -1, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, 3, NULL
```

```sql
SELECT CASE a+1 WHEN b THEN 111 WHEN c THEN 222 WHEN d THEN 333 WHEN e THEN 444 ELSE 555 END, a+b*2+c*3+d*4+e*5, a+b*2, a, d-e, b FROM t1 WHERE d>e

The hash of 66 returned values was different than expected. Check the sorting: 111, 2046, 416, 138, 1, 139, 222, 3175, 635, 213, 2, 211, 333, 1902, 385, 127, 2, 129, 333, 2432, 483, 163, 2, 160, 333, 2728, 544, 182, 3, 181, 444, 1985, 391, 131, 1, 130, 444, 3331, 666, 220, 1, 223, 444, 3706, 743, 245, 2, 249, 555, 3473, 698, 234, 3, 232, 555, NULL, 711, 239, 1, 236, 555, NULL, NULL, NULL, 4, 112
```

```sql
SELECT (a+b+c+d+e)/5, d-e, d FROM t1 WHERE d NOT BETWEEN 110 AND 150 AND d>e

The hash of 21 returned values was different than expected. Check the sorting: 162, 2, 164, 182, 3, 183, 212, 2, 212, 222, 1, 222, 232, 3, 233, 247, 2, 248, NULL, 1, 238
```

```sql
SELECT abs(b-c), e, CASE WHEN a<b-3 THEN 111 WHEN a<=b THEN 222 WHEN a<b+3 THEN 333 ELSE 444 END, a+b*2+c*3+d*4+e*5, a+b*2+c*3, c-d, a+b*2+c*3+d*4 FROM t1

The hash of 210 returned values was different than expected. Check the sorting: 1, 109, 333, 1612, 635, -2, 1067, 1, 110, 444, NULL, NULL, -1, NULL, 1, 162, 444, 2432, 966, -3, 1622, 1, 165, 333, NULL, 1000, NULL, NULL, 1, 177, 444, NULL, 1057, NULL, NULL, 1, 189, 333, 2806, 1121, 2, 1861, 1, 192, 222, 2878, 1158, 3, 1918, 1, 221, 222, 3331, 1338, 2, 2226, 1, 230, 333, 3473, 1391, -2, 2323, 1, NULL, 222, NULL, 738, 1, 1226, 1, NULL, 333, NULL, 905, NULL, NULL, 2, 135, 222, 2046, 827, 1, 1371, 2, 144, 222, 2131, 851, 1, 1411, 2, 146, 444, NULL, 880, NULL, NULL, 2, 173, 444, 2579, 1030, 1, 1714, 2, 246, 111, 3706, 1484, -1, 2476, 2, NULL, 444, NULL, NULL, 1, NULL, 3, 157, 333, NULL, 940, NULL, NULL, 3, 180, 333, 2728, 1096, 1, 1828, 3, 197, 333, 2949, 1180, -1, 1964, 3, 210, 333, 3175, 1277, 2, 2125, 3, 219, 222, 3260, 1297, -2, 2165, 3, 227, 333, 3399, 1360, -1, 2264, 4, 126, 222, 1902, 760, -3, 1272, 4, 132, 333, 1985, 793, 1, 1325, 4, NULL, 444, NULL, 1455, NULL, NULL, NULL, 117, 444, NULL, NULL, 3, NULL, NULL, 204, 444, NULL, NULL, -1, NULL, NULL, 237, 444, NULL, NULL, NULL, NULL, NULL, NULL, 444, NULL, NULL, 1, NULL
```

```sql
SELECT c, a+b*2+c*3+d*4+e*5, CASE WHEN c>(SELECT avg(c) FROM t1) THEN a*2 ELSE b*10 END, a+b*2+c*3, a FROM t1 WHERE EXISTS(SELECT 1 FROM t1 AS x WHERE x.b<t1.b)

The hash of 130 returned values was different than expected. Check the sorting: 113, NULL, 1120, NULL, NULL, 123, NULL, 1240, 738, 121, 125, 1902, 1290, 760, 127, 134, 1985, 1300, 793, 131, 137, 2046, 1390, 827, 138, 141, 2131, 1430, 851, 142, 147, NULL, 1450, 880, 149, 150, NULL, 1510, 905, 153, 155, NULL, 1580, 940, 159, 161, 2432, 1600, 966, 163, 166, NULL, 1670, 1000, 168, 172, 2579, 1700, 1030, 174, 176, NULL, 358, 1057, 179, 184, 2728, 364, 1096, 182, 187, 2806, 376, 1121, 188, 193, 2878, 382, 1158, 191, 195, 2949, 398, 1180, 199, 208, NULL, NULL, NULL, NULL, 214, 3175, 426, 1277, 213, 215, 3260, 432, 1297, 216, 224, 3331, 440, 1338, 220, 225, 3399, 458, 1360, 229, 231, 3473, 468, 1391, 234, 244, NULL, 486, 1455, 243, 247, 3706, 490, 1484, 245, NULL, NULL, 2360, NULL, 239
```

```sql
SELECT (SELECT count(*) FROM t1 AS x WHERE x.b<t1.b), CASE a+1 WHEN b THEN 111 WHEN c THEN 222 WHEN d THEN 333 WHEN e THEN 444 ELSE 555 END, a+b*2+c*3+d*4+e*5, a-b, abs(a), d FROM t1 WHERE (c<=d-2 OR c>=d+2) OR c BETWEEN b-2 AND d+2

The hash of 114 returned values was different than expected. Check the sorting: 0, 333, 1612, 2, 107, 108, 0, 333, NULL, NULL, 115, 116, 10, 333, 2432, 3, 163, 164, 12, 555, 2579, 4, 174, 171, 14, 333, 2728, 1, 182, 183, 15, 444, 2806, 2, 188, 185, 1, 555, NULL, NULL, NULL, 114, 16, 444, 2878, -3, 191, 190, 18, 555, NULL, NULL, NULL, 207, 19, 222, 3175, 2, 213, 212, 20, 333, 3260, -2, 216, 217, 21, 444, 3331, -3, 220, 222, 2, 333, NULL, -3, 121, 122, 23, 555, 3473, 2, 234, 233, 26, 444, 3706, -4, 245, 248, 3, 333, 1902, -2, 127, 128, 4, 444, 1985, 1, 131, 133, 5, 111, 2046, -1, 138, 136, 6, 111, 2131, -1, 142, 140
```

```sql
SELECT b-c, a+b*2, c, a+b*2+c*3+d*4 FROM t1

The hash of 120 returned values was different than expected. Check the sorting: -1, 317, 106, 1067, -1, 483, 161, 1622, -1, 529, 176, NULL, -1, 560, 187, 1861, -1, 666, 224, 2226, -1, NULL, 113, NULL, -2, 439, 147, NULL, -2, 514, 172, 1714, -2, NULL, 208, NULL, -3, 544, 184, 1828, -3, 635, 214, 2125, -4, 391, 134, 1325, -4, 723, 244, NULL, 1, 369, 123, 1226, 1, 455, 150, NULL, 1, 502, 166, NULL, 1, 579, 193, 1918, 1, 698, 231, 2323, 2, 416, 137, 1371, 2, 428, 141, 1411, 2, 743, 247, 2476, 3, 475, 155, NULL, 3, 595, 195, 1964, 3, 652, 215, 2165, 3, 685, 225, 2264, 4, 385, 125, 1272, NULL, 711, NULL, NULL, NULL, NULL, 102, NULL, NULL, NULL, 119, NULL, NULL, NULL, 202, NULL
```

```sql
SELECT a+b*2+c*3+d*4+e*5, a, d, (a+b+c+d+e)/5, e, (SELECT count(*) FROM t1 AS x WHERE x.b<t1.b) FROM t1

The hash of 180 returned values was different than expected. Check the sorting: 1612, 107, 108, 107, 109, 0, 1902, 127, 128, 127, 126, 3, 1985, 131, 133, 132, 132, 4, 2046, 138, 136, 137, 135, 5, 2131, 142, 140, 142, 144, 6, 2432, 163, 164, 162, 162, 10, 2579, 174, 171, 172, 173, 12, 2728, 182, 183, 182, 180, 14, 2806, 188, 185, 187, 189, 15, 2878, 191, 190, 192, 192, 16, 2949, 199, 196, 197, 197, 17, 3175, 213, 212, 212, 210, 19, 3260, 216, 217, 217, 219, 20, 3331, 220, 222, 222, 221, 21, 3399, 229, 226, 227, 227, 22, 3473, 234, 233, 232, 230, 23, 3706, 245, 248, 247, 246, 26, NULL, 104, 101, NULL, NULL, 0, NULL, 115, 116, NULL, 117, 0, NULL, 121, 122, NULL, NULL, 2, NULL, 149, NULL, NULL, 146, 7, NULL, 153, NULL, NULL, NULL, 8, NULL, 159, NULL, NULL, 157, 9, NULL, 168, NULL, NULL, 165, 11, NULL, 179, NULL, NULL, 177, 13, NULL, 201, 203, NULL, 204, 0, NULL, 239, 238, NULL, 237, 24, NULL, 243, NULL, NULL, NULL, 25, NULL, NULL, 114, NULL, 110, 1, NULL, NULL, 207, NULL, NULL, 18
```

```sql
SELECT a+b*2, abs(a), e, a+b*2+c*3+d*4, CASE WHEN c>(SELECT avg(c) FROM t1) THEN a*2 ELSE b*10 END FROM t1

The hash of 150 returned values was different than expected. Check the sorting: 317, 107, 109, 1067, 1050, 369, 121, NULL, 1226, 1240, 385, 127, 126, 1272, 1290, 391, 131, 132, 1325, 1300, 416, 138, 135, 1371, 1390, 428, 142, 144, 1411, 1430, 439, 149, 146, NULL, 1450, 455, 153, NULL, NULL, 1510, 475, 159, 157, NULL, 1580, 483, 163, 162, 1622, 1600, 502, 168, 165, NULL, 1670, 514, 174, 173, 1714, 1700, 529, 179, 177, NULL, 358, 544, 182, 180, 1828, 364, 560, 188, 189, 1861, 376, 579, 191, 192, 1918, 382, 595, 199, 197, 1964, 398, 635, 213, 210, 2125, 426, 652, 216, 219, 2165, 432, 666, 220, 221, 2226, 440, 685, 229, 227, 2264, 458, 698, 234, 230, 2323, 468, 711, 239, 237, NULL, 2360, 723, 243, NULL, NULL, 486, 743, 245, 246, 2476, 490, NULL, 104, NULL, NULL, NULL, NULL, 115, 117, NULL, NULL, NULL, 201, 204, NULL, 402, NULL, NULL, 110, NULL, 1120, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT abs(b-c), a+b*2+c*3+d*4, CASE WHEN a<b-3 THEN 111 WHEN a<=b THEN 222 WHEN a<b+3 THEN 333 ELSE 444 END, a+b*2+c*3, c, e, d FROM t1 WHERE d NOT BETWEEN 110 AND 150 OR c BETWEEN b-2 AND d+2 OR a>b

The hash of 196 returned values was different than expected. Check the sorting: 1, 1067, 333, 635, 106, 109, 108, 1, 1226, 222, 738, 123, NULL, 122, 1, 1622, 444, 966, 161, 162, 164, 1, 1861, 333, 1121, 187, 189, 185, 1, 1918, 222, 1158, 193, 192, 190, 1, 2226, 222, 1338, 224, 221, 222, 1, 2323, 333, 1391, 231, 230, 233, 1, NULL, 333, 1000, 166, 165, NULL, 1, NULL, 333, 905, 150, NULL, NULL, 1, NULL, 444, 1057, 176, 177, NULL, 1, NULL, 444, NULL, 113, 110, 114, 2, 1371, 222, 827, 137, 135, 136, 2, 1411, 222, 851, 141, 144, 140, 2, 1714, 444, 1030, 172, 173, 171, 2, 2476, 111, 1484, 247, 246, 248, 2, NULL, 444, 880, 147, 146, NULL, 2, NULL, 444, NULL, 208, NULL, 207, 3, 1828, 333, 1096, 184, 180, 183, 3, 1964, 333, 1180, 195, 197, 196, 3, 2125, 333, 1277, 214, 210, 212, 3, 2165, 222, 1297, 215, 219, 217, 3, 2264, 333, 1360, 225, 227, 226, 3, NULL, 333, 940, 155, 157, NULL, 4, 1325, 333, 793, 134, 132, 133, 4, NULL, 444, 1455, 244, NULL, NULL, NULL, NULL, 444, NULL, 102, NULL, 101, NULL, NULL, 444, NULL, 202, 204, 203, NULL, NULL, 444, NULL, NULL, 237, 238
```

```sql
SELECT (a+b+c+d+e)/5, CASE WHEN c>(SELECT avg(c) FROM t1) THEN a*2 ELSE b*10 END, a, d, a+b*2+c*3, CASE WHEN a<b-3 THEN 111 WHEN a<=b THEN 222 WHEN a<b+3 THEN 333 ELSE 444 END, a-b FROM t1

The hash of 210 returned values was different than expected. Check the sorting: 107, 1050, 107, 108, 635, 333, 2, 127, 1290, 127, 128, 760, 222, -2, 132, 1300, 131, 133, 793, 333, 1, 137, 1390, 138, 136, 827, 222, -1, 142, 1430, 142, 140, 851, 222, -1, 162, 1600, 163, 164, 966, 444, 3, 172, 1700, 174, 171, 1030, 444, 4, 182, 364, 182, 183, 1096, 333, 1, 187, 376, 188, 185, 1121, 333, 2, 192, 382, 191, 190, 1158, 222, -3, 197, 398, 199, 196, 1180, 333, 1, 212, 426, 213, 212, 1277, 333, 2, 217, 432, 216, 217, 1297, 222, -2, 222, 440, 220, 222, 1338, 222, -3, 227, 458, 229, 226, 1360, 333, 1, 232, 468, 234, 233, 1391, 333, 2, 247, 490, 245, 248, 1484, 111, -4, NULL, 1120, NULL, 114, NULL, 444, NULL, NULL, 1240, 121, 122, 738, 222, -3, NULL, 1450, 149, NULL, 880, 444, 4, NULL, 1510, 153, NULL, 905, 333, 2, NULL, 1580, 159, NULL, 940, 333, 1, NULL, 1670, 168, NULL, 1000, 333, 1, NULL, 2360, 239, 238, NULL, 444, 3, NULL, 358, 179, NULL, 1057, 444, 4, NULL, 402, 201, 203, NULL, 444, NULL, NULL, 486, 243, NULL, 1455, 444, 3, NULL, NULL, 104, 101, NULL, 444, NULL, NULL, NULL, 115, 116, NULL, 444, NULL, NULL, NULL, NULL, 207, NULL, 444, NULL
```

```sql
SELECT a, a+b*2+c*3+d*4, CASE WHEN a<b-3 THEN 111 WHEN a<=b THEN 222 WHEN a<b+3 THEN 333 ELSE 444 END, a+b*2, a+b*2+c*3+d*4+e*5, abs(a) FROM t1

The hash of 180 returned values was different than expected. Check the sorting: 104, NULL, 444, NULL, NULL, 104, 107, 1067, 333, 317, 1612, 107, 115, NULL, 444, NULL, NULL, 115, 121, 1226, 222, 369, NULL, 121, 127, 1272, 222, 385, 1902, 127, 131, 1325, 333, 391, 1985, 131, 138, 1371, 222, 416, 2046, 138, 142, 1411, 222, 428, 2131, 142, 149, NULL, 444, 439, NULL, 149, 153, NULL, 333, 455, NULL, 153, 159, NULL, 333, 475, NULL, 159, 163, 1622, 444, 483, 2432, 163, 168, NULL, 333, 502, NULL, 168, 174, 1714, 444, 514, 2579, 174, 179, NULL, 444, 529, NULL, 179, 182, 1828, 333, 544, 2728, 182, 188, 1861, 333, 560, 2806, 188, 191, 1918, 222, 579, 2878, 191, 199, 1964, 333, 595, 2949, 199, 201, NULL, 444, NULL, NULL, 201, 213, 2125, 333, 635, 3175, 213, 216, 2165, 222, 652, 3260, 216, 220, 2226, 222, 666, 3331, 220, 229, 2264, 333, 685, 3399, 229, 234, 2323, 333, 698, 3473, 234, 239, NULL, 444, 711, NULL, 239, 243, NULL, 444, 723, NULL, 243, 245, 2476, 111, 743, 3706, 245, NULL, NULL, 444, NULL, NULL, NULL, NULL, NULL, 444, NULL, NULL, NULL
```

```sql
SELECT (SELECT count(*) FROM t1 AS x WHERE x.c>t1.c AND x.d<t1.d), a, abs(b-c), d, abs(a), CASE a+1 WHEN b THEN 111 WHEN c THEN 222 WHEN d THEN 333 WHEN e THEN 444 ELSE 555 END, d-e FROM t1

The hash of 210 returned values was different than expected. Check the sorting: 0, 104, NULL, 101, 104, 555, NULL, 0, 107, 1, 108, 107, 333, -1, 0, 115, NULL, 116, 115, 333, -1, 0, 121, 1, 122, 121, 333, NULL, 0, 127, 4, 128, 127, 333, 2, 0, 131, 4, 133, 131, 444, 1, 0, 138, 2, 136, 138, 111, 1, 0, 142, 2, 140, 142, 111, -4, 0, 149, 2, NULL, 149, 555, NULL, 0, 153, 1, NULL, 153, 555, NULL, 0, 159, 3, NULL, 159, 555, NULL, 0, 163, 1, 164, 163, 333, 2, 0, 168, 1, NULL, 168, 555, NULL, 0, 174, 2, 171, 174, 555, -2, 0, 179, 1, NULL, 179, 555, NULL, 0, 182, 3, 183, 182, 333, 3, 0, 188, 1, 185, 188, 444, -4, 0, 191, 1, 190, 191, 444, -2, 0, 199, 3, 196, 199, 555, -1, 0, 201, NULL, 203, 201, 222, -1, 0, 213, 3, 212, 213, 222, 2, 0, 216, 3, 217, 216, 333, -2, 0, 220, 1, 222, 220, 444, 1, 0, 229, 3, 226, 229, 555, -1, 0, 234, 1, 233, 234, 555, 3, 0, 239, NULL, 238, 239, 555, 1, 0, 243, 4, NULL, 243, 222, NULL, 0, 245, 2, 248, 245, 444, 2, 0, NULL, 1, 114, NULL, 555, 4, 0, NULL, 2, 207, NULL, 555, NULL
```

```sql
SELECT d-e, a+b*2+c*3+d*4+e*5, a+b*2+c*3, d, (SELECT count(*) FROM t1 AS x WHERE x.b<t1.b), CASE WHEN a<b-3 THEN 111 WHEN a<=b THEN 222 WHEN a<b+3 THEN 333 ELSE 444 END, a+b*2+c*3+d*4 FROM t1

The hash of 210 returned values was different than expected. Check the sorting: -1, 1612, 635, 108, 0, 333, 1067, -1, 2949, 1180, 196, 17, 333, 1964, -1, 3399, 1360, 226, 22, 333, 2264, -1, NULL, NULL, 116, 0, 444, NULL, -1, NULL, NULL, 203, 0, 444, NULL, -2, 2579, 1030, 171, 12, 444, 1714, -2, 2878, 1158, 190, 16, 222, 1918, -2, 3260, 1297, 217, 20, 222, 2165, -4, 2131, 851, 140, 6, 222, 1411, -4, 2806, 1121, 185, 15, 333, 1861, 1, 1985, 793, 133, 4, 333, 1325, 1, 2046, 827, 136, 5, 222, 1371, 1, 3331, 1338, 222, 21, 222, 2226, 1, NULL, NULL, 238, 24, 444, NULL, 2, 1902, 760, 128, 3, 222, 1272, 2, 2432, 966, 164, 10, 444, 1622, 2, 3175, 1277, 212, 19, 333, 2125, 2, 3706, 1484, 248, 26, 111, 2476, 3, 2728, 1096, 183, 14, 333, 1828, 3, 3473, 1391, 233, 23, 333, 2323, 4, NULL, NULL, 114, 1, 444, NULL, NULL, NULL, 1000, NULL, 11, 333, NULL, NULL, NULL, 1057, NULL, 13, 444, NULL, NULL, NULL, 1455, NULL, 25, 444, NULL, NULL, NULL, 738, 122, 2, 222, 1226, NULL, NULL, 880, NULL, 7, 444, NULL, NULL, NULL, 905, NULL, 8, 333, NULL, NULL, NULL, 940, NULL, 9, 333, NULL, NULL, NULL, NULL, 101, 0, 444, NULL, NULL, NULL, NULL, 207, 18, 444, NULL
```

```sql
SELECT d, a, a+b*2+c*3, a+b*2+c*3+d*4, CASE WHEN c>(SELECT avg(c) FROM t1) THEN a*2 ELSE b*10 END FROM t1

The hash of 150 returned values was different than expected. Check the sorting: 101, 104, NULL, NULL, NULL, 108, 107, 635, 1067, 1050, 114, NULL, NULL, NULL, 1120, 116, 115, NULL, NULL, NULL, 122, 121, 738, 1226, 1240, 128, 127, 760, 1272, 1290, 133, 131, 793, 1325, 1300, 136, 138, 827, 1371, 1390, 140, 142, 851, 1411, 1430, 164, 163, 966, 1622, 1600, 171, 174, 1030, 1714, 1700, 183, 182, 1096, 1828, 364, 185, 188, 1121, 1861, 376, 190, 191, 1158, 1918, 382, 196, 199, 1180, 1964, 398, 203, 201, NULL, NULL, 402, 207, NULL, NULL, NULL, NULL, 212, 213, 1277, 2125, 426, 217, 216, 1297, 2165, 432, 222, 220, 1338, 2226, 440, 226, 229, 1360, 2264, 458, 233, 234, 1391, 2323, 468, 238, 239, NULL, NULL, 2360, 248, 245, 1484, 2476, 490, NULL, 149, 880, NULL, 1450, NULL, 153, 905, NULL, 1510, NULL, 159, 940, NULL, 1580, NULL, 168, 1000, NULL, 1670, NULL, 179, 1057, NULL, 358, NULL, 243, 1455, NULL, 486
```

```sql
SELECT (a+b+c+d+e)/5, d, CASE WHEN a<b-3 THEN 111 WHEN a<=b THEN 222 WHEN a<b+3 THEN 333 ELSE 444 END, a+b*2+c*3, a+b*2+c*3+d*4+e*5 FROM t1 WHERE c BETWEEN b-2 AND d+2 OR (a>b-2 AND a<b+2)

The hash of 95 returned values was different than expected. Check the sorting: 107, 108, 333, 635, 1612, 132, 133, 333, 793, 1985, 137, 136, 222, 827, 2046, 142, 140, 222, 851, 2131, 162, 164, 444, 966, 2432, 172, 171, 444, 1030, 2579, 182, 183, 333, 1096, 2728, 187, 185, 333, 1121, 2806, 197, 196, 333, 1180, 2949, 212, 212, 333, 1277, 3175, 222, 222, 222, 1338, 3331, 227, 226, 333, 1360, 3399, 232, 233, 333, 1391, 3473, 247, 248, 111, 1484, 3706, NULL, 114, 444, NULL, NULL, NULL, 122, 222, 738, NULL, NULL, 207, 444, NULL, NULL, NULL, NULL, 333, 1000, NULL, NULL, NULL, 333, 940, NULL
```

```sql
SELECT CASE WHEN c>(SELECT avg(c) FROM t1) THEN a*2 ELSE b*10 END, a+b*2+c*3, c-d FROM t1 WHERE e+d BETWEEN a+b-10 AND c+130 OR a>b

The hash of 54 returned values was different than expected. Check the sorting: 1050, 635, -2, 1290, 760, -3, 1300, 793, 1, 1450, 880, NULL, 1510, 905, NULL, 1580, 940, NULL, 1600, 966, -3, 1670, 1000, NULL, 1700, 1030, 1, 2360, NULL, NULL, 358, 1057, NULL, 364, 1096, 1, 376, 1121, 2, 398, 1180, -1, 426, 1277, 2, 458, 1360, -1, 468, 1391, -2, 486, 1455, NULL
```

```sql
SELECT a-b, (a+b+c+d+e)/5, b, e, b-c FROM t1

The hash of 150 returned values was different than expected. Check the sorting: -1, 137, 139, 135, 2, -1, 142, 143, 144, 2, -2, 127, 129, 126, 4, -2, 217, 218, 219, 3, -3, 192, 194, 192, 1, -3, 222, 223, 221, -1, -3, NULL, 124, NULL, 1, -4, 247, 249, 246, 2, 1, 132, 130, 132, -4, 1, 182, 181, 180, -3, 1, 197, 198, 197, 3, 1, 227, 228, 227, 3, 1, NULL, 158, 157, 3, 1, NULL, 167, 165, 1, 2, 107, 105, 109, -1, 2, 187, 186, 189, -1, 2, 212, 211, 210, -3, 2, 232, 232, 230, 1, 2, NULL, 151, NULL, 1, 3, 162, 160, 162, -1, 3, NULL, 236, 237, NULL, 3, NULL, 240, NULL, -4, 4, 172, 170, 173, -2, 4, NULL, 145, 146, -2, 4, NULL, 175, 177, -1, NULL, NULL, 112, 110, -1, NULL, NULL, 206, NULL, -2, NULL, NULL, NULL, 117, NULL, NULL, NULL, NULL, 204, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT a+b*2+c*3+d*4, CASE WHEN c>(SELECT avg(c) FROM t1) THEN a*2 ELSE b*10 END FROM t1

The hash of 60 returned values was different than expected. Check the sorting: 1067, 1050, 1226, 1240, 1272, 1290, 1325, 1300, 1371, 1390, 1411, 1430, 1622, 1600, 1714, 1700, 1828, 364, 1861, 376, 1918, 382, 1964, 398, 2125, 426, 2165, 432, 2226, 440, 2264, 458, 2323, 468, 2476, 490, NULL, 1120, NULL, 1450, NULL, 1510, NULL, 1580, NULL, 1670, NULL, 2360, NULL, 358, NULL, 402, NULL, 486, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT a+b*2+c*3+d*4, CASE WHEN a<b-3 THEN 111 WHEN a<=b THEN 222 WHEN a<b+3 THEN 333 ELSE 444 END, abs(a), a+b*2+c*3, a+b*2+c*3+d*4+e*5 FROM t1

The hash of 150 returned values was different than expected. Check the sorting: 1067, 333, 107, 635, 1612, 1226, 222, 121, 738, NULL, 1272, 222, 127, 760, 1902, 1325, 333, 131, 793, 1985, 1371, 222, 138, 827, 2046, 1411, 222, 142, 851, 2131, 1622, 444, 163, 966, 2432, 1714, 444, 174, 1030, 2579, 1828, 333, 182, 1096, 2728, 1861, 333, 188, 1121, 2806, 1918, 222, 191, 1158, 2878, 1964, 333, 199, 1180, 2949, 2125, 333, 213, 1277, 3175, 2165, 222, 216, 1297, 3260, 2226, 222, 220, 1338, 3331, 2264, 333, 229, 1360, 3399, 2323, 333, 234, 1391, 3473, 2476, 111, 245, 1484, 3706, NULL, 333, 153, 905, NULL, NULL, 333, 159, 940, NULL, NULL, 333, 168, 1000, NULL, NULL, 444, 104, NULL, NULL, NULL, 444, 115, NULL, NULL, NULL, 444, 149, 880, NULL, NULL, 444, 179, 1057, NULL, NULL, 444, 201, NULL, NULL, NULL, 444, 239, NULL, NULL, NULL, 444, 243, 1455, NULL, NULL, 444, NULL, NULL, NULL, NULL, 444, NULL, NULL, NULL
```

```sql
SELECT a+b*2+c*3+d*4+e*5, e, CASE a+1 WHEN b THEN 111 WHEN c THEN 222 WHEN d THEN 333 WHEN e THEN 444 ELSE 555 END, a-b, d-e FROM t1

The hash of 150 returned values was different than expected. Check the sorting: 1612, 109, 333, 2, -1, 1902, 126, 333, -2, 2, 1985, 132, 444, 1, 1, 2046, 135, 111, -1, 1, 2131, 144, 111, -1, -4, 2432, 162, 333, 3, 2, 2579, 173, 555, 4, -2, 2728, 180, 333, 1, 3, 2806, 189, 444, 2, -4, 2878, 192, 444, -3, -2, 2949, 197, 555, 1, -1, 3175, 210, 222, 2, 2, 3260, 219, 333, -2, -2, 3331, 221, 444, -3, 1, 3399, 227, 555, 1, -1, 3473, 230, 555, 2, 3, 3706, 246, 444, -4, 2, NULL, 110, 555, NULL, 4, NULL, 117, 333, NULL, -1, NULL, 146, 555, 4, NULL, NULL, 157, 555, 1, NULL, NULL, 165, 555, 1, NULL, NULL, 177, 555, 4, NULL, NULL, 204, 222, NULL, -1, NULL, 237, 555, 3, 1, NULL, NULL, 222, 3, NULL, NULL, NULL, 333, -3, NULL, NULL, NULL, 555, 2, NULL, NULL, NULL, 555, NULL, NULL, NULL, NULL, 555, NULL, NULL
```

```sql
SELECT b, (a+b+c+d+e)/5, a+b*2+c*3+d*4+e*5, a+b*2+c*3+d*4, abs(b-c) FROM t1 WHERE b>c

The hash of 65 returned values was different than expected. Check the sorting: 124, NULL, NULL, 1226, 1, 129, 127, 1902, 1272, 4, 139, 137, 2046, 1371, 2, 143, 142, 2131, 1411, 2, 151, NULL, NULL, NULL, 1, 158, NULL, NULL, NULL, 3, 167, NULL, NULL, NULL, 1, 194, 192, 2878, 1918, 1, 198, 197, 2949, 1964, 3, 218, 217, 3260, 2165, 3, 228, 227, 3399, 2264, 3, 232, 232, 3473, 2323, 1, 249, 247, 3706, 2476, 2
```

```sql
SELECT (a+b+c+d+e)/5, b-c, a+b*2+c*3+d*4+e*5, a, CASE WHEN c>(SELECT avg(c) FROM t1) THEN a*2 ELSE b*10 END, a-b FROM t1

The hash of 180 returned values was different than expected. Check the sorting: 107, -1, 1612, 107, 1050, 2, 127, 4, 1902, 127, 1290, -2, 132, -4, 1985, 131, 1300, 1, 137, 2, 2046, 138, 1390, -1, 142, 2, 2131, 142, 1430, -1, 162, -1, 2432, 163, 1600, 3, 172, -2, 2579, 174, 1700, 4, 182, -3, 2728, 182, 364, 1, 187, -1, 2806, 188, 376, 2, 192, 1, 2878, 191, 382, -3, 197, 3, 2949, 199, 398, 1, 212, -3, 3175, 213, 426, 2, 217, 3, 3260, 216, 432, -2, 222, -1, 3331, 220, 440, -3, 227, 3, 3399, 229, 458, 1, 232, 1, 3473, 234, 468, 2, 247, 2, 3706, 245, 490, -4, NULL, -1, NULL, 179, 358, 4, NULL, -1, NULL, NULL, 1120, NULL, NULL, -2, NULL, 149, 1450, 4, NULL, -2, NULL, NULL, NULL, NULL, NULL, -4, NULL, 243, 486, 3, NULL, 1, NULL, 121, 1240, -3, NULL, 1, NULL, 153, 1510, 2, NULL, 1, NULL, 168, 1670, 1, NULL, 3, NULL, 159, 1580, 1, NULL, NULL, NULL, 104, NULL, NULL, NULL, NULL, NULL, 115, NULL, NULL, NULL, NULL, NULL, 201, 402, NULL, NULL, NULL, NULL, 239, 2360, 3
```

```sql
SELECT c, abs(b-c), a+b*2+c*3+d*4, CASE WHEN a<b-3 THEN 111 WHEN a<=b THEN 222 WHEN a<b+3 THEN 333 ELSE 444 END, a-b, d-e, a+b*2 FROM t1 WHERE c BETWEEN b-2 AND d+2 OR (e>c OR e<d)

The hash of 161 returned values was different than expected. Check the sorting: 106, 1, 1067, 333, 2, -1, 317, 113, 1, NULL, 444, NULL, 4, NULL, 123, 1, 1226, 222, -3, NULL, 369, 125, 4, 1272, 222, -2, 2, 385, 134, 4, 1325, 333, 1, 1, 391, 137, 2, 1371, 222, -1, 1, 416, 141, 2, 1411, 222, -1, -4, 428, 155, 3, NULL, 333, 1, NULL, 475, 161, 1, 1622, 444, 3, 2, 483, 172, 2, 1714, 444, 4, -2, 514, 176, 1, NULL, 444, 4, NULL, 529, 184, 3, 1828, 333, 1, 3, 544, 187, 1, 1861, 333, 2, -4, 560, 195, 3, 1964, 333, 1, -1, 595, 202, NULL, NULL, 444, NULL, -1, NULL, 208, 2, NULL, 444, NULL, NULL, NULL, 214, 3, 2125, 333, 2, 2, 635, 215, 3, 2165, 222, -2, -2, 652, 224, 1, 2226, 222, -3, 1, 666, 225, 3, 2264, 333, 1, -1, 685, 231, 1, 2323, 333, 2, 3, 698, 247, 2, 2476, 111, -4, 2, 743, NULL, NULL, NULL, 444, 3, 1, 711
```

```sql
SELECT a+b*2+c*3, e, a+b*2, b-c FROM t1

The hash of 120 returned values was different than expected. Check the sorting: 1000, 165, 502, 1, 1030, 173, 514, -2, 1057, 177, 529, -1, 1096, 180, 544, -3, 1121, 189, 560, -1, 1158, 192, 579, 1, 1180, 197, 595, 3, 1277, 210, 635, -3, 1297, 219, 652, 3, 1338, 221, 666, -1, 1360, 227, 685, 3, 1391, 230, 698, 1, 1455, NULL, 723, -4, 1484, 246, 743, 2, 635, 109, 317, -1, 738, NULL, 369, 1, 760, 126, 385, 4, 793, 132, 391, -4, 827, 135, 416, 2, 851, 144, 428, 2, 880, 146, 439, -2, 905, NULL, 455, 1, 940, 157, 475, 3, 966, 162, 483, -1, NULL, 110, NULL, -1, NULL, 117, NULL, NULL, NULL, 204, NULL, NULL, NULL, 237, 711, NULL, NULL, NULL, NULL, -2, NULL, NULL, NULL, NULL
```

```sql
SELECT CASE WHEN a<b-3 THEN 111 WHEN a<=b THEN 222 WHEN a<b+3 THEN 333 ELSE 444 END, abs(a), d, a+b*2+c*3+d*4, (a+b+c+d+e)/5, e, a-b FROM t1

The hash of 210 returned values was different than expected. Check the sorting: 111, 245, 248, 2476, 247, 246, -4, 222, 121, 122, 1226, NULL, NULL, -3, 222, 127, 128, 1272, 127, 126, -2, 222, 138, 136, 1371, 137, 135, -1, 222, 142, 140, 1411, 142, 144, -1, 222, 191, 190, 1918, 192, 192, -3, 222, 216, 217, 2165, 217, 219, -2, 222, 220, 222, 2226, 222, 221, -3, 333, 107, 108, 1067, 107, 109, 2, 333, 131, 133, 1325, 132, 132, 1, 333, 153, NULL, NULL, NULL, NULL, 2, 333, 159, NULL, NULL, NULL, 157, 1, 333, 168, NULL, NULL, NULL, 165, 1, 333, 182, 183, 1828, 182, 180, 1, 333, 188, 185, 1861, 187, 189, 2, 333, 199, 196, 1964, 197, 197, 1, 333, 213, 212, 2125, 212, 210, 2, 333, 229, 226, 2264, 227, 227, 1, 333, 234, 233, 2323, 232, 230, 2, 444, 104, 101, NULL, NULL, NULL, NULL, 444, 115, 116, NULL, NULL, 117, NULL, 444, 149, NULL, NULL, NULL, 146, 4, 444, 163, 164, 1622, 162, 162, 3, 444, 174, 171, 1714, 172, 173, 4, 444, 179, NULL, NULL, NULL, 177, 4, 444, 201, 203, NULL, NULL, 204, NULL, 444, 239, 238, NULL, NULL, 237, 3, 444, 243, NULL, NULL, NULL, NULL, 3, 444, NULL, 114, NULL, NULL, 110, NULL, 444, NULL, 207, NULL, NULL, NULL, NULL
```

```sql
SELECT a+b*2+c*3+d*4+e*5, a, abs(b-c), c, b, CASE a+1 WHEN b THEN 111 WHEN c THEN 222 WHEN d THEN 333 WHEN e THEN 444 ELSE 555 END, (a+b+c+d+e)/5 FROM t1

The hash of 210 returned values was different than expected. Check the sorting: 1612, 107, 1, 106, 105, 333, 107, 1902, 127, 4, 125, 129, 333, 127, 1985, 131, 4, 134, 130, 444, 132, 2046, 138, 2, 137, 139, 111, 137, 2131, 142, 2, 141, 143, 111, 142, 2432, 163, 1, 161, 160, 333, 162, 2579, 174, 2, 172, 170, 555, 172, 2728, 182, 3, 184, 181, 333, 182, 2806, 188, 1, 187, 186, 444, 187, 2878, 191, 1, 193, 194, 444, 192, 2949, 199, 3, 195, 198, 555, 197, 3175, 213, 3, 214, 211, 222, 212, 3260, 216, 3, 215, 218, 333, 217, 3331, 220, 1, 224, 223, 444, 222, 3399, 229, 3, 225, 228, 555, 227, 3473, 234, 1, 231, 232, 555, 232, 3706, 245, 2, 247, 249, 444, 247, NULL, 104, NULL, 102, NULL, 555, NULL, NULL, 115, NULL, 119, NULL, 333, NULL, NULL, 121, 1, 123, 124, 333, NULL, NULL, 149, 2, 147, 145, 555, NULL, NULL, 153, 1, 150, 151, 555, NULL, NULL, 159, 3, 155, 158, 555, NULL, NULL, 168, 1, 166, 167, 555, NULL, NULL, 179, 1, 176, 175, 555, NULL, NULL, 201, NULL, 202, NULL, 222, NULL, NULL, 239, NULL, NULL, 236, 555, NULL, NULL, 243, 4, 244, 240, 222, NULL, NULL, NULL, 1, 113, 112, 555, NULL, NULL, NULL, 2, 208, 206, 555, NULL
```

```sql
SELECT (a+b+c+d+e)/5, a+b*2+c*3+d*4+e*5, c-d, CASE WHEN a<b-3 THEN 111 WHEN a<=b THEN 222 WHEN a<b+3 THEN 333 ELSE 444 END, a+b*2+c*3, d, a-b FROM t1

The hash of 210 returned values was different than expected. Check the sorting: 107, 1612, -2, 333, 635, 108, 2, 127, 1902, -3, 222, 760, 128, -2, 132, 1985, 1, 333, 793, 133, 1, 137, 2046, 1, 222, 827, 136, -1, 142, 2131, 1, 222, 851, 140, -1, 162, 2432, -3, 444, 966, 164, 3, 172, 2579, 1, 444, 1030, 171, 4, 182, 2728, 1, 333, 1096, 183, 1, 187, 2806, 2, 333, 1121, 185, 2, 192, 2878, 3, 222, 1158, 190, -3, 197, 2949, -1, 333, 1180, 196, 1, 212, 3175, 2, 333, 1277, 212, 2, 217, 3260, -2, 222, 1297, 217, -2, 222, 3331, 2, 222, 1338, 222, -3, 227, 3399, -1, 333, 1360, 226, 1, 232, 3473, -2, 333, 1391, 233, 2, 247, 3706, -1, 111, 1484, 248, -4, NULL, NULL, -1, 444, NULL, 114, NULL, NULL, NULL, -1, 444, NULL, 203, NULL, NULL, NULL, 1, 222, 738, 122, -3, NULL, NULL, 1, 444, NULL, 101, NULL, NULL, NULL, 1, 444, NULL, 207, NULL, NULL, NULL, 3, 444, NULL, 116, NULL, NULL, NULL, NULL, 333, 1000, NULL, 1, NULL, NULL, NULL, 333, 905, NULL, 2, NULL, NULL, NULL, 333, 940, NULL, 1, NULL, NULL, NULL, 444, 1057, NULL, 4, NULL, NULL, NULL, 444, 1455, NULL, 3, NULL, NULL, NULL, 444, 880, NULL, 4, NULL, NULL, NULL, 444, NULL, 238, 3
```

```sql
SELECT d, (a+b+c+d+e)/5, d-e, b-c, b, a+b*2+c*3+d*4+e*5, a+b*2 FROM t1 WHERE EXISTS(SELECT 1 FROM t1 AS x WHERE x.b<t1.b) OR c>d

The hash of 196 returned values was different than expected. Check the sorting: 101, NULL, NULL, NULL, NULL, NULL, NULL, 114, NULL, 4, -1, 112, NULL, NULL, 116, NULL, -1, NULL, NULL, NULL, NULL, 122, NULL, NULL, 1, 124, NULL, 369, 128, 127, 2, 4, 129, 1902, 385, 133, 132, 1, -4, 130, 1985, 391, 136, 137, 1, 2, 139, 2046, 416, 140, 142, -4, 2, 143, 2131, 428, 164, 162, 2, -1, 160, 2432, 483, 171, 172, -2, -2, 170, 2579, 514, 183, 182, 3, -3, 181, 2728, 544, 185, 187, -4, -1, 186, 2806, 560, 190, 192, -2, 1, 194, 2878, 579, 196, 197, -1, 3, 198, 2949, 595, 207, NULL, NULL, -2, 206, NULL, NULL, 212, 212, 2, -3, 211, 3175, 635, 217, 217, -2, 3, 218, 3260, 652, 222, 222, 1, -1, 223, 3331, 666, 226, 227, -1, 3, 228, 3399, 685, 233, 232, 3, 1, 232, 3473, 698, 238, NULL, 1, NULL, 236, NULL, 711, 248, 247, 2, 2, 249, 3706, 743, NULL, NULL, NULL, -1, 175, NULL, 529, NULL, NULL, NULL, -2, 145, NULL, 439, NULL, NULL, NULL, -4, 240, NULL, 723, NULL, NULL, NULL, 1, 151, NULL, 455, NULL, NULL, NULL, 1, 167, NULL, 502, NULL, NULL, NULL, 3, 158, NULL, 475
```

```sql
SELECT a+b*2+c*3+d*4, c-d, a+b*2+c*3, d, d-e, (SELECT count(*) FROM t1 AS x WHERE x.b<t1.b), abs(b-c) FROM t1

The hash of 210 returned values was different than expected. Check the sorting: 1067, -2, 635, 108, -1, 0, 1, 1226, 1, 738, 122, NULL, 2, 1, 1272, -3, 760, 128, 2, 3, 4, 1325, 1, 793, 133, 1, 4, 4, 1371, 1, 827, 136, 1, 5, 2, 1411, 1, 851, 140, -4, 6, 2, 1622, -3, 966, 164, 2, 10, 1, 1714, 1, 1030, 171, -2, 12, 2, 1828, 1, 1096, 183, 3, 14, 3, 1861, 2, 1121, 185, -4, 15, 1, 1918, 3, 1158, 190, -2, 16, 1, 1964, -1, 1180, 196, -1, 17, 3, 2125, 2, 1277, 212, 2, 19, 3, 2165, -2, 1297, 217, -2, 20, 3, 2226, 2, 1338, 222, 1, 21, 1, 2264, -1, 1360, 226, -1, 22, 3, 2323, -2, 1391, 233, 3, 23, 1, 2476, -1, 1484, 248, 2, 26, 2, NULL, -1, NULL, 114, 4, 1, 1, NULL, -1, NULL, 203, -1, 0, NULL, NULL, 1, NULL, 101, NULL, 0, NULL, NULL, 1, NULL, 207, NULL, 18, 2, NULL, 3, NULL, 116, -1, 0, NULL, NULL, NULL, 1000, NULL, NULL, 11, 1, NULL, NULL, 1057, NULL, NULL, 13, 1, NULL, NULL, 1455, NULL, NULL, 25, 4, NULL, NULL, 880, NULL, NULL, 7, 2, NULL, NULL, 905, NULL, NULL, 8, 1, NULL, NULL, 940, NULL, NULL, 9, 3, NULL, NULL, NULL, 238, 1, 24, NULL
```

```sql
SELECT b, a-b, a+b*2 FROM t1 WHERE (a>b-2 AND a<b+2) OR EXISTS(SELECT 1 FROM t1 AS x WHERE x.b<t1.b)

The hash of 78 returned values was different than expected. Check the sorting: 112, NULL, NULL, 124, -3, 369, 129, -2, 385, 130, 1, 391, 139, -1, 416, 143, -1, 428, 145, 4, 439, 151, 2, 455, 158, 1, 475, 160, 3, 483, 167, 1, 502, 170, 4, 514, 175, 4, 529, 181, 1, 544, 186, 2, 560, 194, -3, 579, 198, 1, 595, 206, NULL, NULL, 211, 2, 635, 218, -2, 652, 223, -3, 666, 228, 1, 685, 232, 2, 698, 236, 3, 711, 240, 3, 723, 249, -4, 743
```

```sql
SELECT e FROM t1 WHERE b>c AND d NOT BETWEEN 110 AND 150 AND a>b

Expected: ["197","227","230"] but got ["157","165","197","227","230","NULL"]
```

```sql
SELECT a+b*2+c*3+d*4, e, c-d FROM t1

The hash of 90 returned values was different than expected. Check the sorting: 1067, 109, -2, 1226, NULL, 1, 1272, 126, -3, 1325, 132, 1, 1371, 135, 1, 1411, 144, 1, 1622, 162, -3, 1714, 173, 1, 1828, 180, 1, 1861, 189, 2, 1918, 192, 3, 1964, 197, -1, 2125, 210, 2, 2165, 219, -2, 2226, 221, 2, 2264, 227, -1, 2323, 230, -2, 2476, 246, -1, NULL, 110, -1, NULL, 117, 3, NULL, 146, NULL, NULL, 157, NULL, NULL, 165, NULL, NULL, 177, NULL, NULL, 204, -1, NULL, 237, NULL, NULL, NULL, 1, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT a, a+b*2+c*3, a+b*2+c*3+d*4, a+b*2+c*3+d*4+e*5, a-b, (a+b+c+d+e)/5 FROM t1

The hash of 180 returned values was different than expected. Check the sorting: 104, NULL, NULL, NULL, NULL, NULL, 107, 635, 1067, 1612, 2, 107, 115, NULL, NULL, NULL, NULL, NULL, 121, 738, 1226, NULL, -3, NULL, 127, 760, 1272, 1902, -2, 127, 131, 793, 1325, 1985, 1, 132, 138, 827, 1371, 2046, -1, 137, 142, 851, 1411, 2131, -1, 142, 149, 880, NULL, NULL, 4, NULL, 153, 905, NULL, NULL, 2, NULL, 159, 940, NULL, NULL, 1, NULL, 163, 966, 1622, 2432, 3, 162, 168, 1000, NULL, NULL, 1, NULL, 174, 1030, 1714, 2579, 4, 172, 179, 1057, NULL, NULL, 4, NULL, 182, 1096, 1828, 2728, 1, 182, 188, 1121, 1861, 2806, 2, 187, 191, 1158, 1918, 2878, -3, 192, 199, 1180, 1964, 2949, 1, 197, 201, NULL, NULL, NULL, NULL, NULL, 213, 1277, 2125, 3175, 2, 212, 216, 1297, 2165, 3260, -2, 217, 220, 1338, 2226, 3331, -3, 222, 229, 1360, 2264, 3399, 1, 227, 234, 1391, 2323, 3473, 2, 232, 239, NULL, NULL, NULL, 3, NULL, 243, 1455, NULL, NULL, 3, NULL, 245, 1484, 2476, 3706, -4, 247, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL
```

```sql
SELECT c FROM t1 WHERE (a>b-2 AND a<b+2) AND d NOT BETWEEN 110 AND 150

Expected: ["184","195","225"] but got ["155","166","184","195","225"]
```

```sql
SELECT c, d, a+b*2+c*3+d*4+e*5, d-e, b-c, a+b*2 FROM t1

The hash of 180 returned values was different than expected. Check the sorting: 102, 101, NULL, NULL, NULL, NULL, 106, 108, 1612, -1, -1, 317, 113, 114, NULL, 4, -1, NULL, 119, 116, NULL, -1, NULL, NULL, 123, 122, NULL, NULL, 1, 369, 125, 128, 1902, 2, 4, 385, 134, 133, 1985, 1, -4, 391, 137, 136, 2046, 1, 2, 416, 141, 140, 2131, -4, 2, 428, 147, NULL, NULL, NULL, -2, 439, 150, NULL, NULL, NULL, 1, 455, 155, NULL, NULL, NULL, 3, 475, 161, 164, 2432, 2, -1, 483, 166, NULL, NULL, NULL, 1, 502, 172, 171, 2579, -2, -2, 514, 176, NULL, NULL, NULL, -1, 529, 184, 183, 2728, 3, -3, 544, 187, 185, 2806, -4, -1, 560, 193, 190, 2878, -2, 1, 579, 195, 196, 2949, -1, 3, 595, 202, 203, NULL, -1, NULL, NULL, 208, 207, NULL, NULL, -2, NULL, 214, 212, 3175, 2, -3, 635, 215, 217, 3260, -2, 3, 652, 224, 222, 3331, 1, -1, 666, 225, 226, 3399, -1, 3, 685, 231, 233, 3473, 3, 1, 698, 244, NULL, NULL, NULL, -4, 723, 247, 248, 3706, 2, 2, 743, NULL, 238, NULL, 1, NULL, 711
```

```sql
SELECT (a+b+c+d+e)/5, (SELECT count(*) FROM t1 AS x WHERE x.c>t1.c AND x.d<t1.d), a+b*2+c*3+d*4, abs(b-c), a+b*2+c*3+d*4+e*5, (SELECT count(*) FROM t1 AS x WHERE x.b<t1.b) FROM t1

The hash of 180 returned values was different than expected. Check the sorting: 107, 0, 1067, 1, 1612, 0, 127, 0, 1272, 4, 1902, 3, 132, 0, 1325, 4, 1985, 4, 137, 0, 1371, 2, 2046, 5, 142, 0, 1411, 2, 2131, 6, 162, 0, 1622, 1, 2432, 10, 172, 0, 1714, 2, 2579, 12, 182, 0, 1828, 3, 2728, 14, 187, 0, 1861, 1, 2806, 15, 192, 0, 1918, 1, 2878, 16, 197, 0, 1964, 3, 2949, 17, 212, 0, 2125, 3, 3175, 19, 217, 0, 2165, 3, 3260, 20, 222, 0, 2226, 1, 3331, 21, 227, 0, 2264, 3, 3399, 22, 232, 0, 2323, 1, 3473, 23, 247, 0, 2476, 2, 3706, 26, NULL, 0, 1226, 1, NULL, 2, NULL, 0, NULL, 1, NULL, 1, NULL, 0, NULL, 1, NULL, 11, NULL, 0, NULL, 1, NULL, 13, NULL, 0, NULL, 1, NULL, 8, NULL, 0, NULL, 2, NULL, 18, NULL, 0, NULL, 2, NULL, 7, NULL, 0, NULL, 3, NULL, 9, NULL, 0, NULL, 4, NULL, 25, NULL, 0, NULL, NULL, NULL, 0, NULL, 0, NULL, NULL, NULL, 0, NULL, 0, NULL, NULL, NULL, 0, NULL, 0, NULL, NULL, NULL, 24
```

#### ☓ Ran 3351 tests as mysql

* 2940 failed
* 12% was OK

Time: 16159ms

---- ---- ---- ---- ---- ---- ----
### 124/125 `test/select4.test`

_Mimic mysql_
```sql
SELECT * FROM t1

The hash of 768 returned values was different than expected. Check the sorting: 109, 295, 136, 678, 312, table tn1 row 29, 145, 579, 230, 818, 328, table tn1 row 58, 147, 253, 523, 432, 161, table tn1 row 25, 161, 754, 15, 947, 671, table tn1 row 56, 170, 914, 683, 863, 11, table tn1 row 117, 173, 523, 675, 86, 872, table tn1 row 15, 179, 226, 246, 154, 148, table tn1 row 110, 189, 91, 683, 96, 363, table tn1 row 87, 194, 766, 39, 951, 568, table tn1 row 109, 195, 384, 788, 161, 717, table tn1 row 81, 20, 696, 639, 717, 117, table tn1 row 62, 213, 619, 680, 837, 645, table tn1 row 75, 215, 269, 252, 716, 615, table tn1 row 90, 222, 440, 955, 602, 87, table tn1 row 93, 231, 468, 97, 414, 795, table tn1 row 2, 231, 850, 200, 234, 55, table tn1 row 96, 23, 426, 441, 88, 696, table tn1 row 91, 237, 432, 368, 298, 468, table tn1 row 123, 241, 729, 168, 574, 313, table tn1 row 99, 249, 259, 979, 661, 688, table tn1 row 73, 267, 283, 716, 666, 367, table tn1 row 112, 268, 563, 387, 571, 733, table tn1 row 48, 268, 594, 419, 265, 815, table tn1 row 39, 276, 862, 207, 936, 110, table tn1 row 89, 280, 32, 366, 793, 436, table tn1 row 124, 281, 420, 758, 900, 811, table tn1 row 86, 283, 981, 172, 899, 299, table tn1 row 26, 294, 766, 296, 807, 731, table tn1 row 100, 299, 307, 5, 691, 717, table tn1 row 94, 314, 572, 12, 335, 122, table tn1 row 85, 324, 447, 703, 232, 943, table tn1 row 72, 32, 486, 570, 394, 522, table tn1 row 14, 330, 556, 623, 828, 904, table tn1 row 24, 330, 88, 402, 761, 90, table tn1 row 104, 337, 462, 3, 407, 72, table tn1 row 38, 338, 115, 531, 427, 539, table tn1 row 61, 352, 523, 458, 87, 816, table tn1 row 21, 358, 278, 343, 655, 766, table tn1 row 47, 363, 280, 805, 141, 737, table tn1 row 28, 371, 49, 871, 275, 146, table tn1 row 46, 380, 255, 36, 990, 667, table tn1 row 32, 382, 270, 882, 619, 963, table tn1 row 18, 382, 414, 67, 992, 483, table tn1 row 1, 395, 674, 915, 277, 442, table tn1 row 97, 406, 266, 787, 955, 695, table tn1 row 49, 433, 807, 230, 803, 683, table tn1 row 84, 438, 726, 208, 748, 166, table tn1 row 11, 445, 995, 765, 508, 209, table tn1 row 121, 451, 525, 690, 346, 880, table tn1 row 36, 460, 633, 390, 679, 523, table tn1 row 42, 461, 652, 864, 750, 430, table tn1 row 54, 4, 738, 685, 618, 956, table tn1 row 67, 477, 896, 481, 75, 221, table tn1 row 77, 479, 43, 902, 294, 685, table tn1 row 5, 492, 26, 534, 712, 855, table tn1 row 41, 498, 944, 393, 17, 997, table tn1 row 68, 499, 60, 284, 913, 78, table tn1 row 107, 505, 736, 636, 550, 949, table tn1 row 111, 513, 211, 736, 885, 284, table tn1 row 102, 517, 670, 204, 654, 463, table tn1 row 45, 521, 281, 375, 221, 628, table tn1 row 118, 52, 132, 315, 25, 210, table tn1 row 20, 524, 345, 48, 186, 484, table tn1 row 98, 525, 422, 670, 315, 288, table tn1 row 80, 536, 956, 417, 418, 381, table tn1 row 4, 538, 213, 289, 806, 48, table tn1 row 114, 544, 233, 617, 55, 12, table tn1 row 52, 551, 662, 976, 381, 558, table tn1 row 65, 552, 310, 629, 254, 931, table tn1 row 127, 553, 762, 498, 467, 616, table tn1 row 13, 579, 781, 299, 626, 300, table tn1 row 119, 584, 828, 788, 726, 763, table tn1 row 71, 591, 94, 259, 349, 402, table tn1 row 53, 604, 788, 681, 121, 443, table tn1 row 43, 607, 711, 870, 223, 14, table tn1 row 9, 609, 55, 846, 459, 693, table tn1 row 82, 61, 362, 776, 0, 95, table tn1 row 92, 622, 853, 762, 172, 113, table tn1 row 12, 629, 584, 253, 504, 695, table tn1 row 19, 637, 282, 805, 874, 158, table tn1 row 66, 637, 404, 548, 376, 125, table tn1 row 63, 640, 779, 852, 481, 896, table tn1 row 126, 643, 435, 654, 586, 546, table tn1 row 31, 668, 303, 388, 412, 51, table tn1 row 44, 674, 346, 774, 297, 89, table tn1 row 27, 678, 620, 62, 18, 747, table tn1 row 79, 702, 645, 966, 820, 497, table tn1 row 16, 707, 113, 880, 130, 117, table tn1 row 116, 732, 42, 905, 175, 625, table tn1 row 33, 736, 350, 175, 701, 897, table tn1 row 122, 738, 569, 885, 105, 89, table tn1 row 51, 742, 836, 506, 770, 152, table tn1 row 101, 746, 942, 57, 38, 298, table tn1 row 76, 75, 387, 530, 529, 228, table tn1 row 10, 754, 808, 865, 972, 313, table tn1 row 7, 767, 447, 246, 798, 546, table tn1 row 70, 76, 802, 420, 35, 504, table tn1 row 125, 776, 149, 898, 217, 181, table tn1 row 74, 779, 446, 814, 323, 732, table tn1 row 23, 785, 894, 620, 585, 748, table tn1 row 106, 810, 355, 805, 274, 858, table tn1 row 3, 820, 242, 309, 492, 355, table tn1 row 6, 821, 227, 465, 212, 247, table tn1 row 88, 825, 247, 486, 565, 582, table tn1 row 120, 829, 589, 980, 163, 139, table tn1 row 103, 847, 572, 637, 4, 534, table tn1 row 113, 853, 993, 775, 213, 779, table tn1 row 30, 862, 682, 272, 949, 772, table tn1 row 35, 864, 75, 771, 47, 255, table tn1 row 40, 866, 48, 608, 922, 531, table tn1 row 50, 868, 570, 772, 939, 210, table tn1 row 95, 879, 37, 553, 519, 254, table tn1 row 69, 880, 593, 626, 900, 171, table tn1 row 57, 88, 179, 4, 799, 558, table tn1 row 105, 895, 803, 607, 643, 838, table tn1 row 60, 898, 556, 482, 319, 813, table tn1 row 78, 918, 681, 152, 416, 268, table tn1 row 37, 931, 961, 876, 973, 56, table tn1 row 83, 936, 857, 379, 942, 52, table tn1 row 22, 950, 822, 526, 310, 646, table tn1 row 8, 953, 254, 765, 902, 96, table tn1 row 55, 963, 879, 69, 457, 558, table tn1 row 59, 967, 128, 585, 581, 921, table tn1 row 17, 972, 5, 537, 662, 222, table tn1 row 108, 981, 440, 416, 187, 135, table tn1 row 64, 988, 639, 88, 130, 962, table tn1 row 34, 992, 1, 346, 215, 763, table tn1 row 115, 996, 297, 177, 577, 602, table tn1 row 128
```

```sql
SELECT * FROM t2

The hash of 678 returned values was different than expected. Check the sorting: 10, 278, 193, 317, 282, table tn2 row 55, 123, 592, 854, 598, 499, table tn2 row 51, 123, 706, 793, 2, 56, table tn2 row 79, 131, 21, 141, 953, 841, table tn2 row 109, 135, 170, 160, 555, 441, table tn2 row 93, 139, 799, 575, 263, 322, table tn2 row 48, 159, 414, 967, 19, 118, table tn2 row 32, 175, 897, 202, 516, 433, table tn2 row 28, 185, 220, 421, 753, 936, table tn2 row 89, 186, 173, 24, 345, 37, table tn2 row 69, 189, 181, 788, 847, 955, table tn2 row 105, 1, 968, 61, 10, 696, table tn2 row 43, 209, 599, 466, 80, 925, table tn2 row 94, 217, 217, 807, 897, 512, table tn2 row 75, 222, 380, 4, 235, 997, table tn2 row 67, 223, 211, 964, 844, 138, table tn2 row 97, 2, 326, 283, 23, 366, table tn2 row 58, 235, 632, 360, 284, 671, table tn2 row 85, 245, 329, 247, 860, 73, table tn2 row 34, 253, 676, 560, 233, 938, table tn2 row 49, 254, 754, 823, 334, 604, table tn2 row 26, 262, 628, 45, 643, 655, table tn2 row 113, 262, 823, 722, 843, 213, table tn2 row 71, 266, 148, 729, 137, 572, table tn2 row 98, 268, 292, 275, 704, 820, table tn2 row 66, 279, 846, 779, 351, 223, table tn2 row 19, 283, 784, 900, 790, 707, table tn2 row 62, 297, 226, 582, 404, 815, table tn2 row 59, 304, 765, 290, 537, 638, table tn2 row 84, 308, 60, 557, 416, 115, table tn2 row 2, 315, 532, 992, 265, 564, table tn2 row 31, 324, 585, 344, 260, 228, table tn2 row 42, 327, 442, 177, 79, 428, table tn2 row 103, 336, 509, 202, 813, 692, table tn2 row 104, 35, 729, 197, 292, 769, table tn2 row 1, 371, 635, 22, 669, 428, table tn2 row 41, 374, 376, 728, 14, 381, table tn2 row 6, 382, 313, 869, 454, 217, table tn2 row 112, 415, 546, 819, 332, 148, table tn2 row 72, 442, 367, 793, 892, 40, table tn2 row 92, 445, 279, 511, 404, 721, table tn2 row 33, 455, 681, 107, 225, 556, table tn2 row 14, 457, 932, 346, 663, 560, table tn2 row 111, 471, 805, 161, 513, 812, table tn2 row 4, 495, 297, 374, 476, 131, table tn2 row 86, 505, 888, 509, 546, 981, table tn2 row 70, 508, 170, 444, 723, 965, table tn2 row 25, 522, 640, 988, 577, 679, table tn2 row 3, 538, 714, 251, 749, 673, table tn2 row 9, 543, 8, 179, 367, 535, table tn2 row 96, 544, 113, 688, 351, 983, table tn2 row 22, 545, 35, 268, 621, 579, table tn2 row 30, 56, 285, 282, 195, 339, table tn2 row 88, 564, 139, 925, 152, 554, table tn2 row 101, 574, 776, 148, 931, 621, table tn2 row 37, 588, 90, 137, 723, 923, table tn2 row 40, 590, 270, 123, 389, 647, table tn2 row 24, 594, 592, 228, 651, 242, table tn2 row 90, 637, 519, 65, 373, 205, table tn2 row 20, 64, 859, 758, 126, 524, table tn2 row 81, 651, 725, 272, 365, 654, table tn2 row 27, 652, 414, 551, 60, 151, table tn2 row 29, 660, 353, 728, 215, 162, table tn2 row 60, 664, 72, 966, 256, 123, table tn2 row 76, 669, 796, 292, 790, 445, table tn2 row 47, 680, 674, 127, 914, 463, table tn2 row 16, 691, 543, 83, 854, 505, table tn2 row 65, 691, 643, 837, 351, 140, table tn2 row 83, 709, 605, 878, 448, 781, table tn2 row 18, 718, 357, 657, 241, 510, table tn2 row 35, 725, 857, 103, 838, 564, table tn2 row 7, 733, 549, 711, 803, 939, table tn2 row 68, 735, 161, 140, 873, 659, table tn2 row 64, 751, 317, 692, 398, 307, table tn2 row 52, 751, 489, 746, 328, 117, table tn2 row 5, 760, 820, 360, 86, 953, table tn2 row 56, 76, 351, 887, 46, 699, table tn2 row 107, 769, 168, 150, 806, 777, table tn2 row 44, 773, 275, 806, 977, 852, table tn2 row 46, 775, 545, 46, 750, 899, table tn2 row 54, 779, 938, 449, 836, 427, table tn2 row 45, 785, 90, 141, 886, 788, table tn2 row 17, 789, 228, 981, 498, 220, table tn2 row 106, 796, 819, 220, 306, 411, table tn2 row 23, 802, 812, 27, 541, 434, table tn2 row 50, 805, 818, 87, 315, 783, table tn2 row 57, 80, 820, 756, 8, 706, table tn2 row 15, 809, 811, 333, 833, 548, table tn2 row 13, 814, 145, 907, 414, 808, table tn2 row 95, 817, 276, 496, 177, 753, table tn2 row 80, 851, 755, 244, 887, 940, table tn2 row 110, 853, 864, 182, 654, 548, table tn2 row 74, 863, 311, 810, 743, 428, table tn2 row 10, 869, 966, 902, 377, 114, table tn2 row 53, 874, 504, 337, 158, 125, table tn2 row 61, 891, 634, 653, 813, 945, table tn2 row 99, 898, 501, 411, 216, 963, table tn2 row 73, 901, 264, 312, 405, 463, table tn2 row 82, 910, 418, 830, 547, 671, table tn2 row 21, 916, 585, 274, 86, 521, table tn2 row 11, 91, 73, 894, 682, 147, table tn2 row 36, 922, 554, 318, 772, 302, table tn2 row 102, 927, 38, 136, 760, 483, table tn2 row 108, 93, 177, 933, 209, 682, table tn2 row 39, 936, 985, 512, 838, 629, table tn2 row 78, 944, 93, 725, 488, 688, table tn2 row 63, 9, 501, 372, 153, 16, table tn2 row 38, 954, 527, 450, 249, 386, table tn2 row 77, 966, 649, 233, 525, 294, table tn2 row 87, 980, 433, 773, 310, 547, table tn2 row 91, 98, 779, 996, 539, 698, table tn2 row 8, 987, 818, 676, 362, 720, table tn2 row 100, 993, 903, 625, 198, 812, table tn2 row 12
```

```sql
SELECT * FROM t3

The hash of 774 returned values was different than expected. Check the sorting: 101, 983, 954, 809, 211, table tn3 row 71, 105, 122, 641, 133, 365, table tn3 row 45, 12, 203, 10, 720, 393, table tn3 row 58, 129, 340, 317, 74, 794, table tn3 row 61, 135, 437, 368, 118, 218, table tn3 row 64, 143, 145, 656, 826, 977, table tn3 row 60, 145, 482, 299, 743, 829, table tn3 row 37, 162, 266, 809, 944, 547, table tn3 row 48, 16, 28, 40, 487, 984, table tn3 row 86, 164, 783, 472, 886, 341, table tn3 row 92, 181, 577, 492, 708, 876, table tn3 row 63, 184, 76, 80, 890, 600, table tn3 row 107, 186, 927, 688, 599, 266, table tn3 row 17, 190, 57, 668, 913, 375, table tn3 row 102, 197, 273, 692, 102, 239, table tn3 row 43, 197, 70, 800, 170, 303, table tn3 row 126, 198, 124, 29, 726, 871, table tn3 row 82, 218, 701, 885, 17, 281, table tn3 row 36, 234, 234, 305, 896, 235, table tn3 row 84, 244, 376, 806, 314, 774, table tn3 row 2, 245, 816, 607, 538, 424, table tn3 row 16, 255, 152, 555, 729, 449, table tn3 row 97, 262, 810, 549, 950, 249, table tn3 row 50, 265, 302, 73, 913, 187, table tn3 row 66, 275, 226, 991, 260, 310, table tn3 row 128, 282, 411, 792, 428, 119, table tn3 row 46, 296, 445, 565, 66, 913, table tn3 row 83, 303, 779, 647, 81, 272, table tn3 row 129, 30, 382, 750, 737, 951, table tn3 row 21, 306, 761, 777, 871, 844, table tn3 row 124, 335, 686, 400, 522, 470, table tn3 row 119, 337, 407, 860, 115, 467, table tn3 row 39, 34, 166, 134, 541, 145, table tn3 row 38, 341, 677, 555, 363, 975, table tn3 row 31, 344, 558, 317, 553, 712, table tn3 row 104, 347, 17, 127, 307, 959, table tn3 row 18, 349, 542, 542, 658, 304, table tn3 row 15, 353, 480, 845, 375, 853, table tn3 row 87, 364, 159, 777, 850, 466, table tn3 row 62, 364, 318, 592, 173, 321, table tn3 row 80, 368, 457, 175, 220, 728, table tn3 row 108, 376, 860, 826, 273, 425, table tn3 row 51, 378, 214, 651, 982, 836, table tn3 row 110, 379, 103, 697, 624, 536, table tn3 row 77, 380, 932, 890, 364, 260, table tn3 row 34, 383, 837, 792, 38, 972, table tn3 row 76, 386, 788, 265, 548, 136, table tn3 row 79, 393, 720, 524, 524, 192, table tn3 row 111, 396, 70, 885, 683, 527, table tn3 row 4, 41, 464, 403, 386, 818, table tn3 row 99, 42, 505, 285, 109, 981, table tn3 row 10, 429, 617, 83, 503, 993, table tn3 row 7, 457, 876, 467, 355, 854, table tn3 row 25, 476, 339, 435, 358, 425, table tn3 row 109, 478, 716, 947, 764, 3, table tn3 row 74, 490, 73, 133, 423, 586, table tn3 row 27, 499, 551, 211, 95, 731, table tn3 row 112, 499, 665, 459, 429, 651, table tn3 row 24, 500, 296, 580, 797, 862, table tn3 row 116, 513, 914, 801, 495, 724, table tn3 row 13, 515, 566, 898, 515, 848, table tn3 row 53, 5, 224, 733, 701, 813, table tn3 row 103, 525, 566, 244, 889, 120, table tn3 row 75, 532, 811, 53, 603, 989, table tn3 row 122, 548, 874, 372, 988, 231, table tn3 row 47, 549, 381, 929, 149, 550, table tn3 row 55, 551, 813, 516, 641, 821, table tn3 row 12, 559, 649, 584, 283, 83, table tn3 row 69, 560, 882, 986, 134, 929, table tn3 row 94, 566, 146, 272, 582, 690, table tn3 row 49, 576, 434, 353, 135, 4, table tn3 row 73, 581, 832, 869, 60, 155, table tn3 row 115, 591, 41, 452, 403, 807, table tn3 row 44, 594, 814, 146, 650, 578, table tn3 row 56, 608, 211, 439, 46, 765, table tn3 row 52, 611, 130, 677, 981, 913, table tn3 row 101, 614, 113, 455, 270, 192, table tn3 row 70, 615, 198, 961, 615, 87, table tn3 row 121, 637, 549, 476, 645, 401, table tn3 row 29, 644, 740, 395, 482, 406, table tn3 row 81, 651, 710, 490, 841, 254, table tn3 row 59, 696, 386, 247, 231, 848, table tn3 row 8, 697, 124, 688, 217, 7, table tn3 row 120, 697, 835, 338, 647, 193, table tn3 row 22, 699, 27, 763, 354, 221, table tn3 row 88, 70, 685, 963, 1, 145, table tn3 row 19, 710, 790, 81, 923, 147, table tn3 row 91, 720, 295, 84, 635, 135, table tn3 row 41, 727, 57, 220, 711, 108, table tn3 row 40, 727, 595, 102, 642, 169, table tn3 row 90, 729, 651, 669, 729, 131, table tn3 row 118, 743, 178, 900, 719, 846, table tn3 row 95, 751, 350, 477, 238, 592, table tn3 row 42, 75, 272, 375, 984, 119, table tn3 row 89, 754, 827, 455, 437, 896, table tn3 row 6, 763, 474, 145, 415, 163, table tn3 row 106, 776, 534, 360, 560, 459, table tn3 row 65, 777, 827, 486, 368, 602, table tn3 row 1, 784, 246, 966, 336, 814, table tn3 row 54, 788, 334, 243, 662, 823, table tn3 row 96, 803, 360, 296, 501, 271, table tn3 row 33, 818, 156, 324, 866, 593, table tn3 row 105, 820, 368, 844, 683, 275, table tn3 row 85, 822, 665, 77, 483, 526, table tn3 row 20, 829, 595, 645, 607, 494, table tn3 row 5, 836, 454, 339, 737, 837, table tn3 row 32, 863, 592, 467, 624, 665, table tn3 row 100, 865, 584, 887, 425, 333, table tn3 row 127, 872, 321, 594, 958, 464, table tn3 row 98, 879, 355, 326, 184, 854, table tn3 row 14, 892, 616, 601, 554, 552, table tn3 row 23, 895, 456, 149, 895, 596, table tn3 row 57, 899, 240, 863, 825, 319, table tn3 row 28, 913, 73, 986, 139, 457, table tn3 row 114, 929, 269, 986, 983, 844, table tn3 row 125, 935, 127, 86, 361, 232, table tn3 row 93, 935, 58, 701, 2, 892, table tn3 row 30, 947, 405, 494, 480, 605, table tn3 row 123, 952, 392, 122, 665, 138, table tn3 row 117, 959, 847, 178, 434, 177, table tn3 row 113, 964, 888, 970, 444, 131, table tn3 row 78, 965, 977, 823, 168, 932, table tn3 row 35, 971, 236, 641, 967, 265, table tn3 row 68, 979, 701, 7, 782, 702, table tn3 row 9, 98, 317, 117, 247, 318, table tn3 row 67, 992, 202, 75, 164, 178, table tn3 row 72, 995, 632, 600, 508, 833, table tn3 row 3, 996, 713, 887, 520, 25, table tn3 row 26, 997, 998, 711, 399, 914, table tn3 row 11
```

```sql
SELECT * FROM t4

The hash of 666 returned values was different than expected. Check the sorting: 105, 319, 984, 482, 792, table tn4 row 62, 105, 784, 484, 844, 206, table tn4 row 81, 107, 708, 773, 820, 592, table tn4 row 41, 136, 379, 584, 681, 543, table tn4 row 97, 139, 294, 993, 44, 312, table tn4 row 60, 151, 860, 948, 356, 217, table tn4 row 49, 152, 40, 208, 950, 557, table tn4 row 35, 159, 94, 873, 881, 179, table tn4 row 54, 160, 220, 127, 246, 885, table tn4 row 29, 16, 721, 674, 628, 237, table tn4 row 11, 170, 58, 188, 449, 480, table tn4 row 45, 185, 877, 455, 441, 372, table tn4 row 87, 210, 407, 694, 60, 565, table tn4 row 108, 223, 986, 936, 144, 438, table tn4 row 83, 228, 713, 398, 199, 512, table tn4 row 102, 234, 68, 47, 877, 858, table tn4 row 12, 235, 982, 153, 583, 273, table tn4 row 37, 243, 402, 723, 680, 123, table tn4 row 23, 248, 577, 489, 141, 850, table tn4 row 90, 260, 707, 301, 653, 737, table tn4 row 26, 261, 892, 422, 639, 820, table tn4 row 88, 271, 810, 483, 491, 12, table tn4 row 46, 281, 288, 752, 549, 600, table tn4 row 66, 29, 480, 971, 366, 48, table tn4 row 67, 318, 925, 215, 247, 236, table tn4 row 99, 31, 938, 299, 943, 763, table tn4 row 56, 327, 323, 366, 511, 619, table tn4 row 7, 337, 917, 220, 658, 837, table tn4 row 24, 355, 267, 609, 306, 931, table tn4 row 47, 367, 498, 667, 236, 312, table tn4 row 53, 373, 276, 273, 997, 122, table tn4 row 65, 378, 589, 162, 509, 397, table tn4 row 72, 386, 903, 964, 736, 103, table tn4 row 40, 408, 982, 157, 546, 617, table tn4 row 63, 412, 476, 39, 303, 352, table tn4 row 101, 422, 593, 297, 197, 511, table tn4 row 58, 423, 635, 767, 409, 835, table tn4 row 36, 439, 535, 451, 979, 37, table tn4 row 82, 442, 408, 758, 105, 486, table tn4 row 91, 447, 653, 703, 983, 151, table tn4 row 52, 448, 295, 860, 522, 35, table tn4 row 57, 450, 23, 436, 973, 596, table tn4 row 70, 451, 735, 832, 25, 141, table tn4 row 39, 469, 829, 513, 568, 9, table tn4 row 31, 473, 624, 424, 323, 661, table tn4 row 95, 474, 678, 948, 968, 63, table tn4 row 51, 489, 748, 88, 819, 307, table tn4 row 103, 502, 563, 536, 626, 188, table tn4 row 21, 505, 847, 799, 797, 546, table tn4 row 106, 509, 139, 768, 481, 71, table tn4 row 68, 509, 434, 725, 31, 698, table tn4 row 27, 510, 816, 319, 953, 415, table tn4 row 78, 513, 634, 319, 929, 677, table tn4 row 84, 51, 765, 794, 498, 350, table tn4 row 25, 540, 608, 749, 706, 349, table tn4 row 28, 558, 442, 712, 136, 465, table tn4 row 42, 574, 33, 221, 268, 311, table tn4 row 105, 579, 961, 345, 794, 300, table tn4 row 43, 580, 243, 619, 146, 719, table tn4 row 59, 589, 979, 201, 781, 296, table tn4 row 50, 596, 175, 82, 85, 252, table tn4 row 15, 598, 901, 585, 260, 879, table tn4 row 71, 602, 882, 521, 184, 476, table tn4 row 94, 605, 184, 2, 507, 760, table tn4 row 44, 605, 826, 44, 442, 38, table tn4 row 32, 606, 532, 998, 574, 554, table tn4 row 4, 60, 802, 471, 901, 725, table tn4 row 79, 621, 538, 344, 661, 739, table tn4 row 30, 625, 35, 752, 376, 29, table tn4 row 34, 629, 331, 6, 907, 854, table tn4 row 75, 637, 907, 293, 264, 377, table tn4 row 1, 651, 919, 675, 989, 257, table tn4 row 93, 661, 114, 119, 713, 132, table tn4 row 111, 662, 884, 586, 364, 405, table tn4 row 3, 708, 167, 806, 277, 358, table tn4 row 9, 723, 660, 238, 349, 767, table tn4 row 20, 72, 603, 783, 309, 163, table tn4 row 38, 74, 2, 936, 229, 951, table tn4 row 73, 746, 733, 791, 770, 805, table tn4 row 109, 747, 849, 728, 328, 778, table tn4 row 61, 752, 271, 0, 665, 85, table tn4 row 22, 756, 749, 840, 249, 217, table tn4 row 2, 773, 137, 358, 185, 552, table tn4 row 98, 778, 587, 393, 317, 290, table tn4 row 17, 792, 107, 996, 100, 738, table tn4 row 74, 793, 289, 274, 166, 790, table tn4 row 110, 804, 357, 177, 987, 491, table tn4 row 96, 81, 924, 720, 212, 185, table tn4 row 16, 825, 921, 660, 777, 376, table tn4 row 6, 82, 644, 417, 617, 692, table tn4 row 80, 841, 76, 732, 917, 184, table tn4 row 13, 845, 964, 804, 86, 81, table tn4 row 77, 847, 579, 271, 889, 916, table tn4 row 86, 857, 260, 658, 657, 390, table tn4 row 18, 876, 606, 927, 150, 324, table tn4 row 76, 894, 551, 178, 910, 1, table tn4 row 19, 901, 389, 74, 429, 223, table tn4 row 8, 919, 700, 433, 524, 631, table tn4 row 55, 921, 765, 357, 821, 6, table tn4 row 92, 922, 941, 84, 18, 977, table tn4 row 100, 92, 469, 671, 597, 816, table tn4 row 104, 933, 261, 0, 231, 954, table tn4 row 69, 933, 387, 631, 905, 147, table tn4 row 5, 948, 888, 482, 60, 38, table tn4 row 48, 950, 86, 508, 985, 543, table tn4 row 85, 952, 966, 214, 728, 531, table tn4 row 14, 968, 721, 854, 373, 958, table tn4 row 107, 981, 607, 904, 55, 482, table tn4 row 64, 982, 627, 581, 988, 381, table tn4 row 33, 990, 372, 690, 593, 212, table tn4 row 89, 997, 286, 403, 223, 575, table tn4 row 10
```

```sql
SELECT * FROM t5

The hash of 660 returned values was different than expected. Check the sorting: 114, 260, 681, 835, 22, table tn5 row 27, 132, 942, 384, 118, 874, table tn5 row 88, 148, 179, 634, 963, 13, table tn5 row 82, 153, 306, 672, 858, 25, table tn5 row 11, 153, 587, 443, 691, 98, table tn5 row 79, 163, 292, 348, 321, 270, table tn5 row 42, 174, 526, 56, 479, 725, table tn5 row 47, 180, 26, 485, 33, 708, table tn5 row 50, 18, 782, 824, 938, 902, table tn5 row 35, 190, 69, 185, 910, 727, table tn5 row 26, 196, 91, 697, 401, 807, table tn5 row 15, 235, 874, 855, 856, 764, table tn5 row 80, 242, 559, 442, 634, 68, table tn5 row 106, 242, 822, 599, 742, 327, table tn5 row 5, 24, 723, 941, 313, 470, table tn5 row 104, 267, 665, 628, 419, 894, table tn5 row 68, 270, 113, 825, 780, 696, table tn5 row 25, 270, 606, 689, 59, 141, table tn5 row 91, 296, 789, 198, 255, 906, table tn5 row 74, 297, 390, 668, 782, 522, table tn5 row 38, 301, 640, 422, 685, 592, table tn5 row 78, 311, 820, 766, 602, 68, table tn5 row 81, 319, 544, 3, 745, 702, table tn5 row 55, 319, 685, 101, 1, 758, table tn5 row 30, 320, 759, 293, 738, 311, table tn5 row 16, 330, 860, 437, 555, 899, table tn5 row 24, 331, 661, 657, 462, 586, table tn5 row 97, 332, 161, 756, 492, 554, table tn5 row 69, 334, 772, 819, 806, 749, table tn5 row 59, 335, 143, 747, 769, 143, table tn5 row 39, 335, 897, 222, 343, 589, table tn5 row 23, 339, 234, 585, 361, 180, table tn5 row 76, 341, 273, 613, 219, 594, table tn5 row 93, 342, 744, 50, 937, 187, table tn5 row 73, 342, 858, 37, 811, 271, table tn5 row 8, 34, 82, 721, 309, 729, table tn5 row 36, 349, 84, 187, 480, 894, table tn5 row 77, 357, 548, 922, 470, 730, table tn5 row 12, 362, 193, 44, 805, 812, table tn5 row 17, 369, 403, 155, 789, 944, table tn5 row 67, 373, 231, 18, 940, 549, table tn5 row 100, 392, 234, 544, 883, 737, table tn5 row 37, 413, 499, 18, 24, 287, table tn5 row 18, 421, 731, 915, 152, 758, table tn5 row 28, 429, 530, 471, 132, 41, table tn5 row 20, 445, 934, 809, 752, 386, table tn5 row 19, 447, 629, 149, 360, 155, table tn5 row 31, 476, 531, 86, 514, 154, table tn5 row 64, 478, 506, 299, 412, 343, table tn5 row 9, 485, 729, 936, 964, 943, table tn5 row 84, 50, 33, 72, 171, 470, table tn5 row 95, 513, 716, 602, 520, 995, table tn5 row 61, 514, 736, 163, 32, 887, table tn5 row 83, 519, 703, 443, 69, 587, table tn5 row 13, 522, 971, 797, 263, 640, table tn5 row 49, 536, 26, 579, 570, 104, table tn5 row 14, 53, 975, 196, 856, 144, table tn5 row 3, 540, 380, 723, 729, 104, table tn5 row 7, 544, 878, 31, 779, 885, table tn5 row 45, 54, 717, 805, 772, 716, table tn5 row 62, 556, 159, 756, 269, 436, table tn5 row 29, 55, 716, 140, 977, 656, table tn5 row 107, 5, 674, 570, 537, 975, table tn5 row 90, 586, 930, 855, 238, 130, table tn5 row 22, 597, 389, 978, 280, 655, table tn5 row 92, 599, 661, 147, 4, 18, table tn5 row 51, 602, 391, 489, 271, 104, table tn5 row 48, 615, 326, 941, 155, 150, table tn5 row 53, 626, 183, 545, 553, 342, table tn5 row 94, 637, 784, 551, 847, 441, table tn5 row 101, 642, 484, 844, 916, 929, table tn5 row 96, 667, 320, 797, 495, 232, table tn5 row 40, 675, 705, 818, 276, 923, table tn5 row 63, 683, 98, 678, 965, 621, table tn5 row 52, 685, 609, 250, 855, 258, table tn5 row 70, 69, 623, 734, 806, 480, table tn5 row 32, 696, 336, 649, 369, 511, table tn5 row 57, 710, 393, 868, 792, 610, table tn5 row 44, 721, 695, 27, 957, 157, table tn5 row 105, 730, 989, 351, 667, 522, table tn5 row 33, 740, 605, 696, 443, 390, table tn5 row 110, 743, 511, 934, 682, 446, table tn5 row 99, 749, 847, 210, 42, 718, table tn5 row 108, 757, 412, 598, 521, 72, table tn5 row 34, 785, 951, 514, 818, 206, table tn5 row 6, 796, 159, 527, 344, 802, table tn5 row 109, 800, 502, 989, 855, 364, table tn5 row 60, 817, 56, 601, 274, 352, table tn5 row 86, 818, 495, 774, 960, 971, table tn5 row 75, 81, 855, 130, 369, 440, table tn5 row 66, 821, 771, 625, 810, 184, table tn5 row 58, 826, 79, 923, 117, 937, table tn5 row 4, 832, 186, 734, 114, 697, table tn5 row 1, 837, 433, 729, 787, 558, table tn5 row 43, 851, 338, 924, 111, 732, table tn5 row 98, 853, 26, 261, 98, 561, table tn5 row 72, 867, 861, 856, 565, 34, table tn5 row 56, 878, 774, 158, 282, 437, table tn5 row 41, 882, 620, 249, 731, 225, table tn5 row 102, 89, 230, 820, 413, 689, table tn5 row 71, 904, 336, 147, 616, 188, table tn5 row 85, 917, 424, 152, 437, 585, table tn5 row 21, 921, 657, 894, 557, 772, table tn5 row 46, 929, 193, 441, 991, 686, table tn5 row 89, 958, 205, 960, 919, 888, table tn5 row 54, 960, 846, 927, 542, 499, table tn5 row 65, 976, 569, 313, 757, 209, table tn5 row 103, 988, 554, 733, 649, 661, table tn5 row 10, 99, 321, 799, 814, 9, table tn5 row 87, 9, 998, 12, 841, 851, table tn5 row 2
```

```sql
SELECT * FROM t6

The hash of 552 returned values was different than expected. Check the sorting: 104, 905, 187, 974, 634, table tn6 row 43, 116, 230, 506, 355, 731, table tn6 row 8, 121, 662, 491, 750, 139, table tn6 row 64, 128, 461, 480, 186, 588, table tn6 row 13, 129, 350, 832, 929, 77, table tn6 row 36, 129, 696, 528, 991, 286, table tn6 row 57, 132, 905, 615, 467, 14, table tn6 row 12, 1, 351, 424, 729, 633, table tn6 row 47, 148, 650, 399, 321, 24, table tn6 row 71, 173, 250, 717, 161, 816, table tn6 row 79, 182, 232, 265, 473, 737, table tn6 row 69, 211, 463, 768, 500, 67, table tn6 row 3, 222, 834, 434, 172, 345, table tn6 row 22, 233, 229, 500, 855, 673, table tn6 row 52, 238, 923, 4, 807, 353, table tn6 row 9, 240, 158, 282, 256, 523, table tn6 row 34, 2, 452, 12, 469, 211, table tn6 row 76, 251, 565, 673, 578, 91, table tn6 row 66, 255, 541, 975, 674, 154, table tn6 row 48, 270, 681, 267, 223, 324, table tn6 row 92, 293, 876, 522, 367, 237, table tn6 row 7, 300, 267, 34, 277, 95, table tn6 row 40, 33, 262, 961, 458, 67, table tn6 row 54, 35, 348, 66, 488, 678, table tn6 row 74, 355, 997, 452, 647, 754, table tn6 row 62, 359, 0, 942, 376, 798, table tn6 row 37, 366, 583, 718, 869, 255, table tn6 row 39, 384, 92, 928, 192, 840, table tn6 row 1, 386, 243, 430, 196, 74, table tn6 row 44, 392, 217, 446, 867, 31, table tn6 row 6, 396, 461, 159, 711, 531, table tn6 row 61, 405, 350, 864, 931, 90, table tn6 row 28, 40, 63, 769, 790, 808, table tn6 row 16, 414, 993, 415, 846, 601, table tn6 row 38, 436, 880, 513, 613, 24, table tn6 row 41, 452, 226, 122, 924, 585, table tn6 row 29, 45, 390, 992, 667, 707, table tn6 row 35, 46, 699, 377, 286, 738, table tn6 row 68, 469, 915, 161, 885, 668, table tn6 row 88, 474, 281, 45, 73, 617, table tn6 row 55, 518, 427, 454, 852, 40, table tn6 row 89, 522, 511, 177, 822, 5, table tn6 row 53, 531, 290, 25, 729, 503, table tn6 row 14, 537, 984, 729, 489, 283, table tn6 row 15, 540, 601, 28, 269, 431, table tn6 row 17, 564, 974, 242, 2, 100, table tn6 row 42, 568, 629, 84, 34, 489, table tn6 row 80, 572, 781, 528, 197, 766, table tn6 row 78, 585, 378, 308, 901, 946, table tn6 row 77, 604, 962, 287, 185, 6, table tn6 row 86, 610, 825, 320, 21, 761, table tn6 row 87, 615, 202, 135, 493, 395, table tn6 row 70, 62, 223, 146, 457, 747, table tn6 row 46, 64, 296, 752, 786, 550, table tn6 row 59, 643, 126, 292, 600, 711, table tn6 row 73, 653, 290, 504, 129, 915, table tn6 row 24, 653, 954, 749, 956, 646, table tn6 row 20, 657, 512, 442, 366, 95, table tn6 row 63, 66, 449, 123, 734, 554, table tn6 row 30, 672, 604, 411, 2, 631, table tn6 row 45, 680, 210, 677, 428, 466, table tn6 row 91, 683, 850, 572, 453, 622, table tn6 row 84, 683, 882, 369, 66, 417, table tn6 row 5, 692, 300, 677, 561, 360, table tn6 row 65, 696, 144, 543, 970, 1, table tn6 row 75, 706, 739, 938, 797, 175, table tn6 row 49, 718, 989, 534, 147, 469, table tn6 row 2, 725, 6, 910, 942, 439, table tn6 row 81, 731, 54, 146, 664, 261, table tn6 row 85, 740, 0, 11, 271, 574, table tn6 row 33, 751, 549, 35, 446, 958, table tn6 row 10, 764, 44, 413, 36, 668, table tn6 row 72, 787, 967, 216, 581, 883, table tn6 row 31, 799, 933, 490, 778, 794, table tn6 row 83, 801, 782, 258, 767, 969, table tn6 row 90, 811, 629, 297, 689, 893, table tn6 row 21, 811, 963, 295, 60, 595, table tn6 row 56, 818, 490, 441, 405, 654, table tn6 row 50, 821, 507, 751, 35, 257, table tn6 row 26, 825, 392, 648, 424, 225, table tn6 row 58, 825, 716, 609, 337, 682, table tn6 row 82, 829, 606, 620, 974, 972, table tn6 row 11, 839, 774, 54, 393, 230, table tn6 row 19, 851, 875, 416, 993, 750, table tn6 row 4, 85, 214, 637, 560, 511, table tn6 row 51, 861, 906, 328, 197, 274, table tn6 row 25, 870, 575, 12, 974, 495, table tn6 row 32, 877, 601, 65, 590, 329, table tn6 row 67, 963, 537, 963, 72, 850, table tn6 row 60, 966, 276, 807, 911, 847, table tn6 row 23, 971, 710, 561, 463, 241, table tn6 row 27, 973, 421, 270, 151, 809, table tn6 row 18
```

```sql
SELECT * FROM t8

The hash of 654 returned values was different than expected. Check the sorting: 113, 394, 377, 223, 729, table tn8 row 100, 127, 564, 461, 486, 881, table tn8 row 73, 12, 790, 544, 50, 383, table tn8 row 106, 127, 975, 225, 737, 646, table tn8 row 14, 129, 466, 88, 466, 320, table tn8 row 96, 150, 770, 404, 108, 806, table tn8 row 94, 15, 313, 260, 179, 64, table tn8 row 35, 153, 696, 299, 494, 295, table tn8 row 41, 171, 155, 656, 761, 310, table tn8 row 66, 183, 563, 321, 690, 972, table tn8 row 59, 184, 906, 648, 370, 476, table tn8 row 57, 200, 640, 541, 682, 942, table tn8 row 21, 210, 615, 421, 190, 105, table tn8 row 99, 239, 725, 431, 116, 223, table tn8 row 2, 241, 773, 647, 767, 455, table tn8 row 46, 242, 796, 442, 637, 180, table tn8 row 103, 248, 369, 693, 989, 809, table tn8 row 71, 250, 761, 775, 339, 179, table tn8 row 25, 254, 964, 692, 48, 149, table tn8 row 24, 256, 870, 117, 192, 305, table tn8 row 7, 259, 705, 851, 326, 561, table tn8 row 23, 289, 997, 508, 615, 260, table tn8 row 91, 306, 162, 266, 769, 487, table tn8 row 30, 312, 397, 5, 738, 579, table tn8 row 4, 312, 862, 321, 945, 56, table tn8 row 109, 314, 8, 720, 883, 175, table tn8 row 34, 327, 308, 419, 482, 635, table tn8 row 47, 328, 922, 799, 899, 377, table tn8 row 80, 328, 963, 61, 845, 846, table tn8 row 40, 331, 503, 394, 101, 273, table tn8 row 76, 341, 878, 250, 715, 533, table tn8 row 11, 347, 665, 354, 439, 14, table tn8 row 5, 359, 145, 961, 96, 233, table tn8 row 42, 359, 487, 427, 610, 242, table tn8 row 56, 386, 300, 901, 210, 463, table tn8 row 68, 388, 175, 943, 862, 904, table tn8 row 44, 400, 6, 486, 197, 381, table tn8 row 88, 402, 542, 168, 735, 620, table tn8 row 51, 406, 934, 160, 815, 431, table tn8 row 3, 417, 755, 113, 58, 600, table tn8 row 97, 443, 642, 599, 781, 440, table tn8 row 26, 445, 325, 418, 327, 792, table tn8 row 82, 453, 155, 77, 953, 421, table tn8 row 105, 467, 807, 154, 627, 579, table tn8 row 70, 46, 792, 119, 675, 497, table tn8 row 86, 472, 397, 375, 835, 349, table tn8 row 65, 47, 366, 249, 93, 488, table tn8 row 53, 474, 9, 501, 291, 392, table tn8 row 69, 474, 958, 136, 936, 199, table tn8 row 62, 502, 981, 166, 894, 918, table tn8 row 95, 504, 205, 979, 124, 776, table tn8 row 18, 514, 603, 229, 512, 811, table tn8 row 49, 5, 405, 461, 330, 384, table tn8 row 29, 54, 324, 231, 889, 586, table tn8 row 98, 553, 609, 273, 472, 411, table tn8 row 84, 561, 1, 111, 2, 893, table tn8 row 15, 563, 259, 762, 761, 44, table tn8 row 19, 564, 244, 275, 631, 204, table tn8 row 39, 578, 891, 521, 711, 41, table tn8 row 16, 579, 352, 150, 756, 933, table tn8 row 52, 586, 769, 907, 141, 874, table tn8 row 79, 591, 992, 705, 542, 548, table tn8 row 38, 597, 889, 32, 706, 579, table tn8 row 92, 620, 704, 973, 60, 864, table tn8 row 108, 628, 493, 513, 541, 578, table tn8 row 60, 637, 228, 149, 269, 947, table tn8 row 22, 638, 287, 332, 833, 859, table tn8 row 6, 650, 34, 501, 630, 980, table tn8 row 64, 651, 461, 279, 743, 38, table tn8 row 75, 653, 364, 965, 731, 22, table tn8 row 77, 661, 7, 998, 876, 955, table tn8 row 89, 66, 725, 151, 849, 512, table tn8 row 93, 671, 105, 74, 636, 944, table tn8 row 78, 672, 211, 789, 580, 736, table tn8 row 48, 701, 253, 683, 456, 866, table tn8 row 36, 702, 184, 690, 534, 329, table tn8 row 87, 70, 523, 979, 20, 463, table tn8 row 85, 72, 359, 668, 805, 106, table tn8 row 12, 728, 984, 183, 499, 469, table tn8 row 1, 774, 365, 230, 366, 442, table tn8 row 101, 794, 98, 563, 916, 485, table tn8 row 67, 795, 673, 899, 112, 221, table tn8 row 8, 807, 806, 154, 161, 617, table tn8 row 58, 822, 677, 297, 422, 186, table tn8 row 54, 826, 186, 100, 624, 7, table tn8 row 102, 838, 102, 196, 554, 423, table tn8 row 10, 838, 454, 374, 108, 592, table tn8 row 13, 841, 702, 563, 344, 700, table tn8 row 63, 848, 386, 187, 683, 761, table tn8 row 45, 855, 852, 291, 446, 63, table tn8 row 28, 864, 624, 821, 667, 956, table tn8 row 27, 869, 540, 534, 523, 422, table tn8 row 9, 882, 219, 866, 651, 333, table tn8 row 43, 883, 52, 381, 391, 416, table tn8 row 55, 894, 952, 93, 484, 682, table tn8 row 107, 900, 690, 233, 950, 919, table tn8 row 104, 90, 656, 284, 494, 221, table tn8 row 33, 913, 182, 908, 474, 46, table tn8 row 20, 920, 803, 79, 511, 203, table tn8 row 37, 923, 351, 188, 623, 966, table tn8 row 90, 946, 951, 691, 811, 510, table tn8 row 31, 952, 269, 448, 14, 272, table tn8 row 32, 954, 741, 935, 814, 632, table tn8 row 61, 957, 459, 965, 608, 678, table tn8 row 17, 957, 469, 844, 880, 833, table tn8 row 83, 961, 511, 283, 81, 981, table tn8 row 74, 963, 365, 730, 525, 296, table tn8 row 81, 994, 370, 298, 384, 495, table tn8 row 72, 99, 647, 790, 463, 608, table tn8 row 50
```

```sql
SELECT * FROM t9

The hash of 588 returned values was different than expected. Check the sorting: 102, 818, 469, 926, 854, table tn9 row 9, 104, 289, 575, 111, 218, table tn9 row 94, 115, 64, 95, 439, 621, table tn9 row 57, 11, 803, 587, 763, 841, table tn9 row 74, 14, 361, 526, 86, 934, table tn9 row 45, 148, 891, 975, 686, 127, table tn9 row 73, 149, 410, 843, 388, 723, table tn9 row 46, 160, 269, 923, 274, 943, table tn9 row 67, 17, 239, 332, 744, 267, table tn9 row 12, 172, 568, 547, 821, 788, table tn9 row 80, 177, 926, 531, 682, 486, table tn9 row 27, 18, 496, 905, 166, 230, table tn9 row 13, 215, 125, 894, 316, 477, table tn9 row 60, 218, 136, 451, 745, 837, table tn9 row 49, 218, 746, 347, 679, 388, table tn9 row 63, 240, 149, 476, 987, 713, table tn9 row 97, 240, 688, 232, 283, 418, table tn9 row 51, 251, 456, 836, 919, 978, table tn9 row 39, 258, 326, 487, 305, 854, table tn9 row 47, 263, 210, 171, 922, 61, table tn9 row 20, 269, 5, 688, 967, 687, table tn9 row 70, 273, 214, 457, 463, 146, table tn9 row 92, 28, 348, 254, 959, 195, table tn9 row 44, 295, 103, 739, 525, 575, table tn9 row 89, 297, 848, 146, 467, 942, table tn9 row 17, 304, 426, 579, 270, 995, table tn9 row 79, 318, 127, 288, 909, 278, table tn9 row 4, 326, 880, 253, 808, 647, table tn9 row 26, 335, 170, 534, 345, 82, table tn9 row 72, 349, 301, 936, 104, 19, table tn9 row 71, 356, 15, 37, 142, 694, table tn9 row 31, 365, 245, 734, 608, 567, table tn9 row 91, 378, 13, 751, 25, 744, table tn9 row 33, 389, 819, 764, 759, 965, table tn9 row 14, 41, 262, 39, 495, 657, table tn9 row 23, 413, 379, 62, 450, 788, table tn9 row 5, 416, 227, 273, 681, 987, table tn9 row 84, 429, 667, 601, 95, 383, table tn9 row 37, 435, 171, 272, 464, 954, table tn9 row 7, 450, 95, 973, 389, 679, table tn9 row 1, 457, 152, 547, 668, 750, table tn9 row 95, 458, 804, 419, 606, 197, table tn9 row 11, 463, 26, 87, 602, 263, table tn9 row 21, 468, 342, 188, 399, 335, table tn9 row 10, 474, 868, 767, 268, 799, table tn9 row 30, 485, 821, 87, 732, 239, table tn9 row 90, 488, 595, 101, 161, 819, table tn9 row 35, 511, 423, 349, 549, 477, table tn9 row 15, 5, 142, 222, 818, 873, table tn9 row 41, 535, 864, 955, 568, 264, table tn9 row 34, 548, 832, 711, 420, 792, table tn9 row 96, 549, 936, 240, 258, 944, table tn9 row 75, 553, 211, 793, 878, 255, table tn9 row 40, 559, 66, 811, 235, 383, table tn9 row 42, 56, 171, 643, 660, 107, table tn9 row 50, 567, 236, 800, 264, 968, table tn9 row 48, 584, 2, 110, 678, 353, table tn9 row 88, 610, 122, 187, 646, 251, table tn9 row 64, 611, 912, 323, 912, 737, table tn9 row 52, 660, 228, 224, 554, 35, table tn9 row 28, 662, 759, 807, 332, 672, table tn9 row 77, 683, 16, 863, 591, 133, table tn9 row 43, 685, 446, 992, 790, 542, table tn9 row 22, 685, 63, 151, 23, 418, table tn9 row 3, 69, 118, 180, 662, 291, table tn9 row 81, 694, 893, 351, 224, 30, table tn9 row 25, 706, 12, 696, 383, 301, table tn9 row 78, 712, 74, 402, 495, 619, table tn9 row 82, 72, 77, 370, 899, 117, table tn9 row 56, 739, 900, 118, 720, 736, table tn9 row 68, 747, 789, 252, 226, 426, table tn9 row 18, 757, 447, 809, 618, 307, table tn9 row 86, 764, 549, 515, 161, 368, table tn9 row 38, 776, 680, 834, 960, 704, table tn9 row 2, 78, 827, 526, 360, 801, table tn9 row 53, 803, 612, 662, 737, 452, table tn9 row 6, 811, 178, 732, 55, 936, table tn9 row 87, 815, 122, 935, 601, 858, table tn9 row 32, 821, 122, 857, 694, 445, table tn9 row 59, 824, 214, 98, 688, 944, table tn9 row 54, 830, 524, 687, 665, 804, table tn9 row 24, 841, 913, 569, 965, 947, table tn9 row 36, 847, 19, 75, 129, 549, table tn9 row 62, 847, 525, 884, 553, 149, table tn9 row 55, 875, 858, 126, 597, 161, table tn9 row 85, 879, 285, 257, 770, 860, table tn9 row 8, 891, 421, 90, 147, 150, table tn9 row 93, 905, 128, 327, 51, 647, table tn9 row 65, 905, 19, 613, 489, 845, table tn9 row 61, 907, 251, 60, 164, 245, table tn9 row 98, 919, 751, 391, 347, 19, table tn9 row 69, 924, 50, 853, 145, 699, table tn9 row 29, 953, 312, 278, 628, 486, table tn9 row 58, 959, 578, 739, 646, 868, table tn9 row 76, 962, 855, 639, 967, 607, table tn9 row 83, 964, 783, 64, 855, 653, table tn9 row 16, 972, 549, 252, 795, 844, table tn9 row 66, 982, 703, 801, 938, 15, table tn9 row 19
```

```sql
CREATE INDEX t1i0 ON t1(a1,b1,c1,d1,e1,x1)

string is not a function
```

```sql
SELECT e1 FROM t1 WHERE a1 in (767,433,637,363,776,109,451) OR c1 in (683,531,654,246,3,876,309,284) OR (b1=738) EXCEPT SELECT b8 FROM t8 WHERE NOT ((761=d8 AND b8=259 AND e8=44 AND 762=c8 AND 563=a8) OR e8 in (866,579,106,933)) EXCEPT SELECT e6 FROM t6 WHERE NOT ((825=b6 OR d6=500) OR (230=b6 AND e6=731 AND d6=355 AND 116=a6)) UNION SELECT b2 FROM t2 WHERE (d2=416) UNION SELECT a4 FROM t4 WHERE c4 in (806,119,489,658,366,424,2,471) OR (215=c4 OR c4=424 OR e4=405) UNION ALL SELECT a9 FROM t9 WHERE (e9=195) OR (c9=98 OR d9=145) UNION ALL SELECT e5 FROM t5 WHERE (44=c5 AND a5=362 AND 193=b5) OR (858=b5) UNION SELECT d3 FROM t3 WHERE (b3=152) OR (726=d3) UNION SELECT e7 FROM t7 WHERE d7 in (687,507,603,52,118) OR (d7=399 AND e7=408 AND 396=b7 AND a7=97 AND c7=813) OR (e7=605 OR 837=b7 OR e7=918)

18 results returned but expected 41
```

```sql
SELECT e9 FROM t9 WHERE (264=e9) OR (608=d9 AND 245=b9 AND 365=a9) OR d9 in (821,360,686,601,720,744,606,450,818,270,732,111,737) INTERSECT SELECT c1 FROM t1 WHERE NOT ((b1=255) OR (544=a1 OR 775=c1 OR 60=b1) OR (523=c1)) UNION SELECT e8 FROM t8 WHERE (269=b8 AND e8=272) OR (e8=579 OR 729=e8) OR (761=b8 AND e8=179 AND c8=775) EXCEPT SELECT c3 FROM t3 WHERE NOT (a3 in (820,101,383,822,594,457,971,818,380,12) OR (964=a3 AND d3=444))

Expected: ["179","579","729","736","788"] but got ["736","788","788"]
```

```sql
SELECT e6 FROM t6 WHERE (c6=528 AND d6=991) OR d6 in (196,453,931,337,60,667,73,493,66) INTERSECT SELECT d1 FROM t1 WHERE NOT ((149=b1 AND a1=776))

Query was expected to return results (but did not): []
```

```sql
SELECT e3 FROM t3 WHERE (b3=740 AND 406=e3 AND 644=a3 AND 482=d3) OR (958=d3 OR 423=d3 OR 614=a3) OR (b3=983 OR a3=190 OR 226=b3) UNION ALL SELECT d8 FROM t8 WHERE (b8=705 OR 811=e8) OR c8 in (151,907,5,88,291,273,196,100,691,111,656,250,332) EXCEPT SELECT a7 FROM t7 WHERE NOT (e7 in (663,462,903,455,6,816,499,460) OR (435=c7 AND 442=d7 AND e7=988 AND 134=a7 AND 804=b7))

The hash of 21 returned values was different than expected. Check the sorting: 141, 192, 2, 211, 310, 326, 375, 406, 446, 464, 472, 512, 554, 586, 624, 715, 738, 761, 811, 833, 849
```

```sql
SELECT e7 FROM t7 WHERE a7 in (736,6,433,958) OR (523=c7 AND 979=e7 AND 177=d7) OR (e7=302 OR 851=e7 OR d7=346) EXCEPT SELECT a9 FROM t9 WHERE NOT ((e9=264 AND 535=a9 AND b9=864 AND 568=d9 AND c9=955)) EXCEPT SELECT d4 FROM t4 WHERE NOT ((e4=596 AND b4=23)) UNION SELECT a2 FROM t2 WHERE (245=a2)

Expected: ["245","27","302","462","506","638","851","971"] but got ["27","302","462","506","638","851","971","979"]
```

