---
title: I Built Reusable Marketing Skills for GitHub Copilot — Here's How (and Why)
published: false
description: Turn GitHub Copilot into a senior SEO & marketing strategist with open-source agent skills. Keyword research, GEO, content creation — all inside VS Code.
tags: copilot, ai, seo, webdev
cover_image: 
---

What if your code editor could do keyword research, audit your SEO, and optimize your content for AI search engines — without leaving VS Code?

I built a set of open-source **agent skills** that turn GitHub Copilot into a hands-on marketing strategist. Here's what I learned, how they work, and how you can use (or build) your own.

## The problem

I run a small website. Every time I wanted to write a blog post, the workflow looked like this:

1. Open Ahrefs/Semrush → research keywords
2. Open Google Docs → write the article
3. Open WordPress → publish and fill in SEO fields
4. Open ChatGPT → rewrite for social media
5. Repeat

Five tools. Five context switches. And every time, I found myself giving the same SEO instructions to AI assistants: "Use the keyword in the first paragraph", "Write a meta description under 155 characters", "Structure with H2/H3 headings"...

**What if I could encode all that knowledge once, and have my AI assistant apply it automatically?**

## The solution: Copilot Skills

GitHub Copilot (in agent mode) can read `SKILL.md` files from your workspace. These files act as **knowledge modules** — they tell Copilot *how* to approach a domain, what rules to follow, and what frameworks to apply.

I created four skills that cover the full marketing workflow:

```
seo-keyword-research  →  Find what your audience searches for
        ↓
seo-strategy          →  Structure your site to rank
        ↓
geo-optimization      →  Get cited by AI search engines
        ↓
content-creator       →  Write content that ranks AND gets cited
```

## What's inside a skill?

A skill is just a Markdown file with structured knowledge. Here's a simplified look at the GEO (Generative Engine Optimization) skill:

```markdown
---
name: geo-optimization
description: "Optimize content for AI search engines like ChatGPT, 
Gemini, and Perplexity. Use when the user mentions 'AI visibility', 
'GEO', 'AI search', or 'cited by AI'."
---

# GEO — Generative Engine Optimization

## What is GEO?
GEO = optimizing content so AI-powered search engines cite your 
brand in generated answers.

## GEO Scorecard (16 criteria)
| Criterion | Target |
|:----------|:-------|
| Authoritative tone | Expert language, no hedging |
| Structured data | Schema markup present |
| ...

## Anti-patterns
| Don't do this | Why |
|:--------------|:----|
| Keyword stuffing | AI recognizes and skips it |
| ...
```

The `description` field is key — Copilot uses it to decide *when* to invoke the skill. The body contains the actual knowledge the AI applies.

## How it works in practice

Here's what a real session looks like:

**Me:** "Do keyword research for a blog about home espresso machines"

**Copilot** (automatically invokes `seo-keyword-research`):
- Searches the web for related keywords
- Classifies intent (informational, commercial, transactional)
- Analyzes SERP features
- Outputs a structured keyword map with primary/secondary keywords, difficulty estimates, and content type recommendations

**Me:** "Now write the article and optimize it for AI search"

**Copilot** (invokes `content-creator` + `geo-optimization`):
- Writes with proper H2/H3 structure
- Includes the keyword in the first paragraph
- Adds statistics with citations (GEO requirement)
- Uses authoritative tone
- Ends with a clear conclusion (AI search engines need this)
- Generates meta title and description within character limits

**Me:** "Publish as draft to WordPress"

**Copilot** (uses REST API knowledge from `seo-strategy`):
- Creates the post via `wp-json/wp/v2/posts`
- Sets Yoast SEO meta fields
- Outputs the draft URL

**Total time: ~15 minutes.** From zero to published draft with SEO metadata.

## The GEO angle: why AI search changes everything

Here's something most developers don't think about: when someone asks ChatGPT "what's the best espresso machine for beginners?", the answer comes from *somewhere*. That somewhere could be your website — but only if your content is structured in a way AI models can parse and trust.

This is called **Generative Engine Optimization (GEO)**. It's like SEO, but for AI search engines. The research ([Aggarwal et al., 2024](https://arxiv.org/abs/2311.09735)) shows that GEO techniques can boost visibility in AI-generated answers by up to 40%.

My `geo-optimization` skill includes:
- A 16-criterion scorecard for AI-readiness
- Writing guidelines that balance human readability and AI parseability
- Anti-patterns (things that make AI skip your content)
- E-E-A-T implementation (Experience, Expertise, Authoritativeness, Trust)

## What I learned building these skills

### 1. Skills need evidence, not opinions

AI assistants hallucinate. If your skill says "meta descriptions should be 155 characters" without a source, Copilot might second-guess it or contradict itself later.

I added a [sources file](https://github.com/helder-ai/marketing-skills/blob/main/seo-keyword-research/references/sources.md) with links to Moz, Ahrefs, Google Search Central, and peer-reviewed papers. This makes the skill more reliable *and* more trustworthy for users.

### 2. The description field is your trigger

Copilot decides which skill to invoke based on the `description` in the YAML frontmatter. Be specific about trigger words:

```yaml
description: "Use when the user mentions 'SEO', 'search engine 
optimization', 'Google rankings', 'rank higher', 'meta tags'..."
```

The more trigger phrases you include, the more reliably it activates.

### 3. Structure > prose

Tables, bullet lists, and clear headings work better than long paragraphs. The AI parses structured content faster and applies it more consistently.

### 4. Skills should reference each other

My skills cross-link: the SEO strategy skill says "for keyword research, see `seo-keyword-research`". This helps Copilot chain skills together in multi-step workflows.

## Installation (30 seconds)

```bash
git clone https://github.com/helder-ai/marketing-skills.git \
  .github/skills/marketing
```

That's it. Open VS Code with Copilot agent mode, and start asking marketing questions. Copilot auto-discovers the skills.

Or as a Git submodule (stays updatable):

```bash
git submodule add https://github.com/helder-ai/marketing-skills.git \
  .github/skills/marketing
```

## Build your own skills

The pattern works for any domain knowledge:

1. **Create a `SKILL.md`** in `.github/skills/your-skill/`
2. **Add YAML frontmatter** with `name` and `description` (include trigger words)
3. **Write structured knowledge** — tables, checklists, decision trees
4. **Add references** for any factual claims
5. **Test it** — ask Copilot questions in the skill's domain and see if it gets invoked

Domains that would benefit from this approach:
- Accessibility (WCAG guidelines as a skill)
- Security (OWASP Top 10 as actionable checklists)
- API design (REST/GraphQL conventions)
- Legal/compliance (GDPR, cookie consent rules)
- Brand guidelines (tone of voice, terminology)

## The repo

**GitHub:** [helder-ai/marketing-skills](https://github.com/helder-ai/marketing-skills)

Licensed CC BY-NC 4.0 — free to use, adapt, and learn from.

If you find it useful: ⭐ the repo, or open a PR if you have improvements. I'd especially love contributions from SEO practitioners who want to encode their expertise.

---

*What domain knowledge would you encode as a Copilot skill? Let me know in the comments!*
