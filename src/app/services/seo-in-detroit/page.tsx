import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["detroit"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Detroit",
  description: "Top-rated SEO company in Detroit. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo detroit", "seo agency detroit", "seo company detroit"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-detroit",
  },
  openGraph: {
    title: "Best SEO Agency in Detroit",
    description: "Top-rated SEO company in Detroit. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-detroit",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Detroit" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Detroit",
    description: "Top-rated SEO company in Detroit. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInDetroitPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
