import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Gold Coast | TML Agency",
  description: "TML offers expert music release services in Gold Coast. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release gold coast", "music release agency gold coast", "music release company gold coast"],
};

export default function MusicReleaseInGoldCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
