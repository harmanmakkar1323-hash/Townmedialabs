export interface Author {
  id: string;
  name: string;
  title: string;
  bio: string;
  expertise: string[];
  yearsOfExperience: number;
  image?: string;
  linkedin?: string;
  twitter?: string;
}

export const authors: Record<string, Author> = {
  "raman-makkar": {
    id: "raman-makkar",
    name: "Raman Makkar",
    title: "Co-Founder & SEO Director",
    bio: "Raman leads SEO and growth at TML Agency, a full-service digital marketing agency serving 500+ brands across India. With 10+ years of experience in SEO, brand strategy, and digital marketing, Raman specializes in helping businesses achieve sustainable growth through data-driven strategies and human-centered brand building.",
    expertise: ["SEO", "Branding", "Digital Marketing Strategy", "Growth Strategy"],
    yearsOfExperience: 10,
    image: "/authors/raman-makkar.svg",
    linkedin: "https://linkedin.com/in/ramanmakkar",
    twitter: "https://twitter.com/ramanmakkar",
  },
  "tml-agency": {
    id: "tml-agency",
    name: "TML Agency",
    title: "Editorial Team",
    bio: "TML Agency is a full-service branding and digital marketing agency founded in 2010. Our team of 70+ designers, developers, strategists, and marketers create comprehensive brand ecosystems for businesses across India. We combine creativity with data-driven insights to deliver measurable results.",
    expertise: ["Branding", "Web Development", "Digital Marketing", "Video Production", "Google Ads", "SEO"],
    yearsOfExperience: 10,
    image: "/authors/tml-agency.svg",
    linkedin: "https://linkedin.com/company/town-media-labs",
  },
  "arvinder-singh": {
    id: "arvinder-singh",
    name: "Arvinder Singh",
    title: "Owner & Founder",
    bio: "Arvinder is the founder and visionary behind TML Agency, with 15+ years of experience in digital marketing and SEO. He oversees the agency's strategic direction and has helped 500+ brands improve their search visibility through technical SEO, content strategy, and building E-E-A-T signals for AI-ready content.",
    expertise: ["SEO", "Technical SEO", "Content Strategy", "E-E-A-T", "AI-Ready Content"],
    yearsOfExperience: 15,
    image: "/authors/arvinder-singh.svg",
  },
  "taran": {
    id: "taran",
    name: "Taran",
    title: "Head of Sales & Brand Strategist",
    bio: "Taran leads sales and brand strategy at TML Agency, specializing in brand positioning, visual identity, and brand messaging. With 8+ years of experience, he has developed brand identities for startups, established brands, and enterprises across multiple industries.",
    expertise: ["Brand Strategy", "Brand Positioning", "Visual Identity", "Brand Messaging", "Design Thinking"],
    yearsOfExperience: 8,
    image: "/authors/taran.svg",
  },
  "harman": {
    id: "harman",
    name: "Harman",
    title: "Project Manager & Performance Marketing Lead",
    bio: "Harman manages performance marketing initiatives at TML Agency, overseeing campaigns across Google Ads, Facebook, Instagram, and LinkedIn. With 6+ years of experience, he has helped brands achieve 300%+ ROI improvements through data-driven marketing strategies and meticulous project management.",
    expertise: ["Google Ads", "Performance Marketing", "Facebook Ads", "Marketing Analytics", "Conversion Optimization"],
    yearsOfExperience: 6,
    image: "/authors/harman.svg",
  },
  "cristi": {
    id: "cristi",
    name: "Cristi",
    title: "Designer & Content Strategist",
    bio: "Cristi creates compelling content and visual designs that rank, convert, and resonate with audiences. As a designer and content strategist at TML Agency with 5+ years of experience, she specializes in blog content, website copy, visual storytelling, and content strategy for B2B and B2C brands.",
    expertise: ["Content Writing", "Content Strategy", "SEO Writing", "Copywriting", "Blog Content"],
    yearsOfExperience: 5,
    image: "/authors/cristi.svg",
  },
};

// Map of article slug to author ID
export const articleAuthorMap: Record<string, string> = {
  "top-10-branding-agencies-chandigarh": "raman-makkar",
  "what-are-ai-influencers-how-to-create-earn-money": "harman",
  "best-way-to-promote-song-online-free": "harman",
  "how-to-make-song-trending-on-spotify": "cristi",
  "how-to-make-song-viral-on-instagram": "harman",
  "how-to-upload-song-on-instagram": "cristi",
  "website-not-showing-on-google-fix": "arvinder-singh",
  "website-not-showing-on-google": "arvinder-singh",
  "not-getting-leads-from-website": "taran",
  "website-not-getting-traffic": "arvinder-singh",
  "why-website-not-ranking-on-google": "arvinder-singh",
  "ai-in-digital-marketing-2026": "harman",
  "social-media-marketing-strategy-2026": "harman",
  "local-seo-guide-small-business": "arvinder-singh",
  "content-marketing-roi-guide": "cristi",
  "signs-you-need-website-redesign": "taran",
  "google-ads-not-working": "harman",
  "website-loading-slow-how-to-fix": "arvinder-singh",
  "website-not-mobile-friendly-fix": "arvinder-singh",
  "google-ads-vs-seo-which-is-better": "harman",
  "best-digital-marketing-agency-chandigarh": "taran",
  "best-seo-company-chandigarh": "arvinder-singh",
  "best-web-designer-chandigarh": "taran",
  "best-digital-marketing-company-chandigarh": "harman",
  "best-google-ads-agency-chandigarh": "harman",
  "best-social-media-marketing-agency-chandigarh": "harman",
  "best-content-marketing-agency-chandigarh": "cristi",
  "best-web-development-company-chandigarh": "taran",
  "best-e-commerce-web-development-agency-chandigarh": "taran",
  "best-website-design-agency-chandigarh": "taran",
  "best-ppc-agency-chandigarh": "harman",
  "best-brand-design-agency-chandigarh": "taran",
  "best-graphic-design-agency-chandigarh": "taran",
  "best-video-production-company-chandigarh": "taran",
  "best-ui-ux-design-agency-chandigarh": "taran",
  "best-instagram-marketing-agency-chandigarh": "harman",
  "best-facebook-marketing-agency-chandigarh": "harman",
  "best-linkedin-marketing-agency-chandigarh": "harman",
  "best-email-marketing-agency-chandigarh": "harman",
  "best-marketing-agency-chandigarh": "raman-makkar",
  "branding-agencies-in-ambala": "raman-makkar",
  "branding-agencies-in-yamunanagar": "raman-makkar",
  "branding-agencies-in-kurukshetra": "raman-makkar",
  "branding-agencies-in-hisar": "raman-makkar",
  "branding-agencies-in-rohtak": "raman-makkar",
  "branding-agencies-in-panipat": "raman-makkar",
  "branding-agencies-in-faridabad": "raman-makkar",
  "branding-agencies-in-gurgaon": "raman-makkar",
  "branding-agencies-in-delhi": "raman-makkar",
  "branding-agencies-in-noida": "raman-makkar",
  "branding-agencies-in-greater-noida": "raman-makkar",
  "branding-agencies-in-mohali": "raman-makkar",
  "branding-agencies-in-panchkula": "raman-makkar",
  "branding-agencies-in-pune": "raman-makkar",
  "branding-agencies-in-mumbai": "raman-makkar",
  "branding-agencies-in-bangalore": "raman-makkar",
  "branding-agencies-in-hyderabad": "raman-makkar",
  "branding-agencies-in-kolkata": "raman-makkar",
  "branding-agencies-in-ahmedabad": "raman-makkar",
  // Lead-gen blog posts (April 2026)
  "social-media-marketing-cost-india": "harman",
  "is-hiring-digital-marketing-agency-worth-it": "raman-makkar",
  "facebook-instagram-ads-cost-india": "harman",
  "best-seo-package-for-small-business": "raman-makkar",
  "freelancer-vs-digital-marketing-agency": "raman-makkar",
  "how-to-get-more-customers-online-india": "raman-makkar",
  "promote-business-on-instagram-free": "harman",
  "google-my-business-se-customer-kaise-laaye": "raman-makkar",
  "why-business-needs-website-2026": "raman-makkar",
  "online-marketing-kaise-shuru-karein": "raman-makkar",
};

/**
 * Return the author for a given blog article slug.
 * Falls back to the "tml-agency" default so every post has clear authorship (E-E-A-T).
 */
export function getAuthorBySlug(slug: string): Author {
  const authorId = articleAuthorMap[slug] ?? "tml-agency";
  return authors[authorId] ?? authors["tml-agency"];
}

export function getAuthorById(id: string): Author | null {
  return authors[id] || null;
}
