import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["glasgow"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Glasgow | TML Agency",
  description: "TML offers expert music release services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release glasgow", "music release agency glasgow", "music release company glasgow"],
};

export default function MusicReleaseInGlasgowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
