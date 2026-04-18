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

// Evaluated at build time — gives every fresh build a real, up-to-date lastmod
// instead of a hardcoded string Google learns to ignore.
const BUILD_DATE = new Date();

// Deterministic per-URL offset so programmatic pages have varied — but stable —
// lastmod dates. Prevents Google treating bulk identical timestamps as noise,
// while keeping the signal reproducible across builds until content changes.
function staggeredDate(key: string, maxDaysAgo: number): Date {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = ((hash << 5) - hash + key.charCodeAt(i)) | 0;
  }
  const daysAgo = Math.abs(hash) % Math.max(1, maxDaysAgo);
  const d = new Date(BUILD_DATE);
  d.setDate(d.getDate() - daysAgo);
  return d;
}

/* ------------------------------------------------------------------ */
/*  Builders for each content type                                    */
/* ------------------------------------------------------------------ */

function buildPages(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about/`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact/`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/careers/`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog/`, lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/portfolio/`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/digital-marketing-agency-chandigarh/`, lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/digital-marketing-consultant-in-canada/`, lastModified: staggeredDate("digital-marketing-consultant-in-canada", 30), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/ppc-training-in-chandigarh/`, lastModified: staggeredDate("ppc-training-in-chandigarh", 30), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/seo-in-punjab/`, lastModified: staggeredDate("seo-in-punjab", 30), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/social-media-marketing-expert-in-toronto/`, lastModified: staggeredDate("social-media-marketing-expert-in-toronto", 30), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy-policy/`, lastModified: new Date("2025-06-01"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/terms-of-service/`, lastModified: new Date("2025-06-01"), changeFrequency: "yearly", priority: 0.2 },
  ];
}

function buildServices(): MetadataRoute.Sitemap {
  const serviceEntries: MetadataRoute.Sitemap = (allServiceSlugs ?? []).map((slug) => ({
    url: `${baseUrl}/services/${slug}/`,
    lastModified: staggeredDate(`service:${slug}`, 45),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const chandigarhEntries: MetadataRoute.Sitemap = (allChandigarhSlugs ?? []).map((slug) => ({
    url: `${baseUrl}/services/${slug}/`,
    lastModified: staggeredDate(`chandigarh:${slug}`, 21),
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
        lastModified: staggeredDate(def.urlSlug, 75),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }));
  } catch {
    return [];
  }
}

function buildBlog(): MetadataRoute.Sitemap {
  try {
    return Object.entries(blogArticles ?? {}).map(([slug, article]) => {
      const rawDate = article.dateModified || article.date;
      const lastModified = rawDate ? new Date(rawDate) : staggeredDate(`blog:${slug}`, 60);
      return {
        url: `${baseUrl}/blog/${slug}/`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      };
    });
  } catch {
    return [];
  }
}

function buildIndustries(): MetadataRoute.Sitemap {
  const indexEntry: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/industries/`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  const uniqueSlugs = Array.from(new Set([...(allIndustrySlugs ?? []), ...(allIndustryPageSlugs ?? [])]));
  const industryEntries: MetadataRoute.Sitemap = uniqueSlugs.map((slug) => ({
    url: `${baseUrl}/industries/${slug}/`,
    lastModified: staggeredDate(`industry:${slug}`, 45),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...indexEntry, ...industryEntries];
}

function buildToolsAndCases(): MetadataRoute.Sitemap {
  const locationHubEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/locations/`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    ...["canada", "united-states", "united-kingdom", "australia", "new-zealand", "india", "uae"].map(
      (country) => ({
        url: `${baseUrl}/locations/${country}/`,
        lastModified: staggeredDate(`country:${country}`, 30),
        changeFrequency: "monthly" as const,
        priority: 0.5,
      })
    ),
  ];

  const freeToolEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/free-tools/`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    ...(allToolSlugs ?? []).map((slug) => ({
      url: `${baseUrl}/free-tools/${slug}/`,
      lastModified: staggeredDate(`tool:${slug}`, 45),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];

  const caseStudyEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/case-studies/`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    ...(allCaseStudySlugs ?? []).map((slug) => ({
      url: `${baseUrl}/case-studies/${slug}/`,
      lastModified: staggeredDate(`case:${slug}`, 45),
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
