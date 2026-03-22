import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["oxford"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Oxford | TML Agency",
  description: "TML offers expert google ads services in Oxford. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["google ads oxford", "google ads agency oxford", "google ads company oxford"],
};

export default function GoogleAdsInOxfordPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
