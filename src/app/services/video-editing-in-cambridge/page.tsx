import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cambridge"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Cambridge | TML Agency",
  description: "TML offers expert video editing services in Cambridge. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing cambridge", "video editing agency cambridge", "video editing company cambridge"],
};

export default function VideoEditingInCambridgePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
