/**
 * City-specific feature and process step variants for location x service pages.
 *
 * Each service has 3 description variants per feature (by city tier) and 3
 * description variants per process step.  The deterministic hash picks a
 * variant, then {city}, {state}, and {industry} placeholders are filled with
 * real location data — so every city page gets unique copy.
 *
 * Tier definitions:
 *   tier 1 — major metros (enterprise messaging)
 *   tier 2 — mid-size / regional hubs (growth messaging)
 *   tier 3 — smaller / emerging cities (pioneer messaging)
 */

import type { LocationInfo } from "./locations";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface FeatureVariant {
  title: string;
  description: string;
}

export interface ProcessVariant {
  step: string;
  title: string;
  description: string;
}

// ─── Deterministic hash (same as cityServiceAutoContent.ts) ───────────────────

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

// ─── City-tier classification ─────────────────────────────────────────────────

const tier1Cities = new Set([
  "delhi", "mumbai", "bangalore", "hyderabad", "chennai", "kolkata", "pune",
  "noida", "gurgaon", "south-delhi",
  "london", "manchester", "birmingham", "edinburgh", "glasgow", "leeds",
  "new-york", "los-angeles", "chicago", "houston", "san-francisco",
  "seattle", "boston", "dallas", "atlanta", "philadelphia", "miami",
  "washington-dc", "denver", "austin", "san-diego",
  "sydney", "melbourne", "brisbane", "perth",
  "dubai", "abu-dhabi",
  "toronto", "edmonton", "calgary",
  "auckland",
]);

const tier2Cities = new Set([
  "ahmedabad", "jaipur", "lucknow", "surat", "indore", "nagpur",
  "chandigarh", "mohali", "ludhiana", "amritsar", "coimbatore", "kochi",
  "vadodara", "bhopal", "dehradun", "visakhapatnam", "faridabad", "ghaziabad",
  "punjab", "rajkot",
  "bristol", "liverpool", "newcastle", "nottingham", "sheffield", "cardiff",
  "brighton", "leicester", "southampton", "cambridge", "oxford",
  "charlotte", "nashville", "portland", "minneapolis", "detroit",
  "columbus", "indianapolis", "san-antonio", "jacksonville", "fort-worth",
  "phoenix", "las-vegas", "sacramento", "tampa", "orlando", "raleigh",
  "adelaide", "gold-coast", "canberra", "newcastle-au",
  "sharjah", "ajman",
  "wellington", "christchurch", "hamilton",
]);

function getCityTier(slug: string): 1 | 2 | 3 {
  if (tier1Cities.has(slug)) return 1;
  if (tier2Cities.has(slug)) return 2;
  return 3;
}

// ─── Placeholder replacer ─────────────────────────────────────────────────────

function fillPlaceholders(
  template: string,
  loc: LocationInfo,
  seed: number,
): string {
  const industry = loc.industries.length
    ? loc.industries[seed % loc.industries.length]
    : "local";
  const industry2 = loc.industries.length > 1
    ? loc.industries[(seed + 3) % loc.industries.length]
    : industry;
  return template
    .replace(/\{city\}/g, loc.name)
    .replace(/\{state\}/g, loc.state)
    .replace(/\{country\}/g, loc.country)
    .replace(/\{region\}/g, loc.region)
    .replace(/\{industry\}/g, industry)
    .replace(/\{industry2\}/g, industry2);
}

// ─── Feature description variants by service + tier ───────────────────────────
// Key: serviceSlug → array of { title, descriptions: [tier1, tier2, tier3] }

interface FeatureTemplate {
  title: string;
  descriptions: [string, string, string]; // [tier1/enterprise, tier2/growth, tier3/pioneer]
}

interface ProcessTemplate {
  step: string;
  title: string;
  descriptions: [string, string, string];
}

const featureTemplates: Record<string, FeatureTemplate[]> = {
  branding: [
    {
      title: "Brand Strategy",
      descriptions: [
        "Enterprise-level brand strategy for {city}'s competitive market — we conduct deep audience segmentation, competitor positioning audits, and differentiation mapping to give your brand a decisive edge against established players in {industry} and beyond.",
        "Growth-focused brand strategy built for {city} businesses ready to scale. We research your local market, map audience segments across {state}, and build positioning frameworks that set you apart from competitors in {industry} and {industry2}.",
        "Foundational brand strategy designed to give {city} businesses a strong start. We identify your ideal audience in {state}, study the competitive landscape, and craft a unique positioning that resonates with customers in {industry} and adjacent sectors.",
      ],
    },
    {
      title: "Logo & Visual Identity",
      descriptions: [
        "Distinctive visual identities that command attention in {city}'s saturated market. Every logo, colour palette, and typography system is stress-tested across digital, print, and environmental applications to ensure it performs for enterprise audiences in {industry}.",
        "Memorable logos and cohesive visual systems crafted for growing {city} brands. We design versatile identities that work seamlessly across your website, social channels, packaging, and signage — built to grow alongside your {industry} business.",
        "Professional visual identities that help {city} businesses make a powerful first impression. From logo design to complete colour and typography systems, we give emerging brands in {state} the polish they need to compete with established players.",
      ],
    },
    {
      title: "Brand Guidelines",
      descriptions: [
        "Comprehensive 40+ page brand guideline documents for {city} enterprises, ensuring pixel-perfect consistency across every department, franchise, and external partner. Our guidelines cover digital, print, environmental, and motion applications used by leading {industry} brands.",
        "Practical brand guidelines that keep your {city} brand consistent as you grow. From social media templates to print specifications, our guidelines ensure every team member and vendor in {state} delivers on-brand communications every time.",
        "Clear, actionable brand guidelines that empower {city} teams to maintain brand integrity from day one. We include usage rules, real-world examples, and quick-reference cards so businesses in {industry} can apply the brand correctly without design expertise.",
      ],
    },
    {
      title: "Brand Messaging",
      descriptions: [
        "Enterprise messaging frameworks for {city}'s most demanding markets — including taglines, value propositions, elevator pitches, and tone-of-voice documentation calibrated for corporate, consumer, and investor audiences across {state}.",
        "Compelling brand messaging that resonates with {city} customers. We develop your tagline, mission statement, and tone of voice with a focus on connecting emotionally with audiences in {industry} and driving measurable engagement across {state}.",
        "Authentic brand messaging that tells your {city} story. We craft taglines, mission statements, and communication guidelines that help emerging {industry} businesses in {state} connect with local audiences and build trust quickly.",
      ],
    },
    {
      title: "Stationery Design",
      descriptions: [
        "Premium corporate stationery for {city} enterprises — business cards with specialty finishes, embossed letterheads, and presentation folders that reinforce your authority in {industry} boardrooms and networking events across {state}.",
        "Professional stationery suites designed for growing {city} businesses. Business cards, letterheads, envelopes, and invoice templates that create a polished, consistent impression with every client interaction in {state}.",
        "Essential stationery design that gives {city} businesses a professional edge. We create business cards, letterheads, and corporate templates that help {industry} startups in {state} look established from their very first client meeting.",
      ],
    },
    {
      title: "Brand Audit",
      descriptions: [
        "Enterprise-grade brand audits covering 50+ touchpoints across your {city} operation — from digital channels and sales collateral to physical locations and employee communications. We benchmark against top {industry} competitors in {state} and deliver a prioritised transformation roadmap.",
        "Comprehensive brand audits for {city} businesses ready to level up. We evaluate your visual identity, messaging, digital presence, and customer perception across {state}, then deliver a clear action plan to strengthen your position in {industry}.",
        "Focused brand audits that give {city} businesses clarity on what is working and what needs improvement. We assess your current brand across key touchpoints and provide practical recommendations to strengthen your {industry} presence in {state}.",
      ],
    },
  ],

  "google-ads": [
    {
      title: "Search Campaigns",
      descriptions: [
        "Enterprise search campaigns targeting high-intent keywords across {city}'s competitive landscape. We use advanced bidding strategies, audience layering, and dynamic ad customisation to dominate search results for {industry} businesses across {state}.",
        "Results-driven search campaigns engineered for {city}'s growth market. We identify high-intent keywords your {industry} customers are searching for, craft compelling ad copy, and optimise bids to maximise conversions while controlling spend across {state}.",
        "Targeted search campaigns that put {city} businesses at the top of Google when it matters most. We research local search patterns in {state}, write persuasive ads, and manage bids strategically to bring {industry} customers to your doorstep.",
      ],
    },
    {
      title: "Display Advertising",
      descriptions: [
        "Large-scale display campaigns reaching {city}'s most valuable audiences across the Google Display Network. We deploy programmatic targeting, custom-intent audiences, and dynamic creatives to build enterprise-level brand awareness for {industry} leaders in {state}.",
        "Display advertising that puts your {city} brand in front of the right audience at the right time. We design engaging banner creatives and use precise audience targeting to drive awareness and remarketing conversions for {industry} businesses in {state}.",
        "Cost-effective display advertising that builds brand recognition for {city} businesses across {state}. We create attention-grabbing visuals and target relevant websites your {industry} audience visits to keep your brand top of mind.",
      ],
    },
    {
      title: "Shopping Ads",
      descriptions: [
        "Enterprise-scale Shopping campaigns for {city}'s largest e-commerce brands. We optimise product feeds at SKU level, deploy Smart Shopping and Performance Max strategies, and manage complex multi-brand catalogues for {industry} retailers across {state}.",
        "High-performing Shopping ads that showcase your products to {city} shoppers actively looking to buy. We optimise your product feed, structure campaigns by margin and performance, and keep your {industry} products visible across {state}.",
        "Product listing ads that help {city} businesses compete in Google Shopping. We set up your product feed, optimise titles and images, and manage bidding to ensure your {industry} products in {state} get maximum visibility at minimum cost.",
      ],
    },
    {
      title: "Remarketing",
      descriptions: [
        "Sophisticated remarketing funnels for {city} enterprises — segmented by engagement depth, purchase intent, and customer lifetime value. We deploy dynamic remarketing, RLSA, and cross-channel sequences to recapture high-value {industry} prospects across {state}.",
        "Strategic remarketing that brings {city} visitors back to convert. We build segmented audience lists based on user behaviour and serve personalised ads that address specific objections — turning window shoppers in {state} into {industry} customers.",
        "Effective remarketing campaigns that keep your {city} brand in front of interested visitors. We re-engage people who have visited your site with tailored messaging, helping {industry} businesses in {state} close more sales from existing traffic.",
      ],
    },
    {
      title: "Performance Max",
      descriptions: [
        "Enterprise Performance Max campaigns leveraging Google's full channel ecosystem for {city}'s most ambitious brands. We structure asset groups, audience signals, and conversion goals to maximise reach across Search, Display, YouTube, and Maps for {industry} leaders in {state}.",
        "AI-powered Performance Max campaigns built for growing {city} businesses. We configure audience signals, creative assets, and conversion tracking to help Google's machine learning find the best {industry} customers across every channel in {state}.",
        "Performance Max campaigns that give {city} businesses access to all of Google's advertising channels in a single campaign. We handle setup, creative assets, and ongoing optimisation so {industry} businesses in {state} get maximum results from every dollar.",
      ],
    },
    {
      title: "Analytics & Reporting",
      descriptions: [
        "Executive-level reporting dashboards for {city} enterprises, with real-time performance data, multi-touch attribution modelling, and board-ready presentations. We track every metric that matters for {industry} brands investing at scale across {state}.",
        "Transparent, actionable reporting for {city} businesses that shows exactly where your ad budget is going. Monthly dashboards include conversion tracking, ROI analysis, and optimisation recommendations specific to {industry} campaigns in {state}.",
        "Clear, straightforward reporting that helps {city} business owners understand their Google Ads performance. We break down results in plain language and provide specific recommendations to improve {industry} campaign performance across {state}.",
      ],
    },
  ],

  seo: [
    {
      title: "Technical SEO",
      descriptions: [
        "Enterprise-grade technical SEO audits covering site architecture, Core Web Vitals, JavaScript rendering, and international hreflang configurations for {city}'s most competitive {industry} markets across {state}.",
        "Comprehensive technical SEO fixes that eliminate crawl errors, improve page speed, and boost indexation — tailored for growing {city} businesses in {industry} who need a solid technical foundation across {state}.",
        "Technical SEO foundations that give {city} businesses a head start — from site speed optimisation and mobile-first indexing to structured data implementation, helping {industry} companies in {state} outperform larger competitors.",
      ],
    },
    {
      title: "On-Page SEO",
      descriptions: [
        "Advanced on-page optimisation for {city} enterprises targeting hundreds of high-value keywords. We engineer content structures, semantic markup, and internal linking architectures that dominate SERPs for competitive {industry} terms across {state}.",
        "Data-driven on-page SEO for growing {city} businesses. We optimise meta tags, headers, content structure, and internal links to help your {industry} pages rank higher and attract more qualified organic traffic from {state} searchers.",
        "Targeted on-page SEO that helps {city} businesses rank for the searches that matter most. We optimise every page element — from titles and meta descriptions to content depth and image alt text — for {industry} keywords in {state}.",
      ],
    },
    {
      title: "Content Strategy",
      descriptions: [
        "Enterprise content strategies for {city} brands, including pillar-cluster architectures, topical authority maps, and editorial calendars designed to capture search demand across the full {industry} buyer journey in {state}.",
        "Strategic content planning for {city} businesses aiming to establish authority online. We map content gaps, build topic clusters, and create editorial calendars that position your {industry} brand as the go-to resource in {state}.",
        "Practical content strategies that help {city} businesses start attracting organic traffic. We identify the keywords your {industry} audience in {state} is searching for and plan content that answers their questions and drives conversions.",
      ],
    },
    {
      title: "Link Building",
      descriptions: [
        "Authority-building link campaigns for {city}'s leading {industry} brands — earning placements on premium publications, industry directories, and high-DA domains through digital PR and strategic outreach across {state} and nationally.",
        "Quality-focused link building for {city} businesses ready to grow their domain authority. We earn relevant backlinks from authoritative sites through guest posting, outreach, and content marketing targeted at {industry} publications in {state}.",
        "Strategic link building that helps {city} businesses compete with established domains. We acquire relevant, high-quality backlinks through ethical outreach, giving {industry} companies in {state} the authority boost they need to rank.",
      ],
    },
    {
      title: "Local SEO",
      descriptions: [
        "Comprehensive local SEO for {city} enterprises operating across multiple locations in {state}. We optimise Google Business Profiles, build consistent citations, manage reviews, and dominate the map pack for high-volume {industry} searches.",
        "Local SEO strategies designed to put {city} businesses on the map — literally. We optimise your Google Business Profile, build local citations, and implement review strategies that help {industry} businesses rank in the {state} map pack.",
        "Local SEO foundations that make {city} businesses visible to nearby customers. From Google Business Profile setup to local citation building, we help {industry} businesses in {state} appear in map results and local search queries.",
      ],
    },
    {
      title: "SEO Audits",
      descriptions: [
        "Enterprise SEO audits analysing 200+ ranking factors across your {city} website — technical infrastructure, content quality, backlink profile, and competitive positioning. We deliver prioritised roadmaps for {industry} brands competing at the highest level in {state}.",
        "Thorough SEO audits for {city} businesses that uncover technical issues, content gaps, and backlink opportunities. Our audit reports include a prioritised action plan designed for {industry} companies looking to accelerate organic growth in {state}.",
        "Focused SEO audits that show {city} businesses exactly where they stand and what to fix first. We analyse your site's technical health, content, and competition to create a clear path to higher rankings for {industry} terms in {state}.",
      ],
    },
  ],

  "website-development": [
    {
      title: "Custom Web Design",
      descriptions: [
        "Bespoke UI/UX design for {city}'s leading {industry} brands — crafted to convert enterprise audiences with intuitive navigation, advanced interaction patterns, and pixel-perfect responsive layouts that set the standard in {state}.",
        "Custom web designs built for growing {city} businesses. We create intuitive, conversion-focused interfaces that reflect your brand personality and guide {industry} visitors in {state} toward the actions that matter most to your business.",
        "Professional web design that gives {city} businesses a competitive online presence. We build clean, mobile-responsive websites tailored to {industry} audiences in {state}, with layouts designed to convert visitors into customers.",
      ],
    },
    {
      title: "E-Commerce Development",
      descriptions: [
        "Enterprise e-commerce platforms for {city}'s largest {industry} retailers — Shopify Plus, custom WooCommerce, or headless architectures with multi-currency, inventory management, and ERP integrations serving customers across {state} and internationally.",
        "Scalable e-commerce stores for growing {city} businesses. We build Shopify, WooCommerce, or custom solutions with seamless checkout flows, inventory management, and payment integrations tailored for {industry} brands expanding across {state}.",
        "E-commerce development that helps {city} businesses start selling online with confidence. We build user-friendly stores on Shopify or WooCommerce, with secure payments and straightforward product management for {industry} businesses in {state}.",
      ],
    },
    {
      title: "CMS Development",
      descriptions: [
        "Enterprise CMS solutions for {city} organisations managing complex content workflows — headless architectures, multi-site networks, and custom admin panels with role-based permissions for {industry} teams across {state}.",
        "Flexible CMS development for {city} businesses that need to manage content independently. We build WordPress, Webflow, or headless solutions with custom content types and intuitive admin panels for {industry} teams in {state}.",
        "User-friendly CMS websites that empower {city} businesses to update content without developer help. We set up WordPress or Webflow with easy-to-use editing tools, perfect for {industry} teams in {state} who want control over their site.",
      ],
    },
    {
      title: "Landing Pages",
      descriptions: [
        "High-converting landing pages for {city} enterprises running large-scale acquisition campaigns. We build A/B testing frameworks, dynamic content personalisation, and multi-variant layouts optimised for {industry} conversion benchmarks across {state}.",
        "Conversion-focused landing pages for {city} businesses running paid campaigns. Each page is built with persuasive copy structures, fast load times, and optimised forms to maximise lead capture from {industry} audiences in {state}.",
        "Effective landing pages that help {city} businesses turn ad clicks into leads. We design clean, fast-loading pages with clear calls to action, tailored for {industry} campaigns targeting customers in {state}.",
      ],
    },
    {
      title: "Web Applications",
      descriptions: [
        "Enterprise web applications for {city}'s most demanding {industry} businesses — built with React, Next.js, or custom architectures featuring real-time data, API orchestration, and security compliance standards required across {state}.",
        "Custom web applications for growing {city} businesses with complex needs. We build scalable, secure apps with React or Next.js, featuring API integrations and real-time features for {industry} workflows in {state}.",
        "Custom web apps that solve real problems for {city} businesses. We develop straightforward, reliable applications with modern frameworks, helping {industry} companies in {state} automate processes and serve customers better.",
      ],
    },
    {
      title: "Maintenance & Support",
      descriptions: [
        "Enterprise-tier website maintenance for {city}'s mission-critical {industry} platforms — 24/7 monitoring, automated backups, security patching, performance optimisation, and dedicated support SLAs for businesses across {state}.",
        "Reliable website maintenance for growing {city} businesses. We handle security updates, performance monitoring, regular backups, and priority bug fixes so your {industry} website in {state} stays fast, secure, and up to date.",
        "Affordable website maintenance that keeps {city} business websites running smoothly. We handle updates, backups, and security monitoring so {industry} business owners in {state} can focus on what they do best.",
      ],
    },
  ],

  "social-media": [
    {
      title: "Content Creation",
      descriptions: [
        "High-production content for {city}'s leading {industry} brands — scroll-stopping reels, premium carousels, and story sequences crafted to set trends and drive engagement at enterprise scale across {state}.",
        "Engaging social media content built for growing {city} businesses. We create platform-native posts, reels, and stories that resonate with {industry} audiences in {state} and keep your brand visible in competitive feeds.",
        "Consistent, on-brand social content that helps {city} businesses build an audience. We create posts, stories, and reels tailored for {industry} customers in {state}, keeping your feed active without draining your team's time.",
      ],
    },
    {
      title: "Community Management",
      descriptions: [
        "Enterprise community management for {city}'s most active {industry} brands — real-time engagement, crisis response protocols, sentiment monitoring, and VIP audience nurturing across platforms in {state}.",
        "Active community management that builds real relationships for {city} brands. We respond to comments, DMs, and mentions thoughtfully, turning {industry} followers in {state} into loyal customers and vocal advocates.",
        "Responsive community management that keeps {city} businesses connected with their audience. We handle comments, messages, and reviews so {industry} customers in {state} always feel heard and valued.",
      ],
    },
    {
      title: "Paid Social Ads",
      descriptions: [
        "Large-scale paid social campaigns for {city} enterprises — advanced audience modelling, dynamic creative optimisation, and full-funnel attribution across Meta, LinkedIn, and TikTok for {industry} brands competing in {state}.",
        "Targeted paid social campaigns for growing {city} businesses. We build custom audiences, design thumb-stopping creatives, and optimise ad spend to deliver qualified {industry} leads and customers across {state}.",
        "Cost-effective social media ads that help {city} businesses reach the right people. We set up targeted campaigns on Meta and LinkedIn to connect {industry} businesses in {state} with their ideal customers.",
      ],
    },
    {
      title: "Influencer Partnerships",
      descriptions: [
        "Strategic influencer programmes for {city}'s leading {industry} brands — macro and micro influencer networks, brand ambassador contracts, and performance-tracked campaigns with reach across {state} and nationally.",
        "Influencer collaborations that amplify {city} brands to engaged local audiences. We identify, vet, and manage influencer partnerships that connect your {industry} business with authentic voices in {state}.",
        "Micro-influencer partnerships that put {city} businesses in front of real, engaged audiences. We find creators in {state} who genuinely connect with {industry} customers and manage the entire collaboration process.",
      ],
    },
    {
      title: "Analytics & Strategy",
      descriptions: [
        "Executive-level social analytics for {city} enterprises — competitive benchmarking, sentiment analysis, audience intelligence, and strategy pivots backed by data for {industry} brands operating across {state}.",
        "Data-driven social strategy for growing {city} businesses. We track engagement, reach, and conversion metrics monthly, then adjust content and targeting to accelerate growth for {industry} brands in {state}.",
        "Straightforward social media analytics that show {city} business owners what is working and what to change. We report on the metrics that matter for {industry} businesses in {state} and recommend clear next steps.",
      ],
    },
    {
      title: "Profile Optimization",
      descriptions: [
        "Complete profile overhauls for {city}'s most visible {industry} brands — bio engineering, highlight architecture, link-in-bio funnels, and cross-platform consistency audits across every channel in {state}.",
        "Social profile optimisation that makes a strong first impression for {city} businesses. We refine bios, highlight covers, and link structures across platforms so {industry} audiences in {state} immediately see your credibility.",
        "Professional profile setup that helps {city} businesses look established and trustworthy online. We optimise bios, images, and links so {industry} prospects in {state} know exactly who you are and what you offer.",
      ],
    },
  ],

  "ai-influencer-management": [
    {
      title: "AI Persona Creation",
      descriptions: [
        "Enterprise-tier AI persona development for {city}'s most innovative {industry} brands — photo-realistic virtual influencers with deep backstories, consistent visual identities, and personality engines designed for mass audience appeal across {state}.",
        "Custom AI persona creation for {city} businesses exploring the next frontier of marketing. We design unique virtual influencers with consistent looks and personalities that resonate with {industry} audiences in {state}.",
        "AI influencer personas designed to help {city} businesses stand out. We create virtual characters with compelling visual identities and brand-aligned personalities that capture attention in {industry} communities across {state}.",
      ],
    },
    {
      title: "Content Generation",
      descriptions: [
        "High-volume AI content pipelines for {city} enterprises — delivering hundreds of on-brand images, videos, and stories monthly featuring your virtual influencer in scenarios that resonate with {industry} audiences across {state}.",
        "Consistent AI-generated content for growing {city} brands. We produce photo-realistic images, videos, and stories featuring your virtual influencer in diverse settings relevant to {industry} audiences across {state}.",
        "Regular AI influencer content that keeps {city} brands active on social media. We generate engaging photos and stories featuring your virtual persona in scenarios that {industry} followers in {state} will relate to.",
      ],
    },
    {
      title: "Campaign Strategy",
      descriptions: [
        "Multi-channel campaign strategies for {city}'s most forward-thinking {industry} brands, deploying AI influencers across product launches, brand activations, and sustained awareness campaigns with full attribution tracking in {state}.",
        "Strategic campaign planning that leverages AI influencers to grow {city} brands. We design launch sequences, ongoing content arcs, and engagement tactics tailored for {industry} audiences in {state}.",
        "Focused campaign strategies that help {city} businesses get real results from AI influencer marketing. We plan content calendars and engagement campaigns designed for {industry} audiences in {state}.",
      ],
    },
    {
      title: "Cross-Platform Management",
      descriptions: [
        "Enterprise cross-platform management for AI influencers representing {city}'s top {industry} brands — synchronised content rollouts, platform-specific optimisation, and audience growth strategies spanning Instagram, TikTok, YouTube, and emerging channels across {state}.",
        "Multi-platform AI influencer management for growing {city} businesses. We adapt content formats and engagement strategies for Instagram, TikTok, and YouTube to build a cohesive {industry} following across {state}.",
        "Streamlined cross-platform management that keeps your AI influencer active everywhere {city}'s {industry} audience spends time. We handle posting, formatting, and engagement across all major platforms in {state}.",
      ],
    },
    {
      title: "Brand Collaborations",
      descriptions: [
        "High-value brand partnership programmes for {city}'s AI influencers — sourcing, negotiating, and executing collaborations with premium {industry} brands across {state} and nationally.",
        "Strategic brand collaborations that monetise your AI influencer's audience in {city}. We connect your virtual persona with relevant {industry} brands in {state} and manage campaigns from brief to delivery.",
        "Brand collaboration opportunities that help {city} businesses unlock new revenue through their AI influencer. We find and manage partnerships with {industry} companies in {state} that align with your virtual persona.",
      ],
    },
    {
      title: "Analytics & Growth",
      descriptions: [
        "Enterprise analytics dashboards tracking every engagement metric, audience demographic, and revenue attribution for AI influencers representing {city}'s leading {industry} brands across {state}.",
        "Growth-focused analytics for {city} businesses investing in AI influencer marketing. We track engagement, follower growth, and campaign ROI to continuously refine your {industry} strategy in {state}.",
        "Clear analytics that show {city} businesses exactly how their AI influencer is performing. We track the metrics that matter for {industry} growth and recommend practical optimisations for {state} audiences.",
      ],
    },
  ],

  "lead-generation": [
    {
      title: "Landing Page Design",
      descriptions: [
        "Enterprise landing page systems for {city}'s highest-volume {industry} lead gen operations — dynamic content personalisation, multi-variant testing frameworks, and conversion architectures proven across campaigns in {state}.",
        "High-converting landing pages designed for {city} businesses scaling their lead pipeline. We build persuasive, mobile-optimised pages with proven layouts that capture {industry} leads efficiently across {state}.",
        "Effective landing pages that help {city} businesses capture more leads from their marketing spend. We design clean, fast pages with compelling offers tailored for {industry} audiences in {state}.",
      ],
    },
    {
      title: "Lead Magnets",
      descriptions: [
        "Premium lead magnets for {city} enterprises — industry reports, ROI calculators, assessment tools, and executive-level content assets that attract decision-makers in {industry} across {state}.",
        "Valuable lead magnets that attract {city}'s ideal {industry} customers. We create ebooks, templates, webinars, and resource guides that address the specific pain points of businesses in {state}.",
        "Practical lead magnets that give {city} visitors a reason to share their contact details. We develop useful resources — guides, checklists, and templates — tailored for {industry} businesses in {state}.",
      ],
    },
    {
      title: "Email Marketing",
      descriptions: [
        "Enterprise email automation for {city}'s most sophisticated {industry} sales operations — multi-touch nurture sequences, behavioural triggers, lead scoring integration, and sales-handoff workflows serving the {state} market.",
        "Automated email sequences that nurture {city} leads from enquiry to sale. We build personalised nurture campaigns with strategic timing and content tailored for {industry} prospects in {state}.",
        "Simple but effective email nurture sequences for {city} businesses. We set up automated follow-ups that keep {industry} leads in {state} engaged and guide them toward booking a call or making a purchase.",
      ],
    },
    {
      title: "Paid Lead Gen",
      descriptions: [
        "Enterprise-scale paid lead generation across Google, Meta, and LinkedIn for {city}'s top {industry} brands. We deploy advanced audience modelling, creative testing, and attribution frameworks to acquire leads at scale across {state}.",
        "Multi-channel paid lead gen campaigns for growing {city} businesses. We run targeted ads on Google, Meta, and LinkedIn to deliver a steady flow of qualified {industry} leads from across {state}.",
        "Targeted paid campaigns that bring qualified leads to {city} businesses. We run focused ads on the channels where {industry} customers in {state} are most active, keeping your cost per lead low.",
      ],
    },
    {
      title: "CRM Integration",
      descriptions: [
        "Enterprise CRM integrations for {city}'s most complex {industry} sales operations — HubSpot, Salesforce, or custom CRM configurations with lead scoring, pipeline automation, and real-time routing across {state} territories.",
        "Seamless CRM integration that helps {city} businesses track and manage every lead. We connect your forms and campaigns with HubSpot, Salesforce, or Zoho to ensure no {industry} lead in {state} falls through the cracks.",
        "Straightforward CRM setup that organises leads for {city} businesses. We connect your lead capture forms to your CRM so every {industry} enquiry from {state} is tracked, scored, and followed up on automatically.",
      ],
    },
    {
      title: "Conversion Optimization",
      descriptions: [
        "Enterprise CRO programmes for {city}'s highest-traffic {industry} funnels — multivariate testing, heatmap analysis, session recordings, and statistical modelling to extract maximum conversions from every visitor in {state}.",
        "Continuous conversion optimisation for growing {city} businesses. We A/B test headlines, forms, CTAs, and page layouts to improve {industry} lead quality and reduce cost per acquisition across {state}.",
        "Practical conversion improvements that help {city} businesses get more leads from existing traffic. We test and refine key page elements to boost conversion rates for {industry} campaigns in {state}.",
      ],
    },
  ],

  "music-release": [
    {
      title: "Distribution Setup",
      descriptions: [
        "Full-service distribution for {city}'s established {industry} artists — Spotify, Apple Music, Tidal, and 150+ platforms with priority delivery, pre-save campaigns, and metadata optimisation for maximum algorithmic reach in {state} and globally.",
        "Complete distribution setup for rising {city} artists. We get your music on Spotify, Apple Music, YouTube Music, and all major platforms with optimised metadata and strategic release scheduling to build your audience across {state}.",
        "Simple, thorough distribution that gets {city} artists heard. We set up your music across 150+ streaming platforms, handle all metadata, and schedule releases so emerging {industry} talent in {state} reaches listeners everywhere.",
      ],
    },
    {
      title: "Playlist Pitching",
      descriptions: [
        "Premium playlist pitching for {city}'s top-tier artists — editorial, algorithmic, and high-impact independent playlists with curator relationships built over years. We position {industry} artists from {state} for sustained streaming growth.",
        "Strategic playlist pitching for growing {city} artists. We craft compelling pitch narratives and leverage curator relationships to place your music on playlists that drive real streams and discovery across {state}.",
        "Focused playlist pitching that gives {city} artists their best chance at discovery. We submit your tracks to relevant editorial and independent playlists, building streaming momentum for {industry} talent in {state}.",
      ],
    },
    {
      title: "Social Media Campaigns",
      descriptions: [
        "Multi-platform launch campaigns for {city}'s biggest releases — pre-release teasers, launch-day activations, sustain-phase content, and paid amplification strategies that maximise streams for {industry} artists across {state}.",
        "Engaging social media campaigns for {city} artists building their fanbase. We create buzz-worthy content — teasers, lyric clips, and behind-the-scenes posts — that drive engagement and streams across {state}.",
        "Social media promotion that helps {city} artists build a following with each release. We create shareable content and run targeted campaigns to get {industry} music in front of the right audiences in {state}.",
      ],
    },
    {
      title: "Music Video Production",
      descriptions: [
        "Cinematic music video production for {city}'s most ambitious {industry} artists — concept development, location scouting, professional cinematography, and post-production that meets broadcast and festival standards across {state}.",
        "Professional music video production for rising {city} artists. We handle concept development, filming direction, and full post-production to create visuals that elevate your music and engage {industry} fans in {state}.",
        "Affordable music video production that helps {city} artists visualise their sound. We bring creative concepts to life with quality filming and editing, giving emerging {industry} talent in {state} professional visuals.",
      ],
    },
    {
      title: "PR & Press Coverage",
      descriptions: [
        "Premium press campaigns for {city}'s top {industry} artists — coverage in major music publications, national media features, and interview placements that build the kind of credibility that opens doors across {state} and internationally.",
        "Music PR that gets {city} artists noticed. We pitch to music blogs, magazines, and online publications, securing reviews and features that build credibility for {industry} artists growing their profile in {state}.",
        "Targeted press outreach for {city} artists ready to be discovered. We write press releases, pitch to relevant journalists, and secure coverage that introduces {industry} music from {state} to new audiences.",
      ],
    },
    {
      title: "Artist Branding",
      descriptions: [
        "Complete brand identity systems for {city}'s professional {industry} artists — visual branding, EPK design, merchandise concepts, and social media aesthetics that command attention in {state}'s competitive music scene.",
        "Cohesive artist branding for {city} musicians building a recognisable identity. We craft visual identities, EPKs, and social aesthetics that set {industry} artists apart in {state}'s growing music scene.",
        "Professional artist branding that helps {city} musicians make a strong first impression. We design logos, EPKs, and social media aesthetics that give emerging {industry} artists in {state} a polished, memorable image.",
      ],
    },
  ],

  "video-editing": [
    {
      title: "Social Media Videos",
      descriptions: [
        "High-volume social video production for {city}'s leading {industry} brands — scroll-stopping reels, TikToks, and shorts crafted with trending formats, platform-specific optimisation, and rapid turnaround for brands dominating feeds across {state}.",
        "Engaging social media videos for growing {city} businesses. We edit reels, TikToks, and short-form content with trending formats and dynamic transitions that maximise watch time for {industry} audiences in {state}.",
        "Social media videos that help {city} businesses capture attention on every platform. We create short, punchy clips optimised for Instagram, TikTok, and YouTube that {industry} audiences in {state} actually want to watch.",
      ],
    },
    {
      title: "Corporate Videos",
      descriptions: [
        "Premium corporate films for {city}'s leading {industry} enterprises — brand documentaries, investor presentations, and culture videos produced to the highest standards for audiences across {state} and internationally.",
        "Professional corporate videos for growing {city} businesses. We craft narratives that showcase your company values, team, and expertise in a way that builds trust with {industry} clients and partners in {state}.",
        "Corporate videos that tell your {city} business story effectively. We produce clean, professional company films, team introductions, and testimonials that help {industry} businesses in {state} build credibility.",
      ],
    },
    {
      title: "Commercial Production",
      descriptions: [
        "Broadcast-quality commercial production for {city}'s top {industry} brands — high-concept advertising films for TV, YouTube pre-rolls, and connected TV campaigns with production values that compete nationally and across {state}.",
        "Impactful commercial videos for growing {city} businesses. We combine creative storytelling with persuasive messaging to produce ads that capture attention and drive conversions for {industry} brands in {state}.",
        "Effective commercial videos that help {city} businesses advertise with confidence. We create professional ads for YouTube, social media, and digital campaigns tailored for {industry} audiences in {state}.",
      ],
    },
    {
      title: "Motion Graphics",
      descriptions: [
        "Enterprise motion design for {city}'s leading {industry} brands — animated brand elements, data visualisations, explainer sequences, and dynamic title systems for presentations and campaigns across {state}.",
        "Custom motion graphics for growing {city} businesses. We create animated logos, explainer videos, and dynamic visual effects that simplify complex {industry} concepts and captivate audiences across {state}.",
        "Motion graphics that make {city} business content stand out. We design animated elements, logo animations, and visual effects that add polish to {industry} videos and presentations in {state}.",
      ],
    },
    {
      title: "Color Grading",
      descriptions: [
        "Cinema-grade colour work for {city}'s premium {industry} brands — look development, scene matching, and HDR grading that establishes a visual signature across all video content in {state}.",
        "Professional colour grading for {city} businesses that want a polished, cinematic look. We establish visual mood and consistency across every shot, ensuring your {industry} content in {state} looks its best.",
        "Quality colour correction that gives {city} business videos a professional finish. We balance exposure, match scenes, and apply grading that elevates {industry} content in {state} above amateur-looking footage.",
      ],
    },
    {
      title: "Post-Production",
      descriptions: [
        "Full-service post-production for {city}'s most demanding {industry} projects — sound design, Foley, voiceover integration, multi-language subtitling, and delivery in broadcast-standard formats for distribution across {state} and internationally.",
        "Complete post-production for growing {city} businesses. We handle sound design, voiceover integration, subtitle creation, and final mastering to deliver broadcast-quality {industry} content for audiences across {state}.",
        "Reliable post-production services for {city} businesses. We add sound design, subtitles, and final polish to your {industry} video content, delivering finished files ready for any platform in {state}.",
      ],
    },
  ],

  "branding-packaging": [
    {
      title: "Product Packaging",
      descriptions: [
        "Premium packaging design for {city}'s top {industry} brands — shelf-dominating concepts backed by consumer psychology research, retailer requirements analysis, and production expertise for large-scale distribution across {state}.",
        "Eye-catching product packaging for growing {city} businesses. We design retail-ready packaging that stands out on shelves, communicates value, and drives purchase decisions for {industry} products across {state}.",
        "Professional packaging design that helps {city} businesses compete on the shelf. We create attractive, practical packaging tailored for {industry} products in {state}, from concept sketches to print-ready files.",
      ],
    },
    {
      title: "Label Design",
      descriptions: [
        "Regulatory-compliant label design for {city}'s largest {industry} brands — meeting FSSAI, BIS, FDA, and international standards while delivering visual impact that commands attention on retail shelves across {state}.",
        "Professional label design for growing {city} businesses. We balance visual appeal with information hierarchy and regulatory compliance, creating labels that sell {industry} products across retail channels in {state}.",
        "Clean, compliant label design for {city} businesses entering the market. We create labels that meet regulatory requirements and look great on shelves, helping {industry} products in {state} earn consumer trust.",
      ],
    },
    {
      title: "Box & Container Design",
      descriptions: [
        "Structural packaging engineering for {city}'s leading {industry} brands — custom box forms, innovative container designs, and sustainable packaging solutions optimised for production, shipping, and shelf display across {state}.",
        "Custom box and container design for growing {city} businesses. We create packaging structures that are visually distinctive, functionally practical, and cost-effective for {industry} products distributed across {state}.",
        "Practical box and container design for {city} businesses. We develop packaging structures that protect your {industry} product, look professional, and are affordable to produce for distribution in {state}.",
      ],
    },
    {
      title: "Unboxing Experience",
      descriptions: [
        "Luxury unboxing experiences for {city}'s premium {industry} brands — inner packaging, tissue paper, stickers, thank-you cards, and sensory details designed to generate social shares and strengthen brand loyalty across {state}.",
        "Memorable unboxing experiences for growing {city} brands. We design the complete unboxing journey — inner packaging, inserts, and finishing touches — that encourage {industry} customers in {state} to share on social media.",
        "Thoughtful unboxing touches that help {city} businesses leave a lasting impression. We design inserts, stickers, and packaging details that turn {industry} deliveries in {state} into share-worthy moments.",
      ],
    },
    {
      title: "Mockup & Prototyping",
      descriptions: [
        "Photo-realistic 3D mockups and production prototypes for {city}'s leading {industry} brands — enabling stakeholder presentations, retailer pitches, and consumer testing before committing to production runs across {state}.",
        "Realistic mockups and prototypes for {city} businesses preparing to launch. We create 3D visualisations that help you evaluate designs, pitch to retailers, and make confident decisions for {industry} products in {state}.",
        "Affordable mockups that show {city} businesses exactly how their packaging will look before printing. We create 3D renders so {industry} businesses in {state} can review and approve designs with confidence.",
      ],
    },
    {
      title: "Print Coordination",
      descriptions: [
        "Enterprise print management for {city}'s largest {industry} packaging runs — pre-press file preparation, colour proofing, material sourcing, and production oversight ensuring consistency across millions of units in {state}.",
        "Professional print coordination for growing {city} businesses. We prepare production-ready files, manage colour proofing, and work with trusted printers to ensure your {industry} packaging in {state} comes out exactly right.",
        "Straightforward print coordination that takes the stress out of production for {city} businesses. We prepare files and work with printers to deliver {industry} packaging in {state} that matches the approved design.",
      ],
    },
  ],

  "graphic-design": [
    {
      title: "Social Media Creatives",
      descriptions: [
        "Premium social media design for {city}'s most visible {industry} brands — trend-setting creatives, template systems, and campaign-scale production delivering hundreds of assets monthly across {state}.",
        "Scroll-stopping social media creatives for growing {city} businesses. We design platform-optimised graphics, carousels, and stories that drive engagement for {industry} brands across {state}.",
        "Consistent, professional social media graphics for {city} businesses. We create branded posts, stories, and ad creatives that keep {industry} brands in {state} looking polished and active on every platform.",
      ],
    },
    {
      title: "Print Design",
      descriptions: [
        "Premium print collateral for {city}'s leading {industry} brands — brochures, annual reports, large-format displays, and event materials designed to the highest production standards across {state}.",
        "Professional print design for growing {city} businesses. We create brochures, flyers, posters, and banners that make a strong impression at trade shows, events, and customer touchpoints across {state}.",
        "Quality print materials that help {city} businesses market offline. We design flyers, brochures, and banners tailored for {industry} businesses in {state}, with files ready for any printer.",
      ],
    },
    {
      title: "Presentation Design",
      descriptions: [
        "Executive presentation design for {city}'s top {industry} brands — investor decks, board presentations, and sales collateral with premium visuals, data storytelling, and narrative flow that close seven-figure deals across {state}.",
        "Professional presentation design for growing {city} businesses. We transform complex information into compelling pitch decks and sales collateral that help {industry} companies in {state} win more business.",
        "Clean, effective presentation design for {city} businesses. We create pitch decks and sales materials that communicate your {industry} value proposition clearly to audiences in {state}.",
      ],
    },
    {
      title: "Infographic Design",
      descriptions: [
        "Data-rich infographics for {city}'s leading {industry} brands — transforming complex research, statistics, and market data into visually compelling assets that earn links, shares, and media coverage across {state}.",
        "Engaging infographic design for growing {city} businesses. We turn complex {industry} data into visually digestible graphics that audiences in {state} understand, share, and reference.",
        "Clear infographics that help {city} businesses communicate complex information simply. We design visual summaries of {industry} data, processes, and comparisons for audiences in {state}.",
      ],
    },
    {
      title: "Ad Creatives",
      descriptions: [
        "High-performance ad creative systems for {city}'s largest {industry} advertisers — multi-variant display ads, responsive banners, and campaign suites designed for A/B testing at scale across {state}.",
        "Click-worthy ad creatives for growing {city} businesses. We design multiple banner variants, social ads, and display creatives optimised for conversions across Google and social platforms in {state}.",
        "Effective ad creatives that help {city} businesses get more from their advertising budget. We design eye-catching banners and social ads for {industry} campaigns targeting customers in {state}.",
      ],
    },
    {
      title: "Illustration",
      descriptions: [
        "Custom illustration programmes for {city}'s most distinctive {industry} brands — bespoke artwork, icon systems, and visual storytelling elements that create a signature aesthetic across all communications in {state}.",
        "Custom illustrations for growing {city} businesses. We create unique artwork, icons, and visual elements that give your {industry} brand in {state} a distinctive identity beyond stock imagery.",
        "Original illustrations that help {city} businesses stand out visually. We create custom icons, spot illustrations, and artwork that give {industry} brands in {state} a unique, memorable look.",
      ],
    },
  ],
};

// ─── Process step variants by service + tier ──────────────────────────────────

const processTemplates: Record<string, ProcessTemplate[]> = {
  branding: [
    {
      step: "01", title: "Discovery",
      descriptions: [
        "In-depth immersion into your {city} enterprise — stakeholder interviews, customer research, competitor audits across {state}, and market positioning workshops to map your brand DNA.",
        "We dive into your {city} business — understanding your goals, audience, and how you compete in {industry} across {state} to lay the groundwork for a brand that resonates.",
        "We get to know your {city} business inside out — your story, your customers, and what makes you different from other {industry} businesses in {state}.",
      ],
    },
    {
      step: "02", title: "Strategy",
      descriptions: [
        "Develop enterprise positioning strategy with messaging architecture, audience persona frameworks, and creative briefs calibrated for {city}'s competitive {industry} landscape across {state}.",
        "Build your brand positioning, messaging framework, and creative direction based on {city} market insights and {industry} audience expectations in {state}.",
        "Craft a clear brand strategy that positions your {city} business for success — defining who you are, what you stand for, and how you connect with {industry} customers in {state}.",
      ],
    },
    {
      step: "03", title: "Design",
      descriptions: [
        "Create three enterprise-grade identity concepts — complete systems including logo, typography, colour, and applications tested against {industry} brand standards across {state} and {city}.",
        "Design visual identity concepts exploring different creative directions — logo, colours, typography, and brand elements tailored for your {city} market and {industry} audience in {state}.",
        "Bring your brand to life with logo concepts, colour palettes, and visual elements designed to make your {city} business stand out in {industry} across {state}.",
      ],
    },
    {
      step: "04", title: "Refine",
      descriptions: [
        "Systematic refinement through structured feedback rounds — stress-testing every element for consistency across {city} enterprise touchpoints and {industry} applications in {state}.",
        "Iterate on the chosen direction based on your feedback, ensuring every element perfectly represents your {city} brand vision for {industry} audiences in {state}.",
        "Polish the design based on your input until every element feels right for your {city} business and connects with {industry} customers in {state}.",
      ],
    },
    {
      step: "05", title: "Deliver",
      descriptions: [
        "Comprehensive handover including 40+ page brand guidelines, complete asset library, team training, and a 90-day implementation roadmap for {city} enterprise rollout across {state}.",
        "Hand over complete brand guidelines, logo files, templates, and practical assets your {city} team needs to maintain consistency across every {industry} touchpoint in {state}.",
        "Deliver everything your {city} team needs — logo files, brand guidelines, and ready-to-use templates so you can start applying your new {industry} brand identity across {state} immediately.",
      ],
    },
  ],

  "google-ads": [
    {
      step: "01", title: "Audit",
      descriptions: [
        "Enterprise-level audit of existing campaigns, account structure, and competitor strategies across {city}'s {industry} vertical in {state} — identifying seven-figure optimisation opportunities.",
        "Review your existing campaigns and analyse competitors in {city}'s {industry} market to identify quick wins and strategic opportunities across {state}.",
        "Audit your current Google Ads setup and research what {industry} competitors in {city} are doing, so we know exactly where to focus your budget in {state}.",
      ],
    },
    {
      step: "02", title: "Strategy",
      descriptions: [
        "Build enterprise campaign architecture with advanced audience segmentation, keyword mapping, budget allocation modelling, and bid strategy frameworks for {city}'s {industry} market across {state}.",
        "Develop campaign structure, keyword lists, audience targeting, and budget allocation specifically for your {city} {industry} business and the {state} market.",
        "Plan a focused campaign strategy — choosing the right keywords, audiences, and budget split to get your {city} {industry} business in front of the right customers in {state}.",
      ],
    },
    {
      step: "03", title: "Launch",
      descriptions: [
        "Deploy campaigns with advanced conversion tracking, cross-channel attribution, and enterprise ad extensions — targeting {city}'s highest-value {industry} segments across {state}.",
        "Launch campaigns with optimised ad copy, extensions, landing pages, and conversion tracking set up to capture {industry} customers across {city} and {state}.",
        "Go live with well-structured campaigns, compelling ads, and tracking in place — putting your {city} {industry} business in front of customers searching in {state}.",
      ],
    },
    {
      step: "04", title: "Optimize",
      descriptions: [
        "Continuous enterprise optimisation — A/B testing at scale, automated bid rules, quality score engineering, and machine learning feedback loops for {city}'s competitive {industry} landscape in {state}.",
        "Continuously A/B test ads, refine bids, and improve quality scores to drive better results for your {city} {industry} campaigns across {state}.",
        "Regularly review and improve your campaigns — testing new ads, adjusting bids, and cutting waste to get your {city} {industry} business the best return in {state}.",
      ],
    },
    {
      step: "05", title: "Scale",
      descriptions: [
        "Strategic expansion into new channels, audiences, and {industry} verticals — scaling proven campaigns with controlled budget increases across {city}, {state}, and new markets.",
        "Expand successful campaigns, test new channels, and increase budget where ROI is proven for your {city} {industry} business across {state}.",
        "Grow what is working — scaling your best-performing campaigns and exploring new opportunities to bring more {industry} customers to your {city} business in {state}.",
      ],
    },
  ],

  seo: [
    {
      step: "01", title: "Audit",
      descriptions: [
        "Enterprise SEO audit covering 200+ ranking factors — technical infrastructure, content depth, backlink quality, and competitive gaps for {city}'s {industry} market across {state}.",
        "Complete technical and content audit of your {city} website to uncover every issue and opportunity affecting your {industry} rankings in {state}.",
        "A thorough site audit that shows your {city} business exactly what is holding back your {industry} rankings and what to fix first in {state}.",
      ],
    },
    {
      step: "02", title: "Research",
      descriptions: [
        "Enterprise keyword intelligence — search demand mapping, SERP feature analysis, content gap modelling, and competitor reverse-engineering for {city}'s {industry} landscape across {state}.",
        "In-depth keyword research, competitor analysis, and content gap mapping to build a data-driven SEO strategy for your {city} {industry} business in {state}.",
        "Research the keywords your {industry} customers in {city} actually search for, analyse what competitors rank for, and identify the biggest opportunities in {state}.",
      ],
    },
    {
      step: "03", title: "Optimize",
      descriptions: [
        "Large-scale technical remediation and on-page optimisation — site architecture overhauls, schema deployment, and content engineering for {city}'s most competitive {industry} terms in {state}.",
        "Fix technical issues, optimise on-page elements, and restructure content to help your {city} {industry} pages rank higher and load faster across {state}.",
        "Make the technical fixes and on-page improvements that move the needle for your {city} {industry} site — from meta tags and headers to site speed and mobile experience in {state}.",
      ],
    },
    {
      step: "04", title: "Create",
      descriptions: [
        "Enterprise content production — pillar pages, topic clusters, and authority-building content assets targeting high-value {industry} keywords in {city} and across {state}.",
        "Develop and publish optimised content targeting the {industry} keywords that drive qualified traffic to your {city} business from across {state}.",
        "Create useful, well-optimised content that answers what {industry} customers in {city} are searching for and helps your site rank higher in {state}.",
      ],
    },
    {
      step: "05", title: "Build",
      descriptions: [
        "Sustained authority building through digital PR, strategic link acquisition, and competitive monitoring — growing your {city} {industry} brand's domain authority across {state}.",
        "Acquire quality backlinks and build domain authority through outreach and content marketing, continuously refining your {city} {industry} SEO strategy across {state}.",
        "Build the backlinks and authority your {city} {industry} site needs to rank, with ongoing monitoring and strategy adjustments as your presence in {state} grows.",
      ],
    },
  ],

  "website-development": [
    {
      step: "01", title: "Discovery",
      descriptions: [
        "Enterprise requirements gathering — stakeholder workshops, technical architecture planning, integration mapping, and UX research for {city}'s {industry} audience across {state}.",
        "Understand your {city} business goals, {industry} audience needs, and technical requirements through detailed consultation and research across {state}.",
        "Get to know your {city} business, your {industry} customers in {state}, and what your website needs to achieve — so we build the right solution from the start.",
      ],
    },
    {
      step: "02", title: "Wireframe",
      descriptions: [
        "Enterprise information architecture — detailed site maps, user flow diagrams, and interactive wireframes tested against {industry} UX benchmarks for {city} audiences in {state}.",
        "Create site architecture, user flows, and wireframes that map out the optimal journey for {industry} visitors from {city} and across {state}.",
        "Plan your site structure and page layouts with wireframes that ensure {industry} visitors from {city} and {state} can find what they need quickly.",
      ],
    },
    {
      step: "03", title: "Design",
      descriptions: [
        "High-fidelity UI design with interaction prototyping — pixel-perfect responsive layouts crafted for enterprise {industry} audiences in {city} and tested across devices common in {state}.",
        "Craft high-fidelity mockups with your brand aesthetics, ensuring responsive design that looks great for {industry} visitors across {city} and {state} on every device.",
        "Design clean, modern pages that reflect your {city} brand and appeal to {industry} audiences in {state}, with responsive layouts that work on mobile, tablet, and desktop.",
      ],
    },
    {
      step: "04", title: "Develop",
      descriptions: [
        "Enterprise development with Next.js, React, or custom stacks — optimised for sub-1.5s LCP, perfect CLS, and security standards required by {city}'s leading {industry} brands in {state}.",
        "Build with clean, optimised code — fast loading, SEO-friendly, and secure — using modern frameworks tailored for your {city} {industry} business serving customers in {state}.",
        "Develop your {city} website with clean code and fast load times, making sure {industry} visitors in {state} have a smooth experience from the first click.",
      ],
    },
    {
      step: "05", title: "Launch",
      descriptions: [
        "Enterprise deployment with load testing, CDN configuration, monitoring setup, and a 30-day post-launch optimisation programme for {city}'s {industry} platform serving {state}.",
        "Thorough QA testing, performance optimisation, and smooth deployment with post-launch support to ensure your {city} {industry} website serves {state} visitors flawlessly.",
        "Launch your {city} website after careful testing, with everything optimised for performance so {industry} customers in {state} get a fast, reliable experience from day one.",
      ],
    },
  ],

  "social-media": [
    {
      step: "01", title: "Audit",
      descriptions: [
        "Enterprise social audit — competitive benchmarking, audience intelligence, content performance analysis, and platform-by-platform gap assessment for {city}'s {industry} market in {state}.",
        "Analyse your current social presence, audience demographics, and competitor strategies to find the biggest opportunities for your {city} {industry} brand in {state}.",
        "Review where your {city} business stands on social media, what {industry} competitors in {state} are doing, and where the best opportunities lie.",
      ],
    },
    {
      step: "02", title: "Strategy",
      descriptions: [
        "Enterprise social strategy — content pillars, campaign architecture, influencer frameworks, and paid-organic integration plans for {city}'s {industry} audience across {state}.",
        "Develop a tailored content strategy with posting schedules, content themes, and campaign plans built for your {city} {industry} audience in {state}.",
        "Create a simple, effective social media plan for your {city} business — covering what to post, when to post, and how to reach {industry} customers in {state}.",
      ],
    },
    {
      step: "03", title: "Create",
      descriptions: [
        "Enterprise content production — high-volume creative output including branded series, UGC campaigns, and platform-exclusive formats for {city}'s {industry} audience across {state}.",
        "Produce high-quality content — graphics, videos, and copy — aligned with your {city} brand and designed to engage {industry} followers across {state}.",
        "Create engaging posts, stories, and reels that showcase your {city} business and connect with {industry} audiences in {state} consistently.",
      ],
    },
    {
      step: "04", title: "Engage",
      descriptions: [
        "Enterprise community management — real-time engagement, crisis protocols, sentiment tracking, and audience nurturing for {city}'s {industry} brand presence across {state}.",
        "Manage daily posting, community engagement, and real-time trend leveraging to grow your {city} {industry} brand's following across {state}.",
        "Keep your {city} business active and responsive — posting consistently, replying to comments, and engaging with {industry} followers in {state}.",
      ],
    },
    {
      step: "05", title: "Report",
      descriptions: [
        "Executive reporting with competitive intelligence, sentiment analysis, attribution modelling, and strategic recommendations for {city}'s {industry} brand across {state}.",
        "Monthly performance reviews with engagement insights, growth metrics, and strategy refinements to keep your {city} {industry} presence in {state} on track.",
        "Monthly reports that show your {city} business what worked, what grew, and what to do next — in plain language, focused on {industry} results in {state}.",
      ],
    },
  ],

  "ai-influencer-management": [
    {
      step: "01", title: "Concept",
      descriptions: [
        "Enterprise persona engineering — market-tested visual design, personality modelling, and audience resonance testing for AI influencers representing {city}'s leading {industry} brands in {state}.",
        "Define your AI influencer's persona, visual style, and personality traits to resonate with {industry} audiences in {city} and across {state}.",
        "Design an AI persona that fits your {city} brand — choosing the right look, voice, and personality to connect with {industry} followers in {state}.",
      ],
    },
    {
      step: "02", title: "Create",
      descriptions: [
        "Enterprise AI production — photo-realistic generation with custom-trained models, consistency frameworks, and brand-specific visual pipelines for {city}'s {industry} market across {state}.",
        "Design and generate your AI influencer using advanced generative AI tools, ensuring visual consistency and appeal for {industry} audiences in {city} and {state}.",
        "Build your AI influencer with realistic visuals and a consistent look, ready to represent your {city} {industry} brand to audiences in {state}.",
      ],
    },
    {
      step: "03", title: "Strategy",
      descriptions: [
        "Enterprise content strategy — narrative arcs, audience segmentation, engagement frameworks, and monetisation planning for AI influencers serving {city}'s {industry} brands across {state}.",
        "Build a content calendar, narrative arcs, and engagement strategy designed to grow your AI influencer's {industry} audience in {city} and across {state}.",
        "Plan what your AI influencer posts, when, and how — with a straightforward strategy focused on engaging {industry} followers in {city} and {state}.",
      ],
    },
    {
      step: "04", title: "Launch",
      descriptions: [
        "Coordinated multi-platform launch with content drops, audience seeding, and PR activations for AI influencers entering {city}'s competitive {industry} space in {state}.",
        "Launch across platforms with coordinated content drops and community engagement tactics designed for {industry} audiences in {city} and {state}.",
        "Introduce your AI influencer to {city}'s {industry} audience with a well-planned launch across Instagram, TikTok, and other key platforms in {state}.",
      ],
    },
    {
      step: "05", title: "Grow",
      descriptions: [
        "Enterprise growth programme — brand collaborations, cross-platform expansion, and audience development strategies to scale your AI influencer's influence across {city}'s {industry} market in {state}.",
        "Scale your AI influencer's presence with collaborations, trend-riding, and data-driven content optimisation for the {industry} audience in {city} and {state}.",
        "Grow your AI influencer's following in {city} by staying on top of trends, collaborating with complementary {industry} brands, and refining content for {state} audiences.",
      ],
    },
  ],

  "lead-generation": [
    {
      step: "01", title: "Analyze",
      descriptions: [
        "Enterprise ICP development — detailed buyer persona mapping, sales process analysis, and lead attribution modelling for {city}'s complex {industry} sales cycles across {state}.",
        "Understand your ideal customer profile, sales process, and current lead generation efforts to build a strategy that works for {city}'s {industry} market in {state}.",
        "Learn who your best {industry} customers in {city} are, how they buy, and where the gaps are in your current lead generation across {state}.",
      ],
    },
    {
      step: "02", title: "Build",
      descriptions: [
        "Enterprise funnel architecture — multi-stage landing page systems, segmented lead magnets, and automated nurture sequences calibrated for {city}'s {industry} buyer journey across {state}.",
        "Create landing pages, lead magnets, and nurture email sequences tailored for {industry} prospects in {city} and across {state}.",
        "Build the pages, offers, and email follow-ups your {city} business needs to capture and nurture {industry} leads from across {state}.",
      ],
    },
    {
      step: "03", title: "Launch",
      descriptions: [
        "Enterprise campaign deployment across Google, Meta, and LinkedIn with full attribution, CRM integration, and real-time lead routing for {city}'s {industry} market across {state}.",
        "Activate multi-channel lead gen campaigns with tracking and attribution in place, targeting {industry} prospects in {city} and across {state}.",
        "Launch your lead generation campaigns across the channels where {industry} customers in {city} and {state} are most active, with tracking set up from day one.",
      ],
    },
    {
      step: "04", title: "Nurture",
      descriptions: [
        "Enterprise nurture automation — multi-touch sequences, lead scoring models, and sales-handoff protocols designed for {city}'s {industry} sales cycles across {state}.",
        "Automated follow-up sequences that qualify and warm {industry} leads in {city} before they reach your sales team, improving close rates across {state}.",
        "Set up automated emails that keep {industry} leads from {city} engaged and moving toward a conversation with your team across {state}.",
      ],
    },
    {
      step: "05", title: "Optimize",
      descriptions: [
        "Enterprise CRO with statistical significance testing, funnel modelling, and budget reallocation frameworks to maximise {industry} lead volume and quality for {city} across {state}.",
        "Analyse performance data, refine targeting, and scale winning campaigns to deliver more qualified {industry} leads for your {city} business across {state}.",
        "Review what is working, cut what is not, and put more budget behind the campaigns that bring the best {industry} leads to your {city} business in {state}.",
      ],
    },
  ],

  "music-release": [
    {
      step: "01", title: "Pre-Release",
      descriptions: [
        "Enterprise pre-release campaigns for {city}'s top artists — 6-week rollout plans with teasers, pre-saves, media embargoes, and audience priming across {state} and nationally.",
        "Build anticipation with teasers, pre-save campaigns, and audience engagement 4-6 weeks before your {city} release hits platforms across {state}.",
        "Start building buzz for your {city} release — sharing teasers, setting up pre-saves, and engaging your {industry} audience in {state} before launch day.",
      ],
    },
    {
      step: "02", title: "Distribution",
      descriptions: [
        "Priority distribution across 150+ platforms with optimised metadata, release radar targeting, and platform-specific strategies for {city} artists reaching listeners across {state} and globally.",
        "Set up distribution across all major platforms with proper metadata, artwork, and strategic release scheduling for {city} artists building an audience in {state}.",
        "Get your music on Spotify, Apple Music, and all streaming platforms with the right metadata and timing to maximise your {city} release's reach in {state}.",
      ],
    },
    {
      step: "03", title: "Launch",
      descriptions: [
        "Coordinated launch-day activation — social blitz, playlist submissions, PR embargoes lifting, and paid amplification for {city}'s biggest {industry} releases across {state}.",
        "Coordinated release day push across social media, playlists, PR outreach, and paid promotions to drive streams for {city} artists across {state}.",
        "Launch day support — social media posts, playlist submissions, and promotion to make sure your {city} release reaches as many {industry} listeners in {state} as possible.",
      ],
    },
    {
      step: "04", title: "Promote",
      descriptions: [
        "Enterprise sustain campaigns — content marketing, influencer activations, paid retargeting, and editorial follow-up for {city}'s top artists maintaining momentum across {state}.",
        "Sustained promotion with content marketing, influencer partnerships, and targeted ad campaigns to keep streams growing for {city} artists across {state}.",
        "Keep the momentum going after launch with ongoing social content, playlist pushes, and targeted promotion for {city} artists building their {industry} audience in {state}.",
      ],
    },
    {
      step: "05", title: "Analyze",
      descriptions: [
        "Enterprise analytics — streaming intelligence, audience demographic mapping, revenue attribution, and strategic planning for {city}'s top artists' next releases across {state}.",
        "Track streaming data, audience growth, and campaign performance to inform future release strategies for {city} artists across {state}.",
        "Review your streaming numbers, audience growth, and what worked best — giving your {city} {industry} music career in {state} a clearer path forward.",
      ],
    },
  ],

  "video-editing": [
    {
      step: "01", title: "Brief",
      descriptions: [
        "Enterprise creative brief — detailed vision documents, brand compliance requirements, audience targeting specifications, and deliverable matrices for {city}'s {industry} projects across {state}.",
        "Understand your vision, objectives, target audience, and creative direction so we deliver exactly what your {city} {industry} brand needs in {state}.",
        "Learn what your {city} business needs — the message, the audience, and the style — so every edit serves your {industry} goals in {state}.",
      ],
    },
    {
      step: "02", title: "Review",
      descriptions: [
        "Enterprise footage analysis — systematic take selection, narrative arc planning, and edit structure mapping for {city}'s highest-profile {industry} productions across {state}.",
        "Analyse raw footage, select the best takes, and plan the edit structure and storytelling flow for your {city} {industry} video project in {state}.",
        "Go through your footage carefully, pick the best moments, and plan how to tell your {city} {industry} story effectively for audiences in {state}.",
      ],
    },
    {
      step: "03", title: "Edit",
      descriptions: [
        "Enterprise editing with advanced compositing, multi-cam sync, and platform-specific versioning — delivering broadcast-ready {industry} content for {city}'s most demanding brands across {state}.",
        "Professional editing with transitions, pacing, music, and visual effects aligned with your {city} brand and {industry} audience expectations in {state}.",
        "Edit your footage into a polished video with good pacing, smooth transitions, and music that fits — ready for your {city} {industry} audience in {state}.",
      ],
    },
    {
      step: "04", title: "Refine",
      descriptions: [
        "Enterprise post-production — cinema-grade colour grading, Dolby sound mixing, motion graphics integration, and multi-round revision cycles for {city}'s premium {industry} content across {state}.",
        "Colour grading, sound mixing, motion graphics, and fine-tuning based on your feedback to perfect your {city} {industry} video for audiences in {state}.",
        "Add colour correction, sound improvements, and finishing touches based on your feedback — making your {city} {industry} video look and sound professional for {state} audiences.",
      ],
    },
    {
      step: "05", title: "Deliver",
      descriptions: [
        "Enterprise delivery — broadcast-standard masters, platform-optimised exports, archival copies, and asset management for {city}'s leading {industry} brands across {state}.",
        "Export in all required formats optimised for your chosen platforms and distribution channels, ready for your {city} {industry} content to reach audiences across {state}.",
        "Deliver finished files in every format you need — social media, website, presentations — so your {city} {industry} video is ready to share across {state}.",
      ],
    },
  ],

  "branding-packaging": [
    {
      step: "01", title: "Research",
      descriptions: [
        "Enterprise packaging research — consumer testing, retail shelf analysis, competitor packaging audits, and regulatory mapping for {city}'s {industry} products across {state}.",
        "Study your product, market positioning, competitors, and retail environment to inform packaging design for your {city} {industry} brand in {state}.",
        "Research how {industry} products are packaged in {city} and {state}, what competitors are doing, and what will make your product stand out on the shelf.",
      ],
    },
    {
      step: "02", title: "Concept",
      descriptions: [
        "Enterprise design exploration — multiple structural and graphic concepts, consumer preference testing, and stakeholder review frameworks for {city}'s {industry} brands in {state}.",
        "Develop multiple design concepts exploring different visual directions and packaging structures for your {city} {industry} product in {state}.",
        "Explore different packaging ideas for your {city} product — trying various colours, layouts, and structures to find what works best for {industry} shelves in {state}.",
      ],
    },
    {
      step: "03", title: "Design",
      descriptions: [
        "Enterprise packaging design — detailed graphics, regulatory information layout, typography refinement, and multi-SKU system design for {city}'s {industry} brands across {state}.",
        "Refine the chosen concept with detailed graphics, typography, and regulatory information for your {city} {industry} product packaging across {state}.",
        "Create the final design with all the details — graphics, text, and required information — so your {city} {industry} packaging is ready for production in {state}.",
      ],
    },
    {
      step: "04", title: "Mockup",
      descriptions: [
        "Photo-realistic 3D renders and physical prototypes for stakeholder approval, retailer presentations, and consumer testing of {city}'s {industry} packaging in {state}.",
        "Create realistic 3D mockups and physical prototypes for testing and stakeholder approval of your {city} {industry} packaging in {state}.",
        "See how your packaging will look in the real world with 3D mockups, so your {city} {industry} business in {state} can approve the design with confidence.",
      ],
    },
    {
      step: "05", title: "Production",
      descriptions: [
        "Enterprise production management — pre-press file preparation, colour proofing, press checks, and quality assurance across production runs for {city}'s {industry} brands in {state}.",
        "Prepare print-ready files and coordinate with manufacturers to ensure flawless production of your {city} {industry} packaging across {state}.",
        "Get your packaging printed correctly — we prepare files and work with printers so your {city} {industry} product packaging in {state} matches the approved design.",
      ],
    },
  ],

  "graphic-design": [
    {
      step: "01", title: "Brief",
      descriptions: [
        "Enterprise creative brief — brand compliance guidelines, stakeholder input synthesis, competitive design audit, and deliverable specification for {city}'s {industry} projects across {state}.",
        "Understand your design needs, brand guidelines, and target audience so every deliverable serves your {city} {industry} business objectives in {state}.",
        "Learn what your {city} business needs designed, who it is for, and how it should look — setting clear expectations for every {industry} deliverable in {state}.",
      ],
    },
    {
      step: "02", title: "Concept",
      descriptions: [
        "Enterprise concept development — mood boards, style explorations, competitive positioning analysis, and creative direction for {city}'s {industry} brands across {state}.",
        "Explore creative directions with mood boards, style references, and initial concepts tailored to your {city} {industry} audience in {state}.",
        "Share some creative ideas and directions to make sure we are aligned before diving into detailed design for your {city} {industry} project in {state}.",
      ],
    },
    {
      step: "03", title: "Design",
      descriptions: [
        "Enterprise design execution — polished deliverables with meticulous typography, layout engineering, and brand consistency across multi-asset campaigns for {city}'s {industry} leaders in {state}.",
        "Create polished designs with attention to typography, layout, colour, and visual hierarchy for your {city} {industry} brand's needs in {state}.",
        "Design clean, professional graphics that communicate your {city} {industry} message clearly and look great across all channels in {state}.",
      ],
    },
    {
      step: "04", title: "Revise",
      descriptions: [
        "Systematic revision process with structured feedback integration and brand-compliance verification for {city}'s {industry} enterprise deliverables across {state}.",
        "Refine based on your feedback — we offer multiple revision rounds to get every design perfect for your {city} {industry} audience in {state}.",
        "Make adjustments based on your input until the design is exactly right for your {city} {industry} business in {state}.",
      ],
    },
    {
      step: "05", title: "Deliver",
      descriptions: [
        "Enterprise asset delivery — organised file libraries, brand-compliant exports in every format, and usage documentation for {city}'s {industry} teams across {state}.",
        "Export in all required formats — web, print, social — with organised file delivery ready for your {city} {industry} team across {state}.",
        "Hand over all final files in the formats you need — ready to use on your website, social media, and print materials for your {city} {industry} business in {state}.",
      ],
    },
  ],
};

// ─── Public API ───────────────────────────────────────────────────────────────

export function getFeatureVariants(
  serviceSlug: string,
  location: LocationInfo,
): FeatureVariant[] {
  const templates = featureTemplates[serviceSlug];
  if (!templates) return [];

  const tier = getCityTier(location.slug);
  const tierIdx = tier - 1; // 0, 1, or 2

  return templates.map((t, i) => {
    const seed = simpleHash(`${location.slug}:${serviceSlug}:feature:${i}`);
    const description = fillPlaceholders(t.descriptions[tierIdx], location, seed);
    return { title: t.title, description };
  });
}

export function getProcessVariants(
  serviceSlug: string,
  location: LocationInfo,
): ProcessVariant[] {
  const templates = processTemplates[serviceSlug];
  if (!templates) return [];

  const tier = getCityTier(location.slug);
  const tierIdx = tier - 1;

  return templates.map((t, i) => {
    const seed = simpleHash(`${location.slug}:${serviceSlug}:process:${i}`);
    const description = fillPlaceholders(t.descriptions[tierIdx], location, seed);
    return { step: t.step, title: t.title, description };
  });
}
