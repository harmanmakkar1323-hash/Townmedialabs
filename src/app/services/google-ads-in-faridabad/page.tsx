import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["faridabad"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Faridabad | TML Agency",
  description: "TML offers expert Google Ads management services in Faridabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management faridabad", "Google Ads management agency faridabad", "Google Ads management company faridabad"],
};

export default function GoogleadsInFaridabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
