import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Karnal | TML Agency",
  description: "TML offers expert Google Ads management services in Karnal. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management karnal", "Google Ads management agency karnal", "Google Ads management company karnal"],
};

export default function GoogleadsInKarnalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
