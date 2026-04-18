import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["coimbatore"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Coimbatore",
  description: "Top-rated SEO company in Coimbatore. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["search engine optimization coimbatore", "search engine optimization agency coimbatore", "search engine optimization company coimbatore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-coimbatore",
  },
  openGraph: {
    title: "Best SEO Agency in Coimbatore",
    description: "Top-rated SEO company in Coimbatore. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-coimbatore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Coimbatore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Coimbatore",
    description: "Top-rated SEO company in Coimbatore. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInCoimbatorePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
