import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Lucknow",
  description: "Top-rated SEO company in Lucknow. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["search engine optimization lucknow", "search engine optimization agency lucknow", "search engine optimization company lucknow"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-lucknow",
  },
  openGraph: {
    title: "Best SEO Agency in Lucknow",
    description: "Top-rated SEO company in Lucknow. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-lucknow",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Lucknow" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Lucknow",
    description: "Top-rated SEO company in Lucknow. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInLucknowPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
