import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bathinda"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Bathinda | TML Agency",
  description: "TML offers expert music release services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release bathinda", "music release agency bathinda", "music release company bathinda"],
};

export default function MusicReleaseInBathindaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
