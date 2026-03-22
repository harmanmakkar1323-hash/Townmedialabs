import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in South Delhi | TML Agency",
  description: "TML offers expert Google Ads management services in South Delhi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management south delhi", "Google Ads management agency south delhi", "Google Ads management company south delhi"],
};

export default function GoogleadsInSouthDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
