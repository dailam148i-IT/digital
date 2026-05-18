# Release Checklist

Use this before publishing a preview or production release.

## Product

- Product brief matches the release.
- Spec matches implemented behavior.
- Story status and evidence are current.
- Test matrix rows are current.
- No unresolved launch-blocking decisions remain.

## Content And SEO

- No placeholder copy remains.
- Titles and meta descriptions are final.
- Open Graph copy/images are final or explicitly deferred.
- H1/H2 structure is correct.
- Links and CTAs point to the right destinations.
- Legal/compliance text is present when needed.

## Design And Accessibility

- Desktop, tablet, and mobile layouts checked.
- No text overflow, clipping, or overlap.
- Focus states visible.
- Keyboard path works for interactive controls.
- Contrast is acceptable.
- Images and icons have appropriate labels or alt behavior.

## Engineering

Run:

```bash
npm run verify:release
```

Required result:

- typecheck passed
- lint passed
- build passed
- E2E passed
- audit passed
- Playwright production-server E2E passed
- CodeQL and CI pass when running in GitHub

## Security

- No secrets in git.
- `.env` is ignored.
- Environment variables reviewed.
- Dependency audit passed.
- Secret scanning is enabled in GitHub settings when available.
- CodeQL workflow exists for JavaScript/TypeScript.
- Security headers are decided or explicitly deferred.

## Deployment

- Env variables configured.
- Domain/DNS plan known.
- Preview smoke test passed.
- Production smoke test plan ready.
- Rollback path known.

## Release Notes Template

```md
## Release YYYY-MM-DD

### Scope
- 

### Evidence
- `npm run verify:release`
- Preview URL:
- Screenshots/browser checks:

### Risks
- 

### Rollback
- 
```
