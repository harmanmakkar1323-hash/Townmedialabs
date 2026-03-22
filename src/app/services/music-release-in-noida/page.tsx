import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["noida"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Noida | TML Agency",
  description: "TML offers expert music release and distribution services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution noida", "music release and distribution agency noida", "music release and distribution company noida"],
};

export default function MusicreleaseInNoidaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
