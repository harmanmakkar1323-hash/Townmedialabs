import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["geelong"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Geelong",
  description: "Top-rated SEO company in Geelong. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo geelong", "seo agency geelong", "seo company geelong"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-geelong",
  },
  openGraph: {
    title: "Best SEO Agency in Geelong",
    description: "Top-rated SEO company in Geelong. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-geelong",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Geelong" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Geelong",
    description: "Top-rated SEO company in Geelong. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInGeelongPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
