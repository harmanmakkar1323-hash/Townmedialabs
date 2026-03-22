import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boston"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Boston | TML Agency",
  description: "TML offers expert video editing services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing boston", "video editing agency boston", "video editing company boston"],
};

export default function VideoEditingInBostonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
