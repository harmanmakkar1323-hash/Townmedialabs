import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["swansea"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Swansea",
  description: "Top-rated SEO company in Swansea. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo swansea", "seo agency swansea", "seo company swansea"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-swansea",
  },
  openGraph: {
    title: "Best SEO Agency in Swansea",
    description: "Top-rated SEO company in Swansea. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-swansea",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Swansea" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Swansea",
    description: "Top-rated SEO company in Swansea. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSwanseaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
