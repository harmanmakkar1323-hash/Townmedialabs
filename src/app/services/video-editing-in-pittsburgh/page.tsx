import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pittsburgh"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Pittsburgh | TML Agency",
  description: "TML offers expert video editing services in Pittsburgh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing pittsburgh", "video editing agency pittsburgh", "video editing company pittsburgh"],
};

export default function VideoEditingInPittsburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
