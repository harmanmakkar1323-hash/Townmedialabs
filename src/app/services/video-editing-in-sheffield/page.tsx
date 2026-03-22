import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sheffield"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Sheffield | TML Agency",
  description: "TML offers expert video editing services in Sheffield. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing sheffield", "video editing agency sheffield", "video editing company sheffield"],
};

export default function VideoEditingInSheffieldPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
