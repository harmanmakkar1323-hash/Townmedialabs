import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["indianapolis"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Indianapolis",
  description: "Top-rated SEO company in Indianapolis. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo indianapolis", "seo agency indianapolis", "seo company indianapolis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-indianapolis",
  },
  openGraph: {
    title: "Best SEO Agency in Indianapolis",
    description: "Top-rated SEO company in Indianapolis. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-indianapolis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Indianapolis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Indianapolis",
    description: "Top-rated SEO company in Indianapolis. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInIndianapolisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
