import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["st_louis"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in St. Louis | TML Agency",
  description: "TML offers expert music release services in St. Louis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release st. louis", "music release agency st. louis", "music release company st. louis"],
};

export default function MusicReleaseInStLouisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
