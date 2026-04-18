import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kolkata"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Kolkata",
  description: "Top-rated SEO company in Kolkata. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["search engine optimization kolkata", "search engine optimization agency kolkata", "search engine optimization company kolkata"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-kolkata",
  },
  openGraph: {
    title: "Best SEO Agency in Kolkata",
    description: "Top-rated SEO company in Kolkata. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-kolkata",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Kolkata" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Kolkata",
    description: "Top-rated SEO company in Kolkata. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInKolkataPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
