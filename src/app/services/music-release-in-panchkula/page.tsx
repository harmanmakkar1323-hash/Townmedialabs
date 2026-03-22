import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Panchkula | TML Agency",
  description: "TML offers expert music release and distribution services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution panchkula", "music release and distribution agency panchkula", "music release and distribution company panchkula"],
};

export default function MusicreleaseInPanchkulaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
