# Website Spec

Status: draft

Allowed values: draft | reviewed | approved

Do not implement production work from this spec until status is `approved` or the human explicitly accepts the open decisions.

## Objective

Build the first useful version of the D13S website from `docs/PRODUCT_BRIEF.md`.

## Current Technical Baseline

- Framework: Next.js App Router
- Language: TypeScript
- Styling: Tailwind CSS plus project CSS
- E2E: Playwright
- Icons: lucide-react
- Agent workflow: Superpowers + selected ECC skills + agentmemory

## Initial Site Structure

- `/`: home page with hero, services, process, and contact sections.

## Route Contracts

| Route | Purpose | Sections | Primary CTA | Metadata Status |
| --- | --- | --- | --- | --- |
| `/` | D13S public homepage | Hero, categories, trust, featured offers, contact/support | TBD | draft |
| `/products` | Digital product catalog | Filters/categories, product cards, policy notes | Browse/buy product | planned |
| `/services` | Website and digital service packages | packages, process, proof, consultation CTA | Request consultation | planned |
| `/courses` | Courses/resources | course cards, outcomes, proof | View courses | planned |
| `/contact` | Support and sales contact | contact methods, response expectations | Contact D13S | planned |
| `/terms` | Terms for digital sales | legal and usage terms | n/a | planned |
| `/refund-policy` | Refund/replacement policy | digital delivery and activation-code policy | n/a | planned |

## CTA Contracts

| CTA | Destination | Required Behavior | Status |
| --- | --- | --- | --- |
| Browse products | TBD | Opens product catalog or product section | planned |
| Build a website with D13S | TBD | Opens service inquiry path | planned |
| Contact support | TBD | Opens official support channel | planned |
| Contact | `mailto:hello@example.com` | Placeholder only until official channel is chosen | placeholder |

## SEO Contract

| Route | Title | Description | Canonical | OG Image | Sitemap |
| --- | --- | --- | --- | --- | --- |
| `/` | D13S | D13S digital products, website services, courses, and activation-code support. | TBD | TBD | include |
| `/products` | Digital Products | Browse D13S digital products, tools, courses, and activation-code offers. | TBD | TBD | include |
| `/services` | Website Services | Website and digital service packages from D13S. | TBD | TBD | include |
| `/courses` | Courses | Courses and resources from D13S. | TBD | TBD | include |

## Responsive Contract

- Mobile: 390px wide minimum target.
- Tablet: 768px wide target.
- Desktop: 1440px wide target.
- No text overlap or clipped controls are acceptable.
- Navigation and primary CTA must remain usable on mobile.

## Accessibility Contract

- One H1 per route.
- Logical heading order.
- Navigation landmark is present.
- Links and buttons have clear accessible names.
- Keyboard-visible focus states are required before production release.

## Analytics Contract

- Analytics provider: TBD.
- Conversion event: TBD; recommended defaults are product click, contact click, consultation request, and purchase if ecommerce exists.
- Required events before launch: contact/support click, product/category click, service CTA click.

## Forms And Error States

- Production contact form: not implemented.
- Current contact behavior: `mailto:` placeholder.
- Error/success states: required when a real form is added.
- If purchases are added, include delivery states, failed payment states, refund/replacement path, and fraud/manual review path.

## Non-Goals For Current Starter

- Auth.
- Payment.
- CMS integration.
- Production CRM integration.
- Production analytics.
- Backend contact form.
- Direct ecommerce checkout until payment/delivery/refund policy is approved.

## Quality Bar

- Responsive at mobile and desktop viewport sizes.
- Accessible landmarks, headings, links, and visible focus states.
- No secret values committed to the repo.
- `npm run verify` passes before release.

## Open Product Decisions

- Final brand name and positioning.
- Final content and calls to action.
- Asset direction: real photos, generated visuals, product screenshots, or brand graphics.
- Deployment target.
- Contact destination: email link, form, CRM, booking, or chat.
- Analytics and monitoring provider.
- Whether D13S launches as marketplace-first, services-first, courses-first, or hybrid.
- Product catalog structure, prices, delivery method, and support policy.
- Activation-code sourcing, legality, warranty, and refund/replacement rules.

## Implementation Blockers

- Final brief approval.
- Final content/SEO contract.
- Final deployment target.
- Final official support/contact channel.
- Digital product policy and activation-code compliance.
