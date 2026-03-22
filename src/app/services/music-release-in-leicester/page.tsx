import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leicester"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Leicester | TML Agency",
  description: "TML offers expert music release services in Leicester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release leicester", "music release agency leicester", "music release company leicester"],
};

export default function MusicReleaseInLeicesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
