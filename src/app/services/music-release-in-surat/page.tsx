import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["surat"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Surat | TML Agency",
  description: "TML offers expert music release and distribution services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution surat", "music release and distribution agency surat", "music release and distribution company surat"],
};

export default function MusicreleaseInSuratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
