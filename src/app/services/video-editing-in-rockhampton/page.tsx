import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rockhampton"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Rockhampton | TML Agency",
  description: "TML offers expert video editing services in Rockhampton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing rockhampton", "video editing agency rockhampton", "video editing company rockhampton"],
};

export default function VideoEditingInRockhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
