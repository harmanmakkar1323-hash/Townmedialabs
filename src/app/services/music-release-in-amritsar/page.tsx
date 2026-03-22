import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["amritsar"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Amritsar | TML Agency",
  description: "TML offers expert music release and distribution services in Amritsar. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution amritsar", "music release and distribution agency amritsar", "music release and distribution company amritsar"],
};

export default function MusicreleaseInAmritsarPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
