# Deployment Runbook

This runbook assumes Vercel by default. If another host is chosen, record the decision in `docs/decisions/`.

## Deployment Gate

Do not deploy production until:

- `npm run verify:release` passes
- env variables are documented
- target domain is known
- rollback path is known
- production smoke checks are defined

## Vercel Setup

Recommended settings:

| Setting | Value |
| --- | --- |
| Framework | Next.js |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output | Next.js default |
| Node version | 24.x or project-compatible 22+ |

Recommended source of truth:

- Keep standard Vercel settings in project settings unless a repo-level `vercel.json` is needed.
- If `vercel.json` is added later, record why in `docs/decisions/`.

## Environment Variables

| Variable | Required | Environment | Notes |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | yes | preview, production | Public site URL |

Do not commit `.env`.

## Domain And DNS

Before production launch:

- confirm primary domain
- confirm www/root redirect behavior
- configure DNS
- verify HTTPS
- verify canonical URL matches final domain
- update `NEXT_PUBLIC_SITE_URL`

## Preview Deployment Smoke Test

After preview deploy:

- open preview URL
- check homepage load
- test navigation anchors
- test CTA destination
- inspect console errors
- run production-like browser check if possible

## Production Deployment Smoke Test

After production deploy:

- homepage returns 200
- title and meta description are correct
- CTA works
- mobile layout works
- no visible placeholder content
- no console errors
- no broken critical assets
- analytics/monitoring work if configured

## Rollback

Rollback strategy:

- Vercel: promote previous successful deployment.
- Git: revert the offending commit if code rollback is needed.
- Env: restore previous env values from deployment notes.

Record rollback evidence in the release notes or story evidence.

## Branch Protection

Before production collaboration:

- require CI to pass before merge
- require PR review before merge
- disable force-push to protected branches
- deploy production only from protected `main` or `master`
- require Vercel preview review for visible UI changes

## Security Headers To Decide Before Final Production

- Content Security Policy or documented reason to defer
- `frame-ancestors` or `X-Frame-Options`
- `Referrer-Policy`
- `Permissions-Policy`
- HSTS after production HTTPS/domain is stable

## Deployment Prompt

```text
Prepare for deployment using docs/DEPLOYMENT.md. Verify env variables, build settings, domain assumptions, smoke tests, and rollback path. Do not deploy until npm run verify:release passes and I approve the target environment.
```
