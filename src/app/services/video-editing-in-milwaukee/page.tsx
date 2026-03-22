import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milwaukee"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Milwaukee | TML Agency",
  description: "TML offers expert video editing services in Milwaukee. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing milwaukee", "video editing agency milwaukee", "video editing company milwaukee"],
};

export default function VideoEditingInMilwaukeePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
