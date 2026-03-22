import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sydney"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Sydney | TML Agency",
  description: "TML offers expert google ads services in Sydney. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads sydney", "google ads agency sydney", "google ads company sydney"],
};

export default function GoogleAdsInSydneyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
