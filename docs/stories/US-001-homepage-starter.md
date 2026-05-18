# US-001 Homepage Starter

## Status

validated

## Lane

normal

## Product Contract

The first website version exposes a clear homepage with hero copy, primary CTA, navigation anchors, service cards, process proof points, and contact CTA.

## Relevant Product Docs

- `docs/SPEC.md`
- `docs/PRODUCT_BRIEF.md`

## Acceptance Criteria

- The homepage has a visible H1 and primary CTA.
- Main navigation exposes Services, Process, and Contact.
- Services and Process anchors are reachable.
- The page works on desktop and mobile Chromium.

## Design Notes

- Framework: Next.js App Router.
- UI surface: `src/app/page.tsx`.
- Styling: `src/app/globals.css`.
- Icons: `lucide-react`.
- Current content is starter content and should be replaced after a real brief is accepted.

## Validation

| Layer | Expected Proof |
| --- | --- |
| Unit | Not needed for static starter content |
| Integration | Not needed because there is no backend/provider |
| E2E | `tests/home.spec.ts` |
| Platform | Desktop and mobile Chromium Playwright projects |
| Release | `npm run verify` |

## Harness Delta

Initial story packet created after adding the lightweight harness layer.

## Evidence

- `npm run verify` passed on 2026-05-17.
- `npm audit --audit-level=moderate` reported 0 vulnerabilities on 2026-05-17.
- `npm run verify:release` passed on 2026-05-17 using production-server E2E.
- Validation report: `docs/validation/2026-05-17-release-playbook-upgrade.md`.
