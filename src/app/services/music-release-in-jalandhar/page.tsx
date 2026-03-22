import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Jalandhar | TML Agency",
  description: "TML offers expert music release and distribution services in Jalandhar. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution jalandhar", "music release and distribution agency jalandhar", "music release and distribution company jalandhar"],
};

export default function MusicreleaseInJalandharPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
