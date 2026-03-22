import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunderland"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Sunderland | TML Agency",
  description: "TML offers expert music release services in Sunderland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release sunderland", "music release agency sunderland", "music release company sunderland"],
};

export default function MusicReleaseInSunderlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
