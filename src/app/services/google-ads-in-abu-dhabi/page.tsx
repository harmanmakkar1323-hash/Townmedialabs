import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Abu Dhabi | TML Agency",
  description: "TML offers expert google ads services in Abu Dhabi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads abu dhabi", "google ads agency abu dhabi", "google ads company abu dhabi"],
};

export default function GoogleAdsInAbuDhabiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
