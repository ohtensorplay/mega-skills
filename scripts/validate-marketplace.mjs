#!/usr/bin/env node

import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skillsRoot = join(repositoryRoot, "skills");
const marketplacePath = join(repositoryRoot, "marketplace.json");

function fail(message) {
  console.error(`marketplace validation failed: ${message}`);
  process.exitCode = 1;
}

function skillDirectories(root) {
  return readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    fail(`cannot parse ${relative(repositoryRoot, path)}: ${error.message}`);
    return null;
  }
}

const marketplace = readJson(marketplacePath);
const directories = skillDirectories(skillsRoot);

if (!marketplace) {
  process.exit(1);
}

if (!Array.isArray(marketplace.plugins)) {
  fail("marketplace.json must contain a plugins array");
} else {
  const catalog = marketplace.plugins.map((entry) => entry.name).sort();
  if (new Set(catalog).size !== catalog.length) {
    fail("marketplace.json contains duplicate plugin names");
  }
  if (catalog.join("\n") !== directories.join("\n")) {
    fail(
      `catalog and skills directory differ (catalog: ${catalog.join(", ")}; skills: ${directories.join(", ")})`,
    );
  }

  for (const entry of marketplace.plugins) {
    if (entry.source !== `skills/${entry.name}`) {
      fail(`${entry.name} must point to skills/${entry.name}`);
    }
    if (typeof entry.description !== "string" || !entry.description.trim()) {
      fail(`${entry.name} must have a non-empty description`);
    }
  }
}

for (const name of directories) {
  const skillPath = join(skillsRoot, name, "SKILL.md");
  const metadataPath = join(skillsRoot, name, "agents", "openai.yaml");

  try {
    if (!statSync(skillPath).isFile()) {
      fail(`${name} is missing SKILL.md`);
      continue;
    }
    if (!statSync(metadataPath).isFile()) {
      fail(`${name} is missing agents/openai.yaml`);
      continue;
    }
  } catch {
    fail(`${name} must include SKILL.md and agents/openai.yaml`);
    continue;
  }

  const skill = readFileSync(skillPath, "utf8");
  if (!skill.startsWith("---\n")) {
    fail(`${name}/SKILL.md is missing YAML front matter`);
    continue;
  }
  if (!new RegExp(`^name:\\s*${name}\\s*$`, "m").test(skill)) {
    fail(`${name}/SKILL.md front matter must declare name: ${name}`);
  }
  if (!/^description:\s*\S/m.test(skill)) {
    fail(`${name}/SKILL.md front matter must declare a description`);
  }
}

if (!process.exitCode) {
  console.log(`validated ${directories.length} MEGA Skills and marketplace catalog`);
}
