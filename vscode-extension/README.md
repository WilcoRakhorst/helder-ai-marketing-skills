# Marketing Skills for GitHub Copilot — VS Code Extension

Install and update marketing skills for GitHub Copilot directly from VS Code.

## Features

- **One-click install**: Adds SEO, GEO, keyword research, and content creation skills to your workspace
- **One-click update**: Pull the latest skill improvements
- **Zero config**: Copilot auto-discovers skills in agent mode

## Commands

| Command | Description |
|:--------|:------------|
| `Marketing Skills: Install skills into current workspace` | Clones the skills into `.github/skills/marketing/` |
| `Marketing Skills: Update skills to latest version` | Pulls the latest changes |

## How it works

The extension clones the [marketing-skills repository](https://github.com/WilcoRakhorst/helder-ai-marketing-skills) into your workspace's `.github/skills/marketing/` directory. GitHub Copilot automatically discovers SKILL.md files in this location and uses them when relevant to your prompts.

## Requirements

- GitHub Copilot with agent mode enabled
- Git installed on your system
