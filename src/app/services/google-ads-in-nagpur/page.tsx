import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nagpur"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Nagpur | TML Agency",
  description: "TML offers expert Google Ads management services in Nagpur. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management nagpur", "Google Ads management agency nagpur", "Google Ads management company nagpur"],
};

export default function GoogleadsInNagpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
