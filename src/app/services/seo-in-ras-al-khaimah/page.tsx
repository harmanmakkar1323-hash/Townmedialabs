import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Ras Al Khaimah",
  description: "Top-rated SEO company in Ras Al Khaimah. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo ras al khaimah", "seo agency ras al khaimah", "seo company ras al khaimah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-ras-al-khaimah",
  },
  openGraph: {
    title: "Best SEO Agency in Ras Al Khaimah",
    description: "Top-rated SEO company in Ras Al Khaimah. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-ras-al-khaimah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Ras Al Khaimah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Ras Al Khaimah",
    description: "Top-rated SEO company in Ras Al Khaimah. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInRasAlKhaimahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
