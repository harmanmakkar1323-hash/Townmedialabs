import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["gurgaon"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Gurgaon",
  description: "Top-rated Google Ads company in Gurgaon. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
  keywords: ["Google Ads management gurgaon", "Google Ads management agency gurgaon", "Google Ads management company gurgaon"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-gurgaon",
  },
  openGraph: {
    title: "Best Google Ads Agency in Gurgaon",
    description: "Top-rated Google Ads company in Gurgaon. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-gurgaon",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Gurgaon" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Gurgaon",
    description: "Top-rated Google Ads company in Gurgaon. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInGurgaonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
