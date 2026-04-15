export interface ChandigarhServiceData {
  slug: string;
  serviceSlug: string;
  title: string;
  h1: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroDescription: string;
  whyChoose: { title: string; description: string }[];
  localContent: string[];
  faqs: { q: string; a: string }[];
}

export const chandigarhServices: Record<string, ChandigarhServiceData> = {
  "branding-in-chandigarh": {
    slug: "branding-in-chandigarh",
    serviceSlug: "branding",
    title: "Branding Agency in Chandigarh",
    h1: "Best Branding Agency in Chandigarh",
    tagline: "Build a brand Chandigarh remembers.",
    metaTitle: "Best Branding Agency in Chandigarh",
    metaDescription: "TML is Chandigarh's top branding company offering brand identity, logo design, and strategy services. 500+ brands built by our award-winning agency. Free consultation.",
    keywords: ["branding agency chandigarh", "logo design chandigarh", "brand identity chandigarh", "branding company chandigarh"],
    heroDescription: "Looking for the best branding company in Chandigarh? TML is the top branding agency that has helped 500+ businesses across Chandigarh, Mohali, and Panchkula build powerful brand identities. Our branding services cover logo design, brand strategy, and complete brand systems that your customers remember.",
    whyChoose: [
      { title: "Top Branding Company in Tricity", description: "We understand Chandigarh's market dynamics, consumer behavior, and what resonates with the tricity audience." },
      { title: "500+ Brands Built", description: "From startups in IT Park to established businesses in Sector 17 — our branding agency has served them all." },
      { title: "Complete Branding Services", description: "Logo design, visual identity, brand guidelines, stationery, messaging — a full-service branding company under one roof." },
      { title: "Strategy-First Agency", description: "We don't just design logos — our branding services build strategic brand foundations that drive business growth." },
    ],
    localContent: [
      "As the leading branding agency in Chandigarh, TML has been transforming businesses across the tricity since 2010. Whether you're a startup in IT Park Chandigarh, a restaurant in Sector 17, or an established brand in Mohali — we create brand identities that capture your essence and connect with your target audience.",
      "Our Chandigarh-based branding team combines deep market research with creative excellence. We understand what makes tricity consumers tick, and we use that insight to build brands that don't just look good — they drive real business results.",
      "From complete rebranding projects to new brand launches, our portfolio includes work for real estate companies, restaurants, tech startups, fashion brands, healthcare providers, and more across Chandigarh, Mohali, and Panchkula.",
    ],
    faqs: [
      { q: "How much does branding cost in Chandigarh?", a: "Our branding packages start from ₹25,000 for basic logo design to ₹2,00,000+ for complete brand identity systems. We offer customized packages based on your needs." },
      { q: "How long does a branding project take?", a: "A typical branding project takes 3-6 weeks from initial consultation to final delivery, depending on the scope." },
      { q: "Can I visit your office in Chandigarh?", a: "Absolutely! We welcome in-person meetings at our Chandigarh office. Book a visit through our contact page." },
      { q: "Do you work with startups?", a: "Yes, we love working with Chandigarh startups! We offer startup-friendly packages that grow with your business." },
    ],
  },

  "google-ads-in-chandigarh": {
    slug: "google-ads-in-chandigarh",
    serviceSlug: "google-ads",
    title: "Google Ads Agency in Chandigarh",
    h1: "Best Google Ads Agency in Chandigarh",
    tagline: "Maximize ROI with Chandigarh's top Google Ads experts.",
    metaTitle: "Top Google Ads Agency in Chandigarh",
    metaDescription: "TML is the best Google Ads company in Chandigarh. Certified Partner agency offering PPC management services. ₹5Cr+ ad spend managed, 4.2x ROAS. Free audit.",
    keywords: ["google ads agency chandigarh", "ppc company chandigarh", "google ads management chandigarh", "sem agency chandigarh"],
    heroDescription: "TML is the best Google Ads company in Chandigarh and a certified Google Partner agency. Our PPC services cover search, display, shopping, and Performance Max campaigns. We manage ₹5Cr+ in ad spend for tricity businesses, delivering an average 4.2x ROAS — maximizing every rupee.",
    whyChoose: [
      { title: "Certified Google Ads Company", description: "As a Google Partner agency, your campaigns are managed by certified PPC professionals in Chandigarh." },
      { title: "₹5Cr+ Ad Spend Managed", description: "Proven Google Ads management services for Chandigarh businesses with consistent ROI across industries." },
      { title: "Local PPC Experts", description: "Our agency knows which keywords convert for Chandigarh businesses and how to target the tricity audience." },
      { title: "Transparent Reporting", description: "Real-time dashboards showing exactly where your ad budget goes and what results our services generate." },
    ],
    localContent: [
      "As the top Google Ads agency in Chandigarh, TML has managed campaigns for businesses of all sizes — from local restaurants and clinics to large real estate developers and e-commerce companies across the tricity.",
      "Our Chandigarh PPC team specializes in hyper-local targeting for businesses that want to dominate search results in Chandigarh, Mohali, Panchkula, and surrounding areas. We combine local market knowledge with advanced bidding strategies.",
      "Whether you need Google Search ads to capture high-intent customers in Chandigarh or Display campaigns for brand awareness across Punjab — our certified team delivers results that exceed expectations.",
    ],
    faqs: [
      { q: "What's the minimum Google Ads budget?", a: "We recommend a minimum of ₹30,000/month for meaningful results in Chandigarh. We can discuss optimal budgets for your specific industry." },
      { q: "Are you a certified Google Partner?", a: "Yes, TML is an officially certified Google Partner — validated by Google for our expertise and results." },
      { q: "How quickly will I see results?", a: "You can start getting clicks within 24 hours. Meaningful conversion data typically develops within 2-4 weeks." },
      { q: "Do you offer free audits?", a: "Yes! We offer a free Google Ads audit for Chandigarh businesses to identify quick wins and optimization opportunities." },
    ],
  },

  "seo-in-chandigarh": {
    slug: "seo-in-chandigarh",
    serviceSlug: "seo",
    title: "SEO Company in Chandigarh",
    h1: "Best SEO Company in Chandigarh",
    tagline: "Dominate Google rankings in Chandigarh.",
    metaTitle: "Best SEO Company in Chandigarh",
    metaDescription: "TML is Chandigarh's top SEO agency offering proven SEO services. 280% avg traffic increase, 500+ first page rankings. Free SEO audit for your business.",
    keywords: ["seo company chandigarh", "seo services chandigarh", "seo agency chandigarh", "best seo chandigarh"],
    heroDescription: "Want to rank #1 on Google? TML is the best SEO company in Chandigarh, delivering proven results — 280% average traffic increase and 500+ first page rankings. Our SEO agency offers complete services from local SEO to technical audits, helping tricity businesses dominate search.",
    whyChoose: [
      { title: "Top SEO Agency — 500+ Rankings", description: "Proven track record of getting Chandigarh businesses to the first page of Google for competitive keywords." },
      { title: "Local SEO Services", description: "Google Business Profile optimization, local citations, and map pack strategies — the SEO services tricity businesses need." },
      { title: "White-Hat SEO Company", description: "We use only ethical, Google-approved SEO techniques that deliver sustainable, long-term results for your business." },
      { title: "Full-Service SEO Agency", description: "Technical SEO, on-page optimization, content strategy, link building — a complete SEO company under one roof." },
    ],
    localContent: [
      "As the leading SEO company in Chandigarh, TML helps businesses rank higher on Google for the keywords that matter most. Whether you're targeting 'best restaurant in Chandigarh' or 'IT company in Mohali' — our SEO strategies deliver consistent results.",
      "Our local SEO expertise is particularly valuable for Chandigarh businesses. We optimize your Google Business Profile, build local citations across relevant directories, manage customer reviews, and ensure you dominate the local map pack for your target areas.",
      "We've helped businesses across every major sector in Chandigarh improve their organic visibility — from healthcare practices in Sector 22 to tech companies in IT Park, educational institutions in Mohali, and real estate developers across the tricity.",
    ],
    faqs: [
      { q: "How long does SEO take in Chandigarh?", a: "You'll see initial improvements in 3-4 months. Significant results typically appear within 6-8 months, depending on competition level." },
      { q: "Do you offer local SEO for Chandigarh?", a: "Yes, local SEO is our specialty! We optimize for Chandigarh, Mohali, Panchkula, and can target specific sectors." },
      { q: "What's included in your SEO services?", a: "Technical audits, on-page optimization, content creation, link building, local SEO, monthly reporting, and strategy calls." },
      { q: "How much does SEO cost in Chandigarh?", a: "Our SEO packages for Chandigarh businesses start from ₹15,000/month. We recommend a custom quote based on your goals." },
    ],
  },

  "website-development-in-chandigarh": {
    slug: "website-development-in-chandigarh",
    serviceSlug: "website-development",
    title: "Website Development in Chandigarh",
    h1: "Best Website Development Company in Chandigarh",
    tagline: "Websites that put Chandigarh businesses online.",
    metaTitle: "Best Web Development Company in Chandigarh",
    metaDescription: "TML is Chandigarh's top website development agency. 300+ sites delivered. Custom web design services, e-commerce, CMS. Fast, responsive. Get a free quote.",
    keywords: ["website development chandigarh", "web design chandigarh", "web development company chandigarh", "ecommerce development chandigarh"],
    heroDescription: "TML is Chandigarh's best website development company with 300+ sites delivered. Our web development agency offers custom design services, e-commerce platforms, and CMS solutions — fast, beautiful, and conversion-optimized digital experiences for tricity businesses.",
    whyChoose: [
      { title: "Top Web Development Agency", description: "From local startups to enterprise clients — our company has built websites for every industry in Chandigarh." },
      { title: "Custom Web Design Services", description: "Every website we build is fully responsive and optimized for the way Chandigarh customers browse." },
      { title: "SEO-Optimized Development", description: "Our website development services include built-in SEO so you start ranking faster on Google." },
      { title: "Ongoing Support", description: "Local support from our Chandigarh web development company — always just a call away for updates and fixes." },
    ],
    localContent: [
      "Looking for a web development company in Chandigarh? TML has built 300+ websites for businesses across the tricity. From corporate websites for companies in Industrial Area to e-commerce stores for Sector 17 retailers — we deliver digital experiences that convert.",
      "Our Chandigarh web development team specializes in modern technologies like React, Next.js, and WordPress. We build websites that are not only visually stunning but also lightning-fast, mobile-responsive, and optimized for search engines.",
      "We understand the unique needs of Chandigarh businesses — whether it's a multi-language site for a tricity audience, integration with local payment gateways, or a website that showcases your business to clients across North India.",
    ],
    faqs: [
      { q: "How much does a website cost in Chandigarh?", a: "Basic websites start from ₹25,000, business websites from ₹50,000, and e-commerce from ₹1,00,000+. We offer custom quotes." },
      { q: "How long does website development take?", a: "A standard website takes 3-4 weeks. E-commerce and custom web applications may take 6-10 weeks." },
      { q: "Do you offer website maintenance?", a: "Yes, we offer monthly maintenance plans including updates, security patches, backups, and content changes." },
      { q: "Can I visit your office to discuss my project?", a: "Absolutely! Book an appointment and visit our Chandigarh office for a face-to-face consultation." },
    ],
  },

  "social-media-marketing-in-chandigarh": {
    slug: "social-media-marketing-in-chandigarh",
    serviceSlug: "social-media",
    title: "Social Media Marketing in Chandigarh",
    h1: "Best Social Media Marketing Agency in Chandigarh",
    tagline: "Grow your Chandigarh brand on social media.",
    metaTitle: "Top Social Media Marketing Agency Chandigarh",
    metaDescription: "TML is Chandigarh's best social media marketing company. Instagram, Facebook, LinkedIn management services. 2M+ followers grown. Ads, content & strategy.",
    keywords: ["social media marketing chandigarh", "social media agency chandigarh", "instagram marketing chandigarh", "social media management chandigarh"],
    heroDescription: "TML is Chandigarh's most trusted social media marketing company. As the top social media agency in the tricity, we've grown 2M+ followers for 100+ brands. Our social media services span content creation, community management, and paid ads — helping Chandigarh businesses build engaged audiences.",
    whyChoose: [
      { title: "Best Social Media Company", description: "Proven results growing audiences for Chandigarh brands across Instagram, Facebook, and LinkedIn." },
      { title: "Local Content Expertise", description: "Our agency creates content that resonates with the Chandigarh audience — cultural nuances, local trends, and regional relevance." },
      { title: "Full-Service Social Media", description: "Content creation, posting, community management, paid social ads, and reporting — complete services handled by our team." },
      { title: "Real Engagement", description: "Our social media marketing agency focuses on authentic engagement and community building, not vanity metrics." },
    ],
    localContent: [
      "As Chandigarh's top social media marketing agency, TML manages social media for brands across restaurants, fashion boutiques, tech startups, real estate companies, and more throughout the tricity.",
      "Our Chandigarh social media team creates content that captures the local vibe — from Sector 17 food reels to IT Park thought leadership content. We understand what makes Chandigarh's audience engage, share, and convert.",
      "Whether you need Instagram management for your Chandigarh cafe, LinkedIn marketing for your Mohali B2B company, or Facebook ads targeting the tricity — we deliver results that grow your bottom line.",
    ],
    faqs: [
      { q: "Which platforms do you manage?", a: "We manage Instagram, Facebook, LinkedIn, Twitter/X, and YouTube for Chandigarh businesses." },
      { q: "How much does social media management cost?", a: "Our packages for Chandigarh businesses start from ₹15,000/month. Custom packages available based on platforms and posting frequency." },
      { q: "Do you create all the content?", a: "Yes! Our in-house team creates all graphics, videos, captions, and stories for your brand." },
      { q: "Can you handle influencer marketing locally?", a: "Absolutely — we have strong relationships with Chandigarh influencers and can run targeted local campaigns." },
    ],
  },

  "ai-influencer-management-in-chandigarh": {
    slug: "ai-influencer-management-in-chandigarh",
    serviceSlug: "ai-influencer-management",
    title: "AI Influencer Management in Chandigarh",
    h1: "AI Influencer Management Agency in Chandigarh",
    tagline: "The future of influence, powered from Chandigarh.",
    metaTitle: "Best AI Influencer Agency in Chandigarh",
    metaDescription: "TML is Chandigarh's top AI influencer management company. Our agency creates virtual influencer services for brands. 25+ AI personas, 500K+ followers.",
    keywords: ["ai influencer chandigarh", "virtual influencer agency chandigarh", "ai marketing chandigarh"],
    heroDescription: "TML is the best AI influencer management company in Chandigarh. Our agency offers virtual influencer services — hyper-realistic brand ambassadors that represent your business 24/7. No scheduling conflicts, always on-brand, unlimited creative potential.",
    whyChoose: [
      { title: "Top AI Influencer Company", description: "We're the tricity's first agency offering AI influencer creation and management services." },
      { title: "Cutting-Edge AI Services", description: "Our company uses the latest generative AI tools to create virtual personas nearly indistinguishable from real influencers." },
      { title: "Cost-Effective Agency", description: "AI influencer services cost a fraction of real influencer partnerships with 24/7 availability and full brand control." },
      { title: "Full Campaign Management", description: "From persona creation to content strategy, posting, and analytics — our agency handles everything." },
    ],
    localContent: [
      "As Chandigarh's first AI influencer management agency, TML is bringing the future of digital marketing to the tricity. Whether you're a fashion brand in Elante Mall or a tech company in IT Park — an AI influencer can revolutionize your marketing.",
      "Our Chandigarh team creates custom AI personas tailored to your brand and target audience. These virtual influencers can represent your business across Instagram, TikTok, and YouTube with consistent messaging and unlimited content possibilities.",
      "Early adopters in Chandigarh are already seeing incredible results — higher engagement rates, lower cost per acquisition, and complete brand control. Let us help you stay ahead of the curve.",
    ],
    faqs: [
      { q: "What is an AI influencer?", a: "An AI influencer is a virtual persona powered by AI that acts as your brand ambassador on social media — always available, always on-brand." },
      { q: "Is this new for Chandigarh?", a: "Yes! TML is pioneering AI influencer services in Chandigarh. We're the first agency in the tricity offering this service." },
      { q: "How realistic are AI influencers?", a: "Modern AI creates hyper-realistic personas that are nearly indistinguishable from real people in photos and videos." },
      { q: "What does it cost?", a: "AI influencer packages start from ₹30,000/month — significantly cheaper than traditional influencer partnerships." },
    ],
  },

  "lead-generation-in-chandigarh": {
    slug: "lead-generation-in-chandigarh",
    serviceSlug: "lead-generation",
    title: "Lead Generation in Chandigarh",
    h1: "Best Lead Generation Company in Chandigarh",
    tagline: "Fill your pipeline with Chandigarh leads.",
    metaTitle: "Top Lead Generation Company in Chandigarh",
    metaDescription: "TML is the best lead generation agency in Chandigarh. Our services deliver 50K+ leads, 12% conversion rate. Landing pages, ads & automation. Free consult.",
    keywords: ["lead generation chandigarh", "lead generation company chandigarh", "leads for business chandigarh"],
    heroDescription: "Need more customers? TML is the best lead generation company in Chandigarh, building systems that consistently deliver qualified prospects. Our lead gen agency has generated 50K+ leads for tricity businesses through landing pages, paid ads, email marketing services, and CRM automation.",
    whyChoose: [
      { title: "Top Lead Generation Agency", description: "Proven track record delivering high-quality leads for Chandigarh businesses across industries." },
      { title: "Local Targeting Services", description: "Hyper-targeted lead generation campaigns reaching customers specifically in Chandigarh, Mohali, and Panchkula." },
      { title: "Full-Funnel Lead Gen Company", description: "Landing pages, ad campaigns, email nurturing, and CRM integration — complete lead generation services." },
      { title: "Cost-Effective Results", description: "Our agency delivers an average CPL 40% lower than industry benchmarks for Chandigarh campaigns." },
    ],
    localContent: [
      "TML is Chandigarh's go-to lead generation company for businesses that need a consistent flow of qualified prospects. From real estate developers in Mohali to coaching institutes in Sector 34 — we build systems that deliver.",
      "Our local expertise means we know which channels, messaging, and targeting strategies work best for the Chandigarh market. We combine Google Ads, Facebook Ads, landing pages, and email automation to build lead generation machines.",
      "Whether you need leads for your Chandigarh real estate project, education institute, healthcare practice, or B2B service — our proven frameworks deliver results within weeks, not months.",
    ],
    faqs: [
      { q: "What industries do you generate leads for?", a: "We generate leads for real estate, education, healthcare, B2B services, hospitality, and more across Chandigarh." },
      { q: "How much does lead generation cost?", a: "Packages start from ₹20,000/month plus ad spend. CPL varies by industry — typically ₹50-500 per lead." },
      { q: "How fast will I get leads?", a: "Most Chandigarh campaigns start generating leads within the first week of launch." },
      { q: "Do you guarantee lead quality?", a: "We use qualification workflows and lead scoring to ensure you receive only high-quality, relevant prospects." },
    ],
  },

  "music-release-in-chandigarh": {
    slug: "music-release-in-chandigarh",
    serviceSlug: "music-release",
    title: "Music Release & Promotion in Chandigarh",
    h1: "Best Music Promotion Agency in Chandigarh",
    tagline: "Launch your music from the heart of Punjab.",
    metaTitle: "Top Music Promotion Agency in Chandigarh",
    metaDescription: "TML is the best music promotion company in Chandigarh. Our agency offers music release services across Spotify, YouTube, JioSaavn. 500+ songs, 50M+ streams.",
    keywords: ["music promotion chandigarh", "music release agency chandigarh", "music marketing chandigarh", "punjabi music promotion"],
    heroDescription: "Chandigarh is the heart of Punjabi music — and TML is the best music promotion agency to take it global. Our company has helped release 500+ songs, generating 50M+ streams. From distribution services to playlist pitching to social media campaigns — we handle the business so you can create.",
    whyChoose: [
      { title: "Top Music Promotion Company", description: "Based in the epicenter of Punjabi music, our agency understands the industry, audience, and distribution landscape." },
      { title: "500+ Songs Released", description: "Proven music release services across Spotify, Apple Music, YouTube Music, JioSaavn, and 150+ platforms." },
      { title: "Playlist Connections", description: "Our company has strong relationships with playlist curators for Punjabi, Bollywood, and indie music genres." },
      { title: "Complete Music Services", description: "Distribution, promotion, music video production, social media campaigns — the best agency for everything under one roof." },
    ],
    localContent: [
      "Chandigarh is the capital of Punjabi music — and TML is proud to be the tricity's leading music promotion agency. We've helped local artists, labels, and independent musicians reach millions of listeners worldwide.",
      "From Mohali studios to global streaming platforms, we handle the complete music release lifecycle. Our team understands the Punjabi music industry inside and out — from trending genres to audience preferences to the right timing for releases.",
      "Whether you're an upcoming Chandigarh rapper, an established Punjabi singer, or an indie artist — our proven promotion strategies and industry connections can take your music to the next level.",
    ],
    faqs: [
      { q: "Do you work with independent artists?", a: "Absolutely! We love helping Chandigarh's independent artists reach wider audiences. We have packages for every budget." },
      { q: "Can you help with Punjabi music specifically?", a: "Yes, Punjabi music is our specialty! We have deep expertise in the genre and strong connections with Punjabi music curators." },
      { q: "Do you offer music video production?", a: "Yes, we handle everything from concept to filming to editing, right here in Chandigarh." },
      { q: "How far in advance should I plan?", a: "We recommend starting 6-8 weeks before release for maximum impact." },
    ],
  },

  "video-editing-in-chandigarh": {
    slug: "video-editing-in-chandigarh",
    serviceSlug: "video-editing",
    title: "Video Editing Services in Chandigarh",
    h1: "Best Video Editing Company in Chandigarh",
    tagline: "Professional video production, Chandigarh-based.",
    metaTitle: "Top Video Editing Company in Chandigarh",
    metaDescription: "TML is the best video editing agency in Chandigarh. Professional video production services — 2000+ videos, reels, corporate films, ads. 48hr turnaround.",
    keywords: ["video editing chandigarh", "video production chandigarh", "video editing company chandigarh", "corporate video chandigarh"],
    heroDescription: "TML is the best video editing company in Chandigarh with 2000+ videos produced. Our video production agency offers professional editing services for tricity businesses — Instagram reels, corporate films, music videos, and ad campaigns. Top quality, fast turnaround.",
    whyChoose: [
      { title: "Top Video Production Company", description: "Massive experience producing content for every format — social media, corporate, advertising, and entertainment." },
      { title: "48-Hour Turnaround", description: "Fast video editing services with delivery for time-sensitive content without compromising quality." },
      { title: "Local Production Agency", description: "Our Chandigarh-based editors and videographers are available for on-ground shoots across the tricity." },
      { title: "All Formats & Platforms", description: "Our video editing company delivers optimized output for Instagram, YouTube, LinkedIn, TV, and any platform you need." },
    ],
    localContent: [
      "TML is Chandigarh's most trusted video editing company, producing content for brands, artists, and businesses across the tricity. From quick social media reels to cinematic corporate films — we deliver professional-quality video content.",
      "Our local production team is available for on-ground video shoots across Chandigarh, Mohali, and Panchkula. Whether you need a product showcase at Elante Mall or a corporate video at your IT Park office — we handle production and post-production.",
      "We specialize in content that performs — every edit is optimized for the platform it's intended for, whether that's vertical reels for Instagram, widescreen for YouTube, or square for LinkedIn.",
    ],
    faqs: [
      { q: "Do you offer filming services in Chandigarh?", a: "Yes! Our production team handles filming across Chandigarh, Mohali, and Panchkula with professional equipment." },
      { q: "What's the cost of video editing?", a: "Short-form videos from ₹2,000/video, corporate videos from ₹15,000. Custom quotes for larger projects." },
      { q: "How fast can you deliver?", a: "Standard turnaround is 48 hours for short-form content. Same-day delivery available for urgent requests." },
      { q: "Can you edit music videos?", a: "Absolutely — music video editing is one of our specialties, given Chandigarh's vibrant music scene." },
    ],
  },

  "branding-packaging-in-chandigarh": {
    slug: "branding-packaging-in-chandigarh",
    serviceSlug: "branding-packaging",
    title: "Packaging Design in Chandigarh",
    h1: "Best Packaging Design Agency in Chandigarh",
    tagline: "Packaging that sells off Chandigarh shelves.",
    metaTitle: "Top Packaging Design Agency in Chandigarh",
    metaDescription: "TML is the best packaging design company in Chandigarh. Professional design services for food, beauty, FMCG. 500+ packages designed. Free consultation.",
    keywords: ["packaging design chandigarh", "product packaging chandigarh", "label design chandigarh", "packaging company chandigarh"],
    heroDescription: "TML is the best packaging design company in Chandigarh with 500+ packages designed. Our packaging agency offers design services for food, beauty, FMCG, and more — creating packaging that tells your brand story and drives purchase decisions at the point of sale.",
    whyChoose: [
      { title: "Top Packaging Design Company", description: "Extensive experience designing packaging for products sold in Chandigarh's retail market and beyond." },
      { title: "Print Partner Network", description: "Strong relationships with Chandigarh's best printing houses — our agency ensures quality production at competitive prices." },
      { title: "Retail Design Services", description: "We know what works on Chandigarh shelves — packaging design that stands out in Sector 17 stores and Elante Mall alike." },
      { title: "End-to-End Agency", description: "From concept and design services to mockups, prototyping, and print coordination — a complete packaging company." },
    ],
    localContent: [
      "As Chandigarh's leading packaging design agency, TML has created packaging for food brands, cosmetics companies, FMCG products, and specialty items sold across the tricity and beyond.",
      "Our design team works closely with Chandigarh's top printing houses to ensure your packaging is produced to the highest standards at competitive prices. We handle everything from initial concept to final print coordination.",
      "Whether you're launching a new food product at Chandigarh's local markets, a cosmetics line for Elante Mall, or an FMCG brand for national distribution — our packaging designs are crafted to sell.",
    ],
    faqs: [
      { q: "Do you work with local printers?", a: "Yes, we have established relationships with top printing houses in Chandigarh for quality production at competitive rates." },
      { q: "Can you design food packaging?", a: "Absolutely — food packaging is one of our core specialties, including all regulatory compliance requirements." },
      { q: "How many design options do I get?", a: "We typically present 3 initial concepts, then refine the chosen direction through 2-3 rounds of revision." },
      { q: "Do you handle the printing too?", a: "We coordinate with printers and oversee production quality. Printing costs are billed separately." },
    ],
  },

  "graphic-design-in-chandigarh": {
    slug: "graphic-design-in-chandigarh",
    serviceSlug: "graphic-design",
    title: "Graphic Design Agency in Chandigarh",
    h1: "Best Graphic Design Agency in Chandigarh",
    tagline: "Creative design for Chandigarh brands.",
    metaTitle: "Best Graphic Design Agency in Chandigarh",
    metaDescription: "TML is Chandigarh's top graphic design company offering creative design services. 10K+ designs created. Social media, print, ads. Fast turnaround. Get a quote.",
    keywords: ["graphic design chandigarh", "graphic design agency chandigarh", "design company chandigarh", "creative agency chandigarh"],
    heroDescription: "TML is the best graphic design company in Chandigarh with 10K+ designs created for 500+ brands. Our creative agency offers graphic design services covering social media creatives, print materials, presentations, and ad campaigns — designs that communicate, engage, and convert.",
    whyChoose: [
      { title: "Top Graphic Design Company", description: "Massive portfolio covering every type of design — social media, print, digital, packaging, and more." },
      { title: "Fast Design Services", description: "24-48 hour delivery for standard graphic design. Same-day available for urgent requests from our agency." },
      { title: "Subscription Plans", description: "Monthly design retainers perfect for Chandigarh businesses that need regular creative services from a reliable company." },
      { title: "Multi-Format Delivery", description: "Every design delivered in all formats needed — our graphic design agency handles digital, print, social, and presentation." },
    ],
    localContent: [
      "As Chandigarh's top graphic design agency, TML creates visual content for brands across every industry in the tricity. From daily social media posts for restaurants to corporate presentations for IT companies — we design it all.",
      "Our Chandigarh design team combines creativity with strategy. Every design is crafted to serve a purpose — whether that's driving engagement on Instagram, converting visitors on a landing page, or impressing investors in a pitch deck.",
      "We offer flexible plans for Chandigarh businesses — from one-off projects to monthly design retainers that give you unlimited design requests with guaranteed fast turnaround.",
    ],
    faqs: [
      { q: "Do you offer monthly design packages?", a: "Yes! Our monthly retainers start from ₹15,000/month with a set number of design requests and 24-48hr turnaround." },
      { q: "What types of design do you handle?", a: "Social media graphics, brochures, flyers, posters, presentations, business cards, ads, infographics, and more." },
      { q: "What's your turnaround time?", a: "Standard designs in 24-48 hours. Complex projects are scoped with custom timelines." },
      { q: "Can I visit your office for design briefs?", a: "Yes! In-person briefs are welcome at our Chandigarh office for better creative collaboration." },
    ],
  },
};

export const allChandigarhSlugs = Object.keys(chandigarhServices);
