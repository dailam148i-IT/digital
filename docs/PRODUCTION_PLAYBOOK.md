# Production Playbook

This is the strict operating playbook for moving from raw idea to deployed website. Use it as the control panel for all other docs.

## Gate Model

Do not skip gates. A gate is complete only when the required artifact exists and the listed evidence is present.

| Gate | Goal | Required Artifacts | Evidence |
| --- | --- | --- | --- |
| 0. Orientation | Agent understands the repo and constraints | `AGENTS.md`, `docs/HARNESS.md`, this file | Agent restates source hierarchy and verify commands |
| 1. Discovery | Raw idea becomes a clear business and user problem | `docs/DISCOVERY.md`, `docs/PRODUCT_BRIEF.md` | Open questions closed or explicitly accepted |
| 2. Content and SEO | The site has a page/content/search contract | `docs/CONTENT_SEO.md`, `docs/SPEC.md` | Routes, metadata, CTA, content inventory defined |
| 3. Story Intake | Work is sized and risk-classified | `docs/FEATURE_INTAKE.md`, `docs/stories/*` | Lane, story, acceptance criteria, validation listed |
| 4. Implementation | Code changes are narrow and evidence-driven | Source files, tests | Relevant checks pass |
| 5. Design QA | UI is reviewed as a real user surface | `docs/DESIGN_QA.md`, optional `docs/validation/*` | Desktop/mobile/browser checks documented |
| 6. Release | Production readiness is proven | `docs/RELEASE_CHECKLIST.md`, `docs/LAUNCH.md` | `npm run verify:release` passes or blockers recorded |
| 7. Deploy | Production deployment is controlled | `docs/DEPLOYMENT.md` | URL, env, DNS, rollback, smoke checks documented |
| 8. Post-launch | Launch is monitored and learnings are captured | `docs/POST_LAUNCH.md` | Monitoring, analytics, issues, decisions updated |

## Stop Conditions

Stop and ask the human before coding when:

- target audience, offer, or primary CTA is unclear
- route structure or page ownership is disputed
- a change touches forms, payments, auth, CRM, analytics, privacy, or external providers
- deployment target is unknown but the task affects env/config/build behavior
- existing docs, story, and user request disagree
- validation proof cannot be produced

## Production Definition Of Done

A website is production-ready only when:

- `docs/PRODUCT_BRIEF.md` reflects the accepted business intent
- `docs/SPEC.md` reflects the current implemented behavior
- normal/high-risk work has story evidence
- `docs/TEST_MATRIX.md` maps accepted behavior to proof
- `docs/DESIGN_QA.md` checks have been run for desktop and mobile
- `docs/CONTENT_SEO.md` checks are complete
- `npm run verify:release` passes
- release or high-risk validation reports live in `docs/validation/`
- deployment runbook is filled for the chosen host
- post-launch checks are scheduled or explicitly deferred

## Strict Agent Prompt

Use this when starting serious work:

```text
You are working in a strict production playbook. Read AGENTS.md and docs/PRODUCTION_PLAYBOOK.md first. Do not code until you identify the current gate, missing artifacts, risk lane, story requirement, and validation proof. If a gate is incomplete, ask or update docs before implementation.
```
