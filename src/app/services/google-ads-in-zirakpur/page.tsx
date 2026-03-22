import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Zirakpur | TML Agency",
  description: "TML offers expert google ads services in Zirakpur. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads zirakpur", "google ads agency zirakpur", "google ads company zirakpur"],
};

export default function GoogleAdsInZirakpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
