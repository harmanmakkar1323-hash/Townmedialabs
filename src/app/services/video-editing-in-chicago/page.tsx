import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chicago"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Chicago | TML Agency",
  description: "TML offers expert video editing services in Chicago. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing chicago", "video editing agency chicago", "video editing company chicago"],
};

export default function VideoEditingInChicagoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
