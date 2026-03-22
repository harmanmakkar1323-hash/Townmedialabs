import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ajman"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Ajman | TML Agency",
  description: "TML offers expert video editing services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing ajman", "video editing agency ajman", "video editing company ajman"],
};

export default function VideoEditingInAjmanPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
