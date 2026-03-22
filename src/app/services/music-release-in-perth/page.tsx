import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["perth"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Perth | TML Agency",
  description: "TML offers expert music release services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release perth", "music release agency perth", "music release company perth"],
};

export default function MusicReleaseInPerthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
