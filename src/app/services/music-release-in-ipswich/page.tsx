import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ipswich"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Ipswich | TML Agency",
  description: "TML offers expert music release services in Ipswich. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release ipswich", "music release agency ipswich", "music release company ipswich"],
};

export default function MusicReleaseInIpswichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
