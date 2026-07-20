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
| `mega-spaces` | Space discovery, dynamic tools, runtime, configuration, lifecycle, and deployment |
| `mega-jobs` | Remote Jobs, schedules, Sandboxes, logs, costs, and secrets |
| `mega-inference` | Model discovery, typed Space tools, inference paths, limits, and credentials |
| `mega-community` | Papers, collections, posts, comments, discussions, and pull requests |

The Skills target MEGA MCP v1.1: 29 focused, HF-aligned tools for identity and
profiles; type-specific repository search and inspection; bounded `mega://`
files; papers and documentation; Space runtime, configuration, and dynamic
invocation; Jobs and Sandboxes; and community workflows. The server also
publishes two workflow resources and four prompts. Local, bulk, Git, streaming,
secret-bearing, unsupported, and long-running work is routed to the `mega` CLI.

## Related projects

- [MEGA Codex plugin](https://github.com/ohtensorplay/mega-codex-plugin)
- [MEGA MCP server](https://github.com/ohtensorplay/mega-mcp-server)

## License

MIT
