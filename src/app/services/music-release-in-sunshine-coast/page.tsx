import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Sunshine Coast | TML Agency",
  description: "TML offers expert music release services in Sunshine Coast. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release sunshine coast", "music release agency sunshine coast", "music release company sunshine coast"],
};

export default function MusicReleaseInSunshineCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
