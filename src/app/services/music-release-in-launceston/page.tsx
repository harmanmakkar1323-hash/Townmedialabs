import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["launceston"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Launceston | TML Agency",
  description: "TML offers expert music release services in Launceston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release launceston", "music release agency launceston", "music release company launceston"],
};

export default function MusicReleaseInLauncestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
