import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cardiff"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Cardiff | TML Agency",
  description: "TML offers expert video editing services in Cardiff. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing cardiff", "video editing agency cardiff", "video editing company cardiff"],
};

export default function VideoEditingInCardiffPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
