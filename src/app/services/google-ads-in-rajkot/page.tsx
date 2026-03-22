import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rajkot"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Rajkot | TML Agency",
  description: "TML offers expert Google Ads management services in Rajkot. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management rajkot", "Google Ads management agency rajkot", "Google Ads management company rajkot"],
};

export default function GoogleadsInRajkotPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
