import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["york"];

export const metadata: Metadata = {
  title: "Best SEO Agency in York",
  description: "Top-rated SEO company in York. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo york", "seo agency york", "seo company york"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-york",
  },
  openGraph: {
    title: "Best SEO Agency in York",
    description: "Top-rated SEO company in York. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-york",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in York" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in York",
    description: "Top-rated SEO company in York. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInYorkPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
