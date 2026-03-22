import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["denver"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Denver | TML Agency",
  description: "TML offers expert music release services in Denver. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release denver", "music release agency denver", "music release company denver"],
};

export default function MusicReleaseInDenverPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
