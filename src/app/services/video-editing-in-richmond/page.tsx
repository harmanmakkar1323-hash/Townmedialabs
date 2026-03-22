import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["richmond"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Richmond | TML Agency",
  description: "TML offers expert video editing services in Richmond. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing richmond", "video editing agency richmond", "video editing company richmond"],
};

export default function VideoEditingInRichmondPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
