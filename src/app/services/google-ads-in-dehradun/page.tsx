import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dehradun"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Dehradun | TML Agency",
  description: "TML offers expert Google Ads management services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management dehradun", "Google Ads management agency dehradun", "Google Ads management company dehradun"],
};

export default function GoogleadsInDehradunPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
