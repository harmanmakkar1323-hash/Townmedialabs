import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jaipur"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Jaipur | TML Agency",
  description: "TML offers expert Google Ads management services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management jaipur", "Google Ads management agency jaipur", "Google Ads management company jaipur"],
};

export default function GoogleadsInJaipurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
