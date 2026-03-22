import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cincinnati"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Cincinnati | TML Agency",
  description: "TML offers expert video editing services in Cincinnati. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing cincinnati", "video editing agency cincinnati", "video editing company cincinnati"],
};

export default function VideoEditingInCincinnatiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
