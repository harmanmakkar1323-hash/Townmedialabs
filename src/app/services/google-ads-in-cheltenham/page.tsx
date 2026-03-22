import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cheltenham"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Cheltenham | TML Agency",
  description: "TML offers expert google ads services in Cheltenham. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads cheltenham", "google ads agency cheltenham", "google ads company cheltenham"],
};

export default function GoogleAdsInCheltenhamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
