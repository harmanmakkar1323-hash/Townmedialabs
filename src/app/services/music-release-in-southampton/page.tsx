import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["southampton"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Southampton | TML Agency",
  description: "TML offers expert music release services in Southampton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release southampton", "music release agency southampton", "music release company southampton"],
};

export default function MusicReleaseInSouthamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
