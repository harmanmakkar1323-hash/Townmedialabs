import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indore"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Indore | TML Agency",
  description: "TML offers expert Google Ads management services in Indore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management indore", "Google Ads management agency indore", "Google Ads management company indore"],
};

export default function GoogleadsInIndorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
