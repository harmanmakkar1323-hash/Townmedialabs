import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Napier | TML Agency",
  description: "TML offers expert music release services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["music release napier", "music release agency napier", "music release napier nz"],
};

export default function MusicReleaseInNapierPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
