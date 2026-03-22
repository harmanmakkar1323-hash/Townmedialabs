import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["preston"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Preston | TML Agency",
  description: "TML offers expert google ads services in Preston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads preston", "google ads agency preston", "google ads company preston"],
};

export default function GoogleAdsInPrestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
