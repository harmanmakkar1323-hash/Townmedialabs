import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["york"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in York | TML Agency",
  description: "TML offers expert music release services in York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release york", "music release agency york", "music release company york"],
};

export default function MusicReleaseInYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
