import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["portland"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Portland",
  description: "Top-rated SEO company in Portland. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo portland", "seo agency portland", "seo company portland"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-portland",
  },
  openGraph: {
    title: "Best SEO Agency in Portland",
    description: "Top-rated SEO company in Portland. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-portland",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Portland" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Portland",
    description: "Top-rated SEO company in Portland. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInPortlandPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
