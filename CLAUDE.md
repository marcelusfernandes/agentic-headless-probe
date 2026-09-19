# agentic-headless-probe

A disposable repository: one headless run of the agentic-setup orchestrator.

## Invariants

1. One module per file under `src/`, one test file per module under `tests/`, named
   `tests/<module>.test.mjs`.
2. No dependencies: `package.json` declares none and no code imports outside `node:` and `src/`.
3. `npm test` is the only test command and it is green on `main`.
4. Every exported function has a test that fails without it.
