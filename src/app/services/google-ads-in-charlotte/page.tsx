import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["charlotte"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Charlotte | TML Agency",
  description: "TML offers expert google ads services in Charlotte. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads charlotte", "google ads agency charlotte", "google ads company charlotte"],
};

export default function GoogleAdsInCharlottePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
