import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sharjah"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Sharjah | TML Agency",
  description: "TML offers expert music release services in Sharjah. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release sharjah", "music release agency sharjah", "music release company sharjah"],
};

export default function MusicReleaseInSharjahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
