import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["middlesbrough"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Middlesbrough | TML Agency",
  description: "TML offers expert music release services in Middlesbrough. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release middlesbrough", "music release agency middlesbrough", "music release company middlesbrough"],
};

export default function MusicReleaseInMiddlesbroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
