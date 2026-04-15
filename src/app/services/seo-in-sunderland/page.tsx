import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sunderland"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Sunderland",
  description: "Top-rated SEO company in Sunderland. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo sunderland", "seo agency sunderland", "seo company sunderland"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-sunderland",
  },
  openGraph: {
    title: "Best SEO Agency in Sunderland",
    description: "Top-rated SEO company in Sunderland. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-sunderland",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Sunderland" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Sunderland",
    description: "Top-rated SEO company in Sunderland. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSunderlandPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
