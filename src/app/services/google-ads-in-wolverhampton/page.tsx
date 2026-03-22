import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wolverhampton"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Wolverhampton | TML Agency",
  description: "TML offers expert google ads services in Wolverhampton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads wolverhampton", "google ads agency wolverhampton", "google ads company wolverhampton"],
};

export default function GoogleAdsInWolverhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
