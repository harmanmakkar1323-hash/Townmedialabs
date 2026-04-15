import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["new_york"];

export const metadata: Metadata = {
  title: "Best SEO Agency in New York",
  description: "Top-rated SEO company in New York. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo new york", "seo agency new york", "seo company new york"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-new-york",
  },
  openGraph: {
    title: "Best SEO Agency in New York",
    description: "Top-rated SEO company in New York. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-new-york",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in New York" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in New York",
    description: "Top-rated SEO company in New York. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInNewYorkPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
