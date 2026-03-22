import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["denver"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Denver | TML Agency",
  description: "TML offers expert google ads services in Denver. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads denver", "google ads agency denver", "google ads company denver"],
};

export default function GoogleAdsInDenverPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
