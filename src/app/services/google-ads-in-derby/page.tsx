import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derby"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Derby | TML Agency",
  description: "TML offers expert google ads services in Derby. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads derby", "google ads agency derby", "google ads company derby"],
};

export default function GoogleAdsInDerbyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
