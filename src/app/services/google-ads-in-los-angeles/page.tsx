import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Los Angeles | TML Agency",
  description: "TML offers expert google ads services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads los angeles", "google ads agency los angeles", "google ads company los angeles"],
};

export default function GoogleAdsInLosAngelesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
