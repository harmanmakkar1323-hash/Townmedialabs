import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Kansas City | TML Agency",
  description: "TML offers expert google ads services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads kansas city", "google ads agency kansas city", "google ads company kansas city"],
};

export default function GoogleAdsInKansasCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
