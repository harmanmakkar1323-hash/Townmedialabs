import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["belfast"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Belfast",
  description: "Top-rated SEO company in Belfast. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo belfast", "seo agency belfast", "seo company belfast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-belfast",
  },
  openGraph: {
    title: "Best SEO Agency in Belfast",
    description: "Top-rated SEO company in Belfast. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-belfast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Belfast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Belfast",
    description: "Top-rated SEO company in Belfast. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInBelfastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
