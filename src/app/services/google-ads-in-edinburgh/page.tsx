import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["edinburgh"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Edinburgh | TML Agency",
  description: "TML offers expert google ads services in Edinburgh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads edinburgh", "google ads agency edinburgh", "google ads company edinburgh"],
};

export default function GoogleAdsInEdinburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
