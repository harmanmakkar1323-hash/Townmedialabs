import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nagpur"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Nagpur | TML Agency",
  description: "TML offers expert music release and distribution services in Nagpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution nagpur", "music release and distribution agency nagpur", "music release and distribution company nagpur"],
};

export default function MusicreleaseInNagpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
