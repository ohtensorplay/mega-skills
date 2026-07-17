---
name: mega-jobs
description: Plan, submit, monitor, cancel, and schedule container workloads on MEGA Jobs. Use for remote CPU/GPU work, batch processing, experiments, training, batch inference, recurring schedules, logs, hardware selection, cost estimation, timeouts, environments, secrets, or persisted outputs.
---

# MEGA Jobs

Jobs require the optional `jobs:run` scope and may incur cost. Before starting a
workload, establish image, command, hardware, timeout, expected duration,
inputs, output destination, and secret needs.

Prefer CLI for submission, streaming, waits, and schedules:

```bash
mega jobs hardware
mega jobs balance
mega jobs run IMAGE COMMAND...
mega jobs ps --status RUNNING --format json
mega jobs logs --follow --tail 100 JOB_ID
mega jobs wait JOB_ID
mega jobs usage
mega jobs schedule --help
```

Use MCP `docs/search/execute` for bounded status checks or a small structured
submission when terminal streaming is unnecessary. Resolve the exact operation
before `execute`.

## Guardrails

- Surface cost and selected hardware before submission.
- Pass credentials only through the platform's secret mechanism, never as
  ordinary environment values, arguments, or source code.
- Pin container images by digest for reproducibility when practical.
- Set a bounded timeout and persist outputs to a repository or approved store.
- After submission, report Job ID and how to inspect logs/status.
- Cancel only the verified Job ID; scheduled delete and cancellation are
  distinct operations.
