import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nashville"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Nashville | TML Agency",
  description: "TML offers expert music release services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release nashville", "music release agency nashville", "music release company nashville"],
};

export default function MusicReleaseInNashvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
