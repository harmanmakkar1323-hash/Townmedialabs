import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["new_york"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in New York | TML Agency",
  description: "TML offers expert video editing services in New York. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing new york", "video editing agency new york", "video editing company new york"],
};

export default function VideoEditingInNewYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
