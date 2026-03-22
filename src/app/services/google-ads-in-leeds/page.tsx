import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leeds"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Leeds | TML Agency",
  description: "TML offers expert google ads services in Leeds. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads leeds", "google ads agency leeds", "google ads company leeds"],
};

export default function GoogleAdsInLeedsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
