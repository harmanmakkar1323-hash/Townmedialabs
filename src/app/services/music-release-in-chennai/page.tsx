import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chennai"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Chennai | TML Agency",
  description: "TML offers expert music release and distribution services in Chennai. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution chennai", "music release and distribution agency chennai", "music release and distribution company chennai"],
};

export default function MusicreleaseInChennaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
