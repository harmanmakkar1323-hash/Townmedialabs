import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jacksonville"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Jacksonville | TML Agency",
  description: "TML offers expert google ads services in Jacksonville. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads jacksonville", "google ads agency jacksonville", "google ads company jacksonville"],
};

export default function GoogleAdsInJacksonvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
