import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cairns"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Cairns | TML Agency",
  description: "TML offers expert video editing services in Cairns. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing cairns", "video editing agency cairns", "video editing company cairns"],
};

export default function VideoEditingInCairnsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
