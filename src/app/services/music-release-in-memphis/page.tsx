import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["memphis"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Memphis | TML Agency",
  description: "TML offers expert music release services in Memphis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release memphis", "music release agency memphis", "music release company memphis"],
};

export default function MusicReleaseInMemphisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
