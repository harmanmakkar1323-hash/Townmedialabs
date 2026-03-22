import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cheltenham"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Cheltenham | TML Agency",
  description: "TML offers expert music release services in Cheltenham. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release cheltenham", "music release agency cheltenham", "music release company cheltenham"],
};

export default function MusicReleaseInCheltenhamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
