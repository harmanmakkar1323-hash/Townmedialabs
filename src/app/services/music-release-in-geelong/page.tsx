import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["geelong"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Geelong | TML Agency",
  description: "TML offers expert music release services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release geelong", "music release agency geelong", "music release company geelong"],
};

export default function MusicReleaseInGeelongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
