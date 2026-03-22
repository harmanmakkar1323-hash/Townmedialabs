import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["baltimore"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Baltimore | TML Agency",
  description: "TML offers expert music release services in Baltimore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release baltimore", "music release agency baltimore", "music release company baltimore"],
};

export default function MusicReleaseInBaltimorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
