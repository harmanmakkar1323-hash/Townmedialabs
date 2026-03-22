import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["melbourne"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Melbourne | TML Agency",
  description: "TML offers expert video editing services in Melbourne. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing melbourne", "video editing agency melbourne", "video editing company melbourne"],
};

export default function VideoEditingInMelbournePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
