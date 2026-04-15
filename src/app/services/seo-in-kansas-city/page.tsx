import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Kansas City",
  description: "Top-rated SEO company in Kansas City. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo kansas city", "seo agency kansas city", "seo company kansas city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-kansas-city",
  },
  openGraph: {
    title: "Best SEO Agency in Kansas City",
    description: "Top-rated SEO company in Kansas City. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-kansas-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Kansas City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Kansas City",
    description: "Top-rated SEO company in Kansas City. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInKansasCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
