import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["plymouth"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Plymouth | TML Agency",
  description: "TML offers expert music release services in Plymouth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release plymouth", "music release agency plymouth", "music release company plymouth"],
};

export default function MusicReleaseInPlymouthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
