import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["newcastle_au"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Newcastle | TML Agency",
  description: "TML offers expert music release services in Newcastle. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release newcastle", "music release agency newcastle", "music release company newcastle"],
};

export default function MusicReleaseInNewcastleAuPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
