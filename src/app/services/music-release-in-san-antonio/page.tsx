import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_antonio"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in San Antonio | TML Agency",
  description: "TML offers expert music release services in San Antonio. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release san antonio", "music release agency san antonio", "music release company san antonio"],
};

export default function MusicReleaseInSanAntonioPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
