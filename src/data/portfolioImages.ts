export interface PortfolioImage {
  src: string;
  alt: string;
  category: "product-photography" | "graphic-design" | "web-design" | "social-media" | "creative-ads" | "packaging-design" | "poster-design";
}

/** Human-readable category labels */
export const categoryLabels: Record<PortfolioImage["category"], string> = {
  "product-photography": "Product Photography",
  "graphic-design": "Graphic Design",
  "web-design": "Web Design",
  "social-media": "Social Media",
  "creative-ads": "Creative Ads",
  "packaging-design": "Packaging Design",
  "poster-design": "Poster Design",
};

export const portfolioImages: PortfolioImage[] = [
  // Product Photography
  { src: "/work/product-photography-skincare-toner.webp", alt: "Skincare product photography — BYOMA hydrating toner campaign by TML Agency", category: "product-photography" },
  { src: "/work/product-photography-perfume-shoot.jpg", alt: "Luxury perfume product photography with cinematic lighting by TML Agency", category: "product-photography" },
  { src: "/work/product-photography-retro-brand.webp", alt: "Retro brand lifestyle product shoot — fashion and food styling", category: "product-photography" },
  { src: "/work/product-photography-sunscreen.jpg", alt: "Beauty product photography — sunscreen campaign with model", category: "product-photography" },
  { src: "/work/product-photography-sneaker-sky.webp", alt: "Lifestyle sneaker photography against blue sky backdrop", category: "product-photography" },
  { src: "/work/product-photography-lifestyle-drinks.webp", alt: "Lifestyle brand photography — fashion and drinks styling", category: "product-photography" },
  { src: "/work/product-photography-skincare-set.webp", alt: "Skincare product set photography with model in styled environment", category: "product-photography" },
  { src: "/work/product-photography-facial-cream.jpg", alt: "Close-up beauty product photography — facial cream campaign", category: "product-photography" },
  { src: "/work/product-photography-bicycle-summer.jpg", alt: "Summer lifestyle fashion photography — outdoor brand campaign", category: "product-photography" },
  { src: "/work/product-photography-blue-brand.jpg", alt: "Monochrome brand campaign — product photography in blue theme", category: "product-photography" },
  { src: "/work/product-photography-bicycle-lifestyle.jpg", alt: "Lifestyle fashion photography with vibrant summer styling", category: "product-photography" },
  { src: "/work/product-photography-brand-lifestyle.jpg", alt: "Streetwear brand lifestyle product photography", category: "product-photography" },
  { src: "/work/product-photography-yellow-sneakers.jpg", alt: "Sneaker product photography — New Balance lifestyle shot", category: "product-photography" },
  { src: "/work/product-photography-styled-still-life.webp", alt: "Styled still life product photography — beauty and food composition", category: "product-photography" },
  { src: "/work/product-photography-fine-art.webp", alt: "Fine art fashion photography — cinematic editorial composition", category: "product-photography" },
  { src: "/work/product-photography-jewelry.webp", alt: "Jewelry product photography — diamond pendant on citrus slices", category: "product-photography" },
  { src: "/work/product-photography-handbag-sunset.webp", alt: "Fashion product photography — designer handbag at sunset", category: "product-photography" },
  { src: "/work/product-photography-cinematic-portrait.webp", alt: "Cinematic brand portrait photography — lifestyle campaign", category: "product-photography" },
  { src: "/work/product-photography-food-croissant.webp", alt: "Food photography — exploding chocolate croissant with dramatic lighting", category: "product-photography" },
  { src: "/work/product-photography-lipstick-beauty.webp", alt: "Beauty product styling — lipstick and cherry creative composition", category: "product-photography" },
  { src: "/work/product-photography-fashion-editorial.webp", alt: "Fashion editorial photography — studio portrait with dramatic lighting", category: "product-photography" },
  { src: "/work/product-photography-creative-closeup.webp", alt: "Creative close-up product photography with artistic composition", category: "product-photography" },
  { src: "/work/product-photography-fashion-shoes.webp", alt: "Fashion detail photography — velvet shoes with styled accessories", category: "product-photography" },
  { src: "/work/product-photography-cocktails.webp", alt: "Beverage photography — artisan cocktails with premium styling", category: "product-photography" },
  { src: "/work/product-photography-fashion-night.webp", alt: "Night fashion editorial — model walking on pier with dramatic lighting", category: "product-photography" },
  { src: "/work/product-photography-luxury-skincare.webp", alt: "Luxury skincare product photography with dramatic shadow lighting", category: "product-photography" },

  // Graphic Design
  { src: "/work/graphic-design-3d-ux-concept.webp", alt: "3D UX design concept — illustrated transportation app interface by TML Agency", category: "graphic-design" },
  { src: "/work/graphic-design-creative-fashion-ad.jpg", alt: "Creative fashion advertising — miniature concept with designer handbag", category: "graphic-design" },
  { src: "/work/graphic-design-pepsi-billboard.jpg", alt: "Pepsi billboard campaign design — sports-themed advertising concept", category: "graphic-design" },
  { src: "/work/graphic-design-sneaker-creative.jpg", alt: "Creative sneaker advertising — miniature concept with giant shoe", category: "graphic-design" },
  { src: "/work/graphic-design-denim-fashion.webp", alt: "Fashion advertising design — denim brand creative campaign", category: "graphic-design" },
  { src: "/work/graphic-design-spice-sauce-ad.webp", alt: "Food brand advertising — Kerala spice sauce creative campaign", category: "graphic-design" },
  { src: "/work/graphic-design-food-ad.jpg", alt: "Food advertising design — fried chicken campaign with bold typography", category: "graphic-design" },
  { src: "/work/graphic-design-ai-brand.webp", alt: "AI brand advertising — creative parachute concept campaign", category: "graphic-design" },
  { src: "/work/graphic-design-colgate-creative.jpg", alt: "Creative toothpaste advertising — mountain peak concept design", category: "graphic-design" },
  { src: "/work/graphic-design-coca-cola-marvel.webp", alt: "Coca-Cola x Marvel crossover billboard design — creative collaboration campaign", category: "graphic-design" },
  { src: "/work/graphic-design-faber-castell.jpg", alt: "Faber-Castell creative outdoor advertising — clever ad placement design", category: "graphic-design" },
  { src: "/work/graphic-design-fried-chicken-ad.webp", alt: "Creative food brand advertising — fire extinguisher concept design", category: "graphic-design" },
  { src: "/work/graphic-design-snickers-guerilla.jpg", alt: "Guerilla marketing design — Snickers giant bar on skyscraper", category: "graphic-design" },
  { src: "/work/graphic-design-denim-heels.jpg", alt: "Fashion campaign graphic design — denim and heels SS23 collection", category: "graphic-design" },
  { src: "/work/graphic-design-fitness-billboard.webp", alt: "Fitness brand billboard design — bold typography and vibrant colours", category: "graphic-design" },
  { src: "/work/graphic-design-dental-creative.webp", alt: "Dental brand creative advertising — bridge concept design", category: "graphic-design" },
  { src: "/work/graphic-design-coca-cola-billboard.jpg", alt: "Coca-Cola creative billboard advertising — dual-brand outdoor placement", category: "graphic-design" },
  { src: "/work/graphic-design-clarity-brand.jpg", alt: "Brand clarity advertising — creative crowd concept design", category: "graphic-design" },
  { src: "/work/graphic-design-illustration.webp", alt: "Digital illustration — artistic portrait with vibrant colour palette", category: "graphic-design" },

  // Web Design
  { src: "/work/web-design-finance-hero.webp", alt: "Finance website hero design — investment platform with AI-generated imagery", category: "web-design" },
  { src: "/work/web-design-travel-app.webp", alt: "Travel app website design — modern UI with intelligent discovery features", category: "web-design" },
  { src: "/work/web-design-creative-agency-dark.jpg", alt: "Creative agency website design — dark theme with bold typography", category: "web-design" },
  { src: "/work/web-design-travel-adventure.jpg", alt: "Travel adventure app design — hero section with desert landscape", category: "web-design" },
  { src: "/work/web-design-community-platform.webp", alt: "Community platform website design — 3D character illustrations", category: "web-design" },
  { src: "/work/web-design-web3-platform.jpg", alt: "Web3 platform website design — blockchain with nature imagery", category: "web-design" },
  { src: "/work/web-design-ai-design-tool.jpg", alt: "AI design tool website — modern hero section with landscape photography", category: "web-design" },
  { src: "/work/web-design-productivity-tool.webp", alt: "Productivity app website design — minimalist focus-oriented UI", category: "web-design" },

  // Social Media
  { src: "/work/social-media-instagram-lifestyle.jpg", alt: "Instagram social media management — lifestyle brand engagement", category: "social-media" },
  { src: "/work/social-media-promo-grid.jpg", alt: "Social media campaign grid design — promotional posts with consistent branding", category: "social-media" },
  { src: "/work/social-media-instagram-mockup.webp", alt: "Instagram feed design mockup — cohesive visual identity for creative studio", category: "social-media" },
  { src: "/work/social-media-podcast-grid.jpg", alt: "Podcast social media grid design — astrology brand with cosmic theme", category: "social-media" },
  { src: "/work/social-media-agency-grid.jpg", alt: "Digital agency social media feed — blue and orange brand identity", category: "social-media" },
  { src: "/work/social-media-turkish-agency.jpg", alt: "Branding agency social media grid — magenta and pink visual identity", category: "social-media" },
  { src: "/work/social-media-brand-feed.webp", alt: "Brand Instagram feed design — curated lifestyle product photography", category: "social-media" },
  { src: "/work/social-media-chupa-chups.webp", alt: "Social media marketing — Chupa Chups brand engagement campaign", category: "social-media" },
  { src: "/work/social-media-real-estate-posts-grid.webp", alt: "Real estate social media posts grid — property marketing campaign", category: "social-media" },

  // Creative Ads
  { src: "/work/creative-ad-back-to-school-cairo.webp", alt: "Back to school creative ad campaign — Cairo education brand", category: "creative-ads" },
  { src: "/work/creative-ad-dental-clinic-fly.webp", alt: "Dental clinic creative advertisement — fly concept design", category: "creative-ads" },
  { src: "/work/creative-ad-durex-football.webp", alt: "Durex creative football-themed advertisement design", category: "creative-ads" },
  { src: "/work/creative-ad-eyewear-fashion.webp", alt: "Eyewear fashion creative advertising — bold visual campaign", category: "creative-ads" },
  { src: "/work/creative-ad-legal-education-red.webp", alt: "Legal education creative ad — bold red typography design", category: "creative-ads" },
  { src: "/work/creative-ad-protein-fitness.webp", alt: "Protein fitness brand creative advertising — gym campaign", category: "creative-ads" },
  { src: "/work/creative-ad-roofing-company.webp", alt: "Roofing company creative advertisement design", category: "creative-ads" },

  // Additional Graphic Design (social stories, brand posts, etc.)
  { src: "/work/graphic-design-brand-identity.webp", alt: "Brand identity design — comprehensive visual identity system", category: "graphic-design" },
  { src: "/work/graphic-design-brand-showcase.webp", alt: "Brand showcase design — premium presentation layout", category: "graphic-design" },
  { src: "/work/graphic-design-brand-story-creative.webp", alt: "Creative brand story design — social media visual narrative", category: "graphic-design" },
  { src: "/work/graphic-design-brand-story-layout.webp", alt: "Brand story layout design — editorial social media format", category: "graphic-design" },
  { src: "/work/graphic-design-brand-typography.webp", alt: "Brand typography design — typographic poster concept", category: "graphic-design" },
  { src: "/work/graphic-design-clean-minimal-ad.webp", alt: "Clean minimal advertisement design — premium brand aesthetic", category: "graphic-design" },
  { src: "/work/graphic-design-creative-brand.webp", alt: "Creative brand design — bold visual identity campaign", category: "graphic-design" },
  { src: "/work/graphic-design-creative-photography.webp", alt: "Creative photography design — artistic brand composition", category: "graphic-design" },
  { src: "/work/graphic-design-creative-story-ad.webp", alt: "Creative story ad design — social media format campaign", category: "graphic-design" },
  { src: "/work/graphic-design-dark-story-ad.webp", alt: "Dark theme story ad design — moody brand campaign", category: "graphic-design" },
  { src: "/work/graphic-design-minimal-brand-ad.webp", alt: "Minimal brand ad design — clean typographic layout", category: "graphic-design" },
  { src: "/work/graphic-design-minimal-story.webp", alt: "Minimal story design — simple elegant social format", category: "graphic-design" },
  { src: "/work/graphic-design-product-layout.webp", alt: "Product layout design — showcase with premium styling", category: "graphic-design" },
  { src: "/work/graphic-design-product-showcase.webp", alt: "Product showcase design — multi-item brand presentation", category: "graphic-design" },
  { src: "/work/graphic-design-social-media-story.webp", alt: "Social media story design — vertical brand content", category: "graphic-design" },
  { src: "/work/graphic-design-social-story-1.webp", alt: "Social story design — lifestyle brand visual", category: "graphic-design" },
  { src: "/work/graphic-design-social-story-3.webp", alt: "Social story design — fashion brand campaign visual", category: "graphic-design" },
  { src: "/work/graphic-design-social-story-4.webp", alt: "Social story design — premium product visual", category: "graphic-design" },
  { src: "/work/graphic-design-social-story-minimal.webp", alt: "Minimal social story design — clean brand aesthetic", category: "graphic-design" },
  { src: "/work/graphic-design-story-brand-post.webp", alt: "Brand post story design — social media format", category: "graphic-design" },
  { src: "/work/graphic-design-story-social-post.webp", alt: "Social post story design — engaging visual layout", category: "graphic-design" },

  // Packaging Design
  { src: "/work/packaging-design-candy-characters.webp", alt: "Candy packaging design — character-based branding for sweets", category: "packaging-design" },
  { src: "/work/packaging-design-character-cups.webp", alt: "Character cup packaging design — illustrated beverage branding", category: "packaging-design" },
  { src: "/work/packaging-design-eskimo-ice-cream.webp", alt: "Ice cream packaging design — Eskimo brand visual identity", category: "packaging-design" },
  { src: "/work/packaging-design-goody-candy-sour-sweet.webp", alt: "Candy packaging design — Goody sour sweet colourful branding", category: "packaging-design" },
  { src: "/work/packaging-design-kids-sandwich-box.webp", alt: "Kids sandwich box packaging design — fun illustrated branding", category: "packaging-design" },
  { src: "/work/packaging-design-minimalist-cans.webp", alt: "Minimalist can packaging design — clean modern beverage branding", category: "packaging-design" },
  { src: "/work/packaging-design-moody-snacks.webp", alt: "Moody snack packaging design — dark premium brand aesthetic", category: "packaging-design" },
  { src: "/work/packaging-design-water-bottle-brand.webp", alt: "Water bottle packaging design — fresh clean brand identity", category: "packaging-design" },

  // Poster Design
  { src: "/work/poster-design-netflix-induction.webp", alt: "Netflix induction poster design — entertainment brand concept", category: "poster-design" },
  { src: "/work/poster-design-weeknd-blinding-lights.webp", alt: "The Weeknd Blinding Lights poster design — music artwork concept", category: "poster-design" },
];

/** Get images by category */
export function getImagesByCategory(category: PortfolioImage["category"]): PortfolioImage[] {
  return portfolioImages.filter(img => img.category === category);
}

/** Get a deterministic subset of images for a given seed (e.g. service slug) */
export function getImagesForService(serviceSlug: string, count = 6): PortfolioImage[] {
  // Map services to relevant image categories
  const serviceCategories: Record<string, PortfolioImage["category"][]> = {
    branding: ["graphic-design", "product-photography"],
    "graphic-design": ["graphic-design", "product-photography"],
    "branding-packaging": ["graphic-design", "product-photography"],
    seo: ["web-design", "graphic-design"],
    "google-ads": ["web-design", "graphic-design", "social-media"],
    "social-media": ["social-media", "product-photography"],
    "lead-generation": ["web-design", "social-media"],
    "website-development": ["web-design"],
    "content-writing": ["graphic-design", "web-design"],
    "meta-ads": ["social-media", "graphic-design"],
    "link-building": ["web-design"],
    "technical-seo": ["web-design"],
    "video-editing": ["product-photography", "graphic-design"],
    "ai-influencer-management": ["social-media", "product-photography"],
    "music-release": ["graphic-design", "social-media"],
    "gmb-optimization": ["web-design", "social-media"],
  };

  const categories = serviceCategories[serviceSlug] || ["graphic-design", "web-design", "product-photography"];
  const relevant = portfolioImages.filter(img => categories.includes(img.category));

  // Deterministic shuffle based on slug
  let hash = 0;
  for (let i = 0; i < serviceSlug.length; i++) {
    hash = ((hash << 5) - hash) + serviceSlug.charCodeAt(i);
    hash |= 0;
  }

  const shuffled = [...relevant].sort((a, b) => {
    const ha = ((hash * 31 + a.src.length) | 0) % 1000;
    const hb = ((hash * 31 + b.src.length) | 0) % 1000;
    return ha - hb;
  });

  return shuffled.slice(0, count);
}

/** Get images for location service pages (mix of all categories) */
export function getImagesForLocation(citySlug: string, count = 4): PortfolioImage[] {
  let hash = 0;
  for (let i = 0; i < citySlug.length; i++) {
    hash = ((hash << 5) - hash) + citySlug.charCodeAt(i);
    hash |= 0;
  }

  const shuffled = [...portfolioImages].sort((a, b) => {
    const ha = ((hash * 17 + a.src.length) | 0) % 1000;
    const hb = ((hash * 17 + b.src.length) | 0) % 1000;
    return ha - hb;
  });

  return shuffled.slice(0, count);
}
