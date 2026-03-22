import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wollongong"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Wollongong | TML Agency",
  description: "TML offers expert music release services in Wollongong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release wollongong", "music release agency wollongong", "music release company wollongong"],
};

export default function MusicReleaseInWollongongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
