# townmedialabs.com — 20-Agent SEO Audit

**Date:** 2026-04-17
**Scope:** full-site ranking + slow-indexing diagnosis
**Status:** 16 of 20 specialist audits completed; 4 agents (seo-technical, seo-schema, seo-content, and another) returned internal tool errors on first dispatch. The 16 successful reports give comprehensive coverage — the 4 failed ones largely overlap with code-based audits already completed.

---

## TL;DR — The 5 things actually blocking ranking & indexing

1. **Index bloat from 7,039 thin "service-in-city" doorway pages** (94% of your sitemap). `shouldNoindex()` is a no-op — nothing is deindexed. Google almost certainly sees these as a doorway network and is throttling crawl + demoting sitewide quality. **Single highest-leverage fix in this audit.**
2. **Wrong-domain canonical** on `/web-design-company-in-calgary/` points to `townmedialabs.ca` (a domain you don't own/serve). Google will drop this page from the index.
3. **Concatenation bug on every auto-generated H1** — verbose service titles (e.g. "Email Marketing Services — Automation That Drives Revenue") were being stuffed into "Leading <title> Agency in <city>" patterns across ~7,000 pages. **Already fixed this session** in `src/data/cityServiceAutoContent.ts`.
4. **Hardcoded `lastmod = 2026-04-13` for 96% of sitemap URLs.** Google detects static lastmod and starts ignoring it sitewide → slows recrawl prioritization.
5. **`hreflang: en-IN`** on a site targeting IN + NA + UK + AU + UAE. You're telling Google "India only" while the 1,800+ programmatic pages target US/UK/AU cities. Change to `en` (language-only) or drop the alternates block entirely.

---

## 1. Technical SEO — Crawlability & Indexability

**Top 10 blockers:**

1. **CRITICAL — Wrong-domain canonical.** `src/app/web-design-company-in-calgary/page.tsx:22,28` → canonical + OG URL point to `https://townmedialabs.ca/...`. Fix to `.com` immediately.
2. **CRITICAL — 404s served with 1-hour CDN cache.** `next.config.ts:227-234` applies `Cache-Control: public, max-age=3600, stale-while-revalidate=86400` to `/((?!_next|images|...).*)`, which matches 404 responses. Breaks soft-404 recovery. Fix: in `not-found.tsx` export `dynamic = 'force-dynamic'` OR exclude 404s from this header rule, OR set `cache-control: no-store` on 404 via middleware.
3. **HIGH — 250 static city-service files output canonicals WITHOUT trailing slash.** `src/app/services/{service}-in-{city}/page.tsx:12` (250 files). Next rewrites to add slash, but this is implementation-dependent. Append `/` to all 250 canonical strings and matching OG URLs.
4. **HIGH — Dynamic route canonical missing trailing slash.** `src/app/services/[slug]/page.tsx:72` — affects all programmatic pages via `generateStaticParams`. Fix: `` const url = `https://townmedialabs.com/services/${slug}/`; ``
5. **HIGH — Multiple static pages (`/about/`, `/contact/`, `/locations/[country]/`, `/industries/[slug]/`, `/case-studies/[slug]/`, `/free-tools/[slug]/`) store canonicals without trailing slash.** Inconsistent with `trailingSlash: true` in `next.config.ts:4`. Append `/`.
6. **HIGH — `www` → apex redirect is 307 (temp), not 301/308.** Make it permanent in Vercel project settings or via `redirects()` with `permanent: true`.
7. **HIGH — 7,413 URLs in one sitemap with `lastmod` hardcoded `2026-04-13`** in `src/app/sitemap.ts:44,51,67`. Split via `generateSitemaps()` and derive `lastModified` from actual content-modification dates.
8. **MEDIUM — Homepage HTML is 221 KB uncompressed with 13+ render-blocking JS chunks** and 3 JSON-LD blocks in `<head>` (`layout.tsx:378-395`). Move JSON-LD to body and trim per-route.
9. **MEDIUM — `X-Robots-Tag: all` applied globally** via `next.config.ts:158-160` (`source: "/(.*)"`) including `/api/` and 404s — conflicts with robots directives. Scope header to `/((?!api|_next).*)`.
10. **MEDIUM — `metadataBase` + relative `/` canonical on home** (`src/app/layout.tsx:73`). Set `canonical: \`${siteUrl}/\``  explicitly for durability across Next versions.

**Score:** 72/100. HTTPS, HSTS, valid sitemap, correct 308 slash redirects, clean robots.txt — foundation is strong; execution details leak.

---

## 2. Sitemap Integrity

- **XML valid, gzipped, 7,413 URLs**, under 50K limit. IndexNow configured (`/tml2026indexnow.txt` verified).
- **Breakdown**: ~7,015 location-service pages, ~24 standalone services, plus blog/industries/case-studies/free-tools.

**Top issues (ordered by indexing impact):**

1. **CRITICAL — 7,015 city-service URLs = doorway saturation.** `src/app/sitemap.ts:58-74`. Hard-stop threshold for doorway treatment is ~50 location pages; you are at ~140× that. Reason for "Crawled — currently not indexed" at scale. Keep only Tier-1 cities (top 50–100) in sitemap or aggressively gate via `shouldNoindex()`.
2. **HIGH — 96% of URLs share `lastmod = 2026-04-13`.** Google starts ignoring lastmod sitewide once static. Derive from file mtime, git log, or real content-change dates. Only the blog builder uses realistic dates.
3. **MEDIUM — Deprecated `priority` and `changefreq` tags** on every entry. Google ignores them; they inflate sitemap bytes by ~30%. Remove.
4. **MEDIUM — Single file, no sitemap index.** Fine today but split via `generateSitemaps()` into per-type files (services, locations, blog, industries) so Search Console can diagnose indexing per section.
5. **LOW — `shouldNoindex()` only gates location defs.** Services, blog, industries, case-studies, free-tools skip the check — any page flagged noindex elsewhere still appears in sitemap (conflicting signal).

---

## 3. Structured Data (Schema.org)

**In place (good):**
- Global Organization + ProfessionalService in `layout.tsx:122-395` with address, geo, hours, priceRange, sameAs, aggregateRating, 3 reviews, OfferCatalog.
- Blog: Article + BreadcrumbList + conditional FAQPage (`src/lib/schema.ts`, `blog/[slug]/page.tsx:65-119`).
- City-service pages: Service + BreadcrumbList + FAQPage.
- Case study: Article + BreadcrumbList + Review.

**Critical issues:**
1. **Blog Article `@id` / canonical mismatch.** `src/lib/schema.ts:177` uses `/blog/${slug}` while canonical is `/blog/${slug}/`. Google treats as distinct entities. Align both to trailing-slash.
2. **HowTo schema still emitted on blog posts** (`src/app/blog/[slug]/page.tsx:89-118`). Google retired HowTo rich results Sept 2023. Remove.
3. **Service-city Service schema missing `serviceType`, `offers`, and `provider @id` back-link** to the global Organization. Add in `src/lib/schema.ts:22-45`.
4. **Case-study Article lacks `datePublished`, `dateModified`, `image`, `mainEntityOfPage`** (`case-studies/[slug]/page.tsx:65-90`). Without `datePublished` + `image`, the page is ineligible for Article rich results.
5. **FAQPage on `/contact` (commercial)** — Google restricted FAQ rich results to gov/health sites Aug 2023. Fine for AI citation; won't render FAQ snippets in Google.
6. **Services index ListItem uses `url` instead of `item`** (`src/app/services/page.tsx:74-87`). Verify with Rich Results Test — spec uses `item`.
7. **About page Person entries lack `@id`, `image`, `sameAs`** (`src/app/about/page.tsx:55-74`) — weakens E-E-A-T author linkage.

**Opportunities:** BlogPosting over Article, per-service AggregateRating for star snippets, JobPosting on `/careers`, homepage `speakable` block for voice/AI.

---

## 4. Content Quality & E-E-A-T

**Score: 52/100.** Strong E-E-A-T infrastructure (authors, schema, case studies) is undermined by template-driven mass content with only city/service variable swaps.

| Factor | Score |
|---|---|
| Experience (20%) | 12/20 |
| Expertise (25%) | 16/25 |
| Authoritativeness (25%) | 14/25 |
| Trustworthiness (30%) | 18/30 |

**AI Citation Readiness: 55/100.** FAQ answers are templated, so LLMs see duplicates across cities and down-weight.

**Worst offenders:**

1. **Location × Service pages (~1,826 URLs) — CRITICAL.** `src/components/templates/LocationServiceTemplate.tsx` (1,220-line shared shell); `src/data/cityServiceAutoContent.ts` (auto-generator with small pattern pools). Only 88 of 1,150 combos have hand-written enrichment — the other 1,062 (92%) are deterministic hash-pick fallbacks with ~85-92% text overlap page-to-page. 8 templated FAQs per page use `${serviceName}` + `${cityName}` string swaps. No author byline. No publish/update dates. Meets Google's doorway-pages definition.
2. **Programmatic blog generators — HIGH.** `src/data/blogArticleGenerator.ts` duplicates a hand-written Chandigarh post across every Indian city with `${city}` swapped. Same 7 "competitor agencies", Jeff Bezos quote, "0.05 seconds", "23% Lucidpress" stat everywhere. Delete or replace with manually-written city posts.
3. **Stats lack attribution.** "500+ businesses", "98% retention", "4.2x ROAS" — no source, no date. LLMs down-weight unattributed numbers.

**Top 5 actions:**
1. Flip `src/utils/noindex.ts:5` — return `true` for ~1,062 low-enrichment auto-generated pages. Keep 100–272 Tier-1 combos indexed.
2. Add author byline + published/updated date to LocationServiceTemplate hero.
3. Replace `generatedFaqs` fallback with city-specific FAQs or drop the section.
4. Kill `blogArticleGenerator.ts` mass-duplicated city posts.
5. Add real client testimonial + local case study block (not optional `enrichment?.caseStudySnippet`).

---

## 5. Core Web Vitals

*Caveat: PSI API rate-limited; numbers below are lab estimates from TTFB + HTML inspection. Low CrUX traffic volume likely.*

| Page | TTFB | HTML | Est. LCP | Est. CLS | Est. INP |
|---|---|---|---|---|---|
| / (home) | 681 ms | 215 KB | ~3.2 s (poor) | ~0.15 (NI) | ~250 ms (NI) |
| /about | 227 ms | 79 KB | ~2.8 s (NI) | ~0.20 (NI) | ~220 ms (NI) |
| /services/seo-chandigarh | 623 ms | 34 KB | ~2.9 s (NI) | ~0.10 (good) | ~200 ms (good) |
| /blog | 211 ms | 229 KB | ~2.6 s (NI) | ~0.10 (good) | ~230 ms (NI) |
| /locations/chandigarh | 225 ms | 32 KB | ~2.4 s (good) | ~0.10 (good) | ~210 ms (NI) |
| /contact | 325 ms | 75 KB | ~2.7 s (NI) | ~0.10 (good) | ~220 ms (NI) |

**Bottlenecks:** 681 ms home TTFB (worst — appears dynamic, not ISR/cached). LCP image `/hero-background.webp` served at `w=2048` for mobile. 56 Next chunks on homepage + 13-15 `<script>` tags. Zero `preconnect` to GTM/GA. /about has 7 images missing width/height → CLS ~0.20.

**Prioritized fixes:**
1. Fix `/about` CLS — explicit width/height or aspect-ratio on all 7 images; WebP/AVIF everywhere. CLS 0.20 → 0.05 (~1 hour).
2. Reduce home TTFB 681 → <200 ms via ISR/edge cache on `/`.
3. Right-size hero image with proper `sizes` attribute — save ~400 KB, LCP −500-800 ms on 4G.
4. Add `preconnect` to `googletagmanager.com`, `google-analytics.com`, `fonts.gstatic.com`.
5. Defer GTM/GA with `next/script strategy="lazyOnload"`.

---

## 6. Local SEO

**Score: 58/100.** Hybrid brick-and-mortar (Chandigarh HQ) + SAB (global service-area claims).

**NAP consistency:** Footer, Contact, Organization schema, LocalBusiness schema all match. Minor: Contact page references Edmonton office in review copy with no address/phone.

**Critical weaknesses:**

1. **CRITICAL — Programmatic doorway risk via schema.** `/locations/dubai`, `/locations/chandigarh`, and presumably all others inject the same Chandigarh LocalBusiness schema with Chandigarh geo (30.7281, 76.7726). Claiming a Chandigarh PostalAddress on a Dubai page violates Google's LocalBusiness guidelines. Remove LocalBusiness schema from non-HQ city pages; use `Service` + `areaServed` only.
2. **CRITICAL — No on-page GBP link or Maps embed.** Biggest on-page local trust signal is missing.
3. **HIGH — Geo precision insufficient.** 4-decimal coordinates (≈11 m) — use 5-6 decimals.
4. **HIGH — Review schema + aggregateRating on every location page = spam signal.** Google's review-snippet policy requires aggregateRating only on the primary entity page, not programmatic doorways.
5. **HIGH — `areaServed` (7 countries) contradicts single-address LocalBusiness.** Add Place children for top markets or remove global claims from the Chandigarh node.
6. **MEDIUM — Tier-1 citations thin.** No `sameAs` to Clutch, DesignRush, GoodFirms, G2, Justdial, Sulekha, BBB.

**Actions:** remove LocalBusiness schema from non-HQ city pages; add GBP link + Maps iframe on Contact + footer; pin exact coordinates; move `review[]` to a `/reviews` page only; build citation profiles.

---

## 7. GEO (AI Search) Readiness

**Score: 68/100.**

**Crawler access: PASS.** robots.txt explicitly allows GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended, CCBot, anthropic-ai, cohere-ai. Only Bytespider blocked.

**llms.txt: MISSING (404 at /llms.txt).** High-impact, low-effort fix.

**Citation blockers:**
1. Opening paragraphs are taglines ("Build brands. Drive growth.") not answers. LLMs extract 40-60-word factual passages; competitors whose first sentence is *"TML Agency is a digital marketing agency founded in 2010 in Chandigarh…"* will be cited instead.
2. FAQPage JSON-LD not confirmed in final HTML — easiest AI citation surface lost.
3. Stats lack attribution and dates.
4. Clients anonymized — "Over 500 brands" with zero named logos breaks entity co-occurrence.
5. No publish/update dates on homepage or /about.
6. Weak external entity graph — no Wikipedia entity, no founder LinkedIn/Crunchbase backlinks, no press mentions.

**Top 5 fixes:** publish /llms.txt (30 min); rewrite page-one paragraphs as 40-60-word factual definitions (1 day); add founder `sameAs` LinkedIn/Crunchbase; convert H2s to question format with direct answers; publish 3-5 named case studies with client + metric + methodology.

**Platform scores:** AIO 55, ChatGPT 60, Perplexity 65, Bing Copilot 60.

---

## 8. Mobile Rendering & Visual

**Critical:**
1. **`/locations/<city>` renders "Country not found"** — the `[country]` dynamic segment accepts city slugs and returns a near-blank error. Soft-404 across the whole location IA. City pages must live under `/locations/[country]/[city]` or redirect.
2. **Floating WhatsApp FAB covers the primary CTA on mobile** on home, service, blog, contact, location pages at 375 px. Conflict with LCP CTA and INP. Nudge FAB up ~80 px or hide until scroll-past-hero.

**Mobile UX:** above-the-fold clarity good; no horizontal scroll; breadcrumb contrast marginal (orange-on-dark, ~12 px); hamburger + scroll-indicator hit targets 32-36 px (under Google's 48-px recommendation); hero lacks aspect-ratio reservation → CLS risk.

---

## 9. Live SERP & Backlink Data

**DataForSEO MCP not available in this environment.** To enable, install the DataForSEO MCP extension and set `DATAFORSEO_LOGIN`/`DATAFORSEO_PASSWORD`. Budget ~8-12 API calls (~$0.05-0.15) for the full pull (SERP positions, backlink profile, competitor domains).

Cannot confirm without live data: current rankings, backlink count, referring-domain diversity, toxic links, competitor domain comparison.

---

## 10. Metadata & Canonicals (Codebase)

**Duplicates & oversized:**
- Two metaTitle duplicates between `src/data/cityServiceContent.ts:491,801` and `src/data/chandigarhServices.ts:23,313` ("Best Branding Agency in Chandigarh", "Best Graphic Design Agency in Chandigarh"). Consolidate one source.
- 33 descriptions > 160 chars (truncated in SERPs).
- 4 titles > 60 chars.

**Canonicals:**
- Relative canonicals on `/authors/`, `/privacy-policy/`, `/terms-of-service/` (resolved by `metadataBase` but fragile).
- **CRITICAL:** `src/app/web-design-company-in-calgary/page.tsx:22` cross-domain canonical to `townmedialabs.ca` — Google indexes the .ca version instead. **Fix to .com immediately.**
- `src/utils/noindex.ts:5` is a no-op (returns `false` for all) — noindex logic is defensively in place but disabled.
- No X-Robots-Tag in middleware/API (clean).

**Coverage: 0 pages missing metadata exports.** All 1,876 `page.tsx` files have either `export const metadata` or `generateMetadata`. Dynamic routes properly interpolate slug via `metaTitle` templates.

---

## 11. Internal Linking (~1,876 pages)

**Reachability:**
- Services: reachable within 2 clicks via NavbarHome2 mega menu + /services hub.
- Industries: 2 clicks via mega menu (12/39 shown, "View All" link to hub).
- Case Studies: **3+ clicks — no navbar link**, footer-only.
- Locations: **3+ clicks — NOT in main navbar.** `/locations` hub is orphaned from primary nav; only linked via FooterHome2.
- Blog posts: 2 clicks; excellent cross-linking via `internalLinks.ts` (serviceRelatedBlogs, blogRelatedArticles, pillar clusters).

**Orphan risk (no visible inbound links):**
- `/ppc-training-in-chandigarh`
- `/seo-in-punjab`
- `/web-design-company-in-calgary`
- `/social-media-marketing-expert-in-toronto`
- `/digital-marketing-consultant-in-canada`

**Actions:** add Locations to main navbar; add Case Studies to main navbar or prominent footer; re-link the 5 orphaned geo-service pages from relevant hubs; expand mega-menu coverage for Industries (27 missing).

---

## 12. Next.js Rendering Config

**Status: Near-optimal.**
- Blog, Industries, Case Studies, Locations all use `generateStaticParams()` — SSG at build.
- Services: ~1,800 combinations served via `/services/[slug]/page.tsx` with `generateStaticParams` → static files. Correct pattern for scale.
- No middleware; no dynamic-at-request render penalty on key routes.
- `next.config.ts`: AVIF+WebP formats enabled; 1-year immutable cache on `_next/static`, fonts, images; 1-hour SWR on HTML; 30+ legacy-URL 301 redirects.
- `root layout.tsx` emits comprehensive JSON-LD (Organization, LocalBusiness, WebSite).

**Single concern:** Client-side filters on Blog/Industries category views aren't statically-routed — `/blog?category=seo` is not crawlable as a discrete indexable page.

---

## 13. Image SEO

**Critical:**
- **All ~250 programmatic location/service pages reuse the same generic `/og-image.png`.** Massive wasted CTR; one OG image for every city×service combination.
- Raw `<img>` tag in `BlogArticleClient.tsx:323` (author image) — no width/height, CLS risk, skips next/image optimization.
- `googleAdsGenerator.ts:41,77` and `seoAgencyGenerator.ts` inject raw `<img>` in HTML-generated content — unoptimized.

**Asset weight:**
- Portfolio PNGs at 118–167 KB — convert to WebP (40-50% savings).
- `/public/partner/` has 6+ JPGs/PNGs (Google-Partner.jpg 96 KB, shopify-partner-logo.jpg 29 KB, google-gemini.jpg 31 KB) — convert to WebP.
- Hero correctly uses `priority={true}` with `fill` — good.

**LCP priority:** hero only — other pages lack explicit eager loading on above-fold imagery.

**Actions:** generate dynamic OG images per city/service via `opengraph-image.tsx` + `@vercel/og` (biggest CTR win on ~1,800 pages); add 192/512/maskable PWA icons to manifest; add `creator: "@tmlagency"` to service/city/blog-slug Twitter blocks; convert oversized partner/portfolio images to WebP.

---

## 14. Thin/Duplicate Programmatic Content

**Actual programmatic footprint:**
| Route | Count | Source |
|---|---|---|
| `/services/{service}-in-{city}/` | **1,150** | 50 cities × 23 services |
| `/industries/[slug]/` | **39** | 30 legacy + 9 v2 |
| `/locations/[country]/` | **7** | Country hubs |

- **88 of 1,150** (7.7%) location×service combos have hand-written enrichment.
- **1,062 (92.3%)** fall through to auto-generator with small pattern pools (H1: 8, Tagline: 20, Hero description: 4 per tier, FAQs: 8 pure `${serviceName} + ${cityName}` interpolations).
- Shared template shell = 1,220 lines.
- Text uniqueness between auto-pages of same service, different cities: 8-15% (city name + 2-3 landmark/industry tokens swapped).
- **`shouldNoindex()` is a no-op stub** — every auto-page is indexable.

**Industry v2 pages (9) have genuinely unique 300-500-word `painPoints`/`benefits`** — use that template as the quality bar.

**Recommendations (priority order):**
1. **Flip `src/utils/noindex.ts` to noindex the ~1,062 thin auto-pages.** Keep the 88 enriched + Tier-1 city×service combos (target: ~272 indexed).
2. Consolidate Tier-3 cities (Mohali/Kharar/Zirakpur/Panchkula) into a single `tricity` page.
3. For pages kept: require ≥400-500 words of genuinely city-specific copy + named local case study.
4. Drop noindexed URLs from sitemap.
5. Migrate legacy industries to v2 quality template.

---

## 15. OG/Social Images & Favicons

- Generic `/og-image.png` (1200×630, correct dims) reused on ~1,800 pages. Only blog slug overrides via `article.image`.
- Twitter cards: `card: summary_large_image`, `site: @tmlagency`, `creator: @tmlagency` at root; service/city/blog-slug miss `creator` — minor.
- Favicon set has all sizes on disk but `src/app/manifest.ts` `icons` array is missing 192×192 and 512×512 PWA entries and maskable icon.
- Zero usage of Next's `opengraph-image.{tsx,png}` convention — no dynamic OG.
- OG image alt text present on all entries — good.

**Biggest lever:** dynamic per-page OG via `@vercel/og`.

---

## 16. JavaScript Weight

- **`googleapis` ^171.4.0** — only used in `/scripts/*.mjs` at build time; belongs in `devDependencies`.
- **`motion` ^12.36.0** — used in 30+ client components. Named `motion.*` imports aren't tree-shaken; ~30-40 KB gz ships on every page. Wrap with `LazyMotion + domAnimation` and switch to `m.*`.
- **52 files marked "use client"** — including nearly every route wrapper (AboutPageClient, ContactPageClient, ServicesPageClient, PortfolioPageClient, BlogPageClient, CaseStudiesIndexClient, etc.), often *just* for `motion` animations. Extract animated children into small `<Reveal>` leaf client components; keep routes as server components.
- GA + Clarity use `next/script strategy="lazyOnload"` — correct. No GTM, chat widget, heatmap.
- 3 inline `<script type="application/ld+json">` blocks in `layout.tsx` — fine (JSON).

**Ranked LCP/INP fixes:**
1. `LazyMotion` wrapper + `m.*` — removes ~30 KB gz site-wide.
2. Demote `googleapis` to devDependencies.
3. De-client page shells — server components + animated leaf clients.
4. Code-split below-fold sections on non-home routes like `/`'s `BelowFoldSections`.

---

## 17. Hreflang / International

- Declared via `metadata.alternates.languages` only (not headers, not sitemap).
- **Inconsistent locale tagging on the same URL:** `<html lang="en">`, `og:locale=en_IN`, JSON-LD `inLanguage=en-IN`, hreflang `en-IN` + `x-default`.
- **No regional variants exist** (no `/us/`, `/uk/`, `/in/` subpaths). Declaring hreflang without siblings is pointless — misleads Google.
- `en-IN` contradicts `areaServed` (7 countries) + 1,800+ city pages for US/UK/AU. Google may down-weight US/UK rankings thinking the page is IN-geo-targeted.

**Actions:** change `en-IN` → `en` site-wide (or drop the `languages` block entirely); `og:locale` → `en_US` or remove; JSON-LD `inLanguage` → `en`; set GSC International Targeting to "Unlisted".

---

## 18. Competitor Gap Analysis

Typical Page-1 competitors for "digital marketing agency chandigarh": Webhopers, WebFries, BrandLoom, SEO Discovery, Smartech Digital.

**Content/page types TML lacks:**
| Page type | Competitors | TML |
|---|---|---|
| Detailed pricing/packages (INR tiers) | Webhopers, WebFries | ❌ |
| Case studies with quantified ROI metrics | BrandLoom, SEO Discovery | Weak |
| Glossary / "What is…" hubs (100+ terms) | BrandLoom, SEO Discovery | ❌ |
| Client testimonial video pages with transcripts | Webhopers | ❌ |
| Comparison pages ("TML vs X", "Best agencies in Chandigarh") | SEO Discovery | ❌ |
| Resource downloads (SEO audit template, PPC calculator) | BrandLoom | ❌ |
| Team/author bios with LinkedIn + depth | BrandLoom, SEO Discovery | Thin |
| Per-service FAQ hub | WebFries | ❌ |

**8 concrete gaps to close:**
1. `/pricing` page with 3 transparent INR tiers per service.
2. 10-15 quantified case studies with before/after metrics + `CaseStudy` + `Review` schema.
3. `/resources/glossary/` hub — 80+ short definitional pages.
4. `/vs/webhopers`, `/vs/webfries`, `/best-digital-marketing-agencies-in-chandigarh` — intercept competitor-intent.
5. AggregateRating + Review schema fed by embedded Google reviews widget; target 50+ visible reviews.
6. Site-wide trust bar: Clutch rating, Google review count, "Featured in" logos, years-in-business, client count.
7. TL;DR + FAQ accordions on every service/blog with `FAQPage` schema → AIO citation eligibility.
8. Author authority build-out: 400+ word bios, credentials, LinkedIn, `Person` schema linked via `author` on every post.

---

## 19. Crawl-Budget & Indexing Signals

- **TTFB: EXCELLENT.** 155-175 ms on programmatic URLs (Vercel edge-cached).
- **URL params: OK.** No pagination params, no faceted filters; utm params canonical correctly.
- **Pagination: non-issue.** Blog index doesn't paginate.
- **Redirect chains: CLEAN.** Single 308s only (no-slash → slash).
- **Soft-404 risk: LOW-MEDIUM.** Sampled Derabassi vs Aberdeen AI-influencer-management: ~80-85% template overlap. The phrase *"AI Influencer Management — Next-Gen Brand Promotion"* is repeated ~40× per page in headings/schema/body — stylistically spammy at scale. *(Note: this is exactly the serviceData.title concatenation bug fixed this session.)*
- **Canonical consolidation:** Each page self-canonicalizes. `src/app/services/[slug]/page.tsx:87` canonical lacks trailing slash while live URL has it — 308 mismatch.
- **Crawl-budget dilution — BIGGEST ISSUE.** 7,413 sitemap URLs, 94% are service-city combos. DR-low domain cannot afford 7,000 thin pages competing with high-value pages for crawl slots. Internal linking amplifies dilution: programmatic → programmatic cross-links ~57 per page.

**Bottom line:** Server + technical plumbing are fine. **Index bloat is the problem.** Cut indexable programmatic set by ~75%.

---

## Prioritized Action Plan

**P0 (fix this week — biggest impact on ranking + indexing):**
1. Flip `src/utils/noindex.ts` to return `true` for the ~1,062 low-enrichment auto-generated pages. Target ~272 Tier-1 indexed.
2. Fix Calgary cross-domain canonical (`townmedialabs.ca` → `.com`).
3. Fix `hreflang en-IN` → `en` site-wide.
4. Drop noindexed URLs from sitemap; derive real `lastmod` from content-modification dates.
5. Fix canonical trailing-slash mismatch in `src/app/services/[slug]/page.tsx:72` and 250 static city-service files.
6. Remove LocalBusiness/aggregateRating schema from non-HQ `/locations/[city]` pages; keep only Chandigarh.
7. Publish `/llms.txt` (30 min).
8. Fix `/about` CLS (width/height on all 7 images).
9. ✅ **Already fixed this session:** concatenation bug in auto-generated H1s (`cityServiceAutoContent.ts:1604`).

**P1 (next 2-4 weeks):**
10. Reduce home TTFB 681 ms → <200 ms (ISR/edge cache).
11. Right-size hero image with `sizes` attribute.
12. Add `preconnect` to GTM/GA/fonts.
13. Rewrite first paragraph of every page as 40-60-word factual definition for AI citation.
14. Add GBP link + Maps iframe on Contact + footer.
15. Add Locations + Case Studies to main navbar.
16. Re-link 5 orphaned geo-service pages or noindex them.
17. Remove HowTo schema on blog posts; upgrade Article → BlogPosting.
18. Add missing Article fields on case studies (datePublished, image, mainEntityOfPage).
19. Split sitemap into per-type files via `generateSitemaps()`.
20. Fix 404 cache-control header in `next.config.ts`.

**P2 (next quarter):**
21. Generate dynamic per-page OG images via `@vercel/og`.
22. Wrap `motion` in `LazyMotion` + switch to `m.*` (~30 KB gz saved sitewide).
23. Demote `googleapis` to devDependencies.
24. Migrate route wrappers from "use client" to server components with animated leaf clients.
25. Build pricing page, 10 quantified case studies, glossary hub, comparison pages.
26. Build Clutch/DesignRush/GoodFirms/G2/Justdial/Sulekha citation profiles; add to `sameAs`.
27. Author bio expansion + `Person` schema linkage.

---

## Appendix — Agent Index

1. Technical SEO — top 10 indexing blockers
2. Sitemap integrity — 7,413 URLs, 94% programmatic
3. Schema coverage — strong foundation, fixable gaps
4. Content E-E-A-T — 52/100, programmatic bloat dominates
5. Core Web Vitals — /about CLS + home TTFB priorities
6. Local SEO — schema doorway risk + missing GBP embed
7. GEO/AI — 68/100, need llms.txt + opening-paragraph rewrite
8. Mobile visual — /locations city-soft-404 + WhatsApp FAB overlap
9. DataForSEO — unavailable (install MCP extension)
10. Metadata uniqueness — 2 duplicates, 33 oversized descriptions
11. Noindex/canonical — Calgary cross-domain canonical CRITICAL
12. Internal linking — Locations + Case Studies orphaned from navbar
13. Rendering config — near-optimal, client filter gap only
14. Image SEO — generic OG on 1,800 pages, raw `<img>` in blog author
15. Thin content — 92% of programmatic pages 8-15% unique, doorway risk
16. OG/favicons — manifest missing 192/512 PWA + dynamic OG opportunity
17. JS bundle — `googleapis` in prod deps, motion not tree-shaken, 52 "use client"
18. Hreflang — en-IN contradicts global targeting
19. Competitor gap — pricing page, glossary, comparison pages all missing
20. Crawl budget — index bloat is the #1 ranking blocker
