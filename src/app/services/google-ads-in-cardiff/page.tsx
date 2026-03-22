import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cardiff"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Cardiff | TML Agency",
  description: "TML offers expert google ads services in Cardiff. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads cardiff", "google ads agency cardiff", "google ads company cardiff"],
};

export default function GoogleAdsInCardiffPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
