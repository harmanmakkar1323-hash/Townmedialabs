import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["swansea"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Swansea | TML Agency",
  description: "TML offers expert music release services in Swansea. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release swansea", "music release agency swansea", "music release company swansea"],
};

export default function MusicReleaseInSwanseaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
