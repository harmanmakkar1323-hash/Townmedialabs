import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["surat"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Surat",
  description: "Top-rated SEO company in Surat. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["search engine optimization surat", "search engine optimization agency surat", "search engine optimization company surat"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-surat",
  },
  openGraph: {
    title: "Best SEO Agency in Surat",
    description: "Top-rated SEO company in Surat. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-surat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Surat" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Surat",
    description: "Top-rated SEO company in Surat. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSuratPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
