import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chicago"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Chicago | TML Agency",
  description: "TML offers expert google ads services in Chicago. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads chicago", "google ads agency chicago", "google ads company chicago"],
};

export default function GoogleAdsInChicagoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
