# Local SEO Audit: townmedialabs.com (TML Agency)

**Audit Date:** 2026-04-09
**Auditor:** Claude Opus 4.6 (automated)
**Scope:** Homepage, Contact, Service-City Pages, Schema, Codebase Analysis

---

## Overall Local SEO Score: 68/100

| Dimension | Weight | Score | Weighted |
|-----------|--------|-------|----------|
| GBP Signals | 25% | 55/100 | 13.75 |
| Reviews & Reputation | 20% | 78/100 | 15.60 |
| Local On-Page SEO | 20% | 72/100 | 14.40 |
| NAP Consistency & Citations | 15% | 75/100 | 11.25 |
| Local Schema Markup | 10% | 62/100 | 6.20 |
| Local Link & Authority Signals | 10% | 65/100 | 6.50 |
| **Total** | **100%** | | **67.70 (rounded: 68)** |

---

## 1. Business Type Detection

**Detected: Hybrid (physical office + global service delivery)**

Signals:
- Physical address displayed: CO 112, Basement, Sector 34A, Chandigarh 160022, India
- Google Maps link with coordinates (30.7281, 76.7726)
- Service area spans 7 countries (India, US, UK, Canada, Australia, NZ, UAE)
- No "we come to you" language; clients are served remotely
- Edmonton referenced as Canadian "headquarters" in location data

**Note:** For a digital marketing agency, hybrid is correct. However, the site lacks explicit SAB (Service Area Business) signals for non-HQ cities, which is important for Google's understanding.

---

## 2. Industry Vertical Detection

**Detected: Professional Services / Marketing Agency**

The site does not fit standard local SEO verticals (restaurant, healthcare, legal, etc.). It IS a local business that also serves as a service provider to those verticals. Schema uses `ProfessionalService` -- this is the correct subtype.

---

## 3. NAP Consistency Audit

### Source Comparison Table

| Source | Name | Address | Phone | Email |
|--------|------|---------|-------|-------|
| Homepage (visible) | TML Agency (Town Media Labs) | CO 112, Basement, Sector 34A, Chandigarh 160022, India | +91-98726-48209 | info@townmedialabs.com |
| Homepage (schema) | TML Agency | CO 112, Basement, Sector 34A, Chandigarh, Chandigarh 160022 | +91-98726-48209 | info@townmedialabs.com |
| Contact page | TML Agency (Town Media Labs) | CO 112, Basement, Sector 34A, Chandigarh 160022 | +91-98726-48209 | info@townmedialabs.com |
| Service pages (schema.ts) | TML Agency | CO 112, Basement, Sector 34A / Chandigarh / IN / 160022 | +91-98726-48209 | -- |
| /digital-marketing-agency-chandigarh/ | TML Agency | CO 112, Basement, Sector 34A, Chandigarh 160022 | +91-98726-48209 | -- |
| City service pages (Delhi etc.) | TML Agency | Same Chandigarh HQ address | +91-98726-48209 | info@townmedialabs.com |

### Findings

**CONSISTENT** -- NAP is remarkably consistent across all pages. The address, phone, and email match everywhere.

**Issues Found:**
1. **Minor:** Contact page fetch noted "mentions Canada, likely an error" -- there may be a stale reference to a Canadian address somewhere in the footer or contact page. Needs manual verification.
2. **Missing second phone number:** The user mentioned an international phone number exists, but only the Indian number (+91-98726-48209) appears across the site. If there's a second number, it should be added to schema and visible content for international markets.
3. **Name variations:** "TML Agency," "Town Media Labs," "TML Digital Marketing Agency" are used interchangeably. Pick ONE primary name for all schema markup and keep alternates only in `alternateName` property.

---

## 4. Local Schema Markup Validation

### Homepage (`page.tsx`)

| Property | Status | Notes |
|----------|--------|-------|
| @type: ProfessionalService | CORRECT | Appropriate for marketing agency |
| name | PRESENT | "TML Agency" |
| address (PostalAddress) | PRESENT | Complete with street, locality, region, country, postal code |
| telephone | PRESENT | +91-98726-48209 |
| email | PRESENT | info@townmedialabs.com |
| geo (GeoCoordinates) | PRESENT | 30.7281, 76.7726 |
| openingHoursSpecification | PRESENT | Mon-Fri 10-19, Sat 10-17 |
| aggregateRating | PRESENT | 4.9/352 reviews |
| review (individual) | PRESENT | 3 reviews with dates, ratings, authors |
| areaServed | PRESENT | 7 countries |
| sameAs (social profiles) | PRESENT | Instagram, Facebook, LinkedIn, Twitter |
| url | PRESENT | https://townmedialabs.com |
| image | PRESENT | /logo.png |
| foundingDate | PRESENT | 2010 |
| numberOfEmployees | PRESENT | 70-100 |
| founder | PRESENT | Raman Makkar |

### Issues

1. **CRITICAL -- Geo coordinate precision:** Coordinates are 30.7281, 76.7726 (4 decimal places). Google recommends 5+ decimal places for accuracy to ~1 meter. Current precision is ~11 meters. Update to 5+ decimals (e.g., 30.72810, 76.77260 or more precise values from Google Maps).

2. **HIGH -- LocalBusiness schema only on HQ cities:** The `LocationServiceTemplate.tsx` (line 206-216) explicitly limits LocalBusiness schema to Chandigarh and Edmonton only:
   ```
   const isHeadquartersCity = location.slug === "chandigarh" || location.slug === "edmonton";
   ```
   This means 99% of city pages have NO LocalBusiness schema -- only a Service schema. For a hybrid business, this is actually defensible (you don't have offices in those cities), but consider adding an `Organization` schema with `areaServed` for each city to strengthen local relevance signals.

3. **MEDIUM -- No @id linking between schemas:** The homepage has separate ProfessionalService, VideoObject, and other schemas but they lack `@id` cross-references. This makes it harder for search engines to understand entity relationships. Add `@id` to the main entity and reference it from other schemas.

4. **MEDIUM -- Missing `priceRange` property:** ProfessionalService schema should include `priceRange` (e.g., "$$" or "INR 15,000-1,50,000/month").

5. **LOW -- Review schema `publisher` misuse:** In the homepage review schema, `publisher` is set to the client's company (e.g., "Luxe Interiors"). The `publisher` property on Review should reference the platform where the review was published (e.g., Google), not the reviewer's employer. Remove it or change to the correct publisher.

---

## 5. GBP Optimization Signals

### Detected on Site

| Signal | Present | Notes |
|--------|---------|-------|
| Google Maps link | YES | Direct link with place name and coordinates |
| Maps embed (iframe) | PARTIAL | Referenced in schema hasMap but no visible iframe embed found |
| GBP Place ID | NO | No place ID reference anywhere in code |
| GBP reviews widget | NO | Reviews are hardcoded, not pulled from GBP |
| GBP posts integration | NO | No Google Posts content on site |
| GBP photos on site | NO | No reference to GBP photo content |
| Directions CTA | PARTIAL | Maps link exists but no explicit "Get Directions" button |
| GBP category reference | NO | Primary category not mentioned on site |
| Review generation CTA | NO | No "Leave us a review on Google" link |
| Q&A from GBP | NO | FAQ is site-generated, not from GBP Q&A |

### GBP Optimization Checklist

- [ ] Add embedded Google Maps iframe on contact page and Chandigarh service pages
- [ ] Add GBP Place ID to schema markup (`@id` or `hasMap` with place URL)
- [ ] Add "Leave a Google Review" button/link on contact and thank-you pages
- [ ] Create a "Get Directions" button using Maps deeplink
- [ ] Pull and display actual Google reviews (or at minimum, link to GBP listing)
- [ ] Add GBP primary category (likely "Internet Marketing Service") to site content
- [ ] Cross-post GBP posts content on the site's blog or news section
- [ ] Ensure GBP listing NAP exactly matches site NAP
- [ ] Add GBP booking/appointment link if available
- [ ] Upload geotagged office photos to both GBP and site

---

## 6. Review Health Snapshot

| Metric | Value | Assessment |
|--------|-------|------------|
| Overall Rating | 4.9/5 | Excellent |
| Total Reviews | 352 | Strong for a marketing agency |
| Review Velocity | Unknown | Cannot assess without GBP data -- 18-day rule applies |
| Review Recency | Most recent schema review: Dec 2025 | 4+ months old -- needs fresh reviews |
| Review Diversity | 3 reviews in schema, limited testimonials on pages | Below average for social proof |
| Response Rate | Unknown | Cannot assess without GBP access |
| Review Platforms | Only own site | No third-party review widgets (Google, Clutch, G2) |

### Issues

1. **HIGH -- Review recency gap:** The most recent review in schema is dated 2025-12-05. That's 4+ months ago. Per the Sterling Sky 18-day rule, review velocity matters for rankings. The 352 review count is strong but fresh reviews must keep flowing.

2. **HIGH -- No third-party review integration:** All testimonials are self-hosted. Adding widgets from Google Reviews, Clutch, G2, or Trustpilot would add credibility and structured data diversity.

3. **MEDIUM -- Limited testimonials on service pages:** Each city-service page shows only 1 testimonial (the `getTrustQuote` function generates a single quote). This is weak social proof for conversion.

---

## 7. Citation Presence Status (Tier 1 Directories)

**Note:** Cannot perform live site: searches or directory lookups without browser access. Assessment based on typical presence expectations.

### Expected Tier 1 Citations for an Indian Digital Marketing Agency

| Directory | Expected Status | Priority |
|-----------|----------------|----------|
| Google Business Profile | Likely claimed (Maps link present) | Critical |
| Yelp | Unknown | Medium (less relevant in India) |
| BBB | Unknown | Low (US-focused) |
| Clutch.co | Should be listed | Critical for agencies |
| G2.com | Should be listed | High |
| GoodFirms | Should be listed | High (strong in India) |
| DesignRush | Should be listed | Medium |
| UpCity | Should be listed | Medium |
| Justdial | Should be listed | High (India) |
| IndiaMART | Should be listed | Medium (India) |
| Sulekha | Should be listed | Medium (India) |
| LinkedIn Company Page | Likely exists (social links present) | High |
| Crunchbase | Should be listed | Medium |
| Glassdoor | Should be listed | Medium (employer branding) |
| Apple Maps | Unknown | Medium |

### Recommendations
- Verify and claim listings on all Tier 1 directories
- Ensure NAP matches exactly on every listing
- For international markets: Yelp (US/UK/AU/NZ), BBB (US/Canada), Trustpilot (UK/EU)
- For India: Justdial, IndiaMART, Sulekha, TradeIndia
- For agencies specifically: Clutch, G2, GoodFirms, DesignRush, The Manifest

---

## 8. Location Page Quality Assessment

### Scale of the Problem

- **Total service-city page directories:** 1,826 (in `/src/app/services/`)
- **Total unique locations defined:** ~158 (317 slug references / ~2 per location)
- **Services mapped:** 11 (SEO, Google Ads, Branding, Website Dev, Social Media, Lead Gen, Graphic Design, Video Editing, AI Influencer, Music Release, Branding/Packaging)
- **Estimated total geo pages:** 158 locations x 11 services = ~1,738 pages
- **Pages with noindex:** Niche services (music-release, ai-influencer, branding-packaging, video-editing) for non-India cities
- **Locations with handwritten uniqueContent:** Only ~10 out of 158 (6.3%)

### Content Uniqueness Analysis

#### Chandigarh SEO Page (dedicated static page + enrichment data)
- **Word count:** ~4,500
- **Unique content ratio:** ~60% unique, ~40% template
- **Local signals:** Sector 17, IT Park, Mohali Phase 8B, tricity population, 67% stat
- **Custom FAQs:** 4 hand-written Chandigarh-specific questions
- **Custom process steps:** Chandigarh-specific descriptions
- **Verdict:** GOOD -- this is a well-crafted location page

#### Delhi SEO Page (dynamic route + auto-content)
- **Word count:** ~4,500-5,500
- **Unique content ratio:** ~30% unique, ~70% template
- **Local signals:** Connaught Place, NCR population, pin-code targeting, Hindi SEO
- **FAQs:** 4 auto-generated but city-aware
- **Verdict:** ACCEPTABLE but trending toward thin

#### Typical Tier 2/3 City Page (e.g., Bhopal, Ballarat, Boise)
- **uniqueContent:** Not defined (only 10 locations have it)
- **Content source:** `cityServiceAutoContent.ts` generates everything from deterministic hash
- **Variant pool:** 25+ H1 patterns, 8 why-choose variants x 4 slots, 10+ local content slots
- **Estimated unique content ratio:** ~15-20% (city name swaps + hash-selected variant paragraphs)
- **Verdict:** HIGH RISK of being classified as doorway pages

### Doorway Page Swap Test

If you swap "Boise" for "Ballarat" on their respective SEO pages, approximately 80-85% of the content would be identical or semantically equivalent. This is a doorway page signal.

Google's doorway page definition from their spam policies: "Are these pages made to funnel users to the actually usable or relevant portion of your site? Are these pages an intermediate step that doesn't add value?" -- Many of these city pages may qualify.

### Content Architecture Issues

1. **CRITICAL -- 148 cities lack uniqueContent:** The `locations.ts` file has `uniqueContent` for only ~10 cities. The remaining 148 rely entirely on `cityServiceAutoContent.ts` which uses deterministic hash selection from shared pools. This is programmatic content generation that Google has explicitly warned against.

2. **CRITICAL -- Static page files for every combination:** There are 1,826 individual page files in `/services/`. While some use the dynamic `[slug]` route, most appear to be individual static files. This creates maintenance nightmares and signals scale-first, quality-second intent.

3. **HIGH -- Same Chandigarh HQ address on all schema:** Every city page's Service schema points back to the Chandigarh office address (via `DEFAULT_PROVIDER` in `schema.ts`). This is technically honest but may confuse Google about where you actually operate.

4. **HIGH -- Identical pricing across all locations:** The `pricingTiers` in `serviceSeoContent.ts` shows INR pricing (starting at Rs 15,000/month) on pages for London, New York, Dubai. Country-specific pricing overlays exist (`pricingByCountry`) but need verification that all countries are covered.

5. **MEDIUM -- Template-generated FAQs:** For cities without custom FAQs, the template generates 8 generic questions with city/state/industry name insertions. These are low-value for users and may trigger helpful content signals.

### Internal Linking Depth

- Homepage -> Services hub -> Individual service page -> City-service page: **3 clicks minimum**
- Locations hub (`/locations`) -> Country -> (no direct link to service-city pages): **Dead end**
- Cross-links between city pages: Present but generated (e.g., Chandigarh links to Delhi, Mumbai, Punjab, Ludhiana, Auckland)
- Blog -> Service pages: Present via `serviceRelatedBlogs`
- Industry pages -> Service pages: Present via `serviceRelatedIndustries`
- **Missing:** City-service pages do not link to other services in the same city (e.g., SEO in Delhi does not link to Google Ads in Delhi)

---

## 9. Multi-Location Strategy Effectiveness

### Current Strategy
- Single physical office (Chandigarh) with Edmonton referenced as Canadian HQ in content
- 158 target cities across 7 countries
- 11 services per city = ~1,738 indexed pages
- Noindex applied to niche services in non-India cities (smart)

### Assessment

**What's Working:**
- Chandigarh pages are genuinely strong with custom content
- Tier 1 Indian cities (Delhi, Mumbai, Bangalore) have `uniqueContent` and local landmarks
- International gateway cities (Dubai, Auckland, London) have some customization
- Noindex strategy for low-demand combinations is smart
- Country-aware pricing and currency handling
- `countryData` provides market-specific stats (CPC, ad spend, platforms)

**What's Not Working:**
- 93.7% of locations have zero custom content
- Auto-content generator, despite having "1,000+ combos," still produces semantically identical pages
- No Google Business Profiles for any city except possibly Chandigarh
- No local backlinks strategy for target cities
- No locally sourced testimonials/case studies per city
- The /locations/ hub pages exist but don't connect well to service-city pages
- International pages use INR address and phone -- no local presence signals

### Proximity Factor Note
Per Search Atlas ML study, proximity accounts for 55.2% of local ranking variance. Since TML has only 1-2 physical offices, ranking in the local pack for cities where you have no physical presence is essentially impossible. These pages can still rank in organic results but will not appear in Maps/Local Pack for distant cities.

---

## 10. Service Area Coverage Strategy

### Current Coverage

| Country | Cities | Custom Content | Assessment |
|---------|--------|---------------|------------|
| India | ~40 | 6-8 have uniqueContent | Core market; needs more custom content |
| USA | ~25 | 0 have uniqueContent | Thin content risk; focus on 5 key cities |
| UK | ~15 | 0 | Same issue |
| Australia | ~15 | 0 | Same issue |
| UAE | 5 | Dubai has uniqueContent | Good; expand to Abu Dhabi |
| New Zealand | 9 | 0 | Over-indexed for market size |
| Canada | ~10 | Edmonton, Calgary have uniqueContent | Canadian HQ claim needs backing |

### Recommendations
- **Consolidate:** Reduce from 158 cities to ~40-50 with genuine custom content
- **Noindex the rest:** Apply noindex to all cities without uniqueContent until content is written
- **Prioritize:** Write genuine uniqueContent for top 5 cities per country based on search volume
- **Proof of service:** Add city-specific case studies, client names, and testimonials where possible

---

## Top 10 Prioritized Actions

### CRITICAL (Do This Week)

1. **Reduce doorway page risk.** Noindex all service-city pages where the location lacks `uniqueContent`. Currently 148 of 158 locations have no custom content -- these pages are doorway page candidates that risk a manual action. Keep them in the codebase but add `noindex` until each gets genuine 500+ words of hand-written, city-specific content.

2. **Verify and optimize GBP listing.** Confirm the primary GBP category is "Internet Marketing Service" (not "Marketing Agency" or "Advertising Agency" -- wrong primary category is the #1 negative ranking factor per Whitespark 2026). Add all relevant secondary categories. Ensure GBP NAP matches site exactly.

3. **Fix geo coordinate precision.** Update coordinates in `schema.ts` and `locations.ts` from 4 decimal places (30.7281) to 5+ decimal places (e.g., 30.72810). This applies to both the hardcoded `DEFAULT_PROVIDER` and the 10 cities with `uniqueContent`.

### HIGH (Do This Month)

4. **Add Google review widget and review generation.** Embed a Google Reviews widget on the homepage and contact page. Add "Review us on Google" CTAs on post-service pages or email sequences. Maintain review velocity (at least 2-3 new reviews per week to satisfy the 18-day rule).

5. **Embed Google Maps iframe.** Add an actual Maps iframe embed on the contact page and the `/digital-marketing-agency-chandigarh/` page. The current implementation only has a Maps link but no visual embed.

6. **Write uniqueContent for top 20 cities.** Prioritize: Chandigarh (done), Delhi (partially done), Mumbai, Bangalore, Hyderabad, Pune, Gurgaon, Noida, Dubai, Abu Dhabi, Auckland, London, Sydney, Melbourne, New York, Los Angeles, Toronto, Vancouver, Edmonton (done), Calgary (done). Each needs 500+ words of genuinely local content with specific landmarks, market stats, and client references.

7. **Add cross-service internal links on city pages.** Each city-service page should link to all other services in the same city (e.g., "SEO in Delhi" links to "Google Ads in Delhi," "Branding in Delhi," etc.). This creates topical clusters and reduces the "isolated landing page" signal.

### MEDIUM (Do This Quarter)

8. **Build Tier 1 citations.** Create/claim listings on Clutch, G2, GoodFirms, Justdial, and DesignRush with exact NAP match. For each international market, add market-specific directories (Yelp for US/UK, Trustpilot for UK, Yellow Pages for AU/NZ).

9. **Add @id entity linking to schema.** Give the main ProfessionalService entity an `@id` (e.g., `https://townmedialabs.com/#organization`) and reference it from Service, Review, and other schemas. This helps Google build a unified knowledge graph entity for TML Agency.

10. **Create city-specific landing pages with local proof.** For top 5 Indian cities, create dedicated pages (like `/digital-marketing-agency-chandigarh/` but for Delhi, Mumbai, etc.) with real case studies, named clients, local team bios, and city-specific imagery. These become your "pillar" local pages that the service-city pages link to.

---

## Limitations Disclaimer

The following could NOT be assessed without paid tools or manual access:

- **Actual GBP listing status:** Category, completeness score, post frequency, Q&A, photo count, listing health. Requires GBP dashboard access or DataForSEO API.
- **Citation consistency across directories:** Would need BrightLocal, Whitespark, or Moz Local to scan.
- **Review velocity and response rate:** Requires GBP API or manual review of Google Maps listing.
- **Local pack rankings:** Would need DataForSEO `google_local_pack_serp` or similar tool for real-time position data.
- **Backlink profile and local link signals:** Requires Ahrefs, Semrush, or Majestic.
- **Competitor analysis:** Cannot assess how TML ranks vs. competitors in Chandigarh's local pack without SERP tools.
- **Core Web Vitals per page:** Would need PageSpeed Insights API or CrUX data for city pages specifically.
- **Actual page rendering:** WebFetch captures server-rendered HTML; client-side rendered content (React hydration) may add or change visible content.
- **Google Search Console data:** Indexation status of 1,738+ city pages, crawl budget allocation, and any manual actions.

---

## Key Files Referenced

| File | Purpose |
|------|---------|
| `src/lib/schema.ts` | All schema generation functions; DEFAULT_PROVIDER with HQ address |
| `src/data/locations.ts` | 158 location definitions; only ~10 have uniqueContent |
| `src/data/cityServiceContent.ts` | Hand-written enrichment for Chandigarh, Dubai, Edmonton, Calgary |
| `src/data/cityServiceAutoContent.ts` | Programmatic content generator using deterministic hash |
| `src/components/templates/LocationServiceTemplate.tsx` | Template for all city-service pages; limits LocalBusiness schema to HQ cities |
| `src/app/services/[slug]/page.tsx` | Dynamic route handling 1,738+ service-city combinations |
| `src/utils/noindex.ts` | Noindex logic for niche services outside India |
| `src/app/sitemap.ts` | Sitemap generation including all indexed city pages |
| `src/app/page.tsx` | Homepage with ProfessionalService + AggregateRating schema |

---

*Generated by Claude Opus 4.6 for TML Agency local SEO optimization. This audit is based on publicly accessible page content, codebase analysis, and industry best practices as of April 2026.*
