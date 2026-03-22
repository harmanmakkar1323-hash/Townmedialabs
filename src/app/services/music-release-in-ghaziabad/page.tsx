import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ghaziabad"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Ghaziabad | TML Agency",
  description: "TML offers expert music release and distribution services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution ghaziabad", "music release and distribution agency ghaziabad", "music release and distribution company ghaziabad"],
};

export default function MusicreleaseInGhaziabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
