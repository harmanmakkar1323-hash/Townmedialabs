import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nottingham"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Nottingham | TML Agency",
  description: "TML offers expert music release services in Nottingham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release nottingham", "music release agency nottingham", "music release company nottingham"],
};

export default function MusicReleaseInNottinghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
