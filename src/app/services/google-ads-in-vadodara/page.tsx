import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["vadodara"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Vadodara | TML Agency",
  description: "TML offers expert Google Ads management services in Vadodara. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management vadodara", "Google Ads management agency vadodara", "Google Ads management company vadodara"],
};

export default function GoogleadsInVadodaraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
