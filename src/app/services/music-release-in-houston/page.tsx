import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["houston"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Houston | TML Agency",
  description: "TML offers expert music release services in Houston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release houston", "music release agency houston", "music release company houston"],
};

export default function MusicReleaseInHoustonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
