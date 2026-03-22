import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Stoke-on-Trent | TML Agency",
  description: "TML offers expert music release services in Stoke-on-Trent. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release stoke-on-trent", "music release agency stoke-on-trent", "music release company stoke-on-trent"],
};

export default function MusicReleaseInStokeOnTrentPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
