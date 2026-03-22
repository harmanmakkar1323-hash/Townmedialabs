import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leeds"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Leeds | TML Agency",
  description: "TML offers expert video editing services in Leeds. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing leeds", "video editing agency leeds", "video editing company leeds"],
};

export default function VideoEditingInLeedsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
