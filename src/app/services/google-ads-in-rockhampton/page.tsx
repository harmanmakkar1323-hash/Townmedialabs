import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rockhampton"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Rockhampton | TML Agency",
  description: "TML offers expert google ads services in Rockhampton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads rockhampton", "google ads agency rockhampton", "google ads company rockhampton"],
};

export default function GoogleAdsInRockhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
