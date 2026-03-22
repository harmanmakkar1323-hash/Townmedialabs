import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sacramento"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Sacramento | TML Agency",
  description: "TML offers expert music release services in Sacramento. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release sacramento", "music release agency sacramento", "music release company sacramento"],
};

export default function MusicReleaseInSacramentoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
