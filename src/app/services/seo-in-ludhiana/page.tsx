import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ludhiana"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Ludhiana",
  description: "Top-rated SEO company in Ludhiana. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo ludhiana", "seo agency ludhiana", "seo company ludhiana"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-ludhiana",
  },
  openGraph: {
    title: "Best SEO Agency in Ludhiana",
    description: "Top-rated SEO company in Ludhiana. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-ludhiana",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Ludhiana" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Ludhiana",
    description: "Top-rated SEO company in Ludhiana. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInLudhianaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
