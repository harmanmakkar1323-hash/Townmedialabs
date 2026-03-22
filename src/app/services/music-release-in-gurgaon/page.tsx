import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gurgaon"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Gurgaon | TML Agency",
  description: "TML offers expert music release and distribution services in Gurgaon. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution gurgaon", "music release and distribution agency gurgaon", "music release and distribution company gurgaon"],
};

export default function MusicreleaseInGurgaonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
