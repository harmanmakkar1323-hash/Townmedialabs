import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brighton"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Brighton | TML Agency",
  description: "TML offers expert google ads services in Brighton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads brighton", "google ads agency brighton", "google ads company brighton"],
};

export default function GoogleAdsInBrightonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
