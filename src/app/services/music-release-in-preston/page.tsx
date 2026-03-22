import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["preston"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Preston | TML Agency",
  description: "TML offers expert music release services in Preston. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release preston", "music release agency preston", "music release company preston"],
};

export default function MusicReleaseInPrestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
