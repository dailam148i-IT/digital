# US-002 Production MVP Shell

## Status

validated

## Lane

high-risk

## Product Contract

D13S must move from a generic starter homepage to a production-shaped digital commerce MVP shell with curated mock catalog, product details, mock checkout, account library, support tickets, blog/resources, policy pages, API validation, and Docker baseline.

The MVP is not allowed to collect real payments or issue production licenses until payOS credentials, webhook proof, policy approval, private delivery proof, and release validation exist.

## Acceptance Criteria

- Public UI is branded D13S, not generic `Digital`.
- Catalog exposes 10-15 curated mock products using production-shaped data.
- Product detail includes demo, price, stack, license, support, update, requirements, deliverables, and mock notice.
- Checkout is clearly labeled mock and cannot be mistaken for real payment.
- Account library, order history, and ticket support surfaces exist in mock mode.
- API routes validate checkout, webhook, download, and health behavior.
- Docker production baseline exists for VPS deployment.
- Playwright covers home, catalog, product detail, checkout, account, support, blog/services, and API controls.

## Dependencies

- Real payOS merchant credentials.
- Supabase project and production RLS policies.
- Final terms, refund/replacement, privacy, delivery, support, and license copy.
- Real product files, screenshots, demo URLs, and pricing approval.

## Out Of Scope

- Real payment collection.
- Real Supabase Auth sessions.
- Real private file delivery.
- CMS/admin dashboard.
- Marketplace vendor system.
- Subscription/membership.

## Launch Impact

preview-only until production credentials, policies, and validation gates pass.
