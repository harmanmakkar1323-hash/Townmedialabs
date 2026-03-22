import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["patiala"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Patiala | TML Agency",
  description: "TML offers expert music release and distribution services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution patiala", "music release and distribution agency patiala", "music release and distribution company patiala"],
};

export default function MusicreleaseInPatialaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
