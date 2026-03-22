import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hobart"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Hobart | TML Agency",
  description: "TML offers expert google ads services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads hobart", "google ads agency hobart", "google ads company hobart"],
};

export default function GoogleAdsInHobartPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
