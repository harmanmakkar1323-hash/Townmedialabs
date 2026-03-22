import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sheffield"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Sheffield | TML Agency",
  description: "TML offers expert music release services in Sheffield. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release sheffield", "music release agency sheffield", "music release company sheffield"],
};

export default function MusicReleaseInSheffieldPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
