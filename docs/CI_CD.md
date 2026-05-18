# CI/CD

CI proves the project can be verified outside the local machine.

## Required Local Commands

```bash
npm run verify:quick
npm run verify
npm run audit
npm run verify:release
```

## GitHub Actions

The workflow lives at:

```text
.github/workflows/ci.yml
```

It should run on:

- pull requests
- pushes to `main` or `master`

It should verify:

- dependency install with `npm ci`
- Playwright browser install
- typecheck
- lint
- production build
- production-server E2E tests
- npm audit at moderate level
- Playwright report upload on failure

## Branch And PR Rules

Recommended flow:

1. Create a feature branch.
2. Update brief/spec/story/test matrix before or with code.
3. Run `npm run verify:release` locally.
4. Open PR with summary, screenshots, test evidence, and known gaps.
5. Merge only after CI passes.

Dependency and runtime rules:

- Pin dependency ranges in `package.json`; do not use `latest`.
- Use Dependabot for npm and GitHub Actions updates.
- Keep `.nvmrc`, `.node-version`, and GitHub Actions Node version aligned.

## PR Checklist

- What changed?
- Which story or gate does it satisfy?
- Which commands passed?
- Which screenshots or browser checks were reviewed?
- Did product docs change?
- Did `docs/TEST_MATRIX.md` change?
- Did a decision record need to be added?
- Is there a validation report in `docs/validation/` when release-bound, high-risk, or production-fix?
- Are there known gaps?

## CI Failure Prompt

```text
Inspect the failing CI check. Identify the failing command, root cause, and smallest fix. Do not change unrelated code. After fixing, run the equivalent local command and update story/test evidence if behavior changed.
```
