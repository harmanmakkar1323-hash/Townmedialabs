import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Virginia Beach | TML Agency",
  description: "TML offers expert video editing services in Virginia Beach. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing virginia beach", "video editing agency virginia beach", "video editing company virginia beach"],
};

export default function VideoEditingInVirginiaBeachPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
