import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pune"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Pune | TML Agency",
  description: "TML offers expert Google Ads management services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management pune", "Google Ads management agency pune", "Google Ads management company pune"],
};

export default function GoogleadsInPunePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
