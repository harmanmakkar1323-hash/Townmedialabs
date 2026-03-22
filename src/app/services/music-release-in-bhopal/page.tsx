import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bhopal"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Bhopal | TML Agency",
  description: "TML offers expert music release and distribution services in Bhopal. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution bhopal", "music release and distribution agency bhopal", "music release and distribution company bhopal"],
};

export default function MusicreleaseInBhopalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
