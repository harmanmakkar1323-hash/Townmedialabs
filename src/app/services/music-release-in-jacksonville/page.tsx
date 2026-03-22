import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jacksonville"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Jacksonville | TML Agency",
  description: "TML offers expert music release services in Jacksonville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release jacksonville", "music release agency jacksonville", "music release company jacksonville"],
};

export default function MusicReleaseInJacksonvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
