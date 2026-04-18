import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Lucknow",
  description: "Top-rated Google Ads company in Lucknow. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
  keywords: ["Google Ads management lucknow", "Google Ads management agency lucknow", "Google Ads management company lucknow"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-lucknow",
  },
  openGraph: {
    title: "Best Google Ads Agency in Lucknow",
    description: "Top-rated Google Ads company in Lucknow. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-lucknow",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Lucknow" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Lucknow",
    description: "Top-rated Google Ads company in Lucknow. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInLucknowPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
