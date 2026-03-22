import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_antonio"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in San Antonio | TML Agency",
  description: "TML offers expert video editing services in San Antonio. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing san antonio", "video editing agency san antonio", "video editing company san antonio"],
};

export default function VideoEditingInSanAntonioPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
