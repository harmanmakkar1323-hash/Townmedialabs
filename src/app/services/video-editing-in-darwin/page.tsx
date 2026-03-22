import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["darwin"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Darwin | TML Agency",
  description: "TML offers expert video editing services in Darwin. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing darwin", "video editing agency darwin", "video editing company darwin"],
};

export default function VideoEditingInDarwinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
