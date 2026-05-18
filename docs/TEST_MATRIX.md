# Test Matrix

This file maps accepted product behavior to proof. Do not mark a row implemented until evidence exists.

## Status Values

| Status | Meaning |
| --- | --- |
| planned | Accepted as intended behavior, not implemented |
| in_progress | Actively being built |
| implemented | Implemented and proof exists |
| changed | Contract changed after earlier implementation |
| validated | Release-level proof exists |
| deployed | Behavior is live in production |
| retired | No longer part of the product contract |

## Matrix

| Story | Contract | Unit | Integration | E2E | Accessibility | SEO | Performance | Platform | Deploy Smoke | Production URL | Status | Last Verified | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| US-001 | Homepage exposes hero, navigation, CTA, services, process, and contact sections | no | no | yes | basic landmarks/headings | metadata starter | not measured | desktop/mobile Chromium | no | n/a | validated | 2026-05-17 | `tests/home.spec.ts`; `npm run verify:release` passed; `docs/validation/2026-05-17-release-playbook-upgrade.md` |
| US-001 | Anchor navigation reaches services and process sections | no | no | yes | link names visible | n/a | not measured | desktop/mobile Chromium | no | n/a | validated | 2026-05-17 | `tests/home.spec.ts`; `npm run verify:release` passed; `docs/validation/2026-05-17-release-playbook-upgrade.md` |
| US-002 | D13S production MVP shell exposes home, catalog, product detail, services, blog, account, support, policy, and mock checkout routes | yes | API route validation | yes | landmarks, labels, focus styles, visual QA | route metadata starter | build passed | desktop/mobile Chromium plus 320/375/768/1440 screenshots | no real VPS | n/a | validated | 2026-05-18 | `tests/d13s.spec.ts`; `npm run verify:release` passed; `docs/validation/2026-05-18-production-mvp-shell.md` |
| US-002 | Mock checkout, webhook, and download APIs validate input and label mock mode explicitly | yes | route handlers | yes | n/a | n/a | build passed | API + Chromium | no real VPS | n/a | validated | 2026-05-18 | `tests/d13s.spec.ts`; `npm run verify:release` passed; `docs/validation/2026-05-18-production-mvp-shell.md` |

## Evidence Rules

- Unit proof covers pure functions and isolated rules.
- Integration proof covers backend, provider, data, or service boundaries.
- E2E proof covers user-visible browser flows.
- Platform proof covers deployment, desktop/mobile rendering, runtime behavior, or browser-specific checks.
- A story can be implemented without every proof column when the story explains why.
