# Technical SEO Audit: townmedialabs.com

**Audit Date:** 2026-04-09
**Auditor:** Claude Code (Technical SEO Specialist)
**Overall Score: 72/100**

---

## Executive Summary

townmedialabs.com is a well-structured Next.js site deployed on Vercel with strong security headers, proper SSR, and good structured data. However, there is one **critical issue** -- every URL in the sitemap (all 2,688 of them) is missing trailing slashes, causing 308 redirects on every crawl. This wastes crawl budget and dilutes signals. Several medium-priority issues exist around duplicate content risk from 2,295 geographic service pages, missing hreflang on inner pages, and CSP being in report-only mode.

---

## 1. Crawlability (Score: 68/100)

### robots.txt -- PASS
- Correctly allows `/` for all bots
- Properly disallows `/api/`, `/_next/`, `/admin/`, `/private/`
- AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) explicitly allowed -- smart for AI search citation
- Bytespider blocked -- appropriate
- Sitemap declared at correct URL

### Sitemap -- CRITICAL ISSUE

| Metric | Value |
|--------|-------|
| Total URLs | 2,688 |
| Geographic service pages | 2,295 (85%) |
| Blog posts | 295 |
| Core pages | ~98 |

**CRITICAL: Sitemap trailing-slash mismatch**
- `next.config.ts` sets `trailingSlash: true`, which forces 308 redirects on all non-trailing-slash URLs
- The sitemap generates every URL WITHOUT trailing slashes (e.g., `https://townmedialabs.com/about` instead of `https://townmedialabs.com/about/`)
- **Result:** Googlebot hits 2,688 URLs, gets 2,688 308 redirects, then fetches 2,688 final URLs = 5,376 requests per crawl cycle
- **Impact:** Wasted crawl budget, possible signal dilution, slower indexing

**Fix location:** `/Users/ramanmakkar/Desktop/tml-nextjs/src/app/sitemap.ts`
Every `url` value needs a trailing slash. Update the `baseUrl` usage or append `/` to all generated URLs.

### Crawl Budget Concern -- MEDIUM
- 2,688 URLs is manageable but with the redirect issue, effective crawl load is ~5,400 requests
- 2,295 geographic pages (11 services x ~305 cities) is aggressive for a site this size
- The `shouldNoindex` utility in `/Users/ramanmakkar/Desktop/tml-nextjs/src/utils/noindex.ts` already filters niche services for non-Indian cities, which is good
- Consider: are all 305 cities generating search traffic? Monitor GSC for pages with 0 clicks over 6 months

### llms.txt / llms-full.txt -- PASS
- Both files return 200 -- good for AI discoverability

---

## 2. Indexability (Score: 70/100)

### Canonical Tags -- PASS (with caveat)
- Homepage canonical: `https://townmedialabs.com/` (correct, with trailing slash)
- Service page canonical: `https://townmedialabs.com/services/seo/` (correct)
- Geo page canonical: `https://townmedialabs.com/services/seo-in-chandigarh/` (correct)
- About page canonical: `https://townmedialabs.com/about/` (correct)
- **Caveat:** Canonicals use trailing slashes but sitemap URLs do not -- contradictory signals

### Meta Robots -- PASS
- All pages serve `index, follow` with `max-video-preview:-1, max-image-preview:large, max-snippet:-1`
- X-Robots-Tag header: `all` (correct)
- Noindex utility properly filters niche service x international city combos

### Duplicate Content Risk -- HIGH

The 2,295 geographic service pages pose a significant duplicate content risk:
- Page sizes are similar: SEO-in-Chandigarh (165KB), SEO-in-Delhi (166KB), Branding-in-Mumbai (165KB)
- Word counts are comparable: ~5,400-5,800 words per page
- While the city names are swapped, the core content structure appears templated

**Recommendations:**
1. Add genuinely unique content per city (local case studies, city-specific statistics, team members in that region)
2. Monitor Google Search Console for "Duplicate, Google chose different canonical" coverage issues
3. Consider consolidating cities with zero search demand into country-level hub pages
4. Implement `lastmod` dates that actually change when content is updated (currently all set to 2026-03-20)

### Hreflang -- FAIL on inner pages
- Homepage has hreflang `en-IN` + `x-default` -- correct
- Service pages (`/services/seo/`): **No hreflang tags found**
- Geographic pages (`/services/seo-in-chandigarh/`): **No hreflang tags found**
- Blog page: **No hreflang tags found**

Since TML serves 7 countries, inner pages should either have hreflang tags or the homepage-only approach should be a deliberate choice (acceptable if no alternate-language versions exist).

---

## 3. Security (Score: 92/100)

### HTTPS -- PASS
- Full HTTPS with HSTS: `max-age=63072000; includeSubDomains; preload` (2-year max-age, excellent)
- HTTP to HTTPS redirect chain: `http://www.townmedialabs.com` -> 308 -> 307 -> `https://townmedialabs.com/` (3 hops, could be 1)

### Security Headers -- PASS (mostly)

| Header | Value | Status |
|--------|-------|--------|
| Strict-Transport-Security | max-age=63072000; includeSubDomains; preload | PASS |
| X-Content-Type-Options | nosniff | PASS |
| X-Frame-Options | SAMEORIGIN | PASS |
| X-XSS-Protection | 1; mode=block | PASS |
| Referrer-Policy | strict-origin-when-cross-origin | PASS |
| Permissions-Policy | camera=(), microphone=(), geolocation=(), interest-cohort=() | PASS |
| X-DNS-Prefetch-Control | on | PASS |
| Content-Security-Policy | Report-Only mode | MEDIUM |
| X-Powered-By | Removed (poweredByHeader: false) | PASS |

**MEDIUM: CSP is in report-only mode.** It logs violations but does not enforce them. Once you have confirmed no legitimate scripts are being blocked, switch from `Content-Security-Policy-Report-Only` to `Content-Security-Policy` in `next.config.ts` (line 155).

### Redirect Chain -- MEDIUM
- `http://www.townmedialabs.com/` takes 3 hops to reach `https://townmedialabs.com/`
- Ideal: 1 hop (308 directly to final HTTPS non-www URL)
- This is likely a Vercel + DNS configuration issue. Check Vercel project domain settings to ensure www redirects directly to the canonical domain without an intermediate hop.

---

## 4. URL Structure (Score: 75/100)

### URL Patterns -- PASS
- Clean, descriptive URLs with no query parameters or IDs
- Service pages: `/services/seo/`, `/services/google-ads/` -- good
- Geographic pages: `/services/seo-in-chandigarh/`, `/services/branding-in-mumbai/` -- good keyword-in-URL pattern
- Blog: `/blog/{slug}` -- clean
- Location hubs: `/locations/canada`, `/locations/india` -- good

### Trailing Slash Consistency -- CRITICAL (already noted)
- `trailingSlash: true` in next.config.ts enforces trailing slashes
- Sitemap generates URLs without trailing slashes
- Internal links on the page correctly use trailing slashes (verified from homepage HTML)
- Fix the sitemap to match

### Redirects -- PASS
- Old URL redirects properly configured in `next.config.ts` (e.g., `/seo-agency-in-chandigarh` -> `/services/seo-in-chandigarh/`)
- Common typos handled (`/carrer` -> `/careers/`)
- Service name changes handled (`/services/web-development` -> `/services/website-development/`)
- All redirects use `permanent: true` (301)

---

## 5. Mobile Optimization (Score: 88/100)

### Viewport Meta -- PASS
- `<meta name="viewport" content="width=device-width, initial-scale=1"/>` present on all pages

### Font Loading -- PASS
- Two Google Fonts (Inter, Syne) loaded with `display: "swap"` and `preload: true`
- Font fallbacks defined with `adjustFontFallback: true` -- minimizes CLS from font swap

### Responsive Images -- PASS
- Next.js Image component used with responsive `srcSet` and `sizes` attributes
- AVIF and WebP formats configured in `next.config.ts`
- Hero image uses `fetchPriority="high"`, non-critical images use `loading="lazy"`

### Touch Targets -- CANNOT VERIFY
- Requires runtime rendering to assess. Recommend testing with Google Lighthouse mobile audit.

---

## 6. Core Web Vitals (Score: 78/100)

### LCP (Largest Contentful Paint) -- LIKELY GOOD
- Hero image preloaded with `<link rel="preload" as="image" imageSrcSet="..." fetchPriority="high"/>`
- Server-side rendered (x-nextjs-prerender: 1 on all pages)
- Homepage HTML is 267KB which is large but most content is visible in initial HTML
- Caching: `public, max-age=3600, stale-while-revalidate=86400` for HTML -- good
- Static assets: `max-age=31536000, immutable` -- excellent

### INP (Interaction to Next Paint) -- POTENTIAL CONCERN
- Homepage loads 13 JS chunks, geo pages load 17 JS chunks
- `DeferredSmoothScroll` component suggests smooth scroll JS is loaded -- check if this blocks interaction
- Vercel Analytics and Google Analytics load asynchronously -- good
- **Recommendation:** Audit JS bundle size. 17 chunks on a geo page seems high. Use `next/dynamic` for below-fold components.

### CLS (Cumulative Layout Shift) -- LIKELY GOOD
- Images use `data-nimg="fill"` with absolute positioning and explicit container dimensions -- prevents layout shift
- Font `display: swap` with `adjustFontFallback: true` minimizes font-swap CLS
- Only 2 raster images on homepage (lean)
- **Potential concern:** No explicit `width`/`height` attributes on images (uses fill mode instead). This is fine as long as the parent container has explicit dimensions.

### Page Weight Analysis

| Page | HTML Size | Concern |
|------|-----------|---------|
| Homepage | 267KB | Heavy for HTML -- likely includes inlined data/CSS |
| Blog listing | 231KB | Heavy -- 295 blog entries probably inlined |
| Geo service page | ~165KB | Acceptable |
| SEO service page | 140KB | Good |
| About page | 77KB | Good |

**HIGH: Homepage (267KB) and Blog (231KB) HTML payloads are heavy.** Consider:
- Pagination for the blog listing page instead of loading all 295 articles at once
- Lazy-loading below-fold sections with dynamic imports

---

## 7. Structured Data (Score: 90/100)

### Homepage JSON-LD -- PASS (Excellent)
Three well-formed JSON-LD blocks:

1. **Organization** -- `@type: Organization` with name, logo, founder, employees, address, geo, sameAs, contactPoint, knowsAbout
2. **ProfessionalService** (LocalBusiness) -- with address, geo, openingHours, priceRange, hasOfferCatalog, areaServed
3. **WebSite** -- with SearchAction for sitelinks search box

Additional page-level structured data:
4. **VideoObject** -- for portfolio showreel
5. **FAQPage** -- with question/answer pairs

### Service Pages -- PASS
- 2 JSON-LD blocks detected on `/services/seo/` (Organization + page-specific)

### Missing Structured Data -- LOW
- Blog articles should have `Article` or `BlogPosting` schema (not verified on individual posts)
- Geographic service pages could benefit from `Service` schema with `areaServed` for the specific city
- Case study pages could use `Article` schema

---

## 8. JavaScript Rendering (Score: 90/100)

### SSR vs CSR -- PASS (SSR)
- All tested pages return `x-nextjs-prerender: 1` -- fully server-side rendered / pre-rendered at build time
- Full HTML content is in the initial response (not client-rendered)
- Vercel cache headers confirm static generation: `x-vercel-cache: HIT` or `PRERENDER`
- This means Googlebot, Bingbot, and AI crawlers can index all content without JavaScript execution

### JS Bundle -- MEDIUM CONCERN
- Homepage: 13 script chunks
- Geo pages: 17 script chunks
- All scripts use `async` attribute -- good, non-blocking
- `turbopack` chunk visible in filenames -- using Turbopack bundler

### Client Components -- PASS
- `DeferredSmoothScroll`, `LayoutExtras` loaded as client components -- appropriate
- Analytics (GA, Clarity, Vercel) loaded separately -- good separation

---

## 9. IndexNow Protocol (Score: 85/100)

### IndexNow Key -- PASS
- Key file exists at `/tml2026indexnow.txt` in public directory
- Returns key value: `tml2026indexnow`
- File accessible at `https://townmedialabs.com/tml2026indexnow.txt`

### IndexNow Endpoint -- NOT VERIFIED
- No dedicated `/api/indexnow` endpoint found
- Need to verify if IndexNow pings are being sent on content updates (e.g., via Vercel deploy hooks or a script)

**Recommendation:** Set up automated IndexNow pings on each Vercel deployment to notify Bing, Yandex, and Naver of updated URLs. This is especially valuable for the 295 blog posts that change more frequently.

---

## 10. Internal Linking (Score: 72/100)

### Homepage Links -- PASS
- ~60 unique internal paths linked from homepage (excluding static assets)
- Links to all major sections: services, about, blog, portfolio, industries, careers, contact, locations, free-tools
- Links to select geo pages (SEO in Indian cities, branding in international cities)

### Geo Page Cross-Linking -- MEDIUM
- Geographic pages link to other geo pages (e.g., SEO-in-Chandigarh links to branding-in-various-cities)
- Cross-linking appears to be by service type across cities, not by city across services
- **Missing:** A geo page for SEO-in-Chandigarh should link to other services in Chandigarh (Google Ads in Chandigarh, Branding in Chandigarh, etc.)

### Missing Internal Links -- HIGH
- 2,295 geographic pages exist but the homepage only links to a small subset
- No clear hub-and-spoke model visible: `/locations/canada` exists but it is unclear if it links to all Canadian city service pages
- Blog posts (295) need to link to relevant service and geo pages for topical authority signals

---

## Prioritized Issues

### CRITICAL (Fix Immediately)

1. **Sitemap trailing-slash mismatch** -- All 2,688 URLs in sitemap.xml lack trailing slashes, causing 308 redirects. Every Googlebot crawl wastes double the requests.
   - **File:** `/Users/ramanmakkar/Desktop/tml-nextjs/src/app/sitemap.ts`
   - **Fix:** Append `/` to all URL values, or change the URL construction to include trailing slashes. Example: change `url: \`${baseUrl}/about\`` to `url: \`${baseUrl}/about/\``

### HIGH (Fix This Week)

2. **Blog page payload: 231KB HTML** -- Loading 295 articles on a single page. Paginate or implement infinite scroll.
   - **File:** `/Users/ramanmakkar/Desktop/tml-nextjs/src/app/blog/page.tsx`

3. **Homepage payload: 267KB HTML** -- Consider lazy-loading below-fold sections.
   - **File:** `/Users/ramanmakkar/Desktop/tml-nextjs/src/app/page.tsx`

4. **Duplicate content risk from 2,295 geo pages** -- Monitor GSC for "Duplicate, Google chose different canonical" warnings. Add city-specific unique content.

5. **Internal linking gaps** -- Geo pages need city-cluster links (all services in one city) not just service-cluster links (one service across cities).

### MEDIUM (Fix This Month)

6. **CSP in report-only mode** -- Switch to enforced `Content-Security-Policy` after verifying no false positives.
   - **File:** `/Users/ramanmakkar/Desktop/tml-nextjs/next.config.ts`, line 155

7. **www redirect chain has 3 hops** -- Configure Vercel to do a single 308 from www to non-www HTTPS.

8. **No hreflang on inner pages** -- If the site only serves one language, this is fine. But if targeting en-IN specifically, add hreflang to at least service pages and blog.

9. **Static lastmod dates in sitemap** -- All geo pages show `2026-03-20`. Use actual content modification dates so search engines know when to re-crawl.

10. **Automate IndexNow pings** -- Send IndexNow notifications on each deploy for changed URLs.

### LOW (Backlog)

11. **Add Article schema to blog posts** -- Enhances rich snippet eligibility.

12. **Add Service schema with areaServed to geo pages** -- Helps search engines understand service-location relationship.

13. **Audit 305 cities for search demand** -- Use GSC data to identify cities with 0 impressions over 6 months and consider noindexing or consolidating them.

14. **Add preconnect hints** -- No `<link rel="preconnect">` tags found for third-party origins (Google Analytics, Clarity).

---

## Score Summary

| Category | Score | Status |
|----------|-------|--------|
| 1. Crawlability | 68/100 | Needs Work (sitemap redirect issue) |
| 2. Indexability | 70/100 | Needs Work (duplicate content risk) |
| 3. Security | 92/100 | Excellent |
| 4. URL Structure | 75/100 | Good (sitemap mismatch drags score) |
| 5. Mobile Optimization | 88/100 | Good |
| 6. Core Web Vitals | 78/100 | Good (heavy payloads) |
| 7. Structured Data | 90/100 | Excellent |
| 8. JavaScript Rendering | 90/100 | Excellent (full SSR) |
| 9. IndexNow | 85/100 | Good |
| 10. Internal Linking | 72/100 | Needs Work |
| **Overall** | **72/100** | **Good, with critical fix needed** |

---

## Quick Wins (Under 30 Minutes Each)

1. Fix sitemap trailing slashes in `sitemap.ts` -- add `/` to all URL strings
2. Add `<link rel="preconnect">` for `https://www.googletagmanager.com` and `https://www.clarity.ms`
3. Update static `lastmod` dates to use real timestamps or `new Date()` for dynamic content

---

*Audit performed by analyzing live HTTP responses, HTML source, security headers, source code at `/Users/ramanmakkar/Desktop/tml-nextjs/`, and sitemap.xml. Core Web Vitals scores are estimates based on source inspection -- run Lighthouse and CrUX for field data.*
