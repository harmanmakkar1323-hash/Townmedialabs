import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ludhiana"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Ludhiana | TML Agency",
  description: "TML offers expert music release services in Ludhiana. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release ludhiana", "music release agency ludhiana", "music release company ludhiana"],
};

export default function MusicReleaseInLudhianaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
