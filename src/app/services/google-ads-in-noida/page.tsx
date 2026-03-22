import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["noida"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Noida | TML Agency",
  description: "TML offers expert Google Ads management services in Noida. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management noida", "Google Ads management agency noida", "Google Ads management company noida"],
};

export default function GoogleadsInNoidaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
