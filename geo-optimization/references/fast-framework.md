# FAST Framework — AI Crawlability Checklist

Test AI crawlability by loading the page with JavaScript disabled. What you see is what GPTBot, ClaudeBot, and PerplexityBot see.

| Dimension | Question | Action if "No" |
|:----------|:---------|:----------------|
| **F — Fetchable** | Is the core content in the initial HTML (no JS required)? | Deploy server-side rendering (SSR) or static HTML |
| **F — Bot access** | Are GPTBot, ClaudeBot, and PerplexityBot NOT blocked in robots.txt? | Remove user-agent blocks or add Allow rules for AI crawlers |
| **A — Accessible** | Is the content understandable without scripts? Alt text, semantic headings? | Use HTML5 semantic elements, complete alt text |
| **S — Structured** | Is schema markup and a clear heading structure present? | Add Article/FAQ schema, structure definition blocks |
| **S — Schema drift** | Does the JSON-LD match the visible content (price, title, description)? | Sync JSON-LD with visible text — mismatches are seen as untrustworthy by AI |
| **S — llms.txt** | Is there an `/llms.txt` on the site for AI discovery? | Create `/llms.txt` with site description, core topics, and page index |
| **T — Trim** | Is the page free from unnecessary scripts and DOM bloat? | Minimize tracking scripts and unused JS |

**Quick test:** Open the 5 most important pages with JavaScript disabled. Is the core content still there? If not, AI crawlers see an empty page.

## robots.txt for AI crawlers

```
# Citation crawlers — allow (do not block)
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bingbot
Allow: /
```

> **Note:** `Google-Extended` is separate from `Googlebot`. Without an explicit Allow, Gemini and Google AI Overviews are excluded.

For a full crawler reference table (citation vs. training crawlers), see [anti-patterns-and-references.md](anti-patterns-and-references.md).

## llms.txt template

```
# Your Brand
> One-sentence description of what your site offers.

## Core topics
- Topic 1
- Topic 2
- Topic 3

## Key pages
- /blog/ (description)
- /services/ (description)
```

Place this file at the root of your domain: `https://yourdomain.com/llms.txt`
