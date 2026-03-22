import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sharjah"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Sharjah | TML Agency",
  description: "TML offers expert video editing services in Sharjah. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing sharjah", "video editing agency sharjah", "video editing company sharjah"],
};

export default function VideoEditingInSharjahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
