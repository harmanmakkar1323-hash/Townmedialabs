import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["raleigh"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Raleigh | TML Agency",
  description: "TML offers expert music release services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release raleigh", "music release agency raleigh", "music release company raleigh"],
};

export default function MusicReleaseInRaleighPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
