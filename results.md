# SQLlogictest results for AlaSQL 0.1.10

_2015-06-29T08:09:56.285Z_

This is a subset of the total 622 tests.
Results from 125 test files:

---- ---- ---- ---- ---- ---- ----
### 1/125 `test/evidence/in1.test`

_Mimic sqlite_
```sql
SELECT 1 IN t1

Cannot read property 't1' of undefined
```

```sql
SELECT 1 IN (SELECT * FROM t1)

context is not defined
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
SELECT 4 IN t4n

Cannot read property 't4n' of undefined
```

#### ☓ Ran 214 tests as sqlite

* 115 failed
* 46% was OK

_Mimic postgresql_

`Halted`

_Mimic mssql_

`Halted`

_Mimic oracle_

`Halted`

_Mimic mysql_
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

#### ☓ Ran 128 tests as mysql

* 54 failed
* 57% was OK

_Mimic Unspecified DB_
#### ☓ Ran 132 tests as Unspecified DB

* 43 failed
* 67% was OK

Time: 1038ms

---- ---- ---- ---- ---- ---- ----
### 2/125 `test/evidence/in2.test`

_Mimic sqlite_
```sql
SELECT 1 FROM t1 WHERE 1 IN (SELECT 1)

context is not defined
```

#### ☓ Ran 53 tests as sqlite

* 1 failed
* 98% was OK

_Mimic postgresql_
#### ☓ Ran 45 tests as postgresql

* 1 failed
* 97% was OK

_Mimic mssql_
#### ☓ Ran 45 tests as mssql

* 1 failed
* 97% was OK

_Mimic oracle_
#### ☓ Ran 45 tests as oracle

* 1 failed
* 97% was OK

_Mimic mysql_
#### ☓ Ran 45 tests as mysql

* 1 failed
* 97% was OK

_Mimic Unspecified DB_
#### ☓ Ran 53 tests as Unspecified DB

* 1 failed
* 98% was OK

Time: 772ms

---- ---- ---- ---- ---- ---- ----
### 3/125 `test/evidence/slt_lang_aggfunc.test`

_Mimic sqlite_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
SELECT total(DISTINCT x) FROM t1

Unexpected token ,
```

```sql
SELECT group_concat(DISTINCT x) FROM t1 NOT INDEXED

Parse error on line 1:
...DISTINCT x) FROM t1 NOT INDEXED
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'EOF', 'WITH', 'COMMA', 'AS', 'LPAR', 'RPAR', 'PIVOT', 'UNPIVOT', 'ORDER', 'WHERE', 'DOT', 'UNION', 'INTERSECT', 'EXCEPT', 'FROM', 'CROSS', 'OUTER', 'NATURAL', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'SEMI', 'ANTI', 'ON', 'USING', 'GROUP', 'LIMIT', 'END', 'ELSE', 'SEMICOLON', 'GO', got 'NOT'
```

```sql
SELECT count(DISTINCT *) FROM t1 WHERE y='false'

No exception thrown
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
Expecting 'LITERAL', 'BRALITERAL', 'LPAR', 'NUMBER', 'STRING', 'SHARP', 'DOLLAR', 'AT', 'COLON', 'NOT', 'ALL', 'ANY', 'PLUS', 'STAR', 'QUESTION', 'CURRENT_TIMESTAMP', 'JAVASCRIPT', 'NEW', 'CAST', 'CONVERT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'TRUE', 'FALSE', 'NSTRING', 'NULL', 'EXISTS', 'BRAQUESTION', 'CASE', 'MINUS', 'SOME', 'ATLBRA', 'LCUR', got 'LT'
```

#### ☓ Ran 80 tests as sqlite

* 27 failed
* 66% was OK

_Mimic postgresql_
`setThreshold not implemented`

`Halted`

#### ☓ Ran 5 tests as postgresql

* 1 failed
* 80% was OK

_Mimic mssql_
`setThreshold not implemented`

`Halted`

#### ☓ Ran 5 tests as mssql

* 1 failed
* 80% was OK

_Mimic oracle_
`setThreshold not implemented`

`Halted`

#### ☓ Ran 5 tests as oracle

* 1 failed
* 80% was OK

_Mimic mysql_
`setThreshold not implemented`

`Halted`

#### ☓ Ran 5 tests as mysql

* 1 failed
* 80% was OK

_Mimic Unspecified DB_
`setThreshold not implemented`

`Halted`

#### ☓ Ran 5 tests as Unspecified DB

* 1 failed
* 80% was OK

Time: 98ms

---- ---- ---- ---- ---- ---- ----
### 4/125 `test/evidence/slt_lang_createtrigger.test`

_Mimic sqlite_
`setThreshold not implemented`
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

#### ☓ Ran 26 tests as sqlite

* 21 failed
* 19% was OK

_Mimic postgresql_
`setThreshold not implemented`

`Halted`

#### ☓ Ran 5 tests as postgresql

* 1 failed
* 80% was OK

_Mimic mssql_
`setThreshold not implemented`

`Halted`

#### ☓ Ran 5 tests as mssql

* 1 failed
* 80% was OK

_Mimic oracle_
`setThreshold not implemented`
#### ☓ Ran 26 tests as oracle

* 21 failed
* 19% was OK

_Mimic mysql_
`setThreshold not implemented`
#### ☓ Ran 26 tests as mysql

* 21 failed
* 19% was OK

_Mimic Unspecified DB_
`setThreshold not implemented`
#### ☓ Ran 26 tests as Unspecified DB

* 21 failed
* 19% was OK

Time: 49ms

---- ---- ---- ---- ---- ---- ----
### 5/125 `test/evidence/slt_lang_createview.test`

_Mimic sqlite_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
DELETE FROM view1 WHERE x>0

No exception thrown
```

#### ☓ Ran 23 tests as sqlite

* 7 failed
* 69% was OK

_Mimic postgresql_
`setThreshold not implemented`
#### ☓ Ran 15 tests as postgresql

* 4 failed
* 73% was OK

_Mimic mssql_
`setThreshold not implemented`
#### ☓ Ran 15 tests as mssql

* 2 failed
* 86% was OK

_Mimic oracle_
`setThreshold not implemented`
#### ☓ Ran 15 tests as oracle

* 4 failed
* 73% was OK

_Mimic mysql_
`setThreshold not implemented`
#### ☓ Ran 15 tests as mysql

* 4 failed
* 73% was OK

_Mimic Unspecified DB_
`setThreshold not implemented`
#### ☓ Ran 15 tests as Unspecified DB

* 4 failed
* 73% was OK

Time: 575ms

---- ---- ---- ---- ---- ---- ----
### 6/125 `test/evidence/slt_lang_dropindex.test`

_Mimic sqlite_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
DROP INDEX t1i1;

No exception thrown
```

#### ☓ Ran 8 tests as sqlite

* 3 failed
* 62% was OK

_Mimic postgresql_
`setThreshold not implemented`
#### ☓ Ran 8 tests as postgresql

* 3 failed
* 62% was OK

_Mimic mssql_
`setThreshold not implemented`
#### ☓ Ran 8 tests as mssql

* 3 failed
* 62% was OK

_Mimic oracle_
`setThreshold not implemented`
#### ☓ Ran 8 tests as oracle

* 3 failed
* 62% was OK

_Mimic mysql_
`setThreshold not implemented`
#### ☓ Ran 8 tests as mysql

* 3 failed
* 62% was OK

_Mimic Unspecified DB_
`setThreshold not implemented`
#### ☓ Ran 8 tests as Unspecified DB

* 3 failed
* 62% was OK

Time: 31ms

---- ---- ---- ---- ---- ---- ----
### 7/125 `test/evidence/slt_lang_droptable.test`

_Mimic sqlite_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
DROP INDEX t1i1;

No exception thrown
```

#### ☓ Ran 12 tests as sqlite

* 2 failed
* 83% was OK

_Mimic postgresql_
`setThreshold not implemented`
#### ☓ Ran 12 tests as postgresql

* 2 failed
* 83% was OK

_Mimic mssql_
`setThreshold not implemented`
#### ☓ Ran 10 tests as mssql

* 2 failed
* 80% was OK

_Mimic oracle_
`setThreshold not implemented`
#### ☓ Ran 12 tests as oracle

* 2 failed
* 83% was OK

_Mimic mysql_
`setThreshold not implemented`
#### ☓ Ran 12 tests as mysql

* 2 failed
* 83% was OK

_Mimic Unspecified DB_
`setThreshold not implemented`
#### ☓ Ran 12 tests as Unspecified DB

* 2 failed
* 83% was OK

Time: 55ms

---- ---- ---- ---- ---- ---- ----
### 8/125 `test/evidence/slt_lang_droptrigger.test`

_Mimic sqlite_
`setThreshold not implemented`
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

#### ☓ Ran 12 tests as sqlite

* 4 failed
* 66% was OK

_Mimic postgresql_
`setThreshold not implemented`

`Halted`

#### ☓ Ran 5 tests as postgresql

* 1 failed
* 80% was OK

_Mimic mssql_
`setThreshold not implemented`

`Halted`

#### ☓ Ran 5 tests as mssql

* 1 failed
* 80% was OK

_Mimic oracle_
`setThreshold not implemented`
#### ☓ Ran 12 tests as oracle

* 4 failed
* 66% was OK

_Mimic mysql_
`setThreshold not implemented`
#### ☓ Ran 12 tests as mysql

* 4 failed
* 66% was OK

_Mimic Unspecified DB_
`setThreshold not implemented`
#### ☓ Ran 12 tests as Unspecified DB

* 4 failed
* 66% was OK

Time: 33ms

---- ---- ---- ---- ---- ---- ----
### 9/125 `test/evidence/slt_lang_dropview.test`

_Mimic sqlite_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

#### ☓ Ran 13 tests as sqlite

* 1 failed
* 92% was OK

_Mimic postgresql_
`setThreshold not implemented`
#### ☓ Ran 13 tests as postgresql

* 1 failed
* 92% was OK

_Mimic mssql_
`setThreshold not implemented`
#### ☓ Ran 13 tests as mssql

* 1 failed
* 92% was OK

_Mimic oracle_
`setThreshold not implemented`
#### ☓ Ran 13 tests as oracle

* 1 failed
* 92% was OK

_Mimic mysql_
`setThreshold not implemented`
#### ☓ Ran 13 tests as mysql

* 1 failed
* 92% was OK

_Mimic Unspecified DB_
`setThreshold not implemented`
#### ☓ Ran 13 tests as Unspecified DB

* 1 failed
* 92% was OK

Time: 57ms

---- ---- ---- ---- ---- ---- ----
### 10/125 `test/evidence/slt_lang_reindex.test`

_Mimic sqlite_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
REINDEX t1i1

Parse error on line 1:
REINDEX t1i1
--------^
Expecting 'EOF', 'COMMA', 'LPAR', 'RPAR', 'END', 'ELSE', 'COLONDASH', 'SEMICOLON', 'GO', got 'LITERAL'
```

#### ☓ Ran 7 tests as sqlite

* 2 failed
* 71% was OK

_Mimic postgresql_
`setThreshold not implemented`

`Halted`

#### ☓ Ran 5 tests as postgresql

* 1 failed
* 80% was OK

_Mimic mssql_
`setThreshold not implemented`

`Halted`

#### ☓ Ran 5 tests as mssql

* 1 failed
* 80% was OK

_Mimic oracle_
`setThreshold not implemented`

`Halted`

#### ☓ Ran 5 tests as oracle

* 1 failed
* 80% was OK

_Mimic mysql_
`setThreshold not implemented`

`Halted`

#### ☓ Ran 5 tests as mysql

* 1 failed
* 80% was OK

_Mimic Unspecified DB_
`setThreshold not implemented`
#### ☓ Ran 7 tests as Unspecified DB

* 2 failed
* 71% was OK

Time: 29ms

---- ---- ---- ---- ---- ---- ----
### 11/125 `test/evidence/slt_lang_replace.test`

_Mimic sqlite_
`setThreshold not implemented`
```sql
INSERT OR REPLACE INTO t1 VALUES(2, 'insert or replace')

Parse error on line 1:
INSERT OR REPLACE INTO t1 V
-------^
Expecting 'LITERAL', 'BRALITERAL', 'INTO', got 'OR'
```

```sql
REPLACE INTO t1 VALUES(2, 'replace')

Parse error on line 1:
REPLACE INTO t1 VALUES(2, 'r
--------^
Expecting 'EOF', 'COMMA', 'LPAR', 'RPAR', 'END', 'ELSE', 'COLONDASH', 'SEMICOLON', 'GO', got 'INTO'
```

#### ☓ Ran 14 tests as sqlite

* 4 failed
* 71% was OK

_Mimic postgresql_

`Halted`

_Mimic mssql_

`Halted`

_Mimic oracle_

`Halted`

_Mimic mysql_
`setThreshold not implemented`
#### ☓ Ran 10 tests as mysql

* 2 failed
* 80% was OK

_Mimic Unspecified DB_
`setThreshold not implemented`
#### ☓ Ran 14 tests as Unspecified DB

* 4 failed
* 71% was OK

Time: 33ms

---- ---- ---- ---- ---- ---- ----
### 12/125 `test/evidence/slt_lang_update.test`

_Mimic sqlite_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
UPDATE t1 SET z='foo'

No exception thrown
```

#### ☓ Ran 27 tests as sqlite

* 3 failed
* 88% was OK

_Mimic postgresql_
`setThreshold not implemented`
#### ☓ Ran 27 tests as postgresql

* 3 failed
* 88% was OK

_Mimic mssql_
`setThreshold not implemented`
#### ☓ Ran 27 tests as mssql

* 3 failed
* 88% was OK

_Mimic oracle_
`setThreshold not implemented`
#### ☓ Ran 27 tests as oracle

* 3 failed
* 88% was OK

_Mimic mysql_
`setThreshold not implemented`
#### ☓ Ran 27 tests as mysql

* 3 failed
* 88% was OK

_Mimic Unspecified DB_
`setThreshold not implemented`
#### ☓ Ran 27 tests as Unspecified DB

* 3 failed
* 88% was OK

Time: 131ms

---- ---- ---- ---- ---- ---- ----
### 13/125 `test/index/between/1/slt_good_0.test`

_Mimic sqlite_
`setThreshold not implemented`
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

