import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["omaha"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Omaha | TML Agency",
  description: "TML offers expert music release services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release omaha", "music release agency omaha", "music release company omaha"],
};

export default function MusicReleaseInOmahaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
