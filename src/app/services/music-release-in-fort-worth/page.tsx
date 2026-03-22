import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fort_worth"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Fort Worth | TML Agency",
  description: "TML offers expert music release services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release fort worth", "music release agency fort worth", "music release company fort worth"],
};

export default function MusicReleaseInFortWorthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
