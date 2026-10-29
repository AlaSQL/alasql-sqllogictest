# SQLlogictest results for AlaSQL

`2026-10-29T02:20:45.215Z target: alasql@4.22.0`

This is a subset of the total 622 tests.
Results from 1 test files:

_Progress: each test is printed as it runs, with the time it took; only tests that took 2000 ms or more are printed (a group of setup statements by its total time). Failures are printed as usual._


---- ---- ---- ---- ---- ---- ----
### 1/1 [`test/select4.test`](https://github.com/alasql/alasql-logictest/blob/master/test/select4.test)

_Mimic sqlite_

```sql
SELECT e1 FROM t1 WHERE a1 in (767,433,637,363,776,109,451) OR c1 in (683,531,654,246,3,876,309,284) OR (b1=738) EXCEPT SELECT b8 FROM t8 WHERE NOT ((761=d8 AND b8=259 AND e8=44 AND 762=c8 AND 563=a8) OR e8 in (866,579,106,933)) EXCEPT SELECT e6 FROM t6 WHERE NOT ((825=b6 OR d6=500) OR (230=b6 AND …

18 results returned but expected 41
```


```sql
SELECT e9 FROM t9 WHERE (264=e9) OR (608=d9 AND 245=b9 AND 365=a9) OR d9 in (821,360,686,601,720,744,606,450,818,270,732,111,737) INTERSECT SELECT c1 FROM t1 WHERE NOT ((b1=255) OR (544=a1 OR 775=c1 OR 60=b1) OR (523=c1)) UNION SELECT e8 FROM t8 WHERE (269=b8 AND e8=272) OR (e8=579 OR 729=e8) OR (7…

Expected: ["179","579","729","736","788"] but got ["736","788","788"]
```


```sql
SELECT d1 FROM t1 WHERE (731=e1) INTERSECT SELECT b4 FROM t4 WHERE NOT ((e4=29 AND 35=b4)) EXCEPT SELECT c5 FROM t5 WHERE NOT (a5 in (447,637,297,878,341,311,960,362,921,740,867,429,800) OR a5 in (270,976,904,878,330,476,335,757,821,447,50,180,818,153) OR c5 in (140,155,149,3,545,579,657,978,86,855…

Query was expected to return results (but did not)
```


```sql
SELECT e1 FROM t1 WHERE a1 in (23,524,668) OR a1 in (629,553,853,88,931,895,972,189,767,267,591) EXCEPT SELECT b4 FROM t4 WHERE NOT ((358=c4) OR a4 in (81,596,804,558,845,355,513,950) OR (948=c4)) EXCEPT SELECT a7 FROM t7 WHERE NOT ((970=e7) OR (648=c7)) EXCEPT SELECT e5 FROM t5 WHERE NOT ((d5=360)…

Correct amount of values returned but hash was different than expected.
```

- `SELECT a3, a2, e1, a9+b9, e4*658+b1, x8 FROM t3, t1, t9, t2, t8, t4 WHERE (e9=245 OR 35=e9 OR 799=e9) AND c2=374 AND a3=e1 AND b4 in (408,261,877,33) AND e8 in (874,329,487,242,533,56,203,893) AND a1 in (380,992,32,189,338,358,161,538)` ✓ 2555 ms
- `SELECT a3, a2, e1, a9+b9, e4*658+b1, x8 FROM t1, t2, t9, t8, t3, t4 WHERE b4 in (408,261,877,33) AND c2=374 AND e8 in (874,329,487,242,533,56,203,893) AND a3=e1 AND (e9=245 OR 35=e9 OR 799=e9) AND a1 in (380,992,32,189,338,358,161,538)` ✓ 2618 ms
- `SELECT a3, a2, e1, a9+b9, e4*658+b1, x8 FROM t8, t9, t2, t3, t1, t4 WHERE b4 in (408,261,877,33) AND c2=374 AND (e9=245 OR 35=e9 OR 799=e9) AND a1 in (380,992,32,189,338,358,161,538) AND e8 in (874,329,487,242,533,56,203,893) AND a3=e1` ✓ 2776 ms
- `SELECT a3, a2, e1, a9+b9, e4*658+b1, x8 FROM t9, t3, t4, t1, t2, t8 WHERE a3=e1 AND a1 in (380,992,32,189,338,358,161,538) AND e8 in (874,329,487,242,533,56,203,893) AND c2=374 AND (e9=245 OR 35=e9 OR 799=e9) AND b4 in (408,261,877,33)` ✓ 2646 ms
- `SELECT d1*631, a4+637+a1, a8, x6, c2, e3 FROM t6, t8, t2, t3, t4, t1 WHERE e8 in (548,632,981,646,63,487,859) AND a2 in (651,814,709,445,863) AND d6 in (729,729,924,807,458,956) AND (a3=490 OR a3=697) AND (114=b4 OR b4=802) AND a1=553`