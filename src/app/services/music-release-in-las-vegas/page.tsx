import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["las_vegas"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Las Vegas | TML Agency",
  description: "TML offers expert music release services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release las vegas", "music release agency las vegas", "music release company las vegas"],
};

export default function MusicReleaseInLasVegasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
