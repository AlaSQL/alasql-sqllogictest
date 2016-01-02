# SQLlogictest results for AlaSQL 0.2.2-pre-develop+151231.53429

_2016-01-02T03:50:34.910Z_

This is a subset of the total 622 tests.
Results from 125 test files:

---- ---- ---- ---- ---- ---- ----
### 1/125 [`./test/evidence/in1.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/in1.test)

_Mimic sqlite_
#### ★ Ran 214 tests as sqlite

* 100% was OK

Time: 467ms

---- ---- ---- ---- ---- ---- ----
### 2/125 [`./test/evidence/in2.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/in2.test)

_Mimic sqlite_
#### ★ Ran 53 tests as sqlite

* 100% was OK

Time: 290ms

---- ---- ---- ---- ---- ---- ----
### 3/125 [`./test/evidence/slt_lang_aggfunc.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/slt_lang_aggfunc.test)

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

Time: 263ms

---- ---- ---- ---- ---- ---- ----
### 4/125 [`./test/evidence/slt_lang_createtrigger.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/slt_lang_createtrigger.test)

_Mimic sqlite_
#### ★ Ran 26 tests as sqlite

* 100% was OK

Time: 75ms

---- ---- ---- ---- ---- ---- ----
### 5/125 [`./test/evidence/slt_lang_createview.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/slt_lang_createview.test)

_Mimic sqlite_
#### ★ Ran 23 tests as sqlite

* 100% was OK

Time: 128ms

---- ---- ---- ---- ---- ---- ----
### 6/125 [`./test/evidence/slt_lang_dropindex.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/slt_lang_dropindex.test)

_Mimic sqlite_
#### ★ Ran 8 tests as sqlite

* 100% was OK

Time: 26ms

---- ---- ---- ---- ---- ---- ----
### 7/125 [`./test/evidence/slt_lang_droptable.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/slt_lang_droptable.test)

_Mimic sqlite_
#### ★ Ran 12 tests as sqlite

* 100% was OK

Time: 25ms

---- ---- ---- ---- ---- ---- ----
### 8/125 [`./test/evidence/slt_lang_droptrigger.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/slt_lang_droptrigger.test)

_Mimic sqlite_
#### ★ Ran 12 tests as sqlite

* 100% was OK

Time: 30ms

---- ---- ---- ---- ---- ---- ----
### 9/125 [`./test/evidence/slt_lang_dropview.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/slt_lang_dropview.test)

_Mimic sqlite_
#### ★ Ran 13 tests as sqlite

* 100% was OK

Time: 40ms

---- ---- ---- ---- ---- ---- ----
### 10/125 [`./test/evidence/slt_lang_reindex.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/slt_lang_reindex.test)

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
### 11/125 [`./test/evidence/slt_lang_replace.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/slt_lang_replace.test)

_Mimic sqlite_
#### ★ Ran 14 tests as sqlite

* 100% was OK

Time: 28ms

---- ---- ---- ---- ---- ---- ----
### 12/125 [`./test/evidence/slt_lang_update.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/evidence/slt_lang_update.test)

_Mimic sqlite_
#### ★ Ran 27 tests as sqlite

* 100% was OK

Time: 44ms

---- ---- ---- ---- ---- ---- ----
### 13/125 [`./test/index/between/1/slt_good_0.test`](https://github.com/mathiasrw/alasql-logictest/blob/master/sqllogic/./test/index/between/1/slt_good_0.test)

