import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["louisville"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Louisville | TML Agency",
  description: "TML offers expert google ads services in Louisville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads louisville", "google ads agency louisville", "google ads company louisville"],
};

export default function GoogleAdsInLouisvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
