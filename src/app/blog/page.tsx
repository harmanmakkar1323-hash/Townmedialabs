import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

const siteUrl = "https://townmedialabs.com";

export const metadata: Metadata = {
  title: "Blog | TML Agency — Marketing, Branding & AI Insights",
  description:
    "Expert insights on digital marketing, branding, SEO, AI, social media, and ad strategy from TML Agency — Chandigarh's leading creative agency.",
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
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | TML Agency — Marketing, Branding & AI Insights",
    description:
      "Expert insights on digital marketing, branding, SEO, AI, and ad strategy from TML Agency.",
    url: `${siteUrl}/blog`,
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
    logo: `${siteUrl}/logo.png`,
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd),
        }}
      />
      <BlogPageClient />
    </>
  );
}
