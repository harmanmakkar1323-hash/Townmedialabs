import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Wellington | TML Agency",
  description: "TML offers expert google ads services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["google ads wellington", "google ads agency wellington", "google ads wellington nz"],
};

export default function GoogleAdsInWellingtonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
