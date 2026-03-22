import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indianapolis"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Indianapolis | TML Agency",
  description: "TML offers expert google ads services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads indianapolis", "google ads agency indianapolis", "google ads company indianapolis"],
};

export default function GoogleAdsInIndianapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
