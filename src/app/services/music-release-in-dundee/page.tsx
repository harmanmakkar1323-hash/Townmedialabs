import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dundee"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Dundee | TML Agency",
  description: "TML offers expert music release services in Dundee. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release dundee", "music release agency dundee", "music release company dundee"],
};

export default function MusicReleaseInDundeePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
