import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derby"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Derby | TML Agency",
  description: "TML offers expert music release services in Derby. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release derby", "music release agency derby", "music release company derby"],
};

export default function MusicReleaseInDerbyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
