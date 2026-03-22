import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["liverpool"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Liverpool | TML Agency",
  description: "TML offers expert google ads services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads liverpool", "google ads agency liverpool", "google ads company liverpool"],
};

export default function GoogleAdsInLiverpoolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
