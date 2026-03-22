import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bhopal"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Bhopal | TML Agency",
  description: "TML offers expert Google Ads management services in Bhopal. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management bhopal", "Google Ads management agency bhopal", "Google Ads management company bhopal"],
};

export default function GoogleadsInBhopalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
