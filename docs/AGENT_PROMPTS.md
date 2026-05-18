# Agent Prompt Library

Use these prompts to control agent behavior with strict gates.

## Orientation

```text
Read AGENTS.md and docs/PRODUCTION_PLAYBOOK.md. Then state the current gate, source hierarchy, verification commands, and what you need before coding. Do not edit files yet.
```

## Discovery

```text
Use docs/DISCOVERY.md to interview me. Ask only questions that change audience, offer, CTA, pages, content, SEO, design, or deployment. Update docs/DISCOVERY.md and docs/PRODUCT_BRIEF.md after answers are clear.
```

## Spec

```text
Convert the accepted brief into docs/SPEC.md and docs/CONTENT_SEO.md. Include routes, sections, content status, SEO metadata needs, CTA behavior, acceptance criteria, and open decisions. Do not code.
```

## Intake

```text
Classify this work with docs/FEATURE_INTAKE.md. State lane, risk flags, affected docs, story requirement, and validation proof. Create or update the story packet if required. Do not code until intake is complete.
```

## Implementation

```text
Implement the next approved story slice only. Keep changes scoped. After implementation, run the relevant verification commands, update docs/TEST_MATRIX.md, and add evidence to the story.
```

## Design QA

```text
Run docs/DESIGN_QA.md against localhost:3000. Check desktop, tablet, and mobile. Look for text overflow, layout shift, broken CTA/nav, accessibility basics, and console errors. Fix blockers only.
```

## Release

```text
Use docs/RELEASE_CHECKLIST.md. Run npm run verify:release. Update release evidence, story evidence, and any decision records. Do not deploy until blockers are resolved or explicitly accepted.
```

## Deploy

```text
Use docs/DEPLOYMENT.md to prepare deployment. Verify env vars, build settings, domain assumptions, smoke tests, and rollback. Do not deploy or push until I approve the target.
```

## Post-Launch

```text
Use docs/POST_LAUNCH.md to inspect the production URL. Record issues as backlog items, story packets, or decision records. Update agentmemory only for durable decisions.
```

