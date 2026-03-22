import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["vadodara"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Vadodara | TML Agency",
  description: "TML offers expert music release and distribution services in Vadodara. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution vadodara", "music release and distribution agency vadodara", "music release and distribution company vadodara"],
};

export default function MusicreleaseInVadodaraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
