import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["southampton"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Southampton | TML Agency",
  description: "TML offers expert video editing services in Southampton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing southampton", "video editing agency southampton", "video editing company southampton"],
};

export default function VideoEditingInSouthamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
