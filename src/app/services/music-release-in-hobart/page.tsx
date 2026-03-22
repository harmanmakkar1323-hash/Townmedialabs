import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hobart"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Hobart | TML Agency",
  description: "TML offers expert music release services in Hobart. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release hobart", "music release agency hobart", "music release company hobart"],
};

export default function MusicReleaseInHobartPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
