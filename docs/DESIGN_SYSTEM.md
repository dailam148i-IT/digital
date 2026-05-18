# D13S Design System

## Reference Notes

Research references:

- Framer Marketplace: searchable marketplace surface, visual product cards, category navigation, strong template thumbnails.
- Vercel template/product surfaces: technical trust, concise metadata, dark/neutral contrast, developer-first clarity.
- shadcn block/ecommerce libraries: composable cards, dense controls, clear states, restrained radius, production UI primitives.

## Direction

D13S should feel like a curated digital product store for developers and business buyers, not a generic landing page.

- Dense but premium: product-first, not long marketing copy.
- Screenshot-like previews on cards.
- Strong dark ink, clean white cards, controlled blue/teal/amber accents.
- No emoji icons. Use `lucide-react`.
- Card radius stays at 8px.
- Product cards must show price, type, stack, license, support, update, demo, and detail CTA.
- Mock mode must be visible but not visually dominant over the product value.

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| `--background` | `#f6f8fb` | app background |
| `--foreground` | `#111827` | body text |
| `--ink` | `#0b1020` | strong headings/buttons |
| `--surface` | `#ffffff` | cards |
| `--surface-strong` | `#eef2f7` | panels |
| `--line` | `#d8e0ea` | borders |
| `--blue` | `#2563eb` | primary accent |
| `--teal` | `#0f766e` | trust/compliance |
| `--amber` | `#b45309` | mock/warning |
| `--danger` | `#b91c1c` | destructive/error |
| `--success` | `#047857` | success/license |

## Catalog Rules

- Catalog hero uses a two-column market header: title/copy/actions plus an operational panel.
- Filters are a toolbar, not large page sections.
- Default product view is one strong grid; category labels live in cards and filters.
- Product cards include a visual preview area before text.
- CTA row uses primary detail button and secondary demo link.
- Mobile keeps one-column cards with no horizontal overflow.

## QA Bar

- Check `/products` at 320, 375, 768, 1440.
- No console errors.
- No horizontal overflow.
- Product card text must not clip.
- Header must not consume too much of the first viewport on mobile.
- Mock labels must be visible and honest.
