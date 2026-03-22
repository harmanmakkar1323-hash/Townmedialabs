import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["townsville"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Townsville | TML Agency",
  description: "TML offers expert video editing services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing townsville", "video editing agency townsville", "video editing company townsville"],
};

export default function VideoEditingInTownsvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
