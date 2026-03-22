import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["columbus_oh"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Columbus | TML Agency",
  description: "TML offers expert music release services in Columbus. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release columbus", "music release agency columbus", "music release company columbus"],
};

export default function MusicReleaseInColumbusOhPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
