import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["phoenix"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Phoenix | TML Agency",
  description: "TML offers expert google ads services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads phoenix", "google ads agency phoenix", "google ads company phoenix"],
};

export default function GoogleAdsInPhoenixPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
