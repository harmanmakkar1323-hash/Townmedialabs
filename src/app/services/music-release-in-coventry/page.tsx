import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coventry"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Coventry | TML Agency",
  description: "TML offers expert music release services in Coventry. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release coventry", "music release agency coventry", "music release company coventry"],
};

export default function MusicReleaseInCoventryPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
