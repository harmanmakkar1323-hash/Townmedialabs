# Performance & Core Web Vitals Audit — townmedialabs.com

**Date**: 2026-04-09
**Tool**: Lighthouse CLI (headless Chrome, mobile throttling)
**Site**: Next.js 16.1.6 / React 19.2.3 / Vercel hosting

---

## Executive Summary

The homepage scores **83/100** on mobile — decent but LCP needs work.
Service pages score **70/100** and geo/city pages score **37/100** due to
massive client-side JavaScript bundles. The root cause is `"use client"`
components that import ~2.75 MB of raw data files that should stay on the
server.

**Core Web Vitals verdict: FAILING on service and geo pages.**

---

## Lighthouse Results (Mobile)

### 1. Homepage — https://townmedialabs.com/

| Metric | Value | Score | Status |
|--------|-------|-------|--------|
| **Performance** | — | **83/100** | Needs Improvement |
| FCP | 1.4 s | 0.97 | Good |
| **LCP** | **3.6 s** | 0.62 | **Needs Improvement** |
| TBT | 200 ms | 0.90 | OK |
| **CLS** | 0 | 1.00 | **Good** |
| Speed Index | 5.2 s | 0.59 | Needs Improvement |
| TTI | 6.5 s | 0.59 | Needs Improvement |
| TTFB | 60 ms | 1.00 | Excellent |

**Resources**: 70 requests, 852 KB total (517 KB JS, 183 KB images, 82 KB fonts)
**LCP element**: An anchor tag `<a class="flex items-center...">` — text-based, not image.
**Third-party blocking**: 110 ms (Google Analytics, Clarity)

### 2. Service Page — https://townmedialabs.com/services/seo/

| Metric | Value | Score | Status |
|--------|-------|-------|--------|
| **Performance** | — | **70/100** | Needs Improvement |
| FCP | 1.2 s | 0.99 | Good |
| **LCP** | **8.9 s** | 0.01 | **POOR** |
| TBT | 140 ms | 0.96 | Good |
| **CLS** | 0.001 | 1.00 | **Good** |
| Speed Index | 5.3 s | 0.58 | Needs Improvement |
| TTI | 9.1 s | 0.33 | Poor |
| TTFB | 40 ms | 1.00 | Excellent |

**Resources**: 51 requests, 1,197 KB total (**1,039 KB JS**, 82 KB fonts)
**LCP element**: `<p class="text-sm md:text-base text-white...">` — a text paragraph that depends on JS hydration to become visible (opacity animation).
**DOM Size**: 668 elements (good)

### 3. Geo Page — https://townmedialabs.com/services/seo-in-chandigarh/

| Metric | Value | Score | Status |
|--------|-------|-------|--------|
| **Performance** | — | **37/100** | **POOR** |
| FCP | 1.3 s | 0.98 | Good |
| **LCP** | **7.5 s** | 0.04 | **POOR** |
| **TBT** | **29,900 ms** | 0.00 | **POOR** |
| **CLS** | 0.001 | 1.00 | **Good** |
| Speed Index | 9.3 s | 0.13 | Poor |
| TTI | 32.7 s | 0.00 | Poor |
| TTFB | 40 ms | 1.00 | Excellent |

**Resources**: 61 requests, **1,512 KB total (1,314 KB JS)**, 82 KB fonts
**LCP element**: `<span class="text-[#ff4500] font-medium">` — breadcrumb text, waiting on JS.
**DOM Size**: 903 elements (acceptable)

---

## Core Web Vitals Summary

| Metric | Homepage | Service Page | Geo Page | Target |
|--------|----------|-------------|----------|--------|
| LCP | 3.6 s | 8.9 s | 7.5 s | < 2.5 s |
| INP* | ~200 ms (est.) | ~140 ms (est.) | ~29.9 s (est.) | < 200 ms |
| CLS | 0 | 0.001 | 0.001 | < 0.1 |

*INP is approximated from TBT in lab data. Field data (CrUX) needed for exact INP.*

**Verdict**: Only CLS passes across all pages. LCP fails everywhere. INP/TBT is catastrophic on geo pages.

---

## Root Cause Analysis

### CRITICAL: Client-Side Data Bundle Explosion (Impact: ~70% of all issues)

The single biggest problem: **`"use client"` templates import massive data files directly.**

`LocationServiceTemplate.tsx` (line 1: `"use client"`) imports:
- `locations.ts` — 249 KB
- `servicePages.ts` — 254 KB
- `blogArticles.ts` — 850 KB
- `industries.ts` — 410 KB
- `serviceSeoContent.ts` — 126 KB
- `cityServiceContent.ts` — 487 KB
- `serviceSeoContentByCountry.ts` — 155 KB
- `serviceFeatureVariants.ts` — 89 KB
- `sectionVariants.ts` — 46 KB
- `portfolioImages.ts` — 19 KB

**Total: ~2.75 MB of raw data imported into the client bundle.**

A server wrapper (`LocationServicePage.tsx`) exists and correctly pre-computes
sliced data via `prepareLocationServiceData()`. However, `LocationServiceTemplate`
**re-imports** all data modules directly (lines 6-22), completely defeating the
server-side data preparation. Every byte still ships to the browser.

The same pattern exists in `ServicePageTemplate.tsx` — it is `"use client"` and
directly imports `servicePages`, `blogArticles`, `industries`, `locations`, and
`portfolioImages`.

### HIGH: Motion/Framer Animations Blocking LCP

Service and geo page LCP elements are text nodes with `opacity` animations
(e.g., `style="opacity: 1; transform: none;"`). Content starts invisible and
becomes visible only after JS hydration + animation runs. This means:

1. Browser renders the page (FCP at 1.2-1.4 s)
2. 1+ MB of JS downloads, parses, and executes
3. React hydrates, motion library runs animation
4. LCP element finally becomes visible (7-9 s)

### MEDIUM: Unused JavaScript

| Source | Wasted Bytes |
|--------|-------------|
| Google Tag Manager | 64 KB |
| Chunk 1fe3dd1f | 22 KB |
| Chunk 9127b62e | 21-23 KB |
| **Total** | **~109 KB** |

### LOW: Homepage Hero Image LCP

The homepage hero uses `priority` and `fetchPriority="high"` correctly, but the
LCP element Lighthouse identified is actually a text/link element, not the image.
The hero background image at `/hero-background.webp` should have a `<link
rel="preload">` in the document head for fastest delivery. Currently, **zero
preload hints** exist in the HTML.

---

## Prioritized Recommendations

### P0 — Remove data imports from client components (Expected: +30-40 points on geo pages)

**Problem**: `LocationServiceTemplate.tsx` and `ServicePageTemplate.tsx` are
`"use client"` but import 2.75 MB of data.

**Fix**: Remove all direct data imports from these client components. Pass only
the pre-computed data as props from server components (the pattern already exists
in `LocationServicePage.tsx` but is not fully used).

For `LocationServiceTemplate.tsx`:
- Remove lines 6-22 (all direct data imports)
- Accept all needed data through `preparedData` prop
- Move any remaining data lookups into `prepareLocationServiceData()`

For `ServicePageTemplate.tsx`:
- Create a parallel server wrapper `ServicePage.tsx` that pre-computes data
- Remove direct imports of `servicePages`, `blogArticles`, `industries`,
  `locations`, `portfolioImages` from the client component
- Pass only the minimal data slice needed for rendering

**Expected impact**: Reduce JS bundle from 1,300+ KB to ~200-300 KB on service
and geo pages. LCP improvement from 8-9s to 2-3s. TBT from 30s to < 500ms.

### P1 — Remove opacity:0 initial state from LCP elements (Expected: -2-4s LCP)

**Problem**: LCP text elements start with `opacity: 0` and animate in via
motion/framer-motion. Browser cannot paint LCP until JS runs the animation.

**Fix**:
- For the hero/heading text that is the LCP element, render it visible by default
  (no initial opacity:0)
- Use CSS animations for entrance effects instead of JS-driven motion
- Or simply remove the fade-in animation from the first visible heading

### P2 — Add `<link rel="preload">` for hero image (Expected: -200-500ms LCP on homepage)

Add to the `<head>` in `layout.tsx`:
```html
<link rel="preload" as="image" href="/hero-background.webp" type="image/webp" fetchpriority="high" />
```

### P3 — Split ServicePageTemplate into server + client parts (Expected: +20 points)

The entire `ServicePageTemplate.tsx` is `"use client"` — meaning all text content
requires JS to render. Refactor:

1. Create a server component that renders all static text/HTML
2. Wrap only interactive parts (animated counters, scroll-triggered animations) in
   small client islands
3. This enables the browser to display text content at FCP, not at TTI

### P4 — Defer motion library on non-hero sections (Expected: -100-200ms TBT)

`motion` (700 KB node_modules) is imported at module level in templates. For
below-fold sections, use `dynamic()` with `{ ssr: false }` to lazy-load motion
components.

### P5 — Evaluate Lenis smooth scroll necessity (Expected: -50-100ms TBT)

Lenis (528 KB) is deferred via `requestIdleCallback` — good implementation. But
assess whether smooth scroll adds enough UX value to justify the cost, especially
on mobile where native scroll is already smooth.

### P6 — Further reduce third-party impact (Expected: -10-50ms TBT)

Google Analytics uses `strategy="lazyOnload"` — good. Microsoft Clarity also
uses `lazyOnload` — good. Both are properly deferred. The 110 ms blocking time
on the homepage is within acceptable range.

Consider:
- Using Partytown to run GA/Clarity in a web worker
- Or delaying analytics until after user interaction

---

## What Is Already Done Well

1. **Image optimization**: `next.config.ts` enables AVIF + WebP formats, correct device sizes
2. **Font loading**: `display: "swap"`, `preload: true`, `adjustFontFallback: true` on both Inter and Syne
3. **TTFB**: 40-60 ms — excellent, Vercel edge serving is fast
4. **Analytics deferral**: Both GA and Clarity use `strategy="lazyOnload"`
5. **Lenis deferral**: Uses `requestIdleCallback` — not in critical path
6. **Content visibility**: `BelowFoldSections` uses `contentVisibility: 'auto'` to skip off-screen rendering
7. **Dynamic imports**: Homepage splits below-fold sections with `next/dynamic`
8. **Caching headers**: Proper `Cache-Control` for static assets (immutable, 1 year)
9. **Security headers**: Comprehensive security header setup
10. **CLS**: Essentially zero across all pages — excellent
11. **Layout extras**: WhatsApp float and mobile CTA properly deferred with `ssr: false`

---

## Server Response Times (curl, no throttling)

| URL | TTFB | Total | Size |
|-----|------|-------|------|
| Homepage | 148 ms | 335 ms | 261 KB |
| /services/seo/ | 152 ms | 293 ms | 137 KB |
| /services/seo-in-chandigarh/ | 136 ms | 146 ms | 31 KB |

Note: The original URL `/seo-in-chandigarh/` returns 404 — correct URL is `/services/seo-in-chandigarh/`.

---

## Priority Implementation Order

| Priority | Fix | Effort | Impact |
|----------|-----|--------|--------|
| **P0** | Remove data imports from client components | Medium (4-8 hrs) | **Massive** — fixes 70% of issues |
| **P1** | Remove opacity:0 from LCP elements | Low (1 hr) | **High** — 2-4s LCP improvement |
| **P2** | Preload hero image | Low (5 min) | **Medium** — 200-500ms LCP |
| **P3** | Server/client split for ServicePageTemplate | Medium (4-6 hrs) | **High** — text visible at FCP |
| **P4** | Lazy-load motion for below-fold | Low (2 hrs) | **Low-Medium** |
| **P5** | Evaluate Lenis necessity | Low (30 min) | **Low** |
| **P6** | Web worker for analytics | Low (1-2 hrs) | **Low** |

**P0 alone should bring all three pages into the "Good" range for LCP and INP.**
