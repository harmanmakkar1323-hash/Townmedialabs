import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_francisco"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in San Francisco | TML Agency",
  description: "TML offers expert music release services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release san francisco", "music release agency san francisco", "music release company san francisco"],
};

export default function MusicReleaseInSanFranciscoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
