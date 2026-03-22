import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dubai"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Dubai | TML Agency",
  description: "TML offers expert google ads services in Dubai. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads dubai", "google ads agency dubai", "google ads company dubai"],
};

export default function GoogleAdsInDubaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
