import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["oklahoma_city"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Oklahoma City | TML Agency",
  description: "TML offers expert music release services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release oklahoma city", "music release agency oklahoma city", "music release company oklahoma city"],
};

export default function MusicReleaseInOklahomaCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
