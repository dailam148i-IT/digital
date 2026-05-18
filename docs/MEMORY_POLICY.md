# Memory Policy

agentmemory should make future agent sessions faster and more accurate. It should not become a dumping ground.

## Remember

- Product direction that has been approved.
- Stable route and component architecture.
- Design system choices that should persist.
- Integration decisions and API contracts.
- Bugs that were diagnosed and how they were fixed.
- Commands required to verify the project.

## Do Not Remember

- Secrets, API keys, tokens, passwords, or credentials.
- Temporary logs or stack traces with no lasting value.
- Personal customer data.
- Guesses that have not been confirmed.
- Large copied source files or generated output.

## Suggested Memory Entry Format

```text
Project digital: [decision]. Context: [why]. Applies to: [files or area].
```
