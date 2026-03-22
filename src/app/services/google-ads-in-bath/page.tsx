import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bath"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Bath | TML Agency",
  description: "TML offers expert google ads services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads bath", "google ads agency bath", "google ads company bath"],
};

export default function GoogleAdsInBathPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
