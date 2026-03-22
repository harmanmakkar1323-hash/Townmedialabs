import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["honolulu"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Honolulu | TML Agency",
  description: "TML offers expert music release services in Honolulu. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release honolulu", "music release agency honolulu", "music release company honolulu"],
};

export default function MusicReleaseInHonoluluPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
