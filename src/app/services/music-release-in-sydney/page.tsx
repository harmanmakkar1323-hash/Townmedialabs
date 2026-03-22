import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sydney"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Sydney | TML Agency",
  description: "TML offers expert music release services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release sydney", "music release agency sydney", "music release company sydney"],
};

export default function MusicReleaseInSydneyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
