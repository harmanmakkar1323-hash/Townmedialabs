import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in South Delhi | TML Agency",
  description: "TML offers expert music release and distribution services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution south delhi", "music release and distribution agency south delhi", "music release and distribution company south delhi"],
};

export default function MusicreleaseInSouthDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
