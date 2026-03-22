import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["peterborough"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Peterborough | TML Agency",
  description: "TML offers expert google ads services in Peterborough. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads peterborough", "google ads agency peterborough", "google ads company peterborough"],
};

export default function GoogleAdsInPeterboroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
