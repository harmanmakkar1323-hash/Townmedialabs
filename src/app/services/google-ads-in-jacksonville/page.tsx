import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["jacksonville"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Jacksonville",
  description: "Top-rated Google Ads company in Jacksonville. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
  keywords: ["google ads jacksonville", "google ads agency jacksonville", "google ads company jacksonville"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-jacksonville",
  },
  openGraph: {
    title: "Best Google Ads Agency in Jacksonville",
    description: "Top-rated Google Ads company in Jacksonville. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-jacksonville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Jacksonville" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Jacksonville",
    description: "Top-rated Google Ads company in Jacksonville. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInJacksonvillePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
