import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_jose"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in San Jose | TML Agency",
  description: "TML offers expert video editing services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing san jose", "video editing agency san jose", "video editing company san jose"],
};

export default function VideoEditingInSanJosePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
