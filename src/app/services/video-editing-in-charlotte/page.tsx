import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["charlotte"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Charlotte | TML Agency",
  description: "TML offers expert video editing services in Charlotte. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing charlotte", "video editing agency charlotte", "video editing company charlotte"],
};

export default function VideoEditingInCharlottePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
