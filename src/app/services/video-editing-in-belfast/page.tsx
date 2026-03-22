import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["belfast"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Belfast | TML Agency",
  description: "TML offers expert video editing services in Belfast. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing belfast", "video editing agency belfast", "video editing company belfast"],
};

export default function VideoEditingInBelfastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
