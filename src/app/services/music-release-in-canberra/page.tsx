import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["canberra"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Canberra | TML Agency",
  description: "TML offers expert music release services in Canberra. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release canberra", "music release agency canberra", "music release company canberra"],
};

export default function MusicReleaseInCanberraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
