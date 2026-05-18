# Deployment Runbook

This runbook now supports the D13S MVP target of Docker on a VPS. Vercel notes remain as an alternate preview path only.

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

## Docker VPS Setup

Current repo baseline:

- `Dockerfile` builds a Next.js standalone image.
- `docker-compose.yml` runs the app on port `3000` and checks `/api/health`.
- `.dockerignore` excludes dependencies, build output, env files, reports, and Git metadata.

Minimum VPS production requirements:

- reverse proxy with HTTPS, such as Caddy or Nginx
- `.env` stored on the server, not in Git
- image tag or commit SHA recorded for rollback
- healthcheck monitored after deploy
- database and storage backup plan documented before real checkout
- checkout can be disabled by leaving payOS credentials absent

## Environment Variables

| Variable | Required | Environment | Notes |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | yes | preview, production | Public site URL |
| `NEXT_PUBLIC_SUPABASE_URL` | before real auth/download | production | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | before real auth/download | production | Browser-safe Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | before real fulfillment/download | production | Server-only; never expose to client |
| `PAYOS_CLIENT_ID` | before real checkout | production | payOS merchant client id |
| `PAYOS_API_KEY` | before real checkout | production | Server-only payOS API key |
| `PAYOS_CHECKSUM_KEY` | before real checkout | production | Server-only webhook checksum/signature key |

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
- `/api/health` returns 200
- title and meta description are correct
- catalog, product detail, mock checkout, account library, support, and policy routes work
- mobile layout works
- placeholder/mock content is clearly labeled or replaced with approved real content
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
