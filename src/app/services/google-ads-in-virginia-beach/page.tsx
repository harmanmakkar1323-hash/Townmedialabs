import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Virginia Beach | TML Agency",
  description: "TML offers expert google ads services in Virginia Beach. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads virginia beach", "google ads agency virginia beach", "google ads company virginia beach"],
};

export default function GoogleAdsInVirginiaBeachPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
