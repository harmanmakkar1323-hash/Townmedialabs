import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["patiala"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Patiala | TML Agency",
  description: "TML offers expert Google Ads management services in Patiala. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management patiala", "Google Ads management agency patiala", "Google Ads management company patiala"],
};

export default function GoogleadsInPatialaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
