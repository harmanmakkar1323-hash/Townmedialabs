import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["miami"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Miami | TML Agency",
  description: "TML offers expert video editing services in Miami. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing miami", "video editing agency miami", "video editing company miami"],
};

export default function VideoEditingInMiamiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
