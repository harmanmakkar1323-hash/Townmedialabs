import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Ras Al Khaimah | TML Agency",
  description: "TML offers expert google ads services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads ras al khaimah", "google ads agency ras al khaimah", "google ads company ras al khaimah"],
};

export default function GoogleAdsInRasAlKhaimahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
