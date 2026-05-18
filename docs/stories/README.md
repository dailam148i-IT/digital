# Stories

Story packets convert product intent into implementation-sized work.

Use stories for:

- new sections or pages
- form behavior
- route changes
- SEO-visible behavior
- tests or validation work
- any change that needs acceptance criteria

Do not create stories for tiny copy edits unless the edit changes accepted product behavior.

## Naming

Use:

```text
US-###-short-title.md
```

Example:

```text
US-002-contact-form.md
```

## Lifecycle

| Status | Meaning |
| --- | --- |
| planned | Candidate story exists but is not ready |
| ready | Acceptance criteria and validation are clear |
| in_progress | Implementation has started |
| blocked | Waiting on decision, dependency, or proof |
| implemented | Code is done and local proof exists |
| validated | Release-level proof exists |
| deployed | Behavior is live in production |
| retired | Behavior is no longer part of the product |

Normal stories must link exact `docs/TEST_MATRIX.md` rows. High-risk stories must include rollback or disable plan.
