import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["peterborough"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Peterborough | TML Agency",
  description: "TML offers expert music release services in Peterborough. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release peterborough", "music release agency peterborough", "music release company peterborough"],
};

export default function MusicReleaseInPeterboroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
