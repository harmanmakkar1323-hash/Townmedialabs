import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bristol"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Bristol | TML Agency",
  description: "TML offers expert music release services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release bristol", "music release agency bristol", "music release company bristol"],
};

export default function MusicReleaseInBristolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
