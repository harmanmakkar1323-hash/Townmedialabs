import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["edinburgh"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Edinburgh | TML Agency",
  description: "TML offers expert video editing services in Edinburgh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing edinburgh", "video editing agency edinburgh", "video editing company edinburgh"],
};

export default function VideoEditingInEdinburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
