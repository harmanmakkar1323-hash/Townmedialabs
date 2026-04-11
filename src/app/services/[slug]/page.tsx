import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations, getAllLocationServiceDefs } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";
import { shouldNoindex } from "@/utils/noindex";

// ── Service mapping ──
// URL prefix → { serviceSlug, serviceName }
const SERVICE_MAP: Record<string, { serviceSlug: string; serviceName: string }> = {
  "online-reputation-management": { serviceSlug: "online-reputation-management", serviceName: "Online Reputation Management" },
  "conversion-rate-optimization": { serviceSlug: "conversion-rate-optimization", serviceName: "Conversion Rate Optimization" },
  "social-media-marketing": { serviceSlug: "social-media", serviceName: "Social Media Marketing" },
  "ai-influencer-management": { serviceSlug: "ai-influencer-management", serviceName: "AI Influencer Management" },
  "influencer-marketing": { serviceSlug: "influencer-marketing", serviceName: "Influencer Marketing" },
  "ecommerce-marketing": { serviceSlug: "ecommerce-marketing", serviceName: "E-commerce Marketing" },
  "website-development": { serviceSlug: "website-development", serviceName: "Website Development" },
  "content-marketing": { serviceSlug: "content-marketing", serviceName: "Content Marketing" },
  "branding-packaging": { serviceSlug: "branding-packaging", serviceName: "Packaging Design" },
  "email-marketing": { serviceSlug: "email-marketing", serviceName: "Email Marketing" },
  "lead-generation": { serviceSlug: "lead-generation", serviceName: "Lead Generation" },
  "content-writing": { serviceSlug: "content-writing", serviceName: "Content Writing" },
  "ppc-management": { serviceSlug: "ppc-management", serviceName: "PPC Management" },
  "graphic-design": { serviceSlug: "graphic-design", serviceName: "Graphic Design" },
  "music-release": { serviceSlug: "music-release", serviceName: "Music Release" },
  "video-editing": { serviceSlug: "video-editing", serviceName: "Video Editing" },
  "technical-seo": { serviceSlug: "technical-seo", serviceName: "Technical SEO" },
  "link-building": { serviceSlug: "link-building", serviceName: "Link Building" },
  "gmb-listing": { serviceSlug: "gmb-listing", serviceName: "GMB Listing" },
  "google-ads": { serviceSlug: "google-ads", serviceName: "Google Ads" },
  "branding": { serviceSlug: "branding", serviceName: "Branding" },
  "meta-ads": { serviceSlug: "meta-ads", serviceName: "Meta Ads" },
  "seo": { serviceSlug: "seo", serviceName: "SEO" },
};

// Sorted by length descending so longer prefixes match first
const SERVICE_PREFIXES = Object.keys(SERVICE_MAP).sort((a, b) => b.length - a.length);

function parseSlug(slug: string): { serviceSlug: string; serviceName: string; locationSlug: string } | null {
  for (const prefix of SERVICE_PREFIXES) {
    const pattern = `${prefix}-in-`;
    if (slug.startsWith(pattern)) {
      const citySlug = slug.slice(pattern.length);
      const locationKey = citySlug.replace(/-/g, "_");
      if (locations[locationKey]) {
        return { ...SERVICE_MAP[prefix], locationSlug: locationKey };
      }
      return null;
    }
  }
  return null;
}

// ── Static params ──
export function generateStaticParams() {
  const defs = getAllLocationServiceDefs();
  return defs.map((d) => ({ slug: d.urlSlug }));
}

// ── Metadata ──
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) return {};

  const location = locations[parsed.locationSlug];
  const { serviceName } = parsed;
  const cityName = location.name;
  const title = `${serviceName} Agency in ${cityName}`;
  const description = `TML offers expert ${serviceName} services in ${cityName}. Proven results for 500+ businesses. Get a free consultation today.`;
  const url = `https://townmedialabs.com/services/${slug}`;
  const isNoindex = shouldNoindex(parsed.serviceSlug, parsed.locationSlug);

  return {
    title,
    description,
    keywords: [
      `${serviceName.toLowerCase()} ${cityName.toLowerCase()}`,
      `${serviceName.toLowerCase()} agency ${cityName.toLowerCase()}`,
      `${serviceName.toLowerCase()} company ${cityName.toLowerCase()}`,
    ],
    alternates: { canonical: url },
    robots: { index: !isNoindex, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: "TML Agency",
      type: "website",
      locale: "en_IN",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `Best ${serviceName} Agency in ${cityName}` }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@tmlagency",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

// ── Page ──
export default async function ServiceCityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) notFound();

  const location = locations[parsed.locationSlug];

  return (
    <LocationServicePage
      location={location}
      serviceSlug={parsed.serviceSlug}
      serviceName={parsed.serviceName}
    />
  );
}
