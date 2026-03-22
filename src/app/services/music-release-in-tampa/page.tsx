import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tampa"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Tampa | TML Agency",
  description: "TML offers expert music release services in Tampa. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release tampa", "music release agency tampa", "music release company tampa"],
};

export default function MusicReleaseInTampaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
