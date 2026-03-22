import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Wellington | TML Agency",
  description: "TML offers expert video editing services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["video editing wellington", "video editing agency wellington", "video editing wellington nz"],
};

export default function VideoEditingInWellingtonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
