import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dehradun"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Dehradun | TML Agency",
  description: "TML offers expert music release and distribution services in Dehradun. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution dehradun", "music release and distribution agency dehradun", "music release and distribution company dehradun"],
};

export default function MusicreleaseInDehradunPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
