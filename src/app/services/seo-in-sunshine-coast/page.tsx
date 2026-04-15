import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Sunshine Coast",
  description: "Top-rated SEO company in Sunshine Coast. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo sunshine coast", "seo agency sunshine coast", "seo company sunshine coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-sunshine-coast",
  },
  openGraph: {
    title: "Best SEO Agency in Sunshine Coast",
    description: "Top-rated SEO company in Sunshine Coast. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-sunshine-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Sunshine Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Sunshine Coast",
    description: "Top-rated SEO company in Sunshine Coast. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSunshineCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
