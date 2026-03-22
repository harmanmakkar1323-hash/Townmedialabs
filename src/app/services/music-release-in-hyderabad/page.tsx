import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hyderabad"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Hyderabad | TML Agency",
  description: "TML offers expert music release and distribution services in Hyderabad. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution hyderabad", "music release and distribution agency hyderabad", "music release and distribution company hyderabad"],
};

export default function MusicreleaseInHyderabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
