import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["auckland"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Auckland | TML Agency",
  description: "TML offers expert music release services in Auckland. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release auckland", "music release agency auckland", "music release company auckland"],
};

export default function MusicReleaseInAucklandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
