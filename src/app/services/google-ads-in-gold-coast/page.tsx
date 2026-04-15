import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Gold Coast",
  description: "Top-rated Google Ads company in Gold Coast. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
  keywords: ["google ads gold coast", "google ads agency gold coast", "google ads company gold coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-gold-coast",
  },
  openGraph: {
    title: "Best Google Ads Agency in Gold Coast",
    description: "Top-rated Google Ads company in Gold Coast. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-gold-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Gold Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Gold Coast",
    description: "Top-rated Google Ads company in Gold Coast. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInGoldCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
