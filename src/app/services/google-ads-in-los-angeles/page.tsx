import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Los Angeles",
  description: "Top-rated Google Ads company in Los Angeles. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
  keywords: ["google ads los angeles", "google ads agency los angeles", "google ads company los angeles"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-los-angeles",
  },
  openGraph: {
    title: "Best Google Ads Agency in Los Angeles",
    description: "Top-rated Google Ads company in Los Angeles. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-los-angeles",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Los Angeles" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Los Angeles",
    description: "Top-rated Google Ads company in Los Angeles. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInLosAngelesPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
