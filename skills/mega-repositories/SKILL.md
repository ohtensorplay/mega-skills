---
name: mega-repositories
description: Discover, inspect, create, update, duplicate, move, download, upload, branch, tag, sign, or delete MEGA model, dataset, and Space repositories. Use for repository metadata, README/files, revisions, commits, Git, access, or publishing workflows.
---

# MEGA repositories

## Read and discovery

For small remote reads, call MCP `search` to resolve repository operations and
then `execute`. Use `docs` first when the revision, pagination, or repository
type contract is unclear.

For local artifacts or complete trees, use the CLI:

```bash
mega repos list --owner OWNER --format json
mega models info OWNER/MODEL --format json
mega download OWNER/REPO --revision REVISION --local-dir ./target
mega snapshot OWNER/REPO --revision REVISION --local-dir ./snapshot
```

## Publishing

Use `repo:write`. Prefer resumable CLI transfer for folders:

```bash
mega repos create OWNER/REPO --type model --exist-ok
mega upload OWNER/REPO ./artifact --revision main
mega upload-large-folder OWNER/REPO ./large-artifact
mega repos tag create OWNER/REPO v1.0 --message "Release v1.0"
```

Use MCP `execute` for a small metadata change or a single bounded JSON/file
operation after resolving it with `search`.

## Guardrails

- Keep repository type explicit when ambiguity is possible.
- Pin a branch, tag, or commit for reproducible reads.
- Inspect existing state before overwrite, move, duplicate, or delete.
- `repo:delete` is separate from `repo:write`; confirm the exact repository or
  file when deletion was not explicit.
- Use Git/CLI for diffs, merges, signing, and large binary content.
