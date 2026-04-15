import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["chandigarh"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Chandigarh",
  description: "Top-rated google ads company in Chandigarh. TML offers expert google ads services for 500+ businesses across Punjab. Get a free google ads consultation today.",
  keywords: ["best google ads agency chandigarh", "google ads company chandigarh", "google ads services chandigarh", "best google ads chandigarh", "top google ads agency chandigarh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-chandigarh/",
  },
  openGraph: {
    title: "Best Google Ads Agency in Chandigarh",
    description: "Top-rated google ads company in Chandigarh. TML offers expert google ads services for 500+ businesses across Punjab. Get a free google ads consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-chandigarh/",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Chandigarh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Chandigarh",
    description: "Top-rated google ads company in Chandigarh. TML offers expert google ads services for 500+ businesses across Punjab. Get a free google ads consultation today.",
    images: ["/og-image.png"],
  },
};
export default function UgoogleUadsUinUchandigarhPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
