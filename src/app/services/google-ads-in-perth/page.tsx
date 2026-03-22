import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["perth"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Perth | TML Agency",
  description: "TML offers expert google ads services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads perth", "google ads agency perth", "google ads company perth"],
};

export default function GoogleAdsInPerthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
