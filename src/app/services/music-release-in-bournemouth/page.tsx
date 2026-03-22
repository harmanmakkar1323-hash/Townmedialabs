import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bournemouth"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Bournemouth | TML Agency",
  description: "TML offers expert music release services in Bournemouth. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release bournemouth", "music release agency bournemouth", "music release company bournemouth"],
};

export default function MusicReleaseInBournemouthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
