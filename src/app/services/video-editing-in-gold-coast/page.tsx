import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Gold Coast | TML Agency",
  description: "TML offers expert video editing services in Gold Coast. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing gold coast", "video editing agency gold coast", "video editing company gold coast"],
};

export default function VideoEditingInGoldCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
