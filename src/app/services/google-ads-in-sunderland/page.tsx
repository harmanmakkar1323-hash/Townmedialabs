import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunderland"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Sunderland | TML Agency",
  description: "TML offers expert google ads services in Sunderland. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads sunderland", "google ads agency sunderland", "google ads company sunderland"],
};

export default function GoogleAdsInSunderlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
