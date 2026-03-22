import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coventry"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Coventry | TML Agency",
  description: "TML offers expert google ads services in Coventry. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads coventry", "google ads agency coventry", "google ads company coventry"],
};

export default function GoogleAdsInCoventryPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
