import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["middlesbrough"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Middlesbrough | TML Agency",
  description: "TML offers expert google ads services in Middlesbrough. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads middlesbrough", "google ads agency middlesbrough", "google ads company middlesbrough"],
};

export default function GoogleAdsInMiddlesbroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
