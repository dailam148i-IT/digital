# 0001 Agent-First Next.js Starter

Date: 2026-05-17

## Status

Accepted

## Context

The project needs a first-agent website workflow that can move from raw idea to product brief, spec, story-sized work, implementation, verification, and future memory.

## Decision

Use a Next.js App Router starter with TypeScript, Tailwind CSS, Playwright, Superpowers as the primary workflow, agentmemory for durable memory, selected ECC skills, and a lightweight harness layer for intake, story packets, test matrix, and decision records.

## Alternatives Considered

1. Full harness installer from `hoangnb24/harness-experimental`.
2. Superpowers plus agentmemory only.
3. A plain Next.js starter without agent-specific docs.

## Consequences

Positive:

- Agents have a clear source hierarchy and verification loop.
- Product work can be split into story-sized slices.
- Test evidence and durable decisions are tracked in the repo.

Tradeoffs:

- More docs must stay current.
- Tiny changes need discipline to avoid unnecessary process.

## Follow-Up

- Replace starter content after the real product brief is accepted.
- Update `docs/TEST_MATRIX.md` as new behavior is implemented.

