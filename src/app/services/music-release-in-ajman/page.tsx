import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ajman"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Ajman | TML Agency",
  description: "TML offers expert music release services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release ajman", "music release agency ajman", "music release company ajman"],
};

export default function MusicReleaseInAjmanPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
