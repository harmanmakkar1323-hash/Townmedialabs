import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kharar"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Kharar | TML Agency",
  description: "TML offers expert music release and distribution services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution kharar", "music release and distribution agency kharar", "music release and distribution company kharar"],
};

export default function MusicreleaseInKhararPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
