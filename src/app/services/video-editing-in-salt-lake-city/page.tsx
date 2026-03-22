import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Salt Lake City | TML Agency",
  description: "TML offers expert video editing services in Salt Lake City. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing salt lake city", "video editing agency salt lake city", "video editing company salt lake city"],
};

export default function VideoEditingInSaltLakeCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
