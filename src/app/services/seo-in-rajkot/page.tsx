import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["rajkot"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Rajkot",
  description: "Top-rated SEO company in Rajkot. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["search engine optimization rajkot", "search engine optimization agency rajkot", "search engine optimization company rajkot"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-rajkot",
  },
  openGraph: {
    title: "Best SEO Agency in Rajkot",
    description: "Top-rated SEO company in Rajkot. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-rajkot",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Rajkot" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Rajkot",
    description: "Top-rated SEO company in Rajkot. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInRajkotPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
