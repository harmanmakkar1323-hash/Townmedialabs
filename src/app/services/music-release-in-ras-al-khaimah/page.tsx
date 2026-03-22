import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Ras Al Khaimah | TML Agency",
  description: "TML offers expert music release services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release ras al khaimah", "music release agency ras al khaimah", "music release company ras al khaimah"],
};

export default function MusicReleaseInRasAlKhaimahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
