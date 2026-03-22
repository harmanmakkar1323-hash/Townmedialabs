import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Sunshine Coast | TML Agency",
  description: "TML offers expert google ads services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads sunshine coast", "google ads agency sunshine coast", "google ads company sunshine coast"],
};

export default function GoogleAdsInSunshineCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
