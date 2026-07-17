---
name: mega-spaces
description: Build, publish, configure, inspect, and operate MEGA Spaces, including source files, runtime state, logs, hardware, variables, secrets, storage, volumes, Dev Mode, pause, restart, and recovery. Trigger for demos, apps, Gradio, or Space deployment work.
---

# MEGA Spaces

Use CLI for local source, deployment, log streaming, and waits:

```bash
mega repos create OWNER/SPACE --type space --public --exist-ok
mega spaces upload OWNER/SPACE ./app . --sync --commit-message "Deploy app"
mega spaces info OWNER/SPACE --format json
mega spaces runtime OWNER/SPACE --format json
mega spaces logs --follow OWNER/SPACE
mega spaces wait OWNER/SPACE --timeout 5m
```

Use MCP `search` then `execute` for small runtime inspections or settings
changes that do not require local files or streaming. Use `docs` to verify
hardware, sleep, storage, volume, and Dev Mode contracts before changing them.

## Secrets and cost

- Store secrets through `mega spaces secrets`; never send values in MCP, source,
  or chat. Secret values are write-only.
- Variables may be non-secret, but still avoid credentials and personal data.
- Hardware and persistent storage can incur cost. State the selected flavor or
  tier before applying it.
- Inspect runtime and recent logs before restart, factory rebuild, or storage
  deletion.
- Space source writes require `repo:write`; deployment controls may also depend
  on ownership and organization policy.
