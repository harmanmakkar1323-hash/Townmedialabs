import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["melbourne"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Melbourne | TML Agency",
  description: "TML offers expert google ads services in Melbourne. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads melbourne", "google ads agency melbourne", "google ads company melbourne"],
};

export default function GoogleAdsInMelbournePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
