import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cincinnati"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Cincinnati | TML Agency",
  description: "TML offers expert music release services in Cincinnati. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release cincinnati", "music release agency cincinnati", "music release company cincinnati"],
};

export default function MusicReleaseInCincinnatiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
