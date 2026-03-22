import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bathinda"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Bathinda | TML Agency",
  description: "TML offers expert google ads services in Bathinda. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads bathinda", "google ads agency bathinda", "google ads company bathinda"],
};

export default function GoogleAdsInBathindaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
