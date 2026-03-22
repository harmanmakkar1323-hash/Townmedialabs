import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["minneapolis"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Minneapolis | TML Agency",
  description: "TML offers expert music release services in Minneapolis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release minneapolis", "music release agency minneapolis", "music release company minneapolis"],
};

export default function MusicReleaseInMinneapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
