import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Delhi | TML Agency",
  description: "TML offers expert google ads services in Delhi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads delhi", "google ads agency delhi", "google ads company delhi"],
};

export default function GoogleAdsInDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
