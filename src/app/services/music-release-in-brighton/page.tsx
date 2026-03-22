import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brighton"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Brighton | TML Agency",
  description: "TML offers expert music release services in Brighton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release brighton", "music release agency brighton", "music release company brighton"],
};

export default function MusicReleaseInBrightonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
