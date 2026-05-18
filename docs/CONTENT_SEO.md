# Content And SEO

This file defines the content and search contract for the website.

## Content Gate

Do not finalize UI before the content contract is clear:

- each route has a purpose
- each route has a primary CTA
- each section has an owner and content status
- SEO metadata is planned
- images/assets are identified or explicitly placeholder
- legal/compliance copy is identified when needed

## Route Inventory

| Route | Purpose | Primary CTA | SEO Target | Content Status |
| --- | --- | --- | --- | --- |
| `/` | D13S public homepage | TBD; likely Browse products | D13S, san pham so, digital products | draft |
| `/products` | Digital product catalog | Browse/buy product | san pham so, ma active, digital tools | planned |
| `/services` | Website and digital service packages | Request consultation | thiet ke website, landing page, digital service | planned |
| `/courses` | Courses/resources | View courses | khoa hoc online, digital skills | planned |
| `/contact` | Sales/support contact | Contact D13S | ho tro D13S, lien he D13S | planned |

## Page Section Inventory

| Page | Section | Job | Content Source | Status |
| --- | --- | --- | --- | --- |
| Home | Hero | Explain what D13S sells and drive primary CTA | needs business decision | draft |
| Home | Categories | Split Build / Buy / Learn offers | business analysis | draft |
| Home | Featured products/services | Show initial offers | product list needed | blocked |
| Home | Trust/policies | Reduce scam/support/refund concerns | policy needed | blocked |
| Home | Contact/support | Provide next action | official channel needed | blocked |
| Products | Catalog | Let users browse digital offers | product inventory needed | blocked |
| Services | Website packages | Sell website/digital services | package/pricing/proof needed | blocked |
| Courses | Course list | Sell learning products | course inventory needed | blocked |

## D13S SEO Risks

- "Ma active" and software/license code keywords may create trust and compliance risk if source and policy are unclear.
- Broad keywords like "san pham so" are competitive; narrow by product category, geography, and proof.
- Do not publish claims like "gia re nhat", "ban quyen vinh vien", or "chinh hang" unless verified.
- Product pages need unique copy; duplicated supplier text is weak for SEO.

## D13S Content Needed Before UI Build

- Initial product categories.
- 5-10 priority products or service packages.
- Pricing or price display policy.
- Delivery method and expected time.
- Warranty/refund/replacement policy.
- Support channel and hours.
- Proof: reviews, portfolio, screenshots, partners, or case studies.
- Legal terms for digital goods and activation codes.

## SEO Checklist

For every public route:

- unique title
- unique meta description
- canonical URL strategy
- Open Graph title/description/image
- social preview checked
- one H1
- logical H2/H3 structure
- internal links are intentional
- image alt text is meaningful
- route is included or excluded intentionally from sitemap
- robots behavior is intentional
- structured data considered when relevant

## Copy Quality Checklist

Copy is acceptable when:

- the H1 says what the page is or offers
- the first viewport makes the brand/product/category obvious
- every section answers one user question
- CTA labels are action-oriented
- proof claims are specific and supportable
- no placeholder copy remains
- no claim creates legal, pricing, delivery, or compliance risk

## Mock Content Policy

- Missing product, policy, pricing, asset, or proof information may use mock data only when it is clearly labeled `Mock`, `Placeholder`, or `TBD`.
- Mock data must not pretend to be real legal policy, verified license terms, customer proof, official certification, final price, or production delivery promise.
- Mock product data must use the same shape expected for production product data so real data can replace it without architecture changes.
- Replacing mock data with real information requires updating the affected product/content files, policy docs, `docs/TEST_MATRIX.md`, and validation evidence when behavior changes.

## Asset Checklist

For each important image/video:

- source or generation method is known
- usage rights are acceptable
- dimensions are appropriate
- file size is controlled
- alt text exists when informative
- mobile crop is checked

## Content/SEO Prompt

```text
Review docs/PRODUCT_BRIEF.md and docs/SPEC.md, then update docs/CONTENT_SEO.md. Define route inventory, section inventory, SEO metadata needs, asset needs, and copy risks. Do not code until the content gate is complete or assumptions are explicitly accepted.
```
