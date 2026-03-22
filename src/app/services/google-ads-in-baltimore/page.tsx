import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["baltimore"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Baltimore | TML Agency",
  description: "TML offers expert google ads services in Baltimore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads baltimore", "google ads agency baltimore", "google ads company baltimore"],
};

export default function GoogleAdsInBaltimorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
