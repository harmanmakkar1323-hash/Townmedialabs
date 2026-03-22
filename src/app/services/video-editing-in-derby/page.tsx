import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derby"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Derby | TML Agency",
  description: "TML offers expert video editing services in Derby. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing derby", "video editing agency derby", "video editing company derby"],
};

export default function VideoEditingInDerbyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
