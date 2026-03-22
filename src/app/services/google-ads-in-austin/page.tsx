import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["austin"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Austin | TML Agency",
  description: "TML offers expert google ads services in Austin. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads austin", "google ads agency austin", "google ads company austin"],
};

export default function GoogleAdsInAustinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
