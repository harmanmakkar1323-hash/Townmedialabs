import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["austin"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Austin | TML Agency",
  description: "TML offers expert video editing services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing austin", "video editing agency austin", "video editing company austin"],
};

export default function VideoEditingInAustinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
