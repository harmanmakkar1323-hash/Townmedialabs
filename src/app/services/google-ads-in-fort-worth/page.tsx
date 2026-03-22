import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fort_worth"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Fort Worth | TML Agency",
  description: "TML offers expert google ads services in Fort Worth. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads fort worth", "google ads agency fort worth", "google ads company fort worth"],
};

export default function GoogleAdsInFortWorthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
