import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ghaziabad"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Ghaziabad | TML Agency",
  description: "TML offers expert Google Ads management services in Ghaziabad. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management ghaziabad", "Google Ads management agency ghaziabad", "Google Ads management company ghaziabad"],
};

export default function GoogleadsInGhaziabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
