import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Gold Coast",
  description: "Top-rated SEO company in Gold Coast. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo gold coast", "seo agency gold coast", "seo company gold coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-gold-coast",
  },
  openGraph: {
    title: "Best SEO Agency in Gold Coast",
    description: "Top-rated SEO company in Gold Coast. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-gold-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Gold Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Gold Coast",
    description: "Top-rated SEO company in Gold Coast. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInGoldCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
