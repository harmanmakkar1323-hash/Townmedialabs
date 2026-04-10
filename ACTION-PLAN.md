# SEO Action Plan: townmedialabs.com

**Generated**: April 9, 2026
**Current Score**: 67/100
**Target Score**: 85/100

---

## CRITICAL — Fix Immediately (Blocks indexing or causes penalties)

### 1. Noindex Programmatic Geo Pages Without Unique Content
**Files**: `src/app/services/[service]-in-[city]/page.tsx` or equivalent dynamic route
**Issue**: 148 of 158 cities lack `uniqueContent` in `locations.ts` → ~1,628 pages with 80-95% identical content
**Fix**: Add `robots: { index: false }` to metadata for pages where `locations[slug].uniqueContent` is undefined
**Keep indexed**: ~10 cities with hand-written content (Chandigarh, Delhi, Mumbai, etc.)
**Impact**: Removes scaled content abuse risk, protects entire domain from Helpful Content suppression
**Effort**: 1-2 hours

### 2. Remove Data Imports from Client Components
**Files**:
- `src/components/templates/LocationServiceTemplate.tsx` (lines 6-22)
- `src/components/templates/ServicePageTemplate.tsx`
**Issue**: `"use client"` components import ~2.75 MB of data files despite server wrappers already pre-computing minimal data
**Fix**: Strip all direct data imports. Use only the `preparedData` prop passed from server components (`LocationServicePage.tsx`)
**Impact**: JS drops from 1,300+ KB to ~200-300 KB. TBT drops from 29,900ms to acceptable levels. Lighthouse jumps from 37 to ~70+
**Effort**: 4-8 hours

### 3. Fix Sitemap Trailing Slashes
**File**: `src/app/sitemap.ts`
**Issue**: `next.config.ts` enforces `trailingSlash: true` but sitemap generates URLs without trailing slashes → 2,688 308 redirects per crawl
**Fix**: Append `/` to all URL values in sitemap generation
**Impact**: Eliminates 2,688 unnecessary redirects per crawl cycle, halves crawl load
**Effort**: 30 minutes

### 4. Clarify "Trusted By" Logo Carousel
**Issue**: Displays Google, Microsoft, Amazon, Netflix logos — if these are platforms/tools used (not clients), this is misleading
**Fix**: Either (a) relabel as "Tools & Platforms We Work With" or (b) replace with actual client logos or (c) add "Technology Partners" label
**Impact**: Removes E-E-A-T trustworthiness violation
**Effort**: 30 minutes

### 5. Merge Duplicate ProfessionalService Schema on Homepage
**File**: `src/lib/schema.ts` or homepage schema generation
**Issue**: Two `<script>` tags both use `@id: #localbusiness`. Second block (with AggregateRating 4.9/352 + 3 Reviews) may be ignored
**Fix**: Merge into single ProfessionalService block containing all properties
**Impact**: Restores Review rich results eligibility
**Effort**: 30 minutes

---

## HIGH — Fix Within 1 Week (Significantly impacts rankings)

### 6. Add Service + BreadcrumbList Schema to Geo Pages
**Issue**: 139+ geo/city pages have zero page-specific schema (only global Organization, ProfessionalService, WebSite)
**Fix**: Add Service schema with city-specific `areaServed` and BreadcrumbList. Replicate pattern from `/services/seo/`
**Impact**: Rich result eligibility for 139+ pages
**Effort**: 2-3 hours (template change)

### 7. Fix Founder/Role Contradiction in Schema
**Issue**: Homepage declares Raman Makkar as "Owner & Founder" but About page Person schema lists him as "SEO & Growth" and Arvinder Singh as "Owner & Visionary"
**Fix**: Align to one consistent set of roles across all schema and content
**Impact**: Consistent entity signals for Google Knowledge Graph
**Effort**: 1 hour

### 8. Fix LCP Opacity Animation Issue
**Files**: Service and geo page hero/heading components
**Issue**: LCP text starts with `opacity: 0` and waits for JS hydration + Framer Motion animation before becoming visible
**Fix**: Render heading visible by default (`opacity: 1`), use CSS animation or remove entrance animation on LCP elements
**Impact**: LCP improves from 7.5-8.9s to potentially <2.5s
**Effort**: 1-2 hours

### 9. Strengthen Author Attribution
**Files**: Author page template, blog post metadata
**Issue**: Raman's author page is ~150 words with no photo. `/authors/` index returns 404. Blog contributor "Harman" may lack author page
**Fix**:
- Expand author pages with credentials, expertise, social links, photo
- Fix `/authors/` index page (returns 404)
- Add Person schema to author pages
- Ensure every blog post links to author page
**Impact**: Significant E-E-A-T improvement
**Effort**: 3-4 hours

### 10. Add Blog Pagination
**Issue**: Blog listing loads all 295 articles on single 231KB page
**Fix**: Implement pagination at 12-15 posts per page
**Impact**: Reduces page weight, improves crawl efficiency, better UX
**Effort**: 2-3 hours

### 11. Add Preload Hints
**File**: `src/app/layout.tsx` or page head components
**Fix**:
- `<link rel="preload">` for hero background image
- `<link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Information">` for AI crawler discovery
**Impact**: 200-500ms LCP improvement + better AI discoverability
**Effort**: 15 minutes

### 12. Attribute All Statistics to Sources
**Issue**: Claims like "67% of Chandigarh businesses increased digital budgets" and "1.2 million internet users in tricity" have no source
**Fix**: Add "According to [Source, Year]" to all third-party statistics
**Impact**: Improves trustworthiness and AI citability
**Effort**: 2-3 hours

---

## MEDIUM — Fix Within 1 Month (Optimization opportunities)

### 13. Add "Answer Block" Paragraphs for AI Citability
**Issue**: Passage-level citability score is 58/100. No self-contained 134-167 word paragraphs optimized for AI extraction
**Fix**: Below each H2 on top 20 pages, write a self-contained paragraph that answers the heading as a question. Front-load the answer in the first sentence
**Impact**: 40-60% increase in AI citation rate
**Effort**: 8-12 hours

### 14. Convert Headings to Question Format
**Issue**: Marketing-slogan headings ("Every service you need under one roof") don't match AI query patterns
**Fix**: Convert to question format matching search intent ("What Digital Marketing Services Does TML Offer?")
**Impact**: Better AI extraction and featured snippet eligibility
**Effort**: 4-6 hours

### 15. Add datePublished/dateModified to Service Pages
**Issue**: Service pages lack freshness signals
**Fix**: Add dates to page metadata and schema
**Impact**: Freshness signal for search engines
**Effort**: 1 hour

### 16. Embed Google Maps + GBP Integration
**Issue**: No Maps iframe, no GBP Place ID in schema, no review widget
**Fix**:
- Embed Google Maps on `/contact/` and `/digital-marketing-agency-chandigarh/`
- Add GBP Place ID to ProfessionalService schema
- Consider Google review widget or "Leave a Review" CTA
**Impact**: Strengthens local search signals (25% of local ranking weight)
**Effort**: 2-3 hours

### 17. Add Cross-Service Internal Linking for Same City
**Issue**: Geo pages link across cities for same service but not across services for same city
**Fix**: Add "Other services in [City]" section linking to all services available in that city
**Impact**: Better link equity distribution, improved crawl discovery
**Effort**: 2-3 hours (template change)

### 18. Update Geo Coordinates to 5+ Decimal Places
**Files**: `src/lib/schema.ts`, `src/data/locations.ts`
**Issue**: Coordinates at 4 decimals (~11m precision) vs recommended 5+ (~1m)
**Fix**: Update all coordinate values to 5+ decimal places
**Effort**: 1-2 hours

### 19. Enrich Remaining Indexed Geo Pages
**Issue**: Even the ~10 cities with `uniqueContent` could be stronger
**Fix**: Add city-specific case studies, real client testimonials, local competitor context, verifiable local data
**Impact**: Transforms geo pages from "acceptable" to "genuinely useful"
**Effort**: 20-40 hours (ongoing)

### 20. Fix llms.txt Issues
**Issue**: Missing version/date, service URLs lack trailing slashes, llms-full.txt truncated
**Fix**: Add `Last-Updated` field, fix trailing slashes, complete truncated sections
**Effort**: 30 minutes

---

## LOW — Backlog (Nice to have)

### 21. Create Wikipedia Entity
**Impact**: VERY HIGH for AI citations (strongest signal) but lengthy process
**Action**: Gather press coverage, awards, notable clients for notability evidence
**Effort**: 2-4 weeks (external process)

### 22. Build YouTube, Reddit, Clutch Presence
**Impact**: YouTube has ~0.737 correlation with AI citations
**Effort**: Ongoing content strategy

### 23. Add Article + speakable Schema to Blog Posts
**Impact**: Better blog rich results and voice-assistant optimization
**Effort**: 1-2 hours (template change)

### 24. Add HowTo Schema for Process Sections
**Impact**: Rich result eligibility for "how we work" content
**Effort**: 1-2 hours

### 25. Add Outbound Citations to Authoritative Sources
**Impact**: Improves E-E-A-T and Perplexity citation likelihood
**Effort**: 2-3 hours

### 26. Create Unique OG Images Per Page Type
**Effort**: 4-8 hours

---

## Implementation Timeline

| Week | Tasks | Expected Score Impact |
|------|-------|----------------------|
| **Week 1** | Items 1-5 (Critical fixes) | 67 → 75 (+8) |
| **Week 2** | Items 6-12 (High-priority fixes) | 75 → 80 (+5) |
| **Weeks 3-4** | Items 13-20 (Medium optimizations) | 80 → 85 (+5) |
| **Ongoing** | Items 21-26 (Backlog) | 85 → 90+ |

---

## Key Metric Targets After Fixes

| Metric | Current | Target (4 weeks) |
|--------|---------|-------------------|
| Lighthouse Mobile (Homepage) | 83 | 92+ |
| Lighthouse Mobile (Geo Pages) | 37 | 75+ |
| LCP (Service Pages) | 8.9s | <2.5s |
| TBT (Geo Pages) | 29,900ms | <200ms |
| Indexed Thin Pages | ~1,628 | 0 |
| Schema Coverage (Geo Pages) | 0% | 100% |
| Author Pages with Full Bio | 0 | 2+ |
| Statistics with Source Attribution | ~10% | 90%+ |
| AI Citability Score | 58/100 | 75+ |
