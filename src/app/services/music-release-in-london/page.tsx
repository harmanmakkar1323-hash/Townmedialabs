import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["london"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in London | TML Agency",
  description: "TML offers expert music release services in London. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release london", "music release agency london", "music release company london"],
};

export default function MusicReleaseInLondonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
