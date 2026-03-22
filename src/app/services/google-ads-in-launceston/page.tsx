import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["launceston"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Launceston | TML Agency",
  description: "TML offers expert google ads services in Launceston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads launceston", "google ads agency launceston", "google ads company launceston"],
};

export default function GoogleAdsInLauncestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
