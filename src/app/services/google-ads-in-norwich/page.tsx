import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["norwich"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Norwich | TML Agency",
  description: "TML offers expert google ads services in Norwich. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads norwich", "google ads agency norwich", "google ads company norwich"],
};

export default function GoogleAdsInNorwichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
