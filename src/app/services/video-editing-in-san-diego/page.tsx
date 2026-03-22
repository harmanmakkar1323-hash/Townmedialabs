import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_diego"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in San Diego | TML Agency",
  description: "TML offers expert video editing services in San Diego. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing san diego", "video editing agency san diego", "video editing company san diego"],
};

export default function VideoEditingInSanDiegoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
