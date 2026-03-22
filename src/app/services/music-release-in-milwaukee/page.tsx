import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milwaukee"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Milwaukee | TML Agency",
  description: "TML offers expert music release services in Milwaukee. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release milwaukee", "music release agency milwaukee", "music release company milwaukee"],
};

export default function MusicReleaseInMilwaukeePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
