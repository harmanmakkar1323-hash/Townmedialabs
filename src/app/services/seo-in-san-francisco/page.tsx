import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_francisco"];

export const metadata: Metadata = {
  title: "Best SEO Agency in San Francisco",
  description: "Top-rated SEO company in San Francisco. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo san francisco", "seo agency san francisco", "seo company san francisco"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-san-francisco",
  },
  openGraph: {
    title: "Best SEO Agency in San Francisco",
    description: "Top-rated SEO company in San Francisco. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-san-francisco",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in San Francisco" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in San Francisco",
    description: "Top-rated SEO company in San Francisco. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSanFranciscoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
