# Agent Stack

## Recommended Setup

Use these three repositories as separate layers:

- Superpowers: primary operating method.
- agentmemory: durable memory only.
- everything-claude-code: selective skills and references.

This avoids duplicate control loops while keeping the useful parts of each project.

## Local Installation Notes

Install Superpowers in Codex through the Plugins sidebar or Codex CLI plugin marketplace.

Install agentmemory globally:

```bash
npm install -g @agentmemory/agentmemory
agentmemory doctor
agentmemory
```

Optional Codex plugin install:

```bash
codex plugin marketplace add rohitg00/agentmemory
codex plugin install agentmemory
```

Use ECC selectively. Do not copy all rules blindly. Recommended ECC skill areas for this repo:

- frontend-patterns
- nextjs-turbopack
- e2e-testing
- verification-loop
- security-review

## Conflict Rules

- If Superpowers and ECC disagree on workflow, follow Superpowers.
- If any generic memory MCP and agentmemory both exist, use agentmemory and disable the generic memory MCP for this project.
- If a hook changes files automatically, it must be documented before it is enabled.
- Do not persist secrets or personal data in memory.
