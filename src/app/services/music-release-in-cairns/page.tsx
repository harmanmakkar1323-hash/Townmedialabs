import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cairns"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Cairns | TML Agency",
  description: "TML offers expert music release services in Cairns. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release cairns", "music release agency cairns", "music release company cairns"],
};

export default function MusicReleaseInCairnsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
