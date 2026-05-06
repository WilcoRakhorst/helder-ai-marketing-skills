# GEO — Anti-patterns & References

## Anti-patterns

| Outdated practice                | Why it doesn't work                                                  |
|:---------------------------------|:---------------------------------------------------------------------|
| Thin keyword-only pages          | Pages built purely for ranking lose value                            |
| Short, generic blog posts        | AI picks one comprehensive article over 5 shallow posts              |
| Keyword stuffing                 | Google and AI recognize this; it backfires                           |
| Publishing unedited AI output    | Lacks expertise, nuance, and human editorial judgment                |
| Content without a conclusion     | AI looks for complete, rounded answers                               |
| No brand narrative               | AI doesn't trust anonymous, generic content                          |
| Overly commercial language       | "The best/cheapest" without evidence gets filtered as bias           |
| Gated content (login/paywall)    | AI crawlers can't get behind a login; authority content must be open |
| AI spam without editorial review | Other AI models recognize low-value output and skip it               |

### Negative signals: 8 anti-citation patterns

These signals actively lower the chance of AI citation, even if the rest of the content is good. Remove these elements before running GEO optimization.

| Signal | Description | Action |
|:-------|:------------|:-------|
| **CTA overload** | Page is full of "Buy now", "Call today", and "Free quote" | Limit CTAs to 1-2 per page; move commercial copy to footer |
| **Pop-ups and overlays** | Modal windows block AI crawlers from the content | Remove or convert to inline content; pop-ups are invisible to crawlers |
| **Thin content** | Fewer than 300 words without original insight or data | Deepen the article or combine with related content to 800+ words |
| **Keyword stuffing** | Same keyword repeated outside natural writing style | Use synonyms and related terms; aim for readable prose |
| **Missing author** | No byline, bio, or author information on the page | Add author name and link to author page with credentials |
| **Boilerplate text** | Generic intros like "In today's digital landscape..." | Replace with a direct opening that delivers the answer |
| **Prompt injection** | Hidden text, invisible Unicode, or LLM instructions in HTML | Scan for `display:none` text and HTML comments with instruction language |
| **Inconsistent brand name** | Brand spelled differently across content ("Brand AI" vs. "BrandAI" vs. "Brand Artificial Intelligence") | Choose one official spelling and apply consistently across all content |

*Source: Auriti-Labs/geo-optimizer-skill, geo_negative_signals check*

---

## Hedge Language — Weak wording that lowers AI citability

AI search engines prefer confident, factual statements. Vague language significantly lowers citation chances. Aim for a hedge density of **less than 0.5%** (maximum 1 hedge word per 200 words).

| Category | Examples | Severity |
|:---------|:---------|:---------|
| **Uncertainty** | maybe, perhaps, possibly, might, could | High |
| **Qualification** | somewhat, relatively, fairly, rather, quite | Medium |
| **Approximation** | about, approximately, roughly, around, nearly | Medium |
| **Distancing** | seems, appears, tends to, suggests, probably | High |
| **Generalization** | in general, typically, often, sometimes, usually | Medium |
| **Weakening** | a bit, a kind of, in a sense, in a certain way | High |

**Rewrite patterns:**
- "could help" → "helps" or "reduces X by Y%"
- "seems to suggest" → "shows"
- "is generally" → "is" (or state the specific exception)
- "maybe even" → remove or replace with a concrete claim
- Missing numerical support? Use `[TODO: add specific measurement]`

> **Note:** Signal words ("then", "therefore", "as a result") and hedge words are different things. Signal words improve readability. Hedge words undermine credibility and lower AI citation chances.

---

## AI Crawlers — robots.txt configuration

Each AI crawler works differently. The distinction between **citation crawlers** (real-time, influence direct answers) and **training crawlers** (build future model knowledge) is crucial.

### Crawler reference table

| Crawler | Platform | Type | Impact |
|:--------|:---------|:-----|:-------|
| `GPTBot` | ChatGPT Search | Citation | Direct: blocking = no ChatGPT citations |
| `OAI-SearchBot` | ChatGPT Search | Citation | Direct: ChatGPT search function |
| `ChatGPT-User` | ChatGPT browse | Citation | Direct: user-initiated browse sessions |
| `ClaudeBot` | Claude | Citation | Direct: Claude web searches |
| `PerplexityBot` | Perplexity | Citation | Direct: continuous crawl + real-time retrieval |
| `Google-Extended` | Gemini / AI Overviews | Citation | Direct: **separate from Googlebot** — requires separate permission |
| `Applebot-Extended` | Siri / Apple Intelligence | Citation | Direct: separate from regular Applebot |
| `Bingbot` | Copilot / Bing Chat | Citation | Direct: Bing index feeds Copilot |
| `CCBot` | Common Crawl | Training | Indirect: training data for many models |
| `anthropic-ai` | Anthropic | Training | Indirect: future Claude versions |
| `Bytespider` | ByteDance | Training | Indirect: future model knowledge |

> **Note:** `Google-Extended` is a separate crawler from `Googlebot`. If your robots.txt only allows Googlebot, you automatically exclude Gemini and Google AI Overviews.

### Recommended robots.txt (allow citation, block training)

```robots.txt
# Citation crawlers — direct AI answers
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: Bingbot
Allow: /

# Training crawlers — block if desired
User-agent: CCBot
Disallow: /
User-agent: anthropic-ai
Disallow: /
User-agent: Bytespider
Disallow: /

# Standard crawlers
User-agent: Googlebot
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

---

## References

- Aggarwal, P. et al. (2024): "GEO: Generative Engine Optimization", KDD 2024 — [arXiv:2311.09735](https://arxiv.org/abs/2311.09735) (Princeton/IIT Delhi; peer-reviewed; visibility boost up to 40%)
- Google Search Central: [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- Google Search Central: [How Search Works](https://developers.google.com/search/docs/fundamentals/how-search-works)
- Google on AI content (2023): [Google Search's guidance about AI-generated content](https://developers.google.com/search/blog/2023/02/google-search-and-ai-content)
- Google: [Search Quality Rater Guidelines (E-E-A-T)](https://services.google.com/fh/files/misc/hsw-sqrg.pdf) (PDF)
- Backlinko/Semrush: [AI Traffic Report 2025](https://backlinko.com/llm-traffic-study) (800%+ YoY growth, 4.4× conversion)
- Ahrefs: [Brand mentions vs. backlinks research](https://ahrefs.com/blog/) (December 2025, 75,000 brands)
- luka2chat/geo-skills: GEO Best Practices (AI crawler config, analytics benchmarks, FAST framework) — github.com/luka2chat/geo-skills
- Cognitic-Labs/geoskills: GEO Audit Skills (score model v2, platform citation biases) — github.com/Cognitic-Labs/geoskills
- aaron-he-zhu/seo-geo-claude-skills: CORE-EEAT Content Benchmark v3.0, GEO Optimization Techniques — github.com/aaron-he-zhu/seo-geo-claude-skills
- Auriti-Labs/geo-optimizer-skill: Princeton GEO methods ranked, llms.txt spec, negative signals — github.com/Auriti-Labs/geo-optimizer-skill
- zubair-trabzada/geo-seo-claude: Citability scoring (134-167w), brand mentions 3× backlinks — github.com/zubair-trabzada/geo-seo-claude
- Bhanunamikaze/Agentic-SEO-Skill: AEO, multi-modal 156%, schema restrictions — github.com/Bhanunamikaze/Agentic-SEO-Skill
- Search Engine Journal: [Generative AI And SEO Strategy](https://www.searchenginejournal.com/generative-ai-and-seo-strategy-getting-the-most-out-of-your-tools/493591/)
