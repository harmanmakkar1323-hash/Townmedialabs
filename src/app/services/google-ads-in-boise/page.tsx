import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boise"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Boise | TML Agency",
  description: "TML offers expert google ads services in Boise. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads boise", "google ads agency boise", "google ads company boise"],
};

export default function GoogleAdsInBoisePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
