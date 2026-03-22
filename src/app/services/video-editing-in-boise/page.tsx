import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boise"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Boise | TML Agency",
  description: "TML offers expert video editing services in Boise. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing boise", "video editing agency boise", "video editing company boise"],
};

export default function VideoEditingInBoisePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
