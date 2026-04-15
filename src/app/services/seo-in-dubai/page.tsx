import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["dubai"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Dubai",
  description: "Top-rated SEO company in Dubai. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo dubai", "seo agency dubai", "seo company dubai"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-dubai",
  },
  openGraph: {
    title: "Best SEO Agency in Dubai",
    description: "Top-rated SEO company in Dubai. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-dubai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Dubai",
    description: "Top-rated SEO company in Dubai. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInDubaiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
