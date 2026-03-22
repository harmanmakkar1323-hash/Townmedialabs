import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mohali"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Mohali | TML Agency",
  description: "TML offers expert music release and distribution services in Mohali. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution mohali", "music release and distribution agency mohali", "music release and distribution company mohali"],
};

export default function MusicreleaseInMohaliPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
