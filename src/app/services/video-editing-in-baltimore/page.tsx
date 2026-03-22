import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["baltimore"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Baltimore | TML Agency",
  description: "TML offers expert video editing services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing baltimore", "video editing agency baltimore", "video editing company baltimore"],
};

export default function VideoEditingInBaltimorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
