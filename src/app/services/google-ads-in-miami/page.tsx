import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["miami"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Miami | TML Agency",
  description: "TML offers expert google ads services in Miami. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads miami", "google ads agency miami", "google ads company miami"],
};

export default function GoogleAdsInMiamiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
