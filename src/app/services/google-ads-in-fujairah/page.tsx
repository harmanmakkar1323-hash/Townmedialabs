import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fujairah"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Fujairah | TML Agency",
  description: "TML offers expert google ads services in Fujairah. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads fujairah", "google ads agency fujairah", "google ads company fujairah"],
};

export default function GoogleAdsInFujairahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
