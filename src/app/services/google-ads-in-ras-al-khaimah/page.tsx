import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Ras Al Khaimah",
  description: "Top-rated Google Ads company in Ras Al Khaimah. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
  keywords: ["google ads ras al khaimah", "google ads agency ras al khaimah", "google ads company ras al khaimah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-ras-al-khaimah",
  },
  openGraph: {
    title: "Best Google Ads Agency in Ras Al Khaimah",
    description: "Top-rated Google Ads company in Ras Al Khaimah. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-ras-al-khaimah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Ras Al Khaimah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Ras Al Khaimah",
    description: "Top-rated Google Ads company in Ras Al Khaimah. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInRasAlKhaimahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
