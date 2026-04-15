import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ahmedabad"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Ahmedabad",
  description: "Top-rated SEO company in Ahmedabad. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["search engine optimization ahmedabad", "search engine optimization agency ahmedabad", "search engine optimization company ahmedabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-ahmedabad",
  },
  openGraph: {
    title: "Best SEO Agency in Ahmedabad",
    description: "Top-rated SEO company in Ahmedabad. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-ahmedabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Ahmedabad",
    description: "Top-rated SEO company in Ahmedabad. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInAhmedabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
