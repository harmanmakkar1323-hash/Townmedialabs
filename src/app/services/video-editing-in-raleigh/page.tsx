import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["raleigh"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Raleigh | TML Agency",
  description: "TML offers expert video editing services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing raleigh", "video editing agency raleigh", "video editing company raleigh"],
};

export default function VideoEditingInRaleighPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
