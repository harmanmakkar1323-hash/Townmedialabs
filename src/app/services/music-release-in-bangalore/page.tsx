import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bangalore"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Bangalore | TML Agency",
  description: "TML offers expert music release and distribution services in Bangalore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution bangalore", "music release and distribution agency bangalore", "music release and distribution company bangalore"],
};

export default function MusicreleaseInBangalorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
