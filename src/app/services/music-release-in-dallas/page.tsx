import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dallas"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Dallas | TML Agency",
  description: "TML offers expert music release services in Dallas. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release dallas", "music release agency dallas", "music release company dallas"],
};

export default function MusicReleaseInDallasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
