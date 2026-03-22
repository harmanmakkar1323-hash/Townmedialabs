import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Visakhapatnam | TML Agency",
  description: "TML offers expert music release and distribution services in Visakhapatnam. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution visakhapatnam", "music release and distribution agency visakhapatnam", "music release and distribution company visakhapatnam"],
};

export default function MusicreleaseInVisakhapatnamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
