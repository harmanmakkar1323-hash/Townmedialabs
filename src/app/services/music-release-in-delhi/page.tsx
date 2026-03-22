import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Delhi | TML Agency",
  description: "TML offers expert music release services in Delhi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release delhi", "music release agency delhi", "music release company delhi"],
};

export default function MusicReleaseInDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
