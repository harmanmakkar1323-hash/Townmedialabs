import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Salt Lake City | TML Agency",
  description: "TML offers expert google ads services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads salt lake city", "google ads agency salt lake city", "google ads company salt lake city"],
};

export default function GoogleAdsInSaltLakeCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
