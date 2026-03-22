import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panipat"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Panipat | TML Agency",
  description: "TML offers expert music release and distribution services in Panipat. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution panipat", "music release and distribution agency panipat", "music release and distribution company panipat"],
};

export default function MusicreleaseInPanipatPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
