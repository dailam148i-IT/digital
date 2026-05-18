# US-002 Design

## Routes

- `/`: D13S homepage with product, service, and control positioning.
- `/products`: catalog grouped by source, plugin, template, and bundle.
- `/products/[slug]`: product detail and mock checkout CTA.
- `/checkout/[slug]`, `/checkout/success`, `/checkout/cancel`: mock checkout flow.
- `/account/library`, `/account/orders`, `/account/tickets`: mock account surfaces.
- `/services`, `/blog`, `/blog/[slug]`, `/contact`, `/terms`, `/refund-policy`, `/privacy`, `/en`.
- `/api/checkout`, `/api/webhooks/payos`, `/api/downloads/[entitlementId]`, `/api/health`.

## Components

- `PageShell`, `SiteHeader`, `SiteFooter`
- `ProductCard`
- `SectionHeading`
- `CommercePanel`

## Data And Domain

- Catalog data is repo typed data under `src/modules/catalog`.
- Product schema validates slug, category, status, price, stack, demo, license, support, update, requirements, deliverables, and mock notice.
- Mock commerce data lives under `src/modules/commerce` and stays separate from production adapters.
- State machine and audit helpers define production constraints even while the UI uses mock flows.

## API And Security

- API request bodies are schema validated.
- Mock checkout returns explicit `integrationMode: mock`.
- Mock download returns a fake signed URL and warning text.
- Webhook route validates payload and redacts audit event identifiers in mock mode.
- Supabase service role and payOS keys are optional env fields but never exposed through client code.

## Accessibility And UI

- No emoji icons.
- Icons use `lucide-react`.
- Landmark navigation exists.
- Forms use real labels.
- Focus-visible styles are global.
- Mobile responsive behavior is covered by Playwright projects.
