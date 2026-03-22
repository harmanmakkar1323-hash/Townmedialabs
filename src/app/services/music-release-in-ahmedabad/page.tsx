import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ahmedabad"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Ahmedabad | TML Agency",
  description: "TML offers expert music release and distribution services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution ahmedabad", "music release and distribution agency ahmedabad", "music release and distribution company ahmedabad"],
};

export default function MusicreleaseInAhmedabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
