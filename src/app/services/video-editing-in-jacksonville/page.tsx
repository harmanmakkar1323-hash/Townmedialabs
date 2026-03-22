import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jacksonville"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Jacksonville | TML Agency",
  description: "TML offers expert video editing services in Jacksonville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing jacksonville", "video editing agency jacksonville", "video editing company jacksonville"],
};

export default function VideoEditingInJacksonvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
