import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tampa"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Tampa | TML Agency",
  description: "TML offers expert google ads services in Tampa. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads tampa", "google ads agency tampa", "google ads company tampa"],
};

export default function GoogleAdsInTampaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
