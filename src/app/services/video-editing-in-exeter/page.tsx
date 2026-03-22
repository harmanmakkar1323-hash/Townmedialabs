import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["exeter"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Exeter | TML Agency",
  description: "TML offers expert video editing services in Exeter. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing exeter", "video editing agency exeter", "video editing company exeter"],
};

export default function VideoEditingInExeterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
