import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["rockhampton"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Rockhampton",
  description: "Top-rated SEO company in Rockhampton. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo rockhampton", "seo agency rockhampton", "seo company rockhampton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-rockhampton",
  },
  openGraph: {
    title: "Best SEO Agency in Rockhampton",
    description: "Top-rated SEO company in Rockhampton. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-rockhampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Rockhampton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Rockhampton",
    description: "Top-rated SEO company in Rockhampton. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInRockhamptonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
