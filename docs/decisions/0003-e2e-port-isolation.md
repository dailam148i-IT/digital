# 0003 E2E Port Isolation

Date: 2026-05-17

## Status

Accepted

## Context

The release workflow needs reliable local and CI verification. A fixed E2E port can collide with an existing Next.js process, and stale servers can make tests pass against the wrong build or fail before the new app starts.

## Decision

Run development and production E2E through Node wrapper scripts that allocate an available local port, pass it to Playwright through `PLAYWRIGHT_BASE_URL`, and treat non-OK readiness responses as startup failures.

## Alternatives Considered

1. Keep a fixed port and ask contributors to manually stop old servers.
2. Let Playwright own `webServer` startup in config.
3. Retry the same port after a collision.

## Consequences

Positive:

- E2E runs are less sensitive to stale local processes.
- CI and Windows verification can reuse the same scripts.
- Tests target the server started by the current verification command.

Tradeoffs:

- The startup logic now lives in scripts instead of Playwright config.
- Debugging requires checking the wrapper output for the allocated URL.

## Follow-Up

- Keep `PLAYWRIGHT_BASE_URL` support so preview URLs can be tested directly.
- Add visual and accessibility checks once D13S content and layouts are real.
