import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["gurgaon"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Gurgaon",
  description: "Top-rated SEO company in Gurgaon. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["search engine optimization gurgaon", "search engine optimization agency gurgaon", "search engine optimization company gurgaon"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-gurgaon",
  },
  openGraph: {
    title: "Best SEO Agency in Gurgaon",
    description: "Top-rated SEO company in Gurgaon. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-gurgaon",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Gurgaon" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Gurgaon",
    description: "Top-rated SEO company in Gurgaon. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInGurgaonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
