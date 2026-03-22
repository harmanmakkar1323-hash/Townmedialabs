import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nashville"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Nashville | TML Agency",
  description: "TML offers expert google ads services in Nashville. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads nashville", "google ads agency nashville", "google ads company nashville"],
};

export default function GoogleAdsInNashvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
