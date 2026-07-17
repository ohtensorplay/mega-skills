---
name: mega-community
description: Work with MEGA papers, collections, blogs, posts, repository discussions, pull requests, reactions, reports, subscriptions, and webhooks. Use for research discovery, curation, collaboration, community publishing, signed event delivery, or webhook receipts.
---

# MEGA community and automation

Use MCP `docs` and `search` to resolve current paper, collection, blog, post,
discussion, and pull-request operations. Use `execute` for bounded reads and
small actions.

Use the CLI when a workflow involves local message bodies, diffs, merges,
repeatable automation, or webhook management:

```bash
mega discussions list OWNER/REPO --format json
mega discussions info OWNER/REPO NUMBER --comments --format json
mega collections list --owner OWNER --format json
mega webhooks list --format json
mega webhooks deliveries WEBHOOK_ID --limit 50
```

## Scopes and guardrails

- Public paper/blog discovery may not require elevated access.
- Creating discussions, comments, reactions, reports, collections, or blog
  activity requires `community:write`.
- Webhook lifecycle requires `webhooks:manage` and is not part of Write by
  default.
- Verify repository, thread number, collection slug, webhook ID, and target URL
  before mutation.
- Never reveal webhook signing secrets. A generated secret is shown once and
  belongs in a secret store.
- Inspect pull-request diff and merge state before merge; confirm destructive
  deletes when not explicit.
