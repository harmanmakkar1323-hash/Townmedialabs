import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["norwich"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Norwich | TML Agency",
  description: "TML offers expert music release services in Norwich. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release norwich", "music release agency norwich", "music release company norwich"],
};

export default function MusicReleaseInNorwichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
