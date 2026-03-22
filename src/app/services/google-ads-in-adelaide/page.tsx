import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["adelaide"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Adelaide | TML Agency",
  description: "TML offers expert google ads services in Adelaide. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads adelaide", "google ads agency adelaide", "google ads company adelaide"],
};

export default function GoogleAdsInAdelaidePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
