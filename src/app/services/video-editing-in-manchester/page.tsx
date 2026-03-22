import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["manchester"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Manchester | TML Agency",
  description: "TML offers expert video editing services in Manchester. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing manchester", "video editing agency manchester", "video editing company manchester"],
};

export default function VideoEditingInManchesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
