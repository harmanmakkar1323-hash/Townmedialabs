import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["pune"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Pune",
  description: "Top-rated Google Ads company in Pune. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
  keywords: ["Google Ads management pune", "Google Ads management agency pune", "Google Ads management company pune"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-pune",
  },
  openGraph: {
    title: "Best Google Ads Agency in Pune",
    description: "Top-rated Google Ads company in Pune. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-pune",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Pune" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Pune",
    description: "Top-rated Google Ads company in Pune. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInPunePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
