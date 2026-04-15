import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["birmingham"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Birmingham",
  description: "Top-rated Google Ads company in Birmingham. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
  keywords: ["google ads birmingham", "google ads agency birmingham", "google ads company birmingham"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-birmingham",
  },
  openGraph: {
    title: "Best Google Ads Agency in Birmingham",
    description: "Top-rated Google Ads company in Birmingham. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-birmingham",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Birmingham" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Birmingham",
    description: "Top-rated Google Ads company in Birmingham. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInBirminghamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
