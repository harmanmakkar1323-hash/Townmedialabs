import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jaipur"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Jaipur | TML Agency",
  description: "TML offers expert music release and distribution services in Jaipur. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution jaipur", "music release and distribution agency jaipur", "music release and distribution company jaipur"],
};

export default function MusicreleaseInJaipurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
