import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["al_ain"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Al Ain | TML Agency",
  description: "TML offers expert music release services in Al Ain. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release al ain", "music release agency al ain", "music release company al ain"],
};

export default function MusicReleaseInAlAinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
