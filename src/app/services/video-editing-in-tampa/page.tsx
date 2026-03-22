import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tampa"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Tampa | TML Agency",
  description: "TML offers expert video editing services in Tampa. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing tampa", "video editing agency tampa", "video editing company tampa"],
};

export default function VideoEditingInTampaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
