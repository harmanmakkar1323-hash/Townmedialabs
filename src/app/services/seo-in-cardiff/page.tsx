import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cardiff"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Cardiff",
  description: "Top-rated SEO company in Cardiff. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo cardiff", "seo agency cardiff", "seo company cardiff"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-cardiff",
  },
  openGraph: {
    title: "Best SEO Agency in Cardiff",
    description: "Top-rated SEO company in Cardiff. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-cardiff",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Cardiff" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Cardiff",
    description: "Top-rated SEO company in Cardiff. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInCardiffPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
