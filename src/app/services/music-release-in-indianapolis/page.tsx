import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indianapolis"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Indianapolis | TML Agency",
  description: "TML offers expert music release services in Indianapolis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release indianapolis", "music release agency indianapolis", "music release company indianapolis"],
};

export default function MusicReleaseInIndianapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
