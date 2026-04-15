import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["las_vegas"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Las Vegas",
  description: "Top-rated SEO company in Las Vegas. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo las vegas", "seo agency las vegas", "seo company las vegas"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-las-vegas",
  },
  openGraph: {
    title: "Best SEO Agency in Las Vegas",
    description: "Top-rated SEO company in Las Vegas. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-las-vegas",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Las Vegas" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Las Vegas",
    description: "Top-rated SEO company in Las Vegas. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInLasVegasPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
