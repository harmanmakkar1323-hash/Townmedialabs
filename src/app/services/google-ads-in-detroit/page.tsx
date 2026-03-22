import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["detroit"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Detroit | TML Agency",
  description: "TML offers expert google ads services in Detroit. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads detroit", "google ads agency detroit", "google ads company detroit"],
};

export default function GoogleAdsInDetroitPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
