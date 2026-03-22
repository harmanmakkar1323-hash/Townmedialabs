import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["aberdeen"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Aberdeen | TML Agency",
  description: "TML offers expert video editing services in Aberdeen. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing aberdeen", "video editing agency aberdeen", "video editing company aberdeen"],
};

export default function VideoEditingInAberdeenPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
