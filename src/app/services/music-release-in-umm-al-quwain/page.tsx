import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Umm Al Quwain | TML Agency",
  description: "TML offers expert music release services in Umm Al Quwain. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release umm al quwain", "music release agency umm al quwain", "music release company umm al quwain"],
};

export default function MusicReleaseInUmmAlQuwainPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
