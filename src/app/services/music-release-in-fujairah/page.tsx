import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fujairah"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Fujairah | TML Agency",
  description: "TML offers expert music release services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release fujairah", "music release agency fujairah", "music release company fujairah"],
};

export default function MusicReleaseInFujairahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
