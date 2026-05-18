# Agent Operating Guide

This repo is configured for an agent-first website workflow.

## Agent Stack

- Primary workflow: Superpowers. Use it for intent discovery, spec, plan, test-first implementation, debugging, and review.
- Durable memory: agentmemory. Store only stable project decisions, conventions, architecture notes, and lessons learned.
- Selective skill library: everything-claude-code. Use specific skills only when relevant, especially frontend patterns, Next.js, E2E testing, security review, and verification loops.
- Do not run multiple memory systems for the same project. agentmemory is the source of truth for long-term memory.

## Working Rules

- Read `docs/PRODUCTION_PLAYBOOK.md`, `docs/PRODUCT_BRIEF.md`, `docs/SPEC.md`, `docs/HARNESS.md`, and this file before starting substantial work.
- If product intent is unclear, ask for the missing business or design decision before coding.
- Keep implementation scoped to the requested website behavior. Avoid unrelated refactors.
- Use Next.js App Router, TypeScript strict mode, Tailwind CSS, and accessible HTML.
- Prefer dense, usable product/site surfaces over decorative marketing filler.
- Use `lucide-react` icons for buttons or controls when an icon exists.
- Do not store secrets, API keys, credentials, private customer data, or temporary debugging notes in agentmemory.

## Harness Rules

- Identify the active production gate from `docs/PRODUCTION_PLAYBOOK.md` before substantial work.
- Classify every non-trivial implementation request with `docs/FEATURE_INTAKE.md`.
- Use `tiny` for low-risk copy/docs/narrow UI edits; patch directly and keep affected docs current.
- Use `normal` for story-sized work; create or update one story in `docs/stories/` and update `docs/TEST_MATRIX.md`.
- Use `high-risk` for auth, authorization, data loss, privacy/security, external providers, public contracts, or weakened validation; create a high-risk story folder from `docs/templates/high-risk-story/`.
- Record durable product or architecture decisions in `docs/decisions/`.
- Keep `docs/TEST_MATRIX.md` aligned with real proof. Do not mark behavior implemented without evidence.
- Create validation reports in `docs/validation/` for release-bound work, high-risk work, and production bug fixes.

## Verification

Run these before declaring a task done:

```bash
npm run verify:quick
npm run verify
```

For release or deployment readiness, run:

```bash
npm run verify:release
```

If dependencies are not installed, run `npm install` first. If Playwright browsers are missing, run `npx playwright install`.

## Memory Protocol

Remember only after a decision becomes durable:

- selected stack and package manager
- route structure
- design direction
- data model or API contracts
- deployment target
- recurring pitfalls or resolved bugs
- decision records created under `docs/decisions/`

Use short, concrete memory entries. Include file paths only when they are stable.
