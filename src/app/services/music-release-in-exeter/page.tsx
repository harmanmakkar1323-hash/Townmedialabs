import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["exeter"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Exeter | TML Agency",
  description: "TML offers expert music release services in Exeter. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release exeter", "music release agency exeter", "music release company exeter"],
};

export default function MusicReleaseInExeterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
