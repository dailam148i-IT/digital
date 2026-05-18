# Agent-First Workflow

For the complete idea-to-launch guide, read `docs/IDEA_TO_LAUNCH.md` first. For strict production gates, read `docs/PRODUCTION_PLAYBOOK.md`.

## Default Loop

1. Read `AGENTS.md` and `docs/PRODUCTION_PLAYBOOK.md`.
2. Identify the active gate.
3. Classify the request with `docs/FEATURE_INTAKE.md`.
4. Clarify missing product intent.
5. Create or update a story packet when the work is larger than a tiny edit.
6. Write or update a short implementation plan.
7. Implement one slice at a time.
8. Verify with typecheck, lint, build, Playwright, and audit when release-bound.
9. Update `docs/TEST_MATRIX.md` with proof.
10. Store durable decisions in `docs/decisions/` and agentmemory.

## Website Slice Order

1. Information architecture and route structure.
2. Visual direction and reusable sections.
3. Content and calls to action.
4. Responsive behavior.
5. Accessibility and SEO metadata.
6. Tests and release checks.

## Definition of Done

- The requested behavior is implemented.
- The UI is checked on desktop and mobile.
- No layout text overlaps.
- All verification commands pass or the blocker is documented.
- Release-bound work runs `npm run verify:release`.
- `docs/TEST_MATRIX.md` reflects current evidence for changed behavior.
- Story status and evidence are current for normal or high-risk work.
- Relevant durable decisions are remembered.

## Git And Session Control

- `main` is production-ready only.
- Use a separate branch for each substantial feature, such as `feat/catalog`, `feat/auth-account`, `feat/payos-checkout`, or `feat/download-library`.
- Do not combine auth, payment, license/download, and Docker production work in one pull request.
- High-risk work requires at least one technical review and one QA/security review before merge.
- Do not merge to `main` when relevant verification commands fail or required proof is missing.
- Every coding session must leave a session record with goal, branch, files touched, verification commands, result, blockers, and next step.
- Use `docs/SESSION_LOG.md` as the running handoff log for local agent sessions.

## State Definitions

Ready for Launch:

- Product brief and spec are approved or assumptions are explicitly accepted.
- `docs/CONTENT_SEO.md` and `docs/DESIGN_QA.md` have no launch blockers.
- `npm run verify:release` passes.
- `docs/LAUNCH.md` status is `preview_ready` or `production_ready`.

Launched:

- Production URL is live.
- Deployment smoke test is complete.
- Rollback path is documented.

Post-Launch Verified:

- First 30-minute checks are complete.
- First 24-hour checks are complete or scheduled.
- Issues are tracked as backlog items or stories.
