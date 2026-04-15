import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["louisville"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Louisville",
  description: "Top-rated SEO company in Louisville. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo louisville", "seo agency louisville", "seo company louisville"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-louisville",
  },
  openGraph: {
    title: "Best SEO Agency in Louisville",
    description: "Top-rated SEO company in Louisville. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-louisville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Louisville" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Louisville",
    description: "Top-rated SEO company in Louisville. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInLouisvillePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
