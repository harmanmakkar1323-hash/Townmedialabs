import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["louisville"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Louisville | TML Agency",
  description: "TML offers expert music release services in Louisville. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release louisville", "music release agency louisville", "music release company louisville"],
};

export default function MusicReleaseInLouisvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
