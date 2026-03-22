import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Salt Lake City | TML Agency",
  description: "TML offers expert music release services in Salt Lake City. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release salt lake city", "music release agency salt lake city", "music release company salt lake city"],
};

export default function MusicReleaseInSaltLakeCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
