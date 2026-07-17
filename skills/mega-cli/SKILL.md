---
name: mega-cli
description: Use the MEGA Hub CLI (`mega`) for authentication, repositories, file transfer, models, datasets, Spaces, Jobs, inference, discussions, collections, webhooks, cache, conversion, signing, and shell automation. Trigger for terminal workflows, bulk data, local files, Git, streaming logs, or reproducible scripts.
---

# MEGA CLI

Install with `uv tool install megatensors`, `pipx install megatensors`, or
`python -m pip install megatensors`. Inspect the installed version before
assuming options:

```bash
mega version
mega env
mega --help
mega <domain> --help
```

Authenticate interactively with `mega auth login`, then verify with
`mega auth whoami --format json`. For automation, use `MEGA_TOKEN`; never embed
a token in a committed command or file. `MEGA_ENDPOINT` selects a non-default
Hub endpoint.

## Routing

Prefer CLI for:

- `mega download`, `snapshot`, `upload`, `upload-large-folder`, and `cp`;
- repository branches, tags, history, Git, and signed commits;
- `mega spaces logs --follow`, runtime waits, and local Space publishing;
- `mega jobs logs --follow`, waits, schedules, and shell automation;
- scripts that require stable JSON output or exit codes.

Prefer MCP `docs/search/execute` for small live API calls when no local artifact
or streaming process is involved.

## Automation rules

- Use `--format json` rather than parsing human tables.
- Use quiet output only for single-value shell composition.
- Pin revisions for reproducible downloads and uploads.
- Validate the target before adding `--yes` to destructive commands.
- Check exit codes; foreground Jobs and waits fail when the workload fails.
- Use `mega update` only when the user asked to change the installed CLI.
