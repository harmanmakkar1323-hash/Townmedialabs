import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Kansas City | TML Agency",
  description: "TML offers expert video editing services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing kansas city", "video editing agency kansas city", "video editing company kansas city"],
};

export default function VideoEditingInKansasCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
