import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["toowoomba"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Toowoomba | TML Agency",
  description: "TML offers expert google ads services in Toowoomba. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads toowoomba", "google ads agency toowoomba", "google ads company toowoomba"],
};

export default function GoogleAdsInToowoombaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
