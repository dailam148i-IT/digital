# Digital

Agent-first website starter for building a polished, tested site with Next.js, TypeScript, Tailwind CSS, Playwright, Superpowers, selected ECC skills, and agentmemory.

## Quick Start

```bash
npm install
npx playwright install
npm run dev
```

Open `http://localhost:3000`.

## Core Commands

```bash
npm run dev        # local development
npm run typecheck  # TypeScript
npm run lint       # ESLint
npm run build      # production build
npm run e2e        # Playwright tests
npm run verify     # full local verification
npm run audit      # npm security audit
npm run verify:release # release verification
```

## Agent Workflow

Start with the full Vietnamese guide:

- `docs/IDEA_TO_LAUNCH.md`
- `docs/PRODUCTION_PLAYBOOK.md`
- `docs/AGENT_PROMPTS.md`

Short version:

1. Use `docs/PRODUCTION_PLAYBOOK.md` to identify the active gate.
2. Turn the raw idea into `docs/DISCOVERY.md` and `docs/PRODUCT_BRIEF.md`.
3. Convert the brief into `docs/SPEC.md` and `docs/CONTENT_SEO.md`.
4. Classify work with `docs/FEATURE_INTAKE.md`.
5. Create story packets in `docs/stories/` for normal or high-risk work.
6. Implement one slice at a time.
7. Run design QA with `docs/DESIGN_QA.md`.
8. Run `npm run verify:release`.
9. Update `docs/TEST_MATRIX.md`.
10. Use `docs/LAUNCH.md` for sign-off.
11. Deploy with `docs/DEPLOYMENT.md`.
12. Run `docs/POST_LAUNCH.md`.
13. Store durable decisions in `docs/decisions/` and agentmemory.

Production operations:

- CI: `.github/workflows/ci.yml`
- CodeQL: `.github/workflows/codeql.yml`
- Dependabot: `.github/dependabot.yml`
- Deployment runbook: `docs/DEPLOYMENT.md`
- Release checklist: `docs/RELEASE_CHECKLIST.md`
- Validation reports: `docs/validation/`

The repo-level agent instructions live in `AGENTS.md`.
