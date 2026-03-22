import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogArticles } from "@/data/blogArticles";
import BlogArticleClient from "./BlogArticleClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles[slug];
  if (!article) return {};

  const siteUrl = "https://townmedialabs.com";

  const seoTitle = article.metaTitle || article.title;

  return {
    title: seoTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: seoTitle,
      description: article.metaDescription,
      url: `${siteUrl}/blog/${slug}`,
      siteName: "TML Agency",
      type: "article",
      locale: "en_IN",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: article.title }],
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

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    url: `https://townmedialabs.com/blog/${slug}`,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "TML Agency",
      url: "https://townmedialabs.com",
    },
    publisher: {
      "@type": "Organization",
      name: "TML Agency",
      logo: { "@type": "ImageObject", url: "https://townmedialabs.com/logo.png" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogArticleClient article={article} slug={slug} />
    </>
  );
}
