import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["memphis"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Memphis | TML Agency",
  description: "TML offers expert google ads services in Memphis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads memphis", "google ads agency memphis", "google ads company memphis"],
};

export default function GoogleAdsInMemphisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
