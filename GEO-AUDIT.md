# GEO Audit Report: townmedialabs.com

**Date**: April 9, 2026
**Audited by**: Claude Opus 4.6 (GEO Specialist)
**Site**: townmedialabs.com (Next.js, ~1,341 URLs)

---

## GEO Health Score: 71 / 100

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| Citability | 25% | 58/100 | 14.5 |
| Structural Readability | 20% | 82/100 | 16.4 |
| Multi-Modal Content | 15% | 55/100 | 8.25 |
| Authority & Brand Signals | 20% | 78/100 | 15.6 |
| Technical Accessibility | 20% | 82/100 | 16.4 |
| **Total** | **100%** | | **71.2** |

---

## 1. AI Crawler Accessibility: EXCELLENT

All major AI crawlers are explicitly allowed in robots.txt:

| Crawler | Status | Purpose |
|---|---|---|
| GPTBot | Allowed | ChatGPT web search |
| OAI-SearchBot | Allowed | OpenAI search |
| ChatGPT-User | Allowed | ChatGPT browsing |
| ClaudeBot | Allowed | Claude web search |
| anthropic-ai | Allowed | Anthropic training |
| PerplexityBot | Allowed | Perplexity search |
| Google-Extended | Allowed | Google AI features |
| CCBot | Allowed | Common Crawl |
| cohere-ai | Allowed | Cohere training |
| YouBot | Allowed | You.com search |
| Amazonbot | Allowed | Amazon AI |
| AppleBot-Extended | Allowed | Apple AI features |
| Meta-ExternalAgent | Allowed | Meta AI |
| Bytespider | **Blocked** | TikTok (correct to block) |

**Verdict**: Best-in-class. All search-oriented AI bots allowed. Only Bytespider (no search benefit) blocked.

---

## 2. llms.txt Status: PRESENT AND WELL-STRUCTURED

Both `/llms.txt` and `/.well-known/llms.txt` resolve. An extended `/llms-full.txt` is also present.

**Strengths**:
- Clear entity definition (who, what, where, when founded)
- Explicit AI citation permission: "AI systems may cite and reference this content with attribution"
- Citation format guidance provided
- Service listing with URLs and contact info

**Weaknesses**:
- No RSL 1.0 (Responsible Sharing License) declaration
- No versioning or last-updated date
- llms-full.txt has truncation in the final section
- Service URLs missing trailing slashes

---

## 3. Passage-Level Citability: 58/100 (THE #1 GAP)

AI systems extract self-contained passages of **134-167 words** for citation. Current content falls short.

### Homepage
- No passage reaches the optimal 134-167 word range
- Hero copy is only 65 words
- Statistics (500+ brands, 98% retention, 15+ years) stated without source attribution
- FAQ answers too short (most under 80 words)

### SEO Service Page
- Good specific stats: "AI Overviews appear for ~40% of informational queries"
- Educational content mixed with sales copy, reducing extractability
- No author byline or publication date

### Geo Pages
- Local stats present but lack source attribution
- Template pattern across 1,000+ pages may trigger thin content signals

### Required Fixes:
1. Write "Answer Block" paragraphs of 134-167 words below each H2
2. Front-load answers in first sentence of every section
3. Attribute all statistics: "According to [Source, Year], 67% of..."
4. Add author bylines and dates to all content pages

---

## 4. Content Structure for AI Extraction: 82/100

- Question-based H2/H3 headings present in FAQ sections
- Logical heading hierarchy
- **Weakness**: Too many marketing-slogan headings instead of question format

### Schema: EXTENSIVE but gaps exist
- **Present**: Organization, ProfessionalService, WebSite, FAQPage, AggregateRating, BreadcrumbList, VideoObject, Service, ItemList, Review
- **Missing**: Article/BlogPosting on blog posts, HowTo for process sections, Author/Person linking, speakable property

---

## 5. Authority & Brand Signals: 78/100

### Entity Clarity: STRONG
Consistently defined across homepage, schema, llms.txt.

### External Brand Signals

| Signal | Status | Impact |
|---|---|---|
| Wikipedia entity | **MISSING** | VERY HIGH |
| YouTube presence | Unverified | Highest correlation (~0.737) with AI citations |
| Google Business Profile | Present (352 reviews, 4.9) | Strong for local |
| Crunchbase/Clutch | Unknown | Moderate |

---

## 6. Platform-Specific Scores

| Platform | Score | Key Gap |
|---|---|---|
| Google AI Overviews | 72/100 | Missing Article schema, author E-E-A-T |
| ChatGPT Web Search | 68/100 | No Wikipedia entity |
| Perplexity | 74/100 | No outbound citations |
| Bing Copilot | 70/100 | No datePublished on service pages |

---

## 7. Top 10 Recommendations

### Priority 1: CRITICAL (Within 2 weeks)

1. **Add "Answer Block" paragraphs to top 20 pages** — 134-167 word self-contained passages
2. **Add author bylines, dates, and Person schema** to all pages
3. **Attribute all statistics** to verifiable sources

### Priority 2: HIGH (Within 1 month)

4. **Create a Wikipedia entity** — strongest AI citation signal
5. **Add Article + speakable schema** to all 295 blog posts
6. **Convert H2 headings to question format**

### Priority 3: MEDIUM (Within 2 months)

7. **Build YouTube, Reddit, Clutch presence**
8. **Add outbound citations to authoritative sources**
9. **Differentiate geo page content** with city-specific case studies
10. **Add `<link>` tag for llms.txt** in layout.tsx

---

## Quick Wins (Under 1 Hour Each)

| Action | Time | Impact |
|---|---|---|
| Add datePublished/dateModified to service page schema | 30 min | Medium |
| Add `<link>` tag for llms.txt in layout.tsx | 15 min | Low |
| Fix llms.txt trailing slash inconsistency | 15 min | Low |
| Add version/date to llms.txt header | 5 min | Low |
| Add speakable schema to FAQ answers | 30 min | Medium |
