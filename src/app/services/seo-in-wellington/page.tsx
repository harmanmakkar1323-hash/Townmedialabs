import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Wellington",
  description: "Top-rated SEO company in Wellington. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo wellington", "seo agency wellington", "seo wellington nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-wellington",
  },
  openGraph: {
    title: "Best SEO Agency in Wellington",
    description: "Top-rated SEO company in Wellington. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-wellington",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Wellington" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Wellington",
    description: "Top-rated SEO company in Wellington. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInWellingtonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
