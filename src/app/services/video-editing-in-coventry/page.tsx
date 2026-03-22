import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coventry"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Coventry | TML Agency",
  description: "TML offers expert video editing services in Coventry. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing coventry", "video editing agency coventry", "video editing company coventry"],
};

export default function VideoEditingInCoventryPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
