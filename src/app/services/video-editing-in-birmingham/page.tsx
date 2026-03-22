import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["birmingham"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Birmingham | TML Agency",
  description: "TML offers expert video editing services in Birmingham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing birmingham", "video editing agency birmingham", "video editing company birmingham"],
};

export default function VideoEditingInBirminghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
