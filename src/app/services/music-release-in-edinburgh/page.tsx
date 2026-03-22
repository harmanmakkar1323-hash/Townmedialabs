import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["edinburgh"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Edinburgh | TML Agency",
  description: "TML offers expert music release services in Edinburgh. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release edinburgh", "music release agency edinburgh", "music release company edinburgh"],
};

export default function MusicReleaseInEdinburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
