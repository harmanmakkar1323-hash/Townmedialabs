import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sharjah"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Sharjah | TML Agency",
  description: "TML offers expert google ads services in Sharjah. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads sharjah", "google ads agency sharjah", "google ads company sharjah"],
};

export default function GoogleAdsInSharjahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
