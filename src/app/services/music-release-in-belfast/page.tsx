import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["belfast"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Belfast | TML Agency",
  description: "TML offers expert music release services in Belfast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release belfast", "music release agency belfast", "music release company belfast"],
};

export default function MusicReleaseInBelfastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
