import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["seattle"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Seattle | TML Agency",
  description: "TML offers expert google ads services in Seattle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads seattle", "google ads agency seattle", "google ads company seattle"],
};

export default function GoogleAdsInSeattlePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
