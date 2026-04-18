import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["faridabad"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Faridabad",
  description: "Top-rated SEO company in Faridabad. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["search engine optimization faridabad", "search engine optimization agency faridabad", "search engine optimization company faridabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-faridabad",
  },
  openGraph: {
    title: "Best SEO Agency in Faridabad",
    description: "Top-rated SEO company in Faridabad. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-faridabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Faridabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Faridabad",
    description: "Top-rated SEO company in Faridabad. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInFaridabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
