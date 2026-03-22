import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nashville"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Nashville | TML Agency",
  description: "TML offers expert video editing services in Nashville. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing nashville", "video editing agency nashville", "video editing company nashville"],
};

export default function VideoEditingInNashvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
