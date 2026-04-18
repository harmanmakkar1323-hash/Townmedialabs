import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Panchkula",
  description: "Top-rated SEO company in Panchkula. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["search engine optimization panchkula", "search engine optimization agency panchkula", "search engine optimization company panchkula"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-panchkula",
  },
  openGraph: {
    title: "Best SEO Agency in Panchkula",
    description: "Top-rated SEO company in Panchkula. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-panchkula",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Panchkula" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Panchkula",
    description: "Top-rated SEO company in Panchkula. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInPanchkulaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
