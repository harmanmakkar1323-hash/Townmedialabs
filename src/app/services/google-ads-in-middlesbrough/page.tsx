import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["middlesbrough"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Middlesbrough",
  description: "TML offers expert Google Ads services in Middlesbrough. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads middlesbrough", "google ads agency middlesbrough", "google ads company middlesbrough"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/google-ads-in-middlesbrough",
  },
  openGraph: {
    title: "Google Ads Agency in Middlesbrough",
    description: "TML offers expert Google Ads services in Middlesbrough. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/google-ads-in-middlesbrough",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Middlesbrough" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Middlesbrough",
    description: "TML offers expert Google Ads services in Middlesbrough. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInMiddlesbroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
