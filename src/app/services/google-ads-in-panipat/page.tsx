import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panipat"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Panipat | TML Agency",
  description: "TML offers expert Google Ads management services in Panipat. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management panipat", "Google Ads management agency panipat", "Google Ads management company panipat"],
};

export default function GoogleadsInPanipatPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
