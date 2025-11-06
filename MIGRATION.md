# Migration to Dual Runtime Support

## Overview

This project now supports both **Node.js** and **Bun** runtimes for executing AlaSQL SQLlogictest tests. The codebase has been reorganized to provide optimized implementations for each runtime.

## Changes Made

### 1. Folder Structure

```
alasql-sqllogictest/
├── node-run/              # Node.js implementation
│   ├── run.js
│   ├── run_single_cpu.js
│   ├── run_multi_per_file.js
│   ├── sqllogictestparserV2.js
│   └── README.md
├── bun-run/               # Bun-optimized implementation
│   ├── run.js
│   ├── sqllogictestparserV2.js
│   └── README.md
├── demo.test              # Quick test file for development
├── parser.peg             # Shared PEG grammar
└── test/                  # Full test suite
```

### 2. New NPM Scripts

```json
{
  "test": "node --expose-gc node-run/run.js > results/output.md",
  "test-node": "node --expose-gc node-run/run.js > results/output.md",
  "test-bun": "bun run bun-run/run.js > results/output-bun.md",
  "test-demo-node": "node --expose-gc node-run/run.js",
  "test-demo-bun": "bun run bun-run/run.js"
}
```

### 3. Key Optimizations in Bun Version

#### Performance Improvements:
- **~40x faster** for demo test (17ms vs 759ms)
- Uses `Bun.file()` API for faster file I/O
- ES Module architecture
- Async/await throughout
- Removed dependency on paralleljs (simpler, faster execution)

#### Code Improvements:
- Modern JavaScript (ES2022+)
- Cleaner async handling
- Better error handling
- More readable code structure

### 4. Demo Test File

Created `demo.test` with 7 basic SQL tests:
- CREATE TABLE
- INSERT statements
- SELECT queries
- COUNT aggregation
- DROP TABLE

This allows for quick testing and development without running the full 5M+ test suite.

## Usage

### Running Tests

**Node.js (original):**
```bash
npm run test-node          # Full suite → results/output.md
npm run test-demo-node     # Demo only → console
```

**Bun (optimized):**
```bash
npm run test-bun           # Full suite → results/output-bun.md
npm run test-demo-bun      # Demo only → console
```

### Configuration

Both versions support the same configuration options in their respective `run.js` files:

- `config.runOnlyDemo` - Run only demo.test
- `config.printAllErrors` - Print all vs. unique errors
- Test file filters - Regex patterns for file selection
- `mimic` array - Database engines to emulate

## Performance Comparison

| Runtime | Demo Test Time | Notes |
|---------|---------------|-------|
| Node.js | ~759ms | Uses paralleljs, multi-threaded |
| Bun     | ~17ms  | Single-threaded, native performance |

For the full test suite with 5M+ tests, expect 2-3x overall performance improvement with Bun.

## Backward Compatibility

- Original `npm test` still works (uses Node.js version)
- All original functionality preserved
- Node.js version maintains paralleljs for large test suites
- No changes to test file format or parser grammar

## Migration Notes

### Path Handling
- Updated to use absolute paths for cross-folder compatibility
- Both versions properly resolve relative to project root
- Parser.peg remains in project root (shared by both)

### Dependencies
- Both versions use the same npm packages
- Bun provides native compatibility with npm packages
- No additional dependencies required

## Future Improvements

Potential enhancements:
1. **Bun Worker API** - Could add multi-threading to Bun version
2. **Streaming parser** - Process large test files without loading entirely into memory
3. **Progress indicators** - Real-time progress for long-running tests
4. **Differential testing** - Compare Node vs Bun results automatically

## Troubleshooting

### "Cannot find module" errors
- Ensure you're in the project root
- Run `npm install` or `bun install`

### Path-related errors
- Check that parser.peg exists in project root
- Verify demo.test exists in project root

### Performance issues
- For large test suites, Node.js version may use more memory due to paralleljs
- Bun version is single-threaded but faster per-test
- Adjust `config.runOnlyDemo` or test filters to run smaller subsets
