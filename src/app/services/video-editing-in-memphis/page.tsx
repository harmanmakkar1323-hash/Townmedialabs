import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["memphis"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Memphis | TML Agency",
  description: "TML offers expert video editing services in Memphis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing memphis", "video editing agency memphis", "video editing company memphis"],
};

export default function VideoEditingInMemphisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
