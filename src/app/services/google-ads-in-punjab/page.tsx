import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["punjab"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Punjab | TML Agency",
  description: "TML offers expert google ads services in Punjab. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads punjab", "google ads agency punjab", "google ads company punjab"],
};

export default function GoogleAdsInPunjabPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
