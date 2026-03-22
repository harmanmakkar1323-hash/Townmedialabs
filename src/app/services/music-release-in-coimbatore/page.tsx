import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coimbatore"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Coimbatore | TML Agency",
  description: "TML offers expert music release and distribution services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution coimbatore", "music release and distribution agency coimbatore", "music release and distribution company coimbatore"],
};

export default function MusicreleaseInCoimbatorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
