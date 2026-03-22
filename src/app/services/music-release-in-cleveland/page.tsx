import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cleveland"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Cleveland | TML Agency",
  description: "TML offers expert music release services in Cleveland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release cleveland", "music release agency cleveland", "music release company cleveland"],
};

export default function MusicReleaseInClevelandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
