import type { LocationInfo } from "./locations";

// ─── Deterministic hash (same as other files) ────────────────────────────────
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

function pick<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length];
}

/** Pick `count` unique items from `arr` using a deterministic seed. */
function pickN<T>(arr: T[], count: number, seed: number): T[] {
  if (count >= arr.length) return arr;
  const indices = new Set<number>();
  let i = 0;
  while (indices.size < count) {
    indices.add((seed + i * 7 + i * i * 3) % arr.length);
    i++;
  }
  return Array.from(indices).map((idx) => arr[idx]);
}

// ─── 1. Section heading variants ─────────────────────────────────────────────

type SectionKey =
  | "whyChoose"
  | "process"
  | "services"
  | "trust"
  | "pricing"
  | "industries"
  | "faq"
  | "seoContent"
  | "otherServices"
  | "whyNeed"
  | "charges";

const headingVariants: Record<SectionKey, string[]> = {
  whyChoose: [
    "Why {city} businesses choose us",
    "What makes us {city}'s go-to {service} partner",
    "Why {service} works differently in {city}",
    "The {city} advantage: our approach to {service}",
    "How we deliver {service} results in {city}",
    "{city}'s trusted {service} team",
    "Why {city} companies partner with us for {service}",
    "Our commitment to {city} businesses",
  ],
  process: [
    "Our {service} Process in {city}",
    "How we execute {service} in {city}",
    "From strategy to results: {service} in {city}",
    "Our proven {service} framework for {city}",
    "{service} execution — step by step in {city}",
    "How we approach {service} for {city} businesses",
    "The {service} process behind every {city} campaign",
    "Our methodology for {service} in {city}",
  ],
  services: [
    "Our {service} Services in {city}",
    "{service} solutions tailored for {city}",
    "What our {service} covers in {city}",
    "Full-scope {service} for {city} businesses",
    "{service} capabilities we bring to {city}",
    "Everything included in our {city} {service}",
    "Core {service} offerings in {city}",
    "How our {service} helps {city} businesses grow",
  ],
  trust: [
    "Trusted by {city} Businesses",
    "Why {city} brands trust TML",
    "Proven results for {city} companies",
    "What {city} businesses say about our work",
    "Built on trust — our {city} track record",
    "{city} businesses rely on TML for {service}",
    "The proof is in the results — {city} edition",
    "Earning trust across {city} since day one",
  ],
  pricing: [
    "{service} Investment in {city}",
    "What {service} costs in {city}",
    "{service} pricing for {city} businesses",
    "Transparent {service} rates for {city}",
    "Your {service} investment in {city}",
    "How much does {service} cost in {city}?",
    "{service} packages for {city} companies",
    "Budget-friendly {service} in {city}",
  ],
  industries: [
    "Industries We Serve in {city}",
    "{city} industries we work with",
    "Sectors we power with {service} in {city}",
    "{service} for every {city} industry",
    "Who we help in {city}",
    "Industry expertise across {city}",
    "{city} sectors that trust our {service}",
    "From retail to tech — {service} across {city}",
  ],
  faq: [
    "{service} in {city} — FAQs",
    "Common {service} questions from {city} businesses",
    "Frequently asked about {service} in {city}",
    "{service} in {city}: your questions answered",
    "What {city} clients ask about {service}",
    "{city} {service} FAQ",
    "Questions about {service} in {city}?",
    "Everything you want to know about {service} in {city}",
  ],
  seoContent: [
    "Unlock Your Business Potential with Comprehensive {service} Services in {city}",
    "Grow your {city} business with expert {service}",
    "The complete guide to {service} in {city}",
    "How {service} transforms {city} businesses",
    "Everything {city} businesses need to know about {service}",
    "A smarter approach to {service} in {city}",
    "Elevate your {city} brand with professional {service}",
    "Why {city} businesses are investing in {service}",
  ],
  otherServices: [
    "Other Services in {city}",
    "More ways we help {city} businesses",
    "Explore our full {city} service offering",
    "Beyond {service}: what else we do in {city}",
    "Additional services for {city} companies",
    "Complete digital solutions in {city}",
  ],
  whyNeed: [
    "Why Do You Need {service} Services in {city}?",
    "Does your {city} business need {service}?",
    "The case for {service} in {city}",
    "Why {service} matters for {city} companies",
    "How {service} drives growth in {city}",
    "Is {service} worth it for {city} businesses?",
    "What happens without {service} in {city}",
    "The ROI of {service} for {city} brands",
  ],
  charges: [
    "Charges for {service} Services in {city}",
    "What does {service} cost in {city}?",
    "{service} pricing breakdown for {city}",
    "Understanding {service} fees in {city}",
    "Our {service} rates for {city} businesses",
    "How we price {service} in {city}",
  ],
};

/**
 * Return a deterministic, unique section heading for a given section / service / city combo.
 */
export function getSectionHeading(
  section: SectionKey,
  serviceName: string,
  cityName: string,
  seed: number,
): string {
  const variants = headingVariants[section];
  if (!variants) return "";
  const chosen = pick(variants, seed + simpleHash(section));
  return chosen
    .replace(/{service}/g, serviceName)
    .replace(/{city}/g, cityName);
}


// ─── 2. Expertise stats variants (per service) ──────────────────────────────

interface StatDef {
  stat: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
  label: string;
  descriptionTemplate: string;
  icon?: string;
}

/** Pool of 8-10 stats per service. We pick 4 per city. */
const statPools: Record<string, StatDef[]> = {
  "google-ads": [
    { stat: 500, suffix: "+", label: "Campaigns Managed", descriptionTemplate: "We have successfully managed over 500 Google Ads campaigns for businesses across {state} and beyond." },
    { stat: 4, decimals: 1, suffix: "x", label: "Average ROAS", descriptionTemplate: "Our {city} clients see an average 4.2x return on ad spend, turning every dollar into measurable revenue." },
    { stat: 5, prefix: "$", suffix: "M+", label: "Ad Spend Managed", descriptionTemplate: "We've managed over $5M in ad spend for businesses across {state}, optimizing every dollar for maximum results." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
    { stat: 32, suffix: "%", label: "Avg CPA Reduction", descriptionTemplate: "{city} businesses working with us see an average 32% reduction in cost per acquisition." },
    { stat: 150, suffix: "+", label: "Industries Served", descriptionTemplate: "We've run Google Ads for 150+ industries, bringing cross-sector insight to every {city} campaign." },
    { stat: 10, suffix: "K+", label: "Keywords Tracked", descriptionTemplate: "We actively track over 10,000 keywords across {state} for precise bid optimization." },
    { stat: 3, decimals: 1, suffix: "x", label: "Conversion Lift", descriptionTemplate: "{city} clients see an average 3.5x lift in conversions within the first 90 days." },
    { stat: 15, suffix: "+", label: "Years Running Ads", descriptionTemplate: "With 15+ years of paid search experience, we know what works in {city}'s market." },
    { stat: 200, suffix: "+", label: "Landing Pages Built", descriptionTemplate: "Over 200 high-converting landing pages built and tested for businesses across {state}." },
  ],
  seo: [
    { stat: 500, suffix: "+", label: "Projects Delivered", descriptionTemplate: "We have successfully delivered over 500 SEO projects for businesses across {state} and beyond." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
    { stat: 3, decimals: 1, suffix: "x", label: "Average ROI", descriptionTemplate: "{city} businesses working with TML see an average 3.5x return on their SEO investment within the first year." },
    { stat: 15, suffix: "+", label: "Years Experience", descriptionTemplate: "With over 15 years of SEO experience, we bring proven strategies to every {city} business we work with." },
    { stat: 3, suffix: "K+", label: "Keywords Ranked", descriptionTemplate: "We've achieved first-page rankings for over 3,000 keywords across {state} and beyond." },
    { stat: 150, suffix: "%+", label: "Avg Traffic Growth", descriptionTemplate: "{city} clients see an average 150%+ organic traffic growth within 6 months of working with us." },
    { stat: 10, suffix: "K+", label: "Pages Optimized", descriptionTemplate: "Over 10,000 pages audited and optimized for peak search performance across {state}." },
    { stat: 200, suffix: "+", label: "Technical Audits", descriptionTemplate: "We've conducted 200+ comprehensive technical SEO audits for businesses in {state} and internationally." },
    { stat: 25, suffix: "+", label: "Industries Covered", descriptionTemplate: "SEO strategies customized across 25+ industries — from SaaS to real estate — for {city} businesses." },
    { stat: 7, suffix: "+", label: "Countries Served", descriptionTemplate: "We've delivered SEO results in 7+ countries, bringing global insights to {city} campaigns." },
  ],
  branding: [
    { stat: 500, suffix: "+", label: "Brands Created", descriptionTemplate: "We have designed and built over 500 brands for businesses across {state} and beyond." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
    { stat: 15, suffix: "+", label: "Years Experience", descriptionTemplate: "With over 15 years of branding experience, we bring proven creative strategies to every {city} business we work with." },
    { stat: 50, suffix: "+", label: "Industries Served", descriptionTemplate: "We've created brands across 50+ industries, bringing diverse expertise to every {city} project." },
    { stat: 300, suffix: "+", label: "Brand Guidelines Delivered", descriptionTemplate: "Over 300 comprehensive brand guideline documents created for businesses in {state}." },
    { stat: 4, decimals: 1, suffix: "x", label: "Brand Recall Lift", descriptionTemplate: "{city} clients see an average 4.5x improvement in brand recall after working with us." },
    { stat: 10, suffix: "+", label: "Design Awards", descriptionTemplate: "Our branding work has earned recognition through 10+ industry awards and features." },
    { stat: 25, suffix: "+", label: "Rebrands Completed", descriptionTemplate: "We've successfully managed 25+ rebrands for established {city} and {state} businesses." },
    { stat: 48, suffix: "hr", label: "Avg Turnaround", descriptionTemplate: "Our initial brand concepts are delivered within 48 hours, keeping your {city} project on schedule." },
  ],
  "website-development": [
    { stat: 300, suffix: "+", label: "Websites Delivered", descriptionTemplate: "We have built over 300 websites for businesses across {state} and beyond." },
    { stat: 99, suffix: "%", label: "Client Satisfaction", descriptionTemplate: "Our commitment to quality keeps {city} businesses coming back. A 99% satisfaction rate speaks for itself." },
    { stat: 1, decimals: 1, suffix: "s", label: "Avg Load Time", descriptionTemplate: "Our websites load in under 2 seconds on average, giving {city} businesses a competitive edge in search rankings." },
    { stat: 20, suffix: "+", label: "Technologies Used", descriptionTemplate: "We work with 20+ modern technologies to build the perfect solution for every {city} business." },
    { stat: 98, suffix: "%", label: "On-Time Delivery", descriptionTemplate: "98% of our {city} web projects are delivered on time and within budget." },
    { stat: 40, suffix: "%+", label: "Avg Conversion Lift", descriptionTemplate: "{city} businesses see an average 40%+ conversion rate increase after launching their new website." },
    { stat: 100, suffix: "+", label: "E-commerce Sites", descriptionTemplate: "Over 100 e-commerce websites built for businesses across {state}, driving millions in online revenue." },
    { stat: 95, suffix: "+", label: "Lighthouse Scores", descriptionTemplate: "Our websites consistently score 95+ on Google Lighthouse for performance, accessibility, and SEO." },
    { stat: 50, suffix: "+", label: "CMS Platforms", descriptionTemplate: "We've built on 50+ CMS and framework platforms, choosing the right tool for every {city} project." },
  ],
  "social-media": [
    { stat: 2, suffix: "M+", label: "Followers Grown", descriptionTemplate: "We have grown over 2M followers for businesses across {state} and beyond." },
    { stat: 4, decimals: 1, suffix: "%", label: "Engagement Rate", descriptionTemplate: "Our {city} clients see an average 4.8% engagement rate, well above industry benchmarks." },
    { stat: 100, suffix: "+", label: "Brands Managed", descriptionTemplate: "We've managed social media for 100+ brands, bringing proven strategies to every {city} business." },
    { stat: 500, suffix: "+", label: "Content Pieces/Mo", descriptionTemplate: "Our team produces over 500 content pieces per month for clients across {state}." },
    { stat: 50, suffix: "M+", label: "Impressions Generated", descriptionTemplate: "Our social content has generated 50M+ impressions for businesses across {state}." },
    { stat: 8, suffix: "+", label: "Platforms Covered", descriptionTemplate: "We manage presence across 8+ social platforms for {city} businesses." },
    { stat: 3, decimals: 1, suffix: "x", label: "Follower Growth Rate", descriptionTemplate: "{city} clients see an average 3.2x faster follower growth compared to managing in-house." },
    { stat: 15, suffix: "+", label: "Years in Social", descriptionTemplate: "With 15+ years in social media marketing, we've navigated every algorithm shift for {city} businesses." },
    { stat: 200, suffix: "+", label: "Campaigns Launched", descriptionTemplate: "Over 200 paid and organic social campaigns launched for businesses across {state}." },
  ],
  "lead-generation": [
    { stat: 50, suffix: "K+", label: "Leads Generated", descriptionTemplate: "We have generated over 50,000 qualified leads for businesses across {state} and beyond." },
    { stat: 12, suffix: "%", label: "Conversion Rate", descriptionTemplate: "Our {city} clients see an average 12% conversion rate, far above the industry average." },
    { stat: 500, suffix: "+", label: "Funnels Built", descriptionTemplate: "We've built over 500 lead generation funnels, each optimized for maximum conversions." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
    { stat: 35, suffix: "%", label: "Lower CPL", descriptionTemplate: "{city} businesses see an average 35% lower cost per lead within the first quarter." },
    { stat: 200, suffix: "+", label: "A/B Tests Run", descriptionTemplate: "Over 200 A/B tests completed to continuously improve lead quality for {state} businesses." },
    { stat: 8, suffix: "+", label: "Channels Utilized", descriptionTemplate: "We generate leads across 8+ channels including search, social, email, and referral for {city} businesses." },
    { stat: 3, decimals: 1, suffix: "x", label: "Lead Quality Lift", descriptionTemplate: "{city} clients report a 3.5x improvement in lead-to-customer conversion after engaging TML." },
    { stat: 15, suffix: "+", label: "Years of Expertise", descriptionTemplate: "With 15+ years of lead generation expertise, we understand what moves the needle in {city}." },
  ],
  "meta-ads": [
    { stat: 5, prefix: "$", suffix: "M+", label: "Ad Spend Managed", descriptionTemplate: "We've managed over $5M in Meta ad spend for businesses across {state}, optimizing every dollar." },
    { stat: 5, decimals: 1, suffix: "x", label: "Average ROAS", descriptionTemplate: "Our {city} clients see an average 5.2x return on their Meta ad spend." },
    { stat: 2000, suffix: "+", label: "Campaigns Run", descriptionTemplate: "We have run over 2,000 Meta ad campaigns for businesses across {state} and beyond." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
    { stat: 40, suffix: "%", label: "Lower CPA", descriptionTemplate: "{city} businesses see an average 40% reduction in cost per acquisition through our Meta campaigns." },
    { stat: 100, suffix: "M+", label: "Impressions Served", descriptionTemplate: "Over 100M impressions served across Meta platforms for businesses in {state}." },
    { stat: 300, suffix: "+", label: "Creatives Tested", descriptionTemplate: "We've tested 300+ ad creatives to find winning combinations for {city} audiences." },
    { stat: 10, suffix: "+", label: "Ad Formats Mastered", descriptionTemplate: "We run 10+ Meta ad formats including Reels, Stories, Carousels, and Advantage+ for {city} brands." },
    { stat: 15, suffix: "+", label: "Years in Paid Social", descriptionTemplate: "With 15+ years running paid social campaigns, we know what converts in {city}." },
  ],
  "ppc-management": [
    { stat: 5, prefix: "$", suffix: "M+", label: "Ad Spend Managed", descriptionTemplate: "We've managed over $5.5M in PPC ad spend for businesses across {state}, optimizing every dollar." },
    { stat: 6, suffix: "+", label: "Platforms Managed", descriptionTemplate: "We manage PPC campaigns across 6+ platforms for {city} businesses." },
    { stat: 32, suffix: "%", label: "Avg CPA Reduction", descriptionTemplate: "{city} businesses working with TML see an average 32% reduction in cost per acquisition." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
    { stat: 4, decimals: 1, suffix: "x", label: "Average ROAS", descriptionTemplate: "Our {city} PPC clients see an average 4.5x return on ad spend across all platforms." },
    { stat: 1000, suffix: "+", label: "Campaigns Optimized", descriptionTemplate: "Over 1,000 PPC campaigns optimized for peak performance across {state}." },
    { stat: 50, suffix: "K+", label: "Keywords Managed", descriptionTemplate: "We actively manage 50,000+ keywords for PPC clients in {city} and beyond." },
    { stat: 15, suffix: "+", label: "Years in PPC", descriptionTemplate: "With 15+ years of PPC management experience, we bring proven results to {city} businesses." },
    { stat: 200, suffix: "+", label: "Landing Pages Built", descriptionTemplate: "Over 200 conversion-optimized landing pages built for PPC campaigns across {state}." },
  ],
  "video-editing": [
    { stat: 2000, suffix: "+", label: "Videos Produced", descriptionTemplate: "We have produced over 2,000 videos for businesses across {state} and beyond." },
    { stat: 5000, suffix: "+", label: "Hours of Content", descriptionTemplate: "Over 5,000 hours of video content created for {city} businesses and beyond." },
    { stat: 100, suffix: "M+", label: "Views Generated", descriptionTemplate: "Our video content has generated over 100 million views for clients across {state}." },
    { stat: 98, suffix: "%", label: "Client Satisfaction", descriptionTemplate: "Our commitment to quality keeps {city} businesses coming back. A 98% satisfaction rate speaks for itself." },
    { stat: 48, suffix: "hr", label: "Avg Turnaround", descriptionTemplate: "Most video projects are delivered within 48 hours, keeping your {city} content calendar on track." },
    { stat: 15, suffix: "+", label: "Video Formats", descriptionTemplate: "We produce 15+ video formats from Reels to documentaries for {city} brands." },
    { stat: 50, suffix: "+", label: "Industries Covered", descriptionTemplate: "Video content created for 50+ industries across {state} and internationally." },
    { stat: 3, decimals: 1, suffix: "x", label: "Engagement Boost", descriptionTemplate: "{city} clients see an average 3.5x boost in engagement when adding video to their strategy." },
    { stat: 10, suffix: "+", label: "Editing Platforms", descriptionTemplate: "Our editors are proficient in 10+ professional editing platforms for any {city} project requirement." },
  ],
  "branding-packaging": [
    { stat: 300, suffix: "+", label: "Packages Designed", descriptionTemplate: "We have designed packaging for over 300 products across {state} and beyond." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
    { stat: 50, suffix: "+", label: "Industries Served", descriptionTemplate: "Packaging design for 50+ industries, from FMCG to luxury goods in {city}." },
    { stat: 15, suffix: "+", label: "Years Experience", descriptionTemplate: "With 15+ years of packaging design experience, we bring shelf-stopping creativity to every {city} project." },
    { stat: 25, suffix: "%+", label: "Avg Sales Lift", descriptionTemplate: "{city} clients see an average 25%+ increase in sales after a packaging redesign." },
    { stat: 10, suffix: "+", label: "Design Awards", descriptionTemplate: "Our packaging work has earned 10+ industry design awards and recognitions." },
    { stat: 200, suffix: "+", label: "SKUs Designed", descriptionTemplate: "Over 200 SKUs designed with consistent brand identity across {state}." },
    { stat: 5, suffix: "+", label: "Printing Partners", descriptionTemplate: "We work with 5+ trusted printing partners to ensure quality production for {city} businesses." },
  ],
  "graphic-design": [
    { stat: 5000, suffix: "+", label: "Designs Delivered", descriptionTemplate: "We have delivered over 5,000 designs for businesses across {state} and beyond." },
    { stat: 99, suffix: "%", label: "Client Satisfaction", descriptionTemplate: "Our commitment to quality keeps {city} businesses coming back. A 99% satisfaction rate speaks for itself." },
    { stat: 24, suffix: "hr", label: "Avg Turnaround", descriptionTemplate: "Most graphic design projects are delivered within 24 hours for {city} businesses." },
    { stat: 50, suffix: "+", label: "Industries Covered", descriptionTemplate: "Design work for 50+ industries brings cross-sector creativity to every {city} project." },
    { stat: 15, suffix: "+", label: "Years Experience", descriptionTemplate: "With 15+ years of graphic design expertise, we deliver polished visuals for {city} brands." },
    { stat: 20, suffix: "+", label: "Design Tools", descriptionTemplate: "Our designers work across 20+ tools and platforms for any {city} project requirement." },
    { stat: 500, suffix: "+", label: "Brands Supported", descriptionTemplate: "Over 500 brands trust our design team for their ongoing visual needs across {state}." },
    { stat: 10, suffix: "K+", label: "Social Graphics", descriptionTemplate: "We've created 10,000+ social media graphics for businesses across {state}." },
  ],
  "link-building": [
    { stat: 10, suffix: "K+", label: "Links Built", descriptionTemplate: "Over 10,000 high-quality backlinks secured for businesses across {state} and beyond." },
    { stat: 50, suffix: "+", label: "DA Avg Placement", descriptionTemplate: "Our average link placement is on sites with 50+ domain authority." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
    { stat: 200, suffix: "+", label: "Publisher Relationships", descriptionTemplate: "We maintain relationships with 200+ publishers for reliable link placements across {state}." },
    { stat: 3, decimals: 1, suffix: "x", label: "Avg Ranking Lift", descriptionTemplate: "{city} clients see an average 3.5x improvement in keyword rankings after link building." },
    { stat: 15, suffix: "+", label: "Years Experience", descriptionTemplate: "With 15+ years of link building expertise, we know what moves the needle for {city} businesses." },
    { stat: 0, suffix: "", label: "Spam Links", descriptionTemplate: "Zero spammy or PBN links — we build only white-hat backlinks for {city} businesses." },
    { stat: 25, suffix: "+", label: "Industries Covered", descriptionTemplate: "Link building strategies tailored for 25+ industries across {state}." },
    { stat: 500, suffix: "+", label: "Content Pieces Written", descriptionTemplate: "Over 500 guest posts and content pieces written to earn links for {state} businesses." },
  ],
  "content-writing": [
    { stat: 5000, suffix: "+", label: "Articles Written", descriptionTemplate: "Over 5,000 articles written for businesses across {state} and beyond." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
    { stat: 50, suffix: "+", label: "Industries Covered", descriptionTemplate: "Content written for 50+ industries, giving us deep subject matter expertise for {city} businesses." },
    { stat: 15, suffix: "+", label: "Years Experience", descriptionTemplate: "With 15+ years of content writing expertise, we craft copy that converts for {city} brands." },
    { stat: 3, decimals: 1, suffix: "x", label: "Organic Traffic Lift", descriptionTemplate: "{city} clients see an average 3.5x increase in organic traffic from our content." },
    { stat: 100, suffix: "%", label: "Original Content", descriptionTemplate: "Every piece is 100% original, researched, and optimized for {city} audience relevance." },
    { stat: 20, suffix: "+", label: "Content Formats", descriptionTemplate: "We produce 20+ content formats from blogs to whitepapers for {city} businesses." },
    { stat: 500, suffix: "+", label: "Keywords Targeted", descriptionTemplate: "We've targeted 500+ unique keywords through strategic content for businesses across {state}." },
  ],
  "gmb-listing": [
    { stat: 500, suffix: "+", label: "Listings Optimized", descriptionTemplate: "We have optimized over 500 Google Business Profiles across {state} and beyond." },
    { stat: 3, decimals: 1, suffix: "x", label: "Visibility Increase", descriptionTemplate: "{city} businesses see an average 3.5x increase in Maps visibility after optimization." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
    { stat: 200, suffix: "%+", label: "Avg Call Increase", descriptionTemplate: "{city} businesses see an average 200%+ increase in calls from their Google listing." },
    { stat: 50, suffix: "+", label: "Industries Served", descriptionTemplate: "GMB optimization for 50+ industries across {state}." },
    { stat: 15, suffix: "+", label: "Years Experience", descriptionTemplate: "With 15+ years of local SEO experience, we know how to rank {city} businesses in Maps." },
    { stat: 4, decimals: 1, suffix: "/5", label: "Avg Rating Maintained", descriptionTemplate: "Our {city} clients maintain an average 4.7/5 star rating on Google." },
    { stat: 1000, suffix: "+", label: "Reviews Managed", descriptionTemplate: "Over 1,000 Google reviews managed and responded to for businesses in {state}." },
  ],
  "technical-seo": [
    { stat: 200, suffix: "+", label: "Audits Completed", descriptionTemplate: "Over 200 comprehensive technical SEO audits completed for businesses across {state}." },
    { stat: 98, suffix: "%", label: "Issues Resolved", descriptionTemplate: "We resolve 98% of technical SEO issues within the first month for {city} businesses." },
    { stat: 50, suffix: "+", label: "Industries Covered", descriptionTemplate: "Technical SEO for 50+ industries, from e-commerce to enterprise SaaS in {city}." },
    { stat: 15, suffix: "+", label: "Years Experience", descriptionTemplate: "With 15+ years of technical SEO expertise, we solve the hardest crawl and indexing problems for {city} businesses." },
    { stat: 95, suffix: "+", label: "Avg Lighthouse Score", descriptionTemplate: "Our {city} clients achieve 95+ Lighthouse performance scores after our technical optimization." },
    { stat: 3, decimals: 1, suffix: "x", label: "Crawl Efficiency Lift", descriptionTemplate: "{city} sites see a 3.2x improvement in crawl efficiency after our technical fixes." },
    { stat: 500, suffix: "+", label: "Pages Audited Monthly", descriptionTemplate: "We audit 500+ pages monthly across our {state} client portfolio." },
    { stat: 10, suffix: "K+", label: "Errors Fixed", descriptionTemplate: "Over 10,000 technical errors identified and fixed for businesses across {state}." },
  ],
  "content-marketing": [
    { stat: 500, suffix: "+", label: "Campaigns Delivered", descriptionTemplate: "Over 500 content marketing campaigns delivered for businesses across {state} and beyond." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
    { stat: 3, decimals: 1, suffix: "x", label: "Avg Traffic Growth", descriptionTemplate: "{city} clients see an average 3.5x traffic growth through our content marketing strategies." },
    { stat: 15, suffix: "+", label: "Years Experience", descriptionTemplate: "With 15+ years of content marketing expertise, we know what engages {city} audiences." },
    { stat: 10, suffix: "K+", label: "Content Pieces Created", descriptionTemplate: "Over 10,000 content pieces created across blogs, videos, and infographics for {state} businesses." },
    { stat: 50, suffix: "+", label: "Industries Covered", descriptionTemplate: "Content strategies for 50+ industries bring cross-sector insights to every {city} project." },
    { stat: 200, suffix: "%+", label: "Avg Organic Growth", descriptionTemplate: "{city} businesses see an average 200%+ organic traffic growth within 6 months." },
    { stat: 25, suffix: "+", label: "Distribution Channels", descriptionTemplate: "We distribute content across 25+ channels to maximize reach for {city} businesses." },
  ],
  "email-marketing": [
    { stat: 500, suffix: "+", label: "Campaigns Sent", descriptionTemplate: "Over 500 email campaigns sent for businesses across {state} and beyond." },
    { stat: 35, suffix: "%", label: "Avg Open Rate", descriptionTemplate: "Our {city} clients achieve an average 35% email open rate, well above industry benchmarks." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
    { stat: 5, decimals: 1, suffix: "%", label: "Avg Click Rate", descriptionTemplate: "{city} clients see an average 5.2% click-through rate from our email campaigns." },
    { stat: 10, suffix: "M+", label: "Emails Delivered", descriptionTemplate: "Over 10 million emails delivered for businesses across {state} with 99%+ deliverability." },
    { stat: 15, suffix: "+", label: "Years Experience", descriptionTemplate: "With 15+ years of email marketing expertise, we know what drives opens and clicks in {city}." },
    { stat: 200, suffix: "+", label: "Automations Built", descriptionTemplate: "Over 200 email automation workflows built for businesses across {state}." },
    { stat: 4, decimals: 1, suffix: "x", label: "Revenue Per Email", descriptionTemplate: "{city} clients see a 4.5x increase in revenue per email after working with us." },
    { stat: 50, suffix: "+", label: "Industries Covered", descriptionTemplate: "Email strategies for 50+ industries across {state} and internationally." },
  ],
  "influencer-marketing": [
    { stat: 500, suffix: "+", label: "Campaigns Managed", descriptionTemplate: "Over 500 influencer campaigns managed for businesses across {state} and beyond." },
    { stat: 5, suffix: "K+", label: "Influencer Network", descriptionTemplate: "We work with a vetted network of 5,000+ influencers across {state} and globally." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
    { stat: 100, suffix: "M+", label: "Reach Generated", descriptionTemplate: "Our influencer campaigns have generated 100M+ reach for businesses across {state}." },
    { stat: 4, decimals: 1, suffix: "x", label: "Average ROI", descriptionTemplate: "{city} clients see an average 4.5x ROI from our influencer marketing campaigns." },
    { stat: 15, suffix: "+", label: "Years Experience", descriptionTemplate: "With 15+ years of influencer marketing expertise, we know what drives results in {city}." },
    { stat: 50, suffix: "+", label: "Industries Covered", descriptionTemplate: "Influencer strategies for 50+ industries, from fashion to fintech in {city}." },
    { stat: 3, decimals: 1, suffix: "%", label: "Avg Engagement", descriptionTemplate: "Our influencer selections for {city} brands achieve an average 3.5% engagement rate." },
  ],
  "online-reputation-management": [
    { stat: 200, suffix: "+", label: "Reputations Managed", descriptionTemplate: "Over 200 online reputations actively managed for businesses across {state}." },
    { stat: 98, suffix: "%", label: "Issue Resolution", descriptionTemplate: "We resolve 98% of reputation issues within the first 30 days for {city} businesses." },
    { stat: 4, decimals: 1, suffix: "/5", label: "Avg Rating Achieved", descriptionTemplate: "{city} clients achieve an average 4.7/5 star rating across review platforms." },
    { stat: 15, suffix: "+", label: "Years Experience", descriptionTemplate: "With 15+ years of ORM expertise, we protect and grow the reputation of {city} businesses." },
    { stat: 5, suffix: "K+", label: "Reviews Managed", descriptionTemplate: "Over 5,000 reviews monitored and managed for businesses across {state}." },
    { stat: 50, suffix: "+", label: "Industries Covered", descriptionTemplate: "ORM strategies for 50+ industries, from healthcare to hospitality in {city}." },
    { stat: 24, suffix: "hr", label: "Response Time", descriptionTemplate: "We respond to negative reviews within 24 hours for all our {city} clients." },
    { stat: 10, suffix: "+", label: "Platforms Monitored", descriptionTemplate: "We monitor 10+ review and social platforms for every {city} brand we manage." },
  ],
  "conversion-rate-optimization": [
    { stat: 300, suffix: "+", label: "Tests Completed", descriptionTemplate: "Over 300 A/B and multivariate tests completed for businesses across {state}." },
    { stat: 35, suffix: "%", label: "Avg Conversion Lift", descriptionTemplate: "{city} clients see an average 35% improvement in conversion rates." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
    { stat: 15, suffix: "+", label: "Years Experience", descriptionTemplate: "With 15+ years of CRO expertise, we turn more visitors into customers for {city} businesses." },
    { stat: 500, suffix: "+", label: "Landing Pages Tested", descriptionTemplate: "Over 500 landing pages tested and optimized for maximum conversions across {state}." },
    { stat: 50, suffix: "+", label: "Industries Covered", descriptionTemplate: "CRO strategies for 50+ industries, from e-commerce to B2B SaaS in {city}." },
    { stat: 2, decimals: 1, suffix: "x", label: "Revenue Per Visitor Lift", descriptionTemplate: "{city} businesses see an average 2.5x increase in revenue per visitor after CRO." },
    { stat: 10, suffix: "+", label: "Testing Tools Used", descriptionTemplate: "We use 10+ testing and analytics tools to drive CRO results for {city} businesses." },
  ],
  "ecommerce-marketing": [
    { stat: 200, suffix: "+", label: "Stores Marketed", descriptionTemplate: "Over 200 e-commerce stores marketed for businesses across {state} and beyond." },
    { stat: 5, prefix: "$", suffix: "M+", label: "Revenue Generated", descriptionTemplate: "We've helped generate over $5M in e-commerce revenue for businesses across {state}." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
    { stat: 4, decimals: 1, suffix: "x", label: "Average ROAS", descriptionTemplate: "{city} e-commerce clients see an average 4.5x return on ad spend." },
    { stat: 50, suffix: "+", label: "Industries Covered", descriptionTemplate: "E-commerce marketing for 50+ product categories across {state}." },
    { stat: 15, suffix: "+", label: "Years Experience", descriptionTemplate: "With 15+ years of e-commerce marketing expertise, we scale online stores in {city}." },
    { stat: 35, suffix: "%", label: "Avg AOV Increase", descriptionTemplate: "{city} clients see an average 35% increase in average order value after working with us." },
    { stat: 10, suffix: "+", label: "Platforms Supported", descriptionTemplate: "We market across 10+ e-commerce platforms including Shopify, WooCommerce, and Magento." },
  ],
  "ai-influencer-management": [
    { stat: 100, suffix: "+", label: "AI Influencers Managed", descriptionTemplate: "Over 100 AI influencer campaigns managed for forward-thinking {city} brands." },
    { stat: 5, decimals: 1, suffix: "x", label: "Engagement vs Human", descriptionTemplate: "AI influencer content sees 5.5x higher engagement rates for {city} brands compared to traditional." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
    { stat: 50, suffix: "M+", label: "Impressions Generated", descriptionTemplate: "AI influencer campaigns have generated 50M+ impressions for businesses across {state}." },
    { stat: 15, suffix: "+", label: "Years in Marketing", descriptionTemplate: "15+ years of marketing expertise combined with cutting-edge AI for {city} businesses." },
    { stat: 10, suffix: "+", label: "AI Platforms Used", descriptionTemplate: "We work with 10+ AI platforms to create the perfect virtual influencer for {city} brands." },
    { stat: 3, decimals: 1, suffix: "x", label: "Cost Efficiency", descriptionTemplate: "AI influencers deliver 3.5x more content at a fraction of the cost for {city} businesses." },
    { stat: 24, suffix: "/7", label: "Content Production", descriptionTemplate: "AI influencers produce content 24/7, keeping your {city} brand always active and engaging." },
  ],
  "music-release": [
    { stat: 500, suffix: "+", label: "Releases Managed", descriptionTemplate: "Over 500 music releases managed for artists across {state} and beyond." },
    { stat: 10, suffix: "M+", label: "Streams Generated", descriptionTemplate: "Our campaigns have generated 10M+ streams for artists across {state}." },
    { stat: 98, suffix: "%", label: "Client Satisfaction", descriptionTemplate: "Our commitment to results keeps {city} artists coming back. A 98% satisfaction rate speaks for itself." },
    { stat: 50, suffix: "+", label: "Platforms Covered", descriptionTemplate: "We distribute to 50+ streaming platforms for {city} artists." },
    { stat: 15, suffix: "+", label: "Years in Music", descriptionTemplate: "With 15+ years in the music industry, we know how to launch releases that chart." },
    { stat: 200, suffix: "+", label: "Artists Served", descriptionTemplate: "Over 200 artists trust TML to manage their music releases across {state}." },
    { stat: 3, decimals: 1, suffix: "x", label: "Stream Growth", descriptionTemplate: "{city} artists see an average 3.5x increase in streams after our release campaigns." },
    { stat: 100, suffix: "+", label: "Playlists Secured", descriptionTemplate: "We've secured placements on 100+ editorial and algorithmic playlists." },
  ],
};

/**
 * Get 4 expertise stats for a given service + location combo.
 * Picks deterministically from the expanded pool so each city gets a different set.
 */
export function getExpertiseStats(
  serviceSlug: string,
  location: LocationInfo,
): StatDef[] {
  const pool = statPools[serviceSlug];
  if (!pool) return [];
  const seed = simpleHash(serviceSlug + location.slug);
  return pickN(pool, 4, seed);
}


// ─── 3. Trust section quote variants ─────────────────────────────────────────

interface TrustQuote {
  quote: string;
  author: string;
  company: string;
  role: string;
}

const trustQuoteVariants: {
  quoteTemplate: string;
  author: string;
  company: string;
  role: string;
}[] = [
  {
    quoteTemplate: "TML completely transformed our {service} performance in {city}. The results exceeded every target we set.",
    author: "A. Sharma",
    company: "Vertex Solutions",
    role: "CEO",
  },
  {
    quoteTemplate: "Working with TML on {service} was a game-changer for our {city} operations. They delivered real, measurable outcomes.",
    author: "P. Grewal",
    company: "Oakbridge Consulting",
    role: "Marketing Director",
  },
  {
    quoteTemplate: "We evaluated five agencies for {service} in {city}. TML was the only one that backed their claims with data. No regrets.",
    author: "R. Kapoor",
    company: "NorthPeak Digital",
    role: "Founder",
  },
  {
    quoteTemplate: "Our {service} results in {city} doubled within the first quarter of working with TML. Their team genuinely cares about our growth.",
    author: "S. Bhatia",
    company: "Horizon Retail Group",
    role: "COO",
  },
  {
    quoteTemplate: "TML doesn't just execute {service} — they think strategically. That's rare in the {city} market and it shows in our numbers.",
    author: "M. Leung",
    company: "Cascadia Brands",
    role: "VP Marketing",
  },
  {
    quoteTemplate: "After years of mediocre {service} results in {city}, TML finally moved the needle. Their process is transparent and effective.",
    author: "D. Patel",
    company: "Summit Health Partners",
    role: "Managing Director",
  },
  {
    quoteTemplate: "The TML team treats our {service} budget like it's their own money. That level of accountability is why we stay in {city} and beyond.",
    author: "J. Robinson",
    company: "Ironclad Properties",
    role: "Director of Growth",
  },
  {
    quoteTemplate: "We hired TML for {service} and ended up with a long-term partner. Their {city} market knowledge is unmatched.",
    author: "K. Dhillon",
    company: "Riverstone Ventures",
    role: "CEO",
  },
  {
    quoteTemplate: "From onboarding to reporting, TML's {service} process in {city} is polished. We've recommended them to three other businesses already.",
    author: "N. Chen",
    company: "Blueark Media",
    role: "Head of Digital",
  },
  {
    quoteTemplate: "TML helped us dominate {service} in {city} when we thought the market was saturated. They found opportunities we didn't know existed.",
    author: "T. Singh",
    company: "Falcon Logistics",
    role: "Founder",
  },
  {
    quoteTemplate: "The ROI from TML's {service} work in {city} has been outstanding. They're strategic, fast, and genuinely invested in our success.",
    author: "V. Mehta",
    company: "Atlas Fintech",
    role: "CMO",
  },
  {
    quoteTemplate: "TML brought structure and strategy to our {service} in {city}. For the first time, we have predictable, scalable results.",
    author: "L. Woodward",
    company: "Crestview Dental Group",
    role: "Practice Manager",
  },
  {
    quoteTemplate: "We needed an agency that understood both {service} and the {city} market. TML nailed both from day one.",
    author: "B. Kaur",
    company: "Mapleberry Foods",
    role: "Marketing Manager",
  },
  {
    quoteTemplate: "TML's {service} team doesn't hide behind jargon. They show us real dashboards, real numbers, and real impact in {city}.",
    author: "H. Nakamura",
    company: "Pacific Edge Studios",
    role: "Creative Director",
  },
  {
    quoteTemplate: "Three months in and our {service} performance in {city} is already the best it's ever been. TML over-delivered.",
    author: "F. Johal",
    company: "Pinnacle Realty",
    role: "Director of Sales",
  },
  {
    quoteTemplate: "TML's approach to {service} in {city} is refreshingly honest. No fluff, no vanity metrics — just business impact.",
    author: "C. Anderson",
    company: "Westcoast Auto Group",
    role: "General Manager",
  },
  {
    quoteTemplate: "We switched to TML for {service} in {city} after a disappointing experience elsewhere. Best decision we made all year.",
    author: "I. Reddy",
    company: "Nimbus SaaS",
    role: "Head of Acquisition",
  },
  {
    quoteTemplate: "TML's {service} expertise gave us a competitive edge in {city} that our competitors still haven't figured out.",
    author: "E. Thompson",
    company: "Greenleaf Hospitality",
    role: "Owner",
  },
  {
    quoteTemplate: "What impressed us most was TML's speed. Our {service} campaign in {city} was live within a week and producing results within two.",
    author: "G. Sandhu",
    company: "Fortis Construction",
    role: "Business Development Manager",
  },
  {
    quoteTemplate: "TML doesn't just manage {service} for us in {city} — they educate our team along the way. That's the sign of a true partner.",
    author: "W. Huang",
    company: "BrightPath Education",
    role: "Founder & CEO",
  },
];

/**
 * Get a deterministic trust quote for a service + city combo.
 */
export function getTrustQuote(
  serviceName: string,
  cityName: string,
  seed: number,
): TrustQuote {
  const variant = pick(trustQuoteVariants, seed + simpleHash("trust"));
  return {
    quote: variant.quoteTemplate
      .replace(/{service}/g, serviceName.toLowerCase())
      .replace(/{city}/g, cityName),
    author: variant.author,
    company: variant.company,
    role: variant.role,
  };
}
