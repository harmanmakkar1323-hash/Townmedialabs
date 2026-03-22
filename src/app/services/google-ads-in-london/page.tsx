import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["london"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in London | TML Agency",
  description: "TML offers expert google ads services in London. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads london", "google ads agency london", "google ads company london"],
};

export default function GoogleAdsInLondonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
