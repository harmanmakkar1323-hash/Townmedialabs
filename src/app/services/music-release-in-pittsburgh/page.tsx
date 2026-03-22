import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pittsburgh"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Pittsburgh | TML Agency",
  description: "TML offers expert music release services in Pittsburgh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release pittsburgh", "music release agency pittsburgh", "music release company pittsburgh"],
};

export default function MusicReleaseInPittsburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
