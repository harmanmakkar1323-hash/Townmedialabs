import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["calgary"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Calgary | TML Agency",
  description: "TML offers expert music release services in Calgary, Alberta. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release calgary", "music release agency calgary"],
};

export default function Page() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
