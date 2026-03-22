import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["toowoomba"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Toowoomba | TML Agency",
  description: "TML offers expert music release services in Toowoomba. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release toowoomba", "music release agency toowoomba", "music release company toowoomba"],
};

export default function MusicReleaseInToowoombaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
