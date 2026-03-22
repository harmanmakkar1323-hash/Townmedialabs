import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cairns"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Cairns | TML Agency",
  description: "TML offers expert google ads services in Cairns. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads cairns", "google ads agency cairns", "google ads company cairns"],
};

export default function GoogleAdsInCairnsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
