# MEGA Agent Skills

Portable workflow Skills for [MEGA Hub](https://mega.tensorplay.cn/). They use
the open Agent Skills layout and can be installed by the npm-hosted `skills`
CLI into Codex, OpenCode, Claude Code, Cursor, and other supported agents.

## Install with `npx skills`

List all Skills:

```bash
npx skills add ohtensorplay/mega-skills --list
```

Install the router globally for Codex:

```bash
npx skills add ohtensorplay/mega-skills --skill mega -g -a codex -y
```

Install it globally for OpenCode:

```bash
npx skills add ohtensorplay/mega-skills --skill mega -g -a opencode -y
```

Install every MEGA Skill for both clients:

```bash
npx skills add ohtensorplay/mega-skills --skill '*' -g -a codex -a opencode -y
```

## Catalog

| Skill | Purpose |
| --- | --- |
| `mega` | Route work between MEGA MCP and the `mega` CLI |
| `mega-cli` | Local files, bulk transfer, Git, streaming, and automation |
| `mega-repositories` | Models, datasets, Spaces, files, revisions, and publishing |
| `mega-datasets` | Dataset discovery, transfer, versioning, and preparation |
| `mega-spaces` | Space build, deployment, runtime, configuration, and recovery |
| `mega-jobs` | Remote workloads, schedules, logs, costs, and secrets |
| `mega-inference` | Routed inference, embeddings, billing, limits, and BYOK |
| `mega-community` | Papers, collections, blogs, discussions, and webhooks |

The Skills assume the official MEGA MCP server exposes `docs`, `search`, and
`execute`. Local, bulk, Git, streaming, and long-running work is intentionally
routed to the `mega` CLI.

## Related projects

- [MEGA Codex plugin](https://github.com/ohtensorplay/mega-codex-plugin)
- [MEGA MCP server](https://github.com/ohtensorplay/mega-mcp-server)

## License

MIT
