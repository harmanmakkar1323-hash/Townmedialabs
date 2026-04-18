import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["nagpur"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Nagpur",
  description: "Top-rated SEO company in Nagpur. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["search engine optimization nagpur", "search engine optimization agency nagpur", "search engine optimization company nagpur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-nagpur",
  },
  openGraph: {
    title: "Best SEO Agency in Nagpur",
    description: "Top-rated SEO company in Nagpur. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-nagpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Nagpur" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Nagpur",
    description: "Top-rated SEO company in Nagpur. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInNagpurPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
