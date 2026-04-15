import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ghaziabad"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Ghaziabad",
  description: "Top-rated SEO company in Ghaziabad. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["search engine optimization ghaziabad", "search engine optimization agency ghaziabad", "search engine optimization company ghaziabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-ghaziabad",
  },
  openGraph: {
    title: "Best SEO Agency in Ghaziabad",
    description: "Top-rated SEO company in Ghaziabad. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-ghaziabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Ghaziabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Ghaziabad",
    description: "Top-rated SEO company in Ghaziabad. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInGhaziabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
