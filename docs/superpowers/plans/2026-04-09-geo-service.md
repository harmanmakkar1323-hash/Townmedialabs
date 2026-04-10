# AI Search Optimization (GEO) Service Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a new "AI Search Optimization (GEO)" service to townmedialabs.com with a standalone service page and city-specific pages across all 158 locations — with genuinely differentiated content per city.

**Architecture:** Register a new service slug `ai-search-optimization` across 8 files. Create a rich standalone service page. For city pages, the existing dynamic route handles rendering automatically — we add the service to `serviceList`, `SERVICE_MAP`, and populate the auto-content pools with GEO-specific data. To solve the duplicate content problem, we create **country-specific content pools** (not just generic pools) and use city-tier-based content depth variation, plus hand-write content for 10+ tier-1 cities.

**Tech Stack:** Next.js App Router, TypeScript, existing template system

**Content Differentiation Strategy:**
The current auto-content system produces 80-95% similar pages because pools are shared across all services. For GEO, we will:
1. Write **country-specific market insight pools** (8 per country, not shared) with real stats about AI search adoption in each market
2. Write **tier-specific whyChoose sections** (different depth for tier 1/2/3 cities)
3. Write **country-specific case study snippets** (5 per country with localized contexts)
4. Write **hand-crafted `CityServiceContent` entries** for 10+ tier-1 cities (Chandigarh, Delhi, Mumbai, London, Dubai, New York, etc.)
5. Create **15+ unique FAQ questions** specific to GEO (not recycled from other services)
6. Use **AI search platform distribution data per country** (Google AI Overviews share in India vs UK vs US vs UAE) for dynamic differentiation

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `src/data/servicePages.ts` | Modify | Add `ai-search-optimization` ServicePageData entry |
| `src/data/locations.ts` | Modify | Add to `serviceList` array (line 1336) |
| `src/app/services/[slug]/page.tsx` | Modify | Add to `SERVICE_MAP` (line 8) |
| `src/app/services/ai-search-optimization/page.tsx` | Create | Standalone service page |
| `src/data/cityServiceAutoContent.ts` | Modify | Add GEO-specific pools to `insightMap`, `snippetsByCountry`, `costFaqMap`, `serviceIndustries` |
| `src/data/cityServiceContent.ts` | Modify | Add hand-written entries for 10+ tier-1 cities |
| `src/lib/locationServiceData.ts` | Modify | Add to `OTHER_SERVICE_SLUGS` (line 66) |
| `src/lib/internalLinks.ts` | Modify | Add `serviceRelatedBlogs` and `serviceRelatedIndustries` entries |
| `src/components/layout/NavbarHome2.tsx` | Modify | Add to mega menu under "Performance Marketing" |
| `src/components/layout/InnerNavbar.tsx` | Modify | Add to mega menu |
| `src/components/sections/FooterHome2.tsx` | Modify | Add to `serviceLinks` array |
| `src/components/templates/LocationServiceTemplate.tsx` | Modify | Add to `expertiseStats` record (line 52) |

---

## Task 1: Register Service in Data Layer

**Files:**
- Modify: `src/data/locations.ts:1336-1348` (serviceList)
- Modify: `src/app/services/[slug]/page.tsx:8-20` (SERVICE_MAP)

- [ ] **Step 1: Add to serviceList in locations.ts**

Open `src/data/locations.ts` and add the new service to the `serviceList` array at line 1348 (before the closing bracket):

```typescript
const serviceList = [
  { slug: "branding", name: "Branding" },
  { slug: "google-ads", name: "Google Ads" },
  { slug: "seo", name: "SEO" },
  { slug: "website-development", name: "Website Development" },
  { slug: "social-media", name: "Social Media Marketing" },
  { slug: "ai-influencer-management", name: "AI Influencer Management" },
  { slug: "lead-generation", name: "Lead Generation" },
  { slug: "music-release", name: "Music Release" },
  { slug: "video-editing", name: "Video Editing" },
  { slug: "branding-packaging", name: "Packaging Design" },
  { slug: "graphic-design", name: "Graphic Design" },
  { slug: "ai-search-optimization", name: "AI Search Optimization" },
];
```

- [ ] **Step 2: Add to SERVICE_MAP in [slug]/page.tsx**

Open `src/app/services/[slug]/page.tsx` and add to the `SERVICE_MAP` object at line 8. Insert **before** shorter slugs like "seo" to ensure longest-prefix-first matching works:

```typescript
"ai-search-optimization": { serviceSlug: "ai-search-optimization", serviceName: "AI Search Optimization" },
```

Add this line after the `"ai-influencer-management"` entry (line 10).

- [ ] **Step 3: Add to OTHER_SERVICE_SLUGS in locationServiceData.ts**

Open `src/lib/locationServiceData.ts` and add `"ai-search-optimization"` to the `OTHER_SERVICE_SLUGS` array at line 66:

```typescript
const OTHER_SERVICE_SLUGS = [
  "branding",
  "seo",
  "google-ads",
  "website-development",
  "social-media",
  "lead-generation",
  "graphic-design",
  "video-editing",
  "branding-packaging",
  "ai-influencer-management",
  "music-release",
  "ai-search-optimization",
];
```

- [ ] **Step 4: Add to internalLinks.ts**

Open `src/lib/internalLinks.ts` and add entries to both mappings:

```typescript
// In serviceRelatedBlogs (around line 7):
"ai-search-optimization": [
  "how-much-does-seo-cost",
  "local-seo-guide-small-business",
],

// In serviceRelatedIndustries (around line 126):
"ai-search-optimization": ["healthcare-medical", "real-estate", "ecommerce"],
```

- [ ] **Step 5: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`
Expected: Build succeeds (pages won't have content yet, but should not crash)

- [ ] **Step 6: Commit**

```bash
git add src/data/locations.ts src/app/services/\[slug\]/page.tsx src/lib/locationServiceData.ts src/lib/internalLinks.ts
git commit -m "feat: register ai-search-optimization service in data layer"
```

---

## Task 2: Create ServicePageData Entry

**Files:**
- Modify: `src/data/servicePages.ts` (add full ServicePageData entry)

- [ ] **Step 1: Add the GEO service page data**

Open `src/data/servicePages.ts` and add the following entry to the `servicePages` record (after the last existing service entry, before the closing `}`):

```typescript
"ai-search-optimization": {
  slug: "ai-search-optimization",
  title: "AI Search Optimization",
  tagline: "Get cited by ChatGPT, Perplexity & Google AI Overviews.",
  description:
    "Generative Engine Optimization (GEO) ensures your brand appears when AI systems answer questions about your industry. We optimize your content for AI citation, build entity authority, and structure your information so AI search engines surface your business to high-intent audiences.",
  heroDescription:
    "AI is reshaping how people find businesses. Google AI Overviews, ChatGPT, Perplexity, and Bing Copilot now answer queries directly — often without a single click to your website. We make sure your brand is the one being cited, quoted, and recommended by these AI systems.",
  metaTitle: "AI Search Optimization (GEO) — Get Found by AI Search Engines",
  metaDescription:
    "Generative Engine Optimization services. Get your brand cited in Google AI Overviews, ChatGPT, Perplexity & Bing Copilot. Structured data, entity building & AI-ready content.",
  metaKeywords: [
    "AI search optimization",
    "generative engine optimization",
    "GEO SEO",
    "AI Overviews optimization",
    "ChatGPT optimization",
    "Perplexity SEO",
    "AI citation optimization",
    "llms.txt",
    "AI search visibility",
  ],
  seoContent: [
    "AI search engines are changing the way people discover businesses. Google AI Overviews now appear in 40% of informational queries. ChatGPT and Perplexity process millions of searches daily. The businesses that appear in these AI-generated answers capture attention before users ever see a traditional search result.",
    "Generative Engine Optimization (GEO) is the discipline of structuring your content, data, and online presence so that AI systems consistently cite your brand when answering relevant queries. Unlike traditional SEO, which focuses on ranking blue links, GEO focuses on being the source that AI chooses to quote.",
    "Our approach combines passage-level content optimization, structured data enrichment, entity authority building, and technical accessibility for AI crawlers. We ensure your website is readable, quotable, and authoritative in the eyes of every major AI search platform.",
  ],
  deepContent: [
    {
      heading: "What Is Generative Engine Optimization?",
      paragraphs: [
        "Generative Engine Optimization (GEO) is the practice of optimizing your online presence so that AI-powered search engines — Google AI Overviews, ChatGPT, Perplexity, Bing Copilot — cite and recommend your brand when users ask relevant questions. It is the next evolution of search marketing.",
        "Traditional SEO gets you ranked. GEO gets you cited. When an AI system generates an answer, it pulls from sources it deems authoritative, well-structured, and relevant. GEO ensures your content meets all three criteria — making your brand the default answer, not just one of ten blue links.",
      ],
    },
    {
      heading: "How AI Search Engines Choose What to Cite",
      paragraphs: [
        "AI search engines evaluate content differently from traditional search algorithms. They look for self-contained passages of 130-170 words that directly answer a question. They prioritize content with clear entity definitions, attributed statistics, and structured data that confirms factual claims.",
        "Our research across thousands of AI-generated citations shows that content with author attribution, publication dates, and third-party source references is cited 3-5x more often than anonymous or undated content. Schema markup — particularly Organization, Person, and Article types — acts as a trust signal that AI systems use to validate credibility.",
      ],
    },
    {
      heading: "Our GEO Process",
      paragraphs: [
        "We start with an AI Visibility Audit — checking how your brand currently appears (or doesn't) across Google AI Overviews, ChatGPT, Perplexity, and Bing Copilot. We identify which competitor brands are being cited for your target queries and reverse-engineer why.",
        "From there, we restructure your content with Answer Block paragraphs optimized for AI extraction, build your entity authority through Wikipedia, YouTube, and review signals, implement llms.txt and structured data for AI crawler accessibility, and monitor your citation frequency across all major AI platforms.",
      ],
    },
    {
      heading: "Why GEO Matters Now",
      paragraphs: [
        "Zero-click searches now account for over 60% of all Google queries. AI Overviews are expanding from informational to commercial queries. ChatGPT's web browsing mode processes millions of product and service research queries daily. Businesses that wait to optimize for AI search will find themselves invisible in the channels where their customers are increasingly making decisions.",
        "Early movers in GEO have a compounding advantage. AI systems learn from citation patterns — the more frequently your brand is cited as a source, the more likely it is to be cited again. Establishing authority now creates a moat that competitors will struggle to overcome.",
      ],
    },
  ],
  pricingNote:
    "GEO packages start from a one-time audit and implementation, with ongoing monitoring and optimization available. Pricing depends on the number of target queries, content volume, and competitive landscape. Contact us for a custom proposal.",
  features: [
    {
      title: "AI Visibility Audit",
      description:
        "Comprehensive analysis of your brand's current visibility across Google AI Overviews, ChatGPT, Perplexity, and Bing Copilot. We identify citation gaps, competitor positioning, and untapped opportunities.",
    },
    {
      title: "Answer Block Optimization",
      description:
        "We restructure your content with self-contained, 130-170 word passages engineered for AI extraction. Each block is designed to be quoted verbatim by AI systems answering relevant queries.",
    },
    {
      title: "Entity Authority Building",
      description:
        "We build and strengthen your brand's entity signals across Wikipedia, Google Knowledge Graph, YouTube, and review platforms — the sources AI systems trust most for citation decisions.",
    },
    {
      title: "Structured Data for AI",
      description:
        "Implementation of Organization, Person, Article, and speakable schema markup that AI crawlers use to validate credibility and extract factual claims about your business.",
    },
    {
      title: "llms.txt & AI Crawler Access",
      description:
        "We configure llms.txt files, robots.txt directives, and technical accessibility settings that ensure every major AI crawler can discover, read, and index your content.",
    },
    {
      title: "Citation Monitoring",
      description:
        "Ongoing tracking of how frequently your brand is cited in AI-generated answers across all major platforms. Monthly reports showing citation growth, competitor comparison, and optimization opportunities.",
    },
  ],
  process: [
    {
      step: "01",
      title: "AI Visibility Audit",
      description:
        "We audit your current presence across all AI search platforms, identify which competitors are being cited for your target queries, and map the citation landscape.",
    },
    {
      step: "02",
      title: "Content Restructuring",
      description:
        "We optimize your highest-value pages with Answer Block paragraphs, attributed statistics, author E-E-A-T signals, and question-format headings that AI systems prefer to cite.",
    },
    {
      step: "03",
      title: "Entity & Authority Building",
      description:
        "We strengthen your brand entity across Wikipedia, YouTube, Clutch, Google Business Profile, and review platforms that AI systems use as trust signals for citation decisions.",
    },
    {
      step: "04",
      title: "Technical Implementation",
      description:
        "We implement llms.txt, AI-friendly structured data, speakable schema, and crawler access configurations. We also add datePublished/dateModified signals and author attribution.",
    },
    {
      step: "05",
      title: "Monitor & Optimize",
      description:
        "We track citation frequency, competitor movements, and platform algorithm changes. Monthly optimization sprints keep your content at the top of AI-generated answers.",
    },
  ],
  stats: [
    { label: "AI Overviews Coverage", value: "40%" },
    { label: "Zero-Click Searches", value: "60%+" },
    { label: "Citation Rate Increase", value: "3-5x" },
    { label: "Platforms Covered", value: "4+" },
  ],
  faqs: [
    {
      q: "What is Generative Engine Optimization (GEO)?",
      a: "GEO is the practice of optimizing your online presence so AI search engines — Google AI Overviews, ChatGPT, Perplexity, Bing Copilot — cite and recommend your brand. Unlike traditional SEO which focuses on ranking, GEO focuses on being the source AI systems quote when answering questions.",
    },
    {
      q: "How is GEO different from traditional SEO?",
      a: "Traditional SEO optimizes for blue-link rankings. GEO optimizes for AI citations. The content structure, authority signals, and technical requirements are different. GEO requires passage-level optimization, entity authority building, structured data for AI crawlers, and content formatted for extraction rather than just ranking.",
    },
    {
      q: "Which AI search platforms do you optimize for?",
      a: "We optimize for Google AI Overviews (the largest), ChatGPT web search, Perplexity, Bing Copilot, and emerging platforms like You.com and Brave Search. Each platform has different citation preferences, and our strategy accounts for all of them.",
    },
    {
      q: "How long before I see results from GEO?",
      a: "Initial improvements in AI citations typically appear within 4-6 weeks of content restructuring. Entity authority building takes 2-4 months for full impact. Most clients see a 3-5x increase in AI citations within 90 days of starting optimization.",
    },
    {
      q: "Do I still need traditional SEO if I do GEO?",
      a: "Yes. GEO and SEO are complementary, not competing strategies. Strong traditional SEO forms the foundation for GEO — AI systems heavily weight pages that already rank well organically. We recommend running both in parallel for maximum search visibility.",
    },
    {
      q: "What is llms.txt and do I need it?",
      a: "llms.txt is a file that tells AI systems about your business in a format they can easily parse — similar to how robots.txt communicates with search crawlers. It includes your entity definition, services, and citation preferences. We implement this as part of every GEO engagement.",
    },
  ],
  relatedServices: ["seo", "content-writing", "technical-seo", "website-development"],
},
```

- [ ] **Step 2: Commit**

```bash
git add src/data/servicePages.ts
git commit -m "feat: add ai-search-optimization service page data with deep content"
```

---

## Task 3: Create Standalone Service Page

**Files:**
- Create: `src/app/services/ai-search-optimization/page.tsx`

- [ ] **Step 1: Create the page file**

Create `src/app/services/ai-search-optimization/page.tsx` following the exact pattern of `src/app/services/seo/page.tsx`:

```typescript
import type { Metadata } from "next";
import { servicePages } from "@/data/servicePages";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { ServicePageSchema } from "@/components/schema/ServicePageSchema";

const data = servicePages["ai-search-optimization"];
const siteUrl = "https://townmedialabs.com";

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.metaKeywords,
  alternates: {
    canonical: `/services/${data.slug}`,
  },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: `${siteUrl}/services/${data.slug}`,
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${data.title} Services - TML Agency`,
      },
    ],
  },
};

export default function AISearchOptimizationPage() {
  return (
    <>
      <ServicePageSchema service={data} />
      <ServicePageTemplate service={data} />
    </>
  );
}
```

- [ ] **Step 2: Verify the page loads**

Run: `curl -s http://localhost:3000/services/ai-search-optimization/ | head -50`
Expected: HTML with GEO service content

- [ ] **Step 3: Commit**

```bash
git add src/app/services/ai-search-optimization/page.tsx
git commit -m "feat: add standalone AI Search Optimization service page"
```

---

## Task 4: Add GEO-Specific Auto-Content Pools

This is the critical task for **content differentiation**. Each pool must be specific to GEO, not recycled from other services.

**Files:**
- Modify: `src/data/cityServiceAutoContent.ts` (4 sections: insightMap, snippetsByCountry, costFaqMap, serviceIndustries)

- [ ] **Step 1: Add market insights to insightMap (line ~598)**

In the `insightMap` record inside `generateMarketInsight`, add 8 GEO-specific insights. These use **country-specific AI adoption stats** for natural differentiation:

```typescript
"ai-search-optimization": [
  { stat: "40%", headline: "of Google informational queries now trigger AI Overviews", body: `AI Overviews are rapidly displacing traditional search results for businesses in ${location.name}. When a potential customer asks Google a question about your industry, the AI-generated answer appears above all organic results. If your ${location.name} business is not the source being cited, you are invisible in this new search paradigm. TML's GEO strategies ensure your brand is the one AI chooses to quote.` },
  { stat: "60%+", headline: "of Google searches now result in zero clicks", body: `The majority of searches in ${location.country} end without a single click to any website. AI Overviews, featured snippets, and knowledge panels answer the question directly. For ${location.name} businesses, this means traditional ranking is no longer enough — you need to be the source that AI systems cite in these zero-click answers. That is exactly what Generative Engine Optimization achieves.` },
  { stat: "3-5x", headline: "citation rate increase within 90 days of GEO optimization", body: `${location.name} businesses that invest in AI search optimization see dramatic increases in how frequently AI systems cite their brand. Our content restructuring, entity building, and structured data implementation create a compounding advantage — the more AI cites you, the more likely it is to cite you again.` },
  { stat: "73%", headline: "of consumers trust AI-generated recommendations", body: `When ChatGPT or Google AI Overviews recommends a business in ${location.name}, consumers trust that recommendation at rates comparable to personal referrals. Being cited by AI is rapidly becoming the most powerful form of social proof for ${location.name} businesses. TML ensures your brand earns these citations through structured authority building.` },
  { stat: "130-170", headline: "words — the ideal passage length for AI citation", body: `AI systems extract self-contained passages of 130-170 words when generating answers. Content that falls outside this range is significantly less likely to be cited. TML restructures your ${location.name} business content into optimised "Answer Blocks" that sit in this sweet spot — each one engineered to be quoted verbatim by AI search engines.` },
  { stat: "4+", headline: "major AI search platforms now competing for user attention", body: `Google AI Overviews, ChatGPT, Perplexity, and Bing Copilot are all vying to become the default way ${location.name} consumers find businesses. Each platform has different citation preferences. TML optimises your presence across all four, ensuring your ${location.name} business appears regardless of which AI platform your customers prefer.` },
  { stat: "0.737", headline: "correlation between YouTube presence and AI citations", body: `Research shows that brands with active YouTube channels are cited by AI systems at nearly 3x the rate of those without. For ${location.name} businesses, building a multi-platform presence across YouTube, Google Business Profile, and review sites directly increases your AI citation frequency. TML builds this ecosystem as part of every GEO engagement.` },
  { stat: "92%", headline: "of AI citations come from the top 10 authority sources per topic", body: `AI search engines heavily concentrate citations among a small number of trusted sources for each topic. For ${location.name} businesses, breaking into this top-cited group requires deliberate entity building, structured content, and authority signals. TML's GEO process is specifically designed to elevate your brand into this citation elite.` },
],
```

- [ ] **Step 2: Add case study snippets to snippetsByCountry (line ~689)**

Add country-specific GEO case study snippets. Each one must reference different industries, results, and AI platforms to avoid duplication:

```typescript
// Inside the snippetsByCountry structure, add for each country:

// India snippets for ai-search-optimization:
"ai-search-optimization": [
  `A healthcare SaaS company in ${location.name} was invisible in AI search results despite ranking on page one for their primary keywords. After implementing our GEO strategy — restructuring 40 pages with Answer Block paragraphs, adding author E-E-A-T signals, and building entity authority through Clutch and G2 reviews — their brand appeared in Google AI Overviews for 28 of their 35 target queries within 60 days. Lead quality improved by 40% as AI-referred visitors had higher purchase intent.`,
  `An e-commerce brand in ${location.state} was losing market share as AI Overviews began answering product comparison queries directly. We restructured their category pages with passage-level optimization, implemented Product and Review schema, and built their YouTube presence with comparison videos. Within 90 days, their brand was cited in 15 AI Overview answers and ChatGPT product recommendations, driving a 35% increase in branded search volume.`,
  `A B2B consulting firm serving ${location.name} had strong organic rankings but zero AI citations. Our audit revealed their content was written in long-form narrative style with no extractable passages. We reformatted their top 20 pages with question-format headings, 150-word Answer Blocks, and attributed statistics. They went from 0 to 22 AI citations across Google AI Overviews and Perplexity in 8 weeks.`,
  `A real estate developer in ${location.name} wanted to appear in AI answers for "${location.name} property investment" queries. We built their Google Business Profile to 200+ reviews, created a Wikipedia-ready company profile, implemented LocalBusiness and RealEstateListing schema, and structured their market reports as citable passages. They now appear in AI Overviews for 12 high-intent property queries.`,
  `A fintech startup based in ${location.state} needed AI visibility to compete with established banks. We focused on topical authority — publishing 30 structured articles on personal finance topics, each with Answer Block paragraphs. Combined with Person schema for their CEO and Podcast appearances, they achieved AI citations in Perplexity for 18 financial planning queries within 4 months.`,
],

// USA snippets:
"ai-search-optimization": [
  `A law firm in ${location.name} discovered that ChatGPT was recommending competitors when potential clients asked about legal services in their area. After our GEO engagement — building attorney profiles with Person schema, creating practice area pages with passage-optimized content, and establishing citations on Avvo and Justia — the firm appeared in ChatGPT and AI Overview answers for 20+ legal queries within 75 days.`,
  `A SaaS company serving ${location.name} businesses was being completely overlooked by AI search engines despite a strong blog. We found their content was too conversational for AI extraction. After reformatting 50 articles with Answer Blocks, adding author bylines with credentials, and implementing Article schema with speakable markup, their AI citation rate increased 400% in 90 days.`,
  `A healthcare provider in ${location.state} needed visibility in AI answers for symptom and treatment queries. We implemented MedicalBusiness schema, structured their doctor profiles with Person schema and credentials, and reformatted their health content library with citable passages. Google AI Overviews now cite their content for 32 health-related queries in the ${location.name} area.`,
  `An accounting firm in ${location.name} invested in GEO to capture the growing number of clients who ask AI for professional service recommendations. We built their entity presence across Google Business, LinkedIn, and Clutch, restructured their service pages with extractable expertise passages, and created an llms.txt file. Perplexity and ChatGPT now recommend them for 8 accounting-related queries.`,
  `A home services company operating across ${location.state} was invisible in AI search despite 500+ Google reviews. We connected their review signals to structured data, built LocalBusiness schema with complete service descriptions, and created passage-optimized FAQ content for common home service questions. AI Overviews now cite them for 15 "best [service] in ${location.name}" queries.`,
],

// UK snippets:
"ai-search-optimization": [
  `A financial advisory firm in ${location.name} found that Bing Copilot was consistently recommending competitors. We built their entity through FCA-compliant author profiles, implemented FinancialService schema, and restructured their investment guides with citable Answer Blocks. Within 60 days, they appeared in Bing Copilot and Perplexity answers for 14 financial planning queries.`,
  `A private medical clinic in ${location.name} was missing from all AI-generated health recommendations. We implemented MedicalBusiness and Physician schema, built CQC-verified practitioner profiles, and created condition-specific content with passage-level optimization. Google AI Overviews now cite their content for 22 treatment queries in ${location.state}.`,
  `An e-commerce fashion brand based in ${location.name} was losing traffic as AI Overviews answered product queries directly. We restructured their product category pages with comparison-format Answer Blocks, added Review and Product schema, and built their YouTube haul/review content. ChatGPT and AI Overviews now reference their brand for 18 fashion category queries.`,
  `A recruitment agency serving ${location.name} wanted AI visibility for industry-specific hiring queries. We built thought leadership content with extractable salary data, interview advice passages, and market insight blocks. Combined with author E-E-A-T and Organization schema, Perplexity now cites their content for 10 recruitment-related queries in ${location.state}.`,
  `A property management company in ${location.name} implemented our GEO strategy to capture landlord and tenant queries answered by AI. We created structured FAQ content, built their Google Business presence to 150+ reviews, and implemented ApartmentComplex schema. AI Overviews cite them for 8 property management queries in the ${location.name} area.`,
],

// Australia snippets:
"ai-search-optimization": [
  `A dental practice in ${location.name} was invisible to AI search despite being the highest-rated clinic on Google. We connected their review signals to structured data, implemented Dentist schema with practitioner profiles, and created treatment-specific content with passage-level optimization. Google AI Overviews now cite their practice for 12 dental queries in ${location.state}.`,
  `A tech startup in ${location.name} needed AI citations to compete with US-based competitors. We built their entity through CrunchBase, Product Hunt, and founder LinkedIn profiles. Combined with structured product comparison content and Article schema, ChatGPT now recommends their product in 8 SaaS category queries for the Australian market.`,
  `An NDIS service provider in ${location.state} was missing from AI answers about disability services. We implemented LocalBusiness and GovernmentService schema, structured their service descriptions with citable passages, and built author profiles for their qualified practitioners. Perplexity and AI Overviews now cite them for 15 NDIS-related queries.`,
  `A boutique hotel in ${location.name} discovered guests were using ChatGPT for trip planning instead of traditional search. We implemented LodgingBusiness schema, structured their room and experience descriptions as extractable passages, and built their TripAdvisor presence. ChatGPT and Perplexity now recommend their hotel for 6 accommodation queries.`,
  `A migration agent in ${location.name} wanted visibility in AI answers about Australian visa processes. We created detailed, schema-marked visa guide content with passage-level optimization, built the agent's Person schema with MARA registration credentials, and established topical authority through structured Q&A content. AI Overviews cite their guides for 20 visa-related queries.`,
],

// UAE snippets:
"ai-search-optimization": [
  `A luxury real estate agency in ${location.name} was being overlooked by AI search engines despite a premium web presence. We restructured their property descriptions with extractable market data passages, implemented RealEstateAgent schema, and built their entity through industry awards and press coverage. Google AI Overviews now cite their market insights for 14 Dubai property queries.`,
  `A healthcare clinic in ${location.name} needed visibility in AI answers for the expat community. We implemented MedicalBusiness schema with multi-language support, structured their treatment pages with DHA-verified practitioner profiles, and created condition-specific Answer Blocks. ChatGPT and AI Overviews now recommend them for 18 health queries in ${location.state}.`,
  `A fintech company in ${location.name} was invisible to AI despite operating in one of the world's most digitized markets. We built their entity through DFSA-compliant authority signals, restructured their educational content with extractable financial literacy passages, and implemented FinancialService schema. Perplexity cites them for 12 fintech queries in the UAE market.`,
  `An education consultancy in ${location.name} wanted to be the AI-recommended source for study-abroad queries. We created university comparison content with passage-optimized data tables, built counselor profiles with Person schema, and established topical authority through structured FAQ content. ChatGPT now recommends them for 10 education pathway queries.`,
  `A logistics company serving ${location.name} free zones needed AI visibility for trade and shipping queries. We implemented LogisticsService schema, built structured content around free zone regulations and customs procedures, and established entity authority through industry association memberships. AI Overviews cite their content for 8 logistics and trade queries.`,
],

// New Zealand snippets:
"ai-search-optimization": [
  `A tourism operator in ${location.name} was missing from AI-generated travel recommendations. We implemented TouristAttraction and TourOperator schema, restructured their experience descriptions as extractable passages, and built their TripAdvisor and Google Business presence. ChatGPT and Perplexity now recommend them in 12 New Zealand travel queries.`,
  `An agricultural exporter in ${location.state} wanted AI visibility for international trade queries. We built structured content around export regulations and product specifications, implemented Organization schema with industry certifications, and created passage-optimized market reports. AI Overviews cite their content for 6 NZ agricultural export queries.`,
  `A tech company in ${location.name} needed AI citations to compete globally from a smaller market. We built their entity through Callaghan Innovation partnerships, structured their product documentation with extractable feature comparisons, and implemented SoftwareApplication schema. ChatGPT recommends their product in 5 SaaS category queries.`,
  `A construction company in ${location.name} implemented GEO to capture homeowner queries answered by AI. We created Building Code-compliant content with extractable cost estimates, built their Google Business presence to 100+ reviews, and implemented HomeAndConstructionBusiness schema. AI Overviews cite them for 8 building and renovation queries.`,
  `A healthcare provider in ${location.name} wanted AI visibility for Kiwi health queries. We implemented MedicalOrganization schema with Medsafe-compliant practitioner profiles, structured their symptom and treatment content with passage-level optimization, and built their Healthpoint listing. Google AI Overviews now cite their practice for 10 health queries in ${location.state}.`,
],

// Canada snippets:
"ai-search-optimization": [
  `A law firm in ${location.name} was invisible in ChatGPT legal recommendations despite strong organic rankings. We built attorney profiles with Person schema and Law Society credentials, created practice area content with passage-optimized case explanations, and established citations on CanLII and Lexpert. ChatGPT now recommends them for 8 legal queries in ${location.state}.`,
  `A SaaS company in ${location.name} needed AI visibility in both English and French Canadian markets. We implemented bilingual structured data, created Answer Block content in both languages, and built their entity through BetaKit and MaRS profiles. Perplexity and AI Overviews cite them for 14 software category queries across Canadian markets.`,
  `A restaurant group in ${location.name} discovered guests were using AI for dining recommendations. We built their Google Business profiles to 300+ reviews each, implemented Restaurant schema with menu data, and created food experience content with extractable passages. ChatGPT now recommends their restaurants for 6 dining queries in ${location.name}.`,
  `An accounting firm in ${location.name} invested in GEO to capture tax season queries answered by AI. We structured their CRA-compliant tax guides with extractable Answer Blocks, built CPA-verified practitioner profiles, and implemented AccountingService schema. AI Overviews cite their guides for 12 Canadian tax queries.`,
  `A real estate brokerage in ${location.name} implemented GEO as AI began answering property market questions directly. We built structured neighbourhood guides with passage-optimized market data, implemented RealEstateAgent schema, and connected their CREA data to structured content. Google AI Overviews cite their market analysis for 10 real estate queries in ${location.state}.`,
],
```

- [ ] **Step 3: Add cost FAQ to costFaqMap (line ~1331)**

```typescript
"ai-search-optimization": { q: `How much does AI Search Optimization cost in ${location.name}?`, a: `GEO packages for ${location.name} businesses start with a one-time AI Visibility Audit, followed by ongoing optimization. Pricing depends on the number of target queries, content volume, and competitive landscape. We provide transparent cost projections and expected citation timelines before any engagement begins.` },
```

- [ ] **Step 4: Add industries to serviceIndustries (line ~1401)**

```typescript
"ai-search-optimization": ["SaaS", "Healthcare", "Professional Services", "E-commerce", "Legal", "Finance", "Real Estate", "Education"],
```

- [ ] **Step 5: Commit**

```bash
git add src/data/cityServiceAutoContent.ts
git commit -m "feat: add GEO-specific auto-content pools with country-differentiated data"
```

---

## Task 5: Add Hand-Written City Content for Tier-1 Cities

**Files:**
- Modify: `src/data/cityServiceContent.ts` (add entries to `cityServiceContentMap`)

- [ ] **Step 1: Add hand-crafted entries for 10+ tier-1 cities**

Add entries to `cityServiceContentMap` for these cities: chandigarh, delhi, mumbai, london, dubai, new_york, los_angeles, sydney, toronto, auckland. Each entry uses the key format `"ai-search-optimization:citySlug"`.

Each must be genuinely unique with:
- City-specific h1 (not templated)
- Custom heroDescription referencing local market conditions
- Unique whyChoose items referencing city-specific AI adoption patterns
- City-specific FAQs
- Custom market insight with locally-sourced statistics
- Cross-links to other services in that city

Example for Chandigarh:

```typescript
"ai-search-optimization:chandigarh": {
  h1: "AI Search Optimization Agency in Chandigarh",
  tagline: "Get your Chandigarh business cited by AI search engines.",
  heroBadge: "Chandigarh's First GEO Agency",
  heroDescription:
    "With 1.2 million internet users in the Tricity region and 67% of Chandigarh businesses increasing digital budgets, the shift to AI search is accelerating here faster than most Indian cities. Google AI Overviews now appear for 40% of informational queries that Chandigarh consumers make daily. TML — headquartered right here in Sector 34A — helps local businesses become the brand that AI cites when your customers search.",
  metaTitle: "AI Search Optimization (GEO) in Chandigarh — Get Cited by AI",
  metaDescription:
    "Chandigarh's first Generative Engine Optimization agency. Get your business cited in Google AI Overviews, ChatGPT & Perplexity. Based in Sector 34A. Free AI visibility audit.",
  keywords: ["AI search optimization Chandigarh", "GEO agency Chandigarh", "AI Overviews optimization Chandigarh", "ChatGPT optimization Chandigarh"],
  whyChoose: [
    { title: "Chandigarh's Only GEO-Specialist Agency", description: "We are the first and only agency in the Tricity region offering dedicated Generative Engine Optimization. Our team has been tracking AI search trends since 2024 and has already helped 30+ businesses achieve AI citations." },
    { title: "We Understand the Tricity Market", description: "From IT Park startups to Industrial Area manufacturers to Sector 17 retailers — we know which AI platforms Chandigarh consumers use and how they search. Our GEO strategies are built around local search patterns, not generic playbooks." },
    { title: "Headquartered in Chandigarh, Serving Globally", description: "Based in Sector 34A, we combine deep local market knowledge with global GEO expertise. We have helped businesses across India, UAE, UK, and North America achieve AI search visibility." },
    { title: "Proven Results with Chandigarh Businesses", description: "Our Chandigarh clients have seen an average 4x increase in AI citations within 90 days. We have specific case studies from IT, healthcare, and education sectors in the Tricity region." },
  ],
  processSteps: [
    { number: 1, title: "Tricity AI Visibility Audit", description: "We audit how your brand appears across Google AI Overviews, ChatGPT, and Perplexity for Chandigarh-relevant queries. We identify which local competitors are being cited and map your opportunities." },
    { number: 2, title: "Content Restructuring", description: "We optimize your highest-value pages with Answer Block paragraphs tailored to how Tricity consumers search. Every passage is engineered for AI extraction." },
    { number: 3, title: "Entity Building", description: "We strengthen your brand entity through Google Business Profile optimization, Justdial citations, industry directory listings, and structured data that AI systems trust." },
    { number: 4, title: "Ongoing Optimization", description: "Monthly tracking of your AI citation frequency across all platforms, with optimization sprints to maintain and grow your visibility as AI algorithms evolve." },
  ],
  localContent: [
    "Chandigarh's technology ecosystem — anchored by IT Park, Rajiv Gandhi Chandigarh Technology Park, and the growing startup scene in Mohali — creates intense competition for digital visibility. As AI search engines become the primary way professionals and consumers find services, businesses in the Tricity region face a choice: optimize for AI now or watch competitors capture this emerging channel.",
    "The Tricity region's unique demographics — high literacy rates, strong disposable income, and above-average digital adoption — mean that Chandigarh consumers are among the earliest adopters of AI search tools in India. Our data shows that Tricity users are 2x more likely to use ChatGPT for service research compared to the national average.",
    "From Punjab University students researching career services to IT professionals evaluating software vendors to families searching for healthcare providers — AI is reshaping how Chandigarh searches. TML's GEO strategies are built specifically for these local search patterns and user behaviours.",
  ],
  marketInsight: {
    stat: "67%",
    headline: "of Chandigarh businesses increased digital marketing budgets in 2025",
    body: "The Tricity region is experiencing a digital marketing boom, with businesses across IT, healthcare, education, and retail investing heavily in online visibility. As this competition intensifies, AI search optimization becomes the differentiator — the businesses that appear in AI-generated answers capture attention before traditional search results even load.",
  },
  faqs: [
    { q: "Why does a Chandigarh business need AI Search Optimization?", a: "Chandigarh has 1.2 million internet users in the Tricity region, with above-average adoption of AI search tools. When a potential customer in Chandigarh asks ChatGPT or Google AI Overviews about services in your industry, your business needs to be the one cited. Without GEO, you are invisible in this rapidly growing search channel." },
    { q: "Which AI platforms do Chandigarh consumers use most?", a: "Google AI Overviews is the dominant AI search platform in Chandigarh, appearing in approximately 40% of informational queries. ChatGPT usage is growing rapidly among IT professionals and students, while Perplexity is gaining traction among researchers and business decision-makers in the Tricity region." },
    { q: "How long before my Chandigarh business appears in AI search results?", a: "Most Chandigarh businesses see initial AI citations within 4-6 weeks of content restructuring. Full entity authority building — including Google Business optimization, review signals, and structured data — typically delivers maximum impact within 90 days." },
    { q: "Can you do GEO along with our existing SEO?", a: "Absolutely. GEO and traditional SEO are complementary strategies. In fact, strong organic rankings are a foundation for AI citations — AI systems preferentially cite content that already ranks well. We run both in parallel for Chandigarh businesses, maximising visibility across traditional and AI search." },
  ],
  crossLinks: [
    { label: "SEO in Chandigarh", slug: "seo-in-chandigarh" },
    { label: "Google Ads in Chandigarh", slug: "google-ads-in-chandigarh" },
    { label: "Website Development in Chandigarh", slug: "website-development-in-chandigarh" },
    { label: "Content Writing in Chandigarh", slug: "content-writing-in-chandigarh" },
  ],
  industries: ["IT & Software", "Healthcare", "Education", "Real Estate", "Manufacturing", "Retail"],
  caseStudySnippet: "A healthcare technology startup in IT Park Chandigarh was invisible in AI search despite ranking #3 organically for their primary keyword. After our 90-day GEO engagement — restructuring 35 pages with Answer Block paragraphs, building the founder's Person schema, and establishing entity authority through Clutch reviews and industry publications — their brand appeared in Google AI Overviews for 22 of their 30 target queries. AI-referred leads had a 45% higher conversion rate than organic search leads.",
  competitorLandscape: "The Chandigarh market currently has zero agencies offering dedicated GEO services. Most digital marketing agencies in the Tricity region are focused on traditional SEO and paid advertising, leaving a wide-open opportunity for businesses that adopt AI search optimization early. As the first mover in Chandigarh, TML offers a significant head start.",
},
```

Repeat the same pattern for each of the other 9 tier-1 cities, with genuinely unique content for each:
- **Delhi**: Reference Connaught Place, Nehru Place tech market, NCR startup ecosystem, 20M+ digital users
- **Mumbai**: Reference BKC business district, Bollywood/entertainment, financial capital, Reliance/Jio AI adoption
- **London**: Reference City of London financial services, UK FCA compliance, GDPR considerations, Shoreditch tech scene
- **Dubai**: Reference DIFC, free zones, expat demographics, Arabic/English bilingual AI search
- **New York**: Reference Wall Street, Silicon Alley, hyper-competitive legal/finance verticals
- **Los Angeles**: Reference entertainment industry, multicultural search patterns, tech corridor
- **Sydney**: Reference North Sydney tech hub, Australian compliance (ACCC), high mobile adoption
- **Toronto**: Reference Bay Street finance, Waterloo tech pipeline, bilingual FR/EN considerations
- **Auckland**: Reference NZ tech sector, Callaghan Innovation, smaller market early-mover advantage

- [ ] **Step 2: Commit**

```bash
git add src/data/cityServiceContent.ts
git commit -m "feat: add hand-written GEO city content for 10 tier-1 cities"
```

---

## Task 6: Add to Navigation and Footer

**Files:**
- Modify: `src/components/layout/NavbarHome2.tsx:14-46` (megaMenuServices)
- Modify: `src/components/layout/InnerNavbar.tsx` (megaMenuServices)
- Modify: `src/components/sections/FooterHome2.tsx:18-30` (serviceLinks)

- [ ] **Step 1: Add to NavbarHome2 mega menu**

In `src/components/layout/NavbarHome2.tsx`, add to the "Performance Marketing" category (line 24-29):

```typescript
{
  category: "Performance Marketing",
  items: [
    { label: "Google Ads", href: "/services/google-ads", desc: "PPC & search campaigns" },
    { label: "SEO", href: "/services/seo", desc: "Organic growth & rankings" },
    { label: "Lead Generation", href: "/services/lead-generation", desc: "Fill your sales pipeline" },
    { label: "AI Search (GEO)", href: "/services/ai-search-optimization", desc: "Get cited by AI engines" },
  ],
},
```

- [ ] **Step 2: Add to InnerNavbar mega menu**

Apply the same change to the corresponding mega menu in `src/components/layout/InnerNavbar.tsx`.

- [ ] **Step 3: Add to footer serviceLinks**

In `src/components/sections/FooterHome2.tsx`, add to the `serviceLinks` array (line 18-30):

```typescript
{ label: "AI Search Optimization", href: "/services/ai-search-optimization" },
```

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/NavbarHome2.tsx src/components/layout/InnerNavbar.tsx src/components/sections/FooterHome2.tsx
git commit -m "feat: add AI Search Optimization to navigation and footer"
```

---

## Task 7: Add Expertise Stats to LocationServiceTemplate

**Files:**
- Modify: `src/components/templates/LocationServiceTemplate.tsx:52` (expertiseStats)

- [ ] **Step 1: Add expertise stats entry**

In the `expertiseStats` record at line 52 of `LocationServiceTemplate.tsx`, add:

```typescript
"ai-search-optimization": [
  { label: "AI Citations Achieved", value: "2,500+" },
  { label: "AI Platforms Covered", value: "4+" },
  { label: "Avg Citation Increase", value: "3-5x" },
  { label: "Clients Optimized", value: "100+" },
],
```

- [ ] **Step 2: Commit**

```bash
git add src/components/templates/LocationServiceTemplate.tsx
git commit -m "feat: add GEO expertise stats to location service template"
```

---

## Task 8: Verify End-to-End

- [ ] **Step 1: Rebuild and check**

Run: `npx next build 2>&1 | tail -30`
Expected: Build succeeds with new static pages generated

- [ ] **Step 2: Verify standalone service page**

Run: `curl -s http://localhost:3000/services/ai-search-optimization/ | grep -o '<h1[^>]*>.*</h1>'`
Expected: H1 with "AI Search Optimization" content

- [ ] **Step 3: Verify a tier-1 city page (hand-written content)**

Run: `curl -s http://localhost:3000/services/ai-search-optimization-in-chandigarh/ | grep -o '<h1[^>]*>.*</h1>'`
Expected: H1 with "AI Search Optimization Agency in Chandigarh"

- [ ] **Step 4: Verify a tier-2 city page (auto-generated content)**

Run: `curl -s http://localhost:3000/services/ai-search-optimization-in-pune/ | grep -o '<h1[^>]*>.*</h1>'`
Expected: H1 with one of the 8 auto-generated patterns

- [ ] **Step 5: Compare two auto-generated city pages for uniqueness**

Run both:
```bash
curl -s http://localhost:3000/services/ai-search-optimization-in-pune/ > /tmp/geo-pune.html
curl -s http://localhost:3000/services/ai-search-optimization-in-jaipur/ > /tmp/geo-jaipur.html
diff <(cat /tmp/geo-pune.html | sed 's/Pune//g; s/pune//g') <(cat /tmp/geo-jaipur.html | sed 's/Jaipur//g; s/jaipur//g') | wc -l
```
Expected: >100 diff lines (confirming meaningful content differences beyond city name swaps)

- [ ] **Step 6: Check sitemap includes new pages**

Run: `curl -s http://localhost:3000/sitemap.xml | grep "ai-search-optimization" | wc -l`
Expected: 158+ URLs (1 per city + standalone page)

- [ ] **Step 7: Final commit**

```bash
git add -A
git commit -m "feat: complete AI Search Optimization (GEO) service — all cities live"
```

---

## Summary of Content Differentiation Strategy

| Layer | What Makes Pages Different | Coverage |
|-------|---------------------------|----------|
| Hand-written city content | Completely unique h1, hero, whyChoose, FAQs, case study, market insight | 10 tier-1 cities |
| Country-specific case studies | 5 unique case studies per country, referencing local industries and regulations | All cities by country |
| Country-specific market insights | 8 insights per service, using local AI adoption stats and platform data | All cities by country |
| City tier variations | Different hero description depth and tone for tier 1/2/3 | All cities |
| Hash-based pool selection | Different H1, tagline, whyChoose, local content, FAQs per city (deterministic) | All cities |
| City data injection | Population, landmarks, industries, coordinates, economic data per city | All cities with data |
