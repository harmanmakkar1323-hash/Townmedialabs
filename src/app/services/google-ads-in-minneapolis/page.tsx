import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["minneapolis"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Minneapolis | TML Agency",
  description: "TML offers expert google ads services in Minneapolis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads minneapolis", "google ads agency minneapolis", "google ads company minneapolis"],
};

export default function GoogleAdsInMinneapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
