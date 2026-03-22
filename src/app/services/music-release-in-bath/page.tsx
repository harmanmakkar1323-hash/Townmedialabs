import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bath"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Bath | TML Agency",
  description: "TML offers expert music release services in Bath. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release bath", "music release agency bath", "music release company bath"],
};

export default function MusicReleaseInBathPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
