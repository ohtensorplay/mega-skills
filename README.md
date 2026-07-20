<p align="center"><a href="https://mega.tensorplay.cn/"><img src="https://mega.tensorplay.cn/assets/logo-D1t6EjrA.webp" alt="MEGA" width="420" /></a></p>
<p align="center"><i>Give your coding agent a safe, practical path through MEGA.</i></p>
<p align="center">
  <img alt="Agent Skills" src="https://img.shields.io/badge/Agent-Skills-2563EB">
  <img alt="Codex" src="https://img.shields.io/badge/Codex-ready-111827">
  <a href="https://github.com/ohtensorplay/mega-skills/blob/main/LICENSE"><img alt="MIT License" src="https://img.shields.io/github/license/ohtensorplay/mega-skills"></a>
</p>

# MEGA Agent Skills

MEGA Agent Skills are portable instructions for working with [MEGA Hub](https://mega.tensorplay.cn/) from coding agents. They cover repositories, datasets, Spaces, Jobs, inference, and community work while choosing the right execution surface for each task.

Start with the `mega` router. It sends bounded live-platform operations to MCP and routes local files, Git, bulk transfer, streaming, secrets, and long waits to the `mega` CLI.

## Install

List the available Skills:

```bash
npx skills add ohtensorplay/mega-skills --list
```

Install the recommended router for Codex:

```bash
npx skills add ohtensorplay/mega-skills --skill mega -g -a codex -y
```

Install every MEGA Skill for Codex and OpenCode:

```bash
npx skills add ohtensorplay/mega-skills --skill '*' -g -a codex -a opencode -y
```

Once installed, mention a Skill by name in your request—for example, “use `mega-datasets` to inspect this dataset before downloading it.”

## Choose a starting point

| Need | Skill |
| --- | --- |
| You are not sure whether MCP or the CLI fits | `mega` |
| Local files, Git, transfer, streaming, or automation | `mega-cli` |
| Models, datasets, Spaces, revisions, or publishing | `mega-repositories` |
| Dataset discovery, preparation, or versioned transfer | `mega-datasets` |
| Space runtime, configuration, deployment, or tools | `mega-spaces` |
| Jobs, schedules, Sandboxes, logs, costs, or secrets | `mega-jobs` |
| Model discovery or inference workflows | `mega-inference` |
| Papers, collections, posts, discussions, or pull requests | `mega-community` |

## How the Skills work

The Skills follow the open [Agent Skills](https://agentskills.io/) format. Each is a self-contained folder with a `SKILL.md` file that explains when to use it, the safe sequence of steps, and the relevant MEGA surface.

MEGA MCP v1.1 provides 29 focused tools for identity, repository discovery and inspection, bounded `mega://` files, papers and documentation, Spaces, Jobs and Sandboxes, and community workflows. It also exposes two resources and four prompts. The CLI remains the authoritative path for work that depends on the local machine or should not enter an agent tool call.

## Skill catalog

| Skill | Purpose |
| --- | --- |
| `mega` | Route work between MEGA MCP and the `mega` CLI. |
| `mega-cli` | Work with local files, bulk transfer, Git, streaming, and automation. |
| `mega-repositories` | Manage models, datasets, Spaces, files, revisions, and publishing. |
| `mega-datasets` | Discover, transfer, version, and prepare datasets. |
| `mega-spaces` | Discover, configure, deploy, and operate Spaces. |
| `mega-jobs` | Run Jobs, schedules, Sandboxes, warm pools, logs, and billing workflows. |
| `mega-inference` | Discover models and use MEGA inference services. |
| `mega-community` | Work with papers, collections, posts, discussions, and pull requests. |

## Related projects

- [MEGA Hub](https://github.com/ohtensorplay/mega-hub)
- [MEGA Codex plugin](https://github.com/ohtensorplay/mega-codex-plugin)
- [MEGA MCP server](https://github.com/ohtensorplay/mega-mcp-server)

## License

MIT
