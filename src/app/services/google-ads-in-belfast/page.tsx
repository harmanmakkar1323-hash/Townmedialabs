import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["belfast"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Belfast | TML Agency",
  description: "TML offers expert google ads services in Belfast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads belfast", "google ads agency belfast", "google ads company belfast"],
};

export default function GoogleAdsInBelfastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
