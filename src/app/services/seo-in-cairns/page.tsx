import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cairns"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Cairns",
  description: "Top-rated SEO company in Cairns. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo cairns", "seo agency cairns", "seo company cairns"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-cairns",
  },
  openGraph: {
    title: "Best SEO Agency in Cairns",
    description: "Top-rated SEO company in Cairns. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-cairns",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Cairns" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Cairns",
    description: "Top-rated SEO company in Cairns. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInCairnsPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
