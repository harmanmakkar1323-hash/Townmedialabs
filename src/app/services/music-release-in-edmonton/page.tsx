import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["edmonton"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Edmonton | TML Agency",
  description: "TML offers expert music release services in Edmonton, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release edmonton", "music release agency edmonton"],
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
