import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ballarat"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Ballarat | TML Agency",
  description: "TML offers expert music release services in Ballarat. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release ballarat", "music release agency ballarat", "music release company ballarat"],
};

export default function MusicReleaseInBallaratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
