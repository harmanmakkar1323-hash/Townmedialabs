import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["amritsar"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Amritsar | TML Agency",
  description: "TML offers expert Google Ads management services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management amritsar", "Google Ads management agency amritsar", "Google Ads management company amritsar"],
};

export default function GoogleadsInAmritsarPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
