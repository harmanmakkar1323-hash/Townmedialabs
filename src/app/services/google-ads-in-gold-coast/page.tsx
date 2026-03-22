import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Gold Coast | TML Agency",
  description: "TML offers expert google ads services in Gold Coast. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads gold coast", "google ads agency gold coast", "google ads company gold coast"],
};

export default function GoogleAdsInGoldCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
