import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogArticles } from "@/data/blogArticles";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema, generateHowToSchema } from "@/lib/schema";
import { extractFAQs, extractHowToSteps } from "@/lib/contentParser";
import { getAuthorBySlug } from "@/data/authors";
import { blogRelatedArticles, blogRelatedServices } from "@/lib/internalLinks";
import { servicePages } from "@/data/servicePages";
import BlogArticleClient from "./BlogArticleClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles[slug];
  if (!article) return {};

  const siteUrl = "https://townmedialabs.com";
  const author = getAuthorBySlug(slug);

  const seoTitle = article.metaTitle || article.title;
  const ogImage = article.image || "/og-image.png";

  return {
    title: seoTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical: `${siteUrl}/blog/${slug}/` },
    openGraph: {
      title: seoTitle,
      description: article.metaDescription,
      url: `${siteUrl}/blog/${slug}/`,
      siteName: "TML Agency",
      type: "article",
      locale: "en_IN",
      publishedTime: article.date,
      modifiedTime: article.dateModified || article.date,
      authors: author ? [author.name] : ["TML Agency"],
      images: [{ url: ogImage, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@tmlagency",
      title: seoTitle,
      description: article.metaDescription,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(blogArticles).map((slug) => ({ slug }));
}

export default async function BlogSlugPage({ params }: Props) {
  const { slug } = await params;
  const article = blogArticles[slug];
  if (!article) notFound();

  const siteUrl = "https://townmedialabs.com";
  const author = getAuthorBySlug(slug);

  const articleJsonLd = generateArticleSchema({
    title: article.title,
    description: article.metaDescription,
    image: article.image,
    datePublished: article.date,
    dateModified: article.dateModified || article.date,
    slug,
    keywords: article.keywords,
    category: article.category,
    authorName: author?.name,
    authorId: author?.id,
  });

  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: siteUrl },
    { name: "Blog", url: `${siteUrl}/blog` },
    { name: article.title, url: `${siteUrl}/blog/${slug}` },
  ]);

  // Extract structured FAQ data from article content (if present)
  const faqs = extractFAQs(article.content);
  const faqJsonLd = faqs.length > 0 ? generateFAQSchema(faqs) : null;

  // Extract structured HowTo steps from article content (if present)
  const howToData = extractHowToSteps(article.content);
  const howToJsonLd = howToData
    ? generateHowToSchema({
        name: howToData.name,
        description: article.metaDescription,
        steps: howToData.steps,
      })
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      )}
      <BlogArticleClient
        article={article}
        slug={slug}
        relatedArticles={(() => {
          let articleSlugs = blogRelatedArticles[slug] || [];
          // Category-based fallback: if no explicit related articles, pick 3 from same category
          if (articleSlugs.length === 0 && article.category) {
            articleSlugs = Object.entries(blogArticles)
              .filter(([s, a]) => s !== slug && a.category === article.category)
              .sort((a, b) => new Date(b[1].date).getTime() - new Date(a[1].date).getTime())
              .slice(0, 3)
              .map(([s]) => s);
          }
          return articleSlugs
            .map((s) => {
              const art = blogArticles[s];
              return art ? { slug: s, title: art.title, category: art.category, metaDescription: art.metaDescription, date: art.date, readTime: art.readTime, image: art.image } : null;
            })
            .filter((x): x is NonNullable<typeof x> => x !== null);
        })()}
        relatedServices={(() => {
          const serviceSlugs = blogRelatedServices[slug] || [];
          return serviceSlugs
            .map((s) => {
              const svc = servicePages[s];
              return svc ? { slug: svc.slug, title: svc.title, tagline: svc.tagline } : null;
            })
            .filter((x): x is NonNullable<typeof x> => x !== null);
        })()}
      />
    </>
  );
}
