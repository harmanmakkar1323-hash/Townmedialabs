import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Visakhapatnam | TML Agency",
  description: "TML offers expert Google Ads management services in Visakhapatnam. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management visakhapatnam", "Google Ads management agency visakhapatnam", "Google Ads management company visakhapatnam"],
};

export default function GoogleadsInVisakhapatnamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
