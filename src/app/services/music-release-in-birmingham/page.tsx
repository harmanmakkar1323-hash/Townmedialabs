import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["birmingham"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Birmingham | TML Agency",
  description: "TML offers expert music release services in Birmingham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release birmingham", "music release agency birmingham", "music release company birmingham"],
};

export default function MusicReleaseInBirminghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
