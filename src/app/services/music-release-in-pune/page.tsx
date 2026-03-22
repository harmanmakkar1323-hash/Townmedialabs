import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pune"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Pune | TML Agency",
  description: "TML offers expert music release and distribution services in Pune. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution pune", "music release and distribution agency pune", "music release and distribution company pune"],
};

export default function MusicreleaseInPunePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
