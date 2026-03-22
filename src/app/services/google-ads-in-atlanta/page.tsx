import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["atlanta"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Atlanta | TML Agency",
  description: "TML offers expert google ads services in Atlanta. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads atlanta", "google ads agency atlanta", "google ads company atlanta"],
};

export default function GoogleAdsInAtlantaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
