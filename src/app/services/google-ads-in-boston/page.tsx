import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boston"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Boston | TML Agency",
  description: "TML offers expert google ads services in Boston. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads boston", "google ads agency boston", "google ads company boston"],
};

export default function GoogleAdsInBostonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
