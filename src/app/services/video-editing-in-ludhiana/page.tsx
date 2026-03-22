import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ludhiana"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Ludhiana | TML Agency",
  description: "TML offers expert video editing services in Ludhiana. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing ludhiana", "video editing agency ludhiana", "video editing company ludhiana"],
};

export default function VideoEditingInLudhianaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
