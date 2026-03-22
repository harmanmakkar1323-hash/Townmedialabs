import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["manchester"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Manchester | TML Agency",
  description: "TML offers expert google ads services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads manchester", "google ads agency manchester", "google ads company manchester"],
};

export default function GoogleAdsInManchesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
