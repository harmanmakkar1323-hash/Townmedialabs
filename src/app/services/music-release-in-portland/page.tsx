import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["portland"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Portland | TML Agency",
  description: "TML offers expert music release services in Portland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release portland", "music release agency portland", "music release company portland"],
};

export default function MusicReleaseInPortlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
