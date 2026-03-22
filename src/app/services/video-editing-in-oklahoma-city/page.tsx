import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["oklahoma_city"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Oklahoma City | TML Agency",
  description: "TML offers expert video editing services in Oklahoma City. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing oklahoma city", "video editing agency oklahoma city", "video editing company oklahoma city"],
};

export default function VideoEditingInOklahomaCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
