import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["reading"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Reading | TML Agency",
  description: "TML offers expert google ads services in Reading. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads reading", "google ads agency reading", "google ads company reading"],
};

export default function GoogleAdsInReadingPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
