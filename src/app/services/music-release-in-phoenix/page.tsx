import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["phoenix"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Phoenix | TML Agency",
  description: "TML offers expert music release services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release phoenix", "music release agency phoenix", "music release company phoenix"],
};

export default function MusicReleaseInPhoenixPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
