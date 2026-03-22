import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sheffield"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Sheffield | TML Agency",
  description: "TML offers expert google ads services in Sheffield. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads sheffield", "google ads agency sheffield", "google ads company sheffield"],
};

export default function GoogleAdsInSheffieldPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
