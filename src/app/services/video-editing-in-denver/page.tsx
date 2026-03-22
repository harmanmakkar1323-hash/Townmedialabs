import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["denver"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Denver | TML Agency",
  description: "TML offers expert video editing services in Denver. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing denver", "video editing agency denver", "video editing company denver"],
};

export default function VideoEditingInDenverPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
