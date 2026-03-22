import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["miami"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Miami | TML Agency",
  description: "TML offers expert music release services in Miami. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release miami", "music release agency miami", "music release company miami"],
};

export default function MusicReleaseInMiamiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
