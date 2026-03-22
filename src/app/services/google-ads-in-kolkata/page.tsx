import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kolkata"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Kolkata | TML Agency",
  description: "TML offers expert Google Ads management services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management kolkata", "Google Ads management agency kolkata", "Google Ads management company kolkata"],
};

export default function GoogleadsInKolkataPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
