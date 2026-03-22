import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["glasgow"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Glasgow | TML Agency",
  description: "TML offers expert video editing services in Glasgow. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing glasgow", "video editing agency glasgow", "video editing company glasgow"],
};

export default function VideoEditingInGlasgowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
