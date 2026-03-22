import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["new_york"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in New York | TML Agency",
  description: "TML offers expert music release services in New York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release new york", "music release agency new york", "music release company new york"],
};

export default function MusicReleaseInNewYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
