import type { MetadataRoute } from "next";
import { allServiceSlugs } from "@/data/servicePages";
import { allChandigarhSlugs } from "@/data/chandigarhServices";
import { getAllLocationServiceDefs } from "@/data/locations";
import { blogArticles } from "@/data/blogArticles";
import { allIndustrySlugs, allIndustryPageSlugs } from "@/data/industries";
import { allToolSlugs } from "@/data/freeTools";
import { allCaseStudySlugs } from "@/data/caseStudies";
import { shouldNoindex } from "@/utils/noindex";

/* ------------------------------------------------------------------ */
/*  Single sitemap — all URLs fit well within the 50,000 URL limit    */
/* ------------------------------------------------------------------ */

const baseUrl = "https://townmedialabs.com";

/* ------------------------------------------------------------------ */
/*  Builders for each content type                                    */
/* ------------------------------------------------------------------ */

function buildPages(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, lastModified: new Date("2026-04-13"), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about/`, lastModified: new Date("2026-04-13"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/`, lastModified: new Date("2026-04-13"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact/`, lastModified: new Date("2026-01-15"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/careers/`, lastModified: new Date("2026-04-13"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog/`, lastModified: new Date("2026-04-13"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/portfolio/`, lastModified: new Date("2026-04-13"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/digital-marketing-agency-chandigarh/`, lastModified: new Date("2026-04-13"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/digital-marketing-consultant-in-canada/`, lastModified: new Date("2026-04-14"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/ppc-training-in-chandigarh/`, lastModified: new Date("2026-04-14"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/seo-in-punjab/`, lastModified: new Date("2026-04-14"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/social-media-marketing-expert-in-toronto/`, lastModified: new Date("2026-04-14"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy-policy/`, lastModified: new Date("2025-06-01"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/terms-of-service/`, lastModified: new Date("2025-06-01"), changeFrequency: "yearly", priority: 0.2 },
  ];
}

function buildServices(): MetadataRoute.Sitemap {
  const serviceEntries: MetadataRoute.Sitemap = (allServiceSlugs ?? []).map((slug) => ({
    url: `${baseUrl}/services/${slug}/`,
    lastModified: new Date("2026-04-13"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const chandigarhEntries: MetadataRoute.Sitemap = (allChandigarhSlugs ?? []).map((slug) => ({
    url: `${baseUrl}/services/${slug}/`,
    lastModified: new Date("2026-04-13"),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...serviceEntries, ...chandigarhEntries];
}

function buildLocations(): MetadataRoute.Sitemap {
  const chandigarhSlugSet = new Set(allChandigarhSlugs ?? []);

  try {
    return getAllLocationServiceDefs()
      .filter((def) => !chandigarhSlugSet.has(def.urlSlug))
      .filter((def) => !shouldNoindex(def.serviceSlug, def.locationSlug))
      .map((def) => ({
        url: `${baseUrl}/services/${def.urlSlug}/`,
        lastModified: new Date("2026-04-13"),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }));
  } catch {
    return [];
  }
}

function buildBlog(): MetadataRoute.Sitemap {
  try {
    return Object.entries(blogArticles ?? {}).map(([slug, article]) => ({
      url: `${baseUrl}/blog/${slug}/`,
      lastModified: new Date(article.dateModified || article.date || "2026-04-13"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    return [];
  }
}

function buildIndustries(): MetadataRoute.Sitemap {
  const indexEntry: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/industries/`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  const uniqueSlugs = Array.from(new Set([...(allIndustrySlugs ?? []), ...(allIndustryPageSlugs ?? [])]));
  const industryEntries: MetadataRoute.Sitemap = uniqueSlugs.map((slug) => ({
    url: `${baseUrl}/industries/${slug}/`,
    lastModified: new Date("2026-04-13"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...indexEntry, ...industryEntries];
}

function buildToolsAndCases(): MetadataRoute.Sitemap {
  const locationHubEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/locations/`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    ...["canada", "united-states", "united-kingdom", "australia", "new-zealand", "india", "uae"].map(
      (country) => ({
        url: `${baseUrl}/locations/${country}/`,
        lastModified: new Date("2026-04-13"),
        changeFrequency: "monthly" as const,
        priority: 0.5,
      })
    ),
  ];

  const freeToolEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/free-tools/`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    ...(allToolSlugs ?? []).map((slug) => ({
      url: `${baseUrl}/free-tools/${slug}/`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];

  const caseStudyEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/case-studies/`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    ...(allCaseStudySlugs ?? []).map((slug) => ({
      url: `${baseUrl}/case-studies/${slug}/`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [...locationHubEntries, ...freeToolEntries, ...caseStudyEntries];
}

/* ------------------------------------------------------------------ */
/*  Main sitemap function — no generateSitemaps needed, serves at     */
/*  /sitemap.xml directly which matches robots.txt reference          */
/* ------------------------------------------------------------------ */

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    ...buildPages(),
    ...buildServices(),
    ...buildLocations(),
    ...buildBlog(),
    ...buildIndustries(),
    ...buildToolsAndCases(),
  ];
}
