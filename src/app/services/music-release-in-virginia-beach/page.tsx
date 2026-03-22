import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Virginia Beach | TML Agency",
  description: "TML offers expert music release services in Virginia Beach. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release virginia beach", "music release agency virginia beach", "music release company virginia beach"],
};

export default function MusicReleaseInVirginiaBeachPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
