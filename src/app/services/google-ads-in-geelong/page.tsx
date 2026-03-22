import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["geelong"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Geelong | TML Agency",
  description: "TML offers expert google ads services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads geelong", "google ads agency geelong", "google ads company geelong"],
};

export default function GoogleAdsInGeelongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
