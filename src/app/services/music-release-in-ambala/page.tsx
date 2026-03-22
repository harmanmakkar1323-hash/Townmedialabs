import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ambala"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Ambala | TML Agency",
  description: "TML offers expert music release and distribution services in Ambala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution ambala", "music release and distribution agency ambala", "music release and distribution company ambala"],
};

export default function MusicreleaseInAmbalaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
