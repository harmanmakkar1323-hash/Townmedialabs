import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["charlotte"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Charlotte | TML Agency",
  description: "TML offers expert music release services in Charlotte. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release charlotte", "music release agency charlotte", "music release company charlotte"],
};

export default function MusicReleaseInCharlottePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
