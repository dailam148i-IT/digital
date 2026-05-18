# US-002 Validation

## Expected Proof

| Layer | Expected Proof |
| --- | --- |
| Unit | TypeScript compile validates module contracts |
| Integration | Route handlers validate checkout, webhook, download, and health |
| E2E | Playwright covers public, account, checkout, and API mock flows |
| Platform | Build and production-server E2E |
| Release | `npm run verify:release` |

## Required Checks

- `npm run verify:quick` passed on 2026-05-18.
- `npm run verify` passed on 2026-05-18.
- `npm run verify:release` passed on 2026-05-18.
- Visual QA screenshots passed at 320, 375, 768, and 1440 widths.

## Security Notes

- Mock payment is not production payment.
- Mock download is not real file delivery.
- Production launch remains blocked until policy, Supabase RLS, payOS webhook verification, private storage, backup, and deploy smoke pass.

## Evidence

- Validation report: `docs/validation/2026-05-18-production-mvp-shell.md`.
- Screenshots: `docs/validation/screenshots/2026-05-18-production-mvp/`.
- E2E spec: `tests/d13s.spec.ts`.
