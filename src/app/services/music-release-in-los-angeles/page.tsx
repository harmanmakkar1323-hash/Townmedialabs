import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Los Angeles | TML Agency",
  description: "TML offers expert music release services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release los angeles", "music release agency los angeles", "music release company los angeles"],
};

export default function MusicReleaseInLosAngelesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
