# SQLlogictest results for AlaSQL 0.1.10

_2015-06-29T05:56:17.794Z_

Results from 622 test files:

---- ---- ---- ---- ---- ---- ----
### 1/622 `test/evidence/in1.test`

_Mimic mssql_

`Halted`

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

Expected: [null] but got ["0"]
```

#### ☓ Ran 128 tests as mysql

* 97 failed
* 24% was OK

_Mimic oracle_

`Halted`

_Mimic postgresql_

`Halted`

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
SELECT 4 IN t4n

Cannot read property 't4n' of undefined
```

```sql
SELECT 1 IN (2,3,4,null)

Expected: [null] but got ["0"]
```

#### ☓ Ran 214 tests as sqlite

* 166 failed
* 22% was OK

_Mimic unidentified DB_
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
SELECT 1 IN (2,3,4,null)

Expected: [null] but got ["0"]
```

#### ☓ Ran 132 tests as unidentified DB

* 94 failed
* 28% was OK

Time: 871ms

---- ---- ---- ---- ---- ---- ----
### 2/622 `test/evidence/in2.test`

_Mimic mssql_
```sql
SELECT 1 FROM t1 WHERE 1 IN (2)

Query was expected to return results (but did not): []
```

```sql
SELECT 1 FROM t1 WHERE 1 NOT IN (2)

Expected: ["1","1","1"] but got [1,1,1]
```

```sql
SELECT 1 FROM t1 WHERE 1 IN (SELECT 1)

context is not defined
```

#### ☓ Ran 45 tests as mssql

* 28 failed
* 37% was OK

_Mimic mysql_
```sql
SELECT 1 FROM t1 WHERE 1 IN (2)

Query was expected to return results (but did not): []
```

```sql
SELECT 1 FROM t1 WHERE 1 NOT IN (2)

Expected: ["1","1","1"] but got [1,1,1]
```

```sql
SELECT 1 FROM t1 WHERE 1 IN (SELECT 1)

context is not defined
```

#### ☓ Ran 45 tests as mysql

* 28 failed
* 37% was OK

_Mimic oracle_
```sql
SELECT 1 FROM t1 WHERE 1 IN (2)

Query was expected to return results (but did not): []
```

```sql
SELECT 1 FROM t1 WHERE 1 NOT IN (2)

Expected: ["1","1","1"] but got [1,1,1]
```

```sql
SELECT 1 FROM t1 WHERE 1 IN (SELECT 1)

context is not defined
```

#### ☓ Ran 45 tests as oracle

* 28 failed
* 37% was OK

_Mimic postgresql_
```sql
SELECT 1 FROM t1 WHERE 1 IN (2)

Query was expected to return results (but did not): []
```

```sql
SELECT 1 FROM t1 WHERE 1 NOT IN (2)

Expected: ["1","1","1"] but got [1,1,1]
```

```sql
SELECT 1 FROM t1 WHERE 1 IN (SELECT 1)

context is not defined
```

#### ☓ Ran 45 tests as postgresql

* 28 failed
* 37% was OK

_Mimic sqlite_
```sql
SELECT 1 FROM t1 WHERE 1 IN (2)

Query was expected to return results (but did not): []
```

```sql
SELECT 1 FROM t1 WHERE 1 NOT IN (2)

Expected: ["1","1","1"] but got [1,1,1]
```

```sql
SELECT 1 FROM t1 WHERE 1 IN (SELECT 1)

context is not defined
```

#### ☓ Ran 53 tests as sqlite

* 36 failed
* 32% was OK

_Mimic unidentified DB_
```sql
SELECT 1 FROM t1 WHERE 1 IN (2)

Query was expected to return results (but did not): []
```

```sql
SELECT 1 FROM t1 WHERE 1 NOT IN (2)

Expected: ["1","1","1"] but got [1,1,1]
```

```sql
SELECT 1 FROM t1 WHERE 1 IN (SELECT 1)

context is not defined
```

#### ☓ Ran 53 tests as unidentified DB

* 36 failed
* 32% was OK

Time: 386ms

---- ---- ---- ---- ---- ---- ----
### 3/622 `test/evidence/slt_lang_aggfunc.test`

_Mimic mssql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```


`Halted`

#### ☓ Ran 5 tests as mssql

* 1 failed
* 80% was OK

_Mimic mysql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```


`Halted`

#### ☓ Ran 5 tests as mysql

* 1 failed
* 80% was OK

_Mimic oracle_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```


`Halted`

#### ☓ Ran 5 tests as oracle

* 1 failed
* 80% was OK

_Mimic postgresql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```


`Halted`

#### ☓ Ran 5 tests as postgresql

* 1 failed
* 80% was OK

_Mimic sqlite_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
SELECT count(DISTINCT x) FROM t1

Expected: ["2"] but got [2]
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
SELECT avg(y) FROM t1

Expected: ["0"] but got [null]
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
SELECT avg(x) FROM t1 WHERE y='null'

Expected: [null] but got [null]
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
SELECT sum(x) FROM t1 WHERE y='null'

Expected: [null] but got [0]
```

```sql
INSERT INTO t1 VALUES(1<<63,'true');

Parse error on line 1:
...RT INTO t1 VALUES(1<<63,'true');
-----------------------^
Expecting 'LITERAL', 'BRALITERAL', 'LPAR', 'NUMBER', 'STRING', 'SHARP', 'DOLLAR', 'AT', 'COLON', 'NOT', 'ALL', 'ANY', 'PLUS', 'STAR', 'QUESTION', 'CURRENT_TIMESTAMP', 'JAVASCRIPT', 'NEW', 'CAST', 'CONVERT', 'SUM', 'COUNT', 'MIN', 'MAX', 'AVG', 'FIRST', 'LAST', 'AGGR', 'ARRAY', 'TRUE', 'FALSE', 'NSTRING', 'NULL', 'EXISTS', 'BRAQUESTION', 'CASE', 'MINUS', 'SOME', 'ATLBRA', 'LCUR', got 'LT'
```

#### ☓ Ran 80 tests as sqlite

* 69 failed
* 13% was OK

_Mimic unidentified DB_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```


`Halted`

#### ☓ Ran 5 tests as unidentified DB

* 1 failed
* 80% was OK

Time: 202ms

---- ---- ---- ---- ---- ---- ----
### 4/622 `test/evidence/slt_lang_createtrigger.test`

_Mimic mssql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```


`Halted`

#### ☓ Ran 5 tests as mssql

* 1 failed
* 80% was OK

_Mimic mysql_
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

#### ☓ Ran 26 tests as mysql

* 21 failed
* 19% was OK

_Mimic oracle_
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

#### ☓ Ran 26 tests as oracle

* 21 failed
* 19% was OK

_Mimic postgresql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```


`Halted`

#### ☓ Ran 5 tests as postgresql

* 1 failed
* 80% was OK

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

```sql
CREATE TRIGGER t1r8 BEFORE DELETE ON t1 BEGIN SELECT 1; END;

Parse error on line 1:
CREATE TRIGGER t1r8 BEFORE DELETE O
---------------^
Expecting 'DATABASE', got 'LITERAL'
```

#### ☓ Ran 26 tests as sqlite

* 21 failed
* 19% was OK

_Mimic unidentified DB_
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

#### ☓ Ran 26 tests as unidentified DB

* 21 failed
* 19% was OK

Time: 74ms

---- ---- ---- ---- ---- ---- ----
### 5/622 `test/evidence/slt_lang_createview.test`

_Mimic mssql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
SELECT x FROM t1 WHERE x>0

Expected: ["1"] but got [1]
```

```sql
SELECT x FROM view1

Expected: ["1"] but got [null]
```

```sql
INSERT INTO view1 VALUES(2,'unknown')

No exception thrown
```

#### ☓ Ran 15 tests as mssql

* 4 failed
* 73% was OK

_Mimic mysql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
SELECT x FROM t1 WHERE x>0

Expected: ["1"] but got [1]
```

```sql
SELECT x FROM view1

Expected: ["1"] but got [null]
```

```sql
DELETE FROM view1 WHERE x>0

No exception thrown
```

#### ☓ Ran 15 tests as mysql

* 6 failed
* 60% was OK

_Mimic oracle_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
SELECT x FROM t1 WHERE x>0

Expected: ["1"] but got [1]
```

```sql
SELECT x FROM view1

Expected: ["1"] but got [null]
```

```sql
DELETE FROM view1 WHERE x>0

No exception thrown
```

#### ☓ Ran 15 tests as oracle

* 6 failed
* 60% was OK

_Mimic postgresql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
SELECT x FROM t1 WHERE x>0

Expected: ["1"] but got [1]
```

```sql
SELECT x FROM view1

Expected: ["1"] but got [null]
```

```sql
DELETE FROM view1 WHERE x>0

No exception thrown
```

#### ☓ Ran 15 tests as postgresql

* 6 failed
* 60% was OK

_Mimic sqlite_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
SELECT x FROM t1 WHERE x>0

Expected: ["1"] but got [1]
```

```sql
SELECT x FROM view1

Expected: ["1"] but got [null]
```

```sql
DELETE FROM view1 WHERE x>0

No exception thrown
```

#### ☓ Ran 23 tests as sqlite

* 9 failed
* 60% was OK

_Mimic unidentified DB_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
SELECT x FROM t1 WHERE x>0

Expected: ["1"] but got [1]
```

```sql
SELECT x FROM view1

Expected: ["1"] but got [null]
```

```sql
DELETE FROM view1 WHERE x>0

No exception thrown
```

#### ☓ Ran 15 tests as unidentified DB

* 6 failed
* 60% was OK

Time: 120ms

---- ---- ---- ---- ---- ---- ----
### 6/622 `test/evidence/slt_lang_dropindex.test`

_Mimic mssql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
DROP INDEX t1i1;

No exception thrown
```

#### ☓ Ran 8 tests as mssql

* 3 failed
* 62% was OK

_Mimic mysql_
`setThreshold not implemented`
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

_Mimic oracle_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
DROP INDEX t1i1;

No exception thrown
```

#### ☓ Ran 8 tests as oracle

* 3 failed
* 62% was OK

_Mimic postgresql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
DROP INDEX t1i1;

No exception thrown
```

#### ☓ Ran 8 tests as postgresql

* 3 failed
* 62% was OK

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

_Mimic unidentified DB_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
DROP INDEX t1i1;

No exception thrown
```

#### ☓ Ran 8 tests as unidentified DB

* 3 failed
* 62% was OK

Time: 48ms

---- ---- ---- ---- ---- ---- ----
### 7/622 `test/evidence/slt_lang_droptable.test`

_Mimic mssql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
DROP INDEX t1i1;

No exception thrown
```

#### ☓ Ran 10 tests as mssql

* 2 failed
* 80% was OK

_Mimic mysql_
`setThreshold not implemented`
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

_Mimic oracle_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
DROP INDEX t1i1;

No exception thrown
```

#### ☓ Ran 12 tests as oracle

* 2 failed
* 83% was OK

_Mimic postgresql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
DROP INDEX t1i1;

No exception thrown
```

#### ☓ Ran 12 tests as postgresql

* 2 failed
* 83% was OK

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

_Mimic unidentified DB_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
DROP INDEX t1i1;

No exception thrown
```

#### ☓ Ran 12 tests as unidentified DB

* 2 failed
* 83% was OK

Time: 60ms

---- ---- ---- ---- ---- ---- ----
### 8/622 `test/evidence/slt_lang_droptrigger.test`

_Mimic mssql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```


`Halted`

#### ☓ Ran 5 tests as mssql

* 1 failed
* 80% was OK

_Mimic mysql_
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

#### ☓ Ran 12 tests as mysql

* 4 failed
* 66% was OK

_Mimic oracle_
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

#### ☓ Ran 12 tests as oracle

* 4 failed
* 66% was OK

_Mimic postgresql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```


`Halted`

#### ☓ Ran 5 tests as postgresql

* 1 failed
* 80% was OK

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

_Mimic unidentified DB_
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

#### ☓ Ran 12 tests as unidentified DB

* 4 failed
* 66% was OK

Time: 47ms

---- ---- ---- ---- ---- ---- ----
### 9/622 `test/evidence/slt_lang_dropview.test`

_Mimic mssql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
SELECT x FROM view2

Expected: ["0"] but got [null]
```

```sql
SELECT x FROM t1 WHERE x=0

Expected: ["0"] but got [0]
```

#### ☓ Ran 13 tests as mssql

* 3 failed
* 76% was OK

_Mimic mysql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
SELECT x FROM view2

Expected: ["0"] but got [null]
```

```sql
SELECT x FROM t1 WHERE x=0

Expected: ["0"] but got [0]
```

#### ☓ Ran 13 tests as mysql

* 3 failed
* 76% was OK

_Mimic oracle_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
SELECT x FROM view2

Expected: ["0"] but got [null]
```

```sql
SELECT x FROM t1 WHERE x=0

Expected: ["0"] but got [0]
```

#### ☓ Ran 13 tests as oracle

* 3 failed
* 76% was OK

_Mimic postgresql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
SELECT x FROM view2

Expected: ["0"] but got [null]
```

```sql
SELECT x FROM t1 WHERE x=0

Expected: ["0"] but got [0]
```

#### ☓ Ran 13 tests as postgresql

* 3 failed
* 76% was OK

_Mimic sqlite_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
SELECT x FROM view2

Expected: ["0"] but got [null]
```

```sql
SELECT x FROM t1 WHERE x=0

Expected: ["0"] but got [0]
```

#### ☓ Ran 13 tests as sqlite

* 3 failed
* 76% was OK

_Mimic unidentified DB_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
SELECT x FROM view2

Expected: ["0"] but got [null]
```

```sql
SELECT x FROM t1 WHERE x=0

Expected: ["0"] but got [0]
```

#### ☓ Ran 13 tests as unidentified DB

* 3 failed
* 76% was OK

Time: 85ms

---- ---- ---- ---- ---- ---- ----
### 10/622 `test/evidence/slt_lang_reindex.test`

_Mimic mssql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```


`Halted`

#### ☓ Ran 5 tests as mssql

* 1 failed
* 80% was OK

_Mimic mysql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```


`Halted`

#### ☓ Ran 5 tests as mysql

* 1 failed
* 80% was OK

_Mimic oracle_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```


`Halted`

#### ☓ Ran 5 tests as oracle

* 1 failed
* 80% was OK

_Mimic postgresql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```


`Halted`

#### ☓ Ran 5 tests as postgresql

* 1 failed
* 80% was OK

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

_Mimic unidentified DB_
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

#### ☓ Ran 7 tests as unidentified DB

* 2 failed
* 71% was OK

Time: 38ms

---- ---- ---- ---- ---- ---- ----
### 11/622 `test/evidence/slt_lang_replace.test`

_Mimic mssql_

`Halted`

_Mimic mysql_
`setThreshold not implemented`
```sql
SELECT x, y FROM t1 WHERE x=2

Query was expected to return results (but did not): []
```

```sql
SELECT x, y FROM t1 WHERE x=2

Expected: ["2","insert"] but got [2,"insert"]
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

Expected: ["2","replace"] but got [2,"insert"]
```

#### ☓ Ran 10 tests as mysql

* 6 failed
* 40% was OK

_Mimic oracle_

`Halted`

_Mimic postgresql_

`Halted`

_Mimic sqlite_
`setThreshold not implemented`
```sql
SELECT x, y FROM t1 WHERE x=2

Query was expected to return results (but did not): []
```

```sql
SELECT x, y FROM t1 WHERE x=2

Expected: ["2","insert"] but got [2,"insert"]
```

```sql
INSERT OR REPLACE INTO t1 VALUES(2, 'insert or replace')

Parse error on line 1:
INSERT OR REPLACE INTO t1 V
-------^
Expecting 'LITERAL', 'BRALITERAL', 'INTO', got 'OR'
```

```sql
SELECT x, y FROM t1 WHERE x=2

Expected: ["2","insert or replace"] but got [2,"insert"]
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

Expected: ["2","replace"] but got [2,"insert"]
```

#### ☓ Ran 14 tests as sqlite

* 10 failed
* 28% was OK

_Mimic unidentified DB_
`setThreshold not implemented`
```sql
SELECT x, y FROM t1 WHERE x=2

Query was expected to return results (but did not): []
```

```sql
SELECT x, y FROM t1 WHERE x=2

Expected: ["2","insert"] but got [2,"insert"]
```

```sql
INSERT OR REPLACE INTO t1 VALUES(2, 'insert or replace')

Parse error on line 1:
INSERT OR REPLACE INTO t1 V
-------^
Expecting 'LITERAL', 'BRALITERAL', 'INTO', got 'OR'
```

```sql
SELECT x, y FROM t1 WHERE x=2

Expected: ["2","insert or replace"] but got [2,"insert"]
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

Expected: ["2","replace"] but got [2,"insert"]
```

#### ☓ Ran 14 tests as unidentified DB

* 10 failed
* 28% was OK

Time: 51ms

---- ---- ---- ---- ---- ---- ----
### 12/622 `test/evidence/slt_lang_update.test`

_Mimic mssql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
UPDATE t1 SET z='foo'

No exception thrown
```

```sql
SELECT count(*) FROM t1 WHERE x=3

Expected: ["3"] but got [3]
```

#### ☓ Ran 27 tests as mssql

* 12 failed
* 55% was OK

_Mimic mysql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
UPDATE t1 SET z='foo'

No exception thrown
```

```sql
SELECT count(*) FROM t1 WHERE x=3

Expected: ["3"] but got [3]
```

#### ☓ Ran 27 tests as mysql

* 12 failed
* 55% was OK

_Mimic oracle_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
UPDATE t1 SET z='foo'

No exception thrown
```

```sql
SELECT count(*) FROM t1 WHERE x=3

Expected: ["3"] but got [3]
```

#### ☓ Ran 27 tests as oracle

* 12 failed
* 55% was OK

_Mimic postgresql_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
UPDATE t1 SET z='foo'

No exception thrown
```

```sql
SELECT count(*) FROM t1 WHERE x=3

Expected: ["3"] but got [3]
```

#### ☓ Ran 27 tests as postgresql

* 12 failed
* 55% was OK

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

```sql
SELECT count(*) FROM t1 WHERE x=3

Expected: ["3"] but got [3]
```

#### ☓ Ran 27 tests as sqlite

* 12 failed
* 55% was OK

_Mimic unidentified DB_
`setThreshold not implemented`
```sql
CREATE INDEX t1i1 ON t1(x)

string is not a function
```

```sql
UPDATE t1 SET z='foo'

No exception thrown
```

```sql
SELECT count(*) FROM t1 WHERE x=3

Expected: ["3"] but got [3]
```

#### ☓ Ran 27 tests as unidentified DB

* 12 failed
* 55% was OK

Time: 176ms

---- ---- ---- ---- ---- ---- ----
### 13/622 `test/index/between/1/slt_good_0.test`

_Mimic mssql_
`setThreshold not implemented`
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE col3 < 6 OR col3 < 1 AND col3 BETWEEN 2 AND 7

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (col4 BETWEEN 6.51 AND 4.36) AND ((((col4 > 1.61)))) OR (col0 > 5) AND col0 > 9 OR col1 > 4.37 OR (col3 <= 4 AND col3 < 3 AND col0 >= 6) AND col1 = 3.2

Expected: ["0"] but got [0]
```

```sql
SELECT pk FROM tab0 WHERE (col4 IN (5.85,5.95,6.30,0.0,1.27) AND (col4 IN (9.41,4.56,2.55,0.83,3.95,6.92) AND (col1 = 6.24)) OR col0 IN (SELECT col3 FROM tab0 WHERE (((((col0 IN (8,1) AND col0 IS NULL AND col1 < 9.21) AND col4 > 8.64 AND (col3 >= 9) OR col0 < 5)))))) AND (col1 < 7.95 OR col0 < 0) AND col3 >= 9 AND col0 < 2 OR col4 BETWEEN 1.13 AND 0.71 AND (col3 > 9) AND (col0 < 3)

context is not defined
```

#### ☓ Ran 10022 tests as mssql

* 10004 failed
* 0% was OK

_Mimic mysql_
`setThreshold not implemented`
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE col3 < 6 OR col3 < 1 AND col3 BETWEEN 2 AND 7

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (col4 BETWEEN 6.51 AND 4.36) AND ((((col4 > 1.61)))) OR (col0 > 5) AND col0 > 9 OR col1 > 4.37 OR (col3 <= 4 AND col3 < 3 AND col0 >= 6) AND col1 = 3.2

Expected: ["0"] but got [0]
```

```sql
SELECT pk FROM tab0 WHERE (col4 IN (5.85,5.95,6.30,0.0,1.27) AND (col4 IN (9.41,4.56,2.55,0.83,3.95,6.92) AND (col1 = 6.24)) OR col0 IN (SELECT col3 FROM tab0 WHERE (((((col0 IN (8,1) AND col0 IS NULL AND col1 < 9.21) AND col4 > 8.64 AND (col3 >= 9) OR col0 < 5)))))) AND (col1 < 7.95 OR col0 < 0) AND col3 >= 9 AND col0 < 2 OR col4 BETWEEN 1.13 AND 0.71 AND (col3 > 9) AND (col0 < 3)

context is not defined
```

#### ☓ Ran 10022 tests as mysql

* 10004 failed
* 0% was OK

_Mimic oracle_
`setThreshold not implemented`
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE col3 < 6 OR col3 < 1 AND col3 BETWEEN 2 AND 7

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (col4 BETWEEN 6.51 AND 4.36) AND ((((col4 > 1.61)))) OR (col0 > 5) AND col0 > 9 OR col1 > 4.37 OR (col3 <= 4 AND col3 < 3 AND col0 >= 6) AND col1 = 3.2

Expected: ["0"] but got [0]
```

```sql
SELECT pk FROM tab0 WHERE (col4 IN (5.85,5.95,6.30,0.0,1.27) AND (col4 IN (9.41,4.56,2.55,0.83,3.95,6.92) AND (col1 = 6.24)) OR col0 IN (SELECT col3 FROM tab0 WHERE (((((col0 IN (8,1) AND col0 IS NULL AND col1 < 9.21) AND col4 > 8.64 AND (col3 >= 9) OR col0 < 5)))))) AND (col1 < 7.95 OR col0 < 0) AND col3 >= 9 AND col0 < 2 OR col4 BETWEEN 1.13 AND 0.71 AND (col3 > 9) AND (col0 < 3)

context is not defined
```

#### ☓ Ran 10022 tests as oracle

* 10004 failed
* 0% was OK

_Mimic postgresql_
`setThreshold not implemented`
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE col3 < 6 OR col3 < 1 AND col3 BETWEEN 2 AND 7

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (col4 BETWEEN 6.51 AND 4.36) AND ((((col4 > 1.61)))) OR (col0 > 5) AND col0 > 9 OR col1 > 4.37 OR (col3 <= 4 AND col3 < 3 AND col0 >= 6) AND col1 = 3.2

Expected: ["0"] but got [0]
```

```sql
SELECT pk FROM tab0 WHERE (col4 IN (5.85,5.95,6.30,0.0,1.27) AND (col4 IN (9.41,4.56,2.55,0.83,3.95,6.92) AND (col1 = 6.24)) OR col0 IN (SELECT col3 FROM tab0 WHERE (((((col0 IN (8,1) AND col0 IS NULL AND col1 < 9.21) AND col4 > 8.64 AND (col3 >= 9) OR col0 < 5)))))) AND (col1 < 7.95 OR col0 < 0) AND col3 >= 9 AND col0 < 2 OR col4 BETWEEN 1.13 AND 0.71 AND (col3 > 9) AND (col0 < 3)

context is not defined
```

```sql
SELECT pk FROM tab0 WHERE (col3 >= 1 OR col3 > 3 OR col3 < 8 AND (col3 <= 4) AND (((col0 >= 5 OR col3 >= 1) OR (col1 = 0.49) AND col0 > 8 AND col1 BETWEEN 7.12 AND 6.10) AND col3 <= 3) AND col0 IS NULL AND col3 >= 7 AND col0 < 4)

Expected: ["0"] but got [0]
```

```sql
SELECT pk FROM tab1 WHERE col0 BETWEEN 2 AND 5

Query was expected to return results (but did not): []
```

#### ☓ Ran 10022 tests as postgresql

* 10004 failed
* 0% was OK

_Mimic sqlite_
`setThreshold not implemented`
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE col3 < 6 OR col3 < 1 AND col3 BETWEEN 2 AND 7

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (col4 BETWEEN 6.51 AND 4.36) AND ((((col4 > 1.61)))) OR (col0 > 5) AND col0 > 9 OR col1 > 4.37 OR (col3 <= 4 AND col3 < 3 AND col0 >= 6) AND col1 = 3.2

Expected: ["0"] but got [0]
```

```sql
SELECT pk FROM tab0 WHERE (col4 IN (5.85,5.95,6.30,0.0,1.27) AND (col4 IN (9.41,4.56,2.55,0.83,3.95,6.92) AND (col1 = 6.24)) OR col0 IN (SELECT col3 FROM tab0 WHERE (((((col0 IN (8,1) AND col0 IS NULL AND col1 < 9.21) AND col4 > 8.64 AND (col3 >= 9) OR col0 < 5)))))) AND (col1 < 7.95 OR col0 < 0) AND col3 >= 9 AND col0 < 2 OR col4 BETWEEN 1.13 AND 0.71 AND (col3 > 9) AND (col0 < 3)

context is not defined
```

```sql
SELECT pk FROM tab3 WHERE ((col1 >= 2.99 AND col1 <= 6.11))

Query was expected to return results (but did not): []
```

#### ☓ Ran 10022 tests as sqlite

* 10004 failed
* 0% was OK

_Mimic unidentified DB_
`setThreshold not implemented`
```sql
INSERT INTO tab1 SELECT * FROM tab0

Wrong NULL value in NOT NULL column pk
```

```sql
SELECT pk FROM tab0 WHERE col3 < 6 OR col3 < 1 AND col3 BETWEEN 2 AND 7

Query was expected to return results (but did not): []
```

```sql
SELECT pk FROM tab0 WHERE (col4 BETWEEN 6.51 AND 4.36) AND ((((col4 > 1.61)))) OR (col0 > 5) AND col0 > 9 OR col1 > 4.37 OR (col3 <= 4 AND col3 < 3 AND col0 >= 6) AND col1 = 3.2

Expected: ["0"] but got [0]
```

```sql
SELECT pk FROM tab0 WHERE (col4 IN (5.85,5.95,6.30,0.0,1.27) AND (col4 IN (9.41,4.56,2.55,0.83,3.95,6.92) AND (col1 = 6.24)) OR col0 IN (SELECT col3 FROM tab0 WHERE (((((col0 IN (8,1) AND col0 IS NULL AND col1 < 9.21) AND col4 > 8.64 AND (col3 >= 9) OR col0 < 5)))))) AND (col1 < 7.95 OR col0 < 0) AND col3 >= 9 AND col0 < 2 OR col4 BETWEEN 1.13 AND 0.71 AND (col3 > 9) AND (col0 < 3)

context is not defined
```

