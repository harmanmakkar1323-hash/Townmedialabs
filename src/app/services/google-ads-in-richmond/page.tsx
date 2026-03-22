import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["richmond"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Richmond | TML Agency",
  description: "TML offers expert google ads services in Richmond. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads richmond", "google ads agency richmond", "google ads company richmond"],
};

export default function GoogleAdsInRichmondPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
