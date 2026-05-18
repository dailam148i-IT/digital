# Project Harness

This project uses a lightweight harness adapted from `hoangnb24/harness-experimental`.

The app is what users touch:

- `src/app/`
- public website pages
- tests
- build and deploy configuration

The harness is what agents touch before and after implementation:

- `AGENTS.md`
- `docs/PRODUCT_BRIEF.md`
- `docs/SPEC.md`
- `docs/FEATURE_INTAKE.md`
- `docs/stories/`
- `docs/TEST_MATRIX.md`
- `docs/decisions/`
- `docs/templates/`

## Source Hierarchy

Use this order when deciding what to do:

1. User request in the current thread.
2. `AGENTS.md`.
3. `docs/PRODUCT_BRIEF.md`.
4. `docs/SPEC.md`.
5. Relevant story packet in `docs/stories/`.
6. `docs/TEST_MATRIX.md`.
7. `docs/decisions/`.
8. agentmemory recall, only for durable context.

If sources conflict, pause and resolve the product or technical decision before implementation.

## Task Loop

Every non-trivial task follows this loop:

1. Classify the request with `docs/FEATURE_INTAKE.md`.
2. Identify affected brief/spec/story/test-matrix rows.
3. Create or update a story packet when the work is larger than a tiny edit.
4. Implement the smallest useful slice.
5. Run the relevant verification commands.
6. Update `docs/TEST_MATRIX.md` with proof.
7. Record durable decisions in `docs/decisions/` and agentmemory when appropriate.

## What Changes The Harness

Update harness docs when:

- product behavior changes
- validation expectations change
- a story is implemented, blocked, changed, or retired
- a durable architecture or design decision is made
- an agent repeats the same confusion or manual reasoning

Do not use harness files as busywork. For small copy changes, update only the affected docs and run the relevant quick checks.

