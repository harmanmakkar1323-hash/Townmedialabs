import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Kansas City | TML Agency",
  description: "TML offers expert music release services in Kansas City. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release kansas city", "music release agency kansas city", "music release company kansas city"],
};

export default function MusicReleaseInKansasCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
