import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hyderabad"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Hyderabad | TML Agency",
  description: "TML offers expert Google Ads management services in Hyderabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management hyderabad", "Google Ads management agency hyderabad", "Google Ads management company hyderabad"],
};

export default function GoogleadsInHyderabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
