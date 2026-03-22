import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["aberdeen"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Aberdeen | TML Agency",
  description: "TML offers expert music release services in Aberdeen. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release aberdeen", "music release agency aberdeen", "music release company aberdeen"],
};

export default function MusicReleaseInAberdeenPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
