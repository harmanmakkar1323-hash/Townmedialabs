import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["omaha"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Omaha | TML Agency",
  description: "TML offers expert video editing services in Omaha. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing omaha", "video editing agency omaha", "video editing company omaha"],
};

export default function VideoEditingInOmahaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
