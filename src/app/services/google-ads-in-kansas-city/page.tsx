import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Kansas City",
  description: "Top-rated Google Ads company in Kansas City. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
  keywords: ["google ads kansas city", "google ads agency kansas city", "google ads company kansas city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-kansas-city",
  },
  openGraph: {
    title: "Best Google Ads Agency in Kansas City",
    description: "Top-rated Google Ads company in Kansas City. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-kansas-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Kansas City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Kansas City",
    description: "Top-rated Google Ads company in Kansas City. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInKansasCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
