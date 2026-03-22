import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fujairah"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Fujairah | TML Agency",
  description: "TML offers expert video editing services in Fujairah. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing fujairah", "video editing agency fujairah", "video editing company fujairah"],
};

export default function VideoEditingInFujairahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
