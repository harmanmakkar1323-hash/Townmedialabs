import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_francisco"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in San Francisco | TML Agency",
  description: "TML offers expert google ads services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads san francisco", "google ads agency san francisco", "google ads company san francisco"],
};

export default function GoogleAdsInSanFranciscoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
