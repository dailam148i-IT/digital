# Design QA

Design QA verifies the website as a visual and interactive product, not just as code.

## Required Viewports

Check at minimum:

| Viewport | Size | Purpose |
| --- | --- | --- |
| Mobile | 390 x 844 | common phone layout |
| Tablet | 768 x 1024 | mid-size layout |
| Desktop | 1440 x 900 | primary desktop layout |

## Visual QA Checklist

- no text overlaps
- no text is clipped inside buttons, cards, nav, or hero
- tap targets are large enough on mobile
- navigation remains usable on mobile
- hero first viewport shows the brand/product/category clearly
- next section is discoverable from the first viewport when relevant
- spacing is consistent across sections
- cards are not nested inside decorative cards
- layout does not rely on one-color palette only
- focus states are visible
- hover states do not shift layout
- icons support actions and do not replace necessary labels
- images are not blurred/cropped so heavily that they lose meaning

## Accessibility QA Checklist

- one H1 per page
- headings follow a logical order
- landmarks exist: header/nav/main/footer when relevant
- links have clear accessible names
- buttons are buttons; links are links
- form fields have labels and errors when forms exist
- color contrast is sufficient
- keyboard navigation reaches interactive elements
- reduced-motion considerations are handled when animations exist

## Browser QA Checklist

Use Browser or Playwright to verify:

- desktop screenshot
- mobile screenshot
- nav anchors
- CTA links
- console errors
- layout after reload
- production URL after deploy

## Design QA Prompt

```text
Run design QA on localhost:3000 using desktop, tablet, and mobile viewports. Check visual layout, text overflow, accessibility basics, nav anchors, CTA links, and browser console errors. Fix blockers, then update docs/TEST_MATRIX.md and story evidence.
```

