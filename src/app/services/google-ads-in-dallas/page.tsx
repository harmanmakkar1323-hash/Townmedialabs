import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dallas"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Dallas | TML Agency",
  description: "TML offers expert google ads services in Dallas. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads dallas", "google ads agency dallas", "google ads company dallas"],
};

export default function GoogleAdsInDallasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
