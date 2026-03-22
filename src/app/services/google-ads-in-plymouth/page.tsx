import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["plymouth"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Plymouth | TML Agency",
  description: "TML offers expert google ads services in Plymouth. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads plymouth", "google ads agency plymouth", "google ads company plymouth"],
};

export default function GoogleAdsInPlymouthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
