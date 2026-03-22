import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chennai"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Chennai | TML Agency",
  description: "TML offers expert Google Ads management services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management chennai", "Google Ads management agency chennai", "Google Ads management company chennai"],
};

export default function GoogleadsInChennaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
