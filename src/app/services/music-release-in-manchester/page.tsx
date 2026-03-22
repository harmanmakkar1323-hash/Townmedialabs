import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["manchester"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Manchester | TML Agency",
  description: "TML offers expert music release services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release manchester", "music release agency manchester", "music release company manchester"],
};

export default function MusicReleaseInManchesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
