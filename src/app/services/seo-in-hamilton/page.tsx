import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Hamilton",
  description: "Top-rated SEO company in Hamilton. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo hamilton", "seo agency hamilton", "seo hamilton ontario"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-hamilton",
  },
  openGraph: {
    title: "Best SEO Agency in Hamilton",
    description: "Top-rated SEO company in Hamilton. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-hamilton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Hamilton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Hamilton",
    description: "Top-rated SEO company in Hamilton. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInHamiltonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
