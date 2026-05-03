# Marketing Skills for GitHub Copilot

A curated set of **AI agent skills** for SEO, Generative Engine Optimization (GEO), keyword research, and content creation. Designed for [GitHub Copilot](https://docs.github.com/en/copilot) and compatible AI agents that follow the [Agent Skills](https://agentskills.io) open standard.

These skills turn your AI assistant into a knowledgeable marketing strategist that understands modern search — both traditional (Google) and AI-powered (ChatGPT, Gemini, Perplexity, Copilot).

## Skills included

| Skill | Description |
|:------|:------------|
| **[seo-strategy](seo-strategy/)** | Complete SEO playbook: technical SEO, on-page optimization, content clusters, internal linking, local SEO, and WordPress REST API automation |
| **[geo-optimization](geo-optimization/)** | Generative Engine Optimization — optimize content so AI search engines cite your brand in generated answers |
| **[seo-keyword-research](seo-keyword-research/)** | Competitive keyword research workflow: discovery, intent classification, SERP analysis, per-page mapping, and content gap analysis |
| **[content-creator](content-creator/)** | Strategic content creation hub: brand voice frameworks, SEO pre-checks, content templates, social media optimization, and anti-AI-detection writing guidelines |

## How the skills connect

```
seo-keyword-research     →  Find what your audience searches for
        ↓
seo-strategy             →  Structure your site to rank
        ↓
geo-optimization         →  Get cited by AI search engines
        ↓
content-creator          →  Write content that ranks AND gets cited
```

## WordPress REST API automation

These skills are designed to work well with WordPress sites. The `seo-strategy` skill includes guidance on automating SEO metadata (titles, meta descriptions) via the WordPress REST API, including Yoast SEO field mapping. The `content-creator` skill covers automated publishing workflows. This makes it possible to go from keyword research to published, SEO-optimized content with minimal manual steps.

## Installation

Copy the skill folders into your project's `.github/skills/` directory:

```
your-project/
└── .github/
    └── skills/
        ├── seo-strategy/
        │   └── SKILL.md
        ├── geo-optimization/
        │   ├── SKILL.md
        │   └── references/
        ├── seo-keyword-research/
        │   ├── SKILL.md
        │   └── references/
        └── content-creator/
            ├── SKILL.md
            └── references/
```

GitHub Copilot will automatically discover and use the skills based on your prompts. You can also invoke them directly using `/seo-strategy`, `/geo-optimization`, etc.

### Use as a shared skill

You can also reference this repository directly from your Copilot instructions. See the [VS Code documentation on shared skills](https://code.visualstudio.com/docs/copilot/copilot-customization) for details.

## Requirements

- **GitHub Copilot** (VS Code, JetBrains, or CLI) with agent mode enabled
- A website to optimize (WordPress recommended for full automation, but the strategies apply to any CMS)
- For keyword research: web search capability in your AI agent

## What makes these skills different

- **SEO + GEO combined** — Most SEO guides ignore AI search engines. These skills cover both traditional and AI-powered search as complementary strategies.
- **Practical, not theoretical** — Every section includes actionable checklists, templates, and scoring frameworks (like the 16-criterion GEO scorecard).
- **WordPress automation ready** — Includes REST API field mappings and publishing workflows so you can automate the entire pipeline.
- **Anti-AI detection** — The content creator skill includes guidelines for writing AI-assisted content that reads naturally and avoids common AI writing patterns.

## Contributing

Found an improvement? Open a PR or issue. These skills reflect real-world marketing practice — contributions from practitioners are especially welcome.

## License

[CC BY-NC 4.0](LICENSE) — Free to use and adapt with attribution. Not for commercial use.

Created by [Helder AI](https://helder-ai.nl) — Exploring how AI can make work easier and more fun.
