import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cleveland"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Cleveland | TML Agency",
  description: "TML offers expert google ads services in Cleveland. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads cleveland", "google ads agency cleveland", "google ads company cleveland"],
};

export default function GoogleAdsInClevelandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
