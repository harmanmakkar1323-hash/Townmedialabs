import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Abu Dhabi",
  description: "Top-rated Google Ads company in Abu Dhabi. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
  keywords: ["google ads abu dhabi", "google ads agency abu dhabi", "google ads company abu dhabi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-abu-dhabi",
  },
  openGraph: {
    title: "Best Google Ads Agency in Abu Dhabi",
    description: "Top-rated Google Ads company in Abu Dhabi. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-abu-dhabi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Abu Dhabi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Abu Dhabi",
    description: "Top-rated Google Ads company in Abu Dhabi. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInAbuDhabiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
