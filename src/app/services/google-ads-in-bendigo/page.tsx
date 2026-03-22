import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bendigo"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Bendigo | TML Agency",
  description: "TML offers expert google ads services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads bendigo", "google ads agency bendigo", "google ads company bendigo"],
};

export default function GoogleAdsInBendigoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
