import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["wolverhampton"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Wolverhampton",
  description: "Top-rated Google Ads company in Wolverhampton. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
  keywords: ["google ads wolverhampton", "google ads agency wolverhampton", "google ads company wolverhampton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-wolverhampton",
  },
  openGraph: {
    title: "Best Google Ads Agency in Wolverhampton",
    description: "Top-rated Google Ads company in Wolverhampton. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-wolverhampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Wolverhampton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Wolverhampton",
    description: "Top-rated Google Ads company in Wolverhampton. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInWolverhamptonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
