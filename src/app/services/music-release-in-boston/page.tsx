import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boston"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Boston | TML Agency",
  description: "TML offers expert music release services in Boston. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release boston", "music release agency boston", "music release company boston"],
};

export default function MusicReleaseInBostonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
