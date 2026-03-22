import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dubai"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Dubai | TML Agency",
  description: "TML offers expert music release services in Dubai. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release dubai", "music release agency dubai", "music release company dubai"],
};

export default function MusicReleaseInDubaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
