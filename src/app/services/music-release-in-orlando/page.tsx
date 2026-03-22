import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["orlando"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Orlando | TML Agency",
  description: "TML offers expert music release services in Orlando. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release orlando", "music release agency orlando", "music release company orlando"],
};

export default function MusicReleaseInOrlandoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
