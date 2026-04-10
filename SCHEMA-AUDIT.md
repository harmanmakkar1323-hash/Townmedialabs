# Schema / Structured Data Audit -- townmedialabs.com

**Date:** 2026-04-09
**Pages audited:** 6 (Homepage, /services/seo/, /seo-in-chandigarh/, /blog/, /blog/top-10-branding-agencies-chandigarh/, /about/)

---

## 1. Global Schema (Present on Every Page)

Three JSON-LD blocks are injected site-wide (likely via a layout component):

| # | @type | @id | Verdict |
|---|-------|-----|---------|
| 1 | Organization | `#organization` | PASS with warnings |
| 2 | ProfessionalService | `#localbusiness` | PASS with warnings |
| 3 | WebSite | `#website` | PASS |

### 1a. Organization -- Validation

- **@context:** `https://schema.org` -- PASS
- **@id:** `https://townmedialabs.com/#organization` -- PASS
- **name, url, logo, email, telephone, description:** All present -- PASS
- **founder:** Present (Person, Raman Makkar) -- PASS
- **foundingDate:** `"2010"` -- PASS (ISO year)
- **numberOfEmployees:** QuantitativeValue with minValue/maxValue -- PASS
- **address:** Full PostalAddress -- PASS
- **geo:** GeoCoordinates -- PASS
- **contactPoint:** Array with ContactPoint -- PASS
- **sameAs:** 5 social profiles -- PASS

**Warnings:**
- W1: `founder` lists only Raman Makkar with `jobTitle: "Owner & Founder"`, but the About page reveals Arvinder Singh as `"Owner & Visionary"`. If there are two co-founders, `founder` should be an array of both.
- W2: Twitter URL uses `twitter.com` -- consider updating to `x.com` to match current branding (not a schema error, but a consistency note).

### 1b. ProfessionalService -- Validation

- All required LocalBusiness/ProfessionalService fields present -- PASS
- **@id** is `#localbusiness` but @type is `ProfessionalService` -- acceptable (ProfessionalService extends LocalBusiness), but the id label is slightly misleading. Not an error.
- **openingHoursSpecification:** Correctly structured -- PASS
- **hasOfferCatalog:** 7 services listed -- PASS
- **areaServed:** 7 countries -- PASS

**Warnings:**
- W3: Missing `aggregateRating` in this block. The AggregateRating is in a *separate* ProfessionalService block (see 2a below). Google may not merge them since they use the same @id but are in separate `<script>` tags. **Recommendation:** Merge the AggregateRating and Review array into this single ProfessionalService block.

### 1c. WebSite -- Validation

- **SearchAction:** Correctly structured with EntryPoint -- PASS
- **publisher:** Uses @id reference to Organization -- PASS
- **inLanguage:** `en-IN` -- PASS

**No issues found.**

---

## 2. Homepage-Specific Schema

The homepage has 4 additional blocks beyond the 3 global ones:

### 2a. ProfessionalService (Duplicate) with AggregateRating + Reviews

- **@id:** `#localbusiness` (same as global ProfessionalService) -- WARNING
- **aggregateRating:** 4.9/5, 352 reviews -- PASS
- **review:** 3 individual Review objects -- PASS
- Each Review has: author (Person), reviewRating (Rating), reviewBody, datePublished, publisher (Organization) -- PASS

**Issues:**
- **C1 (Critical):** Two separate `<script type="application/ld+json">` blocks both declare `@type: ProfessionalService` with `@id: #localbusiness`. Google's Rich Results parser may only read one and ignore the other. The AggregateRating and Reviews should be merged into the main ProfessionalService block. **This may prevent Review rich results from appearing.**
- I1 (Info): Review `datePublished` values are in `YYYY-MM-DD` format -- PASS.
- I2 (Info): Only 3 reviews are included out of 352. This is fine -- Google recommends a representative sample.

### 2b. VideoObject

- **name:** "TML Agency Showreel 2025" -- PASS
- **thumbnailUrl:** Absolute URL -- PASS
- **contentUrl:** Absolute URL to .mp4 -- PASS
- **uploadDate:** `"2025-01-01"` -- PASS
- **duration:** `"PT2M30S"` -- PASS

**Issues:**
- W4: Missing `description` is present ("A showcase of...") -- PASS. Actually all required fields are present.
- W5: Missing `embedUrl` -- Recommended by Google if the video can be embedded.

### 2c. ItemList (12 Services)

- **numberOfItems:** 12 -- matches array length -- PASS
- Each ListItem has position, name, description, url -- PASS
- All URLs are absolute -- PASS

**No issues found. Eligible for Carousel rich results.**

### 2d. FAQPage (9 Questions)

- All Questions have `name` and `acceptedAnswer` with `text` -- PASS
- Properly structured -- PASS

**Important Note (I3):** FAQPage rich results are restricted to government and healthcare sites since August 2023. This is a commercial agency site, so **Google will NOT show FAQ rich results**. However, keeping FAQPage markup is still beneficial for AI/LLM citation and discoverability (GEO benefit). No action required -- just be aware it will not trigger Google rich snippets.

---

## 3. /services/seo/ -- Service Page

### Page-Specific Schema Found:

| # | @type | Verdict |
|---|-------|---------|
| 1 | Service | PASS with issues |
| 2 | BreadcrumbList | PASS |
| 3 | FAQPage | PASS (same GEO note as above) |

### 3a. Service

- **name:** "SEO" -- PASS
- **description:** Detailed -- PASS
- **url:** Absolute -- PASS
- **provider:** Organization with address -- PASS
- **category:** "SEO" -- PASS

**Issues:**
- W6: Missing `areaServed` -- The service is offered globally per the ProfessionalService block, but repeating areaServed on Service schema strengthens geo signals.
- W7: Missing `offers` or `priceRange` -- Adding at least a `priceRange` or `Offer` with `priceSpecification` would signal pricing to Google.
- W8: Missing `aggregateRating` -- The homepage has a 4.9 rating; linking or repeating it on the Service block would strengthen trust signals.
- W9: Missing `serviceType` property -- Would help classify the service more precisely.

### 3b. BreadcrumbList

- 3 levels: Home > Services > SEO -- PASS
- All items have position, name, item (absolute URL) -- PASS

**No issues.**

### 3c. FAQPage

- 4 SEO-specific questions -- PASS
- Same GEO-only note applies (I3).

---

## 4. /seo-in-chandigarh/ -- Geo/City Landing Page

### Page-Specific Schema Found: **NONE**

Only the 3 global blocks (Organization, ProfessionalService, WebSite) are present.

**Critical Missing Opportunities:**

- **C2 (Critical): No Service schema.** This is a geo-targeted service page ("SEO in Chandigarh"). It MUST have a Service block with `areaServed` set to Chandigarh specifically, plus `provider` referencing the Organization. This is the most important page type for local SEO and has zero page-specific schema.
- **C3 (Critical): No BreadcrumbList.** The /services/seo/ page has breadcrumbs but this geo page does not. Add: Home > SEO in Chandigarh.
- **M1 (Medium): No FAQPage.** If the page has FAQ content, adding FAQPage would benefit AI discoverability.

---

## 5. /blog/ -- Blog Listing Page

### Page-Specific Schema Found:

| # | @type | Verdict |
|---|-------|---------|
| 1 | Blog | PASS |
| 2 | CollectionPage | PASS |
| 3 | BreadcrumbList | PASS |

### 5a. Blog + CollectionPage

- Both are present and complementary -- PASS
- `Blog` has publisher with logo -- PASS
- `CollectionPage` references WebSite via @id -- PASS

**Issues:**
- W10: The Blog block and CollectionPage both describe the same page. This is not an error but is slightly redundant. Consider keeping only CollectionPage with `mainEntity` set to a Blog type, or just keeping Blog alone.
- W11: Blog block is missing `blogPost` array -- Adding an array of the most recent BlogPosting references would create richer signals for the listing page.

### 5b. BreadcrumbList

- Home > Blog -- PASS

---

## 6. /blog/top-10-branding-agencies-chandigarh/ -- Blog Post

### Page-Specific Schema Found:

| # | @type | Verdict |
|---|-------|---------|
| 1 | Article | PASS |
| 2 | BreadcrumbList | PASS |
| 3 | FAQPage | PASS (GEO note) |

### 6a. Article

- **headline:** Present, under 110 chars -- PASS
- **description:** Present -- PASS
- **image:** Absolute URL to .webp -- PASS
- **datePublished:** `2025-03-20` -- PASS
- **dateModified:** `2026-01-08` -- PASS
- **author:** Person with name and url -- PASS
- **publisher:** Organization with logo -- PASS
- **mainEntityOfPage:** WebPage with @id -- PASS
- **keywords:** Present -- PASS
- **articleSection:** "Branding" -- PASS
- **inLanguage:** `en-IN` -- PASS

**Issues:**
- W12: `author.url` points to `https://townmedialabs.com/authors/raman-makkar` -- verify this URL actually resolves. If it 404s, Google may flag a warning.
- W13: Consider using `BlogPosting` instead of `Article` since this is on the /blog/ section. `BlogPosting` is a subtype of `Article` and is more semantically precise. Not an error -- both are valid.
- W14: Missing `wordCount` -- Recommended for long-form content.

### 6b. BreadcrumbList

- Home > Blog > Article Title -- PASS
- All absolute URLs -- PASS

---

## 7. /about/ -- About Page

### Page-Specific Schema Found:

| # | @type | Verdict |
|---|-------|---------|
| 1 | AboutPage | PASS |
| 2 | Person[] (array of 7) | PASS with issues |

### 7a. AboutPage

- **name, description, url:** All present -- PASS
- **mainEntity:** Organization with foundingDate, address, sameAs -- PASS

**Issues:**
- W15: `mainEntity.numberOfEmployees` uses only `minValue: 70` without `maxValue`. The global Organization block uses `minValue: 70, maxValue: 100`. These should be consistent.

### 7b. Person Array (Team Members)

- 7 Person objects for team members -- PASS
- Each has name, jobTitle, worksFor -- PASS

**Issues:**
- **C4 (Critical): Contradicts homepage founder schema.** The homepage Organization block declares `founder: { name: "Raman Makkar", jobTitle: "Owner & Founder" }`. But the About page Person schema lists Arvinder Singh as `"Owner & Visionary"` and Raman Makkar as `"SEO & Growth"` (not "Owner & Founder"). Google may flag contradictory information. **Resolution:** Align jobTitles across all schema. If both are co-founders, update the Organization `founder` field to include both. Update Raman's jobTitle on the About page to match.
- W16: Person objects lack `image`, `sameAs` (LinkedIn URLs), and `description` properties. Adding these would strengthen entity signals.
- W17: Some names appear informal ("Mr Hoop", "Cristi", "Tammy") -- ensure these match actual professional profiles for entity consistency.

---

## 8. Summary of All Issues

### Critical (Affects Rich Results Eligibility)

| ID | Page | Issue | Fix |
|----|------|-------|-----|
| C1 | Homepage | Duplicate ProfessionalService blocks with same @id -- AggregateRating/Reviews may be ignored | Merge into single ProfessionalService block |
| C2 | /seo-in-chandigarh/ | No Service schema on geo landing page | Add Service + LocalBusiness schema with city-specific areaServed |
| C3 | /seo-in-chandigarh/ | No BreadcrumbList on geo page | Add BreadcrumbList |
| C4 | /about/ | Founder/jobTitle contradictions between pages | Align founder info site-wide |

### Medium Priority (Recommended Properties Missing)

| ID | Page | Issue | Fix |
|----|------|-------|-----|
| W3 | Global | AggregateRating not in main ProfessionalService block | Merge blocks |
| W6 | /services/seo/ | Service missing areaServed | Add areaServed |
| W7 | /services/seo/ | Service missing offers/priceRange | Add Offer or priceRange |
| W8 | /services/seo/ | Service missing aggregateRating | Add aggregateRating |
| W10 | /blog/ | Redundant Blog + CollectionPage | Simplify to one |
| W15 | /about/ | numberOfEmployees inconsistent | Match global value |
| W16 | /about/ | Person objects lack image/sameAs | Enrich Person schema |

### Low Priority / Informational

| ID | Page | Issue |
|----|------|-------|
| I3 | Homepage, /services/seo/, blog post | FAQPage will not trigger Google rich results (commercial site) -- but keep for AI/GEO |
| W1 | Global | founder field may need to include Arvinder Singh |
| W2 | Global | twitter.com vs x.com in sameAs |
| W5 | Homepage | VideoObject missing embedUrl |
| W9 | /services/seo/ | Service missing serviceType |
| W12 | Blog post | Verify /authors/raman-makkar URL resolves |
| W13 | Blog post | Consider BlogPosting over Article |
| W14 | Blog post | Missing wordCount |

---

## 9. Missing Schema Opportunities

### 9a. Geo/City Pages (HIGH PRIORITY -- /seo-in-chandigarh/ and all city pages)

These pages have zero page-specific schema. Recommended JSON-LD:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SEO Services in Chandigarh",
  "description": "Professional SEO services in Chandigarh by TML Agency...",
  "url": "https://townmedialabs.com/seo-in-chandigarh/",
  "provider": {
    "@type": "ProfessionalService",
    "@id": "https://townmedialabs.com/#localbusiness"
  },
  "areaServed": {
    "@type": "City",
    "name": "Chandigarh",
    "containedInPlace": {
      "@type": "Country",
      "name": "India"
    }
  },
  "serviceType": "Search Engine Optimization",
  "category": "Digital Marketing"
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://townmedialabs.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "SEO in Chandigarh",
      "item": "https://townmedialabs.com/seo-in-chandigarh/"
    }
  ]
}
```

### 9b. Homepage -- Merge ProfessionalService Blocks

Merge the AggregateRating and Reviews into the main ProfessionalService block. The single block should contain: address, geo, openingHours, areaServed, hasOfferCatalog, aggregateRating, AND review array.

### 9c. Homepage -- Missing BreadcrumbList

The homepage itself does not have a BreadcrumbList. While optional (it would just be a single item), having it establishes the root for the breadcrumb chain.

### 9d. All Service Pages -- Consistent Service Schema Template

Apply the same Service + BreadcrumbList + FAQPage pattern from /services/seo/ to ALL 12 service pages. Ensure each has:
- Service schema with unique name, description, url, areaServed, provider
- BreadcrumbList (Home > Services > [Service Name])

### 9e. About Page -- Missing BreadcrumbList

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://townmedialabs.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://townmedialabs.com/about/"
    }
  ]
}
```

### 9f. SiteNavigationElement (Nice-to-Have)

Not critical, but a `SiteNavigationElement` schema on the main nav would help search engines understand site architecture.

---

## 10. Rich Result Eligibility Summary

| Rich Result Type | Eligible? | Status |
|------------------|-----------|--------|
| Review snippet (star rating) | YES | At risk -- C1 (duplicate blocks) may prevent triggering |
| Breadcrumb trail | YES | Working on /services/seo/, /blog/, blog posts. Missing on homepage, /about/, geo pages |
| Sitelinks search box | YES | WebSite + SearchAction present on all pages |
| Article (blog posts) | YES | Properly structured on blog posts |
| Video (homepage) | YES | VideoObject present with all required fields |
| FAQ | NO | Commercial site -- Google restricted FAQ rich results to govt/healthcare (Aug 2023). Keep for AI/GEO. |
| Local Business (Maps) | YES | ProfessionalService with address, geo, hours present |
| Logo (Knowledge Panel) | YES | Organization with logo present |
| Carousel (services) | POSSIBLE | ItemList with 12 services present on homepage |

---

## 11. Priority Action Items (Ordered)

1. **Merge duplicate ProfessionalService blocks** on homepage (C1) -- immediate impact on Review rich results
2. **Add Service + BreadcrumbList schema to ALL geo/city pages** (C2, C3) -- critical for 139+ city pages
3. **Align founder/jobTitle info** across Organization and About page Person schema (C4)
4. **Add BreadcrumbList to /about/ page** (9e)
5. **Enrich Service schema** on /services/seo/ with areaServed, aggregateRating, offers (W6-W8)
6. **Replicate service page schema pattern** across all 12 service pages (9d)
7. **Add image/sameAs to Person schema** on About page (W16)
8. **Verify /authors/raman-makkar URL** resolves (W12)
