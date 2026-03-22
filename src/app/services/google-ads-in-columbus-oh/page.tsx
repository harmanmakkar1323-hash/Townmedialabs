import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["columbus_oh"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Columbus | TML Agency",
  description: "TML offers expert google ads services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads columbus", "google ads agency columbus", "google ads company columbus"],
};

export default function GoogleAdsInColumbusOhPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
