# SQLlogictest compile results for AlaSQL 0.2.2-pre-develop+151231.53429

_2016-01-01T20:17:05.408Z_

Results from 622 test files:

---- ---- ---- ---- ---- ---- ----
### 1/622 [`./test/evidence/in1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/in1.test)

_Mimic sqlite_
#### ✔ Ran 214 tests as sqlite

* 100% was OK

Time: 294ms

---- ---- ---- ---- ---- ---- ----
### 2/622 [`./test/evidence/in2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/in2.test)

_Mimic sqlite_
#### ✔ Ran 53 tests as sqlite

* 100% was OK

Time: 99ms

---- ---- ---- ---- ---- ---- ----
### 3/622 [`./test/evidence/slt_lang_aggfunc.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/slt_lang_aggfunc.test)

_Mimic sqlite_

```sql
SELECT group_concat(DISTINCT x) FROM t1 NOT INDEXED

Parse error on line 1:
...DISTINCT x) FROM t1 NOT INDEXED
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'PIVOT', 'UNPIVOT', 'ORDER', 'WHERE', 'DOT', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'LIMIT', 'OFFSET', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NOT'
```


```sql
SELECT x FROM t1 WHERE x NOT NULL ORDER BY x

Parse error on line 1:
...FROM t1 WHERE x NOT NULL ORDER BY x
-----------------------^
Expecting 'IN', got 'NULL'
```


```sql
INSERT INTO t1 VALUES(1<<63,'true');

Parse error on line 1:
...RT INTO t1 VALUES(1<<63,'true');
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'LPAR', 'NUMBER', 'STRING', 'SHARP', 'DOLLAR', 'AT', 'COLON', 'NOT', 'IF', 'ALL', 'ANY', 'PLUS', 'STAR', 'QUESTION', 'CURRENT_TIMESTAMP', 'JAVASCRIPT', 'NEW', 'CAST', 'CONVERT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'TRUE', 'FALSE', 'NSTRING', 'NULL', 'EXISTS', 'BRAQUESTION', 'CASE', 'MINUS', 'SOME', 'ATLBRA', 'LCUR', got 'LT'
```

_Fail found for statement setting up data so skipping rest of tests_

#### ☓ Ran 80 tests as sqlite

* 6 skipped
* 11 failed
* 78% was OK

Time: 117ms

---- ---- ---- ---- ---- ---- ----
### 4/622 [`./test/evidence/slt_lang_createtrigger.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/slt_lang_createtrigger.test)

_Mimic sqlite_
#### ✔ Ran 26 tests as sqlite

* 100% was OK

Time: 31ms

---- ---- ---- ---- ---- ---- ----
### 5/622 [`./test/evidence/slt_lang_createview.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/slt_lang_createview.test)

_Mimic sqlite_
#### ✔ Ran 23 tests as sqlite

* 100% was OK

Time: 47ms

---- ---- ---- ---- ---- ---- ----
### 6/622 [`./test/evidence/slt_lang_dropindex.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/slt_lang_dropindex.test)

_Mimic sqlite_
#### ✔ Ran 8 tests as sqlite

* 100% was OK

Time: 21ms

---- ---- ---- ---- ---- ---- ----
### 7/622 [`./test/evidence/slt_lang_droptable.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/slt_lang_droptable.test)

_Mimic sqlite_
#### ✔ Ran 12 tests as sqlite

* 100% was OK

Time: 13ms

---- ---- ---- ---- ---- ---- ----
### 8/622 [`./test/evidence/slt_lang_droptrigger.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/slt_lang_droptrigger.test)

_Mimic sqlite_
#### ✔ Ran 12 tests as sqlite

* 100% was OK

Time: 13ms

---- ---- ---- ---- ---- ---- ----
### 9/622 [`./test/evidence/slt_lang_dropview.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/slt_lang_dropview.test)

_Mimic sqlite_
#### ✔ Ran 13 tests as sqlite

* 100% was OK

Time: 15ms

---- ---- ---- ---- ---- ---- ----
### 10/622 [`./test/evidence/slt_lang_reindex.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/slt_lang_reindex.test)

_Mimic sqlite_

```sql
REINDEX t1i1

Parse error on line 1:
REINDEX t1i1
--------^
Expecting 'EOF', 'COMMA', 'LPAR', 'RPAR', 'END', 'ELSE', 'COLONDASH', 'SEMICOLON', 'GO', got 'LITERAL'
```

_Fail found for statement setting up data so skipping rest of tests_

#### ☓ Ran 7 tests as sqlite

* 1 skipped
* 1 failed
* 71% was OK

Time: 24ms

---- ---- ---- ---- ---- ---- ----
### 11/622 [`./test/evidence/slt_lang_replace.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/slt_lang_replace.test)

_Mimic sqlite_
#### ✔ Ran 14 tests as sqlite

* 100% was OK

Time: 28ms

---- ---- ---- ---- ---- ---- ----
### 12/622 [`./test/evidence/slt_lang_update.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/slt_lang_update.test)

_Mimic sqlite_
#### ✔ Ran 27 tests as sqlite

* 100% was OK

Time: 43ms

---- ---- ---- ---- ---- ---- ----
### 13/622 [`./test/index/between/1/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/between/1/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 10022 tests as sqlite

* 100% was OK

Time: 86661ms

---- ---- ---- ---- ---- ---- ----
### 14/622 [`./test/index/between/10/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/between/10/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 10033 tests as sqlite

* 100% was OK

Time: 104495ms

---- ---- ---- ---- ---- ---- ----
### 15/622 [`./test/index/between/10/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/between/10/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 10029 tests as sqlite

* 100% was OK

Time: 85094ms

---- ---- ---- ---- ---- ---- ----
### 16/622 [`./test/index/between/10/slt_good_2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/between/10/slt_good_2.test)

_Mimic sqlite_
#### ✔ Ran 10032 tests as sqlite

* 100% was OK

Time: 91175ms

---- ---- ---- ---- ---- ---- ----
### 17/622 [`./test/index/between/10/slt_good_3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/between/10/slt_good_3.test)

_Mimic sqlite_
#### ✔ Ran 10032 tests as sqlite

* 100% was OK

Time: 120627ms

---- ---- ---- ---- ---- ---- ----
### 18/622 [`./test/index/between/10/slt_good_4.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/between/10/slt_good_4.test)

_Mimic sqlite_
#### ✔ Ran 10032 tests as sqlite

* 100% was OK

Time: 96304ms

---- ---- ---- ---- ---- ---- ----
### 19/622 [`./test/index/between/10/slt_good_5.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/between/10/slt_good_5.test)

_Mimic sqlite_
#### ✔ Ran 10031 tests as sqlite

* 100% was OK

Time: 87476ms

---- ---- ---- ---- ---- ---- ----
### 20/622 [`./test/index/between/100/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/between/100/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 10123 tests as sqlite

* 100% was OK

Time: 110496ms

---- ---- ---- ---- ---- ---- ----
### 21/622 [`./test/index/between/100/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/between/100/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 10125 tests as sqlite

* 100% was OK

Time: 119995ms

---- ---- ---- ---- ---- ---- ----
### 22/622 [`./test/index/between/100/slt_good_2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/between/100/slt_good_2.test)

_Mimic sqlite_
#### ✔ Ran 10121 tests as sqlite

* 100% was OK

Time: 127917ms

---- ---- ---- ---- ---- ---- ----
### 23/622 [`./test/index/between/100/slt_good_3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/between/100/slt_good_3.test)

_Mimic sqlite_
#### ✔ Ran 10121 tests as sqlite

* 100% was OK

Time: 99385ms

---- ---- ---- ---- ---- ---- ----
### 24/622 [`./test/index/between/100/slt_good_4.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/between/100/slt_good_4.test)

_Mimic sqlite_
#### ✔ Ran 10125 tests as sqlite

* 100% was OK

Time: 109575ms

---- ---- ---- ---- ---- ---- ----
### 25/622 [`./test/index/between/1000/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/between/1000/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 3792 tests as sqlite

* 100% was OK

Time: 27348ms

---- ---- ---- ---- ---- ---- ----
### 26/622 [`./test/index/commute/10/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 10034 tests as sqlite

* 100% was OK

Time: 34709ms

---- ---- ---- ---- ---- ---- ----
### 27/622 [`./test/index/commute/10/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 10030 tests as sqlite

* 100% was OK

Time: 36879ms

---- ---- ---- ---- ---- ---- ----
### 28/622 [`./test/index/commute/10/slt_good_10.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_10.test)

_Mimic sqlite_
#### ✔ Ran 4261 tests as sqlite

* 100% was OK

Time: 17722ms

---- ---- ---- ---- ---- ---- ----
### 29/622 [`./test/index/commute/10/slt_good_11.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_11.test)

_Mimic sqlite_
#### ✔ Ran 10032 tests as sqlite

* 100% was OK

Time: 39501ms

---- ---- ---- ---- ---- ---- ----
### 30/622 [`./test/index/commute/10/slt_good_12.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_12.test)

_Mimic sqlite_
#### ✔ Ran 10031 tests as sqlite

* 100% was OK

Time: 41368ms

---- ---- ---- ---- ---- ---- ----
### 31/622 [`./test/index/commute/10/slt_good_13.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_13.test)

_Mimic sqlite_
#### ✔ Ran 10032 tests as sqlite

* 100% was OK

Time: 43585ms

---- ---- ---- ---- ---- ---- ----
### 32/622 [`./test/index/commute/10/slt_good_14.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_14.test)

_Mimic sqlite_
#### ✔ Ran 10032 tests as sqlite

* 100% was OK

Time: 52316ms

---- ---- ---- ---- ---- ---- ----
### 33/622 [`./test/index/commute/10/slt_good_15.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_15.test)

_Mimic sqlite_
#### ✔ Ran 10030 tests as sqlite

* 100% was OK

Time: 36993ms

---- ---- ---- ---- ---- ---- ----
### 34/622 [`./test/index/commute/10/slt_good_16.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_16.test)

_Mimic sqlite_
#### ✔ Ran 10032 tests as sqlite

* 100% was OK

Time: 44856ms

---- ---- ---- ---- ---- ---- ----
### 35/622 [`./test/index/commute/10/slt_good_17.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_17.test)

_Mimic sqlite_
#### ✔ Ran 10031 tests as sqlite

* 100% was OK

Time: 47057ms

---- ---- ---- ---- ---- ---- ----
### 36/622 [`./test/index/commute/10/slt_good_18.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_18.test)

_Mimic sqlite_
#### ✔ Ran 10034 tests as sqlite

* 100% was OK

Time: 43194ms

---- ---- ---- ---- ---- ---- ----
### 37/622 [`./test/index/commute/10/slt_good_19.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_19.test)

_Mimic sqlite_
#### ✔ Ran 10031 tests as sqlite

* 100% was OK

Time: 66807ms

---- ---- ---- ---- ---- ---- ----
### 38/622 [`./test/index/commute/10/slt_good_2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_2.test)

_Mimic sqlite_
#### ✔ Ran 10037 tests as sqlite

* 100% was OK

Time: 55473ms

---- ---- ---- ---- ---- ---- ----
### 39/622 [`./test/index/commute/10/slt_good_20.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_20.test)

_Mimic sqlite_
#### ✔ Ran 10032 tests as sqlite

* 100% was OK

Time: 57806ms

---- ---- ---- ---- ---- ---- ----
### 40/622 [`./test/index/commute/10/slt_good_21.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_21.test)

_Mimic sqlite_
#### ✔ Ran 10030 tests as sqlite

* 100% was OK

Time: 61631ms

---- ---- ---- ---- ---- ---- ----
### 41/622 [`./test/index/commute/10/slt_good_22.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_22.test)

_Mimic sqlite_
#### ✔ Ran 10033 tests as sqlite

* 100% was OK

Time: 56293ms

---- ---- ---- ---- ---- ---- ----
### 42/622 [`./test/index/commute/10/slt_good_23.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_23.test)

_Mimic sqlite_
#### ✔ Ran 10033 tests as sqlite

* 100% was OK

Time: 59426ms

---- ---- ---- ---- ---- ---- ----
### 43/622 [`./test/index/commute/10/slt_good_24.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_24.test)

_Mimic sqlite_
#### ✔ Ran 10033 tests as sqlite

* 100% was OK

Time: 57002ms

---- ---- ---- ---- ---- ---- ----
### 44/622 [`./test/index/commute/10/slt_good_25.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_25.test)

_Mimic sqlite_
#### ✔ Ran 10030 tests as sqlite

* 100% was OK

Time: 62455ms

---- ---- ---- ---- ---- ---- ----
### 45/622 [`./test/index/commute/10/slt_good_26.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_26.test)

_Mimic sqlite_
#### ✔ Ran 10031 tests as sqlite

* 100% was OK

Time: 55790ms

---- ---- ---- ---- ---- ---- ----
### 46/622 [`./test/index/commute/10/slt_good_27.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_27.test)

_Mimic sqlite_
#### ✔ Ran 10033 tests as sqlite

* 100% was OK

Time: 69422ms

---- ---- ---- ---- ---- ---- ----
### 47/622 [`./test/index/commute/10/slt_good_28.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_28.test)

_Mimic sqlite_
#### ✔ Ran 10033 tests as sqlite

* 100% was OK

Time: 59501ms

---- ---- ---- ---- ---- ---- ----
### 48/622 [`./test/index/commute/10/slt_good_29.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_29.test)

_Mimic sqlite_
#### ✔ Ran 10032 tests as sqlite

* 100% was OK

Time: 55201ms

---- ---- ---- ---- ---- ---- ----
### 49/622 [`./test/index/commute/10/slt_good_3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_3.test)

_Mimic sqlite_
#### ✔ Ran 10032 tests as sqlite

* 100% was OK

Time: 53176ms

---- ---- ---- ---- ---- ---- ----
### 50/622 [`./test/index/commute/10/slt_good_30.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_30.test)

_Mimic sqlite_
#### ✔ Ran 10032 tests as sqlite

* 100% was OK

Time: 53332ms

---- ---- ---- ---- ---- ---- ----
### 51/622 [`./test/index/commute/10/slt_good_31.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_31.test)

_Mimic sqlite_
#### ✔ Ran 10033 tests as sqlite

* 100% was OK

Time: 54009ms

---- ---- ---- ---- ---- ---- ----
### 52/622 [`./test/index/commute/10/slt_good_32.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_32.test)

_Mimic sqlite_
#### ✔ Ran 10032 tests as sqlite

* 100% was OK

Time: 71837ms

---- ---- ---- ---- ---- ---- ----
### 53/622 [`./test/index/commute/10/slt_good_33.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_33.test)

_Mimic sqlite_
#### ✔ Ran 10034 tests as sqlite

* 100% was OK

Time: 55096ms

---- ---- ---- ---- ---- ---- ----
### 54/622 [`./test/index/commute/10/slt_good_34.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_34.test)

_Mimic sqlite_
#### ✔ Ran 10032 tests as sqlite

* 100% was OK

Time: 46039ms

---- ---- ---- ---- ---- ---- ----
### 55/622 [`./test/index/commute/10/slt_good_4.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_4.test)

_Mimic sqlite_
#### ✔ Ran 10030 tests as sqlite

* 100% was OK

Time: 45410ms

---- ---- ---- ---- ---- ---- ----
### 56/622 [`./test/index/commute/10/slt_good_5.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_5.test)

_Mimic sqlite_
#### ✔ Ran 10032 tests as sqlite

* 100% was OK

Time: 38343ms

---- ---- ---- ---- ---- ---- ----
### 57/622 [`./test/index/commute/10/slt_good_6.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_6.test)

_Mimic sqlite_
#### ✔ Ran 10036 tests as sqlite

* 100% was OK

Time: 47510ms

---- ---- ---- ---- ---- ---- ----
### 58/622 [`./test/index/commute/10/slt_good_7.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_7.test)

_Mimic sqlite_
#### ✔ Ran 10034 tests as sqlite

* 100% was OK

Time: 43224ms

---- ---- ---- ---- ---- ---- ----
### 59/622 [`./test/index/commute/10/slt_good_8.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_8.test)

_Mimic sqlite_
#### ✔ Ran 10032 tests as sqlite

* 100% was OK

Time: 47714ms

---- ---- ---- ---- ---- ---- ----
### 60/622 [`./test/index/commute/10/slt_good_9.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/10/slt_good_9.test)

_Mimic sqlite_
#### ✔ Ran 10034 tests as sqlite

* 100% was OK

Time: 45556ms

---- ---- ---- ---- ---- ---- ----
### 61/622 [`./test/index/commute/100/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/100/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 10122 tests as sqlite

* 100% was OK

Time: 50029ms

---- ---- ---- ---- ---- ---- ----
### 62/622 [`./test/index/commute/100/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/100/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 10120 tests as sqlite

* 100% was OK

Time: 41977ms

---- ---- ---- ---- ---- ---- ----
### 63/622 [`./test/index/commute/100/slt_good_10.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/100/slt_good_10.test)

_Mimic sqlite_
#### ✔ Ran 10124 tests as sqlite

* 100% was OK

Time: 51596ms

---- ---- ---- ---- ---- ---- ----
### 64/622 [`./test/index/commute/100/slt_good_11.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/100/slt_good_11.test)

_Mimic sqlite_
#### ✔ Ran 10123 tests as sqlite

* 100% was OK

Time: 44112ms

---- ---- ---- ---- ---- ---- ----
### 65/622 [`./test/index/commute/100/slt_good_12.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/100/slt_good_12.test)

_Mimic sqlite_
#### ✔ Ran 10123 tests as sqlite

* 100% was OK

Time: 46431ms

---- ---- ---- ---- ---- ---- ----
### 66/622 [`./test/index/commute/100/slt_good_2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/100/slt_good_2.test)

_Mimic sqlite_
#### ✔ Ran 10123 tests as sqlite

* 100% was OK

Time: 49014ms

---- ---- ---- ---- ---- ---- ----
### 67/622 [`./test/index/commute/100/slt_good_3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/100/slt_good_3.test)

_Mimic sqlite_
#### ✔ Ran 10121 tests as sqlite

* 100% was OK

Time: 47325ms

---- ---- ---- ---- ---- ---- ----
### 68/622 [`./test/index/commute/100/slt_good_4.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/100/slt_good_4.test)

_Mimic sqlite_
#### ✔ Ran 10124 tests as sqlite

* 100% was OK

Time: 45853ms

---- ---- ---- ---- ---- ---- ----
### 69/622 [`./test/index/commute/100/slt_good_5.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/100/slt_good_5.test)

_Mimic sqlite_
#### ✔ Ran 10121 tests as sqlite

* 100% was OK

Time: 45870ms

---- ---- ---- ---- ---- ---- ----
### 70/622 [`./test/index/commute/100/slt_good_6.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/100/slt_good_6.test)

_Mimic sqlite_
#### ✔ Ran 10122 tests as sqlite

* 100% was OK

Time: 48855ms

---- ---- ---- ---- ---- ---- ----
### 71/622 [`./test/index/commute/100/slt_good_7.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/100/slt_good_7.test)

_Mimic sqlite_
#### ✔ Ran 10123 tests as sqlite

* 100% was OK

Time: 48538ms

---- ---- ---- ---- ---- ---- ----
### 72/622 [`./test/index/commute/100/slt_good_8.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/100/slt_good_8.test)

_Mimic sqlite_
#### ✔ Ran 10122 tests as sqlite

* 100% was OK

Time: 50264ms

---- ---- ---- ---- ---- ---- ----
### 73/622 [`./test/index/commute/100/slt_good_9.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/100/slt_good_9.test)

_Mimic sqlite_
#### ✔ Ran 10123 tests as sqlite

* 100% was OK

Time: 41819ms

---- ---- ---- ---- ---- ---- ----
### 74/622 [`./test/index/commute/1000/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/1000/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 4741 tests as sqlite

* 100% was OK

Time: 13701ms

---- ---- ---- ---- ---- ---- ----
### 75/622 [`./test/index/commute/1000/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/1000/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 10583 tests as sqlite

* 100% was OK

Time: 34844ms

---- ---- ---- ---- ---- ---- ----
### 76/622 [`./test/index/commute/1000/slt_good_2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/1000/slt_good_2.test)

_Mimic sqlite_
#### ✔ Ran 11021 tests as sqlite

* 100% was OK

Time: 43413ms

---- ---- ---- ---- ---- ---- ----
### 77/622 [`./test/index/commute/1000/slt_good_3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/commute/1000/slt_good_3.test)

_Mimic sqlite_
#### ✔ Ran 11025 tests as sqlite

* 100% was OK

Time: 40632ms

---- ---- ---- ---- ---- ---- ----
### 78/622 [`./test/index/delete/1/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/delete/1/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 10907 tests as sqlite

* 100% was OK

Time: 27595ms

---- ---- ---- ---- ---- ---- ----
### 79/622 [`./test/index/delete/10/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/delete/10/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 10730 tests as sqlite

* 100% was OK

Time: 25275ms

---- ---- ---- ---- ---- ---- ----
### 80/622 [`./test/index/delete/10/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/delete/10/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 10774 tests as sqlite

* 100% was OK

Time: 26513ms

---- ---- ---- ---- ---- ---- ----
### 81/622 [`./test/index/delete/10/slt_good_2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/delete/10/slt_good_2.test)

_Mimic sqlite_
#### ✔ Ran 9390 tests as sqlite

* 100% was OK

Time: 29913ms

---- ---- ---- ---- ---- ---- ----
### 82/622 [`./test/index/delete/10/slt_good_3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/delete/10/slt_good_3.test)

_Mimic sqlite_
#### ✔ Ran 10065 tests as sqlite

* 100% was OK

Time: 30923ms

---- ---- ---- ---- ---- ---- ----
### 83/622 [`./test/index/delete/10/slt_good_4.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/delete/10/slt_good_4.test)

_Mimic sqlite_
#### ✔ Ran 10599 tests as sqlite

* 100% was OK

Time: 27684ms

---- ---- ---- ---- ---- ---- ----
### 84/622 [`./test/index/delete/10/slt_good_5.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/delete/10/slt_good_5.test)

_Mimic sqlite_
#### ✔ Ran 10353 tests as sqlite

* 100% was OK

Time: 28959ms

---- ---- ---- ---- ---- ---- ----
### 85/622 [`./test/index/delete/100/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/delete/100/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 11145 tests as sqlite

* 100% was OK

Time: 29132ms

---- ---- ---- ---- ---- ---- ----
### 86/622 [`./test/index/delete/100/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/delete/100/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 10895 tests as sqlite

* 100% was OK

Time: 27537ms

---- ---- ---- ---- ---- ---- ----
### 87/622 [`./test/index/delete/100/slt_good_2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/delete/100/slt_good_2.test)

_Mimic sqlite_
#### ✔ Ran 11033 tests as sqlite

* 100% was OK

Time: 27690ms

---- ---- ---- ---- ---- ---- ----
### 88/622 [`./test/index/delete/100/slt_good_3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/delete/100/slt_good_3.test)

_Mimic sqlite_
#### ✔ Ran 10942 tests as sqlite

* 100% was OK

Time: 27376ms

---- ---- ---- ---- ---- ---- ----
### 89/622 [`./test/index/delete/1000/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/delete/1000/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 11924 tests as sqlite

* 100% was OK

Time: 27693ms

---- ---- ---- ---- ---- ---- ----
### 90/622 [`./test/index/delete/1000/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/delete/1000/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 11838 tests as sqlite

* 100% was OK

Time: 28653ms

---- ---- ---- ---- ---- ---- ----
### 91/622 [`./test/index/delete/10000/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/delete/10000/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 20347 tests as sqlite

* 100% was OK

Time: 50353ms

---- ---- ---- ---- ---- ---- ----
### 92/622 [`./test/index/in/10/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/in/10/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 10035 tests as sqlite

* 100% was OK

Time: 124108ms

---- ---- ---- ---- ---- ---- ----
### 93/622 [`./test/index/in/10/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/in/10/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 10036 tests as sqlite

* 100% was OK

Time: 140564ms

---- ---- ---- ---- ---- ---- ----
### 94/622 [`./test/index/in/10/slt_good_2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/in/10/slt_good_2.test)

_Mimic sqlite_
#### ✔ Ran 10035 tests as sqlite

* 100% was OK

Time: 117488ms

---- ---- ---- ---- ---- ---- ----
### 95/622 [`./test/index/in/10/slt_good_3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/in/10/slt_good_3.test)

_Mimic sqlite_
#### ✔ Ran 10037 tests as sqlite

* 100% was OK

Time: 104272ms

---- ---- ---- ---- ---- ---- ----
### 96/622 [`./test/index/in/10/slt_good_4.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/in/10/slt_good_4.test)

_Mimic sqlite_
#### ✔ Ran 10038 tests as sqlite

* 100% was OK

Time: 128981ms

---- ---- ---- ---- ---- ---- ----
### 97/622 [`./test/index/in/10/slt_good_5.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/in/10/slt_good_5.test)

_Mimic sqlite_
#### ✔ Ran 10038 tests as sqlite

* 100% was OK

Time: 140107ms

---- ---- ---- ---- ---- ---- ----
### 98/622 [`./test/index/in/100/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/in/100/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 10128 tests as sqlite

* 100% was OK

Time: 148292ms

---- ---- ---- ---- ---- ---- ----
### 99/622 [`./test/index/in/100/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/in/100/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 10127 tests as sqlite

* 100% was OK

Time: 142485ms

---- ---- ---- ---- ---- ---- ----
### 100/622 [`./test/index/in/100/slt_good_2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/in/100/slt_good_2.test)

_Mimic sqlite_
#### ✔ Ran 10128 tests as sqlite

* 100% was OK

Time: 114604ms

---- ---- ---- ---- ---- ---- ----
### 101/622 [`./test/index/in/100/slt_good_3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/in/100/slt_good_3.test)

_Mimic sqlite_
#### ✔ Ran 10126 tests as sqlite

* 100% was OK

Time: 168225ms

---- ---- ---- ---- ---- ---- ----
### 102/622 [`./test/index/in/100/slt_good_4.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/in/100/slt_good_4.test)

_Mimic sqlite_
#### ✔ Ran 10127 tests as sqlite

* 100% was OK

Time: 178301ms

---- ---- ---- ---- ---- ---- ----
### 103/622 [`./test/index/in/1000/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/in/1000/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 11028 tests as sqlite

* 100% was OK

Time: 159150ms

---- ---- ---- ---- ---- ---- ----
### 104/622 [`./test/index/in/1000/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/in/1000/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 11024 tests as sqlite

* 100% was OK

Time: 163380ms

---- ---- ---- ---- ---- ---- ----
### 105/622 [`./test/index/orderby/10/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 10053 tests as sqlite

* 100% was OK

Time: 53470ms

---- ---- ---- ---- ---- ---- ----
### 106/622 [`./test/index/orderby/10/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 10054 tests as sqlite

* 100% was OK

Time: 54876ms

---- ---- ---- ---- ---- ---- ----
### 107/622 [`./test/index/orderby/10/slt_good_10.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_10.test)

_Mimic sqlite_
#### ✔ Ran 10051 tests as sqlite

* 100% was OK

Time: 61775ms

---- ---- ---- ---- ---- ---- ----
### 108/622 [`./test/index/orderby/10/slt_good_11.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_11.test)

_Mimic sqlite_
#### ✔ Ran 10053 tests as sqlite

* 100% was OK

Time: 54209ms

---- ---- ---- ---- ---- ---- ----
### 109/622 [`./test/index/orderby/10/slt_good_12.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_12.test)

_Mimic sqlite_
#### ✔ Ran 10053 tests as sqlite

* 100% was OK

Time: 57823ms

---- ---- ---- ---- ---- ---- ----
### 110/622 [`./test/index/orderby/10/slt_good_13.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_13.test)

_Mimic sqlite_
#### ✔ Ran 10051 tests as sqlite

* 100% was OK

Time: 63318ms

---- ---- ---- ---- ---- ---- ----
### 111/622 [`./test/index/orderby/10/slt_good_14.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_14.test)

_Mimic sqlite_
#### ✔ Ran 10053 tests as sqlite

* 100% was OK

Time: 51655ms

---- ---- ---- ---- ---- ---- ----
### 112/622 [`./test/index/orderby/10/slt_good_15.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_15.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 74976ms

---- ---- ---- ---- ---- ---- ----
### 113/622 [`./test/index/orderby/10/slt_good_16.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_16.test)

_Mimic sqlite_
#### ✔ Ran 10050 tests as sqlite

* 100% was OK

Time: 65591ms

---- ---- ---- ---- ---- ---- ----
### 114/622 [`./test/index/orderby/10/slt_good_17.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_17.test)

_Mimic sqlite_
#### ✔ Ran 10054 tests as sqlite

* 100% was OK

Time: 72601ms

---- ---- ---- ---- ---- ---- ----
### 115/622 [`./test/index/orderby/10/slt_good_18.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_18.test)

_Mimic sqlite_
#### ✔ Ran 10053 tests as sqlite

* 100% was OK

Time: 54359ms

---- ---- ---- ---- ---- ---- ----
### 116/622 [`./test/index/orderby/10/slt_good_19.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_19.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 36116ms

---- ---- ---- ---- ---- ---- ----
### 117/622 [`./test/index/orderby/10/slt_good_2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_2.test)

_Mimic sqlite_
#### ✔ Ran 10051 tests as sqlite

* 100% was OK

Time: 44441ms

---- ---- ---- ---- ---- ---- ----
### 118/622 [`./test/index/orderby/10/slt_good_20.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_20.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 47601ms

---- ---- ---- ---- ---- ---- ----
### 119/622 [`./test/index/orderby/10/slt_good_21.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_21.test)

_Mimic sqlite_
#### ✔ Ran 10053 tests as sqlite

* 100% was OK

Time: 65503ms

---- ---- ---- ---- ---- ---- ----
### 120/622 [`./test/index/orderby/10/slt_good_22.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_22.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 58107ms

---- ---- ---- ---- ---- ---- ----
### 121/622 [`./test/index/orderby/10/slt_good_23.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_23.test)

_Mimic sqlite_
#### ✔ Ran 10053 tests as sqlite

* 100% was OK

Time: 49348ms

---- ---- ---- ---- ---- ---- ----
### 122/622 [`./test/index/orderby/10/slt_good_24.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_24.test)

_Mimic sqlite_
#### ✔ Ran 10051 tests as sqlite

* 100% was OK

Time: 49244ms

---- ---- ---- ---- ---- ---- ----
### 123/622 [`./test/index/orderby/10/slt_good_25.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_25.test)

_Mimic sqlite_
#### ✔ Ran 10053 tests as sqlite

* 100% was OK

Time: 47159ms

---- ---- ---- ---- ---- ---- ----
### 124/622 [`./test/index/orderby/10/slt_good_3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_3.test)

_Mimic sqlite_
#### ✔ Ran 10051 tests as sqlite

* 100% was OK

Time: 62746ms

---- ---- ---- ---- ---- ---- ----
### 125/622 [`./test/index/orderby/10/slt_good_4.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_4.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 44921ms

---- ---- ---- ---- ---- ---- ----
### 126/622 [`./test/index/orderby/10/slt_good_5.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_5.test)

_Mimic sqlite_
#### ✔ Ran 10051 tests as sqlite

* 100% was OK

Time: 50666ms

---- ---- ---- ---- ---- ---- ----
### 127/622 [`./test/index/orderby/10/slt_good_6.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_6.test)

_Mimic sqlite_
#### ✔ Ran 10048 tests as sqlite

* 100% was OK

Time: 58224ms

---- ---- ---- ---- ---- ---- ----
### 128/622 [`./test/index/orderby/10/slt_good_7.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_7.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 53872ms

---- ---- ---- ---- ---- ---- ----
### 129/622 [`./test/index/orderby/10/slt_good_8.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_8.test)

_Mimic sqlite_
#### ✔ Ran 10051 tests as sqlite

* 100% was OK

Time: 48910ms

---- ---- ---- ---- ---- ---- ----
### 130/622 [`./test/index/orderby/10/slt_good_9.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/10/slt_good_9.test)

_Mimic sqlite_
#### ✔ Ran 10050 tests as sqlite

* 100% was OK

Time: 42210ms

---- ---- ---- ---- ---- ---- ----
### 131/622 [`./test/index/orderby/100/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/100/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 10141 tests as sqlite

* 100% was OK

Time: 49089ms

---- ---- ---- ---- ---- ---- ----
### 132/622 [`./test/index/orderby/100/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/100/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 10140 tests as sqlite

* 100% was OK

Time: 45221ms

---- ---- ---- ---- ---- ---- ----
### 133/622 [`./test/index/orderby/100/slt_good_2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/100/slt_good_2.test)

_Mimic sqlite_
#### ✔ Ran 10142 tests as sqlite

* 100% was OK

Time: 50191ms

---- ---- ---- ---- ---- ---- ----
### 134/622 [`./test/index/orderby/100/slt_good_3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/100/slt_good_3.test)

_Mimic sqlite_
#### ✔ Ran 10140 tests as sqlite

* 100% was OK

Time: 50734ms

---- ---- ---- ---- ---- ---- ----
### 135/622 [`./test/index/orderby/1000/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby/1000/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 11043 tests as sqlite

* 100% was OK

Time: 55741ms

---- ---- ---- ---- ---- ---- ----
### 136/622 [`./test/index/orderby_nosort/10/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 10053 tests as sqlite

* 100% was OK

Time: 50437ms

---- ---- ---- ---- ---- ---- ----
### 137/622 [`./test/index/orderby_nosort/10/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 10051 tests as sqlite

* 100% was OK

Time: 62349ms

---- ---- ---- ---- ---- ---- ----
### 138/622 [`./test/index/orderby_nosort/10/slt_good_10.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_10.test)

_Mimic sqlite_
#### ✔ Ran 10051 tests as sqlite

* 100% was OK

Time: 68555ms

---- ---- ---- ---- ---- ---- ----
### 139/622 [`./test/index/orderby_nosort/10/slt_good_11.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_11.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 50950ms

---- ---- ---- ---- ---- ---- ----
### 140/622 [`./test/index/orderby_nosort/10/slt_good_12.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_12.test)

_Mimic sqlite_
#### ✔ Ran 10051 tests as sqlite

* 100% was OK

Time: 48985ms

---- ---- ---- ---- ---- ---- ----
### 141/622 [`./test/index/orderby_nosort/10/slt_good_13.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_13.test)

_Mimic sqlite_
#### ✔ Ran 10053 tests as sqlite

* 100% was OK

Time: 57297ms

---- ---- ---- ---- ---- ---- ----
### 142/622 [`./test/index/orderby_nosort/10/slt_good_14.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_14.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 46440ms

---- ---- ---- ---- ---- ---- ----
### 143/622 [`./test/index/orderby_nosort/10/slt_good_15.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_15.test)

_Mimic sqlite_
#### ✔ Ran 10054 tests as sqlite

* 100% was OK

Time: 56861ms

---- ---- ---- ---- ---- ---- ----
### 144/622 [`./test/index/orderby_nosort/10/slt_good_16.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_16.test)

_Mimic sqlite_
#### ✔ Ran 10053 tests as sqlite

* 100% was OK

Time: 59037ms

---- ---- ---- ---- ---- ---- ----
### 145/622 [`./test/index/orderby_nosort/10/slt_good_17.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_17.test)

_Mimic sqlite_
#### ✔ Ran 10050 tests as sqlite

* 100% was OK

Time: 58073ms

---- ---- ---- ---- ---- ---- ----
### 146/622 [`./test/index/orderby_nosort/10/slt_good_18.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_18.test)

_Mimic sqlite_
#### ✔ Ran 10050 tests as sqlite

* 100% was OK

Time: 66702ms

---- ---- ---- ---- ---- ---- ----
### 147/622 [`./test/index/orderby_nosort/10/slt_good_19.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_19.test)

_Mimic sqlite_
#### ✔ Ran 10053 tests as sqlite

* 100% was OK

Time: 66181ms

---- ---- ---- ---- ---- ---- ----
### 148/622 [`./test/index/orderby_nosort/10/slt_good_2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_2.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 52597ms

---- ---- ---- ---- ---- ---- ----
### 149/622 [`./test/index/orderby_nosort/10/slt_good_20.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_20.test)

_Mimic sqlite_
#### ✔ Ran 10053 tests as sqlite

* 100% was OK

Time: 57149ms

---- ---- ---- ---- ---- ---- ----
### 150/622 [`./test/index/orderby_nosort/10/slt_good_21.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_21.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 74024ms

---- ---- ---- ---- ---- ---- ----
### 151/622 [`./test/index/orderby_nosort/10/slt_good_22.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_22.test)

_Mimic sqlite_
#### ✔ Ran 10054 tests as sqlite

* 100% was OK

Time: 51757ms

---- ---- ---- ---- ---- ---- ----
### 152/622 [`./test/index/orderby_nosort/10/slt_good_23.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_23.test)

_Mimic sqlite_
#### ✔ Ran 10051 tests as sqlite

* 100% was OK

Time: 51493ms

---- ---- ---- ---- ---- ---- ----
### 153/622 [`./test/index/orderby_nosort/10/slt_good_24.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_24.test)

_Mimic sqlite_
#### ✔ Ran 10054 tests as sqlite

* 100% was OK

Time: 62897ms

---- ---- ---- ---- ---- ---- ----
### 154/622 [`./test/index/orderby_nosort/10/slt_good_25.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_25.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 74433ms

---- ---- ---- ---- ---- ---- ----
### 155/622 [`./test/index/orderby_nosort/10/slt_good_26.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_26.test)

_Mimic sqlite_
#### ✔ Ran 10053 tests as sqlite

* 100% was OK

Time: 74286ms

---- ---- ---- ---- ---- ---- ----
### 156/622 [`./test/index/orderby_nosort/10/slt_good_27.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_27.test)

_Mimic sqlite_
#### ✔ Ran 10051 tests as sqlite

* 100% was OK

Time: 79301ms

---- ---- ---- ---- ---- ---- ----
### 157/622 [`./test/index/orderby_nosort/10/slt_good_28.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_28.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 80417ms

---- ---- ---- ---- ---- ---- ----
### 158/622 [`./test/index/orderby_nosort/10/slt_good_29.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_29.test)

_Mimic sqlite_
#### ✔ Ran 10050 tests as sqlite

* 100% was OK

Time: 83036ms

---- ---- ---- ---- ---- ---- ----
### 159/622 [`./test/index/orderby_nosort/10/slt_good_3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_3.test)

_Mimic sqlite_
#### ✔ Ran 10051 tests as sqlite

* 100% was OK

Time: 82485ms

---- ---- ---- ---- ---- ---- ----
### 160/622 [`./test/index/orderby_nosort/10/slt_good_30.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_30.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 86668ms

---- ---- ---- ---- ---- ---- ----
### 161/622 [`./test/index/orderby_nosort/10/slt_good_31.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_31.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 85799ms

---- ---- ---- ---- ---- ---- ----
### 162/622 [`./test/index/orderby_nosort/10/slt_good_32.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_32.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 75063ms

---- ---- ---- ---- ---- ---- ----
### 163/622 [`./test/index/orderby_nosort/10/slt_good_33.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_33.test)

_Mimic sqlite_
#### ✔ Ran 10050 tests as sqlite

* 100% was OK

Time: 80852ms

---- ---- ---- ---- ---- ---- ----
### 164/622 [`./test/index/orderby_nosort/10/slt_good_34.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_34.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 76552ms

---- ---- ---- ---- ---- ---- ----
### 165/622 [`./test/index/orderby_nosort/10/slt_good_35.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_35.test)

_Mimic sqlite_
#### ✔ Ran 10049 tests as sqlite

* 100% was OK

Time: 81259ms

---- ---- ---- ---- ---- ---- ----
### 166/622 [`./test/index/orderby_nosort/10/slt_good_36.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_36.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 102201ms

---- ---- ---- ---- ---- ---- ----
### 167/622 [`./test/index/orderby_nosort/10/slt_good_37.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_37.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 82127ms

---- ---- ---- ---- ---- ---- ----
### 168/622 [`./test/index/orderby_nosort/10/slt_good_38.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_38.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 86111ms

---- ---- ---- ---- ---- ---- ----
### 169/622 [`./test/index/orderby_nosort/10/slt_good_39.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_39.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 97345ms

---- ---- ---- ---- ---- ---- ----
### 170/622 [`./test/index/orderby_nosort/10/slt_good_4.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_4.test)

_Mimic sqlite_
#### ✔ Ran 10053 tests as sqlite

* 100% was OK

Time: 101538ms

---- ---- ---- ---- ---- ---- ----
### 171/622 [`./test/index/orderby_nosort/10/slt_good_5.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_5.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 79381ms

---- ---- ---- ---- ---- ---- ----
### 172/622 [`./test/index/orderby_nosort/10/slt_good_6.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_6.test)

_Mimic sqlite_
#### ✔ Ran 10053 tests as sqlite

* 100% was OK

Time: 66383ms

---- ---- ---- ---- ---- ---- ----
### 173/622 [`./test/index/orderby_nosort/10/slt_good_7.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_7.test)

_Mimic sqlite_
#### ✔ Ran 10052 tests as sqlite

* 100% was OK

Time: 80274ms

---- ---- ---- ---- ---- ---- ----
### 174/622 [`./test/index/orderby_nosort/10/slt_good_8.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_8.test)

_Mimic sqlite_
#### ✔ Ran 10054 tests as sqlite

* 100% was OK

Time: 110723ms

---- ---- ---- ---- ---- ---- ----
### 175/622 [`./test/index/orderby_nosort/10/slt_good_9.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/10/slt_good_9.test)

_Mimic sqlite_
#### ✔ Ran 10055 tests as sqlite

* 100% was OK

Time: 79536ms

---- ---- ---- ---- ---- ---- ----
### 176/622 [`./test/index/orderby_nosort/100/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/100/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 10149 tests as sqlite

* 100% was OK

Time: 103431ms

---- ---- ---- ---- ---- ---- ----
### 177/622 [`./test/index/orderby_nosort/100/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/100/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 10141 tests as sqlite

* 100% was OK

Time: 96484ms

---- ---- ---- ---- ---- ---- ----
### 178/622 [`./test/index/orderby_nosort/100/slt_good_2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/100/slt_good_2.test)

_Mimic sqlite_
#### ✔ Ran 10142 tests as sqlite

* 100% was OK

Time: 81251ms

---- ---- ---- ---- ---- ---- ----
### 179/622 [`./test/index/orderby_nosort/100/slt_good_3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/100/slt_good_3.test)

_Mimic sqlite_
#### ✔ Ran 10143 tests as sqlite

* 100% was OK

Time: 66974ms

---- ---- ---- ---- ---- ---- ----
### 180/622 [`./test/index/orderby_nosort/100/slt_good_4.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/100/slt_good_4.test)

_Mimic sqlite_
#### ✔ Ran 10141 tests as sqlite

* 100% was OK

Time: 75188ms

---- ---- ---- ---- ---- ---- ----
### 181/622 [`./test/index/orderby_nosort/100/slt_good_5.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/100/slt_good_5.test)

_Mimic sqlite_
#### ✔ Ran 10142 tests as sqlite

* 100% was OK

Time: 68467ms

---- ---- ---- ---- ---- ---- ----
### 182/622 [`./test/index/orderby_nosort/100/slt_good_6.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/100/slt_good_6.test)

_Mimic sqlite_
#### ✔ Ran 10144 tests as sqlite

* 100% was OK

Time: 90661ms

---- ---- ---- ---- ---- ---- ----
### 183/622 [`./test/index/orderby_nosort/1000/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/1000/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 11040 tests as sqlite

* 100% was OK

Time: 78290ms

---- ---- ---- ---- ---- ---- ----
### 184/622 [`./test/index/orderby_nosort/1000/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/orderby_nosort/1000/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 11043 tests as sqlite

* 100% was OK

Time: 68873ms

---- ---- ---- ---- ---- ---- ----
### 185/622 [`./test/index/random/10/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/10/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 10032 tests as sqlite

* 100% was OK

Time: 43879ms

---- ---- ---- ---- ---- ---- ----
### 186/622 [`./test/index/random/10/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/10/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 10034 tests as sqlite

* 100% was OK

Time: 41132ms

---- ---- ---- ---- ---- ---- ----
### 187/622 [`./test/index/random/10/slt_good_10.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/10/slt_good_10.test)

_Mimic sqlite_
#### ✔ Ran 10034 tests as sqlite

* 100% was OK

Time: 49457ms

---- ---- ---- ---- ---- ---- ----
### 188/622 [`./test/index/random/10/slt_good_11.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/10/slt_good_11.test)

_Mimic sqlite_
#### ✔ Ran 10031 tests as sqlite

* 100% was OK

Time: 46485ms

---- ---- ---- ---- ---- ---- ----
### 189/622 [`./test/index/random/10/slt_good_12.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/10/slt_good_12.test)

_Mimic sqlite_
#### ✔ Ran 10033 tests as sqlite

* 100% was OK

Time: 48445ms

---- ---- ---- ---- ---- ---- ----
### 190/622 [`./test/index/random/10/slt_good_13.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/10/slt_good_13.test)

_Mimic sqlite_
#### ✔ Ran 10032 tests as sqlite

* 100% was OK

Time: 47046ms

---- ---- ---- ---- ---- ---- ----
### 191/622 [`./test/index/random/10/slt_good_14.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/10/slt_good_14.test)

_Mimic sqlite_
#### ✔ Ran 10031 tests as sqlite

* 100% was OK

Time: 50337ms

---- ---- ---- ---- ---- ---- ----
### 192/622 [`./test/index/random/10/slt_good_2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/10/slt_good_2.test)

_Mimic sqlite_
#### ✔ Ran 10034 tests as sqlite

* 100% was OK

Time: 47044ms

---- ---- ---- ---- ---- ---- ----
### 193/622 [`./test/index/random/10/slt_good_3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/10/slt_good_3.test)

_Mimic sqlite_
#### ✔ Ran 10034 tests as sqlite

* 100% was OK

Time: 44821ms

---- ---- ---- ---- ---- ---- ----
### 194/622 [`./test/index/random/10/slt_good_4.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/10/slt_good_4.test)

_Mimic sqlite_
#### ✔ Ran 10033 tests as sqlite

* 100% was OK

Time: 50038ms

---- ---- ---- ---- ---- ---- ----
### 195/622 [`./test/index/random/10/slt_good_5.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/10/slt_good_5.test)

_Mimic sqlite_
#### ✔ Ran 10034 tests as sqlite

* 100% was OK

Time: 49335ms

---- ---- ---- ---- ---- ---- ----
### 196/622 [`./test/index/random/10/slt_good_6.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/10/slt_good_6.test)

_Mimic sqlite_
#### ✔ Ran 10034 tests as sqlite

* 100% was OK

Time: 40598ms

---- ---- ---- ---- ---- ---- ----
### 197/622 [`./test/index/random/10/slt_good_7.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/10/slt_good_7.test)

_Mimic sqlite_
#### ✔ Ran 10031 tests as sqlite

* 100% was OK

Time: 48024ms

---- ---- ---- ---- ---- ---- ----
### 198/622 [`./test/index/random/10/slt_good_8.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/10/slt_good_8.test)

_Mimic sqlite_
#### ✔ Ran 10032 tests as sqlite

* 100% was OK

Time: 45766ms

---- ---- ---- ---- ---- ---- ----
### 199/622 [`./test/index/random/10/slt_good_9.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/10/slt_good_9.test)

_Mimic sqlite_
#### ✔ Ran 10031 tests as sqlite

* 100% was OK

Time: 48033ms

---- ---- ---- ---- ---- ---- ----
### 200/622 [`./test/index/random/100/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/100/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 10123 tests as sqlite

* 100% was OK

Time: 42682ms

---- ---- ---- ---- ---- ---- ----
### 201/622 [`./test/index/random/100/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/100/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 10123 tests as sqlite

* 100% was OK

Time: 42080ms

---- ---- ---- ---- ---- ---- ----
### 202/622 [`./test/index/random/1000/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/1000/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 2067 tests as sqlite

* 100% was OK

Time: 9265ms

---- ---- ---- ---- ---- ---- ----
### 203/622 [`./test/index/random/1000/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/1000/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 1056 tests as sqlite

* 100% was OK

Time: 4814ms

---- ---- ---- ---- ---- ---- ----
### 204/622 [`./test/index/random/1000/slt_good_2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/1000/slt_good_2.test)

_Mimic sqlite_
#### ✔ Ran 1027 tests as sqlite

* 100% was OK

Time: 4829ms

---- ---- ---- ---- ---- ---- ----
### 205/622 [`./test/index/random/1000/slt_good_3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/1000/slt_good_3.test)

_Mimic sqlite_
#### ✔ Ran 1033 tests as sqlite

* 100% was OK

Time: 4649ms

---- ---- ---- ---- ---- ---- ----
### 206/622 [`./test/index/random/1000/slt_good_4.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/1000/slt_good_4.test)

_Mimic sqlite_
#### ✔ Ran 1032 tests as sqlite

* 100% was OK

Time: 4290ms

---- ---- ---- ---- ---- ---- ----
### 207/622 [`./test/index/random/1000/slt_good_5.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/1000/slt_good_5.test)

_Mimic sqlite_
#### ✔ Ran 4333 tests as sqlite

* 100% was OK

Time: 19468ms

---- ---- ---- ---- ---- ---- ----
### 208/622 [`./test/index/random/1000/slt_good_6.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/1000/slt_good_6.test)

_Mimic sqlite_
#### ✔ Ran 11021 tests as sqlite

* 100% was OK

Time: 53043ms

---- ---- ---- ---- ---- ---- ----
### 209/622 [`./test/index/random/1000/slt_good_7.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/1000/slt_good_7.test)

_Mimic sqlite_
#### ✔ Ran 11022 tests as sqlite

* 100% was OK

Time: 48295ms

---- ---- ---- ---- ---- ---- ----
### 210/622 [`./test/index/random/1000/slt_good_8.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/random/1000/slt_good_8.test)

_Mimic sqlite_
#### ✔ Ran 4841 tests as sqlite

* 100% was OK

Time: 20207ms

---- ---- ---- ---- ---- ---- ----
### 211/622 [`./test/index/view/10/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/view/10/slt_good_0.test)

_Mimic sqlite_
Time: 4ms

---- ---- ---- ---- ---- ---- ----
### 212/622 [`./test/index/view/10/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/view/10/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 7135 tests as sqlite

* 100% was OK

Time: 34582ms

---- ---- ---- ---- ---- ---- ----
### 213/622 [`./test/index/view/10/slt_good_2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/view/10/slt_good_2.test)

_Mimic sqlite_
#### ✔ Ran 7333 tests as sqlite

* 100% was OK

Time: 37937ms

---- ---- ---- ---- ---- ---- ----
### 214/622 [`./test/index/view/10/slt_good_3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/view/10/slt_good_3.test)

_Mimic sqlite_
#### ✔ Ran 6734 tests as sqlite

* 100% was OK

Time: 38667ms

---- ---- ---- ---- ---- ---- ----
### 215/622 [`./test/index/view/10/slt_good_4.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/view/10/slt_good_4.test)

_Mimic sqlite_
#### ✔ Ran 7536 tests as sqlite

* 100% was OK

Time: 45266ms

---- ---- ---- ---- ---- ---- ----
### 216/622 [`./test/index/view/10/slt_good_5.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/view/10/slt_good_5.test)

_Mimic sqlite_
#### ✔ Ran 7237 tests as sqlite

* 100% was OK

Time: 28250ms

---- ---- ---- ---- ---- ---- ----
### 217/622 [`./test/index/view/10/slt_good_6.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/view/10/slt_good_6.test)

_Mimic sqlite_
#### ✔ Ran 6135 tests as sqlite

* 100% was OK

Time: 29155ms

---- ---- ---- ---- ---- ---- ----
### 218/622 [`./test/index/view/10/slt_good_7.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/view/10/slt_good_7.test)

_Mimic sqlite_
#### ✔ Ran 6936 tests as sqlite

* 100% was OK

Time: 30374ms

---- ---- ---- ---- ---- ---- ----
### 219/622 [`./test/index/view/100/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/view/100/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 7726 tests as sqlite

* 100% was OK

Time: 17867ms

---- ---- ---- ---- ---- ---- ----
### 220/622 [`./test/index/view/100/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/view/100/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 7122 tests as sqlite

* 100% was OK

Time: 17941ms

---- ---- ---- ---- ---- ---- ----
### 221/622 [`./test/index/view/100/slt_good_2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/view/100/slt_good_2.test)

_Mimic sqlite_
#### ✔ Ran 7323 tests as sqlite

* 100% was OK

Time: 18090ms

---- ---- ---- ---- ---- ---- ----
### 222/622 [`./test/index/view/100/slt_good_3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/view/100/slt_good_3.test)

_Mimic sqlite_
#### ✔ Ran 6322 tests as sqlite

* 100% was OK

Time: 19079ms

---- ---- ---- ---- ---- ---- ----
### 223/622 [`./test/index/view/100/slt_good_4.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/view/100/slt_good_4.test)

_Mimic sqlite_
#### ✔ Ran 6923 tests as sqlite

* 100% was OK

Time: 19448ms

---- ---- ---- ---- ---- ---- ----
### 224/622 [`./test/index/view/100/slt_good_5.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/view/100/slt_good_5.test)

_Mimic sqlite_
#### ✔ Ran 7322 tests as sqlite

* 100% was OK

Time: 17459ms

---- ---- ---- ---- ---- ---- ----
### 225/622 [`./test/index/view/1000/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/view/1000/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 6823 tests as sqlite

* 100% was OK

Time: 18541ms

---- ---- ---- ---- ---- ---- ----
### 226/622 [`./test/index/view/10000/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/view/10000/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 10622 tests as sqlite

* 100% was OK

Time: 21223ms

---- ---- ---- ---- ---- ---- ----
### 227/622 [`./test/random/aggregates/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_0.test)

_Mimic sqlite_

```sql
SELECT DISTINCT * FROM tab2 cor0 JOIN tab2 cor1 ON + ( 90 ) IS NOT NULL, tab0 AS cor2

Parse error on line 1:
...+ ( 90 ) IS NOT NULL, tab0 AS cor2
-----------------------^
Expecting 'EOF', 'WITH', 'RPAR', 'PIVOT', 'UNPIVOT', 'IN', 'LIKE', 'ORDER', 'ARROW', 'CARET', 'EQ', 'WHERE', 'SLASH', 'EXCLAMATION', 'MODULO', 'GT', 'LT', 'NOT', 'UNION', 'INTERSECT', 'EXCEPT', 'AND', 'OR', 'PLUS', 'STAR', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'GROUP', 'LIMIT', 'OFFSET', 'END', 'ELSE', 'REGEXP', 'NOT_LIKE', 'MINUS', 'GE', 'LE', 'EQEQ', 'EQEQEQ', 'NE', 'NEEQEQ', 'NEEQEQEQ', 'BETWEEN', 'NOT_BETWEEN', 'IS', 'DOUBLECOLON', 'SEMICOLON', 'GO', got 'COMMA'
```

#### ☓ Ran 10012 tests as sqlite

* 1 failed
* 99% was OK

Time: 21530ms

---- ---- ---- ---- ---- ---- ----
### 228/622 [`./test/random/aggregates/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 21185ms

---- ---- ---- ---- ---- ---- ----
### 229/622 [`./test/random/aggregates/slt_good_10.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_10.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 21977ms

---- ---- ---- ---- ---- ---- ----
### 230/622 [`./test/random/aggregates/slt_good_100.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_100.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 2 failed
* 99% was OK

Time: 22199ms

---- ---- ---- ---- ---- ---- ----
### 231/622 [`./test/random/aggregates/slt_good_101.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_101.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 21836ms

---- ---- ---- ---- ---- ---- ----
### 232/622 [`./test/random/aggregates/slt_good_102.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_102.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 21741ms

---- ---- ---- ---- ---- ---- ----
### 233/622 [`./test/random/aggregates/slt_good_103.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_103.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 22013ms

---- ---- ---- ---- ---- ---- ----
### 234/622 [`./test/random/aggregates/slt_good_104.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_104.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 22259ms

---- ---- ---- ---- ---- ---- ----
### 235/622 [`./test/random/aggregates/slt_good_105.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_105.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 24444ms

---- ---- ---- ---- ---- ---- ----
### 236/622 [`./test/random/aggregates/slt_good_106.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_106.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 24561ms

---- ---- ---- ---- ---- ---- ----
### 237/622 [`./test/random/aggregates/slt_good_107.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_107.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 28413ms

---- ---- ---- ---- ---- ---- ----
### 238/622 [`./test/random/aggregates/slt_good_108.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_108.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 33798ms

---- ---- ---- ---- ---- ---- ----
### 239/622 [`./test/random/aggregates/slt_good_109.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_109.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 35121ms

---- ---- ---- ---- ---- ---- ----
### 240/622 [`./test/random/aggregates/slt_good_11.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_11.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 31085ms

---- ---- ---- ---- ---- ---- ----
### 241/622 [`./test/random/aggregates/slt_good_110.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_110.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 35794ms

---- ---- ---- ---- ---- ---- ----
### 242/622 [`./test/random/aggregates/slt_good_111.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_111.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 55052ms

---- ---- ---- ---- ---- ---- ----
### 243/622 [`./test/random/aggregates/slt_good_112.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_112.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 53576ms

---- ---- ---- ---- ---- ---- ----
### 244/622 [`./test/random/aggregates/slt_good_113.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_113.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 44097ms

---- ---- ---- ---- ---- ---- ----
### 245/622 [`./test/random/aggregates/slt_good_114.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_114.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 52869ms

---- ---- ---- ---- ---- ---- ----
### 246/622 [`./test/random/aggregates/slt_good_115.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_115.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 1 failed
* 99% was OK

Time: 52785ms

---- ---- ---- ---- ---- ---- ----
### 247/622 [`./test/random/aggregates/slt_good_116.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_116.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 41605ms

---- ---- ---- ---- ---- ---- ----
### 248/622 [`./test/random/aggregates/slt_good_117.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_117.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 36806ms

---- ---- ---- ---- ---- ---- ----
### 249/622 [`./test/random/aggregates/slt_good_118.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_118.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 31205ms

---- ---- ---- ---- ---- ---- ----
### 250/622 [`./test/random/aggregates/slt_good_119.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_119.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 1 failed
* 99% was OK

Time: 35610ms

---- ---- ---- ---- ---- ---- ----
### 251/622 [`./test/random/aggregates/slt_good_12.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_12.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 34116ms

---- ---- ---- ---- ---- ---- ----
### 252/622 [`./test/random/aggregates/slt_good_120.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_120.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 1 failed
* 99% was OK

Time: 32695ms

---- ---- ---- ---- ---- ---- ----
### 253/622 [`./test/random/aggregates/slt_good_121.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_121.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 33402ms

---- ---- ---- ---- ---- ---- ----
### 254/622 [`./test/random/aggregates/slt_good_122.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_122.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 32621ms

---- ---- ---- ---- ---- ---- ----
### 255/622 [`./test/random/aggregates/slt_good_123.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_123.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 32417ms

---- ---- ---- ---- ---- ---- ----
### 256/622 [`./test/random/aggregates/slt_good_124.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_124.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 34253ms

---- ---- ---- ---- ---- ---- ----
### 257/622 [`./test/random/aggregates/slt_good_125.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_125.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 32929ms

---- ---- ---- ---- ---- ---- ----
### 258/622 [`./test/random/aggregates/slt_good_126.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_126.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 1 failed
* 99% was OK

Time: 33727ms

---- ---- ---- ---- ---- ---- ----
### 259/622 [`./test/random/aggregates/slt_good_127.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_127.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 33750ms

---- ---- ---- ---- ---- ---- ----
### 260/622 [`./test/random/aggregates/slt_good_128.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_128.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 44597ms

---- ---- ---- ---- ---- ---- ----
### 261/622 [`./test/random/aggregates/slt_good_129.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_129.test)

_Mimic sqlite_
#### ✔ Ran 802 tests as sqlite

* 100% was OK

Time: 3692ms

---- ---- ---- ---- ---- ---- ----
### 262/622 [`./test/random/aggregates/slt_good_13.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_13.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 1 failed
* 99% was OK

Time: 45150ms

---- ---- ---- ---- ---- ---- ----
### 263/622 [`./test/random/aggregates/slt_good_14.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_14.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 1 failed
* 99% was OK

Time: 34916ms

---- ---- ---- ---- ---- ---- ----
### 264/622 [`./test/random/aggregates/slt_good_15.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_15.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 33722ms

---- ---- ---- ---- ---- ---- ----
### 265/622 [`./test/random/aggregates/slt_good_16.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_16.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 32745ms

---- ---- ---- ---- ---- ---- ----
### 266/622 [`./test/random/aggregates/slt_good_17.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_17.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 37483ms

---- ---- ---- ---- ---- ---- ----
### 267/622 [`./test/random/aggregates/slt_good_18.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_18.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 2 failed
* 99% was OK

Time: 33370ms

---- ---- ---- ---- ---- ---- ----
### 268/622 [`./test/random/aggregates/slt_good_19.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_19.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 33830ms

---- ---- ---- ---- ---- ---- ----
### 269/622 [`./test/random/aggregates/slt_good_2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_2.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 34131ms

---- ---- ---- ---- ---- ---- ----
### 270/622 [`./test/random/aggregates/slt_good_20.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_20.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 33408ms

---- ---- ---- ---- ---- ---- ----
### 271/622 [`./test/random/aggregates/slt_good_21.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_21.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 33230ms

---- ---- ---- ---- ---- ---- ----
### 272/622 [`./test/random/aggregates/slt_good_22.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_22.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 31493ms

---- ---- ---- ---- ---- ---- ----
### 273/622 [`./test/random/aggregates/slt_good_23.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_23.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 1 failed
* 99% was OK

Time: 32237ms

---- ---- ---- ---- ---- ---- ----
### 274/622 [`./test/random/aggregates/slt_good_24.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_24.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30566ms

---- ---- ---- ---- ---- ---- ----
### 275/622 [`./test/random/aggregates/slt_good_25.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_25.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 32344ms

---- ---- ---- ---- ---- ---- ----
### 276/622 [`./test/random/aggregates/slt_good_26.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_26.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 35346ms

---- ---- ---- ---- ---- ---- ----
### 277/622 [`./test/random/aggregates/slt_good_27.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_27.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 27101ms

---- ---- ---- ---- ---- ---- ----
### 278/622 [`./test/random/aggregates/slt_good_28.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_28.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 32732ms

---- ---- ---- ---- ---- ---- ----
### 279/622 [`./test/random/aggregates/slt_good_29.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_29.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30466ms

---- ---- ---- ---- ---- ---- ----
### 280/622 [`./test/random/aggregates/slt_good_3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_3.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 33114ms

---- ---- ---- ---- ---- ---- ----
### 281/622 [`./test/random/aggregates/slt_good_30.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_30.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 34359ms

---- ---- ---- ---- ---- ---- ----
### 282/622 [`./test/random/aggregates/slt_good_31.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_31.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 32293ms

---- ---- ---- ---- ---- ---- ----
### 283/622 [`./test/random/aggregates/slt_good_32.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_32.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 1 failed
* 99% was OK

Time: 28876ms

---- ---- ---- ---- ---- ---- ----
### 284/622 [`./test/random/aggregates/slt_good_33.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_33.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 1 failed
* 99% was OK

Time: 30211ms

---- ---- ---- ---- ---- ---- ----
### 285/622 [`./test/random/aggregates/slt_good_34.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_34.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 32069ms

---- ---- ---- ---- ---- ---- ----
### 286/622 [`./test/random/aggregates/slt_good_35.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_35.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30245ms

---- ---- ---- ---- ---- ---- ----
### 287/622 [`./test/random/aggregates/slt_good_36.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_36.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 25108ms

---- ---- ---- ---- ---- ---- ----
### 288/622 [`./test/random/aggregates/slt_good_37.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_37.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 18956ms

---- ---- ---- ---- ---- ---- ----
### 289/622 [`./test/random/aggregates/slt_good_38.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_38.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 20802ms

---- ---- ---- ---- ---- ---- ----
### 290/622 [`./test/random/aggregates/slt_good_39.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_39.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 19681ms

---- ---- ---- ---- ---- ---- ----
### 291/622 [`./test/random/aggregates/slt_good_4.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_4.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 18698ms

---- ---- ---- ---- ---- ---- ----
### 292/622 [`./test/random/aggregates/slt_good_40.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_40.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 16949ms

---- ---- ---- ---- ---- ---- ----
### 293/622 [`./test/random/aggregates/slt_good_41.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_41.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 24805ms

---- ---- ---- ---- ---- ---- ----
### 294/622 [`./test/random/aggregates/slt_good_42.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_42.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 23476ms

---- ---- ---- ---- ---- ---- ----
### 295/622 [`./test/random/aggregates/slt_good_43.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_43.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 25934ms

---- ---- ---- ---- ---- ---- ----
### 296/622 [`./test/random/aggregates/slt_good_44.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_44.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 25560ms

---- ---- ---- ---- ---- ---- ----
### 297/622 [`./test/random/aggregates/slt_good_45.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_45.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 23157ms

---- ---- ---- ---- ---- ---- ----
### 298/622 [`./test/random/aggregates/slt_good_46.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_46.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 25329ms

---- ---- ---- ---- ---- ---- ----
### 299/622 [`./test/random/aggregates/slt_good_47.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_47.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 1 failed
* 99% was OK

Time: 26716ms

---- ---- ---- ---- ---- ---- ----
### 300/622 [`./test/random/aggregates/slt_good_48.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_48.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 22355ms

---- ---- ---- ---- ---- ---- ----
### 301/622 [`./test/random/aggregates/slt_good_49.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_49.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 23724ms

---- ---- ---- ---- ---- ---- ----
### 302/622 [`./test/random/aggregates/slt_good_5.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_5.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 2 failed
* 99% was OK

Time: 27411ms

---- ---- ---- ---- ---- ---- ----
### 303/622 [`./test/random/aggregates/slt_good_50.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_50.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 27663ms

---- ---- ---- ---- ---- ---- ----
### 304/622 [`./test/random/aggregates/slt_good_51.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_51.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 24089ms

---- ---- ---- ---- ---- ---- ----
### 305/622 [`./test/random/aggregates/slt_good_52.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_52.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 25271ms

---- ---- ---- ---- ---- ---- ----
### 306/622 [`./test/random/aggregates/slt_good_53.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_53.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 26085ms

---- ---- ---- ---- ---- ---- ----
### 307/622 [`./test/random/aggregates/slt_good_54.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_54.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 23790ms

---- ---- ---- ---- ---- ---- ----
### 308/622 [`./test/random/aggregates/slt_good_55.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_55.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 21721ms

---- ---- ---- ---- ---- ---- ----
### 309/622 [`./test/random/aggregates/slt_good_56.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_56.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 26440ms

---- ---- ---- ---- ---- ---- ----
### 310/622 [`./test/random/aggregates/slt_good_57.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_57.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 28022ms

---- ---- ---- ---- ---- ---- ----
### 311/622 [`./test/random/aggregates/slt_good_58.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_58.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 25107ms

---- ---- ---- ---- ---- ---- ----
### 312/622 [`./test/random/aggregates/slt_good_59.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_59.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 1 failed
* 99% was OK

Time: 16626ms

---- ---- ---- ---- ---- ---- ----
### 313/622 [`./test/random/aggregates/slt_good_6.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_6.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 25159ms

---- ---- ---- ---- ---- ---- ----
### 314/622 [`./test/random/aggregates/slt_good_60.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_60.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 23261ms

---- ---- ---- ---- ---- ---- ----
### 315/622 [`./test/random/aggregates/slt_good_61.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_61.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 23211ms

---- ---- ---- ---- ---- ---- ----
### 316/622 [`./test/random/aggregates/slt_good_62.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_62.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 23604ms

---- ---- ---- ---- ---- ---- ----
### 317/622 [`./test/random/aggregates/slt_good_63.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_63.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 1 failed
* 99% was OK

Time: 21946ms

---- ---- ---- ---- ---- ---- ----
### 318/622 [`./test/random/aggregates/slt_good_64.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_64.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 1 failed
* 99% was OK

Time: 22844ms

---- ---- ---- ---- ---- ---- ----
### 319/622 [`./test/random/aggregates/slt_good_65.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_65.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 1 failed
* 99% was OK

Time: 22497ms

---- ---- ---- ---- ---- ---- ----
### 320/622 [`./test/random/aggregates/slt_good_66.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_66.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 24053ms

---- ---- ---- ---- ---- ---- ----
### 321/622 [`./test/random/aggregates/slt_good_67.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_67.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 31692ms

---- ---- ---- ---- ---- ---- ----
### 322/622 [`./test/random/aggregates/slt_good_68.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_68.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 34161ms

---- ---- ---- ---- ---- ---- ----
### 323/622 [`./test/random/aggregates/slt_good_69.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_69.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 40442ms

---- ---- ---- ---- ---- ---- ----
### 324/622 [`./test/random/aggregates/slt_good_7.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_7.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 1 failed
* 99% was OK

Time: 42496ms

---- ---- ---- ---- ---- ---- ----
### 325/622 [`./test/random/aggregates/slt_good_70.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_70.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 42905ms

---- ---- ---- ---- ---- ---- ----
### 326/622 [`./test/random/aggregates/slt_good_71.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_71.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 52410ms

---- ---- ---- ---- ---- ---- ----
### 327/622 [`./test/random/aggregates/slt_good_72.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_72.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 1 failed
* 99% was OK

Time: 44273ms

---- ---- ---- ---- ---- ---- ----
### 328/622 [`./test/random/aggregates/slt_good_73.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_73.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 45937ms

---- ---- ---- ---- ---- ---- ----
### 329/622 [`./test/random/aggregates/slt_good_74.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_74.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 40958ms

---- ---- ---- ---- ---- ---- ----
### 330/622 [`./test/random/aggregates/slt_good_75.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_75.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 43099ms

---- ---- ---- ---- ---- ---- ----
### 331/622 [`./test/random/aggregates/slt_good_76.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_76.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 45791ms

---- ---- ---- ---- ---- ---- ----
### 332/622 [`./test/random/aggregates/slt_good_77.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_77.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 42123ms

---- ---- ---- ---- ---- ---- ----
### 333/622 [`./test/random/aggregates/slt_good_78.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_78.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 44496ms

---- ---- ---- ---- ---- ---- ----
### 334/622 [`./test/random/aggregates/slt_good_79.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_79.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 45225ms

---- ---- ---- ---- ---- ---- ----
### 335/622 [`./test/random/aggregates/slt_good_8.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_8.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 46018ms

---- ---- ---- ---- ---- ---- ----
### 336/622 [`./test/random/aggregates/slt_good_80.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_80.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 47453ms

---- ---- ---- ---- ---- ---- ----
### 337/622 [`./test/random/aggregates/slt_good_81.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_81.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 1 failed
* 99% was OK

Time: 50099ms

---- ---- ---- ---- ---- ---- ----
### 338/622 [`./test/random/aggregates/slt_good_82.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_82.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 49591ms

---- ---- ---- ---- ---- ---- ----
### 339/622 [`./test/random/aggregates/slt_good_83.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_83.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 47133ms

---- ---- ---- ---- ---- ---- ----
### 340/622 [`./test/random/aggregates/slt_good_84.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_84.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 40450ms

---- ---- ---- ---- ---- ---- ----
### 341/622 [`./test/random/aggregates/slt_good_85.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_85.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 41848ms

---- ---- ---- ---- ---- ---- ----
### 342/622 [`./test/random/aggregates/slt_good_86.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_86.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 44495ms

---- ---- ---- ---- ---- ---- ----
### 343/622 [`./test/random/aggregates/slt_good_87.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_87.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 48322ms

---- ---- ---- ---- ---- ---- ----
### 344/622 [`./test/random/aggregates/slt_good_88.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_88.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 39713ms

---- ---- ---- ---- ---- ---- ----
### 345/622 [`./test/random/aggregates/slt_good_89.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_89.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 45466ms

---- ---- ---- ---- ---- ---- ----
### 346/622 [`./test/random/aggregates/slt_good_9.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_9.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 44159ms

---- ---- ---- ---- ---- ---- ----
### 347/622 [`./test/random/aggregates/slt_good_90.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_90.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 40865ms

---- ---- ---- ---- ---- ---- ----
### 348/622 [`./test/random/aggregates/slt_good_91.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_91.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 43910ms

---- ---- ---- ---- ---- ---- ----
### 349/622 [`./test/random/aggregates/slt_good_92.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_92.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 44487ms

---- ---- ---- ---- ---- ---- ----
### 350/622 [`./test/random/aggregates/slt_good_93.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_93.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 50313ms

---- ---- ---- ---- ---- ---- ----
### 351/622 [`./test/random/aggregates/slt_good_94.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_94.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 1 failed
* 99% was OK

Time: 38812ms

---- ---- ---- ---- ---- ---- ----
### 352/622 [`./test/random/aggregates/slt_good_95.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_95.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 33244ms

---- ---- ---- ---- ---- ---- ----
### 353/622 [`./test/random/aggregates/slt_good_96.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_96.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 34245ms

---- ---- ---- ---- ---- ---- ----
### 354/622 [`./test/random/aggregates/slt_good_97.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_97.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 24087ms

---- ---- ---- ---- ---- ---- ----
### 355/622 [`./test/random/aggregates/slt_good_98.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_98.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 1 failed
* 99% was OK

Time: 19812ms

---- ---- ---- ---- ---- ---- ----
### 356/622 [`./test/random/aggregates/slt_good_99.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/aggregates/slt_good_99.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 19453ms

---- ---- ---- ---- ---- ---- ----
### 357/622 [`./test/random/expr/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 25973ms

---- ---- ---- ---- ---- ---- ----
### 358/622 [`./test/random/expr/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 17021ms

---- ---- ---- ---- ---- ---- ----
### 359/622 [`./test/random/expr/slt_good_10.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_10.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 42885ms

---- ---- ---- ---- ---- ---- ----
### 360/622 [`./test/random/expr/slt_good_100.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_100.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 50075ms

---- ---- ---- ---- ---- ---- ----
### 361/622 [`./test/random/expr/slt_good_101.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_101.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 48316ms

---- ---- ---- ---- ---- ---- ----
### 362/622 [`./test/random/expr/slt_good_102.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_102.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 45040ms

---- ---- ---- ---- ---- ---- ----
### 363/622 [`./test/random/expr/slt_good_103.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_103.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 40493ms

---- ---- ---- ---- ---- ---- ----
### 364/622 [`./test/random/expr/slt_good_104.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_104.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 34248ms

---- ---- ---- ---- ---- ---- ----
### 365/622 [`./test/random/expr/slt_good_105.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_105.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 31474ms

---- ---- ---- ---- ---- ---- ----
### 366/622 [`./test/random/expr/slt_good_106.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_106.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 26705ms

---- ---- ---- ---- ---- ---- ----
### 367/622 [`./test/random/expr/slt_good_107.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_107.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 41764ms

---- ---- ---- ---- ---- ---- ----
### 368/622 [`./test/random/expr/slt_good_108.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_108.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 33346ms

---- ---- ---- ---- ---- ---- ----
### 369/622 [`./test/random/expr/slt_good_109.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_109.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 34979ms

---- ---- ---- ---- ---- ---- ----
### 370/622 [`./test/random/expr/slt_good_11.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_11.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 45037ms

---- ---- ---- ---- ---- ---- ----
### 371/622 [`./test/random/expr/slt_good_110.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_110.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 31007ms

---- ---- ---- ---- ---- ---- ----
### 372/622 [`./test/random/expr/slt_good_111.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_111.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 37539ms

---- ---- ---- ---- ---- ---- ----
### 373/622 [`./test/random/expr/slt_good_112.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_112.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 41202ms

---- ---- ---- ---- ---- ---- ----
### 374/622 [`./test/random/expr/slt_good_113.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_113.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 37977ms

---- ---- ---- ---- ---- ---- ----
### 375/622 [`./test/random/expr/slt_good_114.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_114.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 28845ms

---- ---- ---- ---- ---- ---- ----
### 376/622 [`./test/random/expr/slt_good_115.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_115.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 25084ms

---- ---- ---- ---- ---- ---- ----
### 377/622 [`./test/random/expr/slt_good_116.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_116.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 41317ms

---- ---- ---- ---- ---- ---- ----
### 378/622 [`./test/random/expr/slt_good_117.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_117.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 37519ms

---- ---- ---- ---- ---- ---- ----
### 379/622 [`./test/random/expr/slt_good_118.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_118.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 38630ms

---- ---- ---- ---- ---- ---- ----
### 380/622 [`./test/random/expr/slt_good_119.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_119.test)

_Mimic sqlite_
#### ✔ Ran 8938 tests as sqlite

* 100% was OK

Time: 37852ms

---- ---- ---- ---- ---- ---- ----
### 381/622 [`./test/random/expr/slt_good_12.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_12.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 70422ms

---- ---- ---- ---- ---- ---- ----
### 382/622 [`./test/random/expr/slt_good_13.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_13.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 39766ms

---- ---- ---- ---- ---- ---- ----
### 383/622 [`./test/random/expr/slt_good_14.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_14.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 55334ms

---- ---- ---- ---- ---- ---- ----
### 384/622 [`./test/random/expr/slt_good_15.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_15.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 39639ms

---- ---- ---- ---- ---- ---- ----
### 385/622 [`./test/random/expr/slt_good_16.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_16.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 37499ms

---- ---- ---- ---- ---- ---- ----
### 386/622 [`./test/random/expr/slt_good_17.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_17.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 44400ms

---- ---- ---- ---- ---- ---- ----
### 387/622 [`./test/random/expr/slt_good_18.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_18.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 38657ms

---- ---- ---- ---- ---- ---- ----
### 388/622 [`./test/random/expr/slt_good_19.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_19.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 38713ms

---- ---- ---- ---- ---- ---- ----
### 389/622 [`./test/random/expr/slt_good_2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_2.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 32079ms

---- ---- ---- ---- ---- ---- ----
### 390/622 [`./test/random/expr/slt_good_20.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_20.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 38649ms

---- ---- ---- ---- ---- ---- ----
### 391/622 [`./test/random/expr/slt_good_21.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_21.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 31540ms

---- ---- ---- ---- ---- ---- ----
### 392/622 [`./test/random/expr/slt_good_22.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_22.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 40355ms

---- ---- ---- ---- ---- ---- ----
### 393/622 [`./test/random/expr/slt_good_23.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_23.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 38111ms

---- ---- ---- ---- ---- ---- ----
### 394/622 [`./test/random/expr/slt_good_24.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_24.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 29317ms

---- ---- ---- ---- ---- ---- ----
### 395/622 [`./test/random/expr/slt_good_25.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_25.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 37934ms

---- ---- ---- ---- ---- ---- ----
### 396/622 [`./test/random/expr/slt_good_26.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_26.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 31641ms

---- ---- ---- ---- ---- ---- ----
### 397/622 [`./test/random/expr/slt_good_27.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_27.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 29069ms

---- ---- ---- ---- ---- ---- ----
### 398/622 [`./test/random/expr/slt_good_28.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_28.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 31528ms

---- ---- ---- ---- ---- ---- ----
### 399/622 [`./test/random/expr/slt_good_29.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_29.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 25727ms

---- ---- ---- ---- ---- ---- ----
### 400/622 [`./test/random/expr/slt_good_3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_3.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 31808ms

---- ---- ---- ---- ---- ---- ----
### 401/622 [`./test/random/expr/slt_good_30.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_30.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 27809ms

---- ---- ---- ---- ---- ---- ----
### 402/622 [`./test/random/expr/slt_good_31.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_31.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 29295ms

---- ---- ---- ---- ---- ---- ----
### 403/622 [`./test/random/expr/slt_good_32.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_32.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 21340ms

---- ---- ---- ---- ---- ---- ----
### 404/622 [`./test/random/expr/slt_good_33.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_33.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 29468ms

---- ---- ---- ---- ---- ---- ----
### 405/622 [`./test/random/expr/slt_good_34.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_34.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30234ms

---- ---- ---- ---- ---- ---- ----
### 406/622 [`./test/random/expr/slt_good_35.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_35.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30565ms

---- ---- ---- ---- ---- ---- ----
### 407/622 [`./test/random/expr/slt_good_36.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_36.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30628ms

---- ---- ---- ---- ---- ---- ----
### 408/622 [`./test/random/expr/slt_good_37.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_37.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30126ms

---- ---- ---- ---- ---- ---- ----
### 409/622 [`./test/random/expr/slt_good_38.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_38.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 31834ms

---- ---- ---- ---- ---- ---- ----
### 410/622 [`./test/random/expr/slt_good_39.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_39.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30298ms

---- ---- ---- ---- ---- ---- ----
### 411/622 [`./test/random/expr/slt_good_4.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_4.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 31782ms

---- ---- ---- ---- ---- ---- ----
### 412/622 [`./test/random/expr/slt_good_40.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_40.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30647ms

---- ---- ---- ---- ---- ---- ----
### 413/622 [`./test/random/expr/slt_good_41.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_41.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30503ms

---- ---- ---- ---- ---- ---- ----
### 414/622 [`./test/random/expr/slt_good_42.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_42.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 28859ms

---- ---- ---- ---- ---- ---- ----
### 415/622 [`./test/random/expr/slt_good_43.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_43.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 20384ms

---- ---- ---- ---- ---- ---- ----
### 416/622 [`./test/random/expr/slt_good_44.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_44.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 29832ms

---- ---- ---- ---- ---- ---- ----
### 417/622 [`./test/random/expr/slt_good_45.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_45.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 29644ms

---- ---- ---- ---- ---- ---- ----
### 418/622 [`./test/random/expr/slt_good_46.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_46.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 31523ms

---- ---- ---- ---- ---- ---- ----
### 419/622 [`./test/random/expr/slt_good_47.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_47.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30087ms

---- ---- ---- ---- ---- ---- ----
### 420/622 [`./test/random/expr/slt_good_48.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_48.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 35359ms

---- ---- ---- ---- ---- ---- ----
### 421/622 [`./test/random/expr/slt_good_49.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_49.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 29722ms

---- ---- ---- ---- ---- ---- ----
### 422/622 [`./test/random/expr/slt_good_5.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_5.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30820ms

---- ---- ---- ---- ---- ---- ----
### 423/622 [`./test/random/expr/slt_good_50.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_50.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 31643ms

---- ---- ---- ---- ---- ---- ----
### 424/622 [`./test/random/expr/slt_good_51.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_51.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 34890ms

---- ---- ---- ---- ---- ---- ----
### 425/622 [`./test/random/expr/slt_good_52.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_52.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 31876ms

---- ---- ---- ---- ---- ---- ----
### 426/622 [`./test/random/expr/slt_good_53.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_53.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30955ms

---- ---- ---- ---- ---- ---- ----
### 427/622 [`./test/random/expr/slt_good_54.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_54.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 20618ms

---- ---- ---- ---- ---- ---- ----
### 428/622 [`./test/random/expr/slt_good_55.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_55.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30183ms

---- ---- ---- ---- ---- ---- ----
### 429/622 [`./test/random/expr/slt_good_56.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_56.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 31370ms

---- ---- ---- ---- ---- ---- ----
### 430/622 [`./test/random/expr/slt_good_57.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_57.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30642ms

---- ---- ---- ---- ---- ---- ----
### 431/622 [`./test/random/expr/slt_good_58.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_58.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 31239ms

---- ---- ---- ---- ---- ---- ----
### 432/622 [`./test/random/expr/slt_good_59.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_59.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30117ms

---- ---- ---- ---- ---- ---- ----
### 433/622 [`./test/random/expr/slt_good_6.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_6.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 32251ms

---- ---- ---- ---- ---- ---- ----
### 434/622 [`./test/random/expr/slt_good_60.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_60.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 31743ms

---- ---- ---- ---- ---- ---- ----
### 435/622 [`./test/random/expr/slt_good_61.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_61.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 29641ms

---- ---- ---- ---- ---- ---- ----
### 436/622 [`./test/random/expr/slt_good_62.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_62.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30330ms

---- ---- ---- ---- ---- ---- ----
### 437/622 [`./test/random/expr/slt_good_63.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_63.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30168ms

---- ---- ---- ---- ---- ---- ----
### 438/622 [`./test/random/expr/slt_good_64.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_64.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30905ms

---- ---- ---- ---- ---- ---- ----
### 439/622 [`./test/random/expr/slt_good_65.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_65.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 21829ms

---- ---- ---- ---- ---- ---- ----
### 440/622 [`./test/random/expr/slt_good_66.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_66.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 33702ms

---- ---- ---- ---- ---- ---- ----
### 441/622 [`./test/random/expr/slt_good_67.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_67.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 24454ms

---- ---- ---- ---- ---- ---- ----
### 442/622 [`./test/random/expr/slt_good_68.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_68.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 22162ms

---- ---- ---- ---- ---- ---- ----
### 443/622 [`./test/random/expr/slt_good_69.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_69.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 22558ms

---- ---- ---- ---- ---- ---- ----
### 444/622 [`./test/random/expr/slt_good_7.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_7.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 23363ms

---- ---- ---- ---- ---- ---- ----
### 445/622 [`./test/random/expr/slt_good_70.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_70.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 29845ms

---- ---- ---- ---- ---- ---- ----
### 446/622 [`./test/random/expr/slt_good_71.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_71.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 27251ms

---- ---- ---- ---- ---- ---- ----
### 447/622 [`./test/random/expr/slt_good_72.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_72.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 22760ms

---- ---- ---- ---- ---- ---- ----
### 448/622 [`./test/random/expr/slt_good_73.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_73.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 28780ms

---- ---- ---- ---- ---- ---- ----
### 449/622 [`./test/random/expr/slt_good_74.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_74.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 27154ms

---- ---- ---- ---- ---- ---- ----
### 450/622 [`./test/random/expr/slt_good_75.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_75.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 24997ms

---- ---- ---- ---- ---- ---- ----
### 451/622 [`./test/random/expr/slt_good_76.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_76.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 19614ms

---- ---- ---- ---- ---- ---- ----
### 452/622 [`./test/random/expr/slt_good_77.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_77.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 29762ms

---- ---- ---- ---- ---- ---- ----
### 453/622 [`./test/random/expr/slt_good_78.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_78.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 28006ms

---- ---- ---- ---- ---- ---- ----
### 454/622 [`./test/random/expr/slt_good_79.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_79.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 38877ms

---- ---- ---- ---- ---- ---- ----
### 455/622 [`./test/random/expr/slt_good_8.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_8.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30957ms

---- ---- ---- ---- ---- ---- ----
### 456/622 [`./test/random/expr/slt_good_80.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_80.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30617ms

---- ---- ---- ---- ---- ---- ----
### 457/622 [`./test/random/expr/slt_good_81.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_81.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 38556ms

---- ---- ---- ---- ---- ---- ----
### 458/622 [`./test/random/expr/slt_good_82.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_82.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 37420ms

---- ---- ---- ---- ---- ---- ----
### 459/622 [`./test/random/expr/slt_good_83.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_83.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 36339ms

---- ---- ---- ---- ---- ---- ----
### 460/622 [`./test/random/expr/slt_good_84.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_84.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 36848ms

---- ---- ---- ---- ---- ---- ----
### 461/622 [`./test/random/expr/slt_good_85.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_85.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 36947ms

---- ---- ---- ---- ---- ---- ----
### 462/622 [`./test/random/expr/slt_good_86.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_86.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 34349ms

---- ---- ---- ---- ---- ---- ----
### 463/622 [`./test/random/expr/slt_good_87.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_87.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 27521ms

---- ---- ---- ---- ---- ---- ----
### 464/622 [`./test/random/expr/slt_good_88.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_88.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 35901ms

---- ---- ---- ---- ---- ---- ----
### 465/622 [`./test/random/expr/slt_good_89.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_89.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 34456ms

---- ---- ---- ---- ---- ---- ----
### 466/622 [`./test/random/expr/slt_good_9.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_9.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 35875ms

---- ---- ---- ---- ---- ---- ----
### 467/622 [`./test/random/expr/slt_good_90.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_90.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 34876ms

---- ---- ---- ---- ---- ---- ----
### 468/622 [`./test/random/expr/slt_good_91.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_91.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 37840ms

---- ---- ---- ---- ---- ---- ----
### 469/622 [`./test/random/expr/slt_good_92.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_92.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 37197ms

---- ---- ---- ---- ---- ---- ----
### 470/622 [`./test/random/expr/slt_good_93.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_93.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 36360ms

---- ---- ---- ---- ---- ---- ----
### 471/622 [`./test/random/expr/slt_good_94.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_94.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 34761ms

---- ---- ---- ---- ---- ---- ----
### 472/622 [`./test/random/expr/slt_good_95.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_95.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 35194ms

---- ---- ---- ---- ---- ---- ----
### 473/622 [`./test/random/expr/slt_good_96.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_96.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 36054ms

---- ---- ---- ---- ---- ---- ----
### 474/622 [`./test/random/expr/slt_good_97.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_97.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 35758ms

---- ---- ---- ---- ---- ---- ----
### 475/622 [`./test/random/expr/slt_good_98.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_98.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 25403ms

---- ---- ---- ---- ---- ---- ----
### 476/622 [`./test/random/expr/slt_good_99.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/expr/slt_good_99.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 36439ms

---- ---- ---- ---- ---- ---- ----
### 477/622 [`./test/random/groupby/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/groupby/slt_good_0.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 27379ms

---- ---- ---- ---- ---- ---- ----
### 478/622 [`./test/random/groupby/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/groupby/slt_good_1.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 28028ms

---- ---- ---- ---- ---- ---- ----
### 479/622 [`./test/random/groupby/slt_good_10.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/groupby/slt_good_10.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 28628ms

---- ---- ---- ---- ---- ---- ----
### 480/622 [`./test/random/groupby/slt_good_11.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/groupby/slt_good_11.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 35181ms

---- ---- ---- ---- ---- ---- ----
### 481/622 [`./test/random/groupby/slt_good_12.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/groupby/slt_good_12.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 35792ms

---- ---- ---- ---- ---- ---- ----
### 482/622 [`./test/random/groupby/slt_good_13.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/groupby/slt_good_13.test)

_Mimic sqlite_
#### ✔ Ran 3182 tests as sqlite

* 100% was OK

Time: 9760ms

---- ---- ---- ---- ---- ---- ----
### 483/622 [`./test/random/groupby/slt_good_2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/groupby/slt_good_2.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 28328ms

---- ---- ---- ---- ---- ---- ----
### 484/622 [`./test/random/groupby/slt_good_3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/groupby/slt_good_3.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 29304ms

---- ---- ---- ---- ---- ---- ----
### 485/622 [`./test/random/groupby/slt_good_4.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/groupby/slt_good_4.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 29994ms

---- ---- ---- ---- ---- ---- ----
### 486/622 [`./test/random/groupby/slt_good_5.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/groupby/slt_good_5.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 31146ms

---- ---- ---- ---- ---- ---- ----
### 487/622 [`./test/random/groupby/slt_good_6.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/groupby/slt_good_6.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 32860ms

---- ---- ---- ---- ---- ---- ----
### 488/622 [`./test/random/groupby/slt_good_7.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/groupby/slt_good_7.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 33862ms

---- ---- ---- ---- ---- ---- ----
### 489/622 [`./test/random/groupby/slt_good_8.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/groupby/slt_good_8.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 32575ms

---- ---- ---- ---- ---- ---- ----
### 490/622 [`./test/random/groupby/slt_good_9.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/groupby/slt_good_9.test)

_Mimic sqlite_
#### ✔ Ran 10012 tests as sqlite

* 100% was OK

Time: 30026ms

---- ---- ---- ---- ---- ---- ----
### 491/622 [`./test/random/select/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_0.test)

_Mimic sqlite_

```sql
SELECT ALL * FROM tab1 cor0 CROSS JOIN tab1, tab2 AS cor1

Parse error on line 1:
...cor0 CROSS JOIN tab1, tab2 AS cor1
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'WITH', 'AS', 'RPAR', 'PIVOT', 'UNPIVOT', 'ORDER', 'WHERE', 'UNION', 'INTERSECT', 'EXCEPT', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'LIMIT', 'OFFSET', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'COMMA'
```

#### ☓ Ran 10012 tests as sqlite

* 107 failed
* 98% was OK

Time: 25358ms

---- ---- ---- ---- ---- ---- ----
### 492/622 [`./test/random/select/slt_good_1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_1.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 99 failed
* 99% was OK

Time: 28446ms

---- ---- ---- ---- ---- ---- ----
### 493/622 [`./test/random/select/slt_good_10.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_10.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 82 failed
* 99% was OK

Time: 29767ms

---- ---- ---- ---- ---- ---- ----
### 494/622 [`./test/random/select/slt_good_100.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_100.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 80 failed
* 99% was OK

Time: 31128ms

---- ---- ---- ---- ---- ---- ----
### 495/622 [`./test/random/select/slt_good_101.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_101.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 72 failed
* 99% was OK

Time: 31207ms

---- ---- ---- ---- ---- ---- ----
### 496/622 [`./test/random/select/slt_good_102.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_102.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 58 failed
* 99% was OK

Time: 31436ms

---- ---- ---- ---- ---- ---- ----
### 497/622 [`./test/random/select/slt_good_103.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_103.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 50 failed
* 99% was OK

Time: 31109ms

---- ---- ---- ---- ---- ---- ----
### 498/622 [`./test/random/select/slt_good_104.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_104.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 63 failed
* 99% was OK

Time: 31490ms

---- ---- ---- ---- ---- ---- ----
### 499/622 [`./test/random/select/slt_good_105.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_105.test)

_Mimic sqlite_
#### ☓ Ran 10010 tests as sqlite

* 57 failed
* 99% was OK

Time: 30163ms

---- ---- ---- ---- ---- ---- ----
### 500/622 [`./test/random/select/slt_good_106.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_106.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 53 failed
* 99% was OK

Time: 29147ms

---- ---- ---- ---- ---- ---- ----
### 501/622 [`./test/random/select/slt_good_107.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_107.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 61 failed
* 99% was OK

Time: 30995ms

---- ---- ---- ---- ---- ---- ----
### 502/622 [`./test/random/select/slt_good_108.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_108.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 43 failed
* 99% was OK

Time: 29214ms

---- ---- ---- ---- ---- ---- ----
### 503/622 [`./test/random/select/slt_good_109.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_109.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 51 failed
* 99% was OK

Time: 29889ms

---- ---- ---- ---- ---- ---- ----
### 504/622 [`./test/random/select/slt_good_11.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_11.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 80 failed
* 99% was OK

Time: 27059ms

---- ---- ---- ---- ---- ---- ----
### 505/622 [`./test/random/select/slt_good_110.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_110.test)

_Mimic sqlite_
#### ☓ Ran 10009 tests as sqlite

* 69 failed
* 99% was OK

Time: 27389ms

---- ---- ---- ---- ---- ---- ----
### 506/622 [`./test/random/select/slt_good_111.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_111.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 59 failed
* 99% was OK

Time: 28307ms

---- ---- ---- ---- ---- ---- ----
### 507/622 [`./test/random/select/slt_good_112.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_112.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 52 failed
* 99% was OK

Time: 28306ms

---- ---- ---- ---- ---- ---- ----
### 508/622 [`./test/random/select/slt_good_113.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_113.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 60 failed
* 99% was OK

Time: 27080ms

---- ---- ---- ---- ---- ---- ----
### 509/622 [`./test/random/select/slt_good_114.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_114.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 58 failed
* 99% was OK

Time: 28684ms

---- ---- ---- ---- ---- ---- ----
### 510/622 [`./test/random/select/slt_good_115.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_115.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 61 failed
* 99% was OK

Time: 27875ms

---- ---- ---- ---- ---- ---- ----
### 511/622 [`./test/random/select/slt_good_116.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_116.test)

_Mimic sqlite_
#### ☓ Ran 10010 tests as sqlite

* 60 failed
* 99% was OK

Time: 27649ms

---- ---- ---- ---- ---- ---- ----
### 512/622 [`./test/random/select/slt_good_117.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_117.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 73 failed
* 99% was OK

Time: 26640ms

---- ---- ---- ---- ---- ---- ----
### 513/622 [`./test/random/select/slt_good_118.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_118.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 61 failed
* 99% was OK

Time: 28907ms

---- ---- ---- ---- ---- ---- ----
### 514/622 [`./test/random/select/slt_good_119.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_119.test)

_Mimic sqlite_
#### ☓ Ran 10010 tests as sqlite

* 46 failed
* 99% was OK

Time: 29570ms

---- ---- ---- ---- ---- ---- ----
### 515/622 [`./test/random/select/slt_good_12.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_12.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 66 failed
* 99% was OK

Time: 19082ms

---- ---- ---- ---- ---- ---- ----
### 516/622 [`./test/random/select/slt_good_120.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_120.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 47 failed
* 99% was OK

Time: 20315ms

---- ---- ---- ---- ---- ---- ----
### 517/622 [`./test/random/select/slt_good_121.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_121.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 44 failed
* 99% was OK

Time: 19911ms

---- ---- ---- ---- ---- ---- ----
### 518/622 [`./test/random/select/slt_good_122.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_122.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 62 failed
* 99% was OK

Time: 19896ms

---- ---- ---- ---- ---- ---- ----
### 519/622 [`./test/random/select/slt_good_123.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_123.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 47 failed
* 99% was OK

Time: 20035ms

---- ---- ---- ---- ---- ---- ----
### 520/622 [`./test/random/select/slt_good_124.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_124.test)

_Mimic sqlite_
#### ☓ Ran 2865 tests as sqlite

* 16 failed
* 99% was OK

Time: 5777ms

---- ---- ---- ---- ---- ---- ----
### 521/622 [`./test/random/select/slt_good_125.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_125.test)

_Mimic sqlite_
#### ✔ Ran 12 tests as sqlite

* 100% was OK

Time: 24ms

---- ---- ---- ---- ---- ---- ----
### 522/622 [`./test/random/select/slt_good_126.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_126.test)

_Mimic sqlite_
#### ✔ Ran 12 tests as sqlite

* 100% was OK

Time: 29ms

---- ---- ---- ---- ---- ---- ----
### 523/622 [`./test/random/select/slt_good_13.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_13.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 89 failed
* 99% was OK

Time: 18877ms

---- ---- ---- ---- ---- ---- ----
### 524/622 [`./test/random/select/slt_good_14.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_14.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 85 failed
* 99% was OK

Time: 18898ms

---- ---- ---- ---- ---- ---- ----
### 525/622 [`./test/random/select/slt_good_15.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_15.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 78 failed
* 99% was OK

Time: 19096ms

---- ---- ---- ---- ---- ---- ----
### 526/622 [`./test/random/select/slt_good_16.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_16.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 95 failed
* 99% was OK

Time: 18749ms

---- ---- ---- ---- ---- ---- ----
### 527/622 [`./test/random/select/slt_good_17.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_17.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 87 failed
* 99% was OK

Time: 20112ms

---- ---- ---- ---- ---- ---- ----
### 528/622 [`./test/random/select/slt_good_18.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_18.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 72 failed
* 99% was OK

Time: 19915ms

---- ---- ---- ---- ---- ---- ----
### 529/622 [`./test/random/select/slt_good_19.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_19.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 77 failed
* 99% was OK

Time: 19160ms

---- ---- ---- ---- ---- ---- ----
### 530/622 [`./test/random/select/slt_good_2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_2.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 88 failed
* 99% was OK

Time: 21475ms

---- ---- ---- ---- ---- ---- ----
### 531/622 [`./test/random/select/slt_good_20.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_20.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 59 failed
* 99% was OK

Time: 19974ms

---- ---- ---- ---- ---- ---- ----
### 532/622 [`./test/random/select/slt_good_21.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_21.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 68 failed
* 99% was OK

Time: 23540ms

---- ---- ---- ---- ---- ---- ----
### 533/622 [`./test/random/select/slt_good_22.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_22.test)

_Mimic sqlite_
#### ☓ Ran 10010 tests as sqlite

* 65 failed
* 99% was OK

Time: 20530ms

---- ---- ---- ---- ---- ---- ----
### 534/622 [`./test/random/select/slt_good_23.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_23.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 76 failed
* 99% was OK

Time: 21490ms

---- ---- ---- ---- ---- ---- ----
### 535/622 [`./test/random/select/slt_good_24.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_24.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 72 failed
* 99% was OK

Time: 24578ms

---- ---- ---- ---- ---- ---- ----
### 536/622 [`./test/random/select/slt_good_25.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_25.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 64 failed
* 99% was OK

Time: 24606ms

---- ---- ---- ---- ---- ---- ----
### 537/622 [`./test/random/select/slt_good_26.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_26.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 71 failed
* 99% was OK

Time: 25699ms

---- ---- ---- ---- ---- ---- ----
### 538/622 [`./test/random/select/slt_good_27.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_27.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 55 failed
* 99% was OK

Time: 21859ms

---- ---- ---- ---- ---- ---- ----
### 539/622 [`./test/random/select/slt_good_28.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_28.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 66 failed
* 99% was OK

Time: 21602ms

---- ---- ---- ---- ---- ---- ----
### 540/622 [`./test/random/select/slt_good_29.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_29.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 71 failed
* 99% was OK

Time: 21685ms

---- ---- ---- ---- ---- ---- ----
### 541/622 [`./test/random/select/slt_good_3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_3.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 70 failed
* 99% was OK

Time: 20955ms

---- ---- ---- ---- ---- ---- ----
### 542/622 [`./test/random/select/slt_good_30.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_30.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 65 failed
* 99% was OK

Time: 19982ms

---- ---- ---- ---- ---- ---- ----
### 543/622 [`./test/random/select/slt_good_31.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_31.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 57 failed
* 99% was OK

Time: 21104ms

---- ---- ---- ---- ---- ---- ----
### 544/622 [`./test/random/select/slt_good_32.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_32.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 61 failed
* 99% was OK

Time: 21311ms

---- ---- ---- ---- ---- ---- ----
### 545/622 [`./test/random/select/slt_good_33.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_33.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 70 failed
* 99% was OK

Time: 22048ms

---- ---- ---- ---- ---- ---- ----
### 546/622 [`./test/random/select/slt_good_34.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_34.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 61 failed
* 99% was OK

Time: 21201ms

---- ---- ---- ---- ---- ---- ----
### 547/622 [`./test/random/select/slt_good_35.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_35.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 60 failed
* 99% was OK

Time: 20682ms

---- ---- ---- ---- ---- ---- ----
### 548/622 [`./test/random/select/slt_good_36.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_36.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 70 failed
* 99% was OK

Time: 20320ms

---- ---- ---- ---- ---- ---- ----
### 549/622 [`./test/random/select/slt_good_37.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_37.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 75 failed
* 99% was OK

Time: 20332ms

---- ---- ---- ---- ---- ---- ----
### 550/622 [`./test/random/select/slt_good_38.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_38.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 67 failed
* 99% was OK

Time: 19603ms

---- ---- ---- ---- ---- ---- ----
### 551/622 [`./test/random/select/slt_good_39.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_39.test)

_Mimic sqlite_
#### ☓ Ran 10010 tests as sqlite

* 63 failed
* 99% was OK

Time: 21656ms

---- ---- ---- ---- ---- ---- ----
### 552/622 [`./test/random/select/slt_good_4.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_4.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 88 failed
* 99% was OK

Time: 19927ms

---- ---- ---- ---- ---- ---- ----
### 553/622 [`./test/random/select/slt_good_40.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_40.test)

_Mimic sqlite_
#### ☓ Ran 10010 tests as sqlite

* 73 failed
* 99% was OK

Time: 20410ms

---- ---- ---- ---- ---- ---- ----
### 554/622 [`./test/random/select/slt_good_41.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_41.test)

_Mimic sqlite_
#### ☓ Ran 10010 tests as sqlite

* 58 failed
* 99% was OK

Time: 20011ms

---- ---- ---- ---- ---- ---- ----
### 555/622 [`./test/random/select/slt_good_42.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_42.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 59 failed
* 99% was OK

Time: 19541ms

---- ---- ---- ---- ---- ---- ----
### 556/622 [`./test/random/select/slt_good_43.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_43.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 69 failed
* 99% was OK

Time: 22049ms

---- ---- ---- ---- ---- ---- ----
### 557/622 [`./test/random/select/slt_good_44.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_44.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 65 failed
* 99% was OK

Time: 20278ms

---- ---- ---- ---- ---- ---- ----
### 558/622 [`./test/random/select/slt_good_45.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_45.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 58 failed
* 99% was OK

Time: 21758ms

---- ---- ---- ---- ---- ---- ----
### 559/622 [`./test/random/select/slt_good_46.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_46.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 62 failed
* 99% was OK

Time: 28133ms

---- ---- ---- ---- ---- ---- ----
### 560/622 [`./test/random/select/slt_good_47.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_47.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 61 failed
* 99% was OK

Time: 28463ms

---- ---- ---- ---- ---- ---- ----
### 561/622 [`./test/random/select/slt_good_48.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_48.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 59 failed
* 99% was OK

Time: 31477ms

---- ---- ---- ---- ---- ---- ----
### 562/622 [`./test/random/select/slt_good_49.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_49.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 66 failed
* 99% was OK

Time: 21573ms

---- ---- ---- ---- ---- ---- ----
### 563/622 [`./test/random/select/slt_good_5.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_5.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 85 failed
* 99% was OK

Time: 23228ms

---- ---- ---- ---- ---- ---- ----
### 564/622 [`./test/random/select/slt_good_50.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_50.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 58 failed
* 99% was OK

Time: 21636ms

---- ---- ---- ---- ---- ---- ----
### 565/622 [`./test/random/select/slt_good_51.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_51.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 69 failed
* 99% was OK

Time: 24601ms

---- ---- ---- ---- ---- ---- ----
### 566/622 [`./test/random/select/slt_good_52.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_52.test)

_Mimic sqlite_
#### ☓ Ran 10010 tests as sqlite

* 70 failed
* 99% was OK

Time: 27536ms

---- ---- ---- ---- ---- ---- ----
### 567/622 [`./test/random/select/slt_good_53.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_53.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 51 failed
* 99% was OK

Time: 25391ms

---- ---- ---- ---- ---- ---- ----
### 568/622 [`./test/random/select/slt_good_54.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_54.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 76 failed
* 99% was OK

Time: 24717ms

---- ---- ---- ---- ---- ---- ----
### 569/622 [`./test/random/select/slt_good_55.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_55.test)

_Mimic sqlite_
#### ☓ Ran 10009 tests as sqlite

* 58 failed
* 99% was OK

Time: 23269ms

---- ---- ---- ---- ---- ---- ----
### 570/622 [`./test/random/select/slt_good_56.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_56.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 53 failed
* 99% was OK

Time: 28380ms

---- ---- ---- ---- ---- ---- ----
### 571/622 [`./test/random/select/slt_good_57.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_57.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 61 failed
* 99% was OK

Time: 21747ms

---- ---- ---- ---- ---- ---- ----
### 572/622 [`./test/random/select/slt_good_58.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_58.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 65 failed
* 99% was OK

Time: 21987ms

---- ---- ---- ---- ---- ---- ----
### 573/622 [`./test/random/select/slt_good_59.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_59.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 53 failed
* 99% was OK

Time: 26725ms

---- ---- ---- ---- ---- ---- ----
### 574/622 [`./test/random/select/slt_good_6.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_6.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 86 failed
* 99% was OK

Time: 15750ms

---- ---- ---- ---- ---- ---- ----
### 575/622 [`./test/random/select/slt_good_60.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_60.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 67 failed
* 99% was OK

Time: 16392ms

---- ---- ---- ---- ---- ---- ----
### 576/622 [`./test/random/select/slt_good_61.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_61.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 67 failed
* 99% was OK

Time: 15994ms

---- ---- ---- ---- ---- ---- ----
### 577/622 [`./test/random/select/slt_good_62.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_62.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 59 failed
* 99% was OK

Time: 16271ms

---- ---- ---- ---- ---- ---- ----
### 578/622 [`./test/random/select/slt_good_63.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_63.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 51 failed
* 99% was OK

Time: 15978ms

---- ---- ---- ---- ---- ---- ----
### 579/622 [`./test/random/select/slt_good_64.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_64.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 60 failed
* 99% was OK

Time: 15288ms

---- ---- ---- ---- ---- ---- ----
### 580/622 [`./test/random/select/slt_good_65.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_65.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 54 failed
* 99% was OK

Time: 16225ms

---- ---- ---- ---- ---- ---- ----
### 581/622 [`./test/random/select/slt_good_66.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_66.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 54 failed
* 99% was OK

Time: 22972ms

---- ---- ---- ---- ---- ---- ----
### 582/622 [`./test/random/select/slt_good_67.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_67.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 67 failed
* 99% was OK

Time: 22444ms

---- ---- ---- ---- ---- ---- ----
### 583/622 [`./test/random/select/slt_good_68.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_68.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 62 failed
* 99% was OK

Time: 21540ms

---- ---- ---- ---- ---- ---- ----
### 584/622 [`./test/random/select/slt_good_69.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_69.test)

_Mimic sqlite_
#### ☓ Ran 10010 tests as sqlite

* 54 failed
* 99% was OK

Time: 21035ms

---- ---- ---- ---- ---- ---- ----
### 585/622 [`./test/random/select/slt_good_7.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_7.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 95 failed
* 99% was OK

Time: 20185ms

---- ---- ---- ---- ---- ---- ----
### 586/622 [`./test/random/select/slt_good_70.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_70.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 68 failed
* 99% was OK

Time: 21171ms

---- ---- ---- ---- ---- ---- ----
### 587/622 [`./test/random/select/slt_good_71.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_71.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 60 failed
* 99% was OK

Time: 21063ms

---- ---- ---- ---- ---- ---- ----
### 588/622 [`./test/random/select/slt_good_72.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_72.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 68 failed
* 99% was OK

Time: 21162ms

---- ---- ---- ---- ---- ---- ----
### 589/622 [`./test/random/select/slt_good_73.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_73.test)

_Mimic sqlite_
#### ☓ Ran 10010 tests as sqlite

* 56 failed
* 99% was OK

Time: 20983ms

---- ---- ---- ---- ---- ---- ----
### 590/622 [`./test/random/select/slt_good_74.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_74.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 66 failed
* 99% was OK

Time: 20575ms

---- ---- ---- ---- ---- ---- ----
### 591/622 [`./test/random/select/slt_good_75.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_75.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 63 failed
* 99% was OK

Time: 22211ms

---- ---- ---- ---- ---- ---- ----
### 592/622 [`./test/random/select/slt_good_76.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_76.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 62 failed
* 99% was OK

Time: 22346ms

---- ---- ---- ---- ---- ---- ----
### 593/622 [`./test/random/select/slt_good_77.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_77.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 54 failed
* 99% was OK

Time: 21579ms

---- ---- ---- ---- ---- ---- ----
### 594/622 [`./test/random/select/slt_good_78.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_78.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 69 failed
* 99% was OK

Time: 22530ms

---- ---- ---- ---- ---- ---- ----
### 595/622 [`./test/random/select/slt_good_79.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_79.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 70 failed
* 99% was OK

Time: 24855ms

---- ---- ---- ---- ---- ---- ----
### 596/622 [`./test/random/select/slt_good_8.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_8.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 84 failed
* 99% was OK

Time: 21217ms

---- ---- ---- ---- ---- ---- ----
### 597/622 [`./test/random/select/slt_good_80.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_80.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 51 failed
* 99% was OK

Time: 20246ms

---- ---- ---- ---- ---- ---- ----
### 598/622 [`./test/random/select/slt_good_81.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_81.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 58 failed
* 99% was OK

Time: 20762ms

---- ---- ---- ---- ---- ---- ----
### 599/622 [`./test/random/select/slt_good_82.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_82.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 61 failed
* 99% was OK

Time: 21966ms

---- ---- ---- ---- ---- ---- ----
### 600/622 [`./test/random/select/slt_good_83.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_83.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 50 failed
* 99% was OK

Time: 20872ms

---- ---- ---- ---- ---- ---- ----
### 601/622 [`./test/random/select/slt_good_84.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_84.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 58 failed
* 99% was OK

Time: 20333ms

---- ---- ---- ---- ---- ---- ----
### 602/622 [`./test/random/select/slt_good_85.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_85.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 64 failed
* 99% was OK

Time: 20513ms

---- ---- ---- ---- ---- ---- ----
### 603/622 [`./test/random/select/slt_good_86.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_86.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 62 failed
* 99% was OK

Time: 21939ms

---- ---- ---- ---- ---- ---- ----
### 604/622 [`./test/random/select/slt_good_87.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_87.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 66 failed
* 99% was OK

Time: 22671ms

---- ---- ---- ---- ---- ---- ----
### 605/622 [`./test/random/select/slt_good_88.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_88.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 49 failed
* 99% was OK

Time: 21303ms

---- ---- ---- ---- ---- ---- ----
### 606/622 [`./test/random/select/slt_good_89.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_89.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 39 failed
* 99% was OK

Time: 21418ms

---- ---- ---- ---- ---- ---- ----
### 607/622 [`./test/random/select/slt_good_9.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_9.test)

_Mimic sqlite_
#### ☓ Ran 10010 tests as sqlite

* 89 failed
* 99% was OK

Time: 19984ms

---- ---- ---- ---- ---- ---- ----
### 608/622 [`./test/random/select/slt_good_90.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_90.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 64 failed
* 99% was OK

Time: 19589ms

---- ---- ---- ---- ---- ---- ----
### 609/622 [`./test/random/select/slt_good_91.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_91.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 55 failed
* 99% was OK

Time: 19851ms

---- ---- ---- ---- ---- ---- ----
### 610/622 [`./test/random/select/slt_good_92.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_92.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 58 failed
* 99% was OK

Time: 20687ms

---- ---- ---- ---- ---- ---- ----
### 611/622 [`./test/random/select/slt_good_93.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_93.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 52 failed
* 99% was OK

Time: 18854ms

---- ---- ---- ---- ---- ---- ----
### 612/622 [`./test/random/select/slt_good_94.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_94.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 63 failed
* 99% was OK

Time: 19626ms

---- ---- ---- ---- ---- ---- ----
### 613/622 [`./test/random/select/slt_good_95.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_95.test)

_Mimic sqlite_
#### ☓ Ran 10011 tests as sqlite

* 43 failed
* 99% was OK

Time: 19811ms

---- ---- ---- ---- ---- ---- ----
### 614/622 [`./test/random/select/slt_good_96.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_96.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 45 failed
* 99% was OK

Time: 18420ms

---- ---- ---- ---- ---- ---- ----
### 615/622 [`./test/random/select/slt_good_97.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_97.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 65 failed
* 99% was OK

Time: 18527ms

---- ---- ---- ---- ---- ---- ----
### 616/622 [`./test/random/select/slt_good_98.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_98.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 41 failed
* 99% was OK

Time: 18550ms

---- ---- ---- ---- ---- ---- ----
### 617/622 [`./test/random/select/slt_good_99.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/random/select/slt_good_99.test)

_Mimic sqlite_
#### ☓ Ran 10012 tests as sqlite

* 44 failed
* 99% was OK

Time: 20041ms

---- ---- ---- ---- ---- ---- ----
### 618/622 [`./test/select1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/select1.test)

_Mimic sqlite_
#### ✔ Ran 1031 tests as sqlite

* 100% was OK

Time: 7443ms

---- ---- ---- ---- ---- ---- ----
### 619/622 [`./test/select2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/select2.test)

_Mimic sqlite_
#### ✔ Ran 1031 tests as sqlite

* 100% was OK

Time: 6745ms

---- ---- ---- ---- ---- ---- ----
### 620/622 [`./test/select3.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/select3.test)

_Mimic sqlite_
#### ✔ Ran 3351 tests as sqlite

* 100% was OK

Time: 32038ms

---- ---- ---- ---- ---- ---- ----
### 621/622 [`./test/select4.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/select4.test)

_Mimic sqlite_
#### ✔ Ran 3857 tests as sqlite

* 100% was OK

Time: 37556ms

---- ---- ---- ---- ---- ---- ----
### 622/622 [`./test/select5.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/select5.test)

_Mimic sqlite_
#### ✔ Ran 1436 tests as sqlite

* 100% was OK

Time: 25828ms

-----------------------------

## Final result

* Skipped tests: 7
* Failed tests: 8022
* Total tested: 5939879
* Final score: 99 % was OK

Total script time: 24242497ms

_Please note that repetetive errors are not always printed again_

