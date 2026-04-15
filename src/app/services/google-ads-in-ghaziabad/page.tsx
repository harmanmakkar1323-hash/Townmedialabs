import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ghaziabad"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Ghaziabad",
  description: "Top-rated Google Ads company in Ghaziabad. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
  keywords: ["Google Ads management ghaziabad", "Google Ads management agency ghaziabad", "Google Ads management company ghaziabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-ghaziabad",
  },
  openGraph: {
    title: "Best Google Ads Agency in Ghaziabad",
    description: "Top-rated Google Ads company in Ghaziabad. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-ghaziabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Ghaziabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Ghaziabad",
    description: "Top-rated Google Ads company in Ghaziabad. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInGhaziabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
