import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chicago"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Chicago | TML Agency",
  description: "TML offers expert music release services in Chicago. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release chicago", "music release agency chicago", "music release company chicago"],
};

export default function MusicReleaseInChicagoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
