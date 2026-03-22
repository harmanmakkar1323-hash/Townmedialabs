import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["oxford"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Oxford | TML Agency",
  description: "TML offers expert music release services in Oxford. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release oxford", "music release agency oxford", "music release company oxford"],
};

export default function MusicReleaseInOxfordPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
