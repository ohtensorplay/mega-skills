---
name: mega-inference
description: Discover and call MEGA Inference Providers for chat completions, Responses, and embeddings; inspect routing, usage, billing, provider health, preferences, limits, and BYOK configuration. Trigger for hosted model inference, provider routing, embeddings, or inference cost/control questions.
---

# MEGA Inference

`inference:run` is optional and disabled in the Read and Write presets. Do not
ask for it unless the user wants Mega-hosted/routed inference.

Use the CLI for interactive calls and repeatable scripts:

```bash
mega models ls --pipeline-tag chat-completions --warm --format json
mega inference chat MODEL "PROMPT"
mega inference responses MODEL "INPUT"
mega inference embeddings MODEL "TEXT"
```

Use MCP `docs` for current routing and billing semantics, `search` for the exact
inference operation, and `execute` for a bounded structured call after
`inference:run` is granted.

## Billing and routing

- `auto`, `fastest`, `cheapest`, and `preferred` can choose different providers.
- Routed billing and BYOK are distinct. Never expose provider keys in tool or
  CLI arguments; save them through the protected key workflow.
- State the model, provider/routing policy, bill-to owner, and expected request
  size before a potentially material call.
- Respect monthly hard limits and organization controls. A missing scope is not
  permission to broaden to Full.
- For batch inference, use MEGA Jobs and persist results rather than sending a
  large MCP request.
