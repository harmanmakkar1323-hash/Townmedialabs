import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mumbai"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Mumbai | TML Agency",
  description: "TML offers expert google ads services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads mumbai", "google ads agency mumbai", "google ads company mumbai"],
};

export default function GoogleAdsInMumbaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
