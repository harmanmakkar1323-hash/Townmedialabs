import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mumbai"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Mumbai | TML Agency",
  description: "TML offers expert music release services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release mumbai", "music release agency mumbai", "music release company mumbai"],
};

export default function MusicReleaseInMumbaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
