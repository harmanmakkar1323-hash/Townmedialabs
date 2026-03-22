import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rockhampton"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Rockhampton | TML Agency",
  description: "TML offers expert music release services in Rockhampton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release rockhampton", "music release agency rockhampton", "music release company rockhampton"],
};

export default function MusicReleaseInRockhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
