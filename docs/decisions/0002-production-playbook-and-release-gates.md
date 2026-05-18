# 0002 Production Playbook And Release Gates

Date: 2026-05-17

## Status

Accepted

## Context

The initial agent-first harness was enough for local website iteration, but not strict enough for a demanding production workflow from idea to deployment. Independent reviews identified missing gates for discovery approval, content/SEO, story lifecycle, validation reports, CI, production-server E2E, launch, rollback, and post-launch monitoring.

## Decision

Add a production playbook with explicit gates, strengthen brief/spec/story/test artifacts, add validation reports, pin dependency ranges, add Node version files, add GitHub Actions CI, Dependabot, CodeQL, and split local dev E2E from production-server E2E.

## Alternatives Considered

1. Keep only the lightweight harness.
2. Add launch docs without changing scripts.
3. Rely on Vercel preview checks only.

## Consequences

Positive:

- Release-bound work now has a stricter evidence path.
- CI can run production-server E2E instead of `next dev`.
- Future agents have stop conditions before coding or deployment.

Tradeoffs:

- More docs must be kept current.
- Release verification is slower than quick local verification.

## Follow-Up

- Fill discovery and product brief with the real website idea.
- Add real SEO metadata, assets, analytics, monitoring, and deployment settings after product direction is approved.

