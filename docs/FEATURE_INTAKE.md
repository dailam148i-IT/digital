# Feature Intake

Every implementation request passes through intake before code changes. The goal is to decide how much process the task needs.

## Input Types

| Type | Use When | Typical Artifact |
| --- | --- | --- |
| New spec | A raw idea or full product spec needs to become buildable work | `PRODUCT_BRIEF.md`, `SPEC.md`, stories |
| Spec slice | A selected behavior from the accepted spec is being built | story packet |
| Change request | Existing behavior needs a fix or refinement | story packet or direct patch |
| New initiative | A larger area needs multiple stories | initiative notes plus stories |
| Maintenance | Dependencies, tests, performance, security, or tooling | story or validation report |
| Harness improvement | Improving agent workflow or docs | direct docs update |

## New Spec Readiness

Before turning a raw idea into implementation work, confirm:

- primary audience is known
- offer and primary CTA are known
- required pages are known
- content/asset ownership is known or explicitly placeholder
- SEO topics are known or intentionally deferred
- deployment target is known or intentionally deferred
- legal/compliance risks are named or not applicable
- success criteria are measurable

If these are missing, stay in discovery and update `docs/DISCOVERY.md` plus `docs/PRODUCT_BRIEF.md`. Do not create implementation stories from an under-specified idea unless the human explicitly accepts the assumptions.

## Lanes

### Tiny

Use for low-risk docs, copy, metadata, or narrow UI edits.

Requirements:

- Patch directly.
- Keep affected docs current.
- Run quick checks if code changed.
- No story packet required unless the change affects accepted behavior.

### Normal

Use for story-sized product work with bounded scope.

Requirements:

- Create or update one file in `docs/stories/`.
- Link relevant brief/spec sections.
- Add or update `docs/TEST_MATRIX.md`.
- Implement one vertical slice.
- Run relevant verification commands.

### High-Risk

Use when the work can affect security, data, contracts, external systems, or multiple product domains.

Requirements:

- Create a folder under `docs/stories/high-risk/` using `docs/templates/high-risk-story/`.
- Fill overview, design, execplan, and validation.
- Ask for human confirmation before implementation if direction is ambiguous.
- Record a decision in `docs/decisions/` when behavior or architecture changes.

## Risk Checklist

Mark each item that applies:

| Risk Flag | Applies When The Work Touches |
| --- | --- |
| Auth | login, logout, sessions, tokens, passwords |
| Authorization | roles, permissions, tenant/company scope |
| Data model | schema, migrations, deletion, retention |
| Privacy/security | sensitive data, audit logs, access logs |
| External systems | payments, email, CMS, cloud services, provider SDKs |
| Public contracts | API shape, route behavior, SEO contract, form contract |
| Cross-platform | desktop/mobile/browser behavior split |
| Existing behavior | already implemented or test-covered behavior changes |
| Weak proof | missing or unclear tests |
| Multi-domain | more than one product area changes at once |

Classification:

- 0-1 flags: tiny or normal based on code impact.
- 2-3 flags: normal with stronger validation.
- 4+ flags: high-risk.
- Any auth, authorization, data loss, privacy/security, external provider, or validation-removal gate is high-risk unless the human narrows scope.

## Intake Output

At the end of intake, the agent should be able to state:

```text
Lane: normal
Reason: changes homepage content and CTA behavior.
Docs: PRODUCT_BRIEF.md, SPEC.md
Story: docs/stories/US-002-homepage-content.md
Validation: typecheck, lint, build, e2e
```
