import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["richmond"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Richmond | TML Agency",
  description: "TML offers expert music release services in Richmond. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release richmond", "music release agency richmond", "music release company richmond"],
};

export default function MusicReleaseInRichmondPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
