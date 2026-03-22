import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mohali"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Mohali | TML Agency",
  description: "TML offers expert Google Ads management services in Mohali. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management mohali", "Google Ads management agency mohali", "Google Ads management company mohali"],
};

export default function GoogleadsInMohaliPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
