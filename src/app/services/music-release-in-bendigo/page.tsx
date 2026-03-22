import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bendigo"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Bendigo | TML Agency",
  description: "TML offers expert music release services in Bendigo. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release bendigo", "music release agency bendigo", "music release company bendigo"],
};

export default function MusicReleaseInBendigoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
