/**
 * Sort the failures of a --debug run into known patterns and new ones.
 *
 *   bun bun2-run/triage.js [results/debug.jsonl] [--examples=3] [--new-only] [--json]
 *
 * Each known pattern points at the AlaSQL issue (or decision) that covers it. A failure that
 * matches no pattern is "new": those are the ones worth a minimal example and an issue. When a new
 * pattern is understood, add it to KNOWN below.
 */
import fs from "fs";

const args = Bun.argv.slice(2);
const file = args.find(a => !a.startsWith("--")) || "results/debug.jsonl";
const examples = Number((args.find(a => a.startsWith("--examples=")) || "--examples=3").split("=")[1]);
const newOnly = args.includes("--new-only");
const asJson = args.includes("--json");

const isNull = v => v === "NULL";
const nullDiff = f =>
	Array.isArray(f.expected) &&
	Array.isArray(f.got) &&
	f.expected.length === f.got.length &&
	f.expected.some((e, i) => isNull(e) !== isNull(f.got[i]));
const decimalsOnly = f =>
	Array.isArray(f.expected) &&
	Array.isArray(f.got) &&
	f.expected.length === f.got.length &&
	f.got.some((g, i) => /^-?\d+\.\d{3}$/.test(g) && /^-?\d+$/.test(f.expected[i]));
const count = (s, re) => (s.match(re) || []).length;
// the text inside each match of re up to its closing parenthesis, with nested parentheses
const bodies = (sql, re) => {
	const out = [];
	for (const m of sql.matchAll(re)) {
		let depth = 1, i = m.index + m[0].length;
		const start = i;
		for (; i < sql.length && depth; i++) depth += sql[i] === "(" ? 1 : sql[i] === ")" ? -1 : 0;
		out.push(sql.slice(start, i - 1));
	}
	return out;
};
const castBodies = sql => bodies(sql, /\bCAST\s*\(/gi);
// an IN list (not a subquery) that holds more than plain literals
const inListWithExpr = sql => bodies(sql, /\bIN\s*\((?!\s*SELECT\b)/gi).some(b => !/^\s*(\d+(\.\d+)?|'[^']*'|NULL)(\s*,\s*(\d+(\.\d+)?|'[^']*'|NULL))*\s*$/i.test(b));

// the result column names of a select list: `x AS name` or `x name` (no AS) right before a comma,
// FROM or the end, or a bare (possibly qualified) column right after SELECT / ALL / DISTINCT / a comma
const selectNames = sql => [...sql.matchAll(/(?:\bAS\s+|(?<!\b(?:SELECT|ALL|DISTINCT)\s+)(?<=[\w)'])\s+|(?:\bSELECT|\bALL|\bDISTINCT|,)\s+(?:\w+\.)?)([a-z_]\w*)\s*(?=,|\bFROM\b|$)/gi)]
	.map(m => m[1].toLowerCase())
	.filter(n => !/^(end|null|and|or|not|then|else|asc|desc)$/.test(n));

// sqllogictest prints each value by its declared type; true when that alone makes the failure pass
const md5 = l => { const h = new Bun.CryptoHasher("md5"); h.update(l.join("\n") + "\n"); return h.digest("hex"); };
const asType = (v, t) => v === "NULL" || v === "(empty)" ? v
	: t === "I" ? (/^-?\d+(\.\d+)?$/.test(v) ? String(Math.trunc(Number(v))) : "0")
	: t === "R" ? (/^-?\d+(\.\d+)?$/.test(v) ? Number(v).toFixed(3) : "0.000") : v;
const passesWithTypes = f => {
	if (!f.colType || !Array.isArray(f.got)) return false;
	const w = f.colType.length, rows = [];
	for (let i = 0; i < f.got.length; i += w) rows.push(f.got.slice(i, i + w).map((v, j) => asType(v, f.colType[j])));
	if (f.sort === "rowsort") rows.sort((a, b) => { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] > b[i] ? 1 : -1; return 0; });
	const vals = f.sort === "valuesort" ? rows.flat().sort() : rows.flat();
	return f.expected && f.expected.hash ? md5(vals) === f.expected.hash : JSON.stringify(vals) === JSON.stringify(f.expected);
};

// [name, where it is tracked, test]. The first match wins, so the most specific come first.
const KNOWN = [
	// first: failures that pass once the declared column types and a value-by-value rowsort are applied (needs a --debug run with colType)
	["runner: column types or rowsort order", "not alasql (bun2-run)", passesWithTypes],
	["aggregate inside CAST throws", "#2764", f => /g is not defined/.test(f.msg)],
	// the runner sets options.modifier = "MATRIX" globally, which breaks every view
	["a view under the global MATRIX modifier", "#2772 (runner setting)", f => /Data source number/.test(f.msg) || /^test\/index\/view\//.test(f.file) && /\bview_\w+/i.test(f.sql)],
	["aggregate inside CAST gives a wrong value", "#2764", f => castBodies(f.sql).some(b => /\b(COUNT|SUM|AVG|MIN|MAX)\s*\(/i.test(b))],
	["column named by a number comes first (aggregate query)", "#2766", f =>
		Array.isArray(f.expected) && Array.isArray(f.got) && f.expected.length === f.got.length &&
		f.expected.join() !== f.got.join() && [...f.expected].sort().join() === [...f.got].sort().join()],
	["COUNT/AVG count NULL rows for -x, +x, ABS(x)", "#2767 (5.0)", f => /\b(COUNT|AVG)\s*\(\s*(ALL\s+|DISTINCT\s+)?[(\s]*([-+]|ABS\b)/i.test(f.sql)],
	["x IN tablename", "#2761", f => /evaluating 'p\['undefined'\]/.test(f.msg) || /\bIN\s+[a-z_]\w*\s*$/i.test(f.sql)],
	["INDEXED BY / NOT INDEXED", "#2762", f => /\bNOT\s+INDEXED\b|\bINDEXED\s+BY\b/i.test(f.sql)],
	["two result columns with the same name", "#2765", f => { const n = selectNames(f.sql); return n.length !== new Set(n).size; }],
	["SELECT * over a join with shared column names", "#2765 / #2636", f =>
		/^SELECT\s+(ALL\s+|DISTINCT\s+)?\*\s+FROM\b/i.test(f.sql) && /\bJOIN\b|\bFROM\s+\w+(\s+(AS\s+)?\w+)?\s*,/i.test(f.sql)],
	["an expression inside an IN list", "#2771", f => inListWithExpr(f.sql)],
	// NOT, then the left operand (also in parentheses), then IN ( or BETWEEN; not the NOT IN / NOT BETWEEN operators
	["NOT before IN or BETWEEN binds to the left operand only", "#2768", f =>
		/\bNOT\s+(?!IN\b|BETWEEN\b)(?:(?!\b(?:AND|OR|WHEN|THEN|ELSE|WHERE|HAVING)\b)[^])*?\b(IN\s*\(|BETWEEN\b)/i.test(f.sql) && !/^Expected to get an error/.test(f.msg)],
	["HAVING with an alias for an expression", "#2769", f => /\bHAVING\b/i.test(f.sql) && selectNames(f.sql.split(/\bFROM\b/i)[0] + " FROM").some(n => new RegExp("\\b" + n + "\\b", "i").test(f.sql.split(/\bHAVING\b/i)[1]))],
	["GROUP BY with a column selected twice", "#2770", f => /\bGROUP\s+BY\b/i.test(f.sql) && Array.isArray(f.got) && Array.isArray(f.expected) && f.got.length > f.expected.length],
	["UPDATE of a missing column", "#2754", f => /^UPDATE\b/i.test(f.sql) && /did not/.test(f.msg)],
	["CREATE TRIGGER with an existing name", "#2755", f => /^CREATE\s+TRIGGER/i.test(f.sql) && /did not/.test(f.msg)],
	["INSERT/UPDATE/DELETE on a view", "#2756", f => /\bview\w*\b/i.test(f.sql) && /^(INSERT|UPDATE|DELETE)/i.test(f.sql) && /did not/.test(f.msg)],
	["IN with a multi-column subquery", "#2757", f => /\bIN\s*\(\s*SELECT\s+(\*|(?:[^(),]|\([^()]*\))*,)/i.test(f.sql) && /did not/.test(f.msg)],
	["COUNT(DISTINCT *)", "#2758", f => /COUNT\s*\(\s*DISTINCT\s+\*/i.test(f.sql)],
	["DROP INDEX of a missing index", "#2759", f => /^DROP\s+INDEX/i.test(f.sql) && /did not/.test(f.msg)],
	["INSERT ... SELECT matches by name", "#2760", f => /^INSERT\s+INTO\s+\w+\s+SELECT/i.test(f.sql)],
	["a constant IN list answered by an earlier list", "#2753", f => /'[^']*'\s+IN\s*\(\s*'|\b\d+\s+IN\s*\(\s*\d/i.test(f.sql)],
	["unary + or - on a text column", "#2776 (5.0)", f => /(^|[^\w)])[-+]\s*[-+\s(]*col5\b/.test(f.sql) || /(^|[^\w)])[-+]\s*[-+\s(]*col2\b/.test(f.sql) && /^test\/index\//.test(f.file)],
	["two or more IN (SELECT ...) in one statement", "#2707", f => count(f.sql, /IN\s*\(\s*SELECT/gi) >= 2],
	["CAST(NULL ...) gives a value", "#2590 (5.0)", f => /CAST\s*\(\s*NULL\b/i.test(f.sql)],
	["CAST of a CASE without ELSE (NULL when no WHEN matches)", "#2590 (5.0)", f => castBodies(f.sql).some(b => /\bCASE\b/i.test(b) && !/\bELSE\b/i.test(b))],
	["NULL where SQLite has a value, or the reverse", "#2588 / #2597 (5.0)", nullDiff],
	["integer division gives decimals", "by design (JavaScript arithmetic)", f => /\//.test(f.sql) && decimalsOnly(f)],
	["NOT with a NULL comparison", "#2597 (5.0)", f => /\bNOT\b/i.test(f.sql) && /\bNULL\b/i.test(f.sql) && /^Expected: /.test(f.msg)],
	["NULL as a BETWEEN bound", "#2597 (5.0)", f => /\bBETWEEN\s+\(?\s*NULL\b|\bBETWEEN\b[^]*?\bAND\s+\(?\s*NULL\b/i.test(f.sql)],
	["GROUP BY columns of two sources with the same name", "#2637", f => /\bGROUP\s+BY\b[^]*\b(\w+)\.(\w+)\b[^]*\b(?!\1\.)\w+\.\2\b/i.test(f.sql)],
	["NULL with IN or NOT IN", "#2597 (5.0)", f => /\bNULL\b/i.test(f.sql) && /\bIN\s*\(/i.test(f.sql)],
	// last: a value that differs in a query with a division is most likely SQLite's integer division,
	// hidden when later arithmetic makes the result a whole number again (45 / 51 * -85 is 0 in SQLite)
	["probably integer division (the query divides)", "by design (JavaScript arithmetic)", f => /\//.test(f.sql) && /^Expected: |hash was different|results returned but expected|expected to return results/.test(f.msg)],
];

const lines = fs.readFileSync(file, "utf8").split("\n").filter(Boolean);
const failures = lines.map(l => JSON.parse(l));
const buckets = new Map();
const fresh = new Map(); // new failures grouped by a rough signature

for (const f of failures) {
	const k = KNOWN.find(([, , test]) => test(f));
	if (k) {
		const b = buckets.get(k[0]) || {issue: k[1], count: 0, examples: []};
		b.count++;
		if (b.examples.length < examples) b.examples.push(f);
		buckets.set(k[0], b);
		continue;
	}
	// signature: the error text without numbers and quoted parts, or the kind of difference
	const sig = /^Expected: /.test(f.msg)
		? "values differ" + (Array.isArray(f.got) && Array.isArray(f.expected) && f.got.length !== f.expected.length ? " (count)" : "")
		: f.msg.replace(/'[^']*'/g, "'…'").replace(/\d+/g, "N").slice(0, 100);
	const g = fresh.get(sig) || {count: 0, examples: []};
	g.count++;
	if (g.examples.length < examples) g.examples.push(f);
	fresh.set(sig, g);
}

if (asJson) {
	console.log(JSON.stringify({total: failures.length, known: Object.fromEntries(buckets), new: Object.fromEntries(fresh)}, null, 2));
	process.exit(0);
}

const show = f => `    ${f.file}\n      ${f.sql.slice(0, 400)}\n      => ${f.msg.slice(0, 300)}`;
console.log(`${failures.length} failures in ${file}\n`);
if (!newOnly) {
	console.log("Known:");
	for (const [name, b] of [...buckets].sort((a, b) => b[1].count - a[1].count))
		console.log(`  ${String(b.count).padStart(6)}  ${name}  [${b.issue}]`);
	console.log("");
}
console.log(`New (${[...fresh.values()].reduce((s, g) => s + g.count, 0)} failures, ${fresh.size} signatures):`);
for (const [sig, g] of [...fresh].sort((a, b) => b[1].count - a[1].count)) {
	console.log(`\n  ${String(g.count).padStart(6)}  ${sig}`);
	for (const f of g.examples) console.log(show(f));
}
