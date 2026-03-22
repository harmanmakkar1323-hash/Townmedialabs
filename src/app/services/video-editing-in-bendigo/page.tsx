import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bendigo"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Bendigo | TML Agency",
  description: "TML offers expert video editing services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing bendigo", "video editing agency bendigo", "video editing company bendigo"],
};

export default function VideoEditingInBendigoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
