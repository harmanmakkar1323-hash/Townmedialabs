import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_jose"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in San Jose | TML Agency",
  description: "TML offers expert google ads services in San Jose. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads san jose", "google ads agency san jose", "google ads company san jose"],
};

export default function GoogleAdsInSanJosePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
