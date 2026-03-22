import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cambridge"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Cambridge | TML Agency",
  description: "TML offers expert music release services in Cambridge. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release cambridge", "music release agency cambridge", "music release company cambridge"],
};

export default function MusicReleaseInCambridgePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
