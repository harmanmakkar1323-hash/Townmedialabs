import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wolverhampton"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Wolverhampton | TML Agency",
  description: "TML offers expert music release services in Wolverhampton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release wolverhampton", "music release agency wolverhampton", "music release company wolverhampton"],
};

export default function MusicReleaseInWolverhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
