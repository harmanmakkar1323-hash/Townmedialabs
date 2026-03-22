import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Karnal | TML Agency",
  description: "TML offers expert music release and distribution services in Karnal. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution karnal", "music release and distribution agency karnal", "music release and distribution company karnal"],
};

export default function MusicreleaseInKarnalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
