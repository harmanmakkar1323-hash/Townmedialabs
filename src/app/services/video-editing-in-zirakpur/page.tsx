import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Zirakpur | TML Agency",
  description: "TML offers expert video editing services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing zirakpur", "video editing agency zirakpur", "video editing company zirakpur"],
};

export default function VideoEditingInZirakpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
