import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["newcastle"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Newcastle | TML Agency",
  description: "TML offers expert video editing services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing newcastle", "video editing agency newcastle", "video editing company newcastle"],
};

export default function VideoEditingInNewcastlePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
