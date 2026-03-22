import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kolkata"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Kolkata | TML Agency",
  description: "TML offers expert music release and distribution services in Kolkata. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution kolkata", "music release and distribution agency kolkata", "music release and distribution company kolkata"],
};

export default function MusicreleaseInKolkataPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
