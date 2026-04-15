import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["philadelphia"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Philadelphia",
  description: "Top-rated SEO company in Philadelphia. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo philadelphia", "seo agency philadelphia", "seo company philadelphia"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-philadelphia",
  },
  openGraph: {
    title: "Best SEO Agency in Philadelphia",
    description: "Top-rated SEO company in Philadelphia. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-philadelphia",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Philadelphia" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Philadelphia",
    description: "Top-rated SEO company in Philadelphia. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInPhiladelphiaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
