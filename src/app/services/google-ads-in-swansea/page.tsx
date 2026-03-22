import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["swansea"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Swansea | TML Agency",
  description: "TML offers expert google ads services in Swansea. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads swansea", "google ads agency swansea", "google ads company swansea"],
};

export default function GoogleAdsInSwanseaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
