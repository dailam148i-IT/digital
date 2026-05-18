# Launch

Launch is the controlled move from verified code to a public production URL.

## Launch Status

Status: not_ready

Allowed values:

- not_ready
- preview_ready
- production_ready
- launched
- post_launch_verified

## Required Sign-Off

| Area | Owner | Status | Notes |
| --- | --- | --- | --- |
| Product/offer | TBD | pending | |
| Content/copy | TBD | pending | |
| Design QA | TBD | pending | |
| SEO | TBD | pending | |
| Engineering verification | TBD | pending | |
| Deployment/DNS | TBD | pending | |
| Analytics/monitoring | TBD | pending | |
| Final approval | TBD | pending | |

## Launch Checklist

Before production:

- `docs/PRODUCT_BRIEF.md` status is approved
- `docs/SPEC.md` status is approved
- `docs/CONTENT_SEO.md` has no launch-blocking placeholder content
- `docs/DESIGN_QA.md` checks are completed
- `docs/TEST_MATRIX.md` has current evidence
- `npm run verify:release` passes
- preview deployment is reviewed
- production env variables are set
- domain and DNS are ready
- rollback path is known
- post-launch owner is known

## Preview Launch

Preview launch is ready when:

- CI passes on the branch or PR
- preview URL is generated
- desktop/mobile smoke checks pass
- content owner reviews the page
- blockers are fixed or explicitly accepted

## Production Launch

Production launch is ready when:

- preview launch is approved
- domain and env vars are production-ready
- production deployment is approved by the human
- smoke-test steps from `docs/DEPLOYMENT.md` are ready

## Launch Prompt

```text
Use docs/LAUNCH.md and docs/RELEASE_CHECKLIST.md to decide whether this project is preview_ready, production_ready, launched, or blocked. Do not deploy until all launch blockers are resolved or explicitly accepted.
```

