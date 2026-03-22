import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["punjab"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Punjab | TML Agency",
  description: "TML offers expert video editing services in Punjab. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing punjab", "video editing agency punjab", "video editing company punjab"],
};

export default function VideoEditingInPunjabPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
