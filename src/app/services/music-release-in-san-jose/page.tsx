import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_jose"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in San Jose | TML Agency",
  description: "TML offers expert music release services in San Jose. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release san jose", "music release agency san jose", "music release company san jose"],
};

export default function MusicReleaseInSanJosePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
