import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leicester"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Leicester | TML Agency",
  description: "TML offers expert video editing services in Leicester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing leicester", "video editing agency leicester", "video editing company leicester"],
};

export default function VideoEditingInLeicesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
