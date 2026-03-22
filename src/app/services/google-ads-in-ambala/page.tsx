import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ambala"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Ambala | TML Agency",
  description: "TML offers expert Google Ads management services in Ambala. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management ambala", "Google Ads management agency ambala", "Google Ads management company ambala"],
};

export default function GoogleadsInAmbalaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
