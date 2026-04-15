import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hyderabad"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Hyderabad",
  description: "Top-rated SEO company in Hyderabad. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["search engine optimization hyderabad", "search engine optimization agency hyderabad", "search engine optimization company hyderabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-hyderabad",
  },
  openGraph: {
    title: "Best SEO Agency in Hyderabad",
    description: "Top-rated SEO company in Hyderabad. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-hyderabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Hyderabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Hyderabad",
    description: "Top-rated SEO company in Hyderabad. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInHyderabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
