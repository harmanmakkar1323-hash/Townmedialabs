import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["seattle"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Seattle | TML Agency",
  description: "TML offers expert video editing services in Seattle. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing seattle", "video editing agency seattle", "video editing company seattle"],
};

export default function VideoEditingInSeattlePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
