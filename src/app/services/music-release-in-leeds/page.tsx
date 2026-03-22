import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leeds"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Leeds | TML Agency",
  description: "TML offers expert music release services in Leeds. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release leeds", "music release agency leeds", "music release company leeds"],
};

export default function MusicReleaseInLeedsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
