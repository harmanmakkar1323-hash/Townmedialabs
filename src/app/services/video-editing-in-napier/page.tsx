import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Napier | TML Agency",
  description: "TML offers expert video editing services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["video editing napier", "video editing agency napier", "video editing napier nz"],
};

export default function VideoEditingInNapierPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
