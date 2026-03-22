import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coimbatore"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Coimbatore | TML Agency",
  description: "TML offers expert Google Ads management services in Coimbatore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management coimbatore", "Google Ads management agency coimbatore", "Google Ads management company coimbatore"],
};

export default function GoogleadsInCoimbatorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
