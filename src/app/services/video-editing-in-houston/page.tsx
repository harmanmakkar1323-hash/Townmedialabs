import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["houston"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Houston | TML Agency",
  description: "TML offers expert video editing services in Houston. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing houston", "video editing agency houston", "video editing company houston"],
};

export default function VideoEditingInHoustonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
