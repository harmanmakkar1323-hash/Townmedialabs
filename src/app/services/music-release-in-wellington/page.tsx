import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Wellington | TML Agency",
  description: "TML offers expert music release services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["music release wellington", "music release agency wellington", "music release wellington nz"],
};

export default function MusicReleaseInWellingtonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
