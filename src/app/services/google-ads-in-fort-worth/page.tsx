import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["fort_worth"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Fort Worth",
  description: "Top-rated Google Ads company in Fort Worth. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
  keywords: ["google ads fort worth", "google ads agency fort worth", "google ads company fort worth"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-fort-worth",
  },
  openGraph: {
    title: "Best Google Ads Agency in Fort Worth",
    description: "Top-rated Google Ads company in Fort Worth. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-fort-worth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Fort Worth" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Fort Worth",
    description: "Top-rated Google Ads company in Fort Worth. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInFortWorthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
