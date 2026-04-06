/**
 * Server-side data preparation for LocationServiceTemplate.
 *
 * This file imports the large data modules (locations, servicePages,
 * blogArticles, industries, serviceSeoContent, serviceSeoOverlays) and
 * pre-computes the small slices the client component actually needs.
 *
 * Because this file is never imported from a "use client" module, none
 * of these data files end up in the client JS bundle.
 */

import { locations, getLocationServiceSlug } from "@/data/locations";
import { servicePages } from "@/data/servicePages";
import { blogArticles } from "@/data/blogArticles";
import { industries, industryPages } from "@/data/industries";
import { serviceSeoContent, getServiceSeoContentForCountry, type ServiceSeoData } from "@/data/serviceSeoContent";
import { serviceSeoOverlays, type CountrySeoOverlay } from "@/data/serviceSeoContentByCountry";
import { serviceRelatedBlogs, serviceRelatedIndustries } from "@/lib/internalLinks";
import type { LocationInfo } from "@/data/locations";

export interface PreparedCrossLinkLocation {
  slug: string;
  name: string;
  href: string;
}

export interface PreparedOtherService {
  slug: string;
  title: string;
  href: string;
}

export interface PreparedRelatedBlog {
  slug: string;
  title: string;
  category: string;
  metaDescription: string;
}

export interface PreparedRelatedIndustry {
  slug: string;
  name: string;
  description: string;
}

export interface PreparedServiceData {
  slug: string;
  title: string;
  tagline: string;
  features: { title: string; description: string }[];
  stats: { label: string; value: string }[];
  pricingNote?: string;
}

export interface LocationServicePreparedData {
  serviceData: PreparedServiceData | null;
  crossLinkLocations: PreparedCrossLinkLocation[];
  otherServices: PreparedOtherService[];
  relatedBlogs: PreparedRelatedBlog[];
  relatedIndustries: PreparedRelatedIndustry[];
  seoOverlay: CountrySeoOverlay | null;
  seoContent: ServiceSeoData | null;
  countrySeoContent: ServiceSeoData | null;
}

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
];

export function prepareLocationServiceData(
  serviceSlug: string,
  locationSlug: string,
): LocationServicePreparedData {
  const location: LocationInfo | undefined = locations[locationSlug];
  const sp = servicePages[serviceSlug];

  // --- serviceData (only the fields the client needs) ---
  const serviceData: PreparedServiceData | null = sp
    ? {
        slug: sp.slug,
        title: sp.title,
        tagline: sp.tagline,
        features: sp.features.map((f) => ({ title: f.title, description: f.description })),
        stats: sp.stats.map((s) => ({ label: s.label, value: s.value })),
        pricingNote: sp.pricingNote,
      }
    : null;

  // --- crossLinkLocations ---
  let crossLinkLocations: PreparedCrossLinkLocation[] = [];
  if (location) {
    const allOther = Object.values(locations).filter(
      (loc) => loc.slug !== location.slug,
    );
    const sameCountry = allOther.filter(
      (loc) => loc.country === location.country,
    );
    const otherCountry = allOther.filter(
      (loc) => loc.country !== location.country,
    );
    crossLinkLocations = [...sameCountry.slice(0, 5), ...otherCountry.slice(0, 3)].map(
      (loc) => ({
        slug: loc.slug,
        name: loc.name,
        href: `/services/${getLocationServiceSlug(serviceSlug, loc.slug)}`,
      }),
    );
  }

  // --- otherServices ---
  const otherServices: PreparedOtherService[] = OTHER_SERVICE_SLUGS.filter(
    (s) => s !== serviceSlug,
  )
    .slice(0, 6)
    .map((s) => {
      const sData = servicePages[s];
      if (!sData) return null;
      return {
        slug: s,
        title: sData.title,
        href: location
          ? `/services/${getLocationServiceSlug(s, location.slug)}`
          : `/services/${s}`,
      };
    })
    .filter(Boolean) as PreparedOtherService[];

  // --- relatedBlogs ---
  const blogSlugs = (serviceRelatedBlogs[serviceSlug] || []).slice(0, 3);
  const relatedBlogs: PreparedRelatedBlog[] = blogSlugs
    .map((slug) => {
      const article = blogArticles[slug];
      if (!article) return null;
      return {
        slug,
        title: article.title,
        category: article.category,
        metaDescription: article.metaDescription,
      };
    })
    .filter(Boolean) as PreparedRelatedBlog[];

  // --- relatedIndustries ---
  const industrySlugs = serviceRelatedIndustries[serviceSlug] || [];
  const relatedIndustries: PreparedRelatedIndustry[] = industrySlugs
    .map((slug) => {
      const legacy = industries[slug];
      const v2 = industryPages[slug];
      if (v2) return { slug, name: v2.name, description: v2.metaDescription };
      if (legacy) return { slug, name: legacy.name, description: legacy.description };
      return null;
    })
    .filter(Boolean) as PreparedRelatedIndustry[];

  // --- seoOverlay ---
  const seoOverlay: CountrySeoOverlay | null =
    (location && serviceSeoOverlays[serviceSlug]?.[location.country]) || null;

  // --- seoContent ---
  const seoContent: ServiceSeoData | null = serviceSeoContent[serviceSlug] || null;

  // --- countrySeoContent (country-specific pricing/intro overrides) ---
  const countrySeoContent: ServiceSeoData | null = location
    ? getServiceSeoContentForCountry(serviceSlug, location.country) || null
    : null;

  return {
    serviceData,
    crossLinkLocations,
    otherServices,
    relatedBlogs,
    relatedIndustries,
    seoOverlay,
    seoContent,
    countrySeoContent,
  };
}
