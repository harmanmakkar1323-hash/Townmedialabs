import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["omaha"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Omaha | TML Agency",
  description: "TML offers expert google ads services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads omaha", "google ads agency omaha", "google ads company omaha"],
};

export default function GoogleAdsInOmahaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
