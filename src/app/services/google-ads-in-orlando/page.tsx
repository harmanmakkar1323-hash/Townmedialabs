import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["orlando"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Orlando | TML Agency",
  description: "TML offers expert google ads services in Orlando. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads orlando", "google ads agency orlando", "google ads company orlando"],
};

export default function GoogleAdsInOrlandoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
