import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["christchurch"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Christchurch",
  description: "Top-rated SEO company in Christchurch. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo christchurch", "seo agency christchurch", "seo christchurch nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-christchurch",
  },
  openGraph: {
    title: "Best SEO Agency in Christchurch",
    description: "Top-rated SEO company in Christchurch. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-christchurch",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Christchurch" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Christchurch",
    description: "Top-rated SEO company in Christchurch. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInChristchurchPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
