import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bournemouth"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Bournemouth",
  description: "Top-rated Google Ads company in Bournemouth. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
  keywords: ["google ads bournemouth", "google ads agency bournemouth", "google ads company bournemouth"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-bournemouth",
  },
  openGraph: {
    title: "Best Google Ads Agency in Bournemouth",
    description: "Top-rated Google Ads company in Bournemouth. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-bournemouth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Bournemouth" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Bournemouth",
    description: "Top-rated Google Ads company in Bournemouth. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInBournemouthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
