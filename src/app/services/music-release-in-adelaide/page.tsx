import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["adelaide"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Adelaide | TML Agency",
  description: "TML offers expert music release services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release adelaide", "music release agency adelaide", "music release company adelaide"],
};

export default function MusicReleaseInAdelaidePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
