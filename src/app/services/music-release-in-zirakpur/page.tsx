import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Zirakpur | TML Agency",
  description: "TML offers expert music release services in Zirakpur. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release zirakpur", "music release agency zirakpur", "music release company zirakpur"],
};

export default function MusicReleaseInZirakpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
