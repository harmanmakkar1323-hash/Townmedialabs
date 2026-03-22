import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brisbane"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Brisbane | TML Agency",
  description: "TML offers expert google ads services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads brisbane", "google ads agency brisbane", "google ads company brisbane"],
};

export default function GoogleAdsInBrisbanePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
