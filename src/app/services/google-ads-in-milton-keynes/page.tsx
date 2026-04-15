import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Milton Keynes",
  description: "Top-rated Google Ads company in Milton Keynes. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
  keywords: ["google ads milton keynes", "google ads agency milton keynes", "google ads company milton keynes"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-milton-keynes",
  },
  openGraph: {
    title: "Best Google Ads Agency in Milton Keynes",
    description: "Top-rated Google Ads company in Milton Keynes. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-milton-keynes",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Milton Keynes" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Milton Keynes",
    description: "Top-rated Google Ads company in Milton Keynes. TML offers expert Google Ads services for 500+ businesses. Get a free Google Ads consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInMiltonKeynesPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
