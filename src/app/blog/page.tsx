import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import InnerNavbar from "@/components/layout/InnerNavbar";
import BlogPageClient from "./BlogPageClient";
import { blogPosts, blogCategories } from "@/data/blogPosts";

const siteUrl = "https://townmedialabs.com";

export const metadata: Metadata = {
  title: "Marketing, Branding & SEO Blog | TML Agency",
  description:
    "Expert insights on digital marketing, branding, SEO, AI, social media and ad strategy from TML Agency. Practical guides to grow your brand online.",
  keywords: [
    "digital marketing blog",
    "branding insights",
    "seo tips",
    "social media marketing blog",
    "ai marketing",
    "tml agency blog",
    "marketing agency blog chandigarh",
  ],
  alternates: {
    canonical: "/blog/",
    languages: {
      "en-IN": "https://townmedialabs.com/blog/",
      "x-default": "https://townmedialabs.com/blog/",
    },
  },
  openGraph: {
    title: "Marketing, Branding & SEO Blog | TML Agency",
    description:
      "Expert insights on digital marketing, branding, SEO, AI, and ad strategy from TML Agency. Practical guides to grow your brand online.",
    url: `${siteUrl}/blog/`,
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TML Agency Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Marketing, Branding & SEO Blog | TML Agency",
    description:
      "Expert insights on digital marketing, branding, SEO, AI, and ad strategy from TML Agency. Practical guides to grow your brand online.",
    images: ["/og-image.png"],
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "TML Agency Blog",
  description:
    "Expert insights on digital marketing, branding, SEO, AI, and creative strategy.",
  url: `${siteUrl}/blog`,
  publisher: {
    "@type": "Organization",
    name: "TML Agency",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
    },
  },
  inLanguage: "en-IN",
};

const blogCollectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "TML Agency Blog — Marketing, Branding & AI Insights",
  description:
    "Expert insights on digital marketing, branding, SEO, AI, and ad strategy from TML Agency — Chandigarh's leading creative agency.",
  url: `${siteUrl}/blog`,
  isPartOf: {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "TML Agency",
    url: siteUrl,
  },
};

const blogBreadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
  ],
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogCollectionJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogBreadcrumbJsonLd),
        }}
      />

      <InnerNavbar />

      {/* Hero — rendered as RSC so the H1 paints without waiting for JS hydration */}
      <section className="hero-orange-gradient relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#ff4500]/[0.03] rounded-full blur-[150px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
            ]}
          />
          <p className="text-[10px] md:text-xs text-white tracking-[0.2em] uppercase font-semibold mb-6 mt-8">
            Insights &amp; Ideas
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-white mb-6">
            The TML{" "}
            <span className="italic bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
              Blog.
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl leading-relaxed">
            Marketing strategies, creative insights, and industry trends from
            Town Media Labs — the team that builds brands people remember.
          </p>
        </div>
      </section>

      {/* Interactive content — client component loads after hero paints */}
      <BlogPageClient posts={blogPosts} categories={blogCategories} />
    </main>
  );
}
