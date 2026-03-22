import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Lucknow | TML Agency",
  description: "TML offers expert Google Ads management services in Lucknow. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management lucknow", "Google Ads management agency lucknow", "Google Ads management company lucknow"],
};

export default function GoogleadsInLucknowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
