import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brisbane"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Brisbane | TML Agency",
  description: "TML offers expert video editing services in Brisbane. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing brisbane", "video editing agency brisbane", "video editing company brisbane"],
};

export default function VideoEditingInBrisbanePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
