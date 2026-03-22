import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["philadelphia"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Philadelphia | TML Agency",
  description: "TML offers expert google ads services in Philadelphia. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads philadelphia", "google ads agency philadelphia", "google ads company philadelphia"],
};

export default function GoogleAdsInPhiladelphiaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
