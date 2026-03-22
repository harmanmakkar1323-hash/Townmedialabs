import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["toowoomba"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Toowoomba | TML Agency",
  description: "TML offers expert video editing services in Toowoomba. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing toowoomba", "video editing agency toowoomba", "video editing company toowoomba"],
};

export default function VideoEditingInToowoombaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
