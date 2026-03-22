import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Napier | TML Agency",
  description: "TML offers expert google ads services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["google ads napier", "google ads agency napier", "google ads napier nz"],
};

export default function GoogleAdsInNapierPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
