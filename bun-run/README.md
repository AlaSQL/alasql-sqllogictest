# Bun Test Runner

This folder contains Bun-optimized test runners for AlaSQL SQLlogictest.

## Performance Improvements

The Bun version leverages:
- **Bun's native file I/O** - Faster file reading with `Bun.file()` API
- **ES Modules** - Modern JavaScript module system
- **Async/await** - Better async handling for test execution
- **Native performance** - Bun's optimized JavaScript runtime

## Files

- `run.js` - Main test runner (async, single-threaded)
- `sqllogictestparserV2.js` - Test file parser using Bun's file API

## Usage

From the project root:

```bash
# Run all tests (outputs to results/output-bun.md)
npm run test-bun

# Run demo test (outputs to console)
npm run test-demo-bun
```

Or directly:

```bash
cd bun-run
bun run run.js
```

## Configuration

Edit the `CONFIG START` section in `run.js` to customize:

- `config.runOnlyDemo` - Set to `true` to run only demo.test
- `config.printAllErrors` - Print all errors vs. unique errors only
- Test file filters - Modify the regex patterns to select which test files to run
- `mimic` array - Which database engines to mimic

## Why Bun?

Bun is significantly faster than Node.js for:
- File I/O operations (reading test files)
- Module resolution and loading
- JavaScript execution
- JSON parsing

Expected performance improvements: 2-3x faster test execution for large test suites.
