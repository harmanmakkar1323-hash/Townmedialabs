import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_antonio"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in San Antonio | TML Agency",
  description: "TML offers expert google ads services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads san antonio", "google ads agency san antonio", "google ads company san antonio"],
};

export default function GoogleAdsInSanAntonioPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
