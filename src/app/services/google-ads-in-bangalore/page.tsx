import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bangalore"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Bangalore | TML Agency",
  description: "TML offers expert Google Ads management services in Bangalore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management bangalore", "Google Ads management agency bangalore", "Google Ads management company bangalore"],
};

export default function GoogleadsInBangalorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
