import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["southampton"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Southampton | TML Agency",
  description: "TML offers expert google ads services in Southampton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads southampton", "google ads agency southampton", "google ads company southampton"],
};

export default function GoogleAdsInSouthamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
