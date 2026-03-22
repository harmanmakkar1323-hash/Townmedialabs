import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["portland"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Portland | TML Agency",
  description: "TML offers expert google ads services in Portland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads portland", "google ads agency portland", "google ads company portland"],
};

export default function GoogleAdsInPortlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
