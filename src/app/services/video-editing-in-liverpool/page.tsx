import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["liverpool"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Liverpool | TML Agency",
  description: "TML offers expert video editing services in Liverpool. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing liverpool", "video editing agency liverpool", "video editing company liverpool"],
};

export default function VideoEditingInLiverpoolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
