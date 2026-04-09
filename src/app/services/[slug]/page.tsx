import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations, getAllLocationServiceDefs } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

// ── Service mapping ──
// URL prefix → { serviceSlug, serviceName }
const SERVICE_MAP: Record<string, { serviceSlug: string; serviceName: string }> = {
  "social-media-marketing": { serviceSlug: "social-media", serviceName: "Social Media Marketing" },
  "ai-influencer-management": { serviceSlug: "ai-influencer-management", serviceName: "AI Influencer Management" },
  "website-development": { serviceSlug: "website-development", serviceName: "Website Development" },
  "branding-packaging": { serviceSlug: "branding-packaging", serviceName: "Packaging Design" },
  "lead-generation": { serviceSlug: "lead-generation", serviceName: "Lead Generation" },
  "graphic-design": { serviceSlug: "graphic-design", serviceName: "Graphic Design" },
  "music-release": { serviceSlug: "music-release", serviceName: "Music Release" },
  "video-editing": { serviceSlug: "video-editing", serviceName: "Video Editing" },
  "google-ads": { serviceSlug: "google-ads", serviceName: "Google Ads" },
  "branding": { serviceSlug: "branding", serviceName: "Branding" },
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

  return {
    title,
    description,
    keywords: [
      `${serviceName.toLowerCase()} ${cityName.toLowerCase()}`,
      `${serviceName.toLowerCase()} agency ${cityName.toLowerCase()}`,
      `${serviceName.toLowerCase()} company ${cityName.toLowerCase()}`,
    ],
    alternates: { canonical: url },
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
