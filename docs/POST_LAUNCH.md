# Post-Launch

Post-launch work keeps the site reliable after deployment.

## First 30 Minutes

After production deploy:

- open production URL
- verify homepage
- verify CTA
- verify mobile layout
- check console errors
- check analytics event if configured
- check form submission if configured
- record any issue in story evidence or backlog

## First 24 Hours

Check:

- uptime
- error logs
- analytics traffic
- conversion event
- Core Web Vitals or Lighthouse snapshot
- broken links
- user/customer feedback

## Monitoring To Add When Needed

| Need | Tooling Option | Required When |
| --- | --- | --- |
| Traffic analytics | Vercel Analytics, Plausible, GA4 | public marketing site |
| Error monitoring | Sentry or provider logs | forms, dashboards, custom JS |
| Uptime | Better Stack, UptimeRobot, provider monitor | production domain |
| Performance | Lighthouse CI, WebPageTest, Vercel Speed Insights | SEO or conversion critical |

## Feedback Loop

Every post-launch issue should become one of:

- tiny direct fix
- story packet
- high-risk story
- decision record
- backlog item

## Post-Launch Prompt

```text
Run post-launch review for the production URL. Check uptime, homepage, CTA, mobile layout, console errors, analytics/form behavior if configured, and Lighthouse basics. Turn findings into backlog items or story packets with validation expectations.
```

