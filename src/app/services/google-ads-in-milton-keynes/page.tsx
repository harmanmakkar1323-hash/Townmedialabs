import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Milton Keynes | TML Agency",
  description: "TML offers expert google ads services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads milton keynes", "google ads agency milton keynes", "google ads company milton keynes"],
};

export default function GoogleAdsInMiltonKeynesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
