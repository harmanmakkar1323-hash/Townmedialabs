import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["townsville"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Townsville | TML Agency",
  description: "TML offers expert google ads services in Townsville. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads townsville", "google ads agency townsville", "google ads company townsville"],
};

export default function GoogleAdsInTownsvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
