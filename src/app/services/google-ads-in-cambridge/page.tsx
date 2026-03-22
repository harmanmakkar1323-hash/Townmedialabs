import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cambridge"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Cambridge | TML Agency",
  description: "TML offers expert google ads services in Cambridge. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads cambridge", "google ads agency cambridge", "google ads company cambridge"],
};

export default function GoogleAdsInCambridgePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
