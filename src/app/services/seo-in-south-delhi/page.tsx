import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Best SEO Agency in South Delhi",
  description: "Top-rated SEO company in South Delhi. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["search engine optimization south delhi", "search engine optimization agency south delhi", "search engine optimization company south delhi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-south-delhi",
  },
  openGraph: {
    title: "Best SEO Agency in South Delhi",
    description: "Top-rated SEO company in South Delhi. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-south-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in South Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in South Delhi",
    description: "Top-rated SEO company in South Delhi. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSouthDelhiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
