import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_diego"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in San Diego | TML Agency",
  description: "TML offers expert music release services in San Diego. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release san diego", "music release agency san diego", "music release company san diego"],
};

export default function MusicReleaseInSanDiegoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
