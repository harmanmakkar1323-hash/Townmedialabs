import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Jalandhar | TML Agency",
  description: "TML offers expert Google Ads management services in Jalandhar. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management jalandhar", "Google Ads management agency jalandhar", "Google Ads management company jalandhar"],
};

export default function GoogleadsInJalandharPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
