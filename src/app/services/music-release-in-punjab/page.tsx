import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["punjab"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Punjab | TML Agency",
  description: "TML offers expert music release services in Punjab. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release punjab", "music release agency punjab", "music release company punjab"],
};

export default function MusicReleaseInPunjabPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
