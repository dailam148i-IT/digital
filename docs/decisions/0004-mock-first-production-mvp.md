# 0004 Mock-First Production MVP

## Status

accepted

## Context

D13S needs a production-shaped digital commerce product, but real payOS credentials, Supabase configuration, policy approval, and product files are not available yet.

## Decision

Build the MVP shell with production-shaped mock data and explicit mock provider boundaries. The app may expose catalog, product details, checkout UX, account library, orders, support tickets, and route handlers, but it must not collect real payment or issue production licenses until high-risk gates pass.

## Consequences

- Product data can be replaced without changing route architecture.
- API contracts can be tested early.
- UI can be reviewed as a real product surface.
- Production checkout remains blocked by design until payOS, Supabase RLS, private storage, and policy evidence exist.
