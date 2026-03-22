import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Panchkula | TML Agency",
  description: "TML offers expert Google Ads management services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management panchkula", "Google Ads management agency panchkula", "Google Ads management company panchkula"],
};

export default function GoogleadsInPanchkulaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
