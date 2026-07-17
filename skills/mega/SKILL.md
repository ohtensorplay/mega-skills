---
name: mega
description: Route any MEGA Hub task between the three-tool MEGA MCP server and the mega CLI. Use for MEGA models, datasets, repositories, Spaces, Jobs, inference, papers, collections, discussions, blogs, webhooks, authentication, permissions, or when the correct MEGA workflow is unclear.
---

# MEGA platform router

Use the smallest surface that fits the task.

## Choose the execution plane

Use MEGA MCP when the task needs live discovery, current documentation, or a
small structured API read/write:

1. Call `docs` for concepts and current platform guidance.
2. Call `search` to resolve the exact OpenAPI method and path.
3. Call `execute` with that documented method/path and structured JSON input.

Never invent an endpoint. If `search` cannot find it, use `docs` or the CLI
instead. `execute` is limited to documented `/api/` operations and responses up
to 1 MB.

Use `mega` CLI for local files, bulk upload/download, repository sync, Git,
streaming logs, interactive shells, repeatable scripts, or long-running waits.
Run `mega <domain> --help` for the installed command contract and prefer
`--format json` in automation.

## Permission profiles

- Read: `repo:read` only.
- Write: adds `repo:write` and `community:write`.
- Full: adds deletion, Jobs, inference, keys, and webhooks.
- Custom: any dependency-safe subset.

`inference:run` is optional and off by default. Treat `jobs:run` and
`inference:run` as potentially billable. Do not request Full merely because an
operation failed; identify the exact missing scope from the Hub error.

## Safety

- The user's explicit request authorizes ordinary in-scope writes.
- Confirm a destructive target when deletion or irreversible replacement was
  not already explicit.
- Surface expected cost before starting Jobs or routed inference.
- Never place tokens, provider keys, or Space secrets in commands, source,
  logs, or tool arguments. Use OAuth, stored CLI credentials, or secret inputs.
- Use Skills for domain procedure; do not recreate removed domain-specific MCP
  tools or legacy `tools`, `bouquet`, `mix`, or `spaces` URL parameters.
