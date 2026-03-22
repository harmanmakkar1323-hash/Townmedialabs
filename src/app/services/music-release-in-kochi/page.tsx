import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kochi"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Kochi | TML Agency",
  description: "TML offers expert music release and distribution services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution kochi", "music release and distribution agency kochi", "music release and distribution company kochi"],
};

export default function MusicreleaseInKochiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
