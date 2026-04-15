import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["seattle"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Seattle",
  description: "Top-rated SEO company in Seattle. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo seattle", "seo agency seattle", "seo company seattle"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-seattle",
  },
  openGraph: {
    title: "Best SEO Agency in Seattle",
    description: "Top-rated SEO company in Seattle. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-seattle",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Seattle" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Seattle",
    description: "Top-rated SEO company in Seattle. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSeattlePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
