import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rajkot"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Rajkot | TML Agency",
  description: "TML offers expert music release and distribution services in Rajkot. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution rajkot", "music release and distribution agency rajkot", "music release and distribution company rajkot"],
};

export default function MusicreleaseInRajkotPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
