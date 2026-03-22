import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["philadelphia"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Philadelphia | TML Agency",
  description: "TML offers expert music release services in Philadelphia. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release philadelphia", "music release agency philadelphia", "music release company philadelphia"],
};

export default function MusicReleaseInPhiladelphiaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
