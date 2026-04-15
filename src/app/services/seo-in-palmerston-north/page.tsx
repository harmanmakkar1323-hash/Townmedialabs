import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["palmerston_north"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Palmerston North",
  description: "Top-rated SEO company in Palmerston North. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo palmerston north", "seo agency palmerston north", "seo palmerston north nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-palmerston-north",
  },
  openGraph: {
    title: "Best SEO Agency in Palmerston North",
    description: "Top-rated SEO company in Palmerston North. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-palmerston-north",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Palmerston North" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Palmerston North",
    description: "Top-rated SEO company in Palmerston North. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInPalmerstonNorthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
