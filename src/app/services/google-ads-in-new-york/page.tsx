import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["new_york"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in New York | TML Agency",
  description: "TML offers expert google ads services in New York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads new york", "google ads agency new york", "google ads company new york"],
};

export default function GoogleAdsInNewYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
