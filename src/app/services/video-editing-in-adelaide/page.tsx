import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["adelaide"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Adelaide | TML Agency",
  description: "TML offers expert video editing services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing adelaide", "video editing agency adelaide", "video editing company adelaide"],
};

export default function VideoEditingInAdelaidePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
