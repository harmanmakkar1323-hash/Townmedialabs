import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kochi"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Kochi | TML Agency",
  description: "TML offers expert Google Ads management services in Kochi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management kochi", "Google Ads management agency kochi", "Google Ads management company kochi"],
};

export default function GoogleadsInKochiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
