import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Delhi | TML Agency",
  description: "TML offers expert video editing services in Delhi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing delhi", "video editing agency delhi", "video editing company delhi"],
};

export default function VideoEditingInDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
