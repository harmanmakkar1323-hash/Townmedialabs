import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Jalandhar",
  description: "Top-rated SEO company in Jalandhar. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["search engine optimization jalandhar", "search engine optimization agency jalandhar", "search engine optimization company jalandhar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-jalandhar",
  },
  openGraph: {
    title: "Best SEO Agency in Jalandhar",
    description: "Top-rated SEO company in Jalandhar. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-jalandhar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Jalandhar" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Jalandhar",
    description: "Top-rated SEO company in Jalandhar. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInJalandharPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
