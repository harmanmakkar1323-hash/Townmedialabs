import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Abu Dhabi | TML Agency",
  description: "TML offers expert video editing services in Abu Dhabi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing abu dhabi", "video editing agency abu dhabi", "video editing company abu dhabi"],
};

export default function VideoEditingInAbuDhabiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
