import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["glasgow"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Glasgow | TML Agency",
  description: "TML offers expert google ads services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads glasgow", "google ads agency glasgow", "google ads company glasgow"],
};

export default function GoogleAdsInGlasgowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
