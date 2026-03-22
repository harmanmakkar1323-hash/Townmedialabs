import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["austin"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Austin | TML Agency",
  description: "TML offers expert music release services in Austin. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release austin", "music release agency austin", "music release company austin"],
};

export default function MusicReleaseInAustinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
