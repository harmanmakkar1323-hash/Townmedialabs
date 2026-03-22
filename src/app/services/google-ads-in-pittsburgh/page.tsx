import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pittsburgh"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Pittsburgh | TML Agency",
  description: "TML offers expert google ads services in Pittsburgh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads pittsburgh", "google ads agency pittsburgh", "google ads company pittsburgh"],
};

export default function GoogleAdsInPittsburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
