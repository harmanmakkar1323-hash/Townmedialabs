import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nottingham"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Nottingham | TML Agency",
  description: "TML offers expert video editing services in Nottingham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing nottingham", "video editing agency nottingham", "video editing company nottingham"],
};

export default function VideoEditingInNottinghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
