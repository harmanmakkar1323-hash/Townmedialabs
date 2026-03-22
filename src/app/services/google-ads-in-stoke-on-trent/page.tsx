import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Stoke-on-Trent | TML Agency",
  description: "TML offers expert google ads services in Stoke-on-Trent. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads stoke-on-trent", "google ads agency stoke-on-trent", "google ads company stoke-on-trent"],
};

export default function GoogleAdsInStokeOnTrentPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
