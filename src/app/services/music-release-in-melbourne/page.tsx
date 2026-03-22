import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["melbourne"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Melbourne | TML Agency",
  description: "TML offers expert music release services in Melbourne. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release melbourne", "music release agency melbourne", "music release company melbourne"],
};

export default function MusicReleaseInMelbournePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
