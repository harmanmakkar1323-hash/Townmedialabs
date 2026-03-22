import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cincinnati"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Cincinnati | TML Agency",
  description: "TML offers expert google ads services in Cincinnati. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads cincinnati", "google ads agency cincinnati", "google ads company cincinnati"],
};

export default function GoogleAdsInCincinnatiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
