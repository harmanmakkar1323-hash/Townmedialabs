import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["st_louis"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in St. Louis | TML Agency",
  description: "TML offers expert google ads services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads st. louis", "google ads agency st. louis", "google ads company st. louis"],
};

export default function GoogleAdsInStLouisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
