import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["seattle"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Seattle | TML Agency",
  description: "TML offers expert music release services in Seattle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release seattle", "music release agency seattle", "music release company seattle"],
};

export default function MusicReleaseInSeattlePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
