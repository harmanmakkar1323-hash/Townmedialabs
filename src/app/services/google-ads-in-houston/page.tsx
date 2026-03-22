import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["houston"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Houston | TML Agency",
  description: "TML offers expert google ads services in Houston. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads houston", "google ads agency houston", "google ads company houston"],
};

export default function GoogleAdsInHoustonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
