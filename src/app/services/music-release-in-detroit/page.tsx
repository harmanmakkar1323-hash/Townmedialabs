import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["detroit"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Detroit | TML Agency",
  description: "TML offers expert music release services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release detroit", "music release agency detroit", "music release company detroit"],
};

export default function MusicReleaseInDetroitPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
