import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["liverpool"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Liverpool | TML Agency",
  description: "TML offers expert music release services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release liverpool", "music release agency liverpool", "music release company liverpool"],
};

export default function MusicReleaseInLiverpoolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
