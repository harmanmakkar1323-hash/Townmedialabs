import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wollongong"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Wollongong | TML Agency",
  description: "TML offers expert video editing services in Wollongong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing wollongong", "video editing agency wollongong", "video editing company wollongong"],
};

export default function VideoEditingInWollongongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
