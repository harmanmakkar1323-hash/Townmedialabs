import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Napier",
  description: "Top-rated SEO company in Napier. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo napier", "seo agency napier", "seo napier nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-napier",
  },
  openGraph: {
    title: "Best SEO Agency in Napier",
    description: "Top-rated SEO company in Napier. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-napier",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Napier" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Napier",
    description: "Top-rated SEO company in Napier. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInNapierPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
