import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boise"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Boise | TML Agency",
  description: "TML offers expert music release services in Boise. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release boise", "music release agency boise", "music release company boise"],
};

export default function MusicReleaseInBoisePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
