import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["townsville"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Townsville | TML Agency",
  description: "TML offers expert music release services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release townsville", "music release agency townsville", "music release company townsville"],
};

export default function MusicReleaseInTownsvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
