import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["tauranga"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Tauranga",
  description: "Top-rated SEO company in Tauranga. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo tauranga", "seo agency tauranga", "seo tauranga nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-tauranga",
  },
  openGraph: {
    title: "Best SEO Agency in Tauranga",
    description: "Top-rated SEO company in Tauranga. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-tauranga",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Tauranga" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Tauranga",
    description: "Top-rated SEO company in Tauranga. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInTaurangaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
