import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bath"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Bath | TML Agency",
  description: "TML offers expert video editing services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing bath", "video editing agency bath", "video editing company bath"],
};

export default function VideoEditingInBathPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
