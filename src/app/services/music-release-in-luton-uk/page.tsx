import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["luton_uk"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Luton | TML Agency",
  description: "TML offers expert music release services in Luton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release luton", "music release agency luton", "music release company luton"],
};

export default function MusicReleaseInLutonUkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
