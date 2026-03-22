import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["atlanta"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Atlanta | TML Agency",
  description: "TML offers expert music release services in Atlanta. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release atlanta", "music release agency atlanta", "music release company atlanta"],
};

export default function MusicReleaseInAtlantaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
