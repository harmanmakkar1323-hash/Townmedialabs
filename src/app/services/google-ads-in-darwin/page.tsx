import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["darwin"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Darwin | TML Agency",
  description: "TML offers expert google ads services in Darwin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads darwin", "google ads agency darwin", "google ads company darwin"],
};

export default function GoogleAdsInDarwinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
