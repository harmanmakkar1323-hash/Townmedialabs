import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brisbane"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Brisbane | TML Agency",
  description: "TML offers expert music release services in Brisbane. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release brisbane", "music release agency brisbane", "music release company brisbane"],
};

export default function MusicReleaseInBrisbanePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
