import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Salt Lake City",
  description: "Top-rated Google Ads company in Salt Lake City. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
  keywords: ["google ads salt lake city", "google ads agency salt lake city", "google ads company salt lake city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-salt-lake-city",
  },
  openGraph: {
    title: "Best Google Ads Agency in Salt Lake City",
    description: "Top-rated Google Ads company in Salt Lake City. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-salt-lake-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Salt Lake City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Salt Lake City",
    description: "Top-rated Google Ads company in Salt Lake City. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInSaltLakeCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
