import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Lucknow | TML Agency",
  description: "TML offers expert music release and distribution services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution lucknow", "music release and distribution agency lucknow", "music release and distribution company lucknow"],
};

export default function MusicreleaseInLucknowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
