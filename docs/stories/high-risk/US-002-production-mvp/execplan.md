# US-002 Exec Plan

## Implementation Order

1. Create `feat/production-mvp` branch.
2. Add production-shaped catalog schema and 12 mock products.
3. Replace starter homepage with D13S commerce positioning.
4. Add catalog, product detail, services, blog, contact, policy, English, checkout, account, and API routes.
5. Add state machine, audit helper, Supabase adapter placeholder, payOS adapter placeholder, env schema, Docker baseline.
6. Replace starter Playwright tests with MVP flow tests.
7. Update harness docs and validation evidence.
8. Run `npm run verify:quick`, `npm run verify`, and `npm run verify:release`.
9. Push branch and keep `main` untouched until review.

## Rollback Or Disable Plan

- Revert the `feat/production-mvp` branch before merge.
- Disable public checkout by keeping the app in mock mode through missing payOS credentials.
- If a route fails QA, keep it off `main` and preserve the existing baseline commit.
