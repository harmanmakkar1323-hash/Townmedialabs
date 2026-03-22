import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["reading"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Reading | TML Agency",
  description: "TML offers expert music release services in Reading. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release reading", "music release agency reading", "music release company reading"],
};

export default function MusicReleaseInReadingPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
