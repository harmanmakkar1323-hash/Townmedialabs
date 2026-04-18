import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bathinda"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Bathinda",
  description: "Top-rated Google Ads company in Bathinda. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
  keywords: ["google ads bathinda", "google ads agency bathinda", "google ads company bathinda"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-bathinda",
  },
  openGraph: {
    title: "Best Google Ads Agency in Bathinda",
    description: "Top-rated Google Ads company in Bathinda. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-bathinda",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Bathinda" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Bathinda",
    description: "Top-rated Google Ads company in Bathinda. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInBathindaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
