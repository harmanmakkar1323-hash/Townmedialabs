import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derabassi"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Derabassi | TML Agency",
  description: "TML offers expert music release and distribution services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution derabassi", "music release and distribution agency derabassi", "music release and distribution company derabassi"],
};

export default function MusicreleaseInDerabassiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
