# Marketing Skills for GitHub Copilot

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)
[![GitHub Copilot](https://img.shields.io/badge/GitHub%20Copilot-Skills-blue?logo=github)](https://github.com/WilcoRakhorst/helder-ai-marketing-skills)

> Turn GitHub Copilot into a senior marketing strategist that understands **SEO, AI search (GEO), keyword research, and content creation** — all inside your editor.

A curated set of **AI agent skills** for modern search marketing. Designed for [GitHub Copilot](https://docs.github.com/en/copilot) and compatible AI agents that follow the [Agent Skills](https://agentskills.io) open standard.

These skills cover both traditional search (Google) and AI-powered search engines (ChatGPT, Gemini, Perplexity, Copilot Search).

---

## Quick Start

**One-liner installation** — clone directly into your project:

```bash
git clone https://github.com/WilcoRakhorst/helder-ai-marketing-skills.git .github/skills/marketing && echo "Done! Copilot will auto-discover the skills."
```

Or add as a **Git submodule** (recommended for teams):

```bash
git submodule add https://github.com/WilcoRakhorst/helder-ai-marketing-skills.git .github/skills/marketing
```

That's it. Open VS Code, start Copilot Chat in agent mode, and ask something like:

- *"Do keyword research for my bakery website"*
- *"Create an SEO strategy for my SaaS product"*
- *"Optimize this blog post for AI search engines"*
- *"Write a LinkedIn post based on this article"*

Copilot automatically discovers and invokes the right skill based on your prompt.

---

## Skills Included

| Skill | What it does |
|:------|:-------------|
| **[seo-strategy](seo-strategy/)** | Complete SEO playbook: technical SEO, on-page optimization, content clusters, internal linking, local SEO, WordPress REST API automation |
| **[geo-optimization](geo-optimization/)** | Generative Engine Optimization — get your brand cited in AI-generated answers (ChatGPT, Gemini, Perplexity) |
| **[seo-keyword-research](seo-keyword-research/)** | Full keyword research workflow: discovery → intent classification → SERP analysis → content gap analysis |
| **[content-creator](content-creator/)** | Content creation hub: brand voice, SEO pre-checks, templates, social media optimization, anti-AI-detection writing |

### How the skills connect

```
seo-keyword-research     →  Find what your audience searches for
        ↓
seo-strategy             →  Structure your site to rank
        ↓
geo-optimization         →  Get cited by AI search engines
        ↓
content-creator          →  Write content that ranks AND gets cited
```

---

## Demo

<!-- TODO: Add screenshots or a short GIF/video showing:
  1. User prompt in Copilot Chat
  2. Skill being invoked automatically
  3. Output (keyword research table / SEO audit / content draft)
-->

> *Screenshots coming soon. Want to contribute one? Open a PR!*

---

## Use Cases

| You want to... | Ask Copilot... |
|:---------------|:---------------|
| Research keywords for a new page | *"Find keywords for [topic] with search intent and difficulty"* |
| Audit a page for SEO issues | *"Audit this page against the SEO checklist"* |
| Optimize content for AI search | *"Score this article on the GEO scorecard"* |
| Publish a blog post to WordPress | *"Create a blog post about [topic] and publish it as a draft"* |
| Write social media posts | *"Write LinkedIn and Twitter posts to promote this article"* |
| Build a content cluster | *"Plan a content cluster around [pillar topic]"* |

---

## Installation Options

### Option 1: Clone (quickest)

```bash
git clone https://github.com/WilcoRakhorst/helder-ai-marketing-skills.git .github/skills/marketing
```

### Option 2: Git submodule (keeps skills updatable)

```bash
git submodule add https://github.com/WilcoRakhorst/helder-ai-marketing-skills.git .github/skills/marketing
git commit -m "Add marketing skills for Copilot"
```

### Option 3: Manual copy

Download and copy the skill folders into your project:

```
your-project/
└── .github/
    └── skills/
        └── marketing/
            ├── seo-strategy/
            ├── geo-optimization/
            ├── seo-keyword-research/
            └── content-creator/
```

### Option 4: Shared skills reference

Reference this repository directly from your Copilot instructions without copying files. See the [GitHub Copilot documentation](https://docs.github.com/en/copilot/customizing-copilot/reusing-prompts-and-instructions-in-github-copilot) for details.

---

## Requirements

- **GitHub Copilot** with agent mode enabled (VS Code, JetBrains, or CLI)
- A website to optimize (WordPress recommended for automation; strategies work with any CMS)
- For keyword research: web search capability in your AI agent

---

## What Makes These Skills Different

| Feature | Most SEO tools | These skills |
|:--------|:---------------|:-------------|
| SEO + GEO combined | ❌ | ✅ Traditional + AI search in one workflow |
| Runs inside your editor | ❌ | ✅ No context-switching |
| WordPress automation | ❌ | ✅ REST API field mappings + publish workflows |
| Evidence-based | Varies | ✅ All claims backed by sources ([see references](seo-keyword-research/references/sources.md)) |
| Anti-AI detection writing | ❌ | ✅ Guidelines for natural AI-assisted content |
| GEO scorecard (16 criteria) | ❌ | ✅ Structured scoring framework |

---

## WordPress REST API Automation

These skills integrate with WordPress sites. The `seo-strategy` skill includes:

- Yoast SEO field mapping (`_yoast_wpseo_title`, `_yoast_wpseo_metadesc`)
- Automated draft publishing via REST API
- SEO metadata validation before publish

Go from keyword research → written article → published WordPress draft in one session.

---

## Topics / Tags

`github-copilot` · `copilot-skills` · `seo` · `geo` · `generative-engine-optimization` · `keyword-research` · `content-marketing` · `ai-skills` · `wordpress` · `marketing-automation`

---

## Contributing

Found an improvement? Open a PR or issue. These skills reflect real-world marketing practice — contributions from SEO practitioners are especially welcome.

**Ideas for contributions:**
- Additional skill: link building, technical audit automation
- Translations (Dutch, German, etc.)
- Screenshots and demo videos

---

## Roadmap

- [ ] Additional skills: link building, competitor analysis
- [ ] Multi-language support (NL, DE)
- [ ] Interactive skill configuration wizard

---

## License

[CC BY-NC 4.0](LICENSE) — Free to use and adapt with attribution. Not for commercial use.

---

## Credits

Thanks to [@demoran](https://coderlegion.com/user/demoran) for pointing out that introductory prose ("This skill is the upstream source for...") and decorative ASCII diagrams in skill bodies are padding — the AI needs instructions, not context it already has. That feedback led to a direct cleanup of the `content-creator` skill.

---

<p align="center">
  Created by <a href="https://helder-ai.nl">Helder AI</a> — Exploring how AI can make work easier and more fun.
  <br><br>
  <a href="https://github.com/WilcoRakhorst/helder-ai-marketing-skills/stargazers">⭐ Star this repo</a> if you find it useful!
</p>
