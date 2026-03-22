import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ipswich"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Ipswich | TML Agency",
  description: "TML offers expert google ads services in Ipswich. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads ipswich", "google ads agency ipswich", "google ads company ipswich"],
};

export default function GoogleAdsInIpswichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
